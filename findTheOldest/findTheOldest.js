let findTheOldest = function(people) {
    const currentYear=(new Date()).getFullYear();
    const isAlive= people.some(human=>{
        console.log(human.yearOfDeath);
        return human.yearOfDeath===undefined;
        });
    console.log(isAlive);
    const oldest = people.reduce((oldest, person)=>{
        if (oldest.yearOfDeath===undefined){
            oldest.yearOfDeath=currentYear;
        } else if (person.yearOfDeath===undefined){
            person.yearOfDeath=currentYear;
        }
        const oldestAge=oldest.yearOfDeath-oldest.yearOfBirth;
        const personAge=person.yearOfDeath-person.yearOfBirth;
        return oldestAge>personAge ? oldest : person;
    });
    return oldest;
}

module.exports = findTheOldest

// jasmine findTheOldest.spec.js