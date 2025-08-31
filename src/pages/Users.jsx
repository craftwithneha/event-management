// Without Appwrite
// import React, { useState } from 'react'
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell
// } from '@/components/ui/table'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { toast } from 'sonner'
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem
// } from '@/components/ui/dropdown-menu'
// import { MoreHorizontal } from 'lucide-react'
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter
// } from '@/components/ui/dialog'
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue
// } from '@/components/ui/select'
// import { Badge } from '@/components/ui/badge'

// export default function Users ({ users, setUsers }) {
//   const [search, setSearch] = useState('')
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     address: '',
//     phone: '',
//     role: 'admin'
//   })
//   const [editingUser, setEditingUser] = useState(null)

//   const roleColors = {
//     admin: 'bg-purple-100 text-purple-700',
//     sales: 'bg-green-100 text-green-700',
//     owner: 'bg-orange-100 text-orange-700',
//     waiter: 'bg-blue-100 text-blue-700',
//     default: 'bg-gray-100 text-gray-700'
//   }

//   const filtered = users.filter(u =>
//     u.name.toLowerCase().includes(search.toLowerCase())
//   )

//   const openModal = (user = null) => {
//     if (user) {
//       setEditingUser(user)
//       setForm({
//         name: user.name,
//         email: user.email,
//         address: user.address || '',
//         phone: user.phone || '',
//         role: user.role
//       })
//     } else {
//       setEditingUser(null)
//       setForm({
//         name: '',
//         email: '',
//         address: '',
//         phone: '',
//         role: 'admin'
//       })
//     }
//     setIsModalOpen(true)
//   }

//   const handleSave = () => {
//     const phoneRegex = /^\+92\s\d{3}\d{7}$/
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

//     if (!form.name || !form.email || !form.address || !form.phone) {
//       toast('All fields are required.', {
//         // style: { background: "#111", color: "#E5E5E5" },
//         style: {
//           background:
//             'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
//           color: '#FFFFFF',
//           backdropFilter: 'blur(12px)', // glass effect
//           border: '1px solid rgba(255,255,255,0.2)',
//           borderRadius: '1rem',
//           padding: '14px 22px',
//           fontWeight: '600',
//           boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
//           transition: 'all 0.3s ease'
//         }
//       })
//       return
//     }

//     if (!phoneRegex.test(form.phone)) {
//       toast('Invalid phone format. Use +92 3XXXXXXXXX', {
//         // style: { background: "#111", color: "#E5E5E5" },
//         style: {
//           background:
//             'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
//           color: '#FFFFFF',
//           backdropFilter: 'blur(12px)', // glass effect
//           border: '1px solid rgba(255,255,255,0.2)',
//           borderRadius: '1rem',
//           padding: '14px 22px',
//           fontWeight: '600',
//           boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
//           transition: 'all 0.3s ease'
//         }
//       })
//       return
//     }

//     if (!emailRegex.test(form.email)) {
//       toast('Please enter a valid email address.', {
//         // style: { background: "#111", color: "#E5E5E5" },
//         style: {
//           background:
//             'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
//           color: '#FFFFFF',
//           backdropFilter: 'blur(12px)', // glass effect
//           border: '1px solid rgba(255,255,255,0.2)',
//           borderRadius: '1rem',
//           padding: '14px 22px',
//           fontWeight: '600',
//           boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
//           transition: 'all 0.3s ease'
//         }
//       })
//       return
//     }

//     if (editingUser) {
//       setUsers(
//         users.map(u => (u.id === editingUser.id ? { ...u, ...form } : u))
//       )
//       toast('User updated successfully!', {
//         // style: { background: "#111", color: "#E5E5E5" },
//         style: {
//           background:
//             'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
//           color: '#FFFFFF',
//           backdropFilter: 'blur(12px)', // glass effect
//           border: '1px solid rgba(255,255,255,0.2)',
//           borderRadius: '1rem',
//           padding: '14px 22px',
//           fontWeight: '600',
//           boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
//           transition: 'all 0.3s ease'
//         }
//       })
//     } else {
//       setUsers([...users, { id: Date.now(), ...form }])
//       toast('User added successfully!', {
//         style: {
//           background:
//             'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
//           color: '#FFFFFF',
//           backdropFilter: 'blur(12px)', // glass effect
//           border: '1px solid rgba(255,255,255,0.2)',
//           borderRadius: '1rem',
//           padding: '14px 22px',
//           fontWeight: '600',
//           boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
//           transition: 'all 0.3s ease'
//         }
//       })
//     }

