"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Pill, LayoutDashboard, Calendar, PieChart, Settings, Users, BookOpen, Bell, LogOut, Menu } from "lucide-react"
import { cn } from "@/lib/utils"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DashboardSidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      icon: LayoutDashboard,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Medications",
      icon: Pill,
      href: "/dashboard/medications",
      active: pathname === "/dashboard/medications",
    },
    {
      label: "Schedule",
      icon: Calendar,
      href: "/dashboard/schedule",
      active: pathname === "/dashboard/schedule",
    },
    {
      label: "Reminders",
      icon: Bell,
      href: "/dashboard/reminders",
      active: pathname === "/dashboard/reminders",
    },
    {
      label: "Reports",
      icon: PieChart,
      href: "/dashboard/reports",
      active: pathname === "/dashboard/reports",
    },
    {
      label: "Caregivers",
      icon: Users,
      href: "/dashboard/caregivers",
      active: pathname === "/dashboard/caregivers",
    },
    {
      label: "Resources",
      icon: BookOpen,
      href: "/dashboard/resources",
      active: pathname === "/dashboard/resources",
    },
    {
      label: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
      active: pathname === "/dashboard/settings",
    },
  ]

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Pill className="h-6 w-6 text-teal-600" />
          <span>MediTrack</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 px-2">
        <div className="space-y-1 py-4">
          {routes.map((route) => (
            <Link key={route.href} href={route.href} onClick={() => setIsMobileOpen(false)}>
              <Button
                variant={route.active ? "secondary" : "ghost"}
                className={cn("w-full justify-start", {
                  "bg-teal-50 text-teal-700": route.active,
                })}
              >
                <route.icon className="mr-2 h-5 w-5" />
                {route.label}
              </Button>
            </Link>
          ))}
        </div>
      </ScrollArea>
      <div className="mt-auto border-t p-4">
        <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700">
          <LogOut className="mr-2 h-5 w-5" />
          Log out
        </Button>
      </div>
    </div>
  )

  return (
    <>
      <aside className="hidden w-64 border-r bg-white lg:block">
        <SidebarContent />
      </aside>

      <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <SheetTrigger asChild className="absolute left-4 top-4 lg:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <SidebarContent />
        </SheetContent>
      </Sheet>
    </>
  )
}
