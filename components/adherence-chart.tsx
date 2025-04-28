"use client"

import { useEffect, useRef } from "react"

export default function AdherenceChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Data for the pie chart
    const data = [
      { label: "Taken", value: 75, color: "#14b8a6" },
      { label: "Missed", value: 15, color: "#ef4444" },
      { label: "Remaining", value: 10, color: "#e5e7eb" },
    ]

    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw the pie chart
    let startAngle = 0
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = Math.min(centerX, centerY) * 0.8

    data.forEach((item) => {
      // Calculate the angle
      const sliceAngle = (2 * Math.PI * item.value) / total

      // Draw the slice
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      // Fill the slice
      ctx.fillStyle = item.color
      ctx.fill()

      // Update the starting angle for the next slice
      startAngle += sliceAngle
    })

    // Draw a white circle in the center to create a donut chart
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI)
    ctx.fillStyle = "white"
    ctx.fill()

    // Add text in the center
    ctx.fillStyle = "#111827"
    ctx.font = "bold 24px sans-serif"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${data[0].value}%`, centerX, centerY - 10)

    ctx.fillStyle = "#6b7280"
    ctx.font = "14px sans-serif"
    ctx.fillText("Adherence", centerX, centerY + 15)
  }, [])

  return (
    <div className="h-[200px] w-full">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
      <div className="flex justify-center space-x-4 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
          <span className="text-sm">Taken</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
          <span className="text-sm">Missed</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-gray-200 mr-2"></div>
          <span className="text-sm">Remaining</span>
        </div>
      </div>
    </div>
  )
}
