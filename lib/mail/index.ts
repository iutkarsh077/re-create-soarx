"use server";
import nodemailer from "nodemailer";
import Handlebars from "handlebars";
import { activationTemplate } from "../emailTemplates";
import { revalidatePath } from "next/cache";
interface SendMailProps {
  to: string;
  subject: string;
  body: any;
}

export const sendMail = async ({ to, subject, body }: SendMailProps) => {
  const { SMTP_EMAIL, SMTP_PASS } = process.env;

  if (!SMTP_EMAIL || !SMTP_PASS) {
    console.log('SMTP_EMAIL or SMTP_PASS environment variables are not set');
    throw new Error('SMTP_EMAIL or SMTP_PASS environment variables are not set');
  }

  const transport = nodemailer.createTransport({
    host: 'smtp.mailgun.org',  // Replace with your SMTP server
    port: 587,
    secure: false,  // Use TLS
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASS,
    },
  });

  revalidatePath("/");

    await transport.sendMail({
      from: "SoarX@soarx.tech", // Sender address
      to,
      subject,
      html: body,
    }).then((info) => {
      // console.log("In index file for sending mail")
      return { status: 200, message: "Email sent successfully!" };
    }
    )
    .catch((error) => {
      console.log(error);
      throw new Error("Email sending failed!");
    }
    );
  }




export const compileActivationTemplate = async (name: string, url: string) => {
  const template = Handlebars.compile(activationTemplate);
  const htmlBody = template({
    name,
    url,
  });
  return htmlBody;
};
export const compileResetPasswordTemplate =  async (name: string, url: string) => {
  const template = Handlebars.compile(activationTemplate);
  const htmlBody = template({
    name,
    url,
  });
  return htmlBody;
};
