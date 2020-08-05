const autos = [
    {
        Marca: 'Peugeot',
        Modelo: '206',
        Puertas: '4', 
        Precio: '$200.000,00' 
    },
    {
        Marca: 'Honda' ,
        Modelo: 'Titan' ,
        Cilindrada: '125c' ,
        Precio: '$60.000,00'
    },
    {
        Marca: 'Peugeot',
        Modelo: '208',
        Puertas: '5',
        Precio:'$250.000,00'  
    },
    {
        Marca: 'Yamaha',
        Modelo: 'YBR',
        Cilindrada: '160c',
        Precio: '$80.500,50 '
    }
]

class OnReady {

    constructor( cars ){
        this.cars = cars
    }
    
    theMostCarSpensive(){
        let mostSpensive = this.cars[0];
        let price = parseInt(this.cars[0].Precio.substring(1));
        this.cars.map((car)=>{
            let carPrice = parseInt(car.Precio.substring(1))
             
            if(price < carPrice){
                mostSpensive = car;
                price = carPrice
            }
        })
        const text = `Vehiculo mas caro ${ mostSpensive.Marca} ${mostSpensive.Modelo}`
        console.log(text) 
    }

    theMostCarsCheap(){
        let mostCheap = this.cars[0];
        let price = parseInt(this.cars[0].Precio.substring(1));
        this.cars.map((car)=>{
            let carPrice = parseInt(car.Precio.substring(1))
            
            if(price > carPrice){
                mostCheap = car;
                price = carPrice
            }
        })
        const text = `Vehiculo mas barato ${ mostCheap.Marca} ${mostCheap.Modelo}`
        console.log(text) 
    }

    findByCharacter(character){
        let carsWhitcharacter=[];

        this.cars.find((car)=>{
            if(car.Modelo.includes(character)){
                carsWhitcharacter.push(car)
            }
        })

        for(let i = 0 ; i < carsWhitcharacter.length;i++){
             console.log(`Vehículo que contiene en el modelo el caracter ${character}: ${carsWhitcharacter[i].Marca} ${carsWhitcharacter[i].Modelo} ${carsWhitcharacter[i].Precio}`)
        }
    }

    orderDecs(){ 
        
        const list = this.cars.sort(function(a, b){
            return  parseInt(b.Precio.substring(1)) -  parseInt(a.Precio.substring(1));
        })

        console.log(`Vehiculos ordenados de mayor a menor`)
        for(let i = 0 ; i< list.length;i++){
          console.log(list[i].Modelo)  
        }
        
    }

}


new OnReady(autos).theMostCarSpensive()
console.log('=======================')
new OnReady(autos).theMostCarsCheap()
console.log('=======================')
new OnReady(autos).findByCharacter('Y')
console.log('=======================') 
new OnReady(autos).orderDecs()