import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message, phone, subject } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    // to: process.env.MY_EMAIL,
    to: "muniz@jorgemuniz.com.br",
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Site Muniz Branding - (${name}) ${email} - ${subject}`,
    text: `${phone} - ${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Mensagem enviada com sucesso!" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
