// import React, { useState } from "react";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
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

// export default function Locations({ locations, setLocations }) {
//   const [search, setSearch] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [form, setForm] = useState({ name: "", capacity: 0, owner: "", status: "active" });
//   const [editingLocation, setEditingLocation] = useState(null);

//   const filtered = locations.filter((l) =>
//     l.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const openModal = (location = null) => {
//     if (location) {
//       setEditingLocation(location);
//       setForm({
//         name: location.name,
//         capacity: location.capacity,
//         owner: location.owner,
//         status: location.status,
//       });
//     } else {
//       setEditingLocation(null);
//       setForm({ name: "", capacity: 0, owner: "", status: "active" });
//     }
//     setIsModalOpen(true);
//   };

//   const handleSave = () => {
//     if (!form.name || !form.capacity || !form.owner || !form.status) {
//       toast("All fields are required.", { variant: "destructive" });
//       return;
//     }

//     if (editingLocation) {
//       setLocations(
//         locations.map((l) =>
//           l.id === editingLocation.id ? { ...l, ...form } : l
//         )
//       );
//       toast("Location updated successfully!");
//     } else {
//       setLocations([...locations, { id: Date.now(), ...form }]);
//       toast("Location added successfully!");
//     }

//     setIsModalOpen(false);
//     setEditingLocation(null);
//     setForm({ name: "", capacity: 0, owner: "", status: "active" });
//   };

//   const handleDelete = (id) => {
//     setLocations(locations.filter((l) => l.id !== id));
//     toast("Location deleted successfully.", { variant: "destructive" });
//   };

//   return (
//     <Card className="bg-white shadow-md rounded-xl">
//       <CardHeader className="flex justify-between items-center">
//         <CardTitle className="font-bold text-primary text-xl">
//           Event Locations
//         </CardTitle>
//         <div className="flex gap-2">
//           <Input
//             placeholder="Search..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border-gray-300 focus:border-primary"
//           />
//           <Button
//             onClick={() => openModal()}
//             className="bg-primary text-white hover:bg-secondary"
//           >
//             Add Location
//           </Button>
//         </div>
//       </CardHeader>

//       <CardContent>
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-gray-100">
//               <TableHead className="font-bold text-gray-700">Name</TableHead>
//               <TableHead className="font-bold text-gray-700">Capacity</TableHead>
//               <TableHead className="font-bold text-gray-700">Owner</TableHead>
//               <TableHead className="font-bold text-gray-700">Status</TableHead>
//               <TableHead className="font-bold text-gray-700">Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {filtered.map((l) => (
//               <TableRow key={l.id} className="hover:bg-gray-50">
//                 <TableCell className="font-medium">{l.name}</TableCell>
//                 <TableCell>{l.capacity}</TableCell>
//                 <TableCell>{l.owner}</TableCell>
//                 <TableCell>
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-bold
//                       ${
//                         l.status === "active"
//                           ? "bg-green-100 text-green-700"
//                           : l.status === "maintenance"
//                           ? "bg-yellow-100 text-yellow-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                   >
//                     {l.status}
//                   </span>
//                 </TableCell>
//                 <TableCell>
//                   <DropdownMenu>
//                     <DropdownMenuTrigger asChild>
//                       <Button variant="ghost" size="sm">
//                         <MoreHorizontal />
//                       </Button>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent>
//                       <DropdownMenuItem onClick={() => openModal(l)}>
//                         Edit
//                       </DropdownMenuItem>
//                       <DropdownMenuItem onClick={() => handleDelete(l.id)}>
//                         Delete
//                       </DropdownMenuItem>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </CardContent>

//   {/* MODAL */}
//   <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//     <DialogContent className="sm:max-w-lg bg-white w-[95%] sm:w-auto">
//       <DialogHeader>
//         <DialogTitle className="font-bold text-primary">
//           {editingLocation ? "Edit Location" : "Add Location"}
//         </DialogTitle>
//       </DialogHeader>

//       {/* Make inputs responsive */}
//       <div className="flex flex-col gap-4 mt-2">
//         <Input
//           placeholder="Name"
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           className="w-full"
//         />
//         <Input
//           type="number"
//           placeholder="Capacity"
//           value={form.capacity}
//           onChange={(e) =>
//             setForm({ ...form, capacity: parseInt(e.target.value) || 0 })
//           }
//           className="w-full"
//         />
//         <Input
//           placeholder="Owner Name"
//           value={form.owner}
//           onChange={(e) => setForm({ ...form, owner: e.target.value })}
//           className="w-full"
//         />
//         <select
//           value={form.status}
//           onChange={(e) => setForm({ ...form, status: e.target.value })}
//           className="p-2 border rounded w-full"
//         >
//           <option value="active">Active</option>
//           <option value="maintenance">Maintenance</option>
//           <option value="canceled">Canceled</option>
//         </select>
//       </div>

//           <DialogFooter className="mt-4">
//             <Button
//               onClick={handleSave}
//               className="bg-primary text-white hover:bg-secondary"
//             >
//               {editingLocation ? "Update" : "Save"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </Card>
//   );
// }




import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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

