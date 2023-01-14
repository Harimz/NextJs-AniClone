import Wrapper, { Exception } from "next-api-wrapper";
import { dbConnect } from "../../../utils";
import User from "../../../models/userModel";

export default Wrapper({
  POST: async (req) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      throw new Exception("Valid inputs required.", 422);
    }

    await dbConnect();

    return "Success";
  },
});
