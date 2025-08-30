// import React from 'react'
// import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
// import { Users, CalendarDays, MapPin, Star } from 'lucide-react'
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   BarChart,
//   Bar,
//   ResponsiveContainer
// } from 'recharts'

// export default function Overview ({ users = [], events = [], locations = [] }) {
//   // Dummy chart data (replace with API data)
//   const userGrowth = [
//     { month: 'Jan', users: 50 },
//     { month: 'Feb', users: 120 },
//     { month: 'Mar', users: 180 },
//     { month: 'Apr', users: 220 },
//     { month: 'May', users: 300 },
//     { month: 'June', users: 350 },
//     { month: 'July', users: 400 },
//     { month: 'Aug', users: 450 },
//     { month: 'Sep', users: 500 },
//     { month: 'Oct', users: 700 },
//     { month: 'Nov', users:  650},
//     { month: 'Dec', users: 700 }
//   ]

//   const eventsCreated = [
//     { month: 'Jan', events: 20 },
//     { month: 'Feb', events: 35 },
//     { month: 'Mar', events: 25 },
//     { month: 'Apr', events: 40 },
//     { month: 'May', events: 50 },
//     { month: 'June', events: 55 },
//     { month: 'July', events: 70 },
//     { month: 'Aug', events: 80 },
//     { month: 'Sep', events: 90 },
//     { month: 'Oct', events: 100 },
//     { month: 'Nov', events: 110 },
//     { month: 'Dec', events: 120 },
//   ]

//   const upcomingEvents = [
//     { title: 'Tech Conference 2025', date: 'Dec 15', attendees: 525 },
//     { title: 'Music Festival', date: 'Dec 20', attendees: 743 },
//     { title: 'Food Expo', date: 'Jan 05', attendees: 300 }
//   ]

//   const cards = [
//     {
//       title: 'Total Users',
//       value: users.length,
//       icon: <Users className='w-6 h-6 text-white' />
//     },
//     {
//       title: 'Total Events',
//       value: events.length,
//       icon: <CalendarDays className='w-6 h-6 text-white' />
//     },
//     {
//       title: 'Total Locations',
//       value: locations.length,
//       icon: <MapPin className='w-6 h-6 text-white' />
//     },
//     {
//       title: 'Avg Rating',
//       value: '4.6',
//       icon: <Star className='w-6 h-6 text-white' />
//     }
//   ]

//   return (
//     <div className='space-y-6 min-h-screen w-full bg-[#E5E5E5] p-6'>
//       {/* Cards Section */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
//         {cards.map(c => (
//           <Card
//             key={c.title}
//             className='p-4 bg-[#14213D] text-white shadow-md rounded-xl border-none'
//           >
//             <CardHeader className='flex flex-row items-center justify-between pb-2'>
//               <CardTitle className='text-sm font-medium'>{c.title}</CardTitle>
//               {c.icon}
//             </CardHeader>
//             <CardContent>
//               <p className='text-2xl font-bold'>{c.value}</p>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Charts Section */}
//       <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
//         {/* User Growth Chart */}
//         <Card className=' bg-white shadow rounded-xl border border-gray-200'>
//           <CardHeader>
//             <CardTitle className='text-[#14213D]'>User Growth</CardTitle>
//           </CardHeader>
//           <CardContent className='h-64'>
//             <ResponsiveContainer width='100%' height='100%'>
//               <LineChart data={userGrowth}>
//                 <CartesianGrid strokeDasharray='3 3' />
//                 <XAxis dataKey='month' stroke='#374151' />
//                 <YAxis stroke='#374151' />
//                 <Tooltip />
//                 <Line
//                   type='monotone'
//                   dataKey='users'
//                   stroke='#14213D'
//                   strokeWidth={2}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         {/* Events Created Chart */}
//         <Card className=' bg-white shadow rounded-xl border border-gray-200'>
//           <CardHeader>
//             <CardTitle className='text-[#14213D]'>Events Created</CardTitle>
//           </CardHeader>
//           <CardContent className='h-64'>
//             <ResponsiveContainer width='100%' height='100%'>
//               <BarChart data={eventsCreated}>
//                 <CartesianGrid strokeDasharray='3 3' />
//                 <XAxis dataKey='month' stroke='#374151' />
//                 <YAxis stroke='#374151' />
//                 <Tooltip />
//                 <Bar dataKey='events' fill='#14213D' radius={[4, 4, 3, 2]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Upcoming Events Section */}
//       <Card className='p-4 bg-white shadow rounded-xl border border-gray-200'>
//         <CardHeader>
//           <CardTitle className='text-[#14213D]'>Upcoming Events</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <ul className='space-y-3'>
//             {upcomingEvents.map((e, i) => (
//               <li key={i} className='flex justify-between border-b pb-2'>
//                 <div>
//                   <p className='font-medium text-gray-800'>{e.title}</p>
//                   <p className='text-sm text-gray-500'>{e.date}</p>
//                 </div>
//                 <span className='text-sm text-[#14213D] font-medium'>
//                   {e.attendees} attendees
//                 </span>
//               </li>
//             ))}
//           </ul>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }



