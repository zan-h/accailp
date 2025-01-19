export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Onboard Your Goals & Habits",
      description: "Pick the framework that works for you (SMART, ACT, etc.). Enter your daily/weekly habits and long-term commitments in structured fields",
      icon: "👐",
      gradient: "from-blue-400/20 to-blue-500/20"
    },
    {
      number: "2", 
      title: "Chat with Your Personal AI Coach",
      description: "Accai checks in on your progress, offers motivational nudges, and helps break tasks into achievable steps",
      icon: "🧘",
      gradient: "from-green-400/20 to-green-500/20"
    },
    {
      number: "3",
      title: "Track Progress & Get Weekly Summaries",
      description: "Receive a concise summary each week—what you’ve achieved, where you got stuck, and how to adjust moving forward",
      icon: "❤️",
      gradient: "from-red-400/20 to-red-500/20"
    },
    {
      number: "4",
      title: "The Emotional Edge ",
      description: "Accai offers guided interventions to help you unblock emotional resitance and help you get back on track",
      icon: "🌅",
      gradient: "from-yellow-400/20 to-yellow-500/20"
    }
  ]

  return (
    <section className="py-20">
      <h2 className="text-[40px] font-semibold mb-16 text-white text-center">
        How It Works
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-3xl bg-white/5 p-8 transition-all hover:bg-white/10"
          >
            {/* Gradient Background */}
            <div 
              className={`absolute inset-0 opacity-50 bg-gradient-to-br ${step.gradient}`}
              style={{ filter: 'blur(7px)' }}
            />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{step.icon}</span>
                <span className="text-2xl font-semibold text-white">
                  {step.number}. {step.title}
                </span>
              </div>
              <p className="text-gray-300 text-lg">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 