let CVData = JSON.parse(sessionStorage.getItem('CVData'));
console.log(CVData);
let elements = ['fullName','phoneNumber','email','school','faculty','degree','studyProgramme'];
function setData(element,data){
    document.getElementById(element).innerHTML = data;
}
for(element of elements){
    setData(element,CVData[element]);
}

