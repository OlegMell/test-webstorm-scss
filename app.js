class Person{
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person = new Person("Вася", 18);

function logPerson(person) {
    if (!isNaN(person)){
        
    }

}


const playBtn = document.getElementById("play");
playBtn.onclick = () => {
    alert();
    const myAudio = new Audio("./audio.mp3");
    myAudio.play();
};





const elementById = document.getElementById("div");

