document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
        document.getElementById('formSuccessMessage').textContent = '';
        document.querySelectorAll('.error').forEach(function(element) {
            element.textContent = '';
        });
        let isValid = true;
        if (isValid) {
            document.getElementById('formSuccessMessage').textContent = 'Accepted';
        } else {
            document.querySelector('.error:not(:empty)').scrollIntoView({ behavior: 'smooth' });
        }
    });
});
