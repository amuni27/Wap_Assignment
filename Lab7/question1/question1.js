//1. arrow function
let group_arrow = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(student => {
            console.log("Arrow Answer: "+this.title + ": " + student
            );
        });
    }
};
group_arrow.showList();


//2. call
let group_call = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((stu) => {
            (function (student) {
                console.log("call Answer: "+this.title + ": " + student);
            }).call(this, stu);
        });
    }
};
group_call.showList();

// 3. apply
let group_apply = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach((stu) => {
            (function (student) {
                console.log("apply Answer: "+this.title + ": " + student);
            }).apply(this, [stu]);
        });
    }
};
group_apply.showList();

//4. bind

let group_bind = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log("bind Answer: "+ this.title + ": " + student
            );
        }.bind(this));
    }
};
group_bind.showList();



//5. self-pattern

let group_self = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function () {
        const thisDeclaration = this;
        self.students.forEach(function (student) {
            console.log("Self Answer: "+thisDeclaration.title + ": " + student
            );
        });
    }
};
group_self.showList();