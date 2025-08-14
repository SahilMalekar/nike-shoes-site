export const adminAuth = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ msg: "Unauthorized: No user found" });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ msg: "Forbidden: Admins only" });
    }

    next(); // user is admin → continue to route
  } catch (err) {
    res.status(500).json({ msg: "Server error in admin auth" });
  }
};
