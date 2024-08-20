
/* Уведомления */
document.querySelectorAll('.alert').forEach(function (alert) {
    alert.addEventListener('click', function () {
        alert.style.display = 'none';
    });
});

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 27) {
        document.querySelectorAll('.alert').forEach(function (alert) {
            alert.style.display = 'none';
        });
    }
});


/* Сама форма */
document.querySelectorAll('.subscription').forEach(function (subscriptionForm) {
    const subscriptionInputs = subscriptionForm.querySelectorAll('.input');
    const subscriptionChoices = subscriptionForm.querySelectorAll('.choice');
    const subscriptionSubmit = subscriptionForm.querySelector('.subscription__submit');
    const subscriptionSuccessAlert = document.querySelector('.notifications-center__callback-success');
    const subscriptionFailureAlert = document.querySelector('.notifications-center__callback-failure');

    /* Состояния инпутов (на время отправки формы инпуты должны блокироваться) */
    function disableSubscriptionInputs() {

        /* Компоненты .input */
        subscriptionInputs.forEach((input) => {
            input.classList.add('input--loading');
            input.querySelector('.input__widget').setAttribute('disabled', 'disabled');
        });

        /* Компоненты .choice (чекбоксы) */
        subscriptionChoices.forEach((choice) => {
            choice.classList.add('choice--loading');
            choice.querySelector('.choice__widget').setAttribute('disabled', 'disabled');
        });

    }

    function enableSubscriptionInputs() {

        /* Компоненты .input */
        subscriptionInputs.forEach((input) => {
            input.classList.remove('input--loading');
            input.querySelector('.input__widget').removeAttribute('disabled');
        });

        /* Компоненты .choice (чекбоксы) */
        subscriptionChoices.forEach((choice) => {
            choice.classList.remove('choice--loading');
            choice.querySelector('.choice__widget').removeAttribute('disabled');
        });
    }


    /* Состояния кнопки */
    function changeSubmitStateToLoading() {
        subscriptionSubmit.classList.add('button--loading');
        subscriptionSubmit.setAttribute('disabled', 'disabled');
    }

    function changeSubmitStateToSuccess() {
        subscriptionSubmit.classList.remove('button--loading');
        subscriptionSubmit.classList.add('button--success');
        subscriptionSubmit.setAttribute('disabled', 'disabled');
    }

    function changeSubmitStateToFailure() {
        subscriptionSubmit.classList.remove('button--loading');
        subscriptionSubmit.classList.add('button--warning');
        subscriptionSubmit.setAttribute('disabled', 'disabled');
    }

    function changeSubmitStateToPristine() {
        subscriptionSubmit.classList.remove('button--loading', 'button--success', 'button--warning');
        subscriptionSubmit.removeAttribute('disabled');
    }

    /* Если пользователь начал взаимодействовать с инпутами, то убираем уведомления с прошлой попытки отправки: */
    subscriptionInputs.forEach(input => input.addEventListener('input', () => {
        subscriptionFailureAlert.style.display = 'none';
    }));


    /* Отправка */
    subscriptionForm.addEventListener('submit', function (event) {
        event.preventDefault();

        /* Если с прошлой попытки висит уведомление об ошибке: */
        subscriptionFailureAlert.style.display = 'none';

        /* Начинаем отправку данных, для начала блокируем форму */
        disableSubscriptionInputs();
        changeSubmitStateToLoading();

        /* Представим, что 3000ms отправляем данные */
        setTimeout(function () {

            /* ... дальше развилка, пусть для примера будет рандом 50/50: */

            // Если данные успешно отправлены
            if (Math.random() < 0.5) {

                // показываем зелёное уведомление:
                subscriptionSuccessAlert.style.display = 'block';

                // показываем галочку на кнопке:
                changeSubmitStateToSuccess();

                // и то и другое на 4.5 секунды:
                setTimeout(function () {
                    subscriptionSuccessAlert.style.display = 'none';
                    changeSubmitStateToPristine();
                    enableSubscriptionInputs();
                }, 4500);

            }

            // Если произошла ошибка
            else {

                // показываем красное уведомление
                subscriptionFailureAlert.style.display = 'block';

                // Показываем восклицательный знак на кнопке:
                changeSubmitStateToFailure();

                // В данном случае всего 2 секунды, чтобы пользователь мог быстро вернуться к работе с формой.
                // Уведомление в этом случае НЕ убираем -- пусть висит, пока пользователь не увидит и явно не закроет, или не начнёт заново заполнять форму / попытается отправить:
                setTimeout(function () {
                    changeSubmitStateToPristine();
                    enableSubscriptionInputs();
                }, 2000);

            }

        }, 3000);

    });
});

