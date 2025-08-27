import { useState } from "react";
import { account } from "../appwrite/config";
import { ID } from "appwrite";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Step 1: Create new user
      await account.create({
        userId: ID.unique(),
        email,
        password,
        name,
      });

      // Step 2: Login with email/password
      await account.createEmailPasswordSession({ email, password });

      // Step 3: Fetch user info
      const user = await account.get();
      setUser(user);

      navigate("/overview");
    } catch (err) {
      console.error(err);
      alert("Signup failed: " + err.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSignup}
        className="bg-white p-6 border rounded-lg shadow-md w-80"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Create Account</h2>

        <input
          type="text"
          placeholder="Full Name"
          className="border p-2 mb-2 w-full rounded"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          className="border p-2 mb-2 w-full rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border p-2 mb-4 w-full rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
        >
          Sign Up
        </button>

        <p className="text-sm mt-3 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
