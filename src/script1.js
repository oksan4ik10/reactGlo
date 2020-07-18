export default class Employers{
    constructor(employers){
        this.employers = employers;
        this._employersNames=[];
    }
    get employersNames(){
        this._employersNames = this.employers.filter((item) => item.length>0 && item.length != '');
        return this._employersNames.map((item) => item.toLocaleLowerCase().trim()); 
    }

}
