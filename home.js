function filterCards() {
    const keyword = document.getElementById('search').value.trim().toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(keyword) ? 'block' : 'none';
    });
}