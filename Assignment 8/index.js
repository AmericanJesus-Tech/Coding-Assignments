//Cars
const modelContainer = document.getElementById("model-container")

async function onFetchModelClick() {
    const response = await fetch("http://localhost:3000/Model")
    const ModelList = await response.json()

    modelContainer.innerHTML = ModelList.map(
        Model => `<div>
            <h3>${Model.Model}</h3>
            <p>${Model.ModelId}</P>
        `
    ).join("")
}


//class Car
    //make
    //model
    class Car{
        constructor(make, model){
            this.make = make;
            this.model = model;
        }
    }
    
    //class Menu
    class Menu{
        constructor(){
            //cars array
            this.cars=[];
        }
    
    
        //see menu
     
    
        //add cars
        //prompt for a make
        //prompt for a model
        //creat new car and push car into array
        addCar(){
            let carMake = prompt("Enter car make:");
            let carModel = prompt("Enter the car model:");
            this.cars.push(new Car(carMake, carModel));
        } 
    
    
        //delete cars
        deleteCar(){
            let carIndex = prompt("Enter car index to Delete:");
            this.cars.splice(carIndex, 1);
        }
    
    
        //view cars
        viewCars(){
            let displayCars = '';
            for(let i=0; i < this.cars.length; i++){
    
                displayCars += `
                ${i}) ${this.cars[i].make} ${this.cars[i].model}`
            }
    
            alert(`
            Car Inventory:
            ----------------------
    
    
            ${displayCars}
                `)
        }
    
    
        //see menu
        showMainMenu(){
            return prompt(`
                Main Menu:
                ------------------
                0) Exit menu
                1) Add Car
                2) Delete Car
                3) View All Cars
                `)
        }
    
    
        //start the menu
        start(){
            let selection = this.showMainMenu();
    
            while(selection != 0){
    
                switch(selection){
    
                    case "1": this.addCar();
                    break;
    
                    case "2": this.deleteCar();
                    break;
    
                    case "3": this.viewCars();
                    break;
                    default: selection = 0;
                }
                selection = this.showMainMenu();
            }
            alert("Exiting Menu. Goodbye.");
        }
    
    
    }
    //instantiate the menu and invoke the start method
    
    let menu = new Menu();
    
    menu.start();