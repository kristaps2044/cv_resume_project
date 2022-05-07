let CVData = JSON.parse(sessionStorage.getItem('CVData'));
console.log(CVData);
let elements = ['fullName','phoneNumber','email','school','faculty','degree','studyProgramme', 'address','aboutYourself', 'startDate','endDate',
    'latvianRead', 'latvianWrite', 'latvianSpeak',
    'russianRead', 'russianWrite','russianSpeak',
    'englishRead', 'englishWrite', 'englishSpeak'];
let languageElements = [
    'latvianRead', 'latvianWrite', 'latvianSpeak',
    'russianRead', 'russianWrite','russianSpeak',
    'englishRead', 'englishWrite', 'englishSpeak'
]
let latvianGrades ={
    'excellent':'izcili',
    'good':'labi',
    'basic':'pamatzināšanas',
    "cant":'nevaru',
    'native':'dzimtā'
}

function setData(element,data){
    try {
        document.getElementById(element).innerHTML = data;
    } catch (error) {
        console.log(error,element);
    }
}

for(element of elements){
    const storedInfo = CVData[element];
    if (languageElements.includes(element)) {
        let grade = latvianGrades[storedInfo]
        setData(element,grade)
    }
    else if (element=='startDate'||element=='endDate') {
        let newDate = new Date(Date.parse(storedInfo))
        setData(element,(newDate.getMonth()+'.'+newDate.getFullYear()))
    }
    else{
        setData(element,storedInfo)
    }
}

const profilePhoto = sessionStorage.getItem("profileImage");
if(profilePhoto){
    document.getElementById('profilePicture').setAttribute('src',profilePhoto);
}




