

// import React from "react";
// import { NavLink } from "react-router-dom";
// import { LayoutDashboard, Users, CalendarDays, MapPin } from "lucide-react";

// export default function Sidebar() {
//   const items = [
//     { path: "/overview", label: "Overview", icon: <LayoutDashboard className="h-4 w-4" strokeWidth={2.5} /> },
//     { path: "/users", label: "Users", icon: <Users className="h-4 w-4" strokeWidth={2.5} /> },
//     { path: "/events", label: "Events", icon: <CalendarDays className="h-4 w-4" strokeWidth={2.5} /> },
//     { path: "/locations", label: "Event Locations", icon: <MapPin className="h-4 w-4" strokeWidth={2.5} /> },
//   ];

//   return (
//     <div className="hidden md:flex md:w-64 md:flex-col p-3 bg-white border-r gap-2">
//       {items.map((it) => (
//         <NavLink
//           key={it.path}
//           to={it.path}
//           className={({ isActive }) =>
//             `w-full flex items-center gap-2 p-2 rounded-lg ${
//               isActive
//                 ? "bg-blue-100 text-blue-700"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`
//           }
//         >
//           {it.icon}
//           <span className="text-sm font-semibold">{it.label}</span>
//         </NavLink>
//       ))}
//     </div>
//   );
// }


import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CalendarDays,
  MapPin,
  Menu,
  X,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      path: "/overview",
      label: "Overview",
      icon: <LayoutDashboard className="h-5 w-5" strokeWidth={2.5} />,
    },
    {
      path: "/users",
      label: "Users",
      icon: <Users className="h-5 w-5" strokeWidth={2.5} />,
    },
    {
      path: "/events",
      label: "Events",
      icon: <CalendarDays className="h-5 w-5" strokeWidth={2.5} />,
    },
    {
      path: "/locations",
      label: "Event Locations",
      icon: <MapPin className="h-5 w-5" strokeWidth={2.5} />,
    },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col gap-2 p-4">
      {items.map((it) => (
        <NavLink
          key={it.path}
          to={it.path}
          onClick={() => setOpen(false)} // close sidebar on click (mobile)
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg p-3 font-semibold transition-all ${
              isActive
                ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
                : "text-gray-700 hover:bg-gray-100"
            }`
          }
        >
          {it.icon}
          <span>{it.label}</span>
        </NavLink>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-40 md:hidden bg-purple-600 text-white p-3 rounded-full shadow-lg"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Overlay Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar Panel */}
          <div className="w-3/4 max-w-xs bg-white shadow-xl h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-bold text-lg text-purple-600">Menu</h2>
              {/* X button without extra styles */}
              <X
                onClick={() => setOpen(false)}
                className="h-6 w-6 cursor-pointer text-gray-800"
              />
            </div>
            <SidebarContent />
          </div>
          {/* Dark Overlay */}
          <div
            onClick={() => setOpen(false)}
            className="flex-1 bg-black/50 backdrop-blur-sm"
          />
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:w-64 md:flex-col border-r bg-white">
        <SidebarContent />
      </div>
    </>
  );
}
