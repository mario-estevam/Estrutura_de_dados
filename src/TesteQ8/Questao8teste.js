import Lista from "./Lista";

 class Questao8{

    constructor(lista){
        this.lista = new Lista();
        while(lista.size() > 0){
            this.lista.add(lista.removeFirst())
        } 
    }


    ordemNum(){
        let aux = new Lista();
        aux.add(this.lista.getAt(0));
        for(let i=1;i<this.lista.size();i++){            
            let tam = aux.size();
            for(let j = 0;j<tam;j++){
                if(this.lista.getAt(i).idade <= aux.getAt(j).idade){
                    aux.addAt(j, this.lista.getAt(i));
                    break;
                }else if(j == tam-1){
                    aux.append(this.lista.getAt(i));
                }
            }            
        }
        return aux;
    }

}
export default Questao8