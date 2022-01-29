const init = (): HTMLElement => {
    console.debug('hello!');

    const node = document.createElement('section');
    node.classList.add('gui-toast-group');
    document.firstElementChild?.insertBefore(node, document.body);

    return node;
}

const createToast = (message: string): HTMLOutputElement => {
    const node = document.createElement('output');
    node.innerText = message;
    node.classList.add('gui-toast');
    node.setAttribute('role', 'status');

    return node;
}

const addIntoGroup = (toast: HTMLOutputElement): void => {
    const { matches: motionOK } = window.matchMedia(
        '(prefers-reduced-motion: no-preference)'
    );

    Toaster.children.length && motionOK
        ? flipToast(toast)
        : Toaster.appendChild(toast);
}

// FLIP stands for: First | Last | Invert | Play
const flipToast = (toast: HTMLOutputElement): void => {
    const first = Toaster.offsetHeight;
    Toaster.appendChild(toast);

    const last = Toaster.offsetHeight;
    const invert = last - first;

    Toaster.animate([
        { transform: `translateY(${invert}px)` },
        { transform: `translateY(0)` }
    ], {
        duration: 150,
        easing: 'ease-out'
    });
}

const Toast = (message: string) => {
    const toast = createToast(message);
    addIntoGroup(toast);

    return new Promise<void>(async (resolve) => {
        await Promise.allSettled(
            toast.getAnimations().map((animation) => animation.finished)
        );

        Toaster.removeChild(toast);
        resolve();
    });
}

const Toaster = init();
export default Toast;