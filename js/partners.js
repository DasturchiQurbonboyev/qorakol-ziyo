const marquee = document.querySelector('.marquee');
const partners = document.querySelector('.partners');
const partnerCards = document.querySelectorAll('.partners_card');

// Kartalarni klonlash
partnerCards.forEach(card => {
    const clone = card.cloneNode(true);
    partners.appendChild(clone);
});

// Kartalar soni va kengligini olish
const cardWidth = partnerCards[0].clientWidth;
const totalCards = partnerCards.length * 2; // Klonlanganlar bilan birga
const marqueeWidth = cardWidth * totalCards;

// Marquee'ni kengligini o'zgartirish
marquee.style.width = `${marqueeWidth}px`;

let scrollSpeed = 0.8; // Scroll tezligi
let scrollAmount = 0; // Scroll miqdori

// Marquee'ni harakatlantirish funksiyasi
function scrollMarquee() {
    scrollAmount += scrollSpeed;

    // ScrollAmount barcha slaydlar o'tib ketsa
    if (scrollAmount >= marqueeWidth / 2) {
        scrollAmount = 0; // O'tkazish miqdorini qayta tiklash
    }

    // Marquee'ni siljitish
    marquee.style.transform = `translateX(-${scrollAmount}px)`;

    // Harakat davom etsin
    requestAnimationFrame(scrollMarquee);
}

// Scroll animatsiyasini boshlash
scrollMarquee();
