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
// import { MoreHorizontal, MoreHorizontalIcon, MoreVertical } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";

// export default function Users({ users, setUsers }) {
//   const [search, setSearch] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     address: "",
//     phone: "",
//     role: "admin",
//   });
//   const [editingUser, setEditingUser] = useState(null);

//   // role wise colors
//   const roleColors = {
//     admin: "bg-purple-100 text-purple-700",
//     sales: "bg-green-100 text-green-700",
//     owner: "bg-orange-100 text-orange-700",
//     waiter: "bg-blue-100 text-blue-700",
//     default: "bg-gray-100 text-gray-700",
//   };

//   const filtered = users.filter((u) =>
//     u.name.toLowerCase().includes(search.toLowerCase())
//   );

//   const openModal = (user = null) => {
//     if (user) {
//       setEditingUser(user);
//       setForm({
//         name: user.name,
//         email: user.email,
//         address: user.address || "",
//         phone: user.phone || "",
//         role: user.role,
//       });
//     } else {
//       setEditingUser(null);
//       setForm({
//         name: "",
//         email: "",
//         address: "",
//         phone: "",
//         role: "admin",
//       });
//     }
//     setIsModalOpen(true);
//   };

//   const handleSave = () => {
//     if (!form.name || !form.email || !form.address || !form.phone) {
//       toast("All fields are required.", { variant: "destructive" });
//       return;
//     }

//     if (editingUser) {
//       setUsers(
//         users.map((u) =>
//           u.id === editingUser.id ? { ...u, ...form } : u
//         )
//       );
//       toast("User updated successfully!");
//     } else {
//       setUsers([...users, { id: Date.now(), ...form }]);
//       toast("User added successfully!");
//     }

//     setIsModalOpen(false);
//     setEditingUser(null);
//     setForm({
//       name: "",
//       email: "",
//       address: "",
//       phone: "",
//       role: "admin",
//     });
//   };

//   const handleDelete = (id) => {
//     setUsers(users.filter((u) => u.id !== id));
//     toast("User deleted successfully.", { variant: "destructive" });
//   };

//   return (
//     <Card className="shadow-lg border rounded-2xl">
//       {/* HEADER */}
//       <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-4">
//         <CardTitle className="text-xl font-bold">Users</CardTitle>
//         <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
//           <Input
//             placeholder="Search users..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full sm:w-56"
//           />
//           <Button onClick={() => openModal()} className="rounded-xl">
//             + Add User
//           </Button>
//         </div>
//       </CardHeader>

//       {/* TABLE */}
//       <CardContent>
//         <div className="rounded-lg border overflow-x-auto">
//           <Table className="min-w-[700px]">
//             <TableHeader>
//               <TableRow className="bg-gray-100">
//                 <TableHead className="font-bold">Name</TableHead>
//                 <TableHead className="font-bold">Email</TableHead>
//                 <TableHead className="font-bold">Address</TableHead>
//                 <TableHead className="font-bold">Phone</TableHead>
//                 <TableHead className="font-bold">Role</TableHead>
//                 <TableHead className="font-bold">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filtered.length > 0 ? (
//                 filtered.map((u) => (
//                   <TableRow key={u.id} className="hover:bg-gray-50">
//                     <TableCell>{u.name}</TableCell>
//                     <TableCell>{u.email}</TableCell>
//                     <TableCell>{u.address}</TableCell>
//                     <TableCell>{u.phone}</TableCell>
//                     <TableCell>
//                       <span
//                         className={`px-2 py-1 text-xs rounded-full font-medium ${
//                           roleColors[u.role] || roleColors.default
//                         }`}
//                       >
//                         {u.role}
//                       </span>
//                     </TableCell>
//                     <TableCell>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <Button variant="ghost" size="sm" className="rounded-full">
//                             <MoreHorizontal />
//                           </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent>
//                           <DropdownMenuItem onClick={() => openModal(u)}>Edit</DropdownMenuItem>
//                           <DropdownMenuItem
//                             onClick={() => handleDelete(u.id)}
//                             className="text-red-600 cursor-pointer"
//                           >
//                             Delete
//                           </DropdownMenuItem>
//                         </DropdownMenuContent>
//                       </DropdownMenu>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell
//                     colSpan={6}
//                     className="text-center py-6 text-gray-500"
//                   >
//                     No users found.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>

//       {/* MODAL */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className="sm:max-w-lg w-[95%] rounded-xl">
//           <DialogHeader>
//             <DialogTitle className="text-lg font-semibold">
//               {editingUser ? "Edit User" : "Add User"}
//             </DialogTitle>
//           </DialogHeader>

