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
   <div className="flex items-center justify-between bg-[#14213D] p-4 border-b border-[#0f192f] shadow-sm">
  <div className="text-xl font-bold text-white">EventHub</div>
  <div className="flex items-center gap-4">
    <Button
      variant="outline"
      size="sm"
      onClick={handleLogout}
      className="border-white text-gray-500  cursor-pointer hover:bg-white hover:text-[#14213D]"
    >
      Logout
    </Button>
  </div>
</div>

  );
}

