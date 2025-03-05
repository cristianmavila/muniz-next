"use client";

import Input from "@/components/core/Input";
import { Textarea } from "@/components/core/Textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/core/Form";
import { sendEmail } from "@/utils/send-email";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Precisa ter no mínimo 2 caracteres",
    })
    .max(50),
  email: z
    .string()
    .min(2, {
      message: "Precisa ter no mínimo 2 caracteres",
    })
    .max(100)
    .email({ message: "Digite um e-mail válido" }),
  phone: z
    .string()
    .min(2, {
      message: "Precisa ter no mínimo 2 caracteres",
    })
    .max(20),
  subject: z
    .string()
    .min(2, {
      message: "Precisa ter no mínimo 2 caracteres",
    })
    .max(100),
  message: z.string().min(2, {
    message: "Precisa ter no mínimo 2 caracteres",
  }),
});

const FormContact = () => {
  const [formMessage, setFormMessage] = useState<string>("");
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await sendEmail(values);
      if (res.message) {
        setFormMessage(res.message);
        form.reset();
      }
    } catch (err) {
      setFormMessage(`${err}`);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 max-w-[600px] mx-auto w-full flex flex-col justify-center items-center my-5"
      >
        {formMessage && (
          <div className="rounded-md border-2 border-red-400 p-2 text-base text-red-400">
            {formMessage}
          </div>
        )}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel hidden>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel hidden>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="E-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel hidden>Telefone</FormLabel>
              <FormControl>
                <Input placeholder="Telefone" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel hidden>Assunto</FormLabel>
              <FormControl>
                <Input placeholder="Assunto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel hidden>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Mensagem" {...field} className="min-h-[150px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <button
          type="submit"
          className="bg-brand text-white tracking-wider py-2 px-7 font-light text-lg !mt-14"
        >
          Enviar
        </button>
      </form>
    </Form>
  );
};

export default FormContact;
