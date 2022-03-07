let inputs = document.querySelectorAll('.input-styles');
console.log(inputs);
let form = document.querySelector('.form-window');
form.addEventListener('submit', function(e){
    e.preventDefault();
    for(const values of inputs){
        console.log(values.value)};
    });