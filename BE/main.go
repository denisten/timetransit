package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"transit-back/config"
	"transit-back/handlers"
)

func main() {
	cfg := config.LoadConfig()
	router := gin.Default()
	router.POST("/api/feedback", handlers.HandleFeedback(cfg))

	log.Println("Listening on port " + cfg.Port)
	err := router.Run(":" + cfg.Port)
	if err != nil {
		log.Println("Failed to start server")
		return
	}
}