//     setIsModalOpen(false)
//     setEditingUser(null)
//     setForm({
//       name: '',
//       email: '',
//       address: '',
//       phone: '',
//       role: 'admin'
//     })
//   }

//   const handleDelete = id => {
//     setUsers(users.filter(u => u.id !== id))
//     toast('User deleted successfully.', {
//       style: {
//         background:
//           'linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))', // gradient navy glass
//         color: '#FFFFFF',
//         backdropFilter: 'blur(12px)', // glass effect
//         border: '1px solid rgba(255,255,255,0.2)',
//         borderRadius: '1rem',
//         padding: '14px 22px',
//         fontWeight: '600',
//         boxShadow: '0 8px 20px rgba(0,0,0,0.25)', // subtle shadow
//         transition: 'all 0.3s ease'
//       }
//     })
//   }

//   return (
//     <div className='space-y-6 w-full px-2 sm:px-4 bg-[#E5E5E5] min-h-screen py-6'>
//       <div>

//         <h1 className='text-3xl md:text-3xl  font-extrabold text-center text-[#14213D]'>
//           Users
//         </h1>
//         <p className='text-sm mt-3  text-center text-[#14213D]'>
//           View and manage all registered users with essential details.
//         </p>
//       </div>

//       {/* Search + Add User */}
//       <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3'>
//         <Input
//           placeholder='Search users...'
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           className='flex-1 rounded-lg w-full bg-white border-blue-950'
//         />
//         <Button
//           onClick={() => openModal()}
//           className='rounded-lg px-6 w-full sm:w-auto bg-[#14213D] text-white hover:opacity-90 transition'
//         >
//           + Add User
//         </Button>
//       </div>

//       {/* Table */}
//       <div className='rounded-xl border shadow-sm w-full overflow-hidden'>
//         <Table className='w-full bg-[#14213D] text-white'>
//           <TableHeader>
//             <TableRow className='bg-[#0f192f]'>
//               <TableHead className='font-semibold px-4 py-3 text-white'>
//                 Name
//               </TableHead>
//               <TableHead className='font-semibold px-4 py-3 text-white'>
//                 Email
//               </TableHead>
//               <TableHead className='font-semibold px-4 py-3 text-white'>
//                 Address
//               </TableHead>
//               <TableHead className='font-semibold px-4 py-3 text-white'>
//                 Phone
//               </TableHead>
//               <TableHead className='font-semibold px-4 py-3 text-white'>
//                 Role
//               </TableHead>
//               <TableHead className='font-semibold px-4 py-3 text-center text-white'>
//                 Actions
//               </TableHead>
//             </TableRow>
//           </TableHeader>

//           <TableBody>
//             {filtered.length > 0 ? (
//               filtered.map(u => (
//                 <TableRow
//                   key={u.id}
//                   className='hover:bg-[#1f2b4d] text-sm md:text-base border-b border-gray-700'
//                 >
//                   <TableCell className='px-4 py-4 font-medium text-white'>
//                     {u.name}
//                   </TableCell>
//                   <TableCell className='px-4 py-4'>{u.email}</TableCell>
//                   <TableCell className='px-4 py-4'>{u.address}</TableCell>
//                   <TableCell className='px-4 py-4'>{u.phone}</TableCell>
//                   <TableCell className='px-4 py-4'>
//                     <Badge className={roleColors[u.role] || roleColors.default}>
//                       {u.role}
//                     </Badge>
//                   </TableCell>
//                   <TableCell className='px-4 py-4 text-center'>
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <Button
//                           variant='ghost'
//                           size='sm'
//                           className='rounded-full text-white hover:bg-white/20'
//                         >
//                           <MoreHorizontal />
//                         </Button>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent className='bg-white text-[#14213D]'>
//                         <DropdownMenuItem onClick={() => openModal(u)} className="cursor-pointer">
//                           Edit
//                         </DropdownMenuItem>
//                         <DropdownMenuItem
//                           onClick={() => handleDelete(u.id)}
//                           className=' cursor-pointer'
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
//                 <TableCell
//                   colSpan={6}
//                   className='text-center py-6 text-gray-300'
//                 >
//                   No users found.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>

