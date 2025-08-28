import React from "react";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { account } from "../services/appwrite";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // Delete the current session
      await account.deleteSession("current");
      navigate("/login"); // redirect to login page
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 border-b shadow-sm">
      <div className="text-xl font-bold text-purple-700">EventHub</div>
      <div className="flex items-center gap-4">
        <User className="h-6 w-6 text-blue-300" />
        <Button variant="outline" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
}
