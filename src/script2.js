export default class Sponsors{
    constructor(){
        this.cash = [40000, 5000, 30400, 12000],
        this.eu = ['SRL', 'PLO', 'J&K'],
        this.rus = ['RusAuto', 'SBO'],
        this._money = 0;
    }
    calcCash(own = 0, ...everyCash){
        return own + everyCash.reduce((a,b) => a+b);
    }
    get money(){
        return this.calcCash(null, ...this.cash);
    }
}

// const obj = new Sponsors();

// console.log(obj.money);
// const sponsors = {
//     cash: [40000, 5000, 30400, 12000],
//     eu: ['SRL', 'PLO', 'J&K'],
//     rus: ['RusAuto', 'SBO']
// };

// const calcCash =(own = 0, ...everyCash) =>  own + everyCash.reduce((a,b) => a+b);

// const money = calcCash(null, ...sponsors.cash);

// console.log(money);
// export {sponsors, calcCash, money};