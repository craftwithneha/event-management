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
// import { MapPin, Calendar, Users, MoreHorizontal } from "lucide-react";
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
//       toast("All fields are required.", { variant: "destructive" });
//       return;
//     }

//     if (editingEvent) {
//       setEvents(
//         events.map((e) => (e.id === editingEvent.id ? { ...e, ...form } : e))
//       );
//       toast("Event updated successfully!");
//     } else {
//       // ✅ unique ID to avoid duplicate deletes
//       setEvents([...events, { id: crypto.randomUUID(), ...form }]);
//       toast("Event added successfully!");
//     }

//     setIsModalOpen(false);
//     setEditingEvent(null);
//     setForm({ name: "", location: "", date: "", persons: 0, status: "Upcoming" });
//   };

  
// const handleDelete = (id) => {
//   console.log("Deleting ID:", id);
//   console.log("Before:", events.map(e => e.id));
  
//   const updated = events.filter((e) => e.id !== id);
  
//   console.log("After:", updated.map(e => e.id));
//   setEvents(updated);
  
//   toast("Event deleted successfully.", { variant: "destructive" });
// };

//   const getStatusBadge = (status) => {
//     let color = "bg-gray-200 text-gray-800";
//     if (status === "Upcoming") color = "bg-blue-100 text-blue-600";
//     if (status === "Live") color = "bg-green-100 text-green-600";
//     if (status === "Canceled") color = "bg-red-100 text-red-600";

//     return (
//       <span
//         className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}
//       >
//         {status}
//       </span>
//     );
//   };

//   return (
  
//     <div className="space-y-6 w-full px-2 sm:px-4 bg-[#E5E5E5] min-h-screen py-10">
//   {/* Heading */}
//   <h1 className="text-4xl md:text-5xl font-extrabold text-center text-[#14213D]">
//     Events
//   </h1>

//   {/* Search + Add Event */}
//   <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
//     <Input
//       placeholder="Search events..."
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//       className="flex-1 rounded-lg w-full bg-white px-6 py-4 text-xl shadow-lg"
//     />
//     <Button
//       onClick={() => openModal()}
//       className="rounded-lg px-8 py-4 w-full sm:w-auto 
//                  bg-[#14213D] text-[#E5E5E5] text-xl font-bold shadow-lg 
//                  hover:opacity-90 transition"
//     >
//       + Add Event
//     </Button>
//   </div>

//   {/* Event Cards */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//     {filtered.length === 0 && (
//       <p className="text-[#14213D] col-span-full text-center text-xl">
//         No events found
//       </p>
//     )}
//     {filtered.map((e) => (
//       <Card
//         key={e.id}
//         className="relative border rounded-xl shadow-xl 
//                    hover:shadow-2xl transition-transform transform hover:-translate-y-1 
//                    overflow-hidden bg-[#14213D] text-[#E5E5E5]"
//       >
//         <CardHeader>
//           <CardTitle className="text-2xl font-bold truncate">
//             {e.name}
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-3 text-lg">
//           <div className="flex items-center gap-2">
//             <MapPin className="h-5 w-5 text-[#E5E5E5]" />
//             <span>{e.location}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Calendar className="h-5 w-5 text-[#E5E5E5]" />
//             <span>{e.date}</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <Users className="h-5 w-5 text-[#E5E5E5]" />
//             <span>{e.persons} persons</span>
//           </div>
//           <div>{getStatusBadge(e.status)}</div>
//         </CardContent>
//       </Card>
//     ))}
//   </div>

//   {/* Events Table */}
//   <div className="rounded-xl shadow-2xl w-full bg-[#14213D]">
//     <Table className="w-full text-lg text-[#E5E5E5]">
//       <TableHeader>
//         <TableRow className="bg-[#14213D]/80">
//           <TableHead className="font-bold px-6 py-4 text-[#E5E5E5]">Name</TableHead>
//           <TableHead className="font-bold px-6 py-4 text-[#E5E5E5]">Location</TableHead>
//           <TableHead className="font-bold px-6 py-4 text-[#E5E5E5]">Date</TableHead>
//           <TableHead className="font-bold px-6 py-4 text-[#E5E5E5]">Persons</TableHead>
//           <TableHead className="font-bold px-6 py-4 text-[#E5E5E5]">Status</TableHead>
//           <TableHead className="font-bold px-6 py-4 text-center text-[#E5E5E5]">
//             Actions
//           </TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {filtered.length > 0 ? (
//           filtered.map((e) => (
//             <TableRow
//               key={e.id}
//               className="hover:bg-white/10 border-b border-white/20"
//             >
//               <TableCell className="px-6 py-4">{e.name}</TableCell>
//               <TableCell className="px-6 py-4">{e.location}</TableCell>
//               <TableCell className="px-6 py-4">{e.date}</TableCell>
//               <TableCell className="px-6 py-4">{e.persons}</TableCell>
//               <TableCell className="px-6 py-4">
//                 {getStatusBadge(e.status)}
//               </TableCell>
//               <TableCell className="px-6 py-4 text-center">
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button
//                       variant="ghost"
//                       size="sm"
//                       className="rounded-full text-[#E5E5E5] hover:bg-white/20"
//                     >
//                       <MoreHorizontal />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent className="bg-white text-[#14213D] rounded-lg shadow-xl text-lg">
//                     <DropdownMenuItem onClick={() => openModal(e)}>
//                       Edit
//                     </DropdownMenuItem>
//                     <DropdownMenuItem
//                       onClick={() => handleDelete(e.id)}
//                       className="text-red-600 cursor-pointer"
//                     >
//                       Delete
//                     </DropdownMenuItem>
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </TableCell>
//             </TableRow>
//           ))
//         ) : (
//           <TableRow>
//             <TableCell
//               colSpan={6}
//               className="text-center py-8 text-[#E5E5E5] text-lg"
//             >
//               No events found.
//             </TableCell>
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   </div>

