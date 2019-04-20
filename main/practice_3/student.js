

class Student extends Person{
    constructor(name,age,clas) {
        super(name,age);
        this.class = clas
    }
    introduce(){
        return `I am a Student. I am at Class ${this.class}.`;
    }
}