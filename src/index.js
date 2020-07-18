import Sponsors from "./script2.js";

import Employers from "./script1.js";

const employer = new Employers(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
const sponsor = new Sponsors();

class Business{
    constructor([...[owner, director = 'Victor', cash, emp]]){
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }
    makeBusiness(){
    const sumSponsors = [...sponsor.eu,...sponsor.rus, 'unexpected sponsor' ];
    console.log('We have a business. Owner: ' + this.owner + ', director: ' + this.director + '. Our budget: ' + this.cash + '. And our employers: ' +
    this.emp);
    console.log('And we have a sponsors: ');
    console.log(...sumSponsors);
    console.log('Note. Be careful with ' + sponsor.eu[0] + ". It's a huge risk.");
    }

}

const obj = new Business(['Sam', ,sponsor.money , employer.employersNames]);

obj.makeBusiness();