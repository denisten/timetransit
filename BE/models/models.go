package models

type Feedback struct {
	Country  string `json:"country" form:"country"`
	Name     string `json:"name" form:"name"`
	Phone    string `json:"phone" form:"phone"`
	Comment  string `json:"comment" form:"comment"`
}
