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

export default function Locations({ locations, setLocations }) {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: "", capacity: 0, owner: "", status: "active" });
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
        status: location.status,
      });
    } else {
      setEditingLocation(null);
      setForm({ name: "", capacity: 0, owner: "", status: "active" });
    }
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (!form.name || !form.capacity || !form.owner || !form.status) {
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
    setForm({ name: "", capacity: 0, owner: "", status: "active" });
  };

  const handleDelete = (id) => {
    setLocations(locations.filter((l) => l.id !== id));
    toast("Location deleted successfully.", { variant: "destructive" });
  };

  return (
    <Card className="bg-white shadow-md rounded-xl">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="font-bold text-primary text-xl">
          Event Locations
        </CardTitle>
        <div className="flex gap-2">
          <Input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border-gray-300 focus:border-primary"
          />
          <Button
            onClick={() => openModal()}
            className="bg-primary text-white hover:bg-secondary"
          >
            Add Location
          </Button>
        </div>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="font-bold text-gray-700">Name</TableHead>
              <TableHead className="font-bold text-gray-700">Capacity</TableHead>
              <TableHead className="font-bold text-gray-700">Owner</TableHead>
              <TableHead className="font-bold text-gray-700">Status</TableHead>
              <TableHead className="font-bold text-gray-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((l) => (
              <TableRow key={l.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">{l.name}</TableCell>
                <TableCell>{l.capacity}</TableCell>
                <TableCell>{l.owner}</TableCell>
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
                <TableCell>
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
      </CardContent>

  {/* MODAL */}
  <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
    <DialogContent className="sm:max-w-lg bg-white w-[95%] sm:w-auto">
      <DialogHeader>
        <DialogTitle className="font-bold text-primary">
          {editingLocation ? "Edit Location" : "Add Location"}
        </DialogTitle>
      </DialogHeader>

      {/* Make inputs responsive */}
      <div className="flex flex-col gap-4 mt-2">
        <Input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full"
        />
        <Input
          type="number"
          placeholder="Capacity"
          value={form.capacity}
          onChange={(e) =>
            setForm({ ...form, capacity: parseInt(e.target.value) || 0 })
          }
          className="w-full"
        />
        <Input
          placeholder="Owner Name"
          value={form.owner}
          onChange={(e) => setForm({ ...form, owner: e.target.value })}
          className="w-full"
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="p-2 border rounded w-full"
        >
          <option value="active">Active</option>
          <option value="maintenance">Maintenance</option>
          <option value="canceled">Canceled</option>
        </select>
      </div>

          <DialogFooter className="mt-4">
            <Button
              onClick={handleSave}
              className="bg-primary text-white hover:bg-secondary"
            >
              {editingLocation ? "Update" : "Save"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
