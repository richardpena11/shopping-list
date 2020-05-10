// UI Controller
import * as elements from './dom.js';

const DOM = elements.elements

export const getInputCategory = event => {

    // Check empty input
    const inputNewCategory = event.target.previousElementSibling

    if (inputNewCategory.value){

        // Check input length 
        if(inputNewCategory.value.length <= 15){
            return inputNewCategory.value
        } else{
            // Show Invalid input
            elements.invalidInput(inputNewCategory, DOM.errorLong)
        }

    } else {
        // Show Invalid input
        elements.invalidInput(inputNewCategory, DOM.errorEmpty);
    }

}

export const renderCategory = (name, id) => {
    const markup = `
        <div class="category_container" id="${id}">
            <div class="category">
                <div class="delete_category"><i class="fas fa-times"></i></div>
                <div class="items_list">
                    <h2 class="items_title">${name}</h2>
                    <div class="items"></div>
                </div>
                <div class="input_container new_item">
                    <input type="text" class="input input_new_item" placeholder="New item">
                    <input type="number" min="0" class="input input_quantity" placeholder="Qty">
                    <input type="number" min="0" class="input input_price" placeholder="$">
                    <button type="submit" class="btn btn-item">Submit</button>
                </div>
            </div>
        </div>
    `

    document.querySelector(DOM.categories).insertAdjacentHTML('afterbegin', markup)
}

export const deleteCategory = (e) => {
    const currentCategory = e.target.closest('.category_container')
    const currentID = parseInt(currentCategory.id)


    currentCategory.parentNode.removeChild(currentCategory)

    return currentID
}

export const renderTotalCategory = (total, e) => {

    const element = e.target.closest(DOM.category).parentNode

    if(element.querySelector(DOM.itemTotal)) {
        element.removeChild(element.querySelector(DOM.itemTotal))   
    }

    const markup = `
        <div class="item_total">
            <span>Total: $${total}</span>
        </div>
    `

    element.insertAdjacentHTML('beforeend', markup)
}

export const renderTotal = (total, e) => {

    const element = e.target.closest(DOM.category).parentNode.parentNode.parentNode
    
    if(element.querySelector(DOM.total)) {
        element.removeChild(element.querySelector(DOM.total))
    }

    const markup = `
        <div class="total">
            <span>$${total}</span>
        </div>
    `

    element.insertAdjacentHTML('beforeend', markup)
}

export const updateTotalCategory = (total, e, categoryID) => {

    const element = document.getElementById(categoryID)
    
    if(element.querySelector(DOM.itemTotal)) {
        element.removeChild(element.querySelector(DOM.itemTotal))
    }

    const markup = `
    <div class="item_total">
        <span>Total: $${total}</span>
    </div>
    `

    element.insertAdjacentHTML('beforeend', markup)
}

export const updateTotal = (total, e, categoryID) => {

    const element = document.querySelector('.container')

    if(element.querySelector(DOM.total)) {
        element.removeChild(element.querySelector(DOM.total))
    }

    if(total){

        const markup = `
        <div class="total">
            <span>$${total}</span>
        </div>
        `
        element.insertAdjacentHTML('beforeend', markup)
        
    }
    
}

export const clearInput = () => {

    const inputs = document.getElementsByClassName(DOM.input)

    const inputsarr = Array.from(inputs)

    inputsarr.forEach(element => {
        element.value = ''
    });

}



