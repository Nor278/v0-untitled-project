import Image from "next/image"

export default function TrustedBySection() {
  // Array of partner companies with their names and logo paths
  const partners = [
    { name: "Walgreens", logo: "/logos/walgreens-logo.png" },
    { name: "CVS", logo: "/logos/cvs-logo.png" },
    { name: "Amazon Pharmacy", logo: "/logos/amazon-pharmacy-logo.png" },
    { name: "Cost Plus Drugs", logo: "/logos/cost-plus-drugs-logo.png" },
    { name: "United Health Group", logo: "/logos/united-health-logo.png" },
    { name: "Elevance Health", logo: "/logos/elevance-health-logo.png" },
    { name: "Humana", logo: "/logos/humana-logo.png" },
    { name: "Aetna", logo: "/logos/aetna-logo.png" },
    { name: "Blue Cross Blue Shield", logo: "/logos/bcbs-logo.png" },
  ]

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Trusted By</h2>
          <p className="text-gray-600">Leading healthcare providers and pharmacies rely on MediTrack</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-center h-24 transition-all duration-300 hover:shadow-md"
            >
              <div className="relative w-full h-full">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={`${partner.name} logo`}
                  fill
                  sizes="(max-width: 768px) 40vw, (max-width: 1200px) 30vw, 20vw"
                  className="object-contain p-2 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
