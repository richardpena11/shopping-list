// Total Controller

export default class Item{
    constructor(name, quantity, price, categoryID){
        this.name = name,
        this.quantity = quantity,
        this.price = price,
        this.id = '',
        this.total = '',
        this.categoryID = categoryID
    }

    addId(){
        this.id = Math.round( Math.random() * 10000000000000 );
    }

    calcTotalItem(data){
        return data.quantity * data.price
    }

}