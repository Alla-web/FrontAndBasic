//создание класса
class Wizard {
  //конструктор класса
  constructor(nameWizard, houseWizard) {
    this.name = nameWizard;
    this.house = houseWizard;
  }

  introduce() {
    console.log(`I am ${this.name} from ${this.house}`);
  }
}

//создание экземпляра класса (готовый объект)
const harry = new Wizard("Harry Potter", "Gryffindor");
console.log(harry);
harry.introduce();

//Наследование (расширение) класса
class DarkWizard extends Wizard {

    constructor(nameWizard, houseWizard, darkPower) {
      super(nameWizard, houseWizard);
      this.darkPower = darkPower;
    }
  
  userDarkPower() {
    console.log(
      `I am ${this.name} from ${this.house} and use ${this.darkPower}`
    );
  }
}

const voldemort = new DarkWizard(
  "Lord Voldemort",
  "Slytherin",
  "Avada Kedavra"
);

console.log(voldemort);
