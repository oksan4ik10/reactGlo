const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash =(own = 0, ...everyCash) =>  own + everyCash.reduce((a,b) => a+b);

const money = calcCash(null, ...sponsors.cash);

console.log(money);
export {sponsors, calcCash, money};