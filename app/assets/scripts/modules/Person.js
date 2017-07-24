class Person{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }

    greet() {
        console.log("INCROYABLE LE FICHIER EST LA ET FONCTIONNE MEME EN LE CHANGEANT");
    }

}
//Ici c'est la manière nouvelle ECMA 6 de faire notamment avec l'introduction des classes.

export default Person;

//ES5 méthode d'exportation : module.exports=Person;
