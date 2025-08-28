// import React, { useState } from "react";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { toast } from "sonner";
// import {
//   MoreHorizontal,
//   MapPin,
//   Calendar as CalendarIcon,
//   Users as UsersIcon,
// } from "lucide-react";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectItem,
// } from "@/components/ui/select";

// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";
// import { format } from "date-fns";
// import { cn } from "@/lib/utils";

// export default function Events({ events, setEvents }) {
//   const [search, setSearch] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     location: "",
//     date: "",
//     persons: 0,
//     status: "Upcoming",
//   });
//   const [editingEvent, setEditingEvent] = useState(null);

//   // ✅ date picker open/close state
//   const [isDateOpen, setIsDateOpen] = useState(false);

//   const filtered = events.filter((e) =>
//     e.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const openModal = (event = null) => {
//     if (event) {
//       setEditingEvent(event);
//       setForm({
//         name: event.name,
//         location: event.location,
//         date: event.date,
//         persons: event.persons,
//         status: event.status,
//       });
//     } else {
//       setEditingEvent(null);
//       setForm({ name: "", location: "", date: "", persons: 0, status: "Upcoming" });
//     }
//     setIsModalOpen(true);
//   };

//   const handleSave = () => {
//     if (!form.name || !form.location || !form.date || form.persons <= 0) {
//       toast.error("All fields are required.", {
//         style: { background: "#b91c1c", color: "white" },
//       });
//       return;
//     }

//     if (editingEvent) {
//       setEvents(
//         events.map((e) => (e.id === editingEvent.id ? { ...e, ...form } : e))
//       );
//       toast.success("Event updated successfully!", {
//         style: { background: "#14213D", color: "white" },
//       });
//     } else {
//       setEvents([...events, { id: crypto.randomUUID(), ...form }]);
//       toast.success("Event added successfully!", {
//         style: { background: "#14213D", color: "white" },
//       });
//     }

//     setIsModalOpen(false);
//     setEditingEvent(null);
//     setForm({ name: "", location: "", date: "", persons: 0, status: "Upcoming" });
//   };

//   const handleDelete = (id) => {
//     setEvents(events.filter((e) => e.id !== id));
//     toast.error("Event deleted successfully.", {
//       style: { background: "#b91c1c", color: "white" },
//     });
//   };

//   const getStatusBadge = (status) => {
//     let color = "bg-gray-100 text-gray-700";
//     if (status === "Upcoming") color = "bg-blue-100 text-blue-700";
//     if (status === "Live") color = "bg-green-100 text-green-700";
//     if (status === "Canceled") color = "bg-red-100 text-red-700";

//     return (
//       <span
//         className={`px-2 py-1 text-xs md:text-sm rounded-full font-medium ${color}`}
//       >
//         {status}
//       </span>
//     );
//   };

//   return (
//     <div className="space-y-6 w-full px-2 sm:px-4 bg-[#E5E5E5] min-h-screen py-6">
//       {/* Heading */}
//       <div>
//         <h1 className="text-2xl md:text-3xl font-bold text-center text-[#14213D]">
//           Events
//         </h1>
//       </div>

//       {/* Search + Add Event */}
//       <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
//         <Input
//           placeholder="Search events..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 rounded-lg w-full bg-white"
//         />
//         <Button
//           onClick={() => openModal()}
//           className="rounded-lg px-6 w-full sm:w-auto bg-[#14213D] text-white hover:opacity-90 transition"
//         >
//           + Add Event
//         </Button>
//       </div>

//       {/* Event Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {filtered.length === 0 && (
//           <p className="text-[#14213D] col-span-full text-center">No events found</p>
//         )}
//         {filtered.map((e) => (
//           <Card
//             key={e.id}
//             className="border rounded-2xl shadow-md hover:shadow-2xl 
//                  transition-transform transform hover:-translate-y-1 
//                  bg-gradient-to-br from-[#14213D] to-[#1f2b4d] text-white"
//           >
//             <CardHeader className="flex flex-row items-center justify-between">
//               <CardTitle className="text-xl font-semibold truncate">
//                 {e.name}
//               </CardTitle>
//               {/* Only Status Badge */}
//               <div>{getStatusBadge(e.status)}</div>
//             </CardHeader>

