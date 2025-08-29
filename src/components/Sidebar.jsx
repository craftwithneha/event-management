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




// // good now 
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

//   const items = [
//     { path: "/overview", label: "Overview", icon: <LayoutDashboard className="h-5 w-5" /> },
//     { path: "/users", label: "Users", icon: <Users className="h-5 w-5" /> },
//     { path: "/events", label: "Events", icon: <CalendarDays className="h-5 w-5" /> },
//     { path: "/locations", label: "Event Locations", icon: <MapPin className="h-5 w-5" /> },
//   ];

//   const SidebarContent = ({ showLabel = false }) => (
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
//             {showLabel && <span>{it.label}</span>}
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
//             <SidebarContent showLabel={true} />
//           </div>
//           <div
//             onClick={() => setOpen(false)}
//             className="flex-1 bg-black/50 backdrop-blur-sm"
//           />
//         </div>
//       )}

//       {/* Desktop Sidebar */}
//       <div className="hidden md:flex md:flex-col md:w-20 bg-[#14213D] text-white border-r border-[#0f192f]">
//         <SidebarContent showLabel={false} />
//       </div>
//     </>
//   );
// }



// import React from "react";
// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Users,
//   CalendarDays,
//   MapPin,
// } from "lucide-react";
// import { ScrollArea } from "./ui/scroll-area";

// export default function Sidebar() {
//   const topItems = [
//     { path: "/overview", label: "Overview", icon: <LayoutDashboard className="h-5 w-5" /> },
//   ];

//   const bottomItems = [
//     { path: "/users", label: "Users", icon: <Users className="h-5 w-5" /> },
//     { path: "/events", label: "Events", icon: <CalendarDays className="h-5 w-5" /> },
//     { path: "/locations", label: "Event Locations", icon: <MapPin className="h-5 w-5" /> },
//   ];

//   const NavItem = ({ path, label, icon }) => (
//     <NavLink
//       to={path}
//       className={({ isActive }) =>
//         `group relative flex items-center justify-center rounded-lg p-3 transition-all 
//          ${isActive ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-gray-700"}`
//       }
//     >
//       {icon}
//       {/* Tooltip */}
//       <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
//         {label}
//       </span>
//     </NavLink>
//   );

//   return (
//     <div className="hidden md:flex md:flex-col h-screen w-16 bg-[#14213D] text-white border-r border-[#0f192f] justify-between">
//       {/* Top Section */}
//       <div>
//         <ScrollArea>
//           <div className="flex flex-col items-center gap-2 mt-2">
//             {topItems.map((item, i) => (
//               <React.Fragment key={item.path}>
//                 <NavItem {...item} />
//                 {/* Separator line */}
//                 {i === topItems.length - 1 && (
//                   <div className="h-px w-8 bg-gray-600 my-2" />
//                 )}
//               </React.Fragment>
//             ))}
//           </div>
//         </ScrollArea>
//       </div>

//       {/* Bottom Section */}
//       <div className="mb-4">
//         <div className="flex flex-col items-center gap-2">
//           {bottomItems.map((item, i) => (
//             <React.Fragment key={item.path}>
//               <NavItem {...item} />
//               {/* Separator line for each */}
//               {i !== bottomItems.length - 1 && (
//                 <div className="h-px w-8 bg-gray-600 my-2" />
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// // Sidebar.jsx
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






// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import {
//   LayoutDashboard,
//   Users,
//   CalendarDays,
//   MapPin,
//   Menu,
//   X,
//   LayoutPanelLeft, // toggle icon
// } from "lucide-react";
// import { Button } from "./ui/button";
// import { ScrollArea } from "./ui/scroll-area";

// export default function Sidebar() {
//   const [open, setOpen] = useState(false); // for mobile
//   const [collapsed, setCollapsed] = useState(true); // for desktop

//   const items = [
//     {
//       path: "/overview",
//       label: "Overview",
//       icon: <LayoutDashboard className="h-5 w-5" />,
//     },
//     {
//       path: "/users",
//       label: "Users",
//       icon: <Users className="h-5 w-5" />,
//     },
//     {
//       path: "/events",
//       label: "Events",
//       icon: <CalendarDays className="h-5 w-5" />,
//     },
//     {
//       path: "/locations",
//       label: "Event Locations",
//       icon: <MapPin className="h-5 w-5" />,
//     },
//   ];

//   const SidebarContent = ({ showLabel = false }) => (
//     <ScrollArea className="flex-1">
//       <div className="flex flex-col gap-2 p-4">
//         {items.map((it) => (
//           <NavLink
//             key={it.path}
//             to={it.path}
//             onClick={() => setOpen(false)}
//             className={({ isActive }) =>
//               `group relative flex items-center ${
//                 showLabel ? "justify-start" : "justify-center"
//               } gap-3 rounded-lg p-3 font-semibold transition-all ${
//                 isActive
//                   ? "bg-gradient-to-r from-blue-950 to-gray-400 text-white shadow-md"
//                   : "text-gray-300 hover:bg-gray-700"
//               }`
//             }
//           >
//             {it.icon}

