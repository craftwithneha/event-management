// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Users,
//   CalendarDays,
//   MapPin,
//   Menu,
//   X,
// } from "lucide-react";
// import { Button } from "./ui/button";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);

//   const items = [
//     {
//       path: "/overview",
//       label: "Overview",
//       icon: <LayoutDashboard className="h-5 w-5" strokeWidth={2.5} />,
//     },
//     {
//       path: "/users",
//       label: "Users",
//       icon: <Users className="h-5 w-5" strokeWidth={2.5} />,
//     },
//     {
//       path: "/events",
//       label: "Events",
//       icon: <CalendarDays className="h-5 w-5" strokeWidth={2.5} />,
//     },
//     {
//       path: "/locations",
//       label: "Event Locations",
//       icon: <MapPin className="h-5 w-5" strokeWidth={2.5} />,
//     },
//   ];

//   const SidebarContent = () => (
//     <div className="flex flex-col gap-2 p-4">
//       {items.map((it) => (
//         <NavLink
//           key={it.path}
//           to={it.path}
//           onClick={() => setOpen(false)} // close sidebar on click (mobile)
//           className={({ isActive }) =>
//             `flex items-center gap-3 rounded-lg p-3 font-semibold transition-all ${
//               isActive
//                 ? "bg-gradient-to-r from-blue-950 to-gray-400 text-white shadow-md"
//                 : "text-gray-700 hover:bg-gray-100"
//             }`
//           }
//         >
//           {it.icon}
//           <span>{it.label}</span>
//         </NavLink>
//       ))}
//     </div>
//   );

//   return (
//     <>
//   {/* Mobile Toggle Button */}
//   <Button
//     onClick={() => setOpen(true)}
//     className="fixed bottom-4 left-4 z-40 md:hidden bg-[#14213D] text-white p-3 rounded-full shadow-lg"
//   >
//     <Menu className="h-6 w-6" />
//   </Button>

//   {/* Mobile Overlay Sidebar */}
//   {open && (
//     <div className="fixed inset-0 z-50 flex">
//       {/* Sidebar Panel */}
//       <div className="w-3/4 max-w-xs bg-[#14213D] text-gray-500 shadow-xl h-full flex flex-col">
//         <div className="flex items-center justify-between p-4 border-b border-white/20">
//           <h2 className="font-bold text-lg">Menu</h2>
//           {/* X button */}
//           <X
//             onClick={() => setOpen(false)}
//             className="h-6 w-6 cursor-pointer text-white"
//           />
//         </div>
//         <SidebarContent />
//       </div>
//       {/* Dark Overlay */}
//       <div
//         onClick={() => setOpen(false)}
//         className="flex-1 bg-black/50 backdrop-blur-sm"
//       />
//     </div>
//   )}

//   {/* Desktop Sidebar */}
//   <div className="hidden md:flex md:w-64 md:flex-col border-r border-[#0f192f] bg-[#14213D] text-white">
//     <SidebarContent />
//   </div>
// </>

//   );
// }



// achi hai bs not ok

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Users,
//   CalendarDays,
//   MapPin,
//   Menu,
//   X,
// } from "lucide-react";
// import { Button } from "./ui/button";
// import { ScrollArea } from "./ui/scroll-area";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);

//   const items = [
//     { path: "/overview", label: "Overview", icon: <LayoutDashboard className="h-5 w-5" /> },
//     { path: "/users", label: "Users", icon: <Users className="h-5 w-5" /> },
//     { path: "/events", label: "Events", icon: <CalendarDays className="h-5 w-5" /> },
//     { path: "/locations", label: "Event Locations", icon: <MapPin className="h-5 w-5" /> },
//   ];

//   const SidebarContent = () => (
//     <ScrollArea className="flex-1">
//       <div className="flex flex-col gap-2 p-4">
//         {items.map((it) => (
//           <NavLink
//             key={it.path}
//             to={it.path}
//             onClick={() => setOpen(false)}
//             className={({ isActive }) =>
//               `flex items-center gap-3 rounded-lg p-3 font-semibold transition-all ${
//                 isActive
//                   ? "bg-gradient-to-r from-blue-950 to-gray-400 text-white shadow-md"
//                   : "text-gray-300 hover:bg-gray-700"
//               }`
//             }
//           >
//             {it.icon}
//             {!collapsed && <span>{it.label}</span>}
//           </NavLink>
//         ))}
//       </div>
//     </ScrollArea>
//   );

