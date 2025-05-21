import { NextRequest, NextResponse } from 'next/server'

// This is a mock endpoint. Replace with real WebSocket or Supabase Realtime logic as needed.
export async function GET(req: NextRequest) {
  // For demo: Respond with mock user presence data
  return NextResponse.json({
    users: [
      { id: '1', name: 'Alice', active: true },
      { id: '2', name: 'Bob', active: true }
    ],
    message: "Real-time presence (mocked)."
  })
}