//       {/* Modal */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className='sm:max-w-lg w-[95%] rounded-xl p-6 bg-white shadow-xl border'>
//           <DialogHeader>
//             <DialogTitle className='text-xl font-semibold text-[#14213D]'>
//               {editingUser ? 'Edit User' : 'Add User'}
//             </DialogTitle>
//           </DialogHeader>

//           <div className='flex flex-col gap-4 mt-3'>
//             <Input
//               placeholder='Name'
//               value={form.name}
//               onChange={e => setForm({ ...form, name: e.target.value })}
//               className='bg-gray-50'
//             />
//             <Input
//               type='email'
//               placeholder='Email'
//               value={form.email}
//               onChange={e => setForm({ ...form, email: e.target.value })}
//               className='bg-gray-50'
//             />
//             <Input
//               placeholder='Address'
//               value={form.address}
//               onChange={e => setForm({ ...form, address: e.target.value })}
//               className='bg-gray-50'
//             />
//             <Input
//               type='text'
//               placeholder='+92 3XXXXXXXXX'
//               value={form.phone}
//               onChange={e => setForm({ ...form, phone: e.target.value })}
//               className='bg-gray-50'
//             />
//             <Select
//               value={form.role}
//               onValueChange={value => setForm({ ...form, role: value })}
//             >
//               <SelectTrigger className='bg-gray-50 w-full'>
//                 <SelectValue placeholder='Select role' />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value='admin'>Admin</SelectItem>
//                 <SelectItem value='sales'>Salesperson</SelectItem>
//                 <SelectItem value='owner'>Owner</SelectItem>
//                 <SelectItem value='waiter'>Waiter</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <DialogFooter className='mt-6'>
//             <Button
//               onClick={handleSave}
//               className='rounded-lg px-6 bg-gradient-to-r from-[#14213D] to-[#6B7280] text-white w-full sm:w-auto'
//             >
//               {editingUser ? 'Update User' : 'Save User'}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }

// // With appwrite
// 'use client'
// import React, { useState, useEffect } from 'react'
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell
// } from '@/components/ui/table'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { toast } from 'sonner'
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem
// } from '@/components/ui/dropdown-menu'
// import { MoreHorizontal } from 'lucide-react'
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
//   DialogDescription
// } from '@/components/ui/dialog'
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue
// } from '@/components/ui/select'
// import { Badge } from '@/components/ui/badge'

// // 🔹 Appwrite client
// import { databases, ID } from '../services/appwrite'

// export default function Users () {
//   const [users, setUsers] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [search, setSearch] = useState('')
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     address: '',
//     phone: '',
//     role: 'admin'
//   })
//   const [editingUser, setEditingUser] = useState(null)

//   //  Fetch users from Appwrite when page loads
//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await databases.listDocuments(
//           import.meta.env.VITE_APPWRITE_DATABASE_ID,
//           import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID
//         )
//         setUsers(res.documents)
//       } catch (err) {
//         console.error('Error fetching users:', err)
//         toast('Failed to fetch users.'),{
//            style: {
//     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
//     color: "#FFFFFF",
//     backdropFilter: "blur(12px)", // glass effect
//     border: "1px solid rgba(255,255,255,0.2)",
//     borderRadius: "1rem",
//     padding: "14px 22px",
//     fontWeight: "600",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
//     transition: "all 0.3s ease",
//   },
//         }
//       } finally {
//         setLoading(false)
//       }
//     }
//     fetchUsers()
//   }, [])

//   const roleColors = {
//     admin: 'bg-purple-100 text-purple-700',
//     sales: 'bg-green-100 text-green-700',
//     owner: 'bg-orange-100 text-orange-700',
//     waiter: 'bg-blue-100 text-blue-700',
//     default: 'bg-gray-100 text-gray-700'
//   }

//   const filtered = users.filter(u =>
//     u.name.toLowerCase().includes(search.toLowerCase())
//   )

//   const openModal = (user = null) => {
//     if (user) {
//       setEditingUser(user)
//       setForm({
//         name: user.name,
//         email: user.email,
//         address: user.address || '',
//         phone: user.phone || '',
//         role: user.role
//       })
//     } else {
//       setEditingUser(null)
//       setForm({ name: '', email: '', address: '', phone: '', role: 'admin' })
//     }
//     setIsModalOpen(true)
//   }

