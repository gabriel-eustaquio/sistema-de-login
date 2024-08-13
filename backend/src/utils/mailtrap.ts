import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: process.env.HOST_MAILTRAP,
  auth: {
    user: process.env.USERNAME_MAILTRAP,
    pass: process.env.PASSWORD_MAILTRAP
  }
})

export default async function sendMail(email: string, token: string) {
  await transport.sendMail({
    from: "sistema-de-login@gmail.com",
    to: `${email}`,
    subject: "Redefinição de senha",
    text: `Token: ${token}`,
    html: `<h1>Token: ${token}</h1>`
  })
}