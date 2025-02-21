package models

import "gorm.io/gorm"

// Task struct defines the task model for GORM
type Task struct {
	gorm.Model
	Title       string `json:"title"`
	Description string `json:"description"`
}