//   // 🔹 SAVE USER (Appwrite + local state)
//   const handleSave = async () => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//     const phoneRegex = /^\+92\s3[0-9]{9}$/

//     if (!form.name || !form.email || !form.address || !form.phone) {
//       toast.error('All fields are required.'),{
//          style: {
//     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
//     color: "#FFFFFF",
//     backdropFilter: "blur(12px)", // glass effect
//     border: "1px solid rgba(255,255,255,0.2)",
//     borderRadius: "1rem",
//     padding: "14px 22px",
//     fontWeight: "600",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
//     transition: "all 0.3s ease",
//   },
//       }
//       return
//     }
//     if (!emailRegex.test(form.email)) {
//       toast.error('Please enter a valid email address.'),{
//          style: {
//     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
//     color: "#FFFFFF",
//     backdropFilter: "blur(12px)", // glass effect
//     border: "1px solid rgba(255,255,255,0.2)",
//     borderRadius: "1rem",
//     padding: "14px 22px",
//     fontWeight: "600",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
//     transition: "all 0.3s ease",
//   },
//       }
//       return
//     }
//     if (!phoneRegex.test(form.phone)) {
//       toast.error('Invalid phone number! Format: +92 3XXXXXXXXX'),{
//          style: {
//     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
//     color: "#FFFFFF",
//     backdropFilter: "blur(12px)", // glass effect
//     border: "1px solid rgba(255,255,255,0.2)",
//     borderRadius: "1rem",
//     padding: "14px 22px",
//     fontWeight: "600",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
//     transition: "all 0.3s ease",
//   }
//       }
//       return
//     }

//     try {
//       if (editingUser) {
//         await databases.updateDocument(
//           import.meta.env.VITE_APPWRITE_DATABASE_ID,
//           import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
//           editingUser.$id,
//           {
//             ...form,
//             role: form.role.trim().toLowerCase()
//           }
//         )
//         setUsers(
//           users.map(u => (u.$id === editingUser.$id ? { ...u, ...form } : u))
//         )
//         toast.success('User updated successfully!'),{
//            style: {
//     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
//     color: "#FFFFFF",
//     backdropFilter: "blur(12px)", // glass effect
//     border: "1px solid rgba(255,255,255,0.2)",
//     borderRadius: "1rem",
//     padding: "14px 22px",
//     fontWeight: "600",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
//     transition: "all 0.3s ease",
//   },
//         }
//       } else {
//         const newUser = await databases.createDocument(
//           import.meta.env.VITE_APPWRITE_DATABASE_ID,
//           import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
//           ID.unique(),
//           {
//             ...form,
//             role: form.role.trim().toLowerCase()
//           }
//         )
//         setUsers([...users, newUser])
//         toast.success('User added successfully!'),{
//            style: {
//     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
//     color: "#FFFFFF",
//     backdropFilter: "blur(12px)", // glass effect
//     border: "1px solid rgba(255,255,255,0.2)",
//     borderRadius: "1rem",
//     padding: "14px 22px",
//     fontWeight: "600",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
//     transition: "all 0.3s ease",
//   },
//         }
//       }
//     } catch (err) {
//       console.error('Appwrite error:', err)
//       toast.error('Something went wrong.'),{
//          style: {
//     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
//     color: "#FFFFFF",
//     backdropFilter: "blur(12px)", // glass effect
//     border: "1px solid rgba(255,255,255,0.2)",
//     borderRadius: "1rem",
//     padding: "14px 22px",
//     fontWeight: "600",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
//     transition: "all 0.3s ease",
//   },
//       }
//     }

//     setIsModalOpen(false)
//     setEditingUser(null)
//     setForm({ name: '', email: '', address: '', phone: '', role: 'admin' })
//   }

//   // 🔹 DELETE USER
//   const handleDelete = async id => {
//     try {
//       await databases.deleteDocument(
//         import.meta.env.VITE_APPWRITE_DATABASE_ID,
//         import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
//         id
//       )
//       setUsers(users.filter(u => u.$id !== id))
//       toast.success('User deleted successfully.'),{
//          style: {
//     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
//     color: "#FFFFFF",
//     backdropFilter: "blur(12px)", // glass effect
//     border: "1px solid rgba(255,255,255,0.2)",
//     borderRadius: "1rem",
//     padding: "14px 22px",
//     fontWeight: "600",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
//     transition: "all 0.3s ease",
//   },
//       }
//     } catch (err) {
//       console.error('Delete error:', err)
//       toast.error('Error deleting user.'),{
//          style: {
//     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
//     color: "#FFFFFF",
//     backdropFilter: "blur(12px)", // glass effect
//     border: "1px solid rgba(255,255,255,0.2)",
//     borderRadius: "1rem",
//     padding: "14px 22px",
//     fontWeight: "600",
//     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
//     transition: "all 0.3s ease",
//   },
//       }
//     }
//   }

