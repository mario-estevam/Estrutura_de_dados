class Questao3 {
    constructor(){
        this.lista = [];
    }
    append(dado){
        let novaLista = [dado];
        for(let i=0;i<this.lista.length;i++){
            novaLista[i+1] = this.lista[i];
        }
        this.lista = novaLista;
    }

    add(dado){
        this.lista[this.lista.length] = dado;
    }
 
    removeFirst(){
        let result = this.lista[0];
        for(let i=0;i<this.lista.length;i++){
            this.lista[i] = this.lista[i+1];
        }
        this.lista.length - 1;
        return result;

    }


    size(){
        return this.lista.length;
    }
   

}

export default Questao3;