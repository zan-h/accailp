import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import EmailCaptureForm from "@/components/email-capture-form"
import FeatureGrid from "@/components/feature-grid"
import Link from "next/link"
import HowItWorks from "@/components/how-it-works"

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
            <Link 
              href="https://medium.com/@accai" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10 flex items-center gap-2"
              >
                Blog
                <svg 
                  width="12" 
                  height="12" 
                  viewBox="0 0 12 12" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10">
        {/* Hero Section */}
        <section className="pt-32 pb-12">
          <h1 className="text-[56px] font-semibold leading-tight mb-4 text-white">
            Accounability AI for <span className="text-blue-400">Peak Performance</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Break through blocks, hit meaningful goals, and celebrate your wins — Accai makes productivity effortless and personal
          </p>
          <div className="max-w-md mx-auto">
            <EmailCaptureForm />
            <p className="mt-4 text-gray-300">Join our waitlist for early access</p>
          </div>
        </section>

        {/* Main Section */}
        <section className="pt-8 pb-20">
          <h2 className="text-[40px] font-semibold mb-4 text-white">
            What have you been putting off? 
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl">
            Accai helps you resolve challenging blocks and feelings to help you understand yourself better.  
            It draws inspiration from frameworks within Acceptance and Commitment Therapy, Somatics, Internal Family Systems, 
            Attachment Theory, and more.
          </p>
        </section>

        {/* Features */}
        <FeatureGrid />

        {/* How It Works */}
        <HowItWorks />

        {/* Email Capture */}
        <section className="py-20">
          <h2 className="text-2xl font-semibold mb-8 text-white">Join Our Waitlist</h2>
          <EmailCaptureForm />
        </section>
      </div>
    </div>
  )
} 