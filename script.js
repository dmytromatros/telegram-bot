let tg = window.Telegram.WebApp;

tg.MainButton.isVisible = true;
tg.MainButton.onClick(() => {
    console.log("Hello Main button!")
});

tg.MainButton.setText('Do something');
tg.BackButton.isVisible = true;