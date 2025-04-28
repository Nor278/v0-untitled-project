import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, FileText, Search } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-6">
                Medication Adherence Resources
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Educational materials, guides, and tools to help you better understand and manage your medications.
              </p>
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input type="search" placeholder="Search resources..." className="pl-10 py-6 text-lg rounded-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="guides" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="articles">Articles</TabsTrigger>
                  <TabsTrigger value="videos">Videos</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="guides">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ResourceCard
                    title="Getting Started with Medication Management"
                    description="A comprehensive guide to organizing and managing your medications effectively."
                    type="Guide"
                    icon={<BookOpen className="h-6 w-6" />}
                    link="/resources/guides/getting-started"
                  />
                  <ResourceCard
                    title="Creating an Effective Medication Schedule"
                    description="Learn how to create a medication schedule that works with your lifestyle."
                    type="Guide"
                    icon={<BookOpen className="h-6 w-6" />}
                    link="/resources/guides/medication-schedule"
                  />
                  <ResourceCard
                    title="Understanding Medication Interactions"
                    description="Important information about how different medications can interact with each other."
                    type="Guide"
                    icon={<BookOpen className="h-6 w-6" />}
                    link="/resources/guides/medication-interactions"
                  />
                  <ResourceCard
                    title="Guide for Caregivers"
                    description="Essential information for those helping others manage their medications."
                    type="Guide"
                    icon={<BookOpen className="h-6 w-6" />}
                    link="/resources/guides/caregivers"
                  />
                  <ResourceCard
                    title="Managing Multiple Medications"
                    description="Strategies for safely managing complex medication regimens."
                    type="Guide"
                    icon={<BookOpen className="h-6 w-6" />}
                    link="/resources/guides/multiple-medications"
                  />
                  <ResourceCard
                    title="Traveling with Medications"
                    description="Tips and best practices for managing your medications while traveling."
                    type="Guide"
                    icon={<BookOpen className="h-6 w-6" />}
                    link="/resources/guides/traveling"
                  />
                </div>
              </TabsContent>

              <TabsContent value="articles">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ResourceCard
                    title="The Importance of Medication Adherence"
                    description="Why taking your medications as prescribed is crucial for your health outcomes."
                    type="Article"
                    icon={<FileText className="h-6 w-6" />}
                    link="/resources/articles/importance-of-adherence"
                    date="May 15, 2023"
                  />
                  <ResourceCard
                    title="Common Barriers to Medication Adherence"
                    description="Understanding and overcoming the challenges that prevent proper medication use."
                    type="Article"
                    icon={<FileText className="h-6 w-6" />}
                    link="/resources/articles/adherence-barriers"
                    date="June 3, 2023"
                  />
                  <ResourceCard
                    title="How Technology Improves Medication Management"
                    description="The role of digital tools in helping patients stay on track with their medications."
                    type="Article"
                    icon={<FileText className="h-6 w-6" />}
                    link="/resources/articles/technology-benefits"
                    date="July 12, 2023"
                  />
                  <ResourceCard
                    title="Medication Safety at Home"
                    description="Best practices for storing and handling medications safely in your home."
                    type="Article"
                    icon={<FileText className="h-6 w-6" />}
                    link="/resources/articles/medication-safety"
                    date="August 22, 2023"
                  />
                  <ResourceCard
                    title="Talking to Your Doctor About Medications"
                    description="How to have productive conversations with your healthcare provider about your medications."
                    type="Article"
                    icon={<FileText className="h-6 w-6" />}
                    link="/resources/articles/doctor-conversations"
                    date="September 8, 2023"
                  />
                  <ResourceCard
                    title="Managing Medication Side Effects"
                    description="Strategies for identifying and coping with potential medication side effects."
                    type="Article"
                    icon={<FileText className="h-6 w-6" />}
                    link="/resources/articles/side-effects"
                    date="October 17, 2023"
                  />
                </div>
              </TabsContent>

              <TabsContent value="videos">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <VideoResourceCard
                    title="How to Use MediTrack Effectively"
                    description="A step-by-step tutorial on getting the most out of the MediTrack platform."
                    duration="5:32"
                    link="/resources/videos/meditrack-tutorial"
                  />
                  <VideoResourceCard
                    title="Setting Up Medication Reminders"
                    description="Learn how to configure reminders that work for your schedule."
                    duration="4:18"
                    link="/resources/videos/setting-reminders"
                  />
                  <VideoResourceCard
                    title="Understanding Your Adherence Reports"
                    description="How to interpret and use the adherence data to improve your medication routine."
                    duration="7:45"
                    link="/resources/videos/adherence-reports"
                  />
                  <VideoResourceCard
                    title="Sharing Access with Caregivers"
                    description="A guide to safely sharing your medication information with family members or caregivers."
                    duration="3:56"
                    link="/resources/videos/caregiver-sharing"
                  />
                  <VideoResourceCard
                    title="Organizing Your Medication Cabinet"
                    description="Practical tips for organizing your medications at home for safety and convenience."
                    duration="8:22"
                    link="/resources/videos/organizing-medications"
                  />
                  <VideoResourceCard
                    title="Using Pill Organizers Effectively"
                    description="How to use pill organizers in conjunction with digital reminders for better adherence."
                    duration="6:10"
                    link="/resources/videos/pill-organizers"
                  />
                </div>
              </TabsContent>

              <TabsContent value="tools">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <ToolResourceCard
                    title="Medication List Template"
                    description="A printable template to keep track of all your medications, dosages, and schedules."
                    fileType="PDF"
                    fileSize="245 KB"
                    link="/resources/tools/medication-list-template.pdf"
                  />
                  <ToolResourceCard
                    title="Medication Schedule Planner"
                    description="A weekly planner to help you organize your medication schedule."
                    fileType="PDF"
                    fileSize="312 KB"
                    link="/resources/tools/schedule-planner.pdf"
                  />
                  <ToolResourceCard
                    title="Adherence Tracking Sheet"
                    description="A printable sheet to manually track your medication adherence."
                    fileType="PDF"
                    fileSize="198 KB"
                    link="/resources/tools/adherence-tracker.pdf"
                  />
                  <ToolResourceCard
                    title="Medication Information Cards"
                    description="Printable cards to keep important information about each of your medications."
                    fileType="PDF"
                    fileSize="276 KB"
                    link="/resources/tools/medication-cards.pdf"
                  />
                  <ToolResourceCard
                    title="Emergency Medical Information Form"
                    description="A form to keep your important medical information for emergency situations."
                    fileType="PDF"
                    fileSize="189 KB"
                    link="/resources/tools/emergency-info.pdf"
                  />
                  <ToolResourceCard
                    title="Medication Side Effects Log"
                    description="A template to track any side effects you experience from your medications."
                    fileType="PDF"
                    fileSize="223 KB"
                    link="/resources/tools/side-effects-log.pdf"
                  />
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Featured Resource */}
        <section className="bg-gray-50 py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Medication adherence guide cover"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-teal-100 text-teal-800 hover:bg-teal-200">Featured Resource</Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Complete Guide to Medication Adherence</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our comprehensive 25-page guide covers everything you need to know about managing your medications
                  effectively, understanding common challenges, and implementing strategies to improve your adherence.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                      <span className="text-teal-800 text-sm font-medium">1</span>
                    </div>
                    <span>Understanding the importance of medication adherence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                      <span className="text-teal-800 text-sm font-medium">2</span>
                    </div>
                    <span>Common barriers and how to overcome them</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                      <span className="text-teal-800 text-sm font-medium">3</span>
                    </div>
                    <span>Practical strategies for staying on track</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                      <span className="text-teal-800 text-sm font-medium">4</span>
                    </div>
                    <span>Tools and resources to support your medication routine</span>
                  </li>
                </ul>
                <Button asChild className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/resources/guides/complete-adherence-guide">
                    <Download className="mr-2 h-4 w-4" /> Download Free Guide
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated with New Resources</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest articles, guides, and tools to help you manage your
              medications effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input type="email" placeholder="Your email address" className="py-6 text-lg" />
              <Button className="bg-teal-600 hover:bg-teal-700 py-6 px-8 text-lg">Subscribe</Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time. View our{" "}
              <Link href="/privacy" className="text-teal-600 hover:text-teal-700">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal-600 py-20 px-4 md:px-6 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Medications?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Start using MediTrack today and experience the benefits of better medication management.
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

