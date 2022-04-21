import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";
import { JWT_SECRET } from "../util/secrets.js";

import UserService from "../services/user.js";

export const passportStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (jwt_payload, done) => {
    const userEmail = jwt_payload.email;
    const foundUser = await UserService.findUserByEmail(userEmail);
    done(null, foundUser);
  }
);