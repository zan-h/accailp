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
    <div className="grid gap-8 w-full">
      {features.map((feature, index) => (
        <div key={index} className="p-6 border-b">
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
  )
} 