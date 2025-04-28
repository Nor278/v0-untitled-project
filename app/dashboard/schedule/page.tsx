"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import UpcomingReminders from "@/components/upcoming-reminders"

export default function SchedulePage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState<"day" | "week" | "month">("day")

  const formatDate = (date: Date | undefined) => {
    if (!date) return ""
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const handlePrevDay = () => {
    if (!date) return
    const newDate = new Date(date)
    newDate.setDate(date.getDate() - 1)
    setDate(newDate)
  }

  const handleNextDay = () => {
    if (!date) return
    const newDate = new Date(date)
    newDate.setDate(date.getDate() + 1)
    setDate(newDate)
  }

  const handleToday = () => {
    setDate(new Date())
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Medication Schedule</h1>
        <Button className="bg-teal-600 hover:bg-teal-700">
          <Plus className="mr-2 h-4 w-4" /> Add Reminder
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view your medication schedule</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </CardContent>
        </Card>

        <Card className="md:col-span-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Schedule</CardTitle>
                <CardDescription>Your medication schedule and reminders</CardDescription>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="icon" onClick={handlePrevDay}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={handleToday}>
                  Today
                </Button>
                <Button variant="outline" size="icon" onClick={handleNextDay}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
              <div className="font-medium">{formatDate(date)}</div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs value={view} onValueChange={(v) => setView(v as "day" | "week" | "month")}>
              <TabsList className="mb-4">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
              </TabsList>
              <TabsContent value="day">
                <UpcomingReminders />
              </TabsContent>
              <TabsContent value="week">
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Weekly view will be displayed here
                </div>
              </TabsContent>
              <TabsContent value="month">
                <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                  Monthly view will be displayed here
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