//           <div className="flex flex-col gap-4 mt-3">
//             <Input
//               placeholder="Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="w-full"
//             />
//             <Input
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="w-full"
//             />
//             <Input
//               placeholder="Address"
//               value={form.address}
//               onChange={(e) => setForm({ ...form, address: e.target.value })}
//               className="w-full"
//             />
//             <Input
//               placeholder="Phone"
//               value={form.phone}
//               onChange={(e) => setForm({ ...form, phone: e.target.value })}
//               className="w-full"
//             />
//             <select
//               value={form.role}
//               onChange={(e) => setForm({ ...form, role: e.target.value })}
//               className="p-2 border rounded-lg bg-white w-full"
//             >
//               <option value="admin">Admin</option>
//               <option value="sales">Salesperson</option>
//               <option value="owner">Owner</option>
//               <option value="waiter">Waiter</option>
//             </select>
//           </div>

//           <DialogFooter className="mt-4">
//             <Button onClick={handleSave} className="rounded-lg px-6">
//               {editingUser ? "Update User" : "Save User"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </Card>
//   );
// }


import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
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

export default function Users({ users, setUsers }) {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    role: "admin",
  });
  const [editingUser, setEditingUser] = useState(null);

  // role wise colors
  const roleColors = {
    admin: "bg-purple-100 text-purple-700",
    sales: "bg-green-100 text-green-700",
    owner: "bg-orange-100 text-orange-700",
    waiter: "bg-blue-100 text-blue-700",
    default: "bg-gray-100 text-gray-700",
  };

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  const openModal = (user = null) => {
    if (user) {
      setEditingUser(user);
      setForm({
        name: user.name,
        email: user.email,
        address: user.address || "",
        phone: user.phone || "",
        role: user.role,
      });
    } else {
      setEditingUser(null);
      setForm({
        name: "",
        email: "",
        address: "",
        phone: "",
        role: "admin",
      });
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!form.name || !form.email || !form.address || !form.phone) {
      toast("All fields are required.", { variant: "destructive" });
      return;
    }

    if (editingUser) {
      setUsers(
        users.map((u) =>
          u.id === editingUser.id ? { ...u, ...form } : u
        )
      );
      toast("User updated successfully!");
    } else {
      setUsers([...users, { id: Date.now(), ...form }]);
      toast("User added successfully!");
    }

    setIsModalOpen(false);
    setEditingUser(null);
    setForm({
      name: "",
      email: "",
      address: "",
      phone: "",
      role: "admin",
    });
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
    toast("User deleted successfully.", { variant: "destructive" });
  };

  return (
    <Card className="shadow-lg border rounded-2xl">
      {/* HEADER */}
      <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pb-4">
        <CardTitle className="text-xl font-bold">Users</CardTitle>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <Input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-56"
          />
          <Button
            onClick={() => openModal()}
            className="rounded-xl w-full sm:w-auto"
          >
            + Add User
          </Button>
        </div>
      </CardHeader>

      {/* TABLE */}
      <CardContent>
        <div className="rounded-lg border overflow-x-auto">
          <Table className="min-w-[700px]">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="font-bold">Name</TableHead>
                <TableHead className="font-bold">Email</TableHead>
                <TableHead className="font-bold">Address</TableHead>
                <TableHead className="font-bold">Phone</TableHead>
                <TableHead className="font-bold">Role</TableHead>
                <TableHead className="font-bold">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.length > 0 ? (
                filtered.map((u) => (
                  <TableRow key={u.id} className="hover:bg-gray-50">
                    <TableCell>{u.name}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.address}</TableCell>
                    <TableCell>{u.phone}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-medium ${
                          roleColors[u.role] || roleColors.default
                        }`}
                      >
                        {u.role}
                      </span>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="rounded-full"
                          >
                            <MoreHorizontal />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => openModal(u)}>
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => handleDelete(u.id)}
                            className="text-red-600"
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
                  <TableCell
                    colSpan={6}
                    className="text-center py-6 text-gray-500"
                  >
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* MODAL */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-lg w-[95%] rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              {editingUser ? "Edit User" : "Add User"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-3">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Address"
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full"
            />
            <Input
              placeholder="Phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full"
            />
            <select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              className="p-2 border rounded-lg bg-white w-full"
            >
              <option value="admin">Admin</option>
              <option value="sales">Salesperson</option>
              <option value="owner">Owner</option>
              <option value="waiter">Waiter</option>
            </select>
          </div>

          <DialogFooter className="mt-4">
            <Button
              onClick={handleSave}
              className="rounded-lg px-6 w-full sm:w-auto"
            >
              {editingUser ? "Update User" : "Save User"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}