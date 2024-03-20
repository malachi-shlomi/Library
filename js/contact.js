document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.submitButton');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault(); 

        
        const name = document.querySelector('input[placeholder="What is your Name?"]').value;
        const phone = document.querySelector('input[placeholder="Phone Number"]').value;
        const email = document.querySelector('input[placeholder="Email"]').value;

        
        if (!name.trim()) {
            alert('Please enter your name.');
            return false;
        }

        
        const phonePattern = /^05\d{8}$/;
        if (!phone.trim() || !phonePattern.test(phone)) {
            alert('Please enter a valid phone number in the format 052XXXXXXX.');
            return false;
        }

        
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        
        console.log('Form submitted successfully!');
        alert('Thank you for your message!');

        
    });
});
