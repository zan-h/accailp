import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import EmailCaptureForm from "@/components/email-capture-form"
import FeatureGrid from "@/components/feature-grid"

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* Navigation */}
      <nav className="w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-xl font-semibold">Accai</div>
            <Button variant="ghost">Contact Us</Button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Sign in</Button>
            <Button>Try Now</Button>
          </div>
        </div>
      </nav>

      {/* Content Container */}
      <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Hero Section */}
        <section className="py-20">
          <h1 className="text-[56px] font-semibold leading-tight mb-4">
            Voice AI for <span className="text-blue-500">Emotional Work</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Accai guides you through emotional blocks and into flow.
          </p>
          <Button size="lg">Talk to Accai</Button>
          <p className="mt-4 text-gray-500">Your first 60 minutes are free</p>
        </section>

        {/* Main Section */}
        <section className="py-20">
          <h2 className="text-[40px] font-semibold mb-4">
            The Right Question Can Change Everything
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Accai helps you resolve challenging feelings and understand yourself better. 
            It draws inspiration from Somatic Coaching, Internal Family Systems, 
            Attachment Theory, Focusing, and more.
          </p>
        </section>

        {/* Features */}
        <section className="w-full py-20">
          <div className="grid gap-8">
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold mb-2">ACT-Based Approach</h3>
              <p className="text-gray-600">
                Guided by Acceptance and Commitment Therapy principles for meaningful progress
              </p>
            </div>
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold mb-2">Personalized Support</h3>
              <p className="text-gray-600">
                Adaptive coaching that understands your unique challenges and working style
              </p>
            </div>
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
              <p className="text-gray-600">
                Visual progress tracking and weekly summaries to celebrate your achievements
              </p>
            </div>
            <div className="p-6 border-b">
              <h3 className="text-xl font-semibold mb-2">Flexible Check-ins</h3>
              <p className="text-gray-600">
                Chat whenever you need support or guidance, on your schedule
              </p>
            </div>
          </div>
        </section>

        {/* Email Capture */}
        <section className="py-20">
          <h2 className="text-2xl font-semibold mb-8">Join Our Waitlist</h2>
          <EmailCaptureForm />
        </section>
      </div>
    </div>
  )
} 