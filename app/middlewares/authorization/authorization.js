const jwt = require('jsonwebtoken');
const userRepository = require("../../repositories/user.repository");

module.exports = async (req, res, next) => {
  try {
    const bearerToken = req.headers.authorization;
    const token = bearerToken.split("Bearer ")[1];
    const tokenPayload = jwt.verify(token, process.env.SECRET_KEY);

    const user = await userRepository.findById(tokenPayload.id);
    const emailUser = await userRepository.findByEmail(tokenPayload.email);

    if (!user && !emailUser) {
      throw {
        name: "Unauthorized",
      };
    }else{
      req.user = user;
    }

    next();
  } catch (error) {
    res.status(401).json({
      status: "FAILED",
      message: "Unauthorized",
    });
  }
}