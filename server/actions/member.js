const db = require("../db/index");
const { member } = require("../db/schemas/member");

const createMember = async (memberData) => {
  const { user_id, name, year } = memberData;
  console.log(memberData);
  try {
    await db.insert(member).values({ user_id, name, year });
    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: "Something went wrong" };
  }
};

const getMember = async () => {
  try {
    const result = await db.select().from(member);
    return result;
  } catch (error) {
    return "An error has occurred: " + error;
  }
};

module.exports = {
  createMember,
  getMember
};