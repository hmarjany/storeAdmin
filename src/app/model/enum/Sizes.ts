export enum Sizes{
    ooo,
    oo,
    nb,
    oo1,
    _1_3,
    _3,
    _3_6,
    _6,
    _6_9,
    _9,
    _9_12,
    _12,
    _12_18
}

export namespace Sizes {
    export function values() {
        return Object.keys(Sizes).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}