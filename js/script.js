/* Functions */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* Main code */
var randomNumbers = [];
var numbersUser = [];
for (let i = 0; i < 5; i++) {
    let randomNum;
    do {
        randomNum = randomNumber(1, 100);
    } while (randomNumbers.includes(randomNum))
    randomNumbers.push(randomNum);
}
alert(`Remember this 5 numbers ${randomNumbers} and you have 30 seconds after you push ok`);
var num = 2;
let timer = setInterval(
    function() {
        document.getElementById(`timer`).innerHTML = num;
        num--;
        if (num == -1) {
            clearInterval(timer);
            let count = 0;
            for (let i = 0; i < 5; i++) {
                let numberUser = prompt(`Numero ${i+1}`);
                numbersUser.push(numberUser);
                if (randomNumbers[i] == numbersUser[i]) {
                    count++;
                }
            }
            alert(`You guessed ${count} numbers`)
            location.reload();
        }
    },
    1000
)
