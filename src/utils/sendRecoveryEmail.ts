import nodemailer from "nodemailer";

export function sendRecoveryEmail(email: string, code: string) {
  const transporter = nodemailer.createTransport({
    service: "Outlook",
    auth: {
      user: "gustavohenri316@outlook.com",
      pass: "Bara98ks@",
    },
  });

  const mailOptions = {
    from: "gustavohenri316@outlook.com",
    to: email,
    subject: "Password Recovery Code",
    text: `Your recovery code is: ${code}`,
  };

  transporter.sendMail(mailOptions, (error: any, info: any) => {
    if (error) {
      console.error("Error sending email: " + error);
    } else {
      console.error("Email sent: " + info.response);
    }
  });
}
