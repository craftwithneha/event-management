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

// // ✅ Avatar import
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// // ✅ ShadCN Select import
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";

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
//     const phoneRegex = /^\+92\s\d{3}\d{7}$/; // e.g. +92 3114776468
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (!form.name || !form.email || !form.address || !form.phone) {
//       toast("All fields are required.", {
//         style: { background: "#111", color: "#E5E5E5" },
//       });
//       return;
//     }

//     if (!phoneRegex.test(form.phone)) {
//       toast("Invalid phone format. Use +92 3XXXXXXXXX", {
//         style: { background: "#111", color: "#E5E5E5" },
//       });
//       return;
//     }

//     if (!emailRegex.test(form.email)) {
//       toast("Please enter a valid email address.", {
//         style: { background: "#111", color: "#E5E5E5" },
//       });
//       return;
//     }

//     if (editingUser) {
//       setUsers(
//         users.map((u) =>
//           u.id === editingUser.id ? { ...u, ...form } : u
//         )
//       );
//       toast("User updated successfully!", {
//         style: { background: "#111", color: "#E5E5E5" },
//       });
//     } else {
//       setUsers([...users, { id: Date.now(), ...form }]);
//       toast("User added successfully!", {
//         style: { background: "#111", color: "#E5E5E5" },
//       });
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
//     toast("User deleted successfully.", {
//       style: { background: "#111", color: "#E5E5E5" },
//     });
//   };

//   return (
//     <div className="space-y-6 w-full px-2 sm:px-4 bg-[#E5E5E5] min-h-screen py-6">
//       {/* Heading */}
//       <h1 className="text-2xl md:text-3xl font-bold text-center text-[#14213D]">
//         Users
//       </h1>

//       {/* Search + Add User */}
//       <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
//         <Input
//           placeholder="Search users..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="flex-1 rounded-lg w-full bg-white"
//         />
//         <Button
//           onClick={() => openModal()}
//           className="rounded-lg px-6 w-full sm:w-auto bg-[#14213D] text-white hover:opacity-90 transition"
//         >
//           + Add User
//         </Button>
//       </div>

//       {/* Table */}
//       <div className="rounded-xl border shadow-sm w-full overflow-hidden">
//         <Table className="w-full bg-[#14213D] text-white">
//           <TableHeader>
//             <TableRow className="bg-[#0f192f]">
//               <TableHead className="font-semibold px-4 py-3 text-white">Name</TableHead>
//               <TableHead className="font-semibold px-4 py-3 text-white">Email</TableHead>
//               <TableHead className="font-semibold px-4 py-3 text-white">Address</TableHead>
//               <TableHead className="font-semibold px-4 py-3 text-white">Phone</TableHead>
//               <TableHead className="font-semibold px-4 py-3 text-white">Role</TableHead>
//               <TableHead className="font-semibold px-4 py-3 text-center text-white">
//                 Actions
//               </TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {filtered.length > 0 ? (
//               filtered.map((u) => (
//                 <TableRow
//                   key={u.id}
//                   className="hover:bg-[#1f2b4d] text-sm md:text-base border-b border-gray-700"
//                 >
//                   <TableCell className="px-4 py-4 flex items-center gap-3">
//                     <Avatar className="h-9 w-9 font-semibold bg-gray-100 text-gray-800">
//                       <AvatarFallback>
//                         {u.name
//                           .split(" ")
//                           .map((n) => n[0])
//                           .join("")
//                           .toUpperCase()}
//                       </AvatarFallback>
//                     </Avatar>
//                     <span className="font-medium text-white">{u.name}</span>
//                   </TableCell>
//                   <TableCell className="px-4 py-4">{u.email}</TableCell>
//                   <TableCell className="px-4 py-4">{u.address}</TableCell>
//                   <TableCell className="px-4 py-4">{u.phone}</TableCell>
//                   <TableCell className="px-4 py-4">
//                     <span
//                       className={`px-2 py-1 text-xs md:text-sm rounded-full font-medium ${
//                         roleColors[u.role] || roleColors.default
//                       }`}
//                     >
//                       {u.role}
//                     </span>
//                   </TableCell>
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
//                         <DropdownMenuItem onClick={() => openModal(u)}>
//                           Edit
//                         </DropdownMenuItem>
//                         <DropdownMenuItem
//                           onClick={() => handleDelete(u.id)}
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
//                   No users found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Modal */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className="sm:max-w-lg w-[95%] rounded-xl p-6 bg-white shadow-xl border">
//           <DialogHeader>
//             <DialogTitle className="text-xl font-semibold text-[#14213D]">
//               {editingUser ? "Edit User" : "Add User"}
//             </DialogTitle>
//           </DialogHeader>

//           <div className="flex flex-col gap-4 mt-3">
//             <Input
//               placeholder="Name"
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               className="bg-gray-50"
//             />
//             <Input
//               type="email"
//               placeholder="Email"
//               value={form.email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               className="bg-gray-50"
//             />
//             <Input
//               placeholder="Address"
//               value={form.address}
//               onChange={(e) => setForm({ ...form, address: e.target.value })}
//               className="bg-gray-50"
//             />
//             <Input
//               type="text"
//               placeholder="+92 3XXXXXXXXX"
//               value={form.phone}
//               onChange={(e) => setForm({ ...form, phone: e.target.value })}
//               className="bg-gray-50"
//             />
//             <Select
//               value={form.role}
//               onValueChange={(value) => setForm({ ...form, role: value })}
//             >
//               <SelectTrigger className="bg-gray-50 w-full">
//                 <SelectValue placeholder="Select role" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="admin">Admin</SelectItem>
//                 <SelectItem value="sales">Salesperson</SelectItem>
//                 <SelectItem value="owner">Owner</SelectItem>
//                 <SelectItem value="waiter">Waiter</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <DialogFooter className="mt-6">
//             <Button
//               onClick={handleSave}
//               className="rounded-lg px-6 bg-gradient-to-r from-[#14213D] to-[#6B7280] text-white w-full sm:w-auto"
//             >
//               {editingUser ? "Update User" : "Save User"}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// }

import React, { useState } from 'react'
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { MoreHorizontal } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'

export default function Users ({ users, setUsers }) {
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    role: 'admin'
  })
  const [editingUser, setEditingUser] = useState(null)

  const roleColors = {
    admin: 'bg-purple-100 text-purple-700',
    sales: 'bg-green-100 text-green-700',
    owner: 'bg-orange-100 text-orange-700',
    waiter: 'bg-blue-100 text-blue-700',
    default: 'bg-gray-100 text-gray-700'
  }

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase())
  )

  const openModal = (user = null) => {
    if (user) {
      setEditingUser(user)
      setForm({
        name: user.name,
        email: user.email,
        address: user.address || '',
        phone: user.phone || '',
        role: user.role
      })
    } else {
      setEditingUser(null)
      setForm({
        name: '',
        email: '',
        address: '',
        phone: '',
        role: 'admin'
      })
    }
    setIsModalOpen(true)
  }

  const handleSave = () => {
    const phoneRegex = /^\+92\s\d{3}\d{7}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!form.name || !form.email || !form.address || !form.phone) {
      toast('All fields are required.', {
        // style: { background: "#111", color: "#E5E5E5" },
        style: {
          background:
            'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
          color: '#FFFFFF',
          backdropFilter: 'blur(12px)', // glass effect
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '1rem',
          padding: '14px 22px',
          fontWeight: '600',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
          transition: 'all 0.3s ease'
        }
      })
      return
    }

    if (!phoneRegex.test(form.phone)) {
      toast('Invalid phone format. Use +92 3XXXXXXXXX', {
        // style: { background: "#111", color: "#E5E5E5" },
        style: {
          background:
            'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
          color: '#FFFFFF',
          backdropFilter: 'blur(12px)', // glass effect
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '1rem',
          padding: '14px 22px',
          fontWeight: '600',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
          transition: 'all 0.3s ease'
        }
      })
      return
    }

    if (!emailRegex.test(form.email)) {
      toast('Please enter a valid email address.', {
        // style: { background: "#111", color: "#E5E5E5" },
        style: {
          background:
            'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
          color: '#FFFFFF',
          backdropFilter: 'blur(12px)', // glass effect
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '1rem',
          padding: '14px 22px',
          fontWeight: '600',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
          transition: 'all 0.3s ease'
        }
      })
      return
    }

    if (editingUser) {
      setUsers(
        users.map(u => (u.id === editingUser.id ? { ...u, ...form } : u))
      )
      toast('User updated successfully!', {
        // style: { background: "#111", color: "#E5E5E5" },
        style: {
          background:
            'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
          color: '#FFFFFF',
          backdropFilter: 'blur(12px)', // glass effect
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '1rem',
          padding: '14px 22px',
          fontWeight: '600',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
          transition: 'all 0.3s ease'
        }
      })
    } else {
      setUsers([...users, { id: Date.now(), ...form }])
      toast('User added successfully!', {
        style: {
          background:
            'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
          color: '#FFFFFF',
          backdropFilter: 'blur(12px)', // glass effect
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: '1rem',
          padding: '14px 22px',
          fontWeight: '600',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
          transition: 'all 0.3s ease'
        }
      })
    }

    setIsModalOpen(false)
    setEditingUser(null)
    setForm({
      name: '',
      email: '',
      address: '',
      phone: '',
      role: 'admin'
    })
  }

  const handleDelete = id => {
    setUsers(users.filter(u => u.id !== id))
    toast('User deleted successfully.', {
      style: {
        background:
          'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
        color: '#FFFFFF',
        backdropFilter: 'blur(12px)', // glass effect
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: '1rem',
        padding: '14px 22px',
        fontWeight: '600',
        boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
        transition: 'all 0.3s ease'
      }
    })
  }

  return (
    <div className='space-y-6 w-full px-2 sm:px-4 bg-[#E5E5E5] min-h-screen py-6'>
      <div>
      
        <h1 className='text-3xl md:text-3xl  font-extrabold text-center text-[#14213D]'>
          Users
        </h1>
        <p className='text-sm mt-3  text-center text-[#14213D]'>
          View and manage all registered users with essential details.
        </p>
      </div>

      {/* Search + Add User */}
      <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3'>
        <Input
          placeholder='Search users...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='flex-1 rounded-lg w-full bg-white border-blue-950'
        />
        <Button
          onClick={() => openModal()}
          className='rounded-lg px-6 w-full sm:w-auto bg-[#14213D] text-white hover:opacity-90 transition'
        >
          + Add User
        </Button>
      </div>

      {/* Table */}
      <div className='rounded-xl border shadow-sm w-full overflow-hidden'>
        <Table className='w-full bg-[#14213D] text-white'>
          <TableHeader>
            <TableRow className='bg-[#0f192f]'>
              <TableHead className='font-semibold px-4 py-3 text-white'>
                Name
              </TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>
                Email
              </TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>
                Address
              </TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>
                Phone
              </TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>
                Role
              </TableHead>
              <TableHead className='font-semibold px-4 py-3 text-center text-white'>
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {filtered.length > 0 ? (
              filtered.map(u => (
                <TableRow
                  key={u.id}
                  className='hover:bg-[#1f2b4d] text-sm md:text-base border-b border-gray-700'
                >
                  <TableCell className='px-4 py-4 font-medium text-white'>
                    {u.name}
                  </TableCell>
                  <TableCell className='px-4 py-4'>{u.email}</TableCell>
                  <TableCell className='px-4 py-4'>{u.address}</TableCell>
                  <TableCell className='px-4 py-4'>{u.phone}</TableCell>
                  <TableCell className='px-4 py-4'>
                    <Badge className={roleColors[u.role] || roleColors.default}>
                      {u.role}
                    </Badge>
                  </TableCell>
                  <TableCell className='px-4 py-4 text-center'>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant='ghost'
                          size='sm'
                          className='rounded-full text-white hover:bg-white/20'
                        >
                          <MoreHorizontal />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className='bg-white text-[#14213D]'>
                        <DropdownMenuItem onClick={() => openModal(u)} className="cursor-pointer">
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(u.id)}
                          className=' cursor-pointer'
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
                  className='text-center py-6 text-gray-300'
                >
                  No users found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className='sm:max-w-lg w-[95%] rounded-xl p-6 bg-white shadow-xl border'>
          <DialogHeader>
            <DialogTitle className='text-xl font-semibold text-[#14213D]'>
              {editingUser ? 'Edit User' : 'Add User'}
            </DialogTitle>
          </DialogHeader>

          <div className='flex flex-col gap-4 mt-3'>
            <Input
              placeholder='Name'
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className='bg-gray-50'
            />
            <Input
              type='email'
              placeholder='Email'
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              className='bg-gray-50'
            />
            <Input
              placeholder='Address'
              value={form.address}
              onChange={e => setForm({ ...form, address: e.target.value })}
              className='bg-gray-50'
            />
            <Input
              type='text'
              placeholder='+92 3XXXXXXXXX'
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className='bg-gray-50'
            />
            <Select
              value={form.role}
              onValueChange={value => setForm({ ...form, role: value })}
            >
              <SelectTrigger className='bg-gray-50 w-full'>
                <SelectValue placeholder='Select role' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='admin'>Admin</SelectItem>
                <SelectItem value='sales'>Salesperson</SelectItem>
                <SelectItem value='owner'>Owner</SelectItem>
                <SelectItem value='waiter'>Waiter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className='mt-6'>
            <Button
              onClick={handleSave}
              className='rounded-lg px-6 bg-gradient-to-r from-[#14213D] to-[#6B7280] text-white w-full sm:w-auto'
            >
              {editingUser ? 'Update User' : 'Save User'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
