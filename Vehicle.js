class Vehicle {

    start() {
        console.log("Vehicle is starting");
    }

}

class Car extends Vehicle {

    drive() {
        console.log("Car is driving");
    }

}

const car = new Car();

car.start();   // inherited from Vehicle
car.drive();   // method of Car

