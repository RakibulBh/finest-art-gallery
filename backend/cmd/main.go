package main

import (
	"context"
	"fmt"
	"net/http"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

var (
	s3Client *s3.Client
	s3Region string
)

func main() {
	// Load env vars
	Load()

	// Load AWS config
	cfg, err := config.LoadDefaultConfig(context.TODO(), config.WithRegion(s3Region))
	if err != nil {
		panic(fmt.Sprintf("Failed rto load AWS config: %v", err))
	}

	s3Client = s3.NewFromConfig(cfg)

	r := chi.NewRouter()
	r.Use(middleware.Logger)

	// Healthcheck
	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("OK"))
	})

	submissionHandler := SubmissionHandler{}
	r.Post("/generate", submissionHandler.GenerateAndUploadImage)

	// Listen
	http.ListenAndServe(":8080", r)
}
