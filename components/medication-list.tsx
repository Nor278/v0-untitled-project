"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Edit, MoreHorizontal, Trash } from "lucide-react"

type Medication = {
  id: string
  name: string
  dosage: string
  frequency: string
  timeOfDay: string[]
  refillDate: string
  active: boolean
}

export default function MedicationList() {
  const [medications, setMedications] = useState<Medication[]>([
    {
      id: "1",
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      timeOfDay: ["Morning"],
      refillDate: "2025-05-10",
      active: true,
    },
    {
      id: "2",
      name: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      timeOfDay: ["Morning", "Evening"],
      refillDate: "2025-05-12",
      active: true,
    },
    {
      id: "3",
      name: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily",
      timeOfDay: ["Evening"],
      refillDate: "2025-06-15",
      active: true,
    },
    {
      id: "4",
      name: "Aspirin",
      dosage: "81mg",
      frequency: "Once daily",
      timeOfDay: ["Morning"],
      refillDate: "2025-07-01",
      active: true,
    },
    {
      id: "5",
      name: "Levothyroxine",
      dosage: "50mcg",
      frequency: "Once daily",
      timeOfDay: ["Morning"],
      refillDate: "2025-05-20",
      active: false,
    },
  ])

  const toggleMedicationStatus = (id: string) => {
    setMedications(medications.map((med) => (med.id === id ? { ...med, active: !med.active } : med)))
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">Status</TableHead>
            <TableHead>Medication</TableHead>
            <TableHead>Dosage</TableHead>
            <TableHead>Frequency</TableHead>
            <TableHead>Time of Day</TableHead>
            <TableHead>Refill Date</TableHead>
            <TableHead className="w-12"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {medications.map((medication) => (
            <TableRow key={medication.id}>
              <TableCell>
                <Checkbox checked={medication.active} onCheckedChange={() => toggleMedicationStatus(medication.id)} />
              </TableCell>
              <TableCell className="font-medium">{medication.name}</TableCell>
              <TableCell>{medication.dosage}</TableCell>
              <TableCell>{medication.frequency}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {medication.timeOfDay.map((time) => (
                    <Badge key={time} variant="outline" className="bg-teal-50 text-teal-700 hover:bg-teal-50">
                      {time}
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell>{new Date(medication.refillDate).toLocaleDateString()}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600">
                      <Trash className="mr-2 h-4 w-4" />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
