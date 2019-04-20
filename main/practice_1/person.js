class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return `My name is {$name}. I an {$age} years old.`;
    }
}
