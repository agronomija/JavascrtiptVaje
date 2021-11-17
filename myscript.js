var firstName = prompt('Enter your name: ');
var lastName = prompt('Enter your last name: ');
var age = prompt('Enter yourr age: ');
var petName = prompt('Enter your pets name: ');
var height = prompt('Enter your height in cm: ');

var lastLetterOfPet = petName[petName.length - 1];
console.log(firstName)
console.log(firstName[0])
console.log(lastName)
console.log(lastName[0])
console.log('firstname[0] == lastname[0]: ' + (lastName[0] == firstName[0]))
console.log(age)
console.log('leta med 20 in 30'+ (20 < age < 30))
console.log(petName)
console.log('zadnja črka petname: '+ petName[petName.length - 1])
console.log('zadnaja crka enaka y: ' + ('y' == petName[petName.length - 1]))
console.log(height)
console.log('višina nad 170: '+ (height > 170))
console.log(((firstName[0] === lastName[0]) && (20 < age < 30) && (height >= 170) && (lastLetterOfPet === 'y')))

if ((firstName[0] == lastName[0]) && (20 < age < 30) && (height >= 170) && (lastLetterOfPet === 'y')) {
    console.log('Ti si vohun ');
}

console.log(firstName[0] == lastName[0])
console.log(20 < age < 30)
console.log(height >= 170)
console.log(lastLetterOfPet === 'y')
// && (20 < age < 30)

var ime = 'ime mi je andraz'


function povejIme(x) {
console.log(x);}


var l = 'andraz'
for (var i=1; i<5; i++) {
   console.log('andraz');
}

