import "dotenv/config";

export const JWT_SECRET = process.env["JWT_SECRET"];

export const checkIsInRole = (role) => (req, res, next) => {
  if (req.user?.role !== role) {
    return res.json({ error: `You are not ${role}` });
  }

  return next();
};
