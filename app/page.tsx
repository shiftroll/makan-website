import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Smartphone, Brain, Compass, Bookmark } from "lucide-react"
import Link from "next/link"
import HeroSection from "@/components/hero-section"
// Remove this import
// import HeroVideo from "@/components/hero-video"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Makan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Social media platform focused on restaurant discovery and review with AI-powered recommendations
            </p>
          </div>

          {/* Feature 1 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-1">
              <div className="relative justify-items-center">
                <Image
                  src="/1.png"
                  alt="Meet Makan Social Platform"
                  width={300}
                  height={450}
                  className="rounded-2xl shadow-lg w-100 h-auto object-contain"
                />
              </div>
            </div>
            <div className="order-2">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Smartphone className="h-8 w-8 text-[#1C4B71]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Meet Makan</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Social media platform focused on restaurant discovery and review. Connect with fellow food enthusiasts,
                share your dining experiences, and discover hidden gems through authentic community-driven content.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#1C4B71] rounded-full mr-3"></div>
                  Share authentic restaurant reviews
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#1C4B71] rounded-full mr-3"></div>
                  Follow food influencers and friends
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-[#1C4B71] rounded-full mr-3"></div>
                  Discover trending restaurants
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 2 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Brain className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Makan AI</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                You can ask for restaurant recommendations by AI. It learns through the trend to give it more
                personalized advice. Our advanced machine learning algorithms understand your taste preferences and
                dining habits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Personalized AI recommendations
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Learn from your preferences
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Smart cuisine matching
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative justify-items-center">
                <Image
                  src="/2.png"
                  alt="Makan AI Recommendations"
                  width={300}
                  height={450}
                  className="rounded-2xl shadow-lg w-100 h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Feature 3 - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-1">
              <div className="relative justify-items-center">
                <Image
                  src="/3.png"
                  alt="Discover Restaurants"
                  width={300}
                  height={450}
                  className="rounded-2xl shadow-lg w-100 h-auto object-contain"
                />
              </div>
            </div>
            <div className="order-2">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <Compass className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Discover</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Find new restaurants and hidden gems. Discover new food experiences through the Makan app. Explore
                different cuisines, price ranges, and dining atmospheres tailored to your mood.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Explore nearby restaurants
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Filter by cuisine and price
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Find hidden local gems
                </li>
              </ul>
            </div>
          </div>

          {/* Feature 4 - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-lg mr-4">
                  <Bookmark className="h-8 w-8 text-purple-500" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Smart Bookmark</h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Keep the list of restaurants that you want to go. Bookmark your favorite places so that you can visit
                other social media platforms here and we will be the one for you. Never lose track of that perfect
                restaurant recommendation again.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Save restaurants for later
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Organize by categories
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  Share lists with friends
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative justify-items-center">
                <Image
                  src="/4.png"
                  alt="Smart Bookmark Feature"
                  width={300}
                  height={450}
                  className="rounded-2xl shadow-lg w-100 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Store Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Download Makan App</h3>
          <div className="flex justify-center">
            <Link href="https://apps.apple.com/us/app/makan-social/id6740775768" target="_blank" rel="noopener noreferrer">
              <Button className="bg-transparent text-white hover:bg-transparent">
                <Image src="/appstore-button.svg" alt="App Store" width={180} height={50} className="mr-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
