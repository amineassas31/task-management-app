import type React from "react"

interface Task {
  id: number
  name: string
  status: string
  userId: number
}

interface TaskListProps {
  tasks: Task[]
  onDelete: (id: number) => void
  onEdit: (task: Task) => void
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete, onEdit }) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li key={task.id} className="p-4 bg-white rounded shadow">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-bold">{task.name}</h3>
              <p className="text-sm text-gray-500">Statut: {task.status}</p>
              <p className="text-sm text-gray-500">Utilisateur ID: {task.userId}</p>
            </div>
            <div>
              <button
                onClick={() => onEdit(task)}
                className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
              >
                Modifier
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
              >
                Supprimer
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TaskList

