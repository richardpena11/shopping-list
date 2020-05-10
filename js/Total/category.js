// Total Controller

export default class Category{
    constructor(name){
        this.name = name,
        this.total= '',
        this.id = 1,
        this.items = []
    }

    addId(){
        this.id = Math.round( Math.random() * 10000000 );
    }

    deleteCategory(e){
        const currentItem = e.target.closest('.category_container')
        
        const ItemID = parseInt(currentItem.id)
    
        currentItem.parentNode.removeChild(currentItem)
    
        return {
    
            ItemID
        }
    }

    calcTotal(el){
        let itemsTotalArr = []
        let categoryTotal = null

        el.forEach(element => {
            itemsTotalArr.push(element.total)
        });

        
        itemsTotalArr.forEach((element) => {
            if(element){
                categoryTotal += element
            }
        })
        
        return categoryTotal
    }

}

