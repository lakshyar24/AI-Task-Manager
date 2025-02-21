"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"
import { Activity, Brain, CheckCircle, Clock, Layout, Moon, Plus, Sun, User } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function DashboardPage() {
  const { setTheme, theme } = useTheme()
  const [showAIChat, setShowAIChat] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-14 items-center border-b px-4">
          <Brain className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold">TaskAI Manager</span>
        </div>
        <nav className="space-y-1 p-4">
          {[
            { icon: Layout, label: "Dashboard" },
            { icon: CheckCircle, label: "Tasks" },
            { icon: Clock, label: "Timeline" },
            { icon: Activity, label: "Analytics" },
            { icon: User, label: "Profile" },
          ].map((item) => (
            <Button key={item.label} variant="ghost" className="w-full justify-start">
              <item.icon className="mr-2 h-4 w-4" />
              {item.label}
            </Button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background/95 px-6 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setShowAIChat(!showAIChat)}>
              <Brain className="h-5 w-5" />
              <span className="sr-only">Toggle AI Chat</span>
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="container mx-auto p-6">
          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Tasks", value: "128" },
              { label: "In Progress", value: "45" },
              { label: "Completed", value: "67" },
              { label: "AI Suggestions", value: "12" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">{stat.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Tasks Section */}
          <div className="mt-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="all">All Tasks</TabsTrigger>
                  <TabsTrigger value="mine">My Tasks</TabsTrigger>
                  <TabsTrigger value="ai">AI Suggested</TabsTrigger>
                </TabsList>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> New Task
                </Button>
              </div>
              <TabsContent value="all" className="mt-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Implement Authentication",
                      priority: "High",
                      dueDate: "2024-02-25",
                      status: "In Progress",
                    },
                    {
                      title: "Design Dashboard UI",
                      priority: "Medium",
                      dueDate: "2024-02-26",
                      status: "Completed",
                    },
                    {
                      title: "Setup WebSocket Connection",
                      priority: "High",
                      dueDate: "2024-02-27",
                      status: "Todo",
                    },
                  ].map((task, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: index * 0.1 }}
                    >
                      <Card className="group hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg">{task.title}</CardTitle>
                          <CardDescription>Due: {task.dueDate}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center justify-between">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                task.priority === "High"
                                  ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                              }`}
                            >
                              {task.priority}
                            </span>
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                task.status === "Completed"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                  : task.status === "In Progress"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                                    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
                              }`}
                            >
                              {task.status}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>

      {/* AI Chat Widget */}
      {showAIChat && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 w-80 rounded-lg border bg-background shadow-xl"
        >
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <span className="font-semibold">AI Assistant</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setShowAIChat(false)}>
              <span className="sr-only">Close</span>×
            </Button>
          </div>
          <div className="h-80 overflow-y-auto p-4">
            <div className="space-y-4">
              <div className="rounded-lg bg-muted p-3">How can I help you with your tasks today?</div>
            </div>
          </div>
          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input placeholder="Type your message..." />
              <Button>Send</Button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

