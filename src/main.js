document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (event) {
            const botao = event.target;
            const abaAlvo = botao.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

            console.log(abaAlvo);
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active');
            removeBotaoAtivo();
            botao.classList.add('shows__tabs__button--is-active');
        });
    }
});

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
