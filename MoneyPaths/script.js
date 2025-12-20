document.addEventListener('DOMContentLoaded', () => {
    const deck = document.getElementById('card-deck');
    const cards = Array.from(document.querySelectorAll('.money-card'));
    const filterBtns = document.querySelectorAll('.filter-btn');

    // 1. Store original order
    const originalOrder = [...cards];

    // 2. Card Initialization (Flip & Play Button)
    cards.forEach(card => {
        const cardBack = card.querySelector('.card-back');
        if (cardBack) {
            const btn = document.createElement('button');
            btn.className = 'play-btn';
            btn.innerText = 'Play This Card';

            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const cardType = card.dataset.card;
                window.location.href = `play.html?card=${cardType}`;
            });

            cardBack.appendChild(btn);
        }

        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    // 3. Sorting Logic
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // UI Update
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const sortType = btn.dataset.sort;
            let sortedCards;

            if (sortType === 'default') {
                sortedCards = [...originalOrder];
            } else if (sortType === 'alpha') {
                sortedCards = [...cards].sort((a, b) => {
                    const titleA = a.dataset.title.toLowerCase();
                    const titleB = b.dataset.title.toLowerCase();
                    return titleA.localeCompare(titleB);
                });
            } else if (sortType === 'potential') {
                sortedCards = [...cards].sort((a, b) => {
                    const earnA = parseInt(a.dataset.earnings) || 0;
                    const earnB = parseInt(b.dataset.earnings) || 0;
                    return earnB - earnA; // Highest first
                });
            } else if (sortType === 'category') {
                sortedCards = [...cards].sort((a, b) => {
                    const catA = a.dataset.category.toLowerCase();
                    const catB = b.dataset.category.toLowerCase();
                    if (catA === catB) {
                        return a.dataset.title.localeCompare(b.dataset.title);
                    }
                    return catA.localeCompare(catB);
                });
            }

            // 4. Apply Sort to DOM
            // Clear and re-append is the safest way to ensure order
            deck.innerHTML = '';
            sortedCards.forEach(card => {
                deck.appendChild(card);
                // Re-initialize cards if needed? 
                // Actually the elements themselves are preserved, so listeners stay.
            });
        });
    });
});
