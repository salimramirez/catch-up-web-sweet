export class Laureate {
    constructor({ id, firstname, surname, born, gender, prizes }) {
        this.id = id;
        this.firstname = firstname;
        this.surname = surname;
        this.born = born;
        this.gender = gender;
        this.prizes = prizes; // array
    }

    get fullName() {
        return `${this.firstname} ${this.surname}`;
    }

    get numberOfPrizes() {
        return Array.isArray(this.prizes) ? this.prizes.length : 0;
    }
}