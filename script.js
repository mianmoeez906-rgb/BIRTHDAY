document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1️⃣ CHANGE NAME HERE
    // ==========================================
    // 👉 Naam change karna ho to sirf yahan change karein
    const GUEST_NAME = "Ammar";

    // Auto-update all name elements
    document.querySelectorAll('.guest-name').forEach(el => {
        el.innerText = GUEST_NAME;
    });


    // ==========================================
    // 2️⃣ CHANGE BIRTHDAY MESSAGE HERE 💌
    // ==========================================
    // 👉 Future mein message change karna ho
    // 👉 Sirf neeche wala text change karein

    const BIRTHDAY_MESSAGE = `
        𓆩♡𓆪 Happy Birthday my dear fiance. 🎂🥳🥳✨<br><br>

        Wishing you many, many happy returns of the day✨!
        May your day be filled with happiness.
        Stay blessed, keep smiling🌷, and may all your dreams come true 💐🪄<br><br>

        May Allah bless you with success at every step of your life 🤲🏻✨🌸💫
        I pray that you achieve every dream you have and receive countless blessings,
        success, and beautiful moments in life. 🫰🏻🫶🏻
    `;

    // Auto-update message
    const messageContainer = document.getElementById('messageBody');

    if (messageContainer) {
        messageContainer.innerHTML = BIRTHDAY_MESSAGE;
    }


    // ==========================================
    // 3️⃣ AUDIO CONTROL
    // ==========================================

    const bgMusic = document.getElementById('bgMusic');
    const musicToggleBtn = document.getElementById('musicToggleBtn');

    function toggleAudio() {
        if (bgMusic.paused) {
            bgMusic.play().catch(() => {});
            musicToggleBtn.innerText = "⏸️ Pause Music";
        } else {
            bgMusic.pause();
            musicToggleBtn.innerText = "🎵 Play Music";
        }
    }

    if (musicToggleBtn) {
        musicToggleBtn.addEventListener('click', toggleAudio);
    }


    // ==========================================
    // 4️⃣ NAVIGATION LOGIC
    // ==========================================

    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    const screen4 = document.getElementById('screen4');

    const startBtn = document.getElementById('startBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalActions = document.getElementById('modalActions');
    const dots = document.querySelectorAll('.dot');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            showModalStep(1);
        });
    }

    window.showModalStep = function(step) {
        modalOverlay.classList.remove('hidden');

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === step - 1);
        });

        if (step === 1) {
            modalTitle.innerText = "It's Your Special Day! 🎉";
            modalActions.innerHTML =
                `<button class="primary-btn" onclick="showModalStep(2)">Next</button>`;

        } else if (step === 2) {
            modalTitle.innerText = "Do you wanna see what I made??";

            modalActions.innerHTML = `
                <button class="primary-btn" onclick="showModalStep(3)">Yes! 💖</button>
                <button class="secondary-btn" onclick="showModalStep(3)">No</button>
            `;

        } else if (step === 3) {
            modalTitle.innerText = "Here is your special surprise! ✨";

            modalActions.innerHTML =
                `<button class="primary-btn" onclick="goToScreen2()">Let's Go! 🚀</button>`;
        }
    };


    window.goToScreen2 = function() {
        modalOverlay.classList.add('hidden');
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
    };


    // ==========================================
    // 5️⃣ ROOM CONTROLS
    // ==========================================

    const btnLights = document.getElementById('btnLights');
    const btnMusic = document.getElementById('btnMusic');
    const btnDecorate = document.getElementById('btnDecorate');
    const btnBalloons = document.getElementById('btnBalloons');
    const btnMessage = document.getElementById('btnMessage');

    if (btnLights) {
        btnLights.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    if (btnMusic) {
        btnMusic.addEventListener('click', toggleAudio);
    }

    if (btnDecorate) {
        btnDecorate.addEventListener('click', () => {
            document.getElementById('buntingBanner').classList.remove('hidden');
            document.getElementById('cakeElement').classList.remove('hidden');
        });
    }

    if (btnBalloons) {
        btnBalloons.addEventListener('click', () => {
            createBalloons();
            btnMessage.classList.remove('hidden');
        });
    }


    function createBalloons() {
        const container = document.getElementById('balloonContainer');
        const colors = [
            '#ff4081',
            '#ab47bc',
            '#42a5f5',
            '#66bb6a',
            '#ffa726'
        ];

        for (let i = 0; i < 20; i++) {
            const balloon = document.createElement('div');

            balloon.className = 'balloon';
            balloon.style.left = Math.random() * 90 + '%';
            balloon.style.backgroundColor =
                colors[Math.floor(Math.random() * colors.length)];

            balloon.style.animationDelay =
                Math.random() * 3 + 's';

            container.appendChild(balloon);
        }
    }


    if (btnMessage) {
        btnMessage.addEventListener('click', () => {
            screen2.classList.add('hidden');
            screen3.classList.remove('hidden');
        });
    }


    // ==========================================
    // 6️⃣ LETTER
    // ==========================================

    const openLetterBtn = document.getElementById('openLetterBtn');

    if (openLetterBtn) {
        openLetterBtn.addEventListener('click', () => {
            document.getElementById('curtainDoors').classList.add('open');
        });
    }


    // ==========================================
    // 7️⃣ BACK TO ROOM
    // ==========================================

    const backToRoomBtn = document.getElementById('backToRoomBtn');

    if (backToRoomBtn) {
        backToRoomBtn.addEventListener('click', () => {
            screen3.classList.add('hidden');
            screen2.classList.remove('hidden');
        });
    }


    // ==========================================
    // 8️⃣ MEMORIES
    // ==========================================

    const viewMemoriesBtn = document.getElementById('viewMemoriesBtn');

    if (viewMemoriesBtn) {
        viewMemoriesBtn.addEventListener('click', () => {
            screen3.classList.add('hidden');
            screen4.classList.remove('hidden');
        });
    }

});