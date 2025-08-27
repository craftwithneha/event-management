import { useState } from "react";
import { account } from "../services/appwrite";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      setError("");
      await account.create({
  userId: "unique()", // auto-generate user ID
  email: email,
  password: password,
  name: name
});

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Card className="w-96">
        <CardHeader>
          <CardTitle>Create Account</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && <p className="text-red-600">{error}</p>}
          <div>
            <Label>Name</Label>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <Button onClick={handleSignup} className="w-full">Signup</Button>
          <p className="text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
