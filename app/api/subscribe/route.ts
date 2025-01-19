import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(req: Request) {
  try {
    const { email } = await req.json()
    
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      )
    }

    // Insert email into Supabase
    const { error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email,
          signed_up_at: new Date().toISOString()
        }
      ])

    if (error) {
      // Handle unique constraint violation
      if (error.code === '23505') {
        return NextResponse.json(
          { error: "You're already on the waitlist!" },
          { status: 400 }
        )
      }
      throw error
    }
    
    return NextResponse.json(
      { message: "Subscription successful" },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { error: "Failed to join waitlist. Please try again." },
      { status: 500 }
    )
  }
} 