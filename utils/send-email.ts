import { z } from "zod";
import { formSchema } from "@/components/Form/Form";

export async function sendEmail(values: z.infer<typeof formSchema>) {
  const apiEndpoint = "/api/email";

  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(values),
    });

    if (res.ok) {
      return res.json();
    }
  } catch (err) {
    return err;
  }

  //   fetch(apiEndpoint, {
  //     method: "POST",
  //     body: JSON.stringify(values),
  //   })
  //     .then((res) => res.json())
  //     .then((response) => {
  //       return response;
  //     })
  //     .catch((err) => {
  //       return err;
  //     });
}
