"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { LogOut, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from "next/navigation"
// ... (previous imports remain the same)

export default function Dashboard() {
  const { setTheme, theme } = useTheme()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  // Wait for mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<"overview" | "tasks" | "messages" | "settings">("overview")

  return (
    <div className="min-h-screen bg-background">
      {/* ... (previous JSX remains the same until the theme toggle button) */}

      <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative w-9 h-9">
        <AnimatePresence mode="wait">
          {mounted &&
            (theme === "light" ? (
              <motion.div
                key="sun"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Sun className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Moon className="h-5 w-5" />
              </motion.div>
            ))}
        </AnimatePresence>
      </Button>

      {/* ... (rest of the JSX remains the same until the settings section) */}

      {activeSection === "settings" && (
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Settings</h2>
          {/* ... (previous settings cards remain the same) */}

          <Card>
            <CardHeader>
              <CardTitle>Account Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button variant="destructive" onClick={() => router.push("/login")}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      {/* ... (rest of the component remains the same) */}
    </div>
  )
}

