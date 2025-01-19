export default function FeatureGrid() {
  const features = [
    {
      title: "Make a Decision",
      description: "Allow answers to your deep questions to emerge from attuning to your felt sense.",
      gradient: "from-green-400/20 to-green-500/20",
      icon: "🔄"
    },
    {
      title: "Resolve Stuck Feelings",
      description: "Find freedom through exploring the nature of your beliefs.",
      gradient: "from-orange-400/20 to-orange-500/20",
      icon: "🔓"
    },
    {
      title: "Understand a Trigger",
      description: "Freely express yourself in a judgment-free environment, deepening your self-compassion.",
      gradient: "from-purple-400/20 to-purple-500/20",
      icon: "⚡"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {features.map((feature, index) => (
        <div 
          key={index} 
          className="group relative overflow-hidden rounded-3xl bg-white/5 p-8 transition-all hover:bg-white/10"
        >
          {/* Gradient Background */}
          <div 
            className={`absolute inset-0 opacity-50 bg-gradient-to-br ${feature.gradient}`}
            style={{ filter: 'blur(7px)' }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            <div className="mb-8 text-4xl">{feature.icon}</div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              {feature.description}
            </p>
            <a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 inline-flex items-center group-hover:underline"
            >
              Try it Now 
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
} 