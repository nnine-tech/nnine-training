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
      attributes: { exclude: ["Password", "RefreshToken"] },
    });

    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }

    const userRoleMapping = await UserRole.findOne({
      where: { UserId: user.id },
    });

    if (!userRoleMapping) {
      throw new ApiError(401, "Role not assigned to the user");
    }

    const userRole = await Role.findByPk(userRoleMapping.RoleId);

    if (userRole.Name !== "manager") {
      throw new ApiError(403, "Access denied: Only managers are allowed");
    }

    // Attach user and role info to the request
    req.user = user;
    req.userRole = userRole.Name;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Unauthorized request");
  }
});
