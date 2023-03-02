function Student(name, age){
    this.name = name;
    this.age = age;
    this.getName = function(){
        return this.name;
    }
    this.setName = function(newName){
        this.name = newName;
        return this.name
    }

    this.getAge = function(){
        return this.age;
    }
    this.setAge = function(newAge){
        this.age = newAge;
    }
}

const Sandeep = new Student("Sandeep K. Dasari", 21);
console.log(Sandeep.setName("Sandeep"));


