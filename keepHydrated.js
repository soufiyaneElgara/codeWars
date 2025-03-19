// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

/*
PREP:
        P: recieve a time in Hour formate
        R: return the equivelent letter to the time given

*/

function keepHydrated(time) {
    // calculate the liters: 0.5L === 1H so the fomula is : litter=time*0.5
    // and what's ever is the result should be in floor math method
    let liters = time*0.5
    return Math.floor(liters);
}

console.log(keepHydrated(3), 1) //liters = 1
console.log(keepHydrated(6.7), 3) //liters = 3
console.log(keepHydrated(3), 5) //liters = 5