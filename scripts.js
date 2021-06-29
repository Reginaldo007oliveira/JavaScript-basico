class Person {
    constructor(name){
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){ // seta o valor para  SI
        this._name = value;
    }
}
let person = new Person('Simara');
person.name = 'Si' // Resgata o valor de set
console.log(person.name)
