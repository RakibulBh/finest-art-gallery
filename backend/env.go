package main

import (
	"os"

	"github.com/joho/godotenv"
)

type EnvKey string

const (
	Env          EnvKey = "ENV"
	GeminiAPIKey EnvKey = "GEMINI_API_KEY"
)

func (key EnvKey) GetValue() string {
	return os.Getenv(string(key))
}

// Load env variables from a .env
func Load() error {
	return godotenv.Load(".env")
}
