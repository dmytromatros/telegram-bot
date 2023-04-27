let tg = window.Telegram.WebApp;

tg.PopupParams.title = 'Opened popup by Dima'

tg.MainButton.isVisible = true;
tg.MainButton.onClick(() => {
    tg.PopupParams.title = "Hello Main button!"
});

tg.MainButton.setText('Do something');
tg.BackButton.isVisible = true;
tg.onEvent('mainButtonClicked', () => {
    tg.PopupParams.title = 'Hello Main button by tg!'
})

document.querySelectorAll('.button').forEach(e => {
    e.addEventListener('click', () => {
        tg.PopupParams.title = "just a button clicked!"
    })
})