module.exports = class Student{
    /**
     * 
     * @param {String} name Student name
     * @param {Map} notes Student's notes identified by class' name 
     */
    constructor(){
        this.name = new String();
        this.notes = new Map();
    }
    find(note){
        return this.notes.get(note);
    }
    calculateMean(){
        let mean = 0;
        for(let value of this.notes.values()){
            mean += value;
        }
        return mean/10;
    }
}
