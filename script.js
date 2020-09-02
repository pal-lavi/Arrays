const students = [
    {
        name:"John",
        regNo : 53,  
        courses:["Maths","Bio","Kannada"]
    },
    {
        name:"`Mathew",
        regNo : 54,
        courses:["Maths","Bio","Kannada"]
    },
    {
        name:"Sai Vijay",
        regNo : 55,
        courses:["Maths","Bio","Kannada"]
    }
]

const studentsDiv = document.getElementById('students-div');
for(var i=0; i<students.length; i++){
    const mainDiv =document.createElement('div');
    mainDiv.classList.add('card','mt-3');
    // mainDiv.classList.add('mt-3')
    const nameElem = document.createElement('h2');
    const nameTitle = document.createElement('h1');
    nameTitle.innerText = "Name";
    // <h2> </h2>
    const regNo = document.createElement('h2');
    
    nameElem.innerText = students[i].name;
    regNo.textContent = students[i].regNo;
    mainDiv.appendChild(nameTitle)
    mainDiv.appendChild(nameElem);
    mainDiv.appendChild(regNo);
    studentsDiv.appendChild(mainDiv);
    const courses= students[i].courses;
    const ulElem =document.createElement('ul');
    //Looping courses
    for(var j=0; j<courses.length ; j++){
        const liElem = document.createElement('li');
        liElem.textContent= courses[j];
        ulElem.appendChild(liElem);
    }
    mainDiv.appendChild(ulElem);
}
