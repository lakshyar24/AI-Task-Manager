"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard() {
  const { setTheme, theme } = useTheme()
  const [showAIChat, setShowAIChat] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    // Fetch tasks from the backend API
    const fetchTasks = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tasks`)
        const data = await response.json()
        setTasks(data)
      } catch (error) {
        console.error("Error fetching tasks:", error)
      }
    }
    
    fetchTasks()
  }, [])

  return (
    <div>
      {/* Example rendering tasks */}
      <div>
        {tasks.map((task: any) => (
          <Card key={task.id}>
            <CardHeader>
              <CardTitle>{task.name}</CardTitle>
              <CardDescription>{task.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
