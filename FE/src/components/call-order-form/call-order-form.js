import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import InputMask from "react-input-mask";

const dataInitState = {
  country: "",
  name: "",
  phone: "",
  comment: "",
  email: "",
};

const isLocal = window.location.host === "localhost:3000";

export const CallOrderForm = () => {
  const [formData, setFormData] = React.useState(dataInitState);
  const [isSubmitting, setIsSubmitting] = React.useState(false); // Для отслеживания состояния отправки

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Устанавливаем состояние отправки
    const domain = isLocal ? "http://localhost:8080" : "";
    console.log({ isLocal, domain });
    try {
      const response = await fetch(`${domain}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Response from server:", result);
        alert("Заявка успешно отправлена!");
        setFormData(dataInitState); // Сбрасываем форму
      } else {
        console.error("Error:", response.statusText);
        alert("Ошибка при отправке заявки. Попробуйте снова.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      alert("Ошибка сети. Проверьте подключение.");
    } finally {
      setIsSubmitting(false); // Сбрасываем состояние отправки
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          // width: { xs: "90%", xl: "40%", md: "30%" }, // Адаптивная ширина: 90% для моб., 50% для десктопа
          backgroundColor: "#fff", // Белый фон формы
          margin: "0 auto",
          padding: 4,
          borderRadius: 2,
          animation: "fadeIn 0.5s ease-in-out", // Плавное появление
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#a62226", // Цвет бренда
          }}
        >
          Ваш запрос
        </Typography>

        {/* Страна отправки */}
        <TextField
          label="Маршрут"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        {/* Имя клиента */}
        <TextField
          label="Имя клиента"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        {/* Номер телефона */}
        <InputMask
          mask="+7 (999) 999-99-99"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        >
          {(inputProps) => (
            <TextField
              {...inputProps}
              label="Номер телефона"
              name="phone"
              required
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          )}
        </InputMask>

        {/* Email */}
        <TextField
          label="Email"
          name="email"
          type="email" // Добавляем проверку на корректность email
          value={formData.email}
          onChange={handleChange}
          required
          fullWidth
          sx={{ marginBottom: 2 }}
        />

        {/* Комментарий */}
        <TextField
          label="Описание груза"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
          sx={{ marginBottom: 3 }}
        />

        {/* Кнопка отправки */}
        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isSubmitting} // Блокируем кнопку во время отправки
          sx={{
            backgroundColor: "#a62226",
            "&:hover": {
              backgroundColor: "#922021",
            },
            fontWeight: "bold",
          }}
        >
          Отправить запрос
        </Button>
      </Box>
    </Box>
  );
};
