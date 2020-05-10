// Global App Controller

import Category from './Total/category.js';
import * as CategoryUI from './UI/categoryView.js';
import Item from './Total/item.js';
import * as ItemUI from './UI/itemView.js';
import * as elements from './UI/dom.js';

const data = [  ]
let total = null

const setupEventListener = () => {

    const DOM = elements.elements

    document.getElementById(DOM.btnNewCategory).addEventListener('click', addNewCategory)

    document.querySelector(DOM.categories).addEventListener('click', targetDist)

}

const addNewCategory = () => {

    // 1.- Get input value (UI/category)
        const nameCategory = CategoryUI.getInputCategory(event);

    if (nameCategory){

        // 2.- Update dataCategory (Total/dataCategory)
        data[data.length] = new Category(nameCategory)
        
        // 3.- Set ID
        data[data.length - 1].addId()
        const idCategory = data[data.length - 1].id

        // 4.- Update UI (UI/category)
        CategoryUI.renderCategory(nameCategory, idCategory)

    }
}

const targetDist = e => {

    const target = e.target.classList.value

    if (target === "btn btn-item"){
        addNewItem(e)
    } else if(target === "fas fa-trash"){
        deleteNewItem(e)
    } else if (target === "fas fa-times"){
        deleteNewCategory(e)
    } else if (target === "item" || target === "item_name"){
        crossOutItem(e, target)
    }
}

const addNewItem = e => {

    // 1.- Get input value (UI/category)
    const item = ItemUI.getInputItem(e)

    if(item){

        const index = data.findIndex(el => el.id === item.categoryID)
        const itemsArr = data[index].items

        // 2.- Update data (Total/Data)
        itemsArr[itemsArr.length] = new Item(item.name, item.quantity, item.price, item.categoryID)
        const currentItem = itemsArr[itemsArr.length - 1];
        currentItem.addId()

        // 3.- Set ID
        const idItem = currentItem.id

        // 4.- Calculate Item total
        currentItem.total = currentItem.calcTotalItem(currentItem)

        // 5.- Update UI (UI/category)
        ItemUI.renderItem(item.name, item.quantity, item.price, idItem)  

        // 6.- Calculate category total
        const categoryTotal = data[index].calcTotal(data[index].items)

        // 7.- save category total 
        data[index].total = categoryTotal

        // 8.- Display categoy total
        CategoryUI.renderTotalCategory(categoryTotal, e)

        // 9.- Calculate and save category total
        total = data[index].calcTotal(data)

        // 10.- Display categoy total
        CategoryUI.renderTotal(total, e)
    }
}

const deleteNewItem = e => {

    // Delete UI
    const IDs = ItemUI.deleteItem(e)

    // Delete in data 
    const indexCategory = data.findIndex(el => el.id === IDs.CategoryID)
    const indexItem = data[indexCategory].items.findIndex(el => el.id === IDs.ItemID)

    // Delete category total

    data[indexCategory].total = data[indexCategory].total - data[indexCategory].items[indexItem].total

    data[indexCategory].items.splice(indexItem, 1)

    // Delete category total in UI
    CategoryUI.updateTotalCategory(data[indexCategory].total, e, IDs.CategoryID)

    // Calculate and save category total
    total = data[indexCategory].calcTotal(data)

    // Display category total
    CategoryUI.updateTotal(total, e, IDs.CategoryID)

}

const deleteNewCategory = e => {

    // Delete UI
    const currentID = CategoryUI.deleteCategory(e)
    const index = data.findIndex(el => el.id === currentID)

    // Calculate and save category total
    let currenTotal = data[index].calcTotal(data) 

    total = currenTotal - data[index].total

    // Delete in data 
    data.splice(index, 1)

    // Display category total
    CategoryUI.updateTotal(total, e, currentID)
    
}

const crossOutItem = (e, target) => {
    ItemUI.crossOutItem(e, target)
}

const init = () => {
    data[0] = new Category('Uncategorized')
    setupEventListener()
}

init()
