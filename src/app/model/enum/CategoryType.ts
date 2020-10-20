export enum CategoryType{
    Shoe,
    UnderWear,
    Wear,
    FemailChild,
    MaleChild
}

export namespace CategoryType {
    export function values() {
        return Object.keys(CategoryType).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}