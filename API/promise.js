const students = ["Amir","Jenifer",];

const addStudent = (newStudent,printCallBack)=>{
    setTimeout(function(){
        students.push(newStudent);
        console.log("Student added");
        printCallBack();
    },2000);
}

const printStudents = ()=>{
    setTimeout(function(){
        console.log("Students are ")
        for(let i in students){
            console.log(students[i]);
        }
    },1000);
}

const printStudentsForPromise = ()=>{
    for(let i in students){
        console.log(students[i]);
    }
}

const addStudentViaPromise = (newStudent)=>{
    const studentPromise = new Promise(function(resolve,reject){
        const studentFound = students.find(s=>s == newStudent);
        if(studentFound){
            reject()
        }else{
            students.push(newStudent);
            resolve();
        }
    })
    return studentPromise;
}

// addStudent("Victoria",printStudents);

addStudentViaPromise("Kris").then(()=>{//.then is the promise is does move to the next step
    printStudentsForPromise();
}).catch(()=>{
    console.log("Student exists already");
});