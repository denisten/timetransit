package main

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
	"transit-back/config"
	"transit-back/handlers"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Разрешаем источники
		c.Writer.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")

		// Обработка preflight-запросов
		if c.Request.Method == http.MethodOptions {
			c.AbortWithStatus(http.StatusOK)
			return
		}

		c.Next()
	}
}
func main() {
	cfg := config.LoadConfig()
	router := gin.Default()
	router.Use(CORSMiddleware())
	router.POST("/api/feedback", handlers.HandleFeedback(cfg))
	router.GET("/api/health", handlers.HealthCheckHandler())

	log.Println("Listening on port " + cfg.Port)
	err := router.Run(":" + cfg.Port)
	if err != nil {
		log.Println("Failed to start server")
		return
	}
}
