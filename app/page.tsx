import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Pill, Calendar, Award, Share2, Bell, BarChart3 } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900">
                  Never Miss a Medication Again
                </h1>
                <p className="text-xl text-gray-600">
                  MediTrack helps you stay on top of your medication schedule, track your adherence, and improve your
                  health outcomes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
                    <Link href="/signup">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/login">Sign In</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="MediTrack dashboard preview"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Features Designed for Your Health</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MediTrack combines powerful medication management tools with an intuitive interface to help you stay on
                track.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Pill className="h-10 w-10 text-teal-600" />}
                title="Medication Management"
                description="Easily add, edit, and organize your medications with detailed information about dosage and instructions."
              />
              <FeatureCard
                icon={<Bell className="h-10 w-10 text-teal-600" />}
                title="Smart Reminders"
                description="Receive customizable reminders via notifications, email, or SMS to never miss a dose."
              />
              <FeatureCard
                icon={<Calendar className="h-10 w-10 text-teal-600" />}
                title="Medication Schedule"
                description="View your daily, weekly, and monthly medication schedule at a glance."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-teal-600" />}
                title="Adherence Tracking"
                description="Monitor your medication adherence with detailed reports and insights."
              />
              <FeatureCard
                icon={<Share2 className="h-10 w-10 text-teal-600" />}
                title="Caregiver Sharing"
                description="Share your medication schedule and adherence reports with family members or healthcare providers."
              />
              <FeatureCard
                icon={<Award className="h-10 w-10 text-teal-600" />}
                title="Rewards & Motivation"
                description="Earn points and achievements for consistent medication adherence to stay motivated."
              />
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-gray-50 py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How MediTrack Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting started with MediTrack is simple and takes just a few minutes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <StepCard
                number="1"
                title="Create Your Profile"
                description="Sign up and create your personal profile with basic health information."
              />
              <StepCard
                number="2"
                title="Add Your Medications"
                description="Enter your medications, including dosage, schedule, and special instructions."
              />
              <StepCard
                number="3"
                title="Stay on Track"
                description="Receive reminders, track your adherence, and improve your health outcomes."
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                MediTrack has helped thousands of people improve their medication adherence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="MediTrack has completely changed how I manage my medications. I haven't missed a dose in months!"
                name="Sarah J."
                role="User for 8 months"
              />
              <TestimonialCard
                quote="As a caregiver for my elderly mother, MediTrack gives me peace of mind knowing she's taking her medications properly."
                name="Michael T."
                role="Caregiver"
              />
              <TestimonialCard
                quote="The adherence reports help me have more productive conversations with my patients about their medication use."
                name="Dr. Lisa R."
                role="Healthcare Provider"
              />
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
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/signup">Get Started for Free</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-600 font-bold text-xl mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <div>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  )
}
