document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.submitButton');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault(); 

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
 
        if (!name.trim()) {
            alert('Please enter your name.');
            return false;
        }

        
        const phonePattern = /^05\d{8}$/;
        if (!phone.trim() || !phonePattern.test(phone)) {
            alert('Please enter a valid phone number in the format 052XXXXXXX.');
            return false;
        }

        // verify email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim() || !emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return false;
        }
    
        // check that the password doesn't contains the same letter twice
        for(let i = 0; i < password.length; i++){
            for(let j = i+1; j < password.length; j++){
                if(password[i] === password[j]){
                    alert('Password cannot contain the same letter twice.');
                    return false;
                }
            }
        }


        console.log('Form submitted successfully!');
        alert('Thank you for your message!');
        
    });
});
