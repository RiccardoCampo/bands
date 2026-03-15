import { ColorOrder } from "./config";

export function debounce<T extends (...args: any[]) => any>(func: T, wait: number) {
    let timeout: ReturnType<typeof setTimeout> | undefined;

    return function(this: any, ...args: Parameters<T>): void {
        const context = this;

        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

export function getColor (index: number, colorOffset: number) {
    return ColorOrder[(Math.floor(index) + colorOffset) % ColorOrder.length];
}

export function addColors (array: any[], colorOffset: number) {            
    return array.map((element, index) => ({...element, color: getColor(index, colorOffset)}))
}
