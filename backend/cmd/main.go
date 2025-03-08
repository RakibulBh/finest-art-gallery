package main

import (
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	// Load env vars
	Load()

	r := chi.NewRouter()
	r.Use(middleware.Logger)

	// Healthcheck
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})

	r.Mount("/", LLMRoutes())

	// Listen
	http.ListenAndServe(":8080", r)
}

func LLMRoutes() chi.Router {
	r := chi.NewRouter()
	llmHandler := LLMHandler{}
	r.Post("/generate", llmHandler.GenerateImage)
	return r
}
