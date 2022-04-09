let secretNumber = getRandomInt(1,10); // создали переменную в кот. попало число которое высчитало функцию getRandomInt
function getRandomInt(min,max){ //включается функция в которую попадают числа 1 и 10
    return Math.floor(Math.random() * (max - min + 1)) + min; // return - возвращает результат к тому кто её запустил. Math.floor - удаляет значение после запятой. Math.random - выдаёт случайное число от 0 до 1. 
}
let prompt = document.querySelector('#prompt');
let attempt = document.querySelector('#attempt');
let attemptNumber = 3;
let input = document.querySelector('input');
let examination = document.querySelector('#examination');
let newGame = document.querySelector('#newGame');
let audio = document.createElement('audio'); // сами создаём площадку для аудио//
console.log(secretNumber)
examination.onclick = function(){
    if (input.value == secretNumber){
       prompt.innerHTML = 'ты угадал. Это число -' + secretNumber;
       input.disabled = true;
       examination.disabled = true;
       audio.setAttribute('src', 'аудио/audioWin.wav'); // прописываем путь до звука, из папки js выходить не надо//
       audio.play();// запуск звука//
    }else{
        if(secretNumber < input.value){
            prompt.innerHTML = 'не верно! Секретное число меньше чем ' + input.value;
        }else{
            prompt.innerHTML = 'не верно! Секретное число больше чем ' + input.value;
        }
        attemptNumber = attemptNumber - 1;
        attempt.innerHTML = attemptNumber;
        if( attemptNumber == 0){
            prompt.innerHTML = 'Ты истратил все попытки. Попробуй заново.';
            input.disabled = true; //делаем какой-то элемент неактивным//
            examination.disabled = true;
        }
        audio.setAttribute('src', 'аудио/audioError.wav'); // прописываем путь до звука, из папки js выходить не надо//
        audio.play();// запуск звука//
    }
    input.value = '';
}
newGame.onclick = function(){
    secretNumber = getRandomInt(1,10); 
    console.log(secretNumber)
    attemptNumber = 3;
    attempt.innerHTML = attemptNumber;
    prompt.innerHTML = ' ';
    input.disabled = false;
    examination.disabled = false;
}