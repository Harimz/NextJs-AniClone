import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "../../../utils";
import User from "../../../models/userModel";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        await dbConnect();

        const user = User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found.");
        }

        if (await user.comparePasswords(credentials.password)) {
          return user;
        } else {
          throw new Error("Invalid email or password.");
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