// ok wla km bs events k cards ki styling

// import React, { useEffect, useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardContent,
// } from "@/components/ui/card";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   BarChart,
//   Bar,
//   ResponsiveContainer,
// } from "recharts";
// import { Client, Databases, Query } from "appwrite";

// // ✅ Appwrite setup
// const client = new Client()
//   .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
//   .setProject(import.meta.env.VITE_APPWRITE_PROJECT);

// const databases = new Databases(client);

// export default function Overview() {
//   const [users, setUsers] = useState([]);
//   const [events, setEvents] = useState([]);
//   const [locations, setLocations] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Users
//         const usersRes = await databases.listDocuments(
//           import.meta.env.VITE_APPWRITE_DATABASE_ID,
//           import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID
//         );
//         setUsers(usersRes.documents);

//         // Events
//         const eventsRes = await databases.listDocuments(
//           import.meta.env.VITE_APPWRITE_DATABASE_ID,
//           import.meta.env.VITE_APPWRITE_EVENTS_COLLECTION_ID
//         );
//         setEvents(eventsRes.documents);

//         // Locations
//         const locationsRes = await databases.listDocuments(
//           import.meta.env.VITE_APPWRITE_DATABASE_ID,
//           import.meta.env.VITE_APPWRITE_LOCATIONS_COLLECTION_ID
//         );
//         setLocations(locationsRes.documents);
//       } catch (err) {
//         console.error("Appwrite fetch error:", err);
//       }
//     };

//     fetchData();
//   }, []);

//   // 🔹 Prepare Jan–Dec data
//   const year = new Date().getFullYear();
//   const months = Array.from({ length: 12 }, (_, i) => ({
//     month: new Date(year, i).toLocaleString("default", { month: "short" }),
//     num: i,
//   }));

//   // Users per month (cumulative)
//   const userGrowth = months.map((m) => {
//     const count = users.filter((u) => {
//       const created = new Date(u.$createdAt);
//       return created.getMonth() === m.num && created.getFullYear() === year;
//     }).length;
//     return { month: m.month, users: count };
//   });

//   // Events per month
//   const eventsCreated = months.map((m) => {
//     const count = events.filter((e) => {
//       if (!e.date) return false;
//       const d = new Date(e.date);
//       return d.getMonth() === m.num && d.getFullYear() === year;
//     }).length;
//     return { month: m.month, events: count };
//   });

//   // 🔹 Filter Events by Status
//   const upcomingEvents = events.filter((e) => e.status === "Upcoming");
//   const liveEvents = events.filter((e) => e.status === "Live");
//   const canceledEvents = events.filter((e) => e.status === "Canceled");

//   return (
//     <div className="space-y-6 min-h-screen w-full bg-[#E5E5E5] p-6">
//       {/* Top Stats */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         <Card className="p-4 bg-[#14213D] text-white">
//           <CardHeader>
//             <CardTitle>Total Users</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{users.length}</p>
//           </CardContent>
//         </Card>
//         <Card className="p-4 bg-[#14213D] text-white">
//           <CardHeader>
//             <CardTitle>Total Events</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{events.length}</p>
//           </CardContent>
//         </Card>
//         <Card className="p-4 bg-[#14213D] text-white">
//           <CardHeader>
//             <CardTitle>Total Locations</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">{locations.length}</p>
//           </CardContent>
//         </Card>
//         <Card className="p-4 bg-[#14213D] text-white">
//           <CardHeader>
//             <CardTitle>Avg Rating</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-2xl font-bold">4.6</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Users Growth */}
//         <Card>
//           <CardHeader>
//             <CardTitle>User Growth (Jan–Dec)</CardTitle>
//           </CardHeader>
//           <CardContent className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={userGrowth}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Line type="monotone" dataKey="users" stroke="#14213D" />
//               </LineChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>

//         {/* Events Created */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Events Created (Jan–Dec)</CardTitle>
//           </CardHeader>
//           <CardContent className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={eventsCreated}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="month" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="events" fill="#14213D" radius={[4, 4, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Event Status Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {/* Upcoming */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-blue-600">Upcoming Events</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {upcomingEvents.length === 0 ? (
//               <p className="text-sm text-gray-500">No upcoming events</p>
//             ) : (
//               <ul className="space-y-2">
//                 {upcomingEvents.map((e) => (
//                   <li key={e.$id} className="border-b pb-1">
//                     <p className="font-medium">{e.name}</p>
//                     <p className="text-xs text-gray-500">
//                       {new Date(e.date).toLocaleDateString("en-US")}
//                     </p>
//                     <p className="text-xs">{e.persons || 0} persons</p>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </CardContent>
//         </Card>

