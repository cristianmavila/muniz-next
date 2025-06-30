import { z } from "zod";
import { formSchema } from "@/components/Form/Form";

export async function sendEmail(values: z.infer<typeof formSchema>) {
  const apiEndpoint = "/api/email";

  try {
    const res = await fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      return { success: true, data };
    } else {
      return { success: false, error: data.error || "Erro ao enviar mensagem" };
    }
  } catch (err) {
    return { success: false, error: "Erro de conexão" };
  }
}
