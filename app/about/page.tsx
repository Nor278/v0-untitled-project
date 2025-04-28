import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-6">
                Our Mission: Better Medication Management for Everyone
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We're dedicated to improving medication adherence and health outcomes through innovative technology and
                education.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="MediTrack founding team"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  MediTrack was founded in 2020 by a team of healthcare professionals and technology experts who
                  recognized a critical gap in medication management solutions. After witnessing firsthand the
                  challenges patients face in adhering to complex medication regimens, our founders set out to create a
                  user-friendly platform that would make medication management simpler and more effective.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  What began as a simple medication reminder app has evolved into a comprehensive platform that helps
                  thousands of users manage their medications, track their adherence, and improve their health outcomes.
                  Our team continues to innovate and expand our offerings based on user feedback and the latest research
                  in medication adherence.
                </p>
                <p className="text-lg text-gray-600">
                  Today, MediTrack is trusted by individuals, caregivers, and healthcare providers across the country to
                  support better medication management and improved health outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-gray-50 py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do at MediTrack.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                    <span className="text-teal-600 text-2xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">User-Centered Design</h3>
                  <p className="text-gray-600">
                    We believe that technology should adapt to people, not the other way around. Our platform is
                    designed with real users in mind, focusing on simplicity, accessibility, and effectiveness.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                    <span className="text-teal-600 text-2xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Evidence-Based Approach</h3>
                  <p className="text-gray-600">
                    Our features and recommendations are grounded in scientific research and best practices in
                    medication management. We continuously update our platform based on the latest evidence.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                    <span className="text-teal-600 text-2xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Privacy & Security</h3>
                  <p className="text-gray-600">
                    We understand the sensitive nature of health information. Protecting our users' privacy and securing
                    their data is a fundamental priority in everything we build.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                    <span className="text-teal-600 text-2xl font-bold">4</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Continuous Improvement</h3>
                  <p className="text-gray-600">
                    We're committed to constantly improving our platform based on user feedback, technological
                    advancements, and evolving healthcare needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                    <span className="text-teal-600 text-2xl font-bold">5</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Accessibility for All</h3>
                  <p className="text-gray-600">
                    We believe that effective medication management tools should be accessible to everyone, regardless
                    of age, technical ability, or health status.
                  </p>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                    <span className="text-teal-600 text-2xl font-bold">6</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Empowering Independence</h3>
                  <p className="text-gray-600">
                    Our goal is to empower individuals to take control of their health through better medication
                    management, promoting independence and confidence in their healthcare journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The passionate individuals behind MediTrack who are dedicated to improving medication adherence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember
                name="Dr. Sarah Johnson"
                role="Co-Founder & CEO"
                bio="Dr. Johnson is a board-certified physician with over 15 years of experience in internal medicine. Her passion for improving patient outcomes through better medication management led her to co-found MediTrack."
                image="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Michael Chen"
                role="Co-Founder & CTO"
                bio="Michael brings 20 years of experience in healthcare technology. Before MediTrack, he led development teams at several health tech startups and major healthcare companies."
                image="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Emily Rodriguez"
                role="Chief Product Officer"
                bio="Emily has a background in UX design and healthcare informatics. She leads our product team in creating intuitive, effective solutions for medication management."
                image="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Dr. James Wilson"
                role="Chief Medical Officer"
                bio="Dr. Wilson is a clinical pharmacist with expertise in medication therapy management. He ensures that MediTrack's features align with best practices in medication management."
                image="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="Sophia Patel"
                role="Head of Customer Success"
                bio="Sophia leads our customer success team, ensuring that users get the most out of MediTrack. She has a background in healthcare administration and patient advocacy."
                image="/placeholder.svg?height=300&width=300"
              />
              <TeamMember
                name="David Thompson"
                role="Head of Engineering"
                bio="David oversees our engineering team, bringing 15 years of experience in building secure, scalable healthcare applications. He's passionate about using technology to solve healthcare challenges."
                image="/placeholder.svg?height=300&width=300"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-gray-50 py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Have questions about MediTrack? We'd love to hear from you. Reach out to our team using any of the
                  contact methods below.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <p className="text-gray-600">info@meditrack.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <p className="text-gray-600">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        123 Health Avenue
                        <br />
                        Suite 456
                        <br />
                        San Francisco, CA 94103
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className="font-medium text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="#"
                      className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 hover:bg-teal-100 hover:text-teal-600 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      required
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal-600 py-20 px-4 md:px-6 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Join Us in Improving Medication Adherence</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Whether you're a patient, caregiver, or healthcare provider, MediTrack can help you better manage
              medications and improve health outcomes.
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

function TeamMember({
  name,
  role,
  bio,
  image,
}: {
  name: string
  role: string
  bio: string
  image: string
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow text-center">
      <Avatar className="h-32 w-32 mx-auto mb-6">
        <AvatarImage src={image || "/placeholder.svg"} alt={name} />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <h3 className="text-xl font-semibold mb-1 text-gray-900">{name}</h3>
      <p className="text-teal-600 font-medium mb-4">{role}</p>
      <p className="text-gray-600">{bio}</p>
      <div className="flex justify-center space-x-3 mt-4">
        <Link href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
          <Twitter className="h-5 w-5" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link href="#" className="text-gray-400 hover:text-teal-600 transition-colors">
          <Mail className="h-5 w-5" />
          <span className="sr-only">Email</span>
        </Link>
      </div>
    </div>
  )
}