export default function Locations({ locations, setLocations }) {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    capacity: 0,
    owner: "",
    location: "",
    status: "active",
  });
  const [editingLocation, setEditingLocation] = useState(null);

  const filtered = locations.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (location = null) => {
    if (location) {
      setEditingLocation(location);
      setForm({
        name: location.name,
        capacity: location.capacity,
        owner: location.owner,
        location: location.location,
        status: location.status,
      });
    } else {
      setEditingLocation(null);
      setForm({ name: "", capacity: 0, owner: "", location: "", status: "active" });
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!form.name || !form.capacity || !form.owner || !form.location || !form.status) {
      toast("All fields are required.", { variant: "destructive" });
      return;
    }

    if (editingLocation) {
      setLocations(
        locations.map((l) =>
          l.id === editingLocation.id ? { ...l, ...form } : l
        )
      );
      toast("Location updated successfully!");
    } else {
      setLocations([...locations, { id: Date.now(), ...form }]);
      toast("Location added successfully!");
    }

    setIsModalOpen(false);
    setEditingLocation(null);
    setForm({ name: "", capacity: 0, owner: "", location: "", status: "active" });
  };

  const handleDelete = (id) => {
    setLocations(locations.filter((l) => l.id !== id));
    toast("Location deleted successfully.", { variant: "destructive" });
  };

  return (
    <div className="space-y-6">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">Event Locations</h2>

      {/* Search + Button */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <Input
          placeholder="Search locations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 min-w-[250px] border-gray-300 focus:border-purple-600 focus:ring-purple-600"
        />
        <Button
          onClick={() => openModal()}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5"
        >
          Add Location
        </Button>
      </div>

      {/* Table */}
      <Card className="shadow-md rounded-xl">
        <CardContent>
          <div className="overflow-x-auto">
            {/* <Table>
              <TableHeader>
                <TableRow className="bg-gray-100">
                  <TableHead className="font-bold text-gray-700">Name</TableHead>
                  <TableHead className="font-bold text-gray-700">Capacity</TableHead>
                  <TableHead className="font-bold text-gray-700">Owner</TableHead>
                  <TableHead className="font-bold text-gray-700">Location</TableHead>
                  <TableHead className="font-bold text-gray-700">Status</TableHead>
                  <TableHead className="font-bold text-gray-700 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((l, idx) => (
                  <TableRow
                    key={l.id}
                    className={`${
                      idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                    } hover:bg-gray-100 transition`}
                  >
                    <TableCell className="font-medium">{l.name}</TableCell>
                    <TableCell>{l.capacity}</TableCell>
                    <TableCell>{l.owner}</TableCell>
                    <TableCell>{l.location}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-bold
                          ${
                            l.status === "active"
                              ? "bg-green-100 text-green-700"
                              : l.status === "maintenance"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                      >
                        {l.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => openModal(l)}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDelete(l.id)}>
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table> */}
            <Table>
  <TableHeader>
    <TableRow className="bg-gray-100">
      <TableHead className="px-4 py-3 text-left font-semibold text-gray-700">
        Name
      </TableHead>
      <TableHead className="px-4 py-3 text-left font-semibold text-gray-700">
        Capacity
      </TableHead>
      <TableHead className="px-4 py-3 text-left font-semibold text-gray-700">
        Owner
      </TableHead>
      <TableHead className="px-4 py-3 text-left font-semibold text-gray-700">
        Location
      </TableHead>
      <TableHead className="px-4 py-3 text-left font-semibold text-gray-700">
        Status
      </TableHead>
      <TableHead className="px-4 py-3 text-right font-semibold text-gray-700">
        Actions
      </TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    {filtered.map((l, idx) => (
      <TableRow
        key={l.id}
        className={`${
          idx % 2 === 0 ? "bg-white" : "bg-gray-50"
        } hover:bg-gray-100 transition`}
      >
        <TableCell className="px-4 py-3 font-medium text-gray-800">
          {l.name}
        </TableCell>
        <TableCell className="px-4 py-3 text-gray-600">
          {l.capacity}
        </TableCell>
        <TableCell className="px-4 py-3 text-gray-600">
          {l.owner}
        </TableCell>
        <TableCell className="px-4 py-3 text-gray-600">
          {l.location}
        </TableCell>
        <TableCell className="px-4 py-3">
          <span
            className={`px-2 py-1 rounded-full text-xs font-bold
              ${
                l.status === "active"
                  ? "bg-green-100 text-green-700"
                  : l.status === "maintenance"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
          >
            {l.status}
          </span>
        </TableCell>
        <TableCell className="px-4 py-3 text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => openModal(l)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDelete(l.id)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

          </div>
        </CardContent>
      </Card>

      {/* MODAL */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg bg-white w-[95%] sm:w-auto">
          <DialogHeader>
            <DialogTitle className="font-bold text-purple-600">
              {editingLocation ? "Edit Location" : "Add Location"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-2">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Capacity"
              value={form.capacity}
              onChange={(e) =>
                setForm({ ...form, capacity: parseInt(e.target.value) || 0 })
              }
            />
            <Input
              placeholder="Owner Name"
              value={form.owner}
              onChange={(e) => setForm({ ...form, owner: e.target.value })}
            />
            <Input
              placeholder="Location"
              value={form.location}
              onChange={(e) => setForm({ ...form, location: e.target.value })}
            />
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="p-2 border rounded"
            >
              <option value="active">Active</option>
              <option value="maintenance">Maintenance</option>
              <option value="canceled">Canceled</option>
            </select>
          </div>

          <DialogFooter className="mt-4">
            <Button
              onClick={handleSave}
              className="bg-purple-600 text-white hover:bg-purple-700"
            >
              {editingLocation ? "Update" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
