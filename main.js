/////////automobil///////

// class Auto{
//     constructor(color,year,name,engine) {
//         this.color = color;
//         this.year = year;
//         this.name = name;
//         this.engine = engine;
// }
// startEngine(){
//     console.log(`${this.name} Engine started`);
//    }
// }

// class Car extends Auto {
//     constructor(color, year, name, engine, maxspeed){
//         super(color, year, name , engine)
//         this.maxspeed = maxspeed

//     }
 
// }

// const cars = new Car('blue','1992—1996','Chaser','2JZ-GE',240);
// console.log(cars);
// cars.startEngine()

////////воздушный транспорт////////
class Fighter{
    constructor(color,year,name,engine,maxspeed) {
        this.color = color;
        this.year = year;
        this.name = name;
        this.engine = engine;
        this.maxspeed = maxspeed;
}
startEngine(){
    console.log(`${this.name} Engine started`);
   }
}

class air extends Fighter {
    constructor(color, year, name, engine, maxspeed){
        super(color, year, name, engine)
        this.maxspeed = maxspeed

    }
 
}

const airl = new Fighter('grey','1917—1923','Cy-57','f119', 2130);
console.log(airl);
airl.startEngine();
