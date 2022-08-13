/**
 * 
 * @param {string} selector
 * @param {HTMLElement} node = document.doby
 * @returns {HTMLElement}
 */
export function $(selector, node=document.body){
    return node.querySelector(selector)
}

/**
 * 
 * @param {string} selector
 * @param {HTMLElement} node = document.doby
 */
export function $$(selector, node=document.body){
    return [...node.querySelectorAll(selector)]
}