 
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



// // Collapsible example Sidebar.jsx
// import React, { useState } from "react";
// import {
//   Sidebar as SidebarIcon,
//   Users,
//   BarChart,
//   Settings,
//   LogOut,
//   LayoutDashboard,
// } from "lucide-react";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { cn } from "@/lib/utils";

// export default function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   const menuItems = [
//     { name: "Dashboard", icon: LayoutDashboard },
//     { name: "Users", icon: Users },
//     { name: "Overview", icon: BarChart },
//     { name: "Settings", icon: Settings },
//   ];

//   return (
//     <div
//       className={cn(
//         "h-screen bg-[#0A2540] text-white flex flex-col transition-all duration-300", // navy blue background
//         collapsed ? "w-16" : "w-56"
//       )}
//     >
//       {/* Top Logo + Collapse Button */}
//       <div className="flex items-center justify-between p-4 border-b border-blue-900">
//         {!collapsed && <h1 className="text-lg font-bold">EventHub</h1>}
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="p-2 rounded-lg hover:bg-blue-900 transition"
//         >
//           <SidebarIcon className="h-5 w-5 text-white" />
//         </button>
//       </div>

//       {/* Menu */}
//       <nav className="flex-1 flex flex-col gap-2 mt-4">
//         {menuItems.map((item, idx) => (
//           <TooltipProvider key={idx}>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <button
//                   className={cn(
//                     "flex items-center gap-3 p-3 rounded-lg hover:bg-blue-900 transition",
//                     collapsed && "justify-center"
//                   )}
//                 >
//                   <item.icon className="h-5 w-5" />
//                   {!collapsed && <span>{item.name}</span>}
//                 </button>
//               </TooltipTrigger>
//               {collapsed && (
//                 <TooltipContent side="top">
//                   <p>{item.name}</p>
//                 </TooltipContent>
//               )}
//             </Tooltip>
//           </TooltipProvider>
//         ))}
//       </nav>

//       {/* Bottom Logout */}
//       <div className="p-4 border-t border-blue-900">
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <button
//                 className={cn(
//                   "flex items-center gap-3 p-3 rounded-lg hover:bg-blue-900 transition w-full",
//                   collapsed && "justify-center"
//                 )}
//               >
//                 <LogOut className="h-5 w-5" />
//                 {!collapsed && <span>Logout</span>}
//               </button>
//             </TooltipTrigger>
//             {collapsed && (
//               <TooltipContent side="top">
//                 <p>Logout</p>
//               </TooltipContent>
//             )}
//           </Tooltip>
//         </TooltipProvider>
//       </div>
//     </div>
//   );
// }
