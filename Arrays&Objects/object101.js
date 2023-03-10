const user = {
    first_name : "Sandeep Kumar",
    last_name : "Dasari",
    access: "admin",

    courses_enrolled: [],

    getCoursesCount: function(){
        return `${this.first_name} ${this.last_name} enrolled to ${this.courses_enrolled.length} number of courses.`;
    },

    addSingleCourse: function(course){
        this.courses_enrolled.push(course)
    },

    info: function(){
        console.log(`First Name is ${this.first_name},
        Last Name is ${this.last_name},
        Role Access is ${this.access},
        Registered for ${this.courses_enrolled}`)

        const sandeep ="Good";
        return sandeep;
    }
}

user.addSingleCourse("Namaste JS");
user.addSingleCourse("Namste React");
user.addSingleCourse("React Web Series");

user.info();

console.log(user.info())

console.log(user.info)


