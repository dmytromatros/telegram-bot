let tg = window.Telegram.WebApp;

tg.MainButton.isVisible = true;
tg.MainButton.onClick(() => {
    console.log("Hello Main button!")
});

tg.MainButton.setText('Do something');
tg.BackButton.isVisible = true;
tg.onEvent('mainButtonClicked', () => {
    console.log('Hello Main button by tg!')
})

document.querySelectorAll('.button').forEach(e => {
    e.addEventListener('click', () => {
        console.log("just a button clicked!")
    })
})