let inputs = document.querySelectorAll('.input-styles');
let imgInp = document.querySelector('#choose-pic');
let preview = document.querySelector('#inpImg');
let form = document.querySelector('.form-window');
const TabPreview = document.querySelector('#newTabPreview');
console.log(inputs);

function newTab(){
    const url = preview.src;
    window.open(url);
};

imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      preview.src = URL.createObjectURL(file)
    }
  };


form.addEventListener('submit', function(e){
    e.preventDefault();
    for(const values of inputs){
        console.log(values.value)}



    });