//   {/* Modal */}
//   <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//     <DialogContent className="sm:max-w-lg w-[95%] rounded-xl">
//       <DialogHeader>
//         <DialogTitle className="text-2xl font-bold text-[#14213D]">
//           {editingEvent ? "Edit Event" : "Add Event"}
//         </DialogTitle>
//       </DialogHeader>

//       <div className="flex flex-col gap-4 mt-4 text-lg">
//         <Input
//           placeholder="Event Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="bg-gray-50 px-5 py-4"
//         />
//         <Input
//           placeholder="Location"
//           value={form.location}
//           onChange={(e) => setForm({ ...form, location: e.target.value })}
//           className="bg-gray-50 px-5 py-4"
//         />
//         <Input
//           type="date"
//           placeholder="Date"
//           value={form.date}
//           onChange={(e) => setForm({ ...form, date: e.target.value })}
//           className="bg-gray-50 px-5 py-4"
//         />
//         <Input
//           type="number"
//           placeholder="Persons"
//           value={form.persons}
//           onChange={(e) =>
//             setForm({ ...form, persons: parseInt(e.target.value) || 0 })
//           }
//           className="bg-gray-50 px-5 py-4"
//         />
//         {/* Status Select */}
//         <Select
//           value={form.status}
//           onValueChange={(val) => setForm({ ...form, status: val })}
//         >
//           <SelectTrigger className="w-full px-5 py-4 bg-gray-50">
//             <SelectValue placeholder="Select status" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectItem value="Upcoming">Upcoming</SelectItem>
//             <SelectItem value="Live">Live</SelectItem>
//             <SelectItem value="Canceled">Canceled</SelectItem>
//           </SelectContent>
//         </Select>
//       </div>

//       <DialogFooter className="mt-6">
//         <Button
//           onClick={handleSave}
//           className="rounded-lg px-8 py-4 bg-[#14213D] text-[#E5E5E5] font-bold w-full sm:w-auto"
//         >
//           {editingEvent ? "Update Event" : "Save Event"}
//         </Button>
//       </DialogFooter>
//     </DialogContent>
//   </Dialog>
// </div>
//   );
// }




// Events.jsx
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
import { MoreHorizontal, MapPin, Calendar, Users as UsersIcon } from "lucide-react";
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
      toast("All fields are required.", { variant: "destructive" });
      return;
    }

    if (editingEvent) {
      setEvents(
        events.map((e) => (e.id === editingEvent.id ? { ...e, ...form } : e))
      );
      toast("Event updated successfully!");
    } else {
      setEvents([...events, { id: crypto.randomUUID(), ...form }]);
      toast("Event added successfully!");
    }

    setIsModalOpen(false);
    setEditingEvent(null);
    setForm({ name: "", location: "", date: "", persons: 0, status: "Upcoming" });
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
    toast("Event deleted successfully.", { variant: "destructive" });
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

      {/* Cards Grid */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length === 0 && (
          <p className="text-[#14213D] col-span-full text-center">
            No events found
          </p>
        )}
        {filtered.map((e) => (
          <Card key={e.id} className="border rounded-xl shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold truncate text-[#14213D]">
                {e.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span>{e.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-gray-500" />
                <span>{e.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <UsersIcon className="h-4 w-4 text-gray-500" />
                <span>{e.persons} persons</span>
              </div>
              <div>{getStatusBadge(e.status)}</div>
            </CardContent>
          </Card>
        ))}
      </div> */}

{/* Event Cards */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {filtered.length === 0 && (
    <p className="text-[#14213D] col-span-full text-center">
      No events found
    </p>
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
          <Calendar className="h-5 w-5 text-green-300" />
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
              <TableHead className="font-semibold px-4 py-3 text-center text-white">Actions</TableHead>
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
                        <DropdownMenuItem onClick={() => openModal(e)}>Edit</DropdownMenuItem>
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
            <Input
              type="date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
              className="bg-gray-50"
            />
            <Input
              type="number"
              placeholder="Persons"
              value={form.persons}
              onChange={(e) =>
                setForm({ ...form, persons: parseInt(e.target.value) || 0 })
              }
              className="bg-gray-50"
            />
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
