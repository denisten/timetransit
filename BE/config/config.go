package config

import (
	"log"
	"os"

	"github.com/joho/godotenv"
)

type Config struct {
	TelegramBotToken string
	TelegramChatID   string
	Port             string
}

func LoadConfig() Config {
	if err := godotenv.Load(); err != nil {
		log.Println("Warning: .env file not found")
	}

	return Config{
		TelegramBotToken: os.Getenv("TELEGRAM_BOT_TOKEN"),
		TelegramChatID:   os.Getenv("TELEGRAM_CHAT_ID"),
		Port:             os.Getenv("PORT"),
	}
}
