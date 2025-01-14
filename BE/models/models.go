package models

type Feedback struct {
	From  string `json:"from" binding:"required"`
	To    string `json:"to" binding:"required"`
	Phone string `json:"phone" binding:"required"`
}
