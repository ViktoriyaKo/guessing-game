class GuessingGame {
    constructor() {

    }
// floor - не работает
// ceil и round - работают

    
    setRange(min, max) {
        this.min = min; // 0; 0
        this.max = max; // 1888; 944 this max = 944
       
    }


    guess() {
        this.num = Math.ceil((this.max - this.min) / 2 + this.min); //ищем расположение числа, справа или слева на заданной оси, прибавляем min для изменения точки отсчета 
        return this.num; //944
    }

    lower() {
       
        this.setRange(this.min, this.num); // вызываем еще раз setRange, новые значение this.min и this.num = max
        
    }

    greater() {
        
        this.setRange(this.num, this.max); // this max - предыдущий max, который был шаг назад, this num становится min
    }
}

module.exports = GuessingGame;
