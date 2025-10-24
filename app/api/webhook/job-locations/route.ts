// Webhook integration for HouseCall Pro and FSM software
// API route to receive job completion data

import { NextRequest, NextResponse } from 'next/server'

// Job completion webhook payload interface
interface WebhookPayload {
  event_type: 'job_completed' | 'job_created' | 'job_updated'
  job_id: string
  customer_address: {
    street: string
    city: string
    state: string
    zip: string
    latitude?: number
    longitude?: number
  }
  service_type: string
  completion_date: string
  technician: string
  customer_satisfaction?: number
  invoice_amount?: number
  service_category: 'ac-repair' | 'heating-repair' | 'installation' | 'maintenance' | 'commercial' | 'emergency'
}

// Privacy protection: Convert exact coordinates to general area coordinates
const protectLocationPrivacy = (lat: number, lng: number): { lat: number, lng: number } => {
  // Round coordinates to protect privacy (approximately 0.01 degree = ~1km accuracy)
  const privacyRadius = 0.01
  return {
    lat: Math.round(lat / privacyRadius) * privacyRadius,
    lng: Math.round(lng / privacyRadius) * privacyRadius
  }
}

// Determine neighborhood from coordinates
const getNeighborhood = (lat: number, lng: number): string => {
  // Lake Charles area boundaries (approximate)
  if (lat >= 30.20 && lat <= 30.25 && lng >= -93.25 && lng <= -93.20) {
    return 'Downtown Lake Charles'
  }
  if (lat >= 30.20 && lat <= 30.23 && lng >= -93.30 && lng <= -93.27) {
    return 'Prien Lake'
  }
  if (lat >= 30.28 && lat <= 30.31 && lng >= -93.20 && lng <= -93.17) {
    return 'Moss Bluff'
  }
  if (lat >= 30.23 && lat <= 30.26 && lng >= -93.39 && lng <= -93.35) {
    return 'Sulphur'
  }
  if (lat >= 30.24 && lat <= 30.26 && lng >= -93.27 && lng <= -93.24) {
    return 'Westlake'
  }
  if (lat >= 30.44 && lat <= 30.46 && lng >= -93.45 && lng <= -93.42) {
    return 'DeQuincy'
  }
  if (lat >= 30.18 && lat <= 30.20 && lng >= -93.60 && lng <= -93.56) {
    return 'Vinton'
  }
  if (lat >= 29.79 && lat <= 29.81 && lng >= -93.34 && lng <= -93.31) {
    return 'Cameron'
  }
  if (lat >= 30.18 && lat <= 30.20 && lng >= -93.32 && lng <= -93.29) {
    return 'Carlyss'
  }
  if (lat >= 30.23 && lat <= 30.25 && lng >= -93.02 && lng <= -92.99) {
    return 'Iowa'
  }
  
  return 'Southwest Louisiana' // Fallback
}

// Validate webhook signature (implement your security method)
const validateWebhook = (payload: string, signature: string): boolean => {
  // Implement HMAC signature validation here
  // This should match your FSM software's webhook security
  return true // Placeholder - implement actual validation
}

export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get('x-webhook-signature') || ''
    const payload = await request.text()
    
    // Validate webhook authenticity
    if (!validateWebhook(payload, signature)) {
      return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 })
    }
    
    const data: WebhookPayload = JSON.parse(payload)
    
    // Only process completed jobs
    if (data.event_type !== 'job_completed') {
      return NextResponse.json({ message: 'Event ignored' }, { status: 200 })
    }
    
    // Extract coordinates (from geocoding or provided)
    let { latitude, longitude } = data.customer_address
    
    // If coordinates not provided, you could geocode the address
    if (!latitude || !longitude) {
      // Implement geocoding API call here if needed
      console.log('Coordinates not provided for job:', data.job_id)
      return NextResponse.json({ message: 'Coordinates required' }, { status: 400 })
    }
    
    // Protect customer privacy
    const protectedLocation = protectLocationPrivacy(latitude, longitude)
    const neighborhood = getNeighborhood(latitude, longitude)
    
    // Create job location record
    const jobLocation = {
      id: data.job_id,
      lat: protectedLocation.lat,
      lng: protectedLocation.lng,
      service: data.service_type,
      date: data.completion_date,
      serviceType: data.service_category,
      neighborhood: neighborhood,
      satisfaction: data.customer_satisfaction,
      technician: data.technician,
      invoiceAmount: data.invoice_amount
    }
    
    // Store in your database (implement your storage solution)
    await storeJobLocation(jobLocation)
    
    // Optional: Trigger map refresh for real-time updates
    // You could use websockets or server-sent events here
    
    console.log('Job location stored:', jobLocation)
    
    return NextResponse.json({ 
      message: 'Job location processed successfully',
      jobId: data.job_id,
      neighborhood: neighborhood
    }, { status: 200 })
    
  } catch (error) {
    console.error('Webhook processing error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Database storage function (implement based on your database)
async function storeJobLocation(jobLocation: any) {
  // Example implementations:
  
  // 1. Store in local JSON file (for development)
  // const fs = require('fs')
  // const existingData = JSON.parse(fs.readFileSync('job-locations.json', 'utf8') || '[]')
  // existingData.push(jobLocation)
  // fs.writeFileSync('job-locations.json', JSON.stringify(existingData, null, 2))
  
  // 2. Store in database (MongoDB example)
  // const { MongoClient } = require('mongodb')
  // const client = new MongoClient(process.env.MONGODB_URL)
  // await client.connect()
  // await client.db('coleair').collection('job_locations').insertOne(jobLocation)
  // await client.close()
  
  // 3. Store in Supabase
  // const { createClient } = require('@supabase/supabase-js')
  // const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
  // await supabase.from('job_locations').insert(jobLocation)
  
  // 4. Store in Firebase
  // const admin = require('firebase-admin')
  // await admin.firestore().collection('job_locations').add(jobLocation)
  
  console.log('Job location would be stored:', jobLocation)
}

// GET endpoint to retrieve job locations for map display
export async function GET(request: NextRequest) {
  try {
    const url = new URL(request.url)
    const serviceType = url.searchParams.get('service_type')
    const days = parseInt(url.searchParams.get('days') || '30')
    
    // Retrieve job locations from your database
    const jobLocations = await getJobLocations(serviceType, days)
    
    return NextResponse.json({
      success: true,
      count: jobLocations.length,
      data: jobLocations
    })
    
  } catch (error) {
    console.error('Error retrieving job locations:', error)
    return NextResponse.json({ error: 'Failed to retrieve job locations' }, { status: 500 })
  }
}

// Retrieve job locations from database
async function getJobLocations(serviceType?: string | null, days: number = 30) {
  // Implement your database query here
  // This should return privacy-protected job locations
  
  // Filter by date range
  const cutoffDate = new Date()
  cutoffDate.setDate(cutoffDate.getDate() - days)
  
  // Example return (replace with actual database query)
  return [
    // Your job locations filtered by criteria
  ]
}