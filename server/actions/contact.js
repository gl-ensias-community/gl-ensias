const db = require("../db/index");
const { contact } = require("../db/schemas/contact");

const sendMessage = async (contactData) => {
  const { name, email, message } = contactData;
  try {
    await db.insert(contact).values({ name, email, message });
    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: "Something went wrong" };
  }
};

const getMessages = async () => {
  try {
    const messages = await db.select().from(contact);
    return messages;
  } catch (error) {
    return "An error has occurred: " + error;
  }
};

module.exports = {
  sendMessage,
  getMessages
};