import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import {
  Bell,
  Calendar,
  BarChartIcon as ChartBar,
  CheckCircle,
  Clock,
  FileText,
  Pill,
  Share2,
  ShieldCheck,
  Smartphone,
  Trophy,
  Users,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-6">
                Comprehensive Features for Better Medication Management
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Discover all the powerful tools MediTrack offers to help you stay on track with your medications and
                improve your health outcomes.
              </p>
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MediTrack combines powerful medication management tools with an intuitive interface to help you stay on
                track.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Pill className="h-12 w-12 text-teal-600" />}
                title="Medication Management"
                description="Add, edit, and organize your medications with detailed information about dosage, instructions, and refill dates."
              />
              <FeatureCard
                icon={<Bell className="h-12 w-12 text-teal-600" />}
                title="Smart Reminders"
                description="Receive customizable reminders via notifications, email, or SMS to never miss a dose, with options for snoozing and rescheduling."
              />
              <FeatureCard
                icon={<Calendar className="h-12 w-12 text-teal-600" />}
                title="Medication Schedule"
                description="View your daily, weekly, and monthly medication schedule at a glance with an intuitive calendar interface."
              />
              <FeatureCard
                icon={<ChartBar className="h-12 w-12 text-teal-600" />}
                title="Adherence Tracking"
                description="Monitor your medication adherence with detailed reports and insights to identify patterns and improve consistency."
              />
              <FeatureCard
                icon={<Share2 className="h-12 w-12 text-teal-600" />}
                title="Caregiver Sharing"
                description="Share your medication schedule and adherence reports with family members or healthcare providers for better support."
              />
              <FeatureCard
                icon={<Trophy className="h-12 w-12 text-teal-600" />}
                title="Rewards & Motivation"
                description="Earn points and achievements for consistent medication adherence to stay motivated and build healthy habits."
              />
            </div>
          </div>
        </section>

        {/* Feature Details Section */}
        <section className="bg-gray-50 py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Smart Medication Reminders</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Never miss a dose again with our intelligent reminder system that adapts to your schedule and
                  preferences.
                </p>
                <ul className="space-y-4">
                  <FeatureListItem>Customizable reminder times with multiple notification options</FeatureListItem>
                  <FeatureListItem>Persistent alerts until medication is marked as taken</FeatureListItem>
                  <FeatureListItem>Snooze functionality for temporary rescheduling</FeatureListItem>
                  <FeatureListItem>
                    Support for complex medication schedules (every other day, specific days of week, etc.)
                  </FeatureListItem>
                  <FeatureListItem>Offline functionality ensures you never miss reminders</FeatureListItem>
                </ul>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Smart medication reminders interface"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Adherence tracking dashboard"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Adherence Tracking</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Gain valuable insights into your medication adherence patterns with detailed analytics and reports.
                </p>
                <ul className="space-y-4">
                  <FeatureListItem>Visual adherence charts showing daily, weekly, and monthly patterns</FeatureListItem>
                  <FeatureListItem>Detailed logs of taken, missed, and skipped medications</FeatureListItem>
                  <FeatureListItem>Adherence score to track your progress over time</FeatureListItem>
                  <FeatureListItem>Exportable reports to share with healthcare providers</FeatureListItem>
                  <FeatureListItem>Personalized insights and recommendations to improve adherence</FeatureListItem>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="bg-gray-50 py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Additional Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MediTrack offers a wide range of features to make medication management easier and more effective.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Clock className="h-8 w-8 text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Flexible Scheduling</h3>
                  <p className="text-gray-600">
                    Support for complex medication schedules including as-needed, cyclical, and tapered dosing.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Medication Information</h3>
                  <p className="text-gray-600">
                    Access detailed information about your medications, including side effects and interactions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Family Accounts</h3>
                  <p className="text-gray-600">
                    Manage medications for multiple family members with separate profiles and permissions.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <ShieldCheck className="h-8 w-8 text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Privacy & Security</h3>
                  <p className="text-gray-600">
                    Your health data is protected with industry-standard encryption and privacy controls.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <Smartphone className="h-8 w-8 text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Mobile & Desktop Access</h3>
                  <p className="text-gray-600">
                    Access your medication information from any device with our responsive web application.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <CheckCircle className="h-8 w-8 text-teal-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Refill Management</h3>
                  <p className="text-gray-600">
                    Track medication supplies and receive timely reminders when it's time to refill.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal-600 py-20 px-4 md:px-6 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Medications?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Join thousands of users who have improved their medication adherence with MediTrack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-teal-700">
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FeatureListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start">
      <CheckCircle className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
      <span className="text-gray-700">{children}</span>
    </li>
  )
}
