"use client"

import { useState, useEffect } from "react"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"

interface Task {
  id: number
  name: string
  status: string
  userId: number
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [editingTask, setEditingTask] = useState<Task | null>(null)

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/tasks")
      if (!response.ok) {
        throw new Error("Failed to fetch tasks")
      }
      const data = await response.json()
      setTasks(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error("Error fetching tasks:", error)
      setTasks([])
    }
  }

  const handleAddTask = async (name: string, status: string, userId: number) => {
    const response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, status, userId }),
    })
    const newTask = await response.json()
    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = async (id: number) => {
    await fetch(`/api/tasks/${id}`, { method: "DELETE" })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleEditTask = (task: Task) => {
    setEditingTask(task)
  }

  const handleUpdateTask = async (name: string, status: string, userId: number) => {
    if (editingTask) {
      const response = await fetch(`/api/tasks/${editingTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, status, userId }),
      })
      const updatedTask = await response.json()
      setTasks(tasks.map((task) => (task.id === editingTask.id ? updatedTask : task)))
      setEditingTask(null)
    }
  }

  return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Gestion des Tâches</h1>
        {editingTask ? (
            <TaskForm onSubmit={handleUpdateTask} initialValues={editingTask} />
        ) : (
            <TaskForm onSubmit={handleAddTask} />
        )}
        <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} />
      </div>
  )
}

