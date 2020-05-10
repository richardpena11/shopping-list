export const elements = {
    btnNewCategory: 'btn_new_category',
    invalidInput: 'invalid_input',
    errorLabel: '.error_label',
    newCategoryContainer: '.new_category_container',
    active: 'active',
    errorEmpty: '.error_empty',
    errorLong: '.error_long',
    categories: '.categories',
    btnItem: '.btn-item',
    category: '.category',
    itemsList: 'items_list',
    newItem: '.new_item',
    input: '.input',
    itemDelete: '.item_delete',
    item: '.item',
    categoryContainer: 'category_container',
    itemTotal: '.item_total',
    total: '.total',
    itemName: '.item_name',
    cross: 'cross'
}

export const invalidInput = (el, error) => {
    toggleClass(el, elements.invalidInput)
    const select = document.querySelector(error)
    toggleClass(select, elements.active)
}

export const toggleClass = (el, className) => {
    el.classList.add(className);
    setTimeout(() => {
        el.classList.remove(className);
    }, 3000);
}