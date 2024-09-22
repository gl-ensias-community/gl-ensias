const nodemailer = require("nodemailer");
require("dotenv/config");

const email = process.env.GL_EMAIL;
const password = process.env.GL_PASSWORD;

const transport = nodemailer.createTransport({
  port: 587,
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
    user: email,
    pass: password,
  },
  secure: true,
});

exports.sendContactEmail = async ({ name, to, message }) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #101027; color: #ffffff; border-radius: 8px;">
        
        <p>Hi ${name},</p>
        <br />
        <p>Thanks for contacting us! Your message has been received, and we will get back to you as soon as possible.</p>
        <br />
        <p>Best regards,</p>
        <p>GL ENSIAS Community</p>
        <br />
        <hr style="border: 1px solid rgba(255, 255, 255, 0.1)" />
        <p style="text-align: center; font-size: 12px">Follow us on social media</p>
        <div style="text-align: center">
        <a
          target="_blank"
          href="https://www.facebook.com/ensiasai"
          style="margin-right: 10px; text-decoration: none"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/9214e0/facebook.png"
            alt="facebook"
          />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/ensias_ai_club/"
          style="margin-right: 10px; text-decoration: none"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/9214e0/instagram.png"
            alt="instagram"
          />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/company/ensiasai/"
          style="margin-right: 10px; text-decoration: none"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/9214e0/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          target="_blank"
          href="https://github.com/ensias-ai-club/"
          style="margin-left: 10px; text-decoration: none"
        >
          <img
            src="https://img.icons8.com/ios-glyphs/30/9214e0/github.png"
            alt="github"
          />
        </a>
        </div>
        <p style="text-align: center; font-size: 12px">© 2024 ENSIAS AI Club</p>
        </div>
      </body>
    </html>`;
  
    const mailOptionsToOwner = {
      to: email,
      subject: `Contact Form Submission from ${name} <${to}>`,
      text: message,
    };
  
    const mailOptionsToUser = {
      from: email,
      to: to,
      subject: "Thanks for contacting The GL ENSIAS Community!",
      html: html,
    };
  
    return Promise.all([
      transport.sendMail(mailOptionsToOwner),
      transport.sendMail(mailOptionsToUser),
    ]);
  };