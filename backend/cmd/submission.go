package main

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/feature/s3/manager"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/sashabaranov/go-openai"
)

type SubmissionHandler struct{}

type GeneratePayload struct {
	Prompt string `json:"prompt"`
}

func (l SubmissionHandler) GenerateAndUploadImage(w http.ResponseWriter, r *http.Request) {
	var payload GeneratePayload
	err := json.NewDecoder(r.Body).Decode(&payload)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	if payload.Prompt == "" || len(payload.Prompt) < 5 {
		http.Error(w, "Prompt cannot be empty or less than 5 characters.", http.StatusBadRequest)
		return
	}

	reader, err := generateImage(payload.Prompt)

	if err != nil {
		return
	}

	uploadToS3(reader)
}

func generateImage(prompt string) (*bytes.Reader, error) {

	c := openai.NewClient(OpenAIApiKey.GetValue())
	ctx := context.Background()

	// Example image as base64
	reqBase64 := openai.ImageRequest{
		Prompt:         prompt,
		Size:           openai.CreateImageSize256x256,
		ResponseFormat: openai.CreateImageResponseFormatB64JSON,
		N:              1,
	}

	respBase64, err := c.CreateImage(ctx, reqBase64)

	if err != nil {
		fmt.Printf("Image creation error: %v\n", err)
	}

	imgBytes, err := base64.StdEncoding.DecodeString(respBase64.Data[0].B64JSON)
	if err != nil {
		fmt.Printf("Base64 decode error: %v\n", err)
	}

	reader := bytes.NewReader(imgBytes)

	return reader, nil
}

func uploadToS3(reader *bytes.Reader) error {
	uploader := manager.NewUploader(s3Client)

	_, err := uploader.Upload(context.TODO(), &s3.PutObjectInput{
		Bucket: aws.String("leonardodagpt"),
		Key:    aws.String("generated_images/generated.png"),
		Body:   reader,
	})

	if err != nil {
		return err
	}

	return nil
}
