const roles = {
	admin: "img/admin.png",
	student: "img/student.png",
	lector: "img/lector.png"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "https://cdn-icons-png.flaticon.com/512/4472/4472525.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "https://cdn-icons-png.flaticon.com/512/4472/4472525.png",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "https://cdn-icons-png.flaticon.com/512/4472/4472525.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "https://cdn-icons-png.flaticon.com/512/4472/4472525.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "https://cdn-icons-png.flaticon.com/512/4472/4472525.png",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 53,
		img: "https://cdn-icons-png.flaticon.com/512/4472/4472525.png",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 8,
				"studentsScore": 50
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 100
			}
		]
	}
];

class User {
	constructor(name, age, img, role, courses) {
		this.name = name;
		this.age = age;
		this.img = img;
		this.role = role;
		this.courses = courses;
	};

	render() {
		let adminInfo;
		if (this.role !== "student") {
			adminInfo = "admin--info";
		};
		return `
        <div class="user">
        	<div class="user__info">
    			<div class="user__info--data">
        			<img src="${this.img}" alt="${this.name}" height="50">
        			<div class="user__naming">
        				<p>Name: <b>${this.name}</b></p>
        				<p>Age: <b>${this.age}</b></p>
        			</div>
        		</div>
    			<div class="user__info--role ${this.role}">
        			<img src="img/${this.role}.png" alt="${this.role}" height="25">
    				<p>${this.role}</p>
        		</div>
        	</div>
			<div class="user__courses ${adminInfo}">${level}</div>
		</div>`
	};

	renderCourses(grad) {
		let arr = [];
		this.courses.forEach(function (i) {
			arr.push(`
			<p class="user__courses--course student">${i.title}
				<span class="${numbers(i.mark, grad)}">${upString(numbers(i.mark, grad))}</span>
            </p>
			`)
		});
		return arr.join("");
	};
};

class Student extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	};
};

class Lector extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	};

	renderCourses(grad) {
		let man = this.role;
		let arr = [];
		this.courses.forEach(function (item) {
			arr.push(`
			<div class="user__courses--course ${man}">
				<p>Title: <b>${item.title}</b></p>
				<p>${man}'s score: <span class="${numbers(item.score, grad)}">${upString(numbers(item.score, grad))}</span></p>
				<p>Average student's score: <span class="${numbers(item.studentsScore, grad)}">${upString(numbers(item.studentsScore, grad))}</span></p>
			</div>`)
		});
		return arr.join("");
	};
};

class Admin extends User {
	constructor(name, age, img, role, courses) {
		super(name, age, img, role, courses);
	};

	renderCourses(grad) {

		let man = this.role;
		let arr = [];
		this.courses.forEach(function (item) {
			arr.push(`
			<div class="user__courses--course ${man}">
				<p>Title: <b>${item.title}</b></p>
				<p>${man}'s score: <span class="${numbers(item.score, grad)}">${upString(numbers(item.score, grad))}</span></p>
				<p>Lector: <b>${item.lector}</b></p>
			</div>`)
		});
		return arr.join("");
	};
};

let mainArr = [];
let level = [];

function constructor(users) {
	users
		.map(function (item) {
			if (item.role === "student") {
				return new Student(item.name, item.age, item.img, item.role, item.courses);
			}
			if (item.role === "lector") {
				return new Lector(item.name, item.age, item.img, item.role, item.courses);
			}
			if (item.role === "admin") {
				return new Admin(item.name, item.age, item.img, item.role, item.courses);
			}
		})
		.forEach(function (item) {
			level = [];
			if (!item.courses)
				mainArr.push(item.render());
			else {
				level = item.renderCourses(gradation);
				mainArr.push(item.render(level));
			};
		});
};

constructor(users);

function upString(item) {
	if (item) {
		let word = "";
		for (let i = 0; i < item.length; i++) {
			if (i === 0) {
				word = word + item[i].toUpperCase();
			} else if (item[i - 1] === "-") {
				word = word + item[i].toUpperCase();
			} else {
				word = word + item[i];
			}
		}
		return word.replace("-", " ");
	};
};

function numbers(item, score) {
	let userStatus;
	if (item <= 20) {
		userStatus = score[85];
	} else if (item > 20 && item <= 55) {
		userStatus = score[55];
	} else if (item > 55 && item <= 85) {
		userStatus = score[20];
	} else if (item > 85 && item <= 100) {
		userStatus = score[100];
	};
	return userStatus;
};

document.write(`<div class="users">${mainArr.join("")}</div>`);