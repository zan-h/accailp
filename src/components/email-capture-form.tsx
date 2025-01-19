"use client"

import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"

export default function EmailCaptureForm() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setIsSuccess(true)
        toast({
          title: "Success!",
          description: "Thanks for joining our waitlist. We'll be in touch soon!",
        })
        setEmail("")
        // Reset success state after 3 seconds
        setTimeout(() => setIsSuccess(false), 3000)
      } else {
        throw new Error(data.error || 'Something went wrong')
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="subscription-container">
      <form onSubmit={handleSubmit} className="form-wrapper">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="email-input"
          disabled={loading}
        />
        <button 
          type="submit" 
          className={`subscribe-btn ${isSuccess ? 'success' : ''}`}
          disabled={loading}
        >
          {loading ? "Joining..." : isSuccess ? "Success! ✨" : "Join Waitlist"}
        </button>
      </form>
    </div>
  )
} 