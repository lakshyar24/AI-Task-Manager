package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gorilla/mux"
)

func main() {
	// Initialize the router
	router := mux.NewRouter()

	// Serve API routes
	apiRouter := router.PathPrefix("/api").Subrouter()
	apiRouter.HandleFunc("/tasks", getTasks).Methods("GET") // Example API endpoint

	// Serve frontend from "frontend/out" (Next.js build)
	frontendPath := "../frontend/out"

	// Check if frontend build exists
	if _, err := os.Stat(frontendPath); os.IsNotExist(err) {
		log.Fatal("Frontend build not found. Run 'npm run build' in frontend folder.")
	}

	// Serve static files
	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir(frontendPath))))

	// Start the server
	port := "5000"
	fmt.Println("Server running on http://localhost:" + port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}

// Dummy API Handler
func getTasks(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"tasks": ["Task 1", "Task 2"]}`))
}
package main

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"path/filepath"

	"github.com/gorilla/mux"
)

func main() {
	// Initialize the router
	router := mux.NewRouter()

	// Serve API routes
	apiRouter := router.PathPrefix("/api").Subrouter()
	apiRouter.HandleFunc("/tasks", getTasks).Methods("GET") // Example API endpoint

	// Serve frontend from "frontend/out" (Next.js build)
	frontendPath := "../frontend/out"

	// Check if frontend build exists
	if _, err := os.Stat(frontendPath); os.IsNotExist(err) {
		log.Fatal("Frontend build not found. Run 'npm run build' in frontend folder.")
	}

	// Serve static files
	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir(frontendPath))))

	// Start the server
	port := "5000"
	fmt.Println("Server running on http://localhost:" + port)
	log.Fatal(http.ListenAndServe(":"+port, router))
}

// Dummy API Handler
func getTasks(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"tasks": ["Task 1", "Task 2"]}`))
}
