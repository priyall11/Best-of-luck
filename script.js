const magicBtn = document.getElementById('magicBtn');
const closeBtn = document.getElementById('closeBtn');
const modal = document.getElementById('popupModal');

function sideConfetti() {
    var end = Date.now() + (2 * 1000);
    var colors = ['#ff69b4', '#ffffff', '#a18cd1'];

    (function frame() {
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}

magicBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    sideConfetti();
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
