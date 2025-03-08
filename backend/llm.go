package main

import (
	"encoding/json"
	"fmt"
	"net/http"

	"google.golang.org/genai"
)

type LLMHandler struct{}

type GeneratePayload struct {
	Prompt string `json:"prompt"`
}

func (l LLMHandler) GenerateImage(w http.ResponseWriter, r *http.Request) {
	var payload GeneratePayload
	err := json.NewDecoder(r.Body).Decode(&payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	ctx := r.Context()

	client, err := genai.NewClient(ctx, &genai.ClientConfig{
		APIKey:  GeminiAPIKey.GetValue(),
		Backend: genai.BackendGeminiAPI,
	})

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	// Call the GenerateContent method
	result, err := client.Models.GenerateContent(ctx, "gemini-1.5-flash", genai.Text(payload.Prompt), nil)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	fmt.Print(result.Candidates[0].Content.Parts[0].Text)
}
