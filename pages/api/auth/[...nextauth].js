import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { dbConnect } from "../../../utils";
import User from "../../../models/userModel";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        await dbConnect();

        console.log("We in here");

        const user = await User.findOne({ email: credentials.email });

        if (!user) {
          throw new Error("No user found.");
        }

        if (await bcrypt.compare(credentials.password, user.password)) {
          return user;
        } else {
          throw new Error("Invalid email or password.");
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);
