export enum SubCategory{
    None,
    Female, 
    Male,
    FemaleKid,
    MaleKid
}

export namespace SubCategory {
    export function values() {
        return Object.keys(SubCategory).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}