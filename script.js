let tg = window.Telegram.WebApp;

tg.MainButton.isVisible = true;
tg.MainButton.onClick(() => {
    console.log(tg.initData)
});

tg.MainButton.setText('Do something');
tg.BackButton.isVisible = true;