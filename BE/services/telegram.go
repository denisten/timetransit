package services

import (
	tgbotapi "github.com/go-telegram-bot-api/telegram-bot-api/v5"
	"log"
)

type TelegramService struct {
	Bot    *tgbotapi.BotAPI
	ChatID int64
}

func InitTelegramService(token string, chatID int64) (*TelegramService, error) {
	bot, err := tgbotapi.NewBotAPI(token)
	if err != nil {
		return nil, err
	}

	return &TelegramService{Bot: bot, ChatID: chatID}, nil
}

func (service *TelegramService) SendMessage(message string) error {
	msg := tgbotapi.NewMessage(service.ChatID, message)
	_, err := service.Bot.Send(msg)
	if err != nil {
		log.Println("Failed to send message", err)
	}

	return err
}
