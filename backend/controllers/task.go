package controllers

import (
	"ai-task-manager/database"
	"ai-task-manager/models"
	"github.com/gin-gonic/gin"
	"net/http"
	"log"
)

// CreateTask creates a new task in the database
func CreateTask(c *gin.Context) {
	var task models.Task

	// Bind the incoming JSON to the task struct
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Use GORM to insert the task into the database
	if err := database.Db.Create(&task).Error; err != nil {
		// Log the error for debugging
		log.Printf("Error creating task: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create task"})
		return
	}

	// Return the created task as a response
	c.JSON(http.StatusOK, gin.H{"task": task})
}

// GetTasks retrieves all tasks from the database
func GetTasks(c *gin.Context) {
	var tasks []models.Task

	// Use GORM to find all tasks in the database
	if err := database.Db.Find(&tasks).Error; err != nil {
		// Log the error for debugging
		log.Printf("Error retrieving tasks: %v\n", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to retrieve tasks"})
		return
	}

	// Log the retrieved tasks to check if data is fetched correctly
	log.Printf("Retrieved tasks: %+v\n", tasks)

	// Return the list of tasks as a response
	c.JSON(http.StatusOK, gin.H{"tasks": tasks})
}

// GetTaskByID retrieves a task by its ID from the database
func GetTaskByID(c *gin.Context) {
	id := c.Param("id")
	var task models.Task

	// Use GORM to find a task by ID
	if err := database.Db.First(&task, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Task not found"})
		return
	}

	// Return the task as a response
	c.JSON(http.StatusOK, gin.H{"task": task})
}

// UpdateTask updates an existing task in the database
func UpdateTask(c *gin.Context) {
	id := c.Param("id")
	var task models.Task

	// Check if the task exists in the database
	if err := database.Db.First(&task, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Task not found"})
		return
	}

	// Bind the incoming JSON data to the task struct
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Update the task in the database
	if err := database.Db.Save(&task).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update task"})
		return
	}

	// Return the updated task as a response
	c.JSON(http.StatusOK, gin.H{"task": task})
}

// DeleteTask deletes a task by its ID from the database
func DeleteTask(c *gin.Context) {
	id := c.Param("id")
	var task models.Task

	// Check if the task exists
	if err := database.Db.First(&task, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Task not found"})
		return
	}

	// Delete the task from the database
	if err := database.Db.Delete(&task).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to delete task"})
		return
	}

	// Return a success message
	c.JSON(http.StatusOK, gin.H{"message": "Task deleted successfully"})
}
