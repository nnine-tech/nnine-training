import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { getUserByEmail, getUserById } from "../services/user.service.js";
import isPasswordCorrect from "../services/password.service.js";
import { generateAccessAndRefreshToken } from "../services/token.service.js";
const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    throw new ApiError(400, "User not found");
  }
  const isMatch = await isPasswordCorrect(user.password, password);
  if (!isMatch) {
    throw new ApiError(400, "Invalid password");
  }
  const tokens = await generateAccessAndRefreshToken(user);
  user.password = undefined;
  res.cookie("refreshToken", tokens.refreshToken, {
    httpOnly: true,
  });
  res.json(
    new ApiResponse(200, "Login successful", {
      user,
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
    })
  );
});

const logout = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const user = await getUserById(userId);
  user.refreshToken = null;
  await user.save();
  res.clearCookie("refreshToken");
  res.json(new ApiResponse(200, "Logout successful"));
});

export { login, logout };
