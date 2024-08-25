export function flattenAttributes(data: any): any {
  // Check if data is a plain object; return as is if not
  if (
    typeof data !== "object" ||
    data === null ||
    data instanceof Date ||
    typeof data === "function"
  ) {
    return data;
  }

  // If data is an array, apply flattenAttributes to each element and return as array
  if (Array.isArray(data)) {
    return data.map((item) => flattenAttributes(item));
  }

  // Initialize an object with an index signature for the flattened structure
  let flattened: { [key: string]: any } = {};

  // Iterate over each key in the object
  for (let key in data) {
    // Skip inherited properties from the prototype chain
    if (!data.hasOwnProperty(key)) continue;

    // If the key is 'attributes' or 'data', and its value is an object, merge their contents
    if (
      (key === "attributes" || key === "data") &&
      typeof data[key] === "object" &&
      !Array.isArray(data[key])
    ) {
      Object.assign(flattened, flattenAttributes(data[key]));
    } else {
      // For other keys, copy the value, applying flattenAttributes if it's an object
      flattened[key] = flattenAttributes(data[key]);
    }
  }

  return flattened;
}

export async function getData(path: string, query: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = new URL(path, baseUrl);
  url.search = query;

  try {
    const response = await fetch(url.href, { next: { revalidate: 0 } });
    // const response = await fetch(url.href);
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    // const flattenedData = data;
    return flattenedData;
  } catch (error) {
    console.error(error);
  }
}
