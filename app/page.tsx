import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-b from-white to-gray-50 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your Supportive Productivity Coach
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet Accai, an AI-powered coach that combines emotional support with productivity guidance, 
            perfect for remote workers and neurodivergent individuals.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Accai?</h2>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          </div>
        </div>
      </section>
    </main>
  )
} 