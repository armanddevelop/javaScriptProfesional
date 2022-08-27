console.log("Hello typescript");

function add(a: number, b: number): number {
  return a + b;
}
const sum = add(2, 3);
console.log(sum);

//Boolean
let muted: boolean = true;
//numbers
let edad = 6;
let numerador: number = 42;
let denominador: number = edad;
let resultado = numerador / denominador;
//strings
let nombre: string = "Pachis";
let grettings: string = `My name is ${nombre}`;
//arrays
let people: string[] = [];
people = ["alicha", "pach", "nallely"];
people.push("2");
let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push(8, "pach", 22, "alicha");
let peopleObjects: Array<object> = [];
peopleObjects.push({ age: 33, name: "pach" });
console.log(people);
console.log(peopleAndNumbers);
console.log(peopleObjects);

//Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
}
let favColor: Color = Color.Azul;

//Functions
const addNumbers = (a: number, b: number): number => {
  return a + b;
};
const suma = addNumbers(7.8, 9.5);
const createAdder = (a: number): ((number: number) => number) => {
  return (b: number): number => {
    return a + b;
  };
};
const addFour = createAdder(4);
const addFourPlus = createAdder(6);

const fullName = (firtName: string, lastName: string = "paches"): string => {
  return `${firtName} ${lastName}`;
};
const printFullname = fullName("armando", "salamanca");

console.log(printFullname);

//interface
interface Rectangulo {
  ancho: number;
  alto: number;
}

const figure: Rectangulo = {
  ancho: 30,
  alto: 20,
};

const area = ({ ancho, alto }: Rectangulo): number => {
  return ancho * alto;
};

console.log(area(figure));
