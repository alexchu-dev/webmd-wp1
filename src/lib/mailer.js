import nodemailer from "nodemailer"

export const sendMail = async ({ email, subject, html }) => {
  // console.log(email, subject, text)
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    })

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: subject,
      html: html,
    }

    const mailResponse = transporter.sendMail(mailOptions)
    return mailResponse
  } catch (error) {
    console.log(error)
    return error
  }
}
