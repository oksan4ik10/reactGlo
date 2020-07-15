const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// let employersNames = [];
// for (let i = 0; i < employers.length; i++) {
// 	if (employers[i].length > 0 && employers[i].length != '') {
// 		employersNames.push(employers[i]);
// 	}
// }

let employersNames = employers.filter((item) => item.length>0 && item.length != '');


// for (const i = 0; i < employersNames.length; i++) {
// 	employersNames[i] = employersNames[i].toLowerCase().trim();
// }
employersNames = employersNames.map((item) => item.toLocaleLowerCase().trim());


const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash =(own = 0, ...everyCash) => total = own + everyCash.reduce((a,b) => a+b);

const money = calcCash(null, ...sponsors.cash);


function makeBusiness([...[owner, director = 'Victor', cash, emp]]) {
    const sumSponsors = [...sponsors.eu,...sponsors.rus, 'unexpected sponsor' ];
    console.log('We have a business. Owner: ' + owner + ', director: ' + director + '. Our budget: ' + cash + '. And our employers: ' +
    emp);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log('Note. Be careful with ' + sponsors.eu[0] + ". It's a huge risk.");
}
makeBusiness(['Sam', , money, employersNames]);