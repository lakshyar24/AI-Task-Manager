package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func main() {
	router := mux.NewRouter()

	// API Routes
	apiRouter := router.PathPrefix("/api").Subrouter()
	apiRouter.HandleFunc("/tasks", getTasks).Methods("GET") // Example API

	// Serve Frontend
	frontendPath := "../frontend/out" // Ensure this is correct

	// Check if the frontend build exists
	if _, err := os.Stat(frontendPath); os.IsNotExist(err) {
		log.Fatal("Frontend build not found. Run 'npm run build' in frontend folder.")
	}

	// Serve static frontend files
	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir(frontendPath))))

	// Start the server
	port := "8080"
	fmt.Println("Server running on http://localhost:" + port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}

func getTasks(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"tasks": ["Task 1", "Task 2"]}`))
}
