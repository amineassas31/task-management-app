"use client"

import type React from "react"
import { useState } from "react"

interface TaskFormProps {
  onSubmit: (name: string, status: string, userId: number) => void
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState("")
  const [status, setStatus] = useState("En cours")
  const [userId, setUserId] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(name, status, userId)
    setName("")
    setStatus("En cours")
    setUserId(1)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nom de la tâche"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2 mb-2 border rounded">
        <option value="En cours">En cours</option>
        <option value="Terminée">Terminée</option>
      </select>
      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
        placeholder="ID de l'utilisateur"
        className="w-full p-2 mb-2 border rounded"
        required
      />
      <button type="submit" className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600">
        Ajouter une tâche
      </button>
    </form>
  )
}

export default TaskForm

