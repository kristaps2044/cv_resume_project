let inputs = document.querySelectorAll('.input-styles');
let imgInp = document.querySelector('#choose-pic');
let preview = document.querySelector('#inpImg');
let form = document.querySelector('.form-window');
const TabPreview = document.querySelector('#newTabPreview');
console.log(inputs.value);

//When you add image you can prieview it on the window that you clicked on.
imgInp.onchange = evt => {
    const [file] = imgInp.files
    if (file) {
      preview.src = URL.createObjectURL(file)

      //Saves the image in sessionStorage
      const reader = new FileReader();

      reader.addEventListener("load",()=>
      {
        sessionStorage.setItem("profileImage",reader.result); 
      });
      reader.readAsDataURL(file);
    }
  };

//saves all input values to sessionStorage
const necessary = ['fullName','address','phoneNumber','email','school','degree'];
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