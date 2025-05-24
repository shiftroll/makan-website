import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Linkedin, Twitter, Mail } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate individuals behind Makan who are working to revolutionize how people discover great food
          </p>
          <div className="w-24 h-1 bg-[#1C4B71] mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamMember
            name="Frederick Arthur"
            role="Founder & CEO"
            image="/placeholder.svg?height=300&width=300"
            description="Currently studying Technology Management at Columbia University. Passionate about leveraging technology to solve real-world problems and create meaningful user experiences."
            skills={["Business Strategy", "Market Analysis", "Product Management"]}
            social={{
              linkedin: "#",
              twitter: "#",
              email: "frederick@makan.com",
            }}
          />
    
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h3>
              <p className="text-gray-700 mb-6">
                We're always looking for talented individuals who share our passion for food, technology, and creating
                amazing user experiences.
              </p>
              <button className="bg-[#1C4B71] hover:bg-[#164063] text-white px-6 py-3 rounded-lg font-medium transition-colors">
                View Open Positions
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function TeamMember({
  name,
  role,
  image,
  description,
  skills,
  social,
}: {
  name: string
  role: string
  image: string
  description: string
  skills: string[]
  social: {
    linkedin: string
    twitter: string
    email: string
  }
}) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={120}
            height={120}
            className="w-30 h-30 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-[#1C4B71] font-medium">{role}</p>
        </div>

        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-3">
          <a href={social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href={social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
            <Twitter className="h-5 w-5" />
          </a>
          <a href={`mailto:${social.email}`} className="text-gray-400 hover:text-[#1C4B71] transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
