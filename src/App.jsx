import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Overview from "./pages/Overview";
import Users from "./pages/Users";
import Events from "./pages/Events";
import Locations from "./pages/Locations";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute"; // create this component




export default function App() {
//  For users satedata
  // const [users, setUsers] = useState([
  //   { id: 1, name: "Ali Raza", email: "ali@example.com", address: "123 Street, Lahore", phone: "+92 3001234567", role: "admin" },
  //   { id: 2, name: "Sara Khan", email: "sara@example.com", address: "456 Avenue, Karachi", phone: "+92 3129876543", role: "sales" },
  //   { id: 3, name: "Diya", email: "diya@example.com", address: "Avenue, UAE", phone: "+92 3127457843", role: "owner" },
  //   { id: 4, name: "John", email: "john@example.com", address: " Avenue, Qatar", phone: "+92 3129876543", role: "waiter" },
  // ]);

  // For Events
  const [events, setEvents] = useState([
    { id: 1, name: "Annual Meetup", location: "Royal Hall", date: "2025-09-10", persons: 180 , status: "Upcoming"},
    { id: 2, name: "Sales Summit", location: "City Garden", date: "2025-10-02", persons: 120 , status: "Live"},
    { id: 3, name: "John", location: "Housing Colony ", date: "2025-8-02", persons: 120 , status: "Canceled"},
  ]);

  // For Locations
  const [locations, setLocations] = useState([
    { id: 1, name: "Royal Hall", capacity: 300, owner: "Mr. Ahmed", status: "active", location:"Faisalabad" },
    { id: 2, name: "City Garden", capacity: 150, owner: "Ms. Fatima", status: "maintenance", location:"Karachi" },
    { id: 3, name: "Housing Colony", capacity: 2000, owner: "Ms. Emily", status: "cancelled", location:"Lahore" },
  ]);

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Admin Panel */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="flex flex-col h-screen">
                <Topbar />
                <div className="flex flex-1 overflow-hidden">
                  <Sidebar />
                  <main className="flex-1 p-6 overflow-auto">
                    <Routes>
                      <Route path="/" element={<Navigate to="/overview" replace />} />
                      <Route path="/overview" element={<Overview  events={events} locations={locations} />} />
                      <Route path="/users" element={<Users  />} />
                      <Route path="/events" element={<Events events={events} setEvents={setEvents} />} />
                      <Route path="/locations" element={<Locations locations={locations} setLocations={setLocations} />} />
                      <Route path="*" element={<Navigate to="/overview" replace />} />
                    </Routes>
                  </main>
                </div>
              </div>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
