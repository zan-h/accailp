import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    // Log the start of the request
    console.log('Starting subscription request...')

    const { email } = await req.json()
    console.log('Received email:', email)

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Log Supabase connection attempt
    console.log('Attempting Supabase connection...')
    
    // Test Supabase connection
    const { data: testData, error: testError } = await supabase
      .from('waitlist')
      .select('count')
      .limit(1)

    if (testError) {
      console.error('Supabase connection test failed:', testError)
      throw new Error('Database connection failed')
    }

    console.log('Supabase connection successful')

    // Attempt to insert the email
    const { error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email,
          signed_up_at: new Date().toISOString()
        }
      ])

    if (error) {
      console.error('Insert error:', error)
      
      if (error.code === '23505') {
        return NextResponse.json(
          { error: "You're already on the waitlist!" },
          { status: 400 }
        )
      }
      throw error
    }

    console.log('Successfully added email:', email)
    
    return NextResponse.json(
      { message: 'Successfully joined the waitlist!' },
      { status: 200 }
    )
  } catch (error) {
    // Log the full error
    console.error('Full error details:', error)
    
    return NextResponse.json(
      { 
        error: 'Failed to join waitlist. Please try again.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
} 