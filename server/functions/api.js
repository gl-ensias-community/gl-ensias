const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const serverless = require("serverless-http");
const { sendContactEmail } = require("../actions/mail");
const { getMessages, sendMessage } = require("../actions/contact");
require("dotenv/config");

const app = express();
const port = process.env.PORT || 5000;
const origin = process.env.ORIGIN || "http://localhost:3000";
const baseUrl = '/.netlify/functions/api/v1';
const corsOptions = {
  origin: origin,
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(corsOptions));

app.get(`${baseUrl}/`, (req, res) => {
  res.status(200).json({ message: "Welcome to GL ENSIAS API" });
});

app.post(`${baseUrl}/contact/new`, async (req, res) => {
  const contactData = req.body;
  name = contactData.name;
  to = contactData.email;
  message = contactData.message;
  if (!name || !to || !message) {
    res.status(400).json({ message: "All fields are required" });
    res.end();
  }
  try {
    const result = await sendMessage(contactData);
    if (result.errorMessage) {
      res.status(500).json({ message: result.errorMessage });
    } else {
      try {
        const response = await sendContactEmail({ name, to, message });
        if (response.error) {
          res
            .status(500)
            .json({ message: "An error has occurred", error: response.error });
        } else {
          res.status(200).json({ message: "Message sent successfully" });
        }
      } catch (error) {
        res.status(500).json({ message: "An error has occurred", error });
      }
    }
  } catch (error) {
    res.status(500).json({ message: "An error has occurred", error });
  }
});

app.get(`${baseUrl}/contact/list`, async (req, res) => {
  try {
    const messages = await getMessages();
    if (messages.error) {
      res.status(500).json({ message: messages.error });
    } else {
      res.status(200).json({ messages });
    }
  } catch (error) {
    res.status(500).json({ message: "An error has occurred", error });
  }
});

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const handler = serverless(app);

module.exports.handler = async (event, context) => {
  return await handler(event, context);
};