function ResourceCard({
  title,
  description,
  type,
  icon,
  link,
  date,
}: {
  title: string
  description: string
  type: string
  icon: React.ReactNode
  link: string
  date?: string
}) {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="text-teal-600">{icon}</div>
          <Badge variant="outline" className="bg-gray-100">
            {type}
          </Badge>
          {date && <span className="text-sm text-gray-500">{date}</span>}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-4">
        <Button asChild variant="outline" className="w-full">
          <Link href={link}>Read More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function VideoResourceCard({
  title,
  description,
  duration,
  link,
}: {
  title: string
  description: string
  duration: string
  link: string
}) {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="relative">
        <img
          src="/placeholder.svg?height=200&width=400"
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-16 w-16 rounded-full bg-teal-600 bg-opacity-90 flex items-center justify-center">
            <div className="h-0 w-0 border-y-8 border-y-transparent border-l-12 border-l-white ml-1"></div>
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {duration}
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-4">
        <Button asChild variant="outline" className="w-full">
          <Link href={link}>Watch Video</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

function ToolResourceCard({
  title,
  description,
  fileType,
  fileSize,
  link,
}: {
  title: string
  description: string
  fileType: string
  fileSize: string
  link: string
}) {
  return (
    <Card className="border border-gray-200 hover:shadow-md transition-shadow h-full flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="outline" className="bg-gray-100">
            {fileType}
          </Badge>
          <span className="text-sm text-gray-500">{fileSize}</span>
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto pt-4">
        <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
          <Link href={link}>
            <Download className="mr-2 h-4 w-4" /> Download
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
