import Lista from "../Lista"

class FilaDinamica {
//FIFO 
    constructor(){
        this.l = new Lista();
    }

    enqueue(dado){
        this.l.append(dado);
    }

    dequeue(){
        return this.l.removeFirst();

    }

    front(){    
        return this.l.head.proximo.dado;

    }

    isEmpty(){
        return this.l.isEmpty();
    }


    length(){
        return this.l.size();
    }

}

export default FilaDinamica;