let tg = window.Telegram.WebApp;

document.addEventListener('DOMContentLoaded', function() {
    tg.expand();
    tg.enableClosingConfirmation();

    document.documentElement.style.setProperty('--tg-theme-bg-color', tg.backgroundColor);
    document.documentElement.style.setProperty('--tg-theme-text-color', tg.textColor);
    document.documentElement.style.setProperty('--tg-theme-button-color', tg.buttonColor);
    document.documentElement.style.setProperty('--tg-theme-button-text-color', tg.buttonTextColor);
});

document.getElementById('createEvent').addEventListener('click', function() {
    const eventData = {
        name: document.getElementById('eventName').value,
        description: document.getElementById('eventDescription').value
    };

    if (!eventData.name) {
        tg.showPopup({
            title: 'Ошибка',
            message: 'Введите название мероприятия',
            buttons: [{type: 'ok'}]
        });
        return;
    }

    tg.sendData(JSON.stringify(eventData));
    tg.close();
});
