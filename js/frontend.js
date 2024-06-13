const headerMenuOpenButton = document.querySelector('.mobile_header_burger')
const headerMenuCloseButton = document.querySelector('.navbar_menu_burger')
const contentMenu = document.querySelector('.navbar')
const pagePolotno = document.querySelector('.polotno')
const body = document.body

headerMenuOpenButton.addEventListener('click', () => {
    contentMenu.classList.add('active')
    pagePolotno.classList.add('active')
    body.classList.add('lock')
})
headerMenuCloseButton.addEventListener('click', () => {
    contentMenu.classList.remove('active')
    pagePolotno.classList.remove('active')
    body.classList.remove('lock')
})

//Wallet page progress bars
document.addEventListener('DOMContentLoaded', function() {
    //fullscreen
    const fullScreenButton = document.getElementById('full_screen');
    const defaultScreenButton = document.getElementById('default_screen');

    // Перехід в режим fullscreen
    fullScreenButton.addEventListener('click', function() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) { // Firefox
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
            document.documentElement.msRequestFullscreen();
        }
    });

    // Вихід з режиму fullscreen
    defaultScreenButton.addEventListener('click', function() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { // Firefox
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { // IE/Edge
            document.msExitFullscreen();
        }
    });


    //popups
    const sendPaymentButton = document.querySelectorAll('.content_page_block_finances_item_button')[0];
    const requestPaymentButton = document.querySelectorAll('.content_page_block_finances_item_button')[1];
    const sendPaymentPopup = document.getElementById('sendPaymentPopup');
    const requestPaymentPopup = document.getElementById('requestPaymentPopup');
    const sendToFundPopup = document.getElementById('sendToFundPopup');
    const closeButtons = document.querySelectorAll('.popup .close');

    const switchToFundButton = document.getElementById('switchToFund');

    // Відкрити попап для Send a Payment
    sendPaymentButton.addEventListener('click', function() {
        sendPaymentPopup.style.display = 'block';
    });

    // Відкрити попап для Request a Payment
    requestPaymentButton.addEventListener('click', function() {
        requestPaymentPopup.style.display = 'block';
    });

    // Закрити попап
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            sendPaymentPopup.style.display = 'none';
            requestPaymentPopup.style.display = 'none';
            sendToFundPopup.style.display = 'none';
        });
    });

    // Переключитися на Send to Fund
    switchToFundButton.addEventListener('click', function() {
        sendPaymentPopup.style.display = 'none';
        sendToFundPopup.style.display = 'block';
    });

    // Закрити попап при натисканні за межами вікна
    window.addEventListener('click', function(event) {
        if (event.target === sendPaymentPopup) {
            sendPaymentPopup.style.display = 'none';
        }
        if (event.target === requestPaymentPopup) {
            requestPaymentPopup.style.display = 'none';
        }
        if (event.target === sendToFundPopup) {
            sendToFundPopup.style.display = 'none';
        }
    });

    
    //percent bars
    const percentElements = document.querySelectorAll('.content_page_block_options_item_progress_info_percent');
    const progressBarElements = document.querySelectorAll('.content_page_block_options_item_progress_bar');

    percentElements.forEach((percentElement, index) => {
        const percentText = percentElement.textContent.trim();
        const percentValue = parseInt(percentText.replace('%', ''), 10);

        if (!isNaN(percentValue) && progressBarElements[index]) {
            progressBarElements[index].style.width = percentValue + '%';
        }
    });

    function updateProgress(index, newPercent) {
        if (progressBarElements[index] && percentElements[index]) {
            percentElements[index].textContent = newPercent + '%';
            progressBarElements[index].style.width = newPercent + '%';
        }
    }
});