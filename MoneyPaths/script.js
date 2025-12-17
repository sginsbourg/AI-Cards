document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.money-card');

    cards.forEach(card => {
        // 1. Inject "PLAY THIS CARD" button dynamically
        const cardBack = card.querySelector('.card-back');
        if (cardBack) {
            const btn = document.createElement('button');
            btn.className = 'play-btn';
            btn.innerText = 'Play This Card';

            // Stop propagation so clicking the button doesn't flip the card back immediately
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const cardType = card.dataset.card; // Get 'freelance', 'ecommerce', etc.
                window.location.href = `play.html?card=${cardType}`;
            });

            cardBack.appendChild(btn);
        }

        // 2. Flip Logic
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });
});
