class Vehicle {
    constructor(number, capacity, route, type) {
        this.number = number;
        this.capacity = capacity;
        this.route = route;
        this.type = type;
        this.passengers = [];
    }

    display() {
        return `${this.type} ${this.number} (Capacity: ${this.capacity})`;
    }

    addPassenger(passenger) {
        if (this.passengers.length >= this.capacity) {
            return "Vehicle is at full capacity";
        }
        if (passenger.onVehicle) {
            return `${passenger.name} is already on a vehicle`;
        }
        this.passengers.push(passenger);
        passenger.onVehicle = true;
        return `${passenger.name} added to ${this.display()}`;
    }

    removePassenger(passengerName) {
        const index = this.passengers.findIndex(p => p.name === passengerName);
        if (index === -1) {
            return `Passenger ${passengerName} not found on this vehicle`;
        }
        this.passengers[index].onVehicle = false;
        this.passengers.splice(index, 1);
        return `${passengerName} removed from ${this.display()}`;
    }

    listPassengers() {
        return this.passengers.map(p => p.display()).join('\n') || 'No passengers';
    }
}

class Bus extends Vehicle {
    constructor(number, capacity, route) {
        super(number, capacity, route, 'Bus');
    }
}

class Train extends Vehicle {
    constructor(number, capacity, route) {
        super(number, capacity, route, 'Train');
    }
}

class Subway extends Vehicle {
    constructor(number, capacity, route) {
        super(number, capacity, route, 'Subway');
    }
}

class Tram extends Vehicle {
    constructor(number, capacity, route) {
        super(number, capacity, route, 'Tram');
    }
}

class Passenger {
    constructor(name, age, destination) {
        this.name = name;
        this.age = age;
        this.destination = destination;
        this.onVehicle = false;
    }

    display() {
        return `Passenger ${this.name}, Age: ${this.age}, Destination: ${this.destination}`;
    }
}

    
    document.addEventListener('DOMContentLoaded', () => {
    const vehicles = [];
    const vehicleSelection = document.getElementById('vehicle-selection');

    document.getElementById('add-vehicle-btn').addEventListener('click', () => {
        const type = document.getElementById('vehicle-type').value;
        const number = document.getElementById('vehicle-number').value;
        const capacity = parseInt(document.getElementById('vehicle-capacity').value);
        const route = document.getElementById('vehicle-route').value;

        let vehicle;
        switch (type) {
            case 'Bus':
                vehicle = new Bus(number, capacity, route);
                break;
            case 'Train':
                vehicle = new Train(number, capacity, route);
                break;
            case 'Subway':
                vehicle = new Subway(number, capacity, route);
                break;
            case 'Tram':
                vehicle = new Tram(number, capacity, route);
                break;
        }

        vehicles.push(vehicle);
        const option = document.createElement('option');
        option.value = number;
        option.textContent = vehicle.display();
        vehicleSelection.appendChild(option);

        document.getElementById('vehicle-number').value = '';
        document.getElementById('vehicle-capacity').value = '';
        document.getElementById('vehicle-route').value = '';
    });

    document.getElementById('add-passenger-btn').addEventListener('click', () => {
        const name = document.getElementById('passenger-name').value;
        const age = parseInt(document.getElementById('passenger-age').value);
        const destination = document.getElementById('passenger-destination').value;
        const vehicleNumber = document.getElementById('vehicle-selection').value;

        const passenger = new Passenger(name, age, destination);

        const vehicle = vehicles.find(v => v.number === vehicleNumber);
        const message = vehicle.addPassenger(passenger);
        alert(message);

        document.getElementById('passenger-name').value = '';
        document.getElementById('passenger-age').value = '';
        document.getElementById('passenger-destination').value = '';
        document.getElementById('vehicle-selection').value = '';
    });

    document.getElementById('remove-passenger-btn').addEventListener('click', () => {
        const passengerName = document.getElementById('remove-passenger-name').value;
        const vehicleNumber = document.getElementById('vehicle-selection').value;

        const vehicle = vehicles.find(v => v.number === vehicleNumber);
        const message = vehicle.removePassenger(passengerName);
        alert(message);

        document.getElementById('remove-passenger-name').value = '';
    });

    document.getElementById('list-passengers-btn').addEventListener('click', () => {
        const vehicleNumber = document.getElementById('vehicle-selection').value;
        const vehicle = vehicles.find(v => v.number === vehicleNumber);
        document.getElementById('passenger-list').textContent = vehicle.listPassengers();
    });

    document.getElementById('list-vehicles-btn').addEventListener('click', () => {
        const vehicleList = vehicles.map(v => v.display()).join('\n');
        document.getElementById('vehicle-list').textContent = vehicleList;
    });
});
