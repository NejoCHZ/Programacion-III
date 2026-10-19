const monitorWeather = (temperature, notification) => {
    let message = "";

    if (temperature > 30) {
        message = "¡Alerta de calor extremo!";
    } else {
        message = "Clima estable";
    }

    notification(message);
};

monitorWeather(35, alert);

monitorWeather(20, console.log);

monitorWeather(32, (msg) => {
    console.log(msg);
});