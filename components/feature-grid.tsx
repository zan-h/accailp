export default function FeatureGrid() {
  const features = [
    {
      title: "ACT-Based Approach",
      description: "Guided by Acceptance and Commitment Therapy principles for meaningful progress"
    },
    {
      title: "Personalized Support",
      description: "Adaptive coaching that understands your unique challenges and working style"
    },
    {
      title: "Progress Tracking",
      description: "Visual progress tracking and weekly summaries to celebrate your achievements"
    },
    {
      title: "Flexible Check-ins",
      description: "Chat whenever you need support or guidance, on your schedule"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
} 