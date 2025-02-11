import { NextResponse } from "next/server"
import pool from "../../../../lib/db"

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const { name, status, userId } = await request.json()
  try {
    await pool.query("UPDATE tasks SET name = ?, status = ?, user_id = ? WHERE id = ?", [
      name,
      status,
      userId,
      params.id,
    ])
    return NextResponse.json({ id: params.id, name, status, userId })
  } catch (error) {
    return NextResponse.json({ message: "Error updating task" }, { status: 500 })
  }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    await pool.query("DELETE FROM tasks WHERE id = ?", [params.id])
    return NextResponse.json({ message: "Task deleted successfully" })
  } catch (error) {
    return NextResponse.json({ message: "Error deleting task" }, { status: 500 })
  }
}

