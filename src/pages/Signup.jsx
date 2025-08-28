import { useState } from "react";
import { account } from "../services/appwrite";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner"; 

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      setError("");

      // agar session already active hai toh delete kar do
      try {
        await account.deleteSession("current");
      } catch {
        // ignore agar session nahi hai
      }

      // account create
      await account.create("unique()", email, password, name);

      // ✅ dark toast instead of alert
      toast.success("Signup successful! Please login to continue.", {
        style: {
          background: "#14213D",
          color: "#fff",
          fontWeight: "500",
          borderRadius: "8px",
          padding: "12px 16px",
        },
      });

      // navigate to login page
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#E5E5E5] via-[#E5E5E5] to-[#14213D] px-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border-none bg-white/95 backdrop-blur-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[#14213D]">
            Create Account
          </CardTitle>
          <p className="text-gray-500 text-sm mt-1">
            Join us and get started today
          </p>
        </CardHeader>
        <CardContent className="space-y-5">
          {error && (
            <p className="text-red-600 text-sm text-center font-medium">
              {error}
            </p>
          )}

          <div>
            <Label className="text-[#14213D]">Name</Label>
            <Input
              className="mt-1 border-gray-300 focus:border-[#14213D] focus:ring-[#14213D]"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <Label className="text-[#14213D]">Email</Label>
            <Input
              type="email"
              className="mt-1 border-gray-300 focus:border-[#14213D] focus:ring-[#14213D]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label className="text-[#14213D]">Password</Label>
            <Input
              type="password"
              className="mt-1 border-gray-300 focus:border-[#14213D] focus:ring-[#14213D]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            onClick={handleSignup}
            className="w-full bg-[#14213D] hover:bg-[#0f192f] text-white font-semibold py-2 rounded-lg shadow-lg transition-all"
          >
            Sign Up
          </Button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#14213D] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
