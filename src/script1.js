const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
let employersNames = employers.filter((item) => item.length>0 && item.length != '');
employersNames = employersNames.map((item) => item.toLocaleLowerCase().trim());


export {employers, employersNames} ;