//             <CardContent className="space-y-4 text-sm">
//               <div className="flex items-center gap-2">
//                 <MapPin className="h-5 w-5 text-blue-300" />
//                 <span>{e.location}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <CalendarIcon className="h-5 w-5 text-green-300" />
//                 <span>{e.date}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <UsersIcon className="h-5 w-5 text-orange-300" />
//                 <span>{e.persons} persons</span>
//               </div>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Events Table */}
//       <div className="rounded-xl border shadow-sm w-full overflow-hidden">
//         <Table className="w-full bg-[#14213D] text-white">
//           <TableHeader>
//             <TableRow className="bg-[#0f192f]">
//               <TableHead className="font-semibold px-4 py-3 text-white">Name</TableHead>
//               <TableHead className="font-semibold px-4 py-3 text-white">Location</TableHead>
//               <TableHead className="font-semibold px-4 py-3 text-white">Date</TableHead>
//               <TableHead className="font-semibold px-4 py-3 text-white">Persons</TableHead>
//               <TableHead className="font-semibold px-4 py-3 text-white">Status</TableHead>
//               <TableHead className="font-semibold px-4 py-3 text-center text-white">
//                 Actions
//               </TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {filtered.length > 0 ? (
//               filtered.map((e) => (
//                 <TableRow
//                   key={e.id}
//                   className="hover:bg-[#1f2b4d] text-sm md:text-base border-b border-gray-700"
//                 >
//                   <TableCell className="px-4 py-4">{e.name}</TableCell>
//                   <TableCell className="px-4 py-4">{e.location}</TableCell>
//                   <TableCell className="px-4 py-4">{e.date}</TableCell>
//                   <TableCell className="px-4 py-4">{e.persons}</TableCell>
//                   <TableCell className="px-4 py-4">{getStatusBadge(e.status)}</TableCell>
//                   <TableCell className="px-4 py-4 text-center">
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button
//                           variant="ghost"
//                           size="sm"
//                           className="rounded-full text-white hover:bg-white/20"
//                         >
//                           <MoreHorizontal />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent className="bg-white text-[#14213D]">
//                         <DropdownMenuItem onClick={() => openModal(e)}>
//                           Edit
//                         </DropdownMenuItem>
//                         <DropdownMenuItem
//                           onClick={() => handleDelete(e.id)}
//                           className="text-red-600 cursor-pointer"
//                         >
//                           Delete
//                         </DropdownMenuItem>
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   </TableCell>
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell colSpan={6} className="text-center py-6 text-gray-300">
//                   No events found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Modal */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className="sm:max-w-lg w-[95%] rounded-xl">
//           <DialogHeader>
//             <DialogTitle className="text-lg font-semibold text-[#14213D]">
//               {editingEvent ? "Edit Event" : "Add Event"}
//             </DialogTitle>
//           </DialogHeader>

//           <div className="flex flex-col gap-4 mt-3">
//             <Input
//               placeholder="Event Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="bg-gray-50"
//             />
//             <Input
//               placeholder="Location"
//               value={form.location}
//               onChange={(e) => setForm({ ...form, location: e.target.value })}
//               className="bg-gray-50"
//             />

//             {/* ✅ Shadcn Date Picker (auto-close after select) */}
//             <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className={cn(
//                     "w-full justify-between bg-gray-50 text-left font-normal",
//                     !form.date && "text-muted-foreground"
//                   )}
//                 >
//                   {form.date ? format(new Date(form.date), "PPP") : <span>Pick a date</span>}
//                   <CalendarIcon className="ml-2 h-5 w-5 opacity-70" />
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0 bg-white rounded-xl shadow-lg">
//                 <Calendar
//                   mode="single"
//                   selected={form.date ? new Date(form.date) : undefined}
//                   onSelect={(day) => {
//                     if (day) {
//                       setForm({
//                         ...form,
//                         date: format(day, "yyyy-MM-dd"),
//                       });
//                       setIsDateOpen(false); // ✅ close after pick
//                     }
//                   }}
//                   initialFocus
//                 />
//               </PopoverContent>
//             </Popover>

