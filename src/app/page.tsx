"use client"
import { useState } from "react"
import type { Item } from "../types/Item"
import { ListItem } from "../components/ListItem"
import { AddArea } from "../components/AddArea"

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      title: "Study React",
      body: "Review concepts of hooks and components",
      userId: 1,
      completed: false,
    },
    {
      id: 2,
      title: "Do exercises",
      body: "Complete JavaScript exercise list",
      userId: 1,
      completed: false,
    },
  ])

  const handleAddItem = (newItem: Item) => {
    setList((prevList) => [...prevList, newItem])
  }

  const handleDeleteItem = (id: number) => {
    setList((prevList) => prevList.filter((item) => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-white text-center mb-8 pb-4 border-b border-gray-700">Task List</h1>

        <AddArea onAddItem={handleAddItem} />

        <div className="space-y-2">
          {list.length > 0 ? (
            list.map((item) => <ListItem key={item.id} item={item} onDeleteItem={handleDeleteItem} />)
          ) : (
            <p className="text-center text-gray-500 py-8">No tasks found. Add a new task above!</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
