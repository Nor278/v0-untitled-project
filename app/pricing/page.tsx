import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-teal-50 to-white py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-teal-900 mb-6">
                Simple, Transparent Pricing
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose the plan that's right for you and start improving your medication adherence today.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <Tabs defaultValue="monthly" className="w-full mb-12">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                  <TabsTrigger value="annual">Annual Billing (Save 20%)</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly">
                <div className="grid md:grid-cols-3 gap-8">
                  <PricingCard
                    title="Basic"
                    price="Free"
                    description="Essential features for individuals"
                    features={[
                      { included: true, text: "Up to 5 medications" },
                      { included: true, text: "Basic medication reminders" },
                      { included: true, text: "Medication tracking" },
                      { included: true, text: "Simple adherence reports" },
                      { included: false, text: "Caregiver sharing" },
                      { included: false, text: "Advanced scheduling" },
                      { included: false, text: "Detailed analytics" },
                      { included: false, text: "Priority support" },
                    ]}
                    buttonText="Sign Up Free"
                    buttonLink="/signup"
                    popular={false}
                  />
                  <PricingCard
                    title="Premium"
                    price="$4.99"
                    period="per month"
                    description="Advanced features for better medication management"
                    features={[
                      { included: true, text: "Unlimited medications" },
                      { included: true, text: "Advanced reminders" },
                      { included: true, text: "Comprehensive tracking" },
                      { included: true, text: "Detailed adherence reports" },
                      { included: true, text: "Caregiver sharing (up to 2)" },
                      { included: true, text: "Advanced scheduling options" },
                      { included: true, text: "Basic analytics" },
                      { included: false, text: "Priority support" },
                    ]}
                    buttonText="Get Premium"
                    buttonLink="/signup?plan=premium"
                    popular={true}
                  />
                  <PricingCard
                    title="Family"
                    price="$9.99"
                    period="per month"
                    description="Complete solution for families and caregivers"
                    features={[
                      { included: true, text: "Unlimited medications" },
                      { included: true, text: "Advanced reminders" },
                      { included: true, text: "Comprehensive tracking" },
                      { included: true, text: "Detailed adherence reports" },
                      { included: true, text: "Caregiver sharing (unlimited)" },
                      { included: true, text: "Advanced scheduling options" },
                      { included: true, text: "Advanced analytics & insights" },
                      { included: true, text: "Priority support" },
                    ]}
                    buttonText="Get Family Plan"
                    buttonLink="/signup?plan=family"
                    popular={false}
                  />
                </div>
              </TabsContent>

              <TabsContent value="annual">
                <div className="grid md:grid-cols-3 gap-8">
                  <PricingCard
                    title="Basic"
                    price="Free"
                    description="Essential features for individuals"
                    features={[
                      { included: true, text: "Up to 5 medications" },
                      { included: true, text: "Basic medication reminders" },
                      { included: true, text: "Medication tracking" },
                      { included: true, text: "Simple adherence reports" },
                      { included: false, text: "Caregiver sharing" },
                      { included: false, text: "Advanced scheduling" },
                      { included: false, text: "Detailed analytics" },
                      { included: false, text: "Priority support" },
                    ]}
                    buttonText="Sign Up Free"
                    buttonLink="/signup"
                    popular={false}
                  />
                  <PricingCard
                    title="Premium"
                    price="$47.88"
                    period="per year"
                    description="Advanced features for better medication management"
                    features={[
                      { included: true, text: "Unlimited medications" },
                      { included: true, text: "Advanced reminders" },
                      { included: true, text: "Comprehensive tracking" },
                      { included: true, text: "Detailed adherence reports" },
                      { included: true, text: "Caregiver sharing (up to 2)" },
                      { included: true, text: "Advanced scheduling options" },
                      { included: true, text: "Basic analytics" },
                      { included: false, text: "Priority support" },
                    ]}
                    buttonText="Get Premium"
                    buttonLink="/signup?plan=premium-annual"
                    popular={true}
                    savings="Save $12"
                  />
                  <PricingCard
                    title="Family"
                    price="$95.88"
                    period="per year"
                    description="Complete solution for families and caregivers"
                    features={[
                      { included: true, text: "Unlimited medications" },
                      { included: true, text: "Advanced reminders" },
                      { included: true, text: "Comprehensive tracking" },
                      { included: true, text: "Detailed adherence reports" },
                      { included: true, text: "Caregiver sharing (unlimited)" },
                      { included: true, text: "Advanced scheduling options" },
                      { included: true, text: "Advanced analytics & insights" },
                      { included: true, text: "Priority support" },
                    ]}
                    buttonText="Get Family Plan"
                    buttonLink="/signup?plan=family-annual"
                    popular={false}
                    savings="Save $24"
                  />
                </div>
              </TabsContent>
            </Tabs>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                All plans include a 14-day free trial. No credit card required to try.
              </p>
              <p className="text-gray-600">
                Need a custom plan for your organization?{" "}
                <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-medium">
                  Contact us
                </Link>{" "}
                for enterprise pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="bg-gray-50 py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Feature Comparison</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compare our plans to find the right fit for your medication management needs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-md">
                <thead>
                  <tr className="border-b">
                    <th className="py-4 px-6 text-left">Feature</th>
                    <th className="py-4 px-6 text-center">Basic</th>
                    <th className="py-4 px-6 text-center bg-teal-50">Premium</th>
                    <th className="py-4 px-6 text-center">Family</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Number of medications</td>
                    <td className="py-4 px-6 text-center">Up to 5</td>
                    <td className="py-4 px-6 text-center bg-teal-50">Unlimited</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">User profiles</td>
                    <td className="py-4 px-6 text-center">1</td>
                    <td className="py-4 px-6 text-center bg-teal-50">1</td>
                    <td className="py-4 px-6 text-center">Up to 5</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Reminder types</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center bg-teal-50">Advanced</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Caregiver sharing</td>
                    <td className="py-4 px-6 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-teal-50">Up to 2</td>
                    <td className="py-4 px-6 text-center">Unlimited</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Adherence reports</td>
                    <td className="py-4 px-6 text-center">Basic</td>
                    <td className="py-4 px-6 text-center bg-teal-50">Detailed</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Export reports</td>
                    <td className="py-4 px-6 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-teal-50">
                      <CheckCircle className="h-5 w-5 text-teal-600 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-teal-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-4 px-6 font-medium">Medication interactions</td>
                    <td className="py-4 px-6 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-teal-50">Basic</td>
                    <td className="py-4 px-6 text-center">Advanced</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-medium">Priority support</td>
                    <td className="py-4 px-6 text-center">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center bg-teal-50">
                      <X className="h-5 w-5 text-red-500 mx-auto" />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <CheckCircle className="h-5 w-5 text-teal-600 mx-auto" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Have questions about our pricing? Find answers to common questions below.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I switch between plans?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new features will be
                  available immediately. If you downgrade, the changes will take effect at the end of your current
                  billing cycle.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
                <AccordionContent>
                  Yes, all paid plans include a 14-day free trial. You can try all the features without entering your
                  payment information. We'll send you a reminder before your trial ends.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How does the family plan work?</AccordionTrigger>
                <AccordionContent>
                  The family plan allows you to create up to 5 user profiles, each with their own medication schedules
                  and reminders. It's perfect for managing medications for your entire family or for caregivers managing
                  multiple people's medications.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your subscription at any time. If you cancel, you'll still have access to your
                  paid features until the end of your current billing cycle. After that, your account will revert to the
                  Basic plan.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Do you offer discounts for healthcare providers?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer special pricing for healthcare providers and organizations. Please contact our sales
                  team for more information about our enterprise plans and volume discounts.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  We accept all major credit cards (Visa, Mastercard, American Express, Discover), as well as PayPal.
                  All payments are processed securely through our payment processor.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions?</p>
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal-600 py-20 px-4 md:px-6 text-white">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Take Control of Your Medications?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Start your 14-day free trial today. No credit card required.
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

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  popular,
  savings,
}: {
  title: string
  price: string
  period?: string
  description: string
  features: { included: boolean; text: string }[]
  buttonText: string
  buttonLink: string
  popular: boolean
  savings?: string
}) {
  return (
    <Card
      className={`border ${
        popular ? "border-teal-600 shadow-lg relative" : "border-gray-200"
      } hover:shadow-xl transition-shadow`}
    >
      {popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader className={popular ? "pt-8" : ""}>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-gray-500 ml-2">{period}</span>}
          {savings && (
            <div className="mt-2">
              <span className="inline-block bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {savings}
              </span>
            </div>
          )}
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <CheckCircle className="h-5 w-5 text-teal-600 mr-3 flex-shrink-0 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
              )}
              <span className={feature.included ? "text-gray-700" : "text-gray-500"}>{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className={`w-full ${popular ? "bg-teal-600 hover:bg-teal-700" : "bg-gray-900 hover:bg-gray-800"}`}
        >
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
