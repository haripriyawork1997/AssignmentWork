class Person{
    speak(){
        console.log("Person can speak")
    }
}

class Student extends Person{
    study(){
        console.log("Student is studying")
    }
}

class collegeStudent extends Student{
    attendClass(){
        console.log("College Student is attending Class")
    }
}

let obj = new collegeStudent()
obj.speak()
obj.study()
obj.attendClass()
