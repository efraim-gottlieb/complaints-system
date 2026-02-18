import jwt from "jsonwebtoken";

export async function auth(req, res, next) {
  try {
    const secretKey = "secretKey";
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, secretKey);
    next();
  } catch (err) {
    console.error("Token verification failed:", err.message);
    res.status(401).send("not valid");
  }
}
