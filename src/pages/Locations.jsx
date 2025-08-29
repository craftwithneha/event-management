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
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import {
  MoreHorizontal,
  MapPin,
  Users,
  CalendarDays,
  DollarSign
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

export default function Locations ({ locations, setLocations }) {
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [form, setForm] = useState({
    name: '',
    capacity: 0,
    owner: '',
    location: '',
    status: 'active'
  })
  const [editingLocation, setEditingLocation] = useState(null)

  // Badge colors same as Events
  const statusColors = {
    active: 'bg-blue-100 text-blue-700',
    maintenance: 'bg-yellow-100 text-yellow-700',
    canceled: 'bg-red-100 text-red-700',
    default: 'bg-gray-100 text-gray-700'
  }

  const filtered = locations.filter(l =>
    l.name.toLowerCase().includes(search.toLowerCase())
  )

  const openModal = (location = null) => {
    if (location) {
      setEditingLocation(location)
      setForm({ ...location })
    } else {
      setEditingLocation(null)
      setForm({
        name: '',
        capacity: 0,
        owner: '',
        location: '',
        status: 'active'
      })
    }
    setIsModalOpen(true)
  }

  const handleSave = () => {
    if (
      !form.name ||
      !form.capacity ||
      !form.owner ||
      !form.location ||
      !form.status
    ) {
      toast('All fields are required.', {
        style: { background: '#111', color: '#E5E5E5' }
      })
      return
    }

    if (editingLocation) {
      setLocations(
        locations.map(l =>
          l.id === editingLocation.id ? { ...l, ...form } : l
        )
      )
      toast('Location updated successfully!', {
        style: { background: '#111', color: '#E5E5E5' }
      })
    } else {
      setLocations([...locations, { id: Date.now(), ...form }])
      toast('Location added successfully!', {
        style: { background: '#111', color: '#E5E5E5' }
      })
    }

    setIsModalOpen(false)
    setEditingLocation(null)
    setForm({
      name: '',
      capacity: 0,
      owner: '',
      location: '',
      status: 'active'
    })
  }

  const handleDelete = id => {
    setLocations(locations.filter(l => l.id !== id))
    toast('Location deleted successfully.', {
      style: { background: '#111', color: '#E5E5E5' }
    })
  }

  return (
    <div className='space-y-6 w-full px-2 sm:px-4 bg-[#E5E5E5] min-h-screen py-6'>
      <div>
        <h1 className='ext-3xl md:text-3xl  font-extrabold text-center text-[#14213D]'>
          Event Locations
        </h1>
        <p className='text-sm mt-3  text-center text-[#14213D]'>Manage and track all event venues with capacity, status, and details. <br/>
Easily add, edit, or remove locations for smooth event planning.</p>
      </div>

      {/* DASHBOARD CARDS */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4'>
        <Card className='rounded-2xl shadow-md hover:shadow-xl transition bg-gradient-to-br from-[#14213D] to-[#1f2b4d] text-white'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Organizer</CardTitle>
            <Users className='h-5 w-5 text-blue-300' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>Neha & Zoha </p>
            <p className='text-sm text-gray-300'>Main Event Organizer</p>
          </CardContent>
        </Card>

        <Card className='rounded-2xl shadow-md hover:shadow-xl transition bg-gradient-to-br from-[#14213D] to-[#1f2b4d] text-white'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Bookings</CardTitle>
            <CalendarDays className='h-5 w-5 text-green-300' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>128</p>
            <p className='text-sm text-gray-300'>This Month</p>
          </CardContent>
        </Card>

        <Card className='rounded-2xl shadow-md hover:shadow-xl transition bg-gradient-to-br from-[#14213D] to-[#1f2b4d] text-white'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>
              Active Locations
            </CardTitle>
            <MapPin className='h-5 w-5 text-yellow-300' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>
              {locations.filter(l => l.status === 'active').length}
            </p>
            <p className='text-sm text-gray-300'>Currently Available</p>
          </CardContent>
        </Card>

        <Card className='rounded-2xl shadow-md hover:shadow-xl transition bg-gradient-to-br from-[#14213D] to-[#1f2b4d] text-white'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Revenue</CardTitle>
            <DollarSign className='h-5 w-5 text-orange-300' />
          </CardHeader>
          <CardContent>
            <p className='text-2xl font-bold'>$24,500</p>
            <p className='text-sm text-gray-300'>This Quarter</p>
          </CardContent>
        </Card>
      </div>

      {/* Location Cards Grid */}
      {/* Location Cards Grid */}
      <div className='grid grid-cols-1 [@media(min-width:1130px)]:grid-cols-2 lg:grid-cols-2 gap-8'>
        {filtered.map(l => (
          <Card
            key={l.id}
            className='border rounded-2xl shadow-lg hover:shadow-2xl 
                 transition-transform transform hover:-translate-y-1 
                 bg-gradient-to-br from-[#14213D] to-[#1f2b4d] text-white 
                 p-6 h-[230px] flex flex-col justify-between'
          >
            <CardHeader className='flex flex-row items-center justify-between p-0'>
              <CardTitle className='text-2xl font-semibold truncate'>
                {l.name}
              </CardTitle>
              <Badge className={statusColors[l.status] || statusColors.default}>
                {l.status}
              </Badge>
            </CardHeader>
            <CardContent className='space-y-4 text-lg p-0'>
              <div className='flex items-center gap-2'>
                <Users className='h-6 w-6 text-blue-300' />
                <span>{l.owner}</span>
              </div>
              <div className='flex items-center gap-2'>
                <MapPin className='h-6 w-6 text-green-300' />
                <span>{l.location}</span>
              </div>
              <div className='flex items-center gap-2'>
                <Users className='h-6 w-6 text-orange-300' />
                <span>{l.capacity} capacity</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search + Button */}
      <div className='flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3'>
        <Input
          placeholder='Search locations...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='flex-1 rounded-lg w-full bg-white border-blue-950'
        />
        <Button
          onClick={() => openModal()}
          className='rounded-lg px-6 w-full sm:w-auto bg-[#14213D] text-white hover:opacity-90 transition'
        >
          + Add Location
        </Button>
      </div>

      {/* TABLE */}
      <div className='rounded-xl border shadow-sm w-full overflow-hidden'>
        <Table className='w-full bg-[#14213D] text-white'>
          <TableHeader>
            <TableRow className='bg-[#0f192f]'>
              <TableHead className='font-semibold px-4 py-3 text-white'>
                Name
              </TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>
                Capacity
              </TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>
                Owner
              </TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>
                Location
              </TableHead>
              <TableHead className='font-semibold px-4 py-3 text-white'>
                Status
              </TableHead>
              <TableHead className='font-semibold px-4 py-3 text-center text-white'>
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map(l => (
                <TableRow
                  key={l.id}
                  className='hover:bg-[#1f2b4d] text-sm md:text-base border-b border-gray-700'
                >
                  <TableCell className='px-4 py-4 font-medium'>
                    {l.name}
                  </TableCell>
                  <TableCell className='px-4 py-4'>{l.capacity}</TableCell>
                  <TableCell className='px-4 py-4'>{l.owner}</TableCell>
                  <TableCell className='px-4 py-4'>{l.location}</TableCell>
                  <TableCell className='px-4 py-4'>
                    <Badge
                      className={statusColors[l.status] || statusColors.default}
                    >
                      {l.status}
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
                        <DropdownMenuItem onClick={() => openModal(l)}>
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          onClick={() => handleDelete(l.id)}
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
                  No locations found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* MODAL */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className='sm:max-w-lg w-[95%] rounded-xl'>
          <DialogHeader>
            <DialogTitle className='text-lg font-semibold text-[#14213D]'>
              {editingLocation ? 'Edit Location' : 'Add Location'}
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
              type='number'
              placeholder='Capacity'
              value={form.capacity}
              onChange={e =>
                setForm({ ...form, capacity: parseInt(e.target.value) || 0 })
              }
              className='bg-gray-50'
            />
            <Input
              placeholder='Owner Name'
              value={form.owner}
              onChange={e => setForm({ ...form, owner: e.target.value })}
              className='bg-gray-50'
            />
            <Input
              placeholder='Location'
              value={form.location}
              onChange={e => setForm({ ...form, location: e.target.value })}
              className='bg-gray-50'
            />
            <Select
              value={form.status}
              onValueChange={value => setForm({ ...form, status: value })}
            >
              <SelectTrigger className='w-full bg-gray-50 rounded-lg p-2'>
                <SelectValue placeholder='Select Status' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='active'>Active</SelectItem>
                <SelectItem value='maintenance'>Maintenance</SelectItem>
                <SelectItem value='canceled'>Canceled</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className='mt-4'>
            <Button
              onClick={handleSave}
              className='rounded-lg px-6 bg-gradient-to-r from-[#14213D] to-[#6B7280] text-white w-full sm:w-auto'
            >
              {editingLocation ? 'Update Location' : 'Save Location'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