//         {/* Live */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-green-600">Live Events</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {liveEvents.length === 0 ? (
//               <p className="text-sm text-gray-500">No live events</p>
//             ) : (
//               <ul className="space-y-2">
//                 {liveEvents.map((e) => (
//                   <li key={e.$id} className="border-b pb-1">
//                     <p className="font-medium">{e.name}</p>
//                     <p className="text-xs text-gray-500">
//                       {new Date(e.date).toLocaleDateString("en-US")}
//                     </p>
//                     <p className="text-xs">{e.persons || 0} persons</p>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </CardContent>
//         </Card>

//         {/* Canceled */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="text-red-600">Canceled Events</CardTitle>
//           </CardHeader>
//           <CardContent>
//             {canceledEvents.length === 0 ? (
//               <p className="text-sm text-gray-500">No canceled events</p>
//             ) : (
//               <ul className="space-y-2">
//                 {canceledEvents.map((e) => (
//                   <li key={e.$id} className="border-b pb-1">
//                     <p className="font-medium">{e.name}</p>
//                     <p className="text-xs text-gray-500">
//                       {new Date(e.date).toLocaleDateString("en-US")}
//                     </p>
//                     <p className="text-xs">{e.persons || 0} persons</p>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { Client, Databases } from "appwrite";
import { Users } from "lucide-react";

// ✅ Appwrite setup
const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT)
  .setProject(import.meta.env.VITE_APPWRITE_PROJECT);

const databases = new Databases(client);

export default function Overview() {
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Users
        const usersRes = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID
        );
        setUsers(usersRes.documents);

        // Events
        const eventsRes = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_EVENTS_COLLECTION_ID
        );
        setEvents(eventsRes.documents);

        // Locations
        const locationsRes = await databases.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          import.meta.env.VITE_APPWRITE_LOCATIONS_COLLECTION_ID
        );
        setLocations(locationsRes.documents);
      } catch (err) {
        console.error("Appwrite fetch error:", err);
      }
    };

    fetchData();
  }, []);

  // 🔹 Prepare Jan–Dec data
  const year = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => ({
    month: new Date(year, i).toLocaleString("default", { month: "short" }),
    num: i,
  }));

  // Users per month
  const userGrowth = months.map((m) => {
    const count = users.filter((u) => {
      const created = new Date(u.$createdAt);
      return created.getMonth() === m.num && created.getFullYear() === year;
    }).length;
    return { month: m.month, users: count };
  });

  // Events per month
  const eventsCreated = months.map((m) => {
    const count = events.filter((e) => {
      if (!e.date) return false;
      const d = new Date(e.date);
      return d.getMonth() === m.num && d.getFullYear() === year;
    }).length;
    return { month: m.month, events: count };
  });

  // 🔹 Filter Events by Status
  const upcomingEvents = events.filter((e) => e.status === "Upcoming");
  const liveEvents = events.filter((e) => e.status === "Live");
  const canceledEvents = events.filter((e) => e.status === "Canceled");

  // 🔹 Helper render function
  const renderEvents = (eventsArr) => {
    if (eventsArr.length === 0) {
      return <p className="text-sm text-gray-500">No events</p>;
    }
    return (
      <ul className="space-y-2">
        {eventsArr.map((e) => (
          <li
            key={e.$id}
            className="border-b pb-1 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{e.name}</p>
              <p className="text-xs text-gray-500">
                {new Date(e.date).toLocaleDateString("en-US")}
              </p>
            </div>
            <div className="flex items-center text-xs text-gray-600">
              <Users className="w-4 h-4 mr-1" />
              {e.persons || 0}
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="space-y-6 min-h-screen w-full bg-[#E5E5E5] p-6">
      {/* Top Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-4 bg-[#14213D] text-white">
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{users.length}</p>
          </CardContent>
        </Card>
        <Card className="p-4 bg-[#14213D] text-white">
          <CardHeader>
            <CardTitle>Total Events</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{events.length}</p>
          </CardContent>
        </Card>
        <Card className="p-4 bg-[#14213D] text-white">
          <CardHeader>
            <CardTitle>Total Locations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{locations.length}</p>
          </CardContent>
        </Card>
        <Card className="p-4 bg-[#14213D] text-white">
          <CardHeader>
            <CardTitle>Avg Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">4.6</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Users Growth */}
        <Card>
          <CardHeader>
            <CardTitle>User Growth (Jan–Dec)</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="users" stroke="#14213D" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Events Created */}
        <Card>
          <CardHeader>
            <CardTitle>Events Created (Jan–Dec)</CardTitle>
          </CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={eventsCreated}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="events" fill="#14213D" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Event Status Cards */}
      <div className="grid grid-cols-1  ">
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-[#14213D] ">Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>{renderEvents(upcomingEvents)}</CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-[#14213D]">Live Events</CardTitle>
          </CardHeader>
          <CardContent>{renderEvents(liveEvents)}</CardContent>
        </Card>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-[#14213D]">Canceled Events</CardTitle>
          </CardHeader>
          <CardContent>{renderEvents(canceledEvents)}</CardContent>
        </Card>
      </div>
    </div>
  );
}
