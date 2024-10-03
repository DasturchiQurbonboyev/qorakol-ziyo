const buttons = document.querySelectorAll('.savollar_btn');

buttons.forEach((button, index) => {
    button.addEventListener('click', function () {
        const answer = this.parentElement.nextElementSibling;
        console.log(answer);
        answer.classList.toggle('show'); // "show" klassini qo'shadi yoki olib tashlaydi

        const img = this.querySelector('img');
        img.classList.toggle('rotate');
    });
});