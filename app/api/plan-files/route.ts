import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    // Path to your plans folder in public directory
    const plansDirectory = path.join(process.cwd(), 'public', 'plans')
    
    // Check if directory exists
    if (!fs.existsSync(plansDirectory)) {
      return NextResponse.json({ 
        error: 'Plans directory not found',
        files: [] 
      })
    }
    
    // Read all files from the plans directory
    const files = fs.readdirSync(plansDirectory)
    
    // Filter only .gif files and sort them
    const gifFiles = files
      .filter(file => file.toLowerCase().endsWith('.gif'))
      .sort((a, b) => a.localeCompare(b))
    
    console.log(`Found ${gifFiles.length} plan files`)
    
    return NextResponse.json({
      success: true,
      files: gifFiles,
      count: gifFiles.length
    })
    
  } catch (error) {
    console.error('Error reading plans directory:', error)
    return NextResponse.json(
      { 
        error: 'Failed to read plan files',
        details: error instanceof Error ? error.message : String(error),
        files: [] 
      },
      { status: 500 }
    )
  }
}