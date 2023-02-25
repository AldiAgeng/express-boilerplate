const userRepository = require("../repositories/user.repository");
const { hashPassword, checkPassword, createToken } = require("../utils");

module.exports = {
  async register(requestBody) {
    const { password } = requestBody;
    const hashedPassword = await hashPassword(password);

    const user = {
      email: requestBody.email,
      name: requestBody.name,
      password: hashedPassword,
    };

    return userRepository.create(user);
  },
  async login(requestBody) {
    const { email, password } = requestBody;
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw {
        name: "FailedLogin",
      }
    }

    const isPasswordCorrect = await checkPassword(password, user.password);

    if (!isPasswordCorrect) {
      throw {
        name: "FailedLogin",
      }
    }

    const token = createToken({
      id: user.id,
      email: user.email,
    })

    return token;
  }
}