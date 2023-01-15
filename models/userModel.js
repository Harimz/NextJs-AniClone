import mongoose from "mongoose";
import bcrypt, { genSalt } from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const user = this;

  if (!user.isModified("password")) {
    next();
  }

  const salt = await genSalt(10);

  user.password = await bcrypt.hash(user.password, salt);
});

export default mongoose.models.User || mongoose.model("User", userSchema);
