// import { useState } from "react";
// import { account } from "../services/appwrite";
// import { useNavigate, Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       setError("");
//       await account.create({
//   userId: "unique()", // auto-generate user ID
//   email: email,
//   password: password,
//   name: name
// });

//       alert("Signup successful! Please login.");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       <Card className="w-96">
//         <CardHeader>
//           <CardTitle>Create Account</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           {error && <p className="text-red-600">{error}</p>}
//           <div>
//             <Label>Name</Label>
//             <Input value={name} onChange={(e) => setName(e.target.value)} />
//           </div>
//           <div>
//             <Label>Email</Label>
//             <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>
//           <div>
//             <Label>Password</Label>
//             <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           </div>
//           <Button onClick={handleSignup} className="w-full">Signup</Button>
//           <p className="text-sm text-center">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-600 hover:underline">
//               Login
//             </Link>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }



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
        userId: "unique()",
        email: email,
        password: password,
        name: name,
      });

      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 px-4">
      <Card className="w-full max-w-md shadow-2xl rounded-2xl border-none bg-white/95 backdrop-blur-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-purple-700">
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
            <Label className="text-gray-700">Name</Label>
            <Input
              className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <Label className="text-gray-700">Email</Label>
            <Input
              type="email"
              className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <Label className="text-gray-700">Password</Label>
            <Input
              type="password"
              className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button
            onClick={handleSignup}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg shadow-lg transition-all"
          >
            Sign Up
          </Button>

          <p className="text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}