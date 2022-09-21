export class Usuario{

    constructor(
        public numeroDocumento:string,
        public nombre:string,
        public edad:number,
        public activo: boolean,
        public telefono: string,
        public direccion: string
        ){
    }
}