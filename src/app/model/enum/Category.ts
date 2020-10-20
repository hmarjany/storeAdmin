export enum Category {
    Wears,
    Food,
    Toddler,
    Child
}

export namespace Category {
    export function values() {
        return Object.keys(Category).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}