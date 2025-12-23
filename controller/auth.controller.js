import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/auth.model.js";

export const register = async (req, res) => {
  try {
    const { phone, password, role, name } = req.body;

    if (!phone || !password || !role) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      phone,
      password: hashedPassword,
      role,
      name,
      isActive: role === "ADMIN",
    });

    res.json({
      message: "User registered",
      userId: user._id,
    });
  } catch (err) {
    res.status(500).json({ error: "Registration failed" });
  }
};

export const login = async (req, res) => {
  try {
    const { phone, password } = req.body;

    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      token,
      role: user.role,
      userId: user._id,
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed" });
  }
};
