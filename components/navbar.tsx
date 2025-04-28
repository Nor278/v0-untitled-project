"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Pill } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Pill className="h-6 w-6 text-teal-600" />
              <span className="text-xl font-bold text-gray-900">MediTrack</span>
            </Link>
            <nav className="hidden ml-10 md:flex items-center space-x-8">
              <Link href="/features" className="text-gray-600 hover:text-teal-600 transition-colors">
                Features
              </Link>
              <Link href="/pricing" className="text-gray-600 hover:text-teal-600 transition-colors">
                Pricing
              </Link>
              <Link href="/resources" className="text-gray-600 hover:text-teal-600 transition-colors">
                Resources
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
                About
              </Link>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild variant="outline">
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col h-full">
                <Link href="/" className="flex items-center space-x-2 mb-8" onClick={() => setIsOpen(false)}>
                  <Pill className="h-6 w-6 text-teal-600" />
                  <span className="text-xl font-bold text-gray-900">MediTrack</span>
                </Link>
                <nav className="flex flex-col space-y-4 mb-8">
                  <Link
                    href="/features"
                    className="text-gray-600 hover:text-teal-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-gray-600 hover:text-teal-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/resources"
                    className="text-gray-600 hover:text-teal-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Resources
                  </Link>
                  <Link
                    href="/about"
                    className="text-gray-600 hover:text-teal-600 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About
                  </Link>
                </nav>
                <div className="flex flex-col space-y-4 mt-auto">
                  <Button asChild variant="outline">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Sign In
                    </Link>
                  </Button>
                  <Button asChild className="bg-teal-600 hover:bg-teal-700">
                    <Link href="/signup" onClick={() => setIsOpen(false)}>
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
