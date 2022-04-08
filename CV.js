let CVData = JSON.parse(sessionStorage.getItem('CVData'));
console.log(CVData);
let elements = ['fullName','phoneNumber','email','school','faculty','degree','studyProgramme', 'address'];

function setData(element,data){
    document.getElementById(element).innerHTML = data;
}

for(element of elements){
    setData(element,CVData[element]);
}

const profilePhoto = sessionStorage.getItem("profileImage");
if(profilePhoto){
    document.getElementById('profilePicture').setAttribute('src',profilePhoto);
}




