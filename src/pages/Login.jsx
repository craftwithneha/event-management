import { useState } from "react";
import { account } from "../services/appwrite";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setError("");
      await account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      navigate("/"); // redirect to admin panel
    } catch (err) {
      console.error(err);
      setError(err.message || "Login failed");
    }
  };

  return (
    // <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 p-4">
    //   <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white">
    //     <CardHeader className="text-center">
    //       <CardTitle className="text-2xl font-bold text-purple-700">
    //         Welcome Back 👋
    //       </CardTitle>
    //       <p className="text-gray-500 text-sm">Login to continue</p>
    //     </CardHeader>
    //     <CardContent className="space-y-5">
    //       {error && <p className="text-red-600 text-center">{error}</p>}

    //       {/* Email */}
    //       <div>
    //         <Label className="text-gray-700">Email</Label>
    //         <Input
    //           type="email"
    //           placeholder="Enter your email"
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //           className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
    //         />
    //       </div>

    //       {/* Password */}
    //       <div>
    //         <Label className="text-gray-700">Password</Label>
    //         <Input
    //           type="password"
    //           placeholder="Enter your password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
    //         />
    //       </div>

    //       {/* Login Button */}
    //       <Button
    //         onClick={handleLogin}
    //         className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-all duration-300"
    //       >
    //         Login
    //       </Button>

    //       {/* Signup Redirect */}
    //       <p className="text-sm text-center text-gray-600">
    //         Don’t have an account?{" "}
    //         <Link
    //           to="/signup"
    //           className="text-purple-600 font-medium hover:underline"
    //         >
    //           Sign up
    //         </Link>
    //       </p>
    //     </CardContent>
    //   </Card>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#E5E5E5] via-[#E5E5E5] to-[#14213D] p-4">
  <Card className="w-full max-w-md shadow-xl rounded-2xl bg-white">
    <CardHeader className="text-center">
      <CardTitle className="text-2xl font-bold text-[#14213D]">
        Welcome Back 👋
      </CardTitle>
      <p className="text-gray-500 text-sm">Login to continue</p>
    </CardHeader>
    <CardContent className="space-y-5">
      {error && <p className="text-red-600 text-center">{error}</p>}

      {/* Email */}
      <div>
        <Label className="text-[#14213D]">Email</Label>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 border-gray-300 focus:border-[#14213D] focus:ring-[#14213D]"
        />
      </div>

      {/* Password */}
      <div>
        <Label className="text-[#14213D]">Password</Label>
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 border-gray-300 focus:border-[#14213D] focus:ring-[#14213D]"
        />
      </div>

      {/* Login Button */}
      <Button
        onClick={handleLogin}
        className="w-full bg-[#14213D] hover:bg-[#0f192f] text-white py-2 rounded-lg transition-all duration-300"
      >
        Login
      </Button>

      {/* Signup Redirect */}
      <p className="text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-[#14213D] font-medium hover:underline"
        >
          Sign up
        </Link>
      </p>
    </CardContent>
  </Card>
</div>
  );
}