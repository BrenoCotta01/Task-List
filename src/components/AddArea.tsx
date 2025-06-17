"use client"

import type React from "react"
import { useState, useRef } from "react"
import type { Item } from "../types/Item"

type AddAreaProps = {
  onAddItem: (item: Item) => void
}

export const AddArea = ({ onAddItem }: AddAreaProps) => {
  const [title, setTitle] = useState("")
  const idCounterRef = useRef(1000) // Using ref instead of Date.now() for consistent incremental ID

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim()) {
      const newItem: Item = {
        id: idCounterRef.current++, // Consistent incremental ID
        title: title.trim(),
        body: `Task: ${title.trim()}`,
        userId: 1,
        completed: false,
      }
      onAddItem(newItem)
      setTitle("")
    }
  }

  return (
    <div className="mb-6 p-4 bg-gray-800 rounded-lg">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter a new task..."
          className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:border-blue-500 focus:outline-none"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  )
}
