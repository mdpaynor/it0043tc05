function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields.');
                return;
            }

            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            contactForm.reset();
        });
    }

    const btn = document.querySelector('.main-picture .btn');

    if (btn) {
        btn.addEventListener('click', function () {
            console.log('Button clicked!');

            const bgLine = btn.querySelector('.bg-line');
            const hlLine = btn.querySelector('.hl-line');

            const length = bgLine.getTotalLength();

            bgLine.style.transition = hlLine.style.transition = 'none';
            bgLine.style.strokeDasharray = hlLine.style.strokeDasharray = length;
            bgLine.style.strokeDashoffset = hlLine.style.strokeDashoffset = length;

            btn.offsetHeight;

            bgLine.style.transition = hlLine.style.transition = 'stroke-dashoffset 0.5s ease-in-out';
            bgLine.style.strokeDashoffset = 0;
            hlLine.style.strokeDashoffset = 0;
        });

        btn.addEventListener('mouseenter', function () {
            btn.style.transform = 'scale(1.1)';
        });

        btn.addEventListener('mouseleave', function () {
            btn.style.transform = 'scale(1)';
        });
    }

    const openBtn = document.querySelector('.open-btn');
    const closeBtn = document.querySelector('.closebtn');

    if (openBtn) {
        openBtn.addEventListener('click', openNav);
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeNav);
    }
});
