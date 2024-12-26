import Role from "../../models/role.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import User from "../../models/user.model.js";

export const allowAllRoles = asyncHandler(async (req, _, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findByPk(decodedToken?.id, {
      attributes: { exclude: ["Password", "RefreshToken"] },
    });

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    const userRoleMapping = await Role.findOne({
      where: { id: user.roleId },
    });

    if (!userRoleMapping) {
      throw new ApiError(401, "Role not assigned to the user");
    }

    const userRole = await Role.findByPk(user.roleId);

    // Attach user and role info to the request
    req.user = user;
    req.userRole = userRole.Name;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Unauthorized request");
  }
});
