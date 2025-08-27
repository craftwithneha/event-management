
import React from "react";
import { Card } from "@/components/ui/card";
import { Users, CalendarDays, MapPin } from "lucide-react";

export default function Overview({ users = [], events = [], locations = [] }) {
  const cards = [
    {
      title: "Total Users",
      value: users.length,
      icon: <Users className="w-7 h-7 text-blue-600" />,
      desc: "All registered members",
    },
    {
      title: "Total Events",
      value: events.length,
      icon: <CalendarDays className="w-7 h-7 text-green-600" />,
      desc: "Events created & managed",
    },
    {
      title: "Total Locations",
      value: locations.length,
      icon: <MapPin className="w-7 h-7 text-red-600" />,
      desc: "Available venues for events",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {cards.map((c) => (
        <Card
          key={c.title}
          className="p-6 rounded-xl border bg-white shadow-sm hover:shadow-md transition"
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-lg bg-gray-100">{c.icon}</div>
            <h2 className="text-4xl font-bold text-gray-800">{c.value}</h2>
          </div>
          <p className="mt-4 text-lg font-semibold text-gray-700">{c.title}</p>
          <p className="text-sm text-gray-500">{c.desc}</p>
        </Card>
      ))}
    </div>
  );
}
