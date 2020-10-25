export enum DeliverTime{
    _9_15,
    _15_20
}

export namespace DeliverTime {
    export function values() {
        return Object.keys(DeliverTime).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}