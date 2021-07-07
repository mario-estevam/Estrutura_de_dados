
import Lista from "../Lista";

class PilhaDinamica{
//LIFO 
    constructor(){
        this.l = new Lista();
    }

    push(dado){
        this.l.append(dado);
    }

    pop(){
        this.l.removeLast();
    }

    isEmpty(){
        return this.l.isEmpty();
    }

    length(){
      return  this.l.size();
    }

}

export default PilhaDinamica;