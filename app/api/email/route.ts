import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message, phone, subject } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD?.trim() || "",
    },
  });

  console.log(process.env.MY_EMAIL, process.env.MY_PASSWORD);

  // Check if environment variables are set
  if (!process.env.MY_EMAIL || !process.env.MY_PASSWORD) {
    console.error("Missing environment variables: MY_EMAIL or MY_PASSWORD");
    return NextResponse.json({ error: "Email configuration error" }, { status: 500 });
  }

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    // to: process.env.MY_EMAIL,
    to: "muniz@jorgemuniz.com.br, cristianmachadoavila@gmail.com",
    // cc: "cristianmachadoavila@gmail.com",
    replyTo: email,
    subject: `Site Muniz Branding - (${name}) ${email} - ${subject}`,
    text: `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nAssunto: ${subject}\n\nMensagem:\n${message}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nova mensagem do site</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #A90034; color: white; padding: 20px; text-align: center; margin-bottom: 30px; }
          .content { background-color: #f9f9f9; padding: 25px; border-radius: 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #A90034; display: inline-block; width: 80px; }
          .value { color: #333; }
          .message-box { background-color: white; padding: 15px; border-left: 4px solid #A90034; margin-top: 20px; }
          .footer { text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Nova Mensagem do Site</h1>
          <p>Muniz Branding</p>
        </div>
        
        <div class="content">
          <div class="field">
            <span class="label">Nome:</span>
            <span class="value">${name}</span>
          </div>
          
          <div class="field">
            <span class="label">Email:</span>
            <span class="value"><a href="mailto:${email}">${email}</a></span>
          </div>
          
          <div class="field">
            <span class="label">Telefone:</span>
            <span class="value">${phone}</span>
          </div>
          
          <div class="field">
            <span class="label">Assunto:</span>
            <span class="value">${subject}</span>
          </div>
          
          <div class="message-box">
            <strong>Mensagem:</strong><br>
            ${message.replace(/\n/g, "<br>")}
          </div>
        </div>
        
        <div class="footer">
          <p>Esta mensagem foi enviada através do formulário de contato do site Muniz Branding.</p>
          <p>Para responder, clique em "Responder" no seu cliente de email.</p>
        </div>
      </body>
      </html>
    `,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (err) {
          console.error("Email sending error:", err);
          reject(err.message);
        } else {
          console.log("Email sent successfully");
          resolve("Email sent");
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Mensagem enviada com sucesso!" });
  } catch (err) {
    console.error("Final error:", err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
