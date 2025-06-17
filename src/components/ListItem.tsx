"use client"

import type { Item } from "../types/Item"
import { useState } from "react"
import { Trash2 } from "lucide-react"

type ListItemProps = {
  item: Item
  onDeleteItem: (id: number) => void // NEW PROP
}

export const ListItem = ({ item, onDeleteItem }: ListItemProps) => {
  const [isChecked, setIsChecked] = useState(item.completed || false)

  const handleDelete = () => {
    onDeleteItem(item.id)
  }

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg bg-gray-800 mb-3 shadow-md group hover:bg-gray-750 transition-colors ${isChecked ? "opacity-75" : ""}`}
    >
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
          className="w-5 h-5 mr-3 cursor-pointer accent-blue-500"
        />
        <label className={`text-gray-300 cursor-pointer ${isChecked ? "line-through" : ""}`}>{item.title}</label>
      </div>

      {/* Delete button */}
      <button
        onClick={handleDelete}
        className="ml-4 p-2 text-red-400 hover:text-red-300 hover:bg-red-900/20 rounded-md transition-colors opacity-0 group-hover:opacity-100"
        title="Delete task"
      >
        <Trash2 size={16} />
      </button>
    </div>
  )
}
