import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Users, CalendarDays, MapPin, Star } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer
} from 'recharts'

export default function Overview ({ users = [], events = [], locations = [] }) {
  // Dummy chart data (replace with API data)
  const userGrowth = [
    { month: 'Jan', users: 50 },
    { month: 'Feb', users: 120 },
    { month: 'Mar', users: 180 },
    { month: 'Apr', users: 220 },
    { month: 'May', users: 300 },
    { month: 'June', users: 350 },
    { month: 'July', users: 400 },
    { month: 'Aug', users: 450 },
    { month: 'Sep', users: 500 },
    { month: 'Oct', users: 700 },
    { month: 'Nov', users:  650},
    { month: 'Dec', users: 700 }
  ]

  const eventsCreated = [
    { month: 'Jan', events: 20 },
    { month: 'Feb', events: 35 },
    { month: 'Mar', events: 25 },
    { month: 'Apr', events: 40 },
    { month: 'May', events: 50 },
    { month: 'June', events: 60 },
    { month: 'July', events: 70 },
    { month: 'Aug', events: 80 },
    { month: 'Sep', events: 90 },
    { month: 'Oct', events: 100 },
    { month: 'Nov', events: 110 },
    { month: 'Dec', events: 120 },
  ]

  const upcomingEvents = [
    { title: 'Tech Conference 2025', date: 'Dec 15', attendees: 525 },
    { title: 'Music Festival', date: 'Dec 20', attendees: 743 },
    { title: 'Food Expo', date: 'Jan 05', attendees: 300 }
  ]

  const cards = [
    {
      title: 'Total Users',
      value: users.length,
      icon: <Users className='w-6 h-6 text-white' />
    },
    {
      title: 'Total Events',
      value: events.length,
      icon: <CalendarDays className='w-6 h-6 text-white' />
    },
    {
      title: 'Total Locations',
      value: locations.length,
      icon: <MapPin className='w-6 h-6 text-white' />
    },
    {
      title: 'Avg Rating',
      value: '4.6',
      icon: <Star className='w-6 h-6 text-white' />
    }
  ]

  return (
    <div className='space-y-6 min-h-screen w-full bg-[#E5E5E5] p-6'>
      {/* Cards Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cards.map(c => (
          <Card
            key={c.title}
            className='p-4 bg-[#14213D] text-white shadow-md rounded-xl border-none'
          >
            <CardHeader className='flex flex-row items-center justify-between pb-2'>
              <CardTitle className='text-sm font-medium'>{c.title}</CardTitle>
              {c.icon}
            </CardHeader>
            <CardContent>
              <p className='text-2xl font-bold'>{c.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        {/* User Growth Chart */}
        <Card className=' bg-white shadow rounded-xl border border-gray-200'>
          <CardHeader>
            <CardTitle className='text-[#14213D]'>User Growth</CardTitle>
          </CardHeader>
          <CardContent className='h-64'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart data={userGrowth}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' stroke='#374151' />
                <YAxis stroke='#374151' />
                <Tooltip />
                <Line
                  type='monotone'
                  dataKey='users'
                  stroke='#14213D'
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Events Created Chart */}
        <Card className=' bg-white shadow rounded-xl border border-gray-200'>
          <CardHeader>
            <CardTitle className='text-[#14213D]'>Events Created</CardTitle>
          </CardHeader>
          <CardContent className='h-64'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={eventsCreated}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='month' stroke='#374151' />
                <YAxis stroke='#374151' />
                <Tooltip />
                <Bar dataKey='events' fill='#14213D' radius={[4, 4, 3, 2]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Events Section */}
      <Card className='p-4 bg-white shadow rounded-xl border border-gray-200'>
        <CardHeader>
          <CardTitle className='text-[#14213D]'>Upcoming Events</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='space-y-3'>
            {upcomingEvents.map((e, i) => (
              <li key={i} className='flex justify-between border-b pb-2'>
                <div>
                  <p className='font-medium text-gray-800'>{e.title}</p>
                  <p className='text-sm text-gray-500'>{e.date}</p>
                </div>
                <span className='text-sm text-[#14213D] font-medium'>
                  {e.attendees} attendees
                </span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
