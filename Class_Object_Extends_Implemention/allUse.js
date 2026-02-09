class Person { 
    constructor(name,age){
         this.name = name;
        this.age = age;
    }

introduction(){
    console.log(`person name:${this.name} and age is: ${this.age} year old`)
}

}

class student extends Person {

    constructor(name,age,course){

        super(name,age)

        this.course = course
    }

    study(){
        console.log(`student name:${this.name} and age ${this.age} year old and course:${this.course}`)
    }
}


const s1 = new student("kuldeep singh ",20,"MCA")

s1.introduction();
s1.study()