//   return (
//     <div className='space-y-6 w-full px-2 sm:px-4 bg-[#E5E5E5] min-h-screen py-6'>
//       <div>
//         <h1 className='text-3xl md:text-3xl font-extrabold text-center text-[#14213D]'>
//           Users
//         </h1>
//         <p className='text-sm mt-3 text-center text-[#14213D]'>
//           View and manage all registered users with essential details.
//         </p>
//       </div>

//       {/* Search + Add User */}
//       <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3'>
//         <Input
//           placeholder='Search users...'
//           value={search}
//           onChange={e => setSearch(e.target.value)}
//           className='flex-1 rounded-lg w-full bg-white border-blue-950'
//         />
//         <Button
//           onClick={() => openModal()}
//           className='rounded-lg px-6 w-full sm:w-auto bg-[#14213D] text-white hover:opacity-90 transition'
//         >
//           + Add User
//         </Button>
//       </div>

//       {/* Table */}
//       <div className='rounded-xl border shadow-sm w-full overflow-hidden'>
//         <Table className='w-full bg-[#14213D] text-white'>
//           <TableHeader>
//             <TableRow className='bg-[#0f192f]'>
//               <TableHead className='font-semibold px-4 py-3 text-white'>
//                 Name
//               </TableHead>
//               <TableHead className='font-semibold px-4 py-3 text-white'>
//                 Email
//               </TableHead>
//               <TableHead className='font-semibold px-4 py-3 text-white'>
//                 Address
//               </TableHead>
//               <TableHead className='font-semibold px-4 py-3 text-white'>
//                 Phone
//               </TableHead>
//               <TableHead className='font-semibold px-4 py-3 text-white'>
//                 Role
//               </TableHead>
//               <TableHead className='font-semibold px-4 py-3 text-center text-white'>
//                 Actions
//               </TableHead>
//             </TableRow>
//           </TableHeader>

//           {loading ? (
//             <TableBody>
//               <TableRow>
//                 <TableCell
//                   colSpan={6}
//                   className='text-center py-6 text-gray-300'
//                 >
//                   {/* Animated */}
//                   {/*  */}
//                   {/*  */}
//                   {/*  */}
//                   {/*  */}
//                   {/*  */}
//                   Loading users...  
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           ) : (
//             <TableBody>
//               {filtered.length > 0 ? (
//                 filtered.map(u => (
//                   <TableRow
//                     key={u.$id}
//                     className='hover:bg-[#1f2b4d] text-sm md:text-base border-b border-gray-700'
//                   >
//                     <TableCell className='px-4 py-4 font-medium text-white'>
//                       {u.name}
//                     </TableCell>
//                     <TableCell className='px-4 py-4'>{u.email}</TableCell>
//                     <TableCell className='px-4 py-4'>{u.address}</TableCell>
//                     <TableCell className='px-4 py-4'>{u.phone}</TableCell>
//                     <TableCell className='px-4 py-4'>
//                       <Badge
//                         className={roleColors[u.role] || roleColors.default}
//                       >
//                         {u.role}
//                       </Badge>
//                     </TableCell>
//                     <TableCell className='px-4 py-4 text-center'>
//                       <DropdownMenu>
//                         <DropdownMenuTrigger asChild>
//                           <Button
//                             variant='ghost'
//                             size='sm'
//                             className='rounded-full text-white hover:bg-white/20'
//                           >
//                             <MoreHorizontal />
//                           </Button>
//                         </DropdownMenuTrigger>
//                         <DropdownMenuContent className='bg-white text-[#14213D]'>
//                           <DropdownMenuItem
//                             onClick={() => openModal(u)}
//                             className='cursor-pointer'
//                           >
//                             Edit
//                           </DropdownMenuItem>
//                           <DropdownMenuItem
//                             onClick={() => handleDelete(u.$id)}
//                             className='cursor-pointer'
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
//                     className='text-center py-6 text-gray-300'
//                   >
//                     No users found.
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           )}
//         </Table>
//       </div>

