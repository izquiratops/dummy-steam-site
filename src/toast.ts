const init = (): HTMLElement => {
    const node = document.createElement('section');
    node.classList.add('gui-toast-group');

    const { firstElementChild } = document;
    if (firstElementChild) {
        firstElementChild.insertBefore(node, document.body);
    } else {
        throw Error('Can\'t find any element to be inserted before.')
    }

    return node;
}

const create = (message: string): HTMLOutputElement => {
    const node = document.createElement('output');
    node.innerText = message;
    node.classList.add('gui-toast');
    node.setAttribute('role', 'status');

    return node;
}

const addIntoGroup = (toast: HTMLOutputElement): void => {
    // ...
}

const Toast = init()
export default Toast;