export enum SubCategory{
    None,//0
    Female,//1
    Male,//2
    FemaleKid,//3
    MaleKid,//4
    LebasRahati,//5
    SareHami,//6
    Shalvar,//7
    Set,//8
    SaghJorabDastkeshKolah,//9
    PirahanVaLebasMajlesi,//10
    Kapshen,//11
    Sarafon,//12
    Tonik,//13
    Daman,//14
    LebasBale,//15
    KifKafshPaposh,//16
    MayoValebasZir,//17
    Shomiz,//18
    BolozPoliverTishert,//19
    Soishert,//20
    KotVaZhakat,//21
}

export namespace SubCategory {
    export function values() {
        return Object.keys(SubCategory).filter(
            (type) => isNaN(<any>type) && type !== 'values'
        );
    }
}