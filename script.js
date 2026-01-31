const magicBtn = document.getElementById('magicBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('popupModal');

// Function to trigger confetti
function fireConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff3366', '#33ccff', '#ffeb3b']
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff3366', '#33ccff', '#ffeb3b']
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

// Click Event
magicBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    fireConfetti();
});

// Close Event
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
