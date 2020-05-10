import * as elements from './dom.js';

const DOM = elements.elements

export const getInputItem = event => {

    const inputs = event.target.closest(DOM.newItem).querySelectorAll(DOM.input)

    const inputsArr = Array.from( inputs )

    const itemElements = {
        name: inputsArr[0],
        quantity: inputsArr[1],
        price: inputsArr[2],
    }

    const categoryID = parseInt(event.target.closest(DOM.category).parentNode.id)

    const item = {
        name: inputsArr[0].value,
        quantity: parseInt(inputsArr[1].value) ? parseInt(inputsArr[1].value) : 0,
        price: parseInt(inputsArr[2].value) ? parseInt(inputsArr[2].value): 0,
        categoryID
    }

    // Check name empty
    if (item.name) {

        // Check length
        if(item.name.length > 15){

            elements.toggleClass(itemElements.name, DOM.invalidInput)
            
        } else if (item.quantity > 999){

            elements.toggleClass(itemElements.quantity, DOM.invalidInput)

        } else if (item.price > 99999){

            elements.toggleClass(itemElements.price, DOM.invalidInput)

        }else{
            return item
        }
    } else {
        elements.toggleClass (itemElements.name, DOM.invalidInput)
    }

}

export const renderItem = (name, quantity, price, id) => {
    const markup = `
        <div class="item" id="${id}">
            <span class="item_name">${name}</span>
            <div class="item_info">
                <span class="item_amount">x${quantity}</span>
                <span class="item_price">$${price}</span>
                <span class="item_delete"><i class="fas fa-trash"></i></span>
            </div>
        </div>
    `

    const el = event.target.closest('.new_item').previousElementSibling.lastElementChild

    el.insertAdjacentHTML('beforeend', markup)
}

export const deleteItem = (e) => {
    const currentItem = e.target.closest(DOM.item)
    const ItemID = parseInt(currentItem.id)
    const CategoryID = parseInt(event.target.closest(DOM.category).parentNode.id)

    currentItem.parentNode.removeChild(currentItem)

    return {
        ItemID,
        CategoryID
    }
}

export const crossOutItem = (e, target) => {

    let currentItem = null

    if (target === "item"){
        currentItem = e.target.querySelector(DOM.itemName)
    } else {
        currentItem = e.target
    }

    console.log(currentItem)

    currentItem.classList.toggle(DOM.cross)
}
