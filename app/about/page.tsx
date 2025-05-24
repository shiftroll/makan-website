import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How Makan Started</h1>
          <div className="w-24 h-1 bg-[#1C4B71] mx-auto"></div>
        </div>

        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                We are currently graduate students at Columbia University, and all started studying at Columbia
                University in 2022. We are all international students, so we have a financial projection for a tech
                startup that saves it. That simple prompt sparked a bigger question in our minds.
              </p>

              <blockquote className="text-xl font-medium text-center text-gray-800 my-8 p-6 bg-blue-50 border-l-4 border-[#1C4B71]">
                "How can we leverage AI to solve everyday problems?"
              </blockquote>

              <p className="text-gray-700 leading-relaxed mb-6">
                We began listing all the daily challenges we encountered, and one thing we both struggled with was
                finding a great place to eat. There are a few common ways people try to solve this:
              </p>

              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">
                  Scrolling through food review videos on social media, which are often paid promotions and lack
                  authenticity.
                </li>
                <li className="mb-2">
                  Getting overwhelmed by the sheer volume of content and ending up not going anywhere.
                </li>
                <li className="mb-2">Asking friends for recommendations, but not wanting to bother them too often.</li>
              </ul>

              <p className="text-gray-700 leading-relaxed mb-6">
                This got us thinking – why not build a social platform focused on restaurant discovery where people can
                share authentic experiences and get personalized recommendations?
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                That's why we created Makan – an AI-powered social media platform that helps you decide where to eat
                next. We believe dining out should be a personalized and enjoyable experience for everyone.
              </p>

              <p className="text-gray-700 leading-relaxed">
                But Makan isn't just another food startup. We're on a mission to become the first Indonesian-born social
                media company that is widely used and truly impactful.
              </p>

              <div className="text-center mt-8">
                <span className="text-[#1C4B71] font-semibold text-lg">#MakanIndonesia</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#1C4B71] mb-2">2022</div>
              <p className="text-gray-600">Founded at Columbia University</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#1C4B71] mb-2">AI-Powered</div>
              <p className="text-gray-600">Smart recommendations</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-[#1C4B71] mb-2">Social</div>
              <p className="text-gray-600">Community-driven reviews</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
