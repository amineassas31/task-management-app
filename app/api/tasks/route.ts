import { NextResponse } from "next/server"
import pool from "../../../lib/db"

export async function GET() {
  try {
    const [rows] = await pool.query("SELECT * FROM tasks")
    return NextResponse.json(rows)
  } catch (error) {
    return NextResponse.json({ message: "Error fetching tasks" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  const { name, status, userId } = await request.json()
  try {
    const [result] = await pool.query("INSERT INTO tasks (name, status, user_id) VALUES (?, ?, ?)", [
      name,
      status,
      userId,
    ])
    return NextResponse.json({ id: result.insertId, name, status, userId }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: "Error creating task" }, { status: 500 })
  }
}