//             <Input
//               type="number"
//               placeholder="Persons"
//               value={form.persons}
//               onChange={(e) =>
//                 setForm({ ...form, persons: parseInt(e.target.value) || 0 })
//               }
//               className="bg-gray-50"
//             />
//             <Select
//               value={form.status}
//               onValueChange={(val) => setForm({ ...form, status: val })}
//             >
//               <SelectTrigger className="w-full bg-gray-50">
//                 <SelectValue placeholder="Select status" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="Upcoming">Upcoming</SelectItem>
//                 <SelectItem value="Live">Live</SelectItem>
//                 <SelectItem value="Canceled">Canceled</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <DialogFooter className="mt-4">
//             <Button
//               onClick={handleSave}
//               className="rounded-lg px-6 bg-gradient-to-r from-[#14213D] to-[#6B7280] text-white w-full sm:w-auto"
//             >
//               {editingEvent ? "Update Event" : "Save Event"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }



import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  MoreHorizontal,
  MapPin,
  Calendar as CalendarIcon,
  Users as UsersIcon,
  Minus,
  Plus,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

export default function Events({ events, setEvents }) {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    location: "",
    date: "",
    persons: 0,
    status: "Upcoming",
  });
  const [editingEvent, setEditingEvent] = useState(null);

  // ✅ date picker open/close state
  const [isDateOpen, setIsDateOpen] = useState(false);

  const filtered = events.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (event = null) => {
    if (event) {
      setEditingEvent(event);
      setForm({
        name: event.name,
        location: event.location,
        date: event.date,
        persons: event.persons,
        status: event.status,
      });
    } else {
      setEditingEvent(null);
      setForm({ name: "", location: "", date: "", persons: 0, status: "Upcoming" });
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!form.name || !form.location || !form.date || form.persons <= 0) {
      toast.error("All fields are required.", {
        style: { background: "#b91c1c", color: "white" },
      });
      return;
    }

    if (editingEvent) {
      setEvents(
        events.map((e) => (e.id === editingEvent.id ? { ...e, ...form } : e))
      );
      toast.success("Event updated successfully!", {
        style: { background: "#14213D", color: "white" },
      });
    } else {
      setEvents([...events, { id: crypto.randomUUID(), ...form }]);
      toast.success("Event added successfully!", {
        style: { background: "#14213D", color: "white" },
      });
    }

    setIsModalOpen(false);
    setEditingEvent(null);
    setForm({ name: "", location: "", date: "", persons: 0, status: "Upcoming" });
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
    toast.error("Event deleted successfully.", {
      style: { background: "#b91c1c", color: "white" },
    });
  };

  const getStatusBadge = (status) => {
    let color = "bg-gray-100 text-gray-700";
    if (status === "Upcoming") color = "bg-blue-100 text-blue-700";
    if (status === "Live") color = "bg-green-100 text-green-700";
    if (status === "Canceled") color = "bg-red-100 text-red-700";

    return (
      <span
        className={`px-2 py-1 text-xs md:text-sm rounded-full font-medium ${color}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6 w-full px-2 sm:px-4 bg-[#E5E5E5] min-h-screen py-6">
      {/* Heading */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-center text-[#14213D]">
          Events
        </h1>
      </div>

      {/* Search + Add Event */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Input
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg w-full bg-white"
        />
        <Button
          onClick={() => openModal()}
          className="rounded-lg px-6 w-full sm:w-auto bg-[#14213D] text-white hover:opacity-90 transition"
        >
          + Add Event
        </Button>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length === 0 && (
          <p className="text-[#14213D] col-span-full text-center">No events found</p>
        )}
        {filtered.map((e) => (
          <Card
            key={e.id}
            className="border rounded-2xl shadow-md hover:shadow-2xl 
                 transition-transform transform hover:-translate-y-1 
                 bg-gradient-to-br from-[#14213D] to-[#1f2b4d] text-white"
          >
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold truncate">
                {e.name}
              </CardTitle>
              {/* Only Status Badge */}
              <div>{getStatusBadge(e.status)}</div>
            </CardHeader>

            <CardContent className="space-y-4 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-blue-300" />
                <span>{e.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-green-300" />
                <span>{e.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon className="h-5 w-5 text-orange-300" />
                <span>{e.persons} persons</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Events Table */}
      <div className="rounded-xl border shadow-sm w-full overflow-hidden">
        <Table className="w-full bg-[#14213D] text-white">
          <TableHeader>
            <TableRow className="bg-[#0f192f]">
              <TableHead className="font-semibold px-4 py-3 text-white">Name</TableHead>
              <TableHead className="font-semibold px-4 py-3 text-white">Location</TableHead>
              <TableHead className="font-semibold px-4 py-3 text-white">Date</TableHead>
              <TableHead className="font-semibold px-4 py-3 text-white">Persons</TableHead>
              <TableHead className="font-semibold px-4 py-3 text-white">Status</TableHead>
              <TableHead className="font-semibold px-4 py-3 text-center text-white">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((e) => (
                <TableRow
                  key={e.id}
                  className="hover:bg-[#1f2b4d] text-sm md:text-base border-b border-gray-700"
                >
                  <TableCell className="px-4 py-4">{e.name}</TableCell>
                  <TableCell className="px-4 py-4">{e.location}</TableCell>
                  <TableCell className="px-4 py-4">{e.date}</TableCell>
                  <TableCell className="px-4 py-4">{e.persons}</TableCell>
                  <TableCell className="px-4 py-4">{getStatusBadge(e.status)}</TableCell>
                  <TableCell className="px-4 py-4 text-center">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="rounded-full text-white hover:bg-white/20"
                        >
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white text-[#14213D]">
                        <DropdownMenuItem onClick={() => openModal(e)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(e.id)}
                          className="text-red-600 cursor-pointer"
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-6 text-gray-300">
                  No events found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg w-[95%] rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold text-[#14213D]">
              {editingEvent ? "Edit Event" : "Add Event"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-3">
            <Input
              placeholder="Event Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="bg-gray-50"
            />
            <Input
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
              className="bg-gray-50"
            />

            {/* ✅ Shadcn Date Picker (auto-close after select) */}
            <Popover open={isDateOpen} onOpenChange={setIsDateOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-between bg-gray-50 text-left font-normal",
                    !form.date && "text-muted-foreground"
                  )}
                >
                  {form.date ? format(new Date(form.date), "PPP") : <span>Pick a date</span>}
                  <CalendarIcon className="ml-2 h-5 w-5 opacity-70" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 bg-white rounded-xl shadow-lg">
                <Calendar
                  mode="single"
                  selected={form.date ? new Date(form.date) : undefined}
                  onSelect={(day) => {
                    if (day) {
                      setForm({
                        ...form,
                        date: format(day, "yyyy-MM-dd"),
                      });
                      setIsDateOpen(false); // ✅ close after pick
                    }
                  }}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* ✅ Persons Field (Shadcn style) */}
            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() =>
                  setForm({ ...form, persons: Math.max(0, form.persons - 1) })
                }
              >
                <Minus className="h-4 w-4" />
              </Button>

              <Input
                type="number"
                value={form.persons}
                onChange={(e) =>
                  setForm({ ...form, persons: parseInt(e.target.value) || 0 })
                }
                className="w-20 text-center bg-gray-50"
              />

              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setForm({ ...form, persons: form.persons + 1 })}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <Select
              value={form.status}
              onValueChange={(val) => setForm({ ...form, status: val })}
            >
              <SelectTrigger className="w-full bg-gray-50">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Upcoming">Upcoming</SelectItem>
                <SelectItem value="Live">Live</SelectItem>
                <SelectItem value="Canceled">Canceled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="mt-4">
            <Button
              onClick={handleSave}
              className="rounded-lg px-6 bg-gradient-to-r from-[#14213D] to-[#6B7280] text-white w-full sm:w-auto"
            >
              {editingEvent ? "Update Event" : "Save Event"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
