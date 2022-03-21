let inputs = document.querySelectorAll('.input-styles');
let imgInp = document.querySelector('#choose-pic');
let preview = document.querySelector('#inpImg');
let form = document.querySelector('.form-window');
const TabPreview = document.querySelector('#newTabPreview');
console.log(inputs);

//Opens new tab on clicking the button next to added image.
function newTab(){
    const url = preview.src;
    window.open(url);
};
//When you add image you can prieview it on the window that you clicked on.
imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      preview.src = URL.createObjectURL(file)
    }
  };

// When you submit you find all elements that are added by user.
form.addEventListener('submit', function(e){
    e.preventDefault();
    let CVData ={};
    for(const input of inputs){
        CVData[input.id] = input.value;
    }
    CVData.fullName = CVData.firstName+' '+CVData.lastName;
    sessionStorage.setItem("CVData",JSON.stringify(CVData));
    console.log(CVData);
    window.open('./CV.html',"_self");
  });