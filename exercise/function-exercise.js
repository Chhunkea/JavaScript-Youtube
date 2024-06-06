// function greet(greet) {
//     console.log('hello');
// }
// greet();

// function greet(name) {
//     console.log(`hello ${name}`);
// }
// greet('simion');

// function greet(name) {
//     if (!name) {
//         console.log('hello');
//     } else {
//         console.log(`hello ${name}`);
//     }
// }

// greet('simon');
// greet();

const greet = (name) => console.log(name ? `hello ${name}` : 'hello');

greet('simon');
greet();

const zoo = (animal) => console.log(animal ? `yes` : `no`);
zoo('lion');
zoo();

const convertToFahrenheit = celsius => console.log((celsius * 9 / 5) +  32);
convertToFahrenheit(25);

const convertToCelsius = fahrenheit => console.log((fahrenheit - 32) * 5 / 9);
convertToCelsius(86);

const convertTemperature = (cel, fah) => console.log(fah.toLowerCase() === 'c' ? `${(cel * 9 / 5) +  32}'F `: fah.toLowerCase() === 'f' ? `${(cel - 32) * 5 / 9}'C` : 'Invalid Unit.');
convertTemperature(25, 'c');
convertTemperature(86, 'f');

// const convertLength = (length, from, to) => console.log((from == 'km' && to == 'miles') ? `${length / 1.6}miles` : (from == 'miles' && to == 'km') ? `${length * 1.6}km` : `${length} ${to}`);
// convertLength(50, 'miles', 'km');
// convertLength(32, 'km', 'miles');
// convertLength(50, 'km', 'km');

let mile = 5280;
let km = 3281;

const convertLength = (length, from, to) => (from === 'km' && to === 'miles') ? `${length / 1.6} ${to}` : (from === 'km' && to === 'ft') ? `${length * 3281} ${to}` : (from === 'miles' && to === 'km') ? `${length * 1.6} ${to}` : (from === 'miles' && to === 'ft') ? `${length * 5280} ${to}` : (from === 'ft' && to === 'km') ? `${length / 3281} ${to}` : (from === 'ft' && to === 'miles') ? `${length / 5280} ${to}` : (from === to) ? `${length} ${to}` : null;

console.log(convertLength(50, 'miles', 'km'));
console.log(convertLength(32, 'km', 'miles'));
console.log(convertLength(50, 'km', 'km'));

console.log(convertLength(5, 'miles', 'km'));
console.log(convertLength(5, 'miles', 'ft'));
console.log(convertLength(5, 'km', 'ft'));
