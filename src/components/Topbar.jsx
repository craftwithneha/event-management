import React from "react";
import { User } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between bg-white p-4 border-b">
      <div className="text-xl font-bold  text-purple-700">EventHub</div>
      <div className="flex items-center gap-2">
        <User className="h-6 w-6 text-blue-300" />
      </div>
    </div>

  

  );
}
