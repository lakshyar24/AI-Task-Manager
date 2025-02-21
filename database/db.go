package database

import (
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var Db *gorm.DB

// ConnectDatabase initializes the database connection using GORM
func ConnectDatabase() {
	// Connection string for PostgreSQL
	connStr := "host=localhost user=postgres password=yourpassword dbname=yourdb sslmode=disable client_encoding=UTF8"

	// Open a connection to the database using GORM
	var err error
	Db, err = gorm.Open(postgres.Open(connStr), &gorm.Config{})
	if err != nil {
		log.Fatalf("❌ Failed to connect to the database: %v\n", err)
	}

	log.Println("✅ Connected to the database successfully!")
}
