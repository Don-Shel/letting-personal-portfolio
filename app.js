const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

// script.js

const button = document.querySelector('button');

button.addEventListener('click', () => {
    // Add functionality to navigate to the next page or section
    console.log('Button clicked!');
});

// Add functionality to the contact form, such as sending the form data to the designer's email or database
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://example.com/contact', true);
    xhr.send(formData);
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert('Message sent successfully!');
        } else {
            alert('Error sending message. Please try again.');
        }
    };
});