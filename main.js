const numbers = []
const numbers2 = []

for (let i = 1; i < 11; i++) {
    let random = Math.ceil(Math.random() * 100);
    let division = random % 2;
    numbers.push(random)
    if (division == 0){
        numbers2.push(random)
    }
}

console.log(numbers)
console.log(numbers2)