//   return (
//     <>
//       {/* Mobile Toggle */}
//       <Button
//         onClick={() => setOpen(true)}
//         className="fixed bottom-4 left-4 z-50 md:hidden bg-[#14213D] text-white p-3 rounded-full shadow-lg"
//       >
//         <Menu className="h-6 w-6" />
//       </Button>

//       {/* Mobile Sidebar */}
//       {open && (
//         <div className="fixed inset-0 z-50 flex md:hidden">
//           <div className="w-3/4 max-w-xs bg-[#14213D] text-white h-full flex flex-col shadow-xl">
//             <div className="flex items-center justify-between p-4 border-b border-white/20">
//               <h2 className="font-bold text-lg">Menu</h2>
//               <X
//                 onClick={() => setOpen(false)}
//                 className="h-6 w-6 cursor-pointer text-white"
//               />
//             </div>
//             <SidebarContent />
//           </div>
//           <div
//             onClick={() => setOpen(false)}
//             className="flex-1 bg-black/50 backdrop-blur-sm"
//           />
//         </div>
//       )}

//       {/* Desktop Sidebar */}
//       <div
//         className={`hidden md:flex md:flex-col bg-[#14213D] text-white border-r border-[#0f192f] transition-all duration-300 ${
//           collapsed ? "md:w-20" : "md:w-64"
//         }`}
//       >
//         <div className="flex items-center justify-between p-4 border-b border-white/20">
//           {!collapsed && <h2 className="font-bold text-lg">Dashboard</h2>}
//           <Button
//             variant="ghost"
//             size="sm"
//             onClick={() => setCollapsed(!collapsed)}
//             className="text-white p-1 hover:bg-gray-700 rounded"
//           >
//             {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
//           </Button>
//         </div>
//         <SidebarContent />
//       </div>
//     </>
//   );
// }




// good now 
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
import { ScrollArea } from "./ui/scroll-area";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const items = [
    { path: "/overview", label: "Overview", icon: <LayoutDashboard className="h-5 w-5" /> },
    { path: "/users", label: "Users", icon: <Users className="h-5 w-5" /> },
    { path: "/events", label: "Events", icon: <CalendarDays className="h-5 w-5" /> },
    { path: "/locations", label: "Event Locations", icon: <MapPin className="h-5 w-5" /> },
  ];

  const SidebarContent = ({ showLabel = false }) => (
    <ScrollArea className="flex-1">
      <div className="flex flex-col gap-2 p-4">
        {items.map((it) => (
          <NavLink
            key={it.path}
            to={it.path}
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-lg p-3 font-semibold transition-all ${
                isActive
                  ? "bg-gradient-to-r from-blue-950 to-gray-400 text-white shadow-md"
                  : "text-gray-300 hover:bg-gray-700"
              }`
            }
          >
            {it.icon}
            {showLabel && <span>{it.label}</span>}
          </NavLink>
        ))}
      </div>
    </ScrollArea>
  );

  return (
    <>
      {/* Mobile Toggle */}
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-50 md:hidden bg-[#14213D] text-white p-3 rounded-full shadow-lg"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="w-3/4 max-w-xs bg-[#14213D] text-white h-full flex flex-col shadow-xl">
            <div className="flex items-center justify-between p-4 border-b border-white/20">
              <h2 className="font-bold text-lg">Menu</h2>
              <X
                onClick={() => setOpen(false)}
                className="h-6 w-6 cursor-pointer text-white"
              />
            </div>
            <SidebarContent showLabel={true} />
          </div>
          <div
            onClick={() => setOpen(false)}
            className="flex-1 bg-black/50 backdrop-blur-sm"
          />
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex md:flex-col md:w-20 bg-[#14213D] text-white border-r border-[#0f192f]">
        <SidebarContent showLabel={false} />
      </div>
    </>
  );
}
