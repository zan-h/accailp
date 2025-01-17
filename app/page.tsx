import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import EmailCaptureForm from "@/components/email-capture-form"
import FeatureGrid from "@/components/feature-grid"

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="/landingpage.mp4" type="video/mp4" />
        </video>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Navigation */}
      <nav className="relative w-full py-4 px-6 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="text-xl font-semibold text-white">Accai</div>
            <Button variant="ghost" className="text-white hover:bg-white/10">Contact Us</Button>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">Sign in</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Try Now</Button>
          </div>
        </div>
      </nav>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10">
        {/* Hero Section */}
        <section className="py-20">
          <h1 className="text-[56px] font-semibold leading-tight mb-4 text-white">
            Voice AI for <span className="text-blue-400">Emotional Work</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Accai guides you through emotional blocks and into flow.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">Talk to Accai</Button>
          <p className="mt-4 text-gray-300">Your first 60 minutes are free</p>
        </section>

        {/* Main Section */}
        <section className="py-20">
          <h2 className="text-[40px] font-semibold mb-4 text-white">
            The Right Question Can Change Everything
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl">
            Accai helps you resolve challenging feelings and understand yourself better. 
            It draws inspiration from Somatic Coaching, Internal Family Systems, 
            Attachment Theory, Focusing, and more.
          </p>
        </section>

        {/* Features */}
        <FeatureGrid />

        {/* Email Capture */}
        <section className="py-20">
          <h2 className="text-2xl font-semibold mb-8 text-white">Join Our Waitlist</h2>
          <EmailCaptureForm />
        </section>
      </div>
    </div>
  )
} 