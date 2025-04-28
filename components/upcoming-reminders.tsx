"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

type Reminder = {
  id: string
  medicationName: string
  dosage: string
  time: string
  taken: boolean
}

export default function UpcomingReminders() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: "1",
      medicationName: "Lisinopril",
      dosage: "10mg",
      time: "8:00 AM",
      taken: true,
    },
    {
      id: "2",
      medicationName: "Metformin",
      dosage: "500mg",
      time: "8:00 AM",
      taken: true,
    },
    {
      id: "3",
      medicationName: "Aspirin",
      dosage: "81mg",
      time: "8:00 AM",
      taken: false,
    },
    {
      id: "4",
      medicationName: "Metformin",
      dosage: "500mg",
      time: "8:00 PM",
      taken: false,
    },
    {
      id: "5",
      medicationName: "Atorvastatin",
      dosage: "20mg",
      time: "8:00 PM",
      taken: false,
    },
  ])

  const markAsTaken = (id: string) => {
    setReminders(reminders.map((reminder) => (reminder.id === id ? { ...reminder, taken: true } : reminder)))
  }

  const markAsSkipped = (id: string) => {
    setReminders(reminders.map((reminder) => (reminder.id === id ? { ...reminder, taken: false } : reminder)))
  }

  // Group reminders by time
  const remindersByTime = reminders.reduce(
    (acc, reminder) => {
      if (!acc[reminder.time]) {
        acc[reminder.time] = []
      }
      acc[reminder.time].push(reminder)
      return acc
    },
    {} as Record<string, Reminder[]>,
  )

  return (
    <div className="space-y-4">
      {Object.entries(remindersByTime).map(([time, timeReminders]) => (
        <div key={time} className="space-y-2">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium">{time}</h3>
          </div>
          <div className="space-y-2">
            {timeReminders.map((reminder) => (
              <Card
                key={reminder.id}
                className={cn("border-l-4", reminder.taken ? "border-l-green-500 bg-green-50" : "border-l-teal-500")}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="font-medium">{reminder.medicationName}</p>
                    <p className="text-sm text-muted-foreground">{reminder.dosage}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {reminder.taken ? (
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        <span className="text-sm">Taken</span>
                      </div>
                    ) : (
                      <>
                        <Button
                          size="sm"
                          className="bg-teal-600 hover:bg-teal-700"
                          onClick={() => markAsTaken(reminder.id)}
                        >
                          Take
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => markAsSkipped(reminder.id)}>
                          Skip
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
