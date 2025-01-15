package models

type Feedback struct {
	Country string `json:"country" binding:"required"`
	Name    string `json:"name" binding:"required"`
	Phone   string `json:"phone" binding:"required"`
	Comment string `json:"comment" binding:"required"`
}
