"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"

interface AddMedicationFormProps {
  onSuccess?: () => void
}

export default function AddMedicationForm({ onSuccess }: AddMedicationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Medication added",
        description: "Your medication has been added successfully.",
      })
      if (onSuccess) onSuccess()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Medication Name</Label>
        <Input id="name" placeholder="e.g., Lisinopril" required />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="dosage">Dosage</Label>
          <Input id="dosage" placeholder="e.g., 10mg" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="frequency">Frequency</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select frequency" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="once">Once daily</SelectItem>
              <SelectItem value="twice">Twice daily</SelectItem>
              <SelectItem value="three">Three times daily</SelectItem>
              <SelectItem value="four">Four times daily</SelectItem>
              <SelectItem value="asneeded">As needed</SelectItem>
              <SelectItem value="weekly">Weekly</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label>Time of Day</Label>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="morning" />
            <Label htmlFor="morning" className="font-normal">
              Morning
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="afternoon" />
            <Label htmlFor="afternoon" className="font-normal">
              Afternoon
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="evening" />
            <Label htmlFor="evening" className="font-normal">
              Evening
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="bedtime" />
            <Label htmlFor="bedtime" className="font-normal">
              Bedtime
            </Label>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="instructions">Special Instructions</Label>
        <Input id="instructions" placeholder="e.g., Take with food" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="refill">Next Refill Date</Label>
        <Input id="refill" type="date" />
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button type="button" variant="outline">
          Cancel
        </Button>
        <Button type="submit" className="bg-teal-600 hover:bg-teal-700" disabled={isLoading}>
          {isLoading ? "Adding..." : "Add Medication"}
        </Button>
      </div>
    </form>
  )
}
