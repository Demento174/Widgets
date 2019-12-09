export function prevAll(element) {
    let result = [];

    while (element = element.previousElementSibling)
    {
        result.push(element);
    }

    return result;
}

export function nextAll(element) {
    let result = [];

    while (element = element.nextElementSibling)
    {
        result.push(element);
    }

    return result;
}

export function getHashKey(selector = '[data-hash-key]',attribute = 'data-hash-key') {
    return document.querySelector(selector).getAttribute(attribute);
}

export function queryElement(selectorOrElement) {
    let element;
    if(typeof selectorOrElement === 'string')
    {
        element = document.querySelector(selectorOrElement)
    }else
        {
            element = selectorOrElement;
        }

    return element;
}
