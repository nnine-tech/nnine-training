import Role from "../../models/role.model.js";
import User from "../../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

export const allowManagerOnly = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findByPk(decodedToken?.id, {
      attributes: { exclude: ["password", "refreshToken"] },
    });

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    const userRole = await Role.findByPk(user.roleId);

    if (userRole.name !== "manager") {
      throw new ApiError(403, "Access denied: Only managers are allowed");
    }
    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Unauthorized request");
  }
});
