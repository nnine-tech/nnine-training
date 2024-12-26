import jwt from "jsonwebtoken";
import sequelize from "../../config/database.js";

const generateAccessAndRefreshToken = async (
  userData,
  keepMeLoggedIn = false
) => {
  try {
    const accessToken = jwt.sign(
      {
        id: userData.id,
        email: userData.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: keepMeLoggedIn ? "365d" : "15m",
      }
    );

    const refreshToken = jwt.sign(
      {
        id: userData.id,
        email: userData.email,
      },
      process.env.REFRESH_TOKEN_SECRET
    );

    await sequelize.models.user.update(
      { refreshToken },
      { where: { id: userData.id } }
    );

    return { accessToken, refreshToken };
  } catch (error) {
    throw new Error(error.message);
  }
};

export { generateAccessAndRefreshToken };