//       {/* Modal */}
//       <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <DialogContent className='sm:max-w-lg w-[95%] rounded-xl p-6 bg-white shadow-xl border'>
//           <DialogHeader>
//             <DialogTitle className='text-xl font-semibold text-[#14213D]'>
//               {editingUser ? 'Edit User' : 'Add User'}
//             </DialogTitle>
//             <DialogDescription>
//               Fill in the user details below. All fields are required.
//             </DialogDescription>
//           </DialogHeader>

//           <div className='flex flex-col gap-4 mt-3'>
//             <Input
//               placeholder='Name'
//               value={form.name}
//               onChange={e => setForm({ ...form, name: e.target.value })}
//               className='bg-gray-50'
//             />
//             <Input
//               type='email'
//               placeholder='Email'
//               value={form.email}
//               onChange={e => setForm({ ...form, email: e.target.value })}
//               className='bg-gray-50'
//             />
//             <Input
//               placeholder='Address'
//               value={form.address}
//               onChange={e => setForm({ ...form, address: e.target.value })}
//               className='bg-gray-50'
//             />
           
//             <Input
//               type='text'
//               placeholder='+92 3XXXXXXXXX'
//               value={form.phone}
//               onChange={e => setForm({ ...form, phone: e.target.value })}
//               className='bg-gray-50'
//             />
//             <Select
//               value={form.role}
//               onValueChange={value => setForm({ ...form, role: value })}
//             >
//               <SelectTrigger className='bg-gray-50 w-full'>
//                 <SelectValue placeholder='Select role' />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value='admin'>Admin</SelectItem>
//                 <SelectItem value='sales'>Salesperson</SelectItem>
//                 <SelectItem value='owner'>Owner</SelectItem>
//                 <SelectItem value='waiter'>Waiter</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>

//           <DialogFooter className='mt-6'>
//             <Button
//               onClick={handleSave}
//               className='rounded-lg px-6 bg-gradient-to-r from-[#14213D] to-[#6B7280] text-white w-full sm:w-auto className="cursor-pointer"'
//             >
//               {editingUser ? 'Update User' : 'Save User'}
//             </Button>
//           </DialogFooter>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }








// with paggination
'use client'
import React, { useState, useEffect } from 'react'
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
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog'
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue
} from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'

// ✅ Shadcn Pagination
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from '@/components/ui/pagination'

// 🔹 Appwrite client
import { databases, ID } from '../services/appwrite'

