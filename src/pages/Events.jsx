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
import { MapPin, Calendar, Users, MoreHorizontal } from "lucide-react";
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
      // ✅ unique ID to avoid duplicate deletes
      setEvents([...events, { id: crypto.randomUUID(), ...form }]);
      toast("Event added successfully!");
    }

    setIsModalOpen(false);
    setEditingEvent(null);
    setForm({ name: "", location: "", date: "", persons: 0, status: "Upcoming" });
  };

  
const handleDelete = (id) => {
  console.log("Deleting ID:", id);
  console.log("Before:", events.map(e => e.id));
  
  const updated = events.filter((e) => e.id !== id);
  
  console.log("After:", updated.map(e => e.id));
  setEvents(updated);
  
  toast("Event deleted successfully.", { variant: "destructive" });
};

  const getStatusBadge = (status) => {
    let color = "bg-gray-200 text-gray-800";
    if (status === "Upcoming") color = "bg-blue-100 text-blue-600";
    if (status === "Live") color = "bg-green-100 text-green-600";
    if (status === "Canceled") color = "bg-red-100 text-red-600";

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold ${color}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6 w-full px-2 sm:px-4">
      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-bold text-center">Events</h1>

      {/* Search + Add Event */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Input
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 rounded-lg w-full"
        />
        <Button
          onClick={() => openModal()}
          className="rounded-lg px-6 w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white"
        >
          + Add Event
        </Button>
      </div>

      {/* Event Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No events found
          </p>
        )}
        {filtered.map((e) => (
          <Card
            key={e.id}
            className="relative border rounded-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 overflow-hidden bg-gradient-to-tr from-purple-50 to-white"
          >
            <CardHeader>
              <CardTitle className="text-xl font-bold truncate">
                {e.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-5 w-5 text-red-500" />
                <span>{e.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="h-5 w-5 text-green-500" />
                <span>{e.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Users className="h-5 w-5 text-blue-500" />
                <span>{e.persons} persons</span>
              </div>
              <div>{getStatusBadge(e.status)}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Events Table */}
      <div className="rounded-xl border shadow-sm w-full overflow-x-auto">
        <Table className="w-full text-sm md:text-base">
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="font-semibold px-4 py-3">Name</TableHead>
              <TableHead className="font-semibold px-4 py-3">Location</TableHead>
              <TableHead className="font-semibold px-4 py-3">Date</TableHead>
              <TableHead className="font-semibold px-4 py-3">Persons</TableHead>
              <TableHead className="font-semibold px-4 py-3">Status</TableHead>
              <TableHead className="font-semibold px-4 py-3 text-center">
                Actions
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.length > 0 ? (
              filtered.map((e) => (
                <TableRow
                  key={e.id}
                  className="hover:bg-gray-50"
                >
                  <TableCell className="px-4 py-4">{e.name}</TableCell>
                  <TableCell className="px-4 py-4">{e.location}</TableCell>
                  <TableCell className="px-4 py-4">{e.date}</TableCell>
                  <TableCell className="px-4 py-4">{e.persons}</TableCell>
                  <TableCell className="px-4 py-4">
                    {getStatusBadge(e.status)}
                  </TableCell>
                  <TableCell className="px-4 py-4 text-center">
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
                <TableCell
                  colSpan={6}
                  className="text-center py-6 text-gray-500"
                >
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
            <DialogTitle className="text-lg font-semibold">
              {editingEvent ? "Edit Event" : "Add Event"}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 mt-3">
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
            {/* Status Select */}
            <Select
              value={form.status}
              onValueChange={(val) => setForm({ ...form, status: val })}
            >
              <SelectTrigger className="w-full">
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
              className="rounded-lg px-6 bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto"
            >
              {editingEvent ? "Update Event" : "Save Event"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
