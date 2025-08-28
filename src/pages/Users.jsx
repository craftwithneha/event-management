
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

// ✅ Avatar import
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
   

    <div className="space-y-6 w-full px-2 sm:px-4 bg-[#E5E5E5] min-h-screen py-6">
  {/* Heading */}
  <div>
    <h1 className="text-2xl md:text-3xl font-bold text-center text-[#14213D]">
      Users
    </h1>
  </div>

  {/* Search + Add User */}
  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
    <Input
      placeholder="Search users..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="flex-1 rounded-lg w-full bg-white"
    />
    <Button
      onClick={() => openModal()}
      className="rounded-lg px-6 w-full sm:w-auto bg-[#14213D] text-white hover:opacity-90 transition"
    >
      + Add User
    </Button>
  </div>

  {/* Table */}
  <div className="rounded-xl border shadow-sm w-full overflow-hidden">
    <Table className="w-full bg-[#14213D] text-white">
      <TableHeader>
        <TableRow className="bg-[#0f192f]">
          <TableHead className="font-semibold px-4 py-3 text-white">Name</TableHead>
          <TableHead className="font-semibold px-4 py-3 text-white">Email</TableHead>
          <TableHead className="font-semibold px-4 py-3 text-white">Address</TableHead>
          <TableHead className="font-semibold px-4 py-3 text-white">Phone</TableHead>
          <TableHead className="font-semibold px-4 py-3 text-white">Role</TableHead>
          <TableHead className="font-semibold px-4 py-3 text-center text-white">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
    
      <TableBody>
  {filtered.length > 0 ? (
    filtered.map((u) => (
      <TableRow
        key={u.id}
        className="hover:bg-[#1f2b4d] text-sm md:text-base border-b border-gray-700"
      >
     
<TableCell className="px-4 py-4 flex items-center gap-3">
  <Avatar
    className={`h-9 w-9 font-semibold flex items-center justify-center
      ${u.role === "admin" ? "bg-purple-100 text-purple-800" : ""}
      ${u.role === "sales" ? "bg-green-100 text-green-800" : ""}
      ${u.role === "owner" ? "bg-orange-100 text-orange-800" : ""}
      ${u.role === "waiter" ? "bg-blue-100 text-blue-800" : ""}
      ${!["admin","sales","owner","waiter"].includes(u.role) ? "bg-gray-100 text-gray-800" : ""}
    `}
  >
    <AvatarFallback>
      {u.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()}
    </AvatarFallback>
  </Avatar>
  <span className="font-medium">{u.name}</span>
</TableCell>


        <TableCell className="px-4 py-4">{u.email}</TableCell>
        <TableCell className="px-4 py-4">{u.address}</TableCell>
        <TableCell className="px-4 py-4">{u.phone}</TableCell>

        {/* Role with colors */}
        <TableCell className="px-4 py-4">
          <span
            className={`px-2 py-1 text-xs md:text-sm rounded-full font-medium ${
              roleColors[u.role] || roleColors.default
            }`}
          >
            {u.role}
          </span>
        </TableCell>

        {/* Actions */}
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
              <DropdownMenuItem onClick={() => openModal(u)}>
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleDelete(u.id)}
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
        No users found.
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
          {editingUser ? "Edit User" : "Add User"}
        </DialogTitle>
      </DialogHeader>

      <div className="flex flex-col gap-4 mt-3">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="bg-gray-50"
        />
        <Input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-gray-50"
        />
        <Input
          placeholder="Address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="bg-gray-50"
        />
        <Input
          placeholder="Phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="bg-gray-50"
        />
        <select
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="p-2 border rounded-lg bg-gray-50 w-full"
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
          className="rounded-lg px-6 bg-gradient-to-r from-[#14213D] to-[#6B7280] text-white w-full sm:w-auto"
        >
          {editingUser ? "Update User" : "Save User"}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</div>
  );
}