export default function Users() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
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

  // 🔹 Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const rowsPerPage = 5

  // Fetch users from Appwrite
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID
        )
        setUsers(res.documents)
      } catch (err) {
        console.error('Error fetching users:', err)
        toast('Failed to fetch users.'),{
          
  style: {
     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
     color: "#FFFFFF",
     backdropFilter: "blur(12px)", // glass effect
     border: "1px solid rgba(255,255,255,0.2)",
     borderRadius: "1rem",
     padding: "14px 22px",
     fontWeight: "600",
     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
     transition: "all 0.3s ease",
   },
        }
      } finally {
        setLoading(false)
      }
    }
    fetchUsers()
  }, [])

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

  // 🔹 Pagination logic
  const totalPages = Math.ceil(filtered.length / rowsPerPage)
  const paginatedUsers = filtered.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
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
      setForm({ name: '', email: '', address: '', phone: '', role: 'admin' })
    }
    setIsModalOpen(true)
  }

  // 🔹 SAVE USER
  const handleSave = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^\+92\s3[0-9]{9}$/

    if (!form.name || !form.email || !form.address || !form.phone) {
      toast.error('All fields are required.'),{
        
  style: {
     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
     color: "#FFFFFF",
     backdropFilter: "blur(12px)", // glass effect
     border: "1px solid rgba(255,255,255,0.2)",
     borderRadius: "1rem",
     padding: "14px 22px",
     fontWeight: "600",
     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
     transition: "all 0.3s ease",
   },
      }
      return
    }
    if (!emailRegex.test(form.email)) {
      toast.error('Please enter a valid email address.'),{
        
  style: {
     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
     color: "#FFFFFF",
     backdropFilter: "blur(12px)", // glass effect
     border: "1px solid rgba(255,255,255,0.2)",
     borderRadius: "1rem",
     padding: "14px 22px",
     fontWeight: "600",
     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
     transition: "all 0.3s ease",
   },
      }
      return
    }
    if (!phoneRegex.test(form.phone)) {
      toast.error('Invalid phone number! Format: +92 3XXXXXXXXX'),{
        
  style: {
     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
     color: "#FFFFFF",
     backdropFilter: "blur(12px)", // glass effect
     border: "1px solid rgba(255,255,255,0.2)",
     borderRadius: "1rem",
     padding: "14px 22px",
     fontWeight: "600",
     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
     transition: "all 0.3s ease",
   },
      }
      return
    }

    try {
      if (editingUser) {
        await databases.updateDocument(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
          editingUser.$id,
          {
            ...form,
            role: form.role.trim().toLowerCase()
          }
        )
        setUsers(
          users.map(u => (u.$id === editingUser.$id ? { ...u, ...form } : u))
        )
        toast.success('User updated successfully!'),{
          
  style: {
     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
     color: "#FFFFFF",
     backdropFilter: "blur(12px)", // glass effect
     border: "1px solid rgba(255,255,255,0.2)",
     borderRadius: "1rem",
     padding: "14px 22px",
     fontWeight: "600",
     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
     transition: "all 0.3s ease",
   },
        }
      } else {
        const newUser = await databases.createDocument(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
          ID.unique(),
          {
            ...form,
            role: form.role.trim().toLowerCase()
          }
        )
        setUsers([...users, newUser])
        toast.success('User added successfully!'),{
          
  style: {
     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
     color: "#FFFFFF",
     backdropFilter: "blur(12px)", // glass effect
     border: "1px solid rgba(255,255,255,0.2)",
     borderRadius: "1rem",
     padding: "14px 22px",
     fontWeight: "600",
     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
     transition: "all 0.3s ease",
   },
        }
      }
    } catch (err) {
      console.error('Appwrite error:', err)
      toast.error('Something went wrong.'),{
        
  style: {
     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
     color: "#FFFFFF",
     backdropFilter: "blur(12px)", // glass effect
     border: "1px solid rgba(255,255,255,0.2)",
     borderRadius: "1rem",
     padding: "14px 22px",
     fontWeight: "600",
     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
     transition: "all 0.3s ease",
   },
      }
    }

    setIsModalOpen(false)
    setEditingUser(null)
    setForm({ name: '', email: '', address: '', phone: '', role: 'admin' })
  }

  // 🔹 DELETE USER
  const handleDelete = async id => {
    try {
      await databases.deleteDocument(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
        id
      )
      setUsers(users.filter(u => u.$id !== id))
      toast.success('User deleted successfully.'),{
        
  style: {
     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
     color: "#FFFFFF",
     backdropFilter: "blur(12px)", // glass effect
     border: "1px solid rgba(255,255,255,0.2)",
     borderRadius: "1rem",
     padding: "14px 22px",
     fontWeight: "600",
     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
     transition: "all 0.3s ease",
   },
      }
    } catch (err) {
      console.error('Delete error:', err)
      toast.error('Error deleting user.'),{
        
  style: {
     background: "linear-gradient(135deg, rgba(20,33,61,0.85), rgba(30,45,80,0.85))", // gradient navy glass
     color: "#FFFFFF",
     backdropFilter: "blur(12px)", // glass effect
     border: "1px solid rgba(255,255,255,0.2)",
     borderRadius: "1rem",
     padding: "14px 22px",
     fontWeight: "600",
     boxShadow: "0 8px 20px rgba(0,0,0,0.25)", // subtle shadow
     transition: "all 0.3s ease",
   },
      }
    }
  }

  return (
    <div className='space-y-6 w-full px-2 sm:px-4 bg-[#E5E5E5] min-h-screen py-6'>
      <div>
        <h1 className='text-3xl font-extrabold text-center text-[#14213D]'>Users</h1>
        <p className='text-sm mt-3 text-center text-[#14213D]'>
          View and manage all registered users with essential details.
        </p>
      </div>

      {/* Search + Add User */}
      <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3'>
        <Input
          placeholder='Search users...'
          value={search}
          onChange={e => {
            setSearch(e.target.value)
            setCurrentPage(1) // reset to first page on search
          }}
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
              <TableHead className='font-semibold px-4 py-3 text-white'>Name</TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>Email</TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>Address</TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>Phone</TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>Role</TableHead>
              <TableHead className='font-semibold px-4 py-3 text-center text-white'>Actions</TableHead>
            </TableRow>
          </TableHeader>

          {loading ? (
            <TableBody>
              {[...Array(5)].map((_, i) => (
                <TableRow key={i} className="border-b border-gray-700">
                  <TableCell className="px-4 py-4">
                    <Skeleton className="h-4 w-32 bg-gray-700" />
                  </TableCell>
                  <TableCell className="px-4 py-4">
                    <Skeleton className="h-4 w-48 bg-gray-700" />
                  </TableCell>
                  <TableCell className="px-4 py-4">
                    <Skeleton className="h-4 w-40 bg-gray-700" />
                  </TableCell>
                  <TableCell className="px-4 py-4">
                    <Skeleton className="h-4 w-28 bg-gray-700" />
                  </TableCell>
                  <TableCell className="px-4 py-4">
                    <Skeleton className="h-6 w-20 bg-gray-700 rounded-full" />
                  </TableCell>
                  <TableCell className="px-4 py-4 text-center">
                    <Skeleton className="h-8 w-8 mx-auto bg-gray-700 rounded-full" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map(u => (
                  <TableRow
                    key={u.$id}
                    className='hover:bg-[#1f2b4d] text-sm md:text-base border-b border-gray-700'
                  >
                    <TableCell className='px-4 py-4 font-medium text-white'>{u.name}</TableCell>
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
                          <DropdownMenuItem onClick={() => openModal(u)}>Edit</DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleDelete(u.$id)}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className='text-center py-6 text-gray-300'>
                    No users found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          )}
        </Table>
      </div>

{/* 🔹 Pagination UI */}
{/* {totalPages > 1 && (
  <Pagination className="flex justify-center mt-6">
    <PaginationContent className="flex gap-2">
      <PaginationItem>
        <PaginationPrevious
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          className={`px-4 py-2 rounded-lg border transition ${
            currentPage === 1
              ? "opacity-50 pointer-events-none bg-gray-200 text-gray-500"
              : "bg-white text-[#14213D] hover:bg-[#e5e5e5]"
          }`}
        />
      </PaginationItem>

      {[...Array(totalPages)].map((_, i) => (
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg border transition ${
              currentPage === i + 1
                ? "bg-[#14213D] text-white border-[#14213D]"
                : "bg-white text-[#14213D] hover:bg-[#e5e5e5]"
            }`}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem>
        <PaginationNext
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          className={`px-4 py-2 rounded-lg border transition  ${
            currentPage === totalPages
              ? "opacity-50 pointer-events-none bg-gray-200 text-gray-500"
              : "bg-white text-[#14213D] hover:bg-[#e5e5e5]  "
          }`}
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
)} */}
{totalPages > 1 && (
  <Pagination className="flex justify-center mt-6">
    <PaginationContent className="flex gap-2">
      {/* Previous Button */}
      <PaginationItem>
        <PaginationPrevious
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          className={`px-4 py-2 rounded-lg border transition ${
            currentPage === 1
              ? "opacity-50 pointer-events-none bg-gray-200 text-gray-500"
              : "bg-white text-[#14213D] hover:bg-[#e5e5e5] cursor-pointer"
          }`}
        />
      </PaginationItem>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, i) => (
        <PaginationItem key={i}>
          <PaginationLink
            isActive={currentPage === i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-lg border transition ${
              currentPage === i + 1
                ? "bg-[#14213D] text-white border-[#14213D]"
                : "bg-white text-[#14213D] hover:bg-[#e5e5e5] cursor-pointer"
            }`}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      ))}

      {/* Next Button */}
      <PaginationItem>
        <PaginationNext
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          className={`px-4 py-2 rounded-lg border transition ${
            currentPage === totalPages
              ? "opacity-50 pointer-events-none bg-gray-200 text-gray-500"
              : "bg-white text-[#14213D] hover:bg-[#e5e5e5] cursor-pointer"
          }`}
        />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
)}


      {/* Modal (Add/Edit User) */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className='sm:max-w-lg w-[95%] rounded-xl p-6 bg-white shadow-xl border'>
          <DialogHeader>
            <DialogTitle className='text-xl font-semibold text-[#14213D]'>
              {editingUser ? 'Edit User' : 'Add User'}
            </DialogTitle>
            <DialogDescription>
              Fill in the user details below. All fields are required.
            </DialogDescription>
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











