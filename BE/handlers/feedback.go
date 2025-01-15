package handlers

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"strconv"
	"transit-back/config"
	"transit-back/models"
	"transit-back/services"
)

func HandleFeedback(cfg config.Config) gin.HandlerFunc {
	return func(c *gin.Context) {
		var feedback models.Feedback
		if err := c.ShouldBindJSON(&feedback); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		message := "Новое сообщение:\n" +
			"Откуда: " + feedback.Country + "\n" +
			"Имя: " + feedback.Name + "\n" +
			"Телефон: " + feedback.Phone + "\n" +
			"Комментарии: " + feedback.Comment + "\n"
		chatID, _ := strconv.ParseInt(cfg.TelegramChatID, 10, 64)
		log.Println("its chatID:", chatID)
		telegramService, err := services.InitTelegramService(cfg.TelegramBotToken, chatID)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to init telegram service"})
			return
		}

		if err := telegramService.SendMessage(message); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to send message"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"status": "Message sent successfully"})
	}
}
