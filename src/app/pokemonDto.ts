export class PokemonDto {
    id : number ;
    nom : string;
    image : string;
    height:number;
    weight:number;

    constructor(id:number,nom:string,image:string,height:number,weight:number){
        this.id = id;
        this.nom = nom;
        this.image = image;
        this.height = height;
        this.weight = weight;
    }
}