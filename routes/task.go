package routes

import (
	"ai-task-manager/controllers"
	"github.com/gin-gonic/gin"
)

// RegisterTaskRoutes registers all the routes related to tasks
func RegisterTaskRoutes(r *gin.Engine) {
	// Handle the root path
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{"message": "Welcome to the Task API"})
	})

	// Task routes
	r.GET("/tasks", controllers.GetTasks)         // Get all tasks
	r.POST("/tasks", controllers.CreateTask)      // Create a new task
	r.GET("/tasks/:id", controllers.GetTaskByID)  // Get a task by ID
	r.PUT("/tasks/:id", controllers.UpdateTask)   // Update a task
	r.DELETE("/tasks/:id", controllers.DeleteTask) // Delete a task
}
