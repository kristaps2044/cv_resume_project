let inputs = document.querySelectorAll('.input-styles');
let submit = document.querySelector('.form-window');
submit.addEventListener('submit', function(e){
    e.preventDefault();
    for(const values of inputs){
        console.log(values.value)};
    });