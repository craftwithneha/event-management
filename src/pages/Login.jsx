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
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <p className="text-red-600">{error}</p>}
          <div>
            <Label>Email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button onClick={handleLogin} className="w-full">Login</Button>
          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
