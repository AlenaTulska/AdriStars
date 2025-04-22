
    const cashBtn = document.querySelector('.pay-btn button.active');
    const cardBtn = document.querySelector('.pay-btn button:not(.active)');

    cashBtn.addEventListener('click', () => {
        cashBtn.classList.add('active');
        cardBtn.classList.remove('active');
    });

    cardBtn.addEventListener('click', () => {
        cardBtn.classList.add('active');
        cashBtn.classList.remove('active');
    });

    document.querySelectorAll('.extra-card .add').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.extra-card');
            card.classList.toggle('added');
            button.textContent = card.classList.contains('added') ? '-' : '+';
        });
    });