//             {/* Tooltip only when collapsed */}
//             {!showLabel && (
//               <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 transition-opacity z-50">
//                 <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm font-medium shadow-md whitespace-nowrap">
//                   {it.label}
//                 </span>
//               </div>
//             )}

//             {/* Label visible only when expanded */}
//             {showLabel && <span>{it.label}</span>}
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
//             <SidebarContent showLabel={true} />
//           </div>
//           <div
//             onClick={() => setOpen(false)}
//             className="flex-1 bg-black/50 backdrop-blur-sm"
//           />
//         </div>
//       )}

//       {/* Desktop Sidebar */}
//       <div
//         className={`hidden md:flex md:flex-col h-screen bg-[#14213D] text-white border-r border-[#0f192f] transition-all duration-300 ${
//           collapsed ? "w-20" : "w-64"
//         }`}
//       >
//         {/* Collapse/Expand button */}
//         <div className="flex justify-end p-2">
//           <button
//             onClick={() => setCollapsed(!collapsed)}
//             className="text-white bg-gray-700 hover:bg-gray-600 p-2 rounded-md flex items-center justify-center"
//           >
//             <LayoutPanelLeft className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Sidebar items */}
//         <SidebarContent showLabel={!collapsed} />
//       </div>
//     </>
//   );
// }


// Zoha yai ok hai agr color change kr lain 
// // Sidebar.jsx
// import React, { useState } from "react";
// import {
//   Users,
//   BarChart,
//   Settings,
//   LogOut,
//   PanelLeft,
//   PanelRight,
// } from "lucide-react";
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
// import { cn } from "@/lib/utils";

// export default function Sidebar() {
//   const [collapsed, setCollapsed] = useState(false);

//   const menuItems = [
//     { name: "Users", icon: Users },
//     { name: "Overview", icon: BarChart },
//     { name: "Settings", icon: Settings },
//   ];

//   return (
//     <div
//       className={cn(
//         "h-screen bg-black text-white flex flex-col transition-all duration-300",
//         collapsed ? "w-16" : "w-56"
//       )}
//     >
//       {/* Top Logo + Collapse Button */}
//       <div className="flex items-center justify-between p-4 border-b border-gray-800">
//         {!collapsed && <h1 className="text-lg font-bold">EventHub</h1>}
//         <button
//           onClick={() => setCollapsed(!collapsed)}
//           className="p-2 rounded-lg hover:bg-gray-800 transition"
//         >
//           {collapsed ? (
//             <PanelRight className="h-5 w-5 text-white" />
//           ) : (
//             <PanelLeft className="h-5 w-5 text-white" />
//           )}
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
//                     "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition",
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
//       <div className="p-4 border-t border-gray-800">
//         <TooltipProvider>
//           <Tooltip>
//             <TooltipTrigger asChild>
//               <button
//                 className={cn(
//                   "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-800 transition w-full",
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



// Sidebar.jsx
import React, { useState } from "react";
import {
  Sidebar as SidebarIcon,
  Users,
  BarChart,
  Settings,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard },
    { name: "Users", icon: Users },
    { name: "Overview", icon: BarChart },
    { name: "Settings", icon: Settings },
  ];

  return (
    <div
      className={cn(
        "h-screen bg-[#0A2540] text-white flex flex-col transition-all duration-300", // navy blue background
        collapsed ? "w-16" : "w-56"
      )}
    >
      {/* Top Logo + Collapse Button */}
      <div className="flex items-center justify-between p-4 border-b border-blue-900">
        {!collapsed && <h1 className="text-lg font-bold">EventHub</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-2 rounded-lg hover:bg-blue-900 transition"
        >
          <SidebarIcon className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 flex flex-col gap-2 mt-4">
        {menuItems.map((item, idx) => (
          <TooltipProvider key={idx}>
            <Tooltip>
              <TooltipTrigger asChild>
                <button
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg hover:bg-blue-900 transition",
                    collapsed && "justify-center"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {!collapsed && <span>{item.name}</span>}
                </button>
              </TooltipTrigger>
              {collapsed && (
                <TooltipContent side="top">
                  <p>{item.name}</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        ))}
      </nav>

      {/* Bottom Logout */}
      <div className="p-4 border-t border-blue-900">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg hover:bg-blue-900 transition w-full",
                  collapsed && "justify-center"
                )}
              >
                <LogOut className="h-5 w-5" />
                {!collapsed && <span>Logout</span>}
              </button>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="top">
                <p>Logout</p>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}
