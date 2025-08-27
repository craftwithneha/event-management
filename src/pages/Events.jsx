// import React, { useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import { MoreHorizontal } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";

// export default function Events({ events, setEvents }) {
//   const [search, setSearch] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     location: "",
//     date: "",
//     persons: 0,
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
//       });
//     } else {
//       setEditingEvent(null);
//       setForm({ name: "", location: "", date: "", persons: 0 });
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
//         events.map((e) =>
//           e.id === editingEvent.id ? { ...e, ...form } : e
//         )
//       );
//       toast("Event updated successfully!");
//     } else {
//       setEvents([...events, { id: Date.now(), ...form }]);
//       toast("Event added successfully!");
//     }

//     setIsModalOpen(false);
//     setEditingEvent(null);
//     setForm({ name: "", location: "", date: "", persons: 0 });
//   };

//   const handleDelete = (id) => {
//     setEvents(events.filter((e) => e.id !== id));
//     toast("Event deleted successfully.", { variant: "destructive" });
//   };

//   return (
//     <Card className="shadow-md">
//       {/* Header */}
//       <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//         <CardTitle className="text-xl font-bold">Events</CardTitle>
//         <div className="flex gap-2 w-full sm:w-auto">
//           <Input
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full sm:w-64"
//           />
//           <Button onClick={() => openModal()} className="rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors font-semibold cursor-pointer">+ Add Event</Button>
//         </div>
//       </CardHeader>

//       {/* Table */}
//       <CardContent>
//         <div className="overflow-x-auto">
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="font-bold text-base">Name</TableHead>
//                 <TableHead className="font-bold text-base">Location</TableHead>
//                 <TableHead className="font-bold text-base">Date</TableHead>
//                 <TableHead className="font-bold text-base">Persons</TableHead>
//                 <TableHead className="font-bold text-base">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filtered.map((e, i) => (
//                 <TableRow
//                   key={e.id}
//                   className={i % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-100"}
//                 >
//                   <TableCell>{e.name}</TableCell>
//                   <TableCell>{e.location}</TableCell>
//                   <TableCell>{e.date}</TableCell>
//                   <TableCell>{e.persons}</TableCell>
//                   <TableCell>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button variant="ghost" size="sm" className="cursor-pointer">
//                           <MoreHorizontal />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent>
//                         <DropdownMenuItem onClick={() => openModal(e)} className="cursor-pointer">
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
//               ))}
//               {filtered.length === 0 && (
//                 <TableRow>
//                   <TableCell colSpan={5} className="text-center py-6 text-gray-500">
//                     No events found
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>

//       {/* Modal for Add/Edit Event */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className="sm:max-w-lg">
//           <DialogHeader>
//             <DialogTitle className="font-bold">
//               {editingEvent ? "Edit Event" : "Add Event"}
//             </DialogTitle>
//           </DialogHeader>

//           <div className="flex flex-col gap-4 mt-2">
//             <Input
//               placeholder="Event Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//             />
//             <Input
//               placeholder="Location"
//               value={form.location}
//               onChange={(e) => setForm({ ...form, location: e.target.value })}
//             />
//             <Input
//               type="date"
//               placeholder="Date"
//               value={form.date}
//               onChange={(e) => setForm({ ...form, date: e.target.value })}
//             />
//             <Input
//               type="number"
//               placeholder="Persons"
//               value={form.persons}
//               onChange={(e) =>
//                 setForm({ ...form, persons: parseInt(e.target.value) || 0 })
//               }
//             />
//           </div>

//           <DialogFooter className="mt-4">
//             <Button onClick={handleSave} className="rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors font-semibold cursor-pointer">
//               {editingEvent ? "Update" : "Save"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </Card>
//   );
// }




import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function Events({ events, setEvents }) {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    location: "",
    date: "",
    persons: 0,
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
      });
    } else {
      setEditingEvent(null);
      setForm({ name: "", location: "", date: "", persons: 0 });
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
        events.map((e) =>
          e.id === editingEvent.id ? { ...e, ...form } : e
        )
      );
      toast("Event updated successfully!");
    } else {
      setEvents([...events, { id: Date.now(), ...form }]);
      toast("Event added successfully!");
    }

    setIsModalOpen(false);
    setEditingEvent(null);
    setForm({ name: "", location: "", date: "", persons: 0 });
  };

  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id));
    toast("Event deleted successfully.", { variant: "destructive" });
  };

  return (
    <Card className="shadow-md">
      {/* Header */}
      <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <CardTitle className="text-xl font-bold">Events</CardTitle>
        <div className="flex gap-2 w-full sm:w-auto">
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-64"
          />
          <Button onClick={() => openModal()}>Add Event</Button>
        </div>
      </CardHeader>

      {/* Table */}
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-bold text-base">Name</TableHead>
                <TableHead className="font-bold text-base">Location</TableHead>
                <TableHead className="font-bold text-base">Date</TableHead>
                <TableHead className="font-bold text-base">Persons</TableHead>
                <TableHead className="font-bold text-base">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((e, i) => (
                <TableRow
                  key={e.id}
                  className={i % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "hover:bg-gray-100"}
                >
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.location}</TableCell>
                  <TableCell>{e.date}</TableCell>
                  <TableCell>{e.persons}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => openModal(e)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(e.id)}
                          className="text-red-600"
                        >
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
              {filtered.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                    No events found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* Modal for Add/Edit Event */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-bold">
              {editingEvent ? "Edit Event" : "Add Event"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-2">
            <Input
              placeholder="Event Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
            <Input
              type="date"
              placeholder="Date"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Persons"
              value={form.persons}
              onChange={(e) =>
                setForm({ ...form, persons: parseInt(e.target.value) || 0 })
              }
            />
          </div>

          <DialogFooter className="mt-4">
            <Button onClick={handleSave}>
              {editingEvent ? "Update" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}