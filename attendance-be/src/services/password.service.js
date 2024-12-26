import bcrypt from "bcrypt";

/**
 * @param {string} dbPass - The hashed password from the database
 * @param {string} userPass - The plain text password provided by the user
 */
const isPasswordCorrect = async (dbPass, userPass) => {
  return await bcrypt.compare(userPass, dbPass);
};

export default isPasswordCorrect;
