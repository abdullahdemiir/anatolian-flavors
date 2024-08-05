document.addEventListener("DOMContentLoaded", () => {
    const tabContents = document.querySelectorAll('.tab-content');
    const tabs = document.querySelectorAll('.tab');

    tabContents.forEach(content => content.classList.remove('active'));
    document.getElementById('tab-1').classList.add('active');

    let lastActiveTab = 'tab-1';

    tabs.forEach(tab => {
        tab.addEventListener('mouseover', () => {
            tabContents.forEach(content => content.classList.remove('active'));
            const target = document.getElementById(tab.getAttribute('data-tab'));
            target.classList.add('active');
        });

        tab.addEventListener('click', () => {
            tabContents.forEach(content => content.classList.remove('active'));
            const target = document.getElementById(tab.getAttribute('data-tab'));
            target.classList.add('active');
            lastActiveTab = target.id;
        });

        tab.addEventListener('mouseleave', () => {
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(lastActiveTab).classList.add('active');
        });
    });
});

let sliderIndex = 0;
const images = document.querySelectorAll('.slider img');
images[sliderIndex].classList.add('active');

setInterval(() => {
    images[sliderIndex].classList.remove('active');
    sliderIndex = (sliderIndex + 1) % images.length;
    images[sliderIndex].classList.add('active');
}, 3000);

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out.");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}

function addMessageToPage(name, message) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'user-message';

    const nameElement = document.createElement('h4');
    nameElement.textContent = name;

    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    messageContainer.appendChild(nameElement);
    messageContainer.appendChild(messageElement);

    document.body.appendChild(messageContainer);
}

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;

        addMessageToPage(name, message);
        alert('Your message has been sent! Thank you.');
        contactForm.reset();
    }
});
