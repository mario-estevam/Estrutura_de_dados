

class Pilha{
    constructor( size = 10 ){
        this.maxSize = size;
        this.dados = [];
        this.topo = -1;
    }

    push(dado){
        if (!this.isFull()){
            this.topo++;
            this.dados[this.topo] = dado;
        }else{
            throw new Error("stack overflow");
        }
    }

    pop(){
        if (this.isEmpty()){
            throw new Error("stack underflow");
           
        }else{
            return this.dados[this.topo--];
        }
    }

    isFull(){
        return this.topo===this.maxSize;
    }

    isEmpty(){
        if (this.length() === -1){
            return true;
        }
        return false;
    }

    top(){
        if (!this.isEmpty()){
            return this.dados[this.topo];
        }
    }

    length(){
        return this.topo + 1;        
    }

    clear(){
        this.topo = -1
    }

    toString(){
        let result = "[";
        for(let i =0; i <= this.topo; i++){
            result += this.dados[i]+" "
        }
        result+="]";
        return result;
    }
}

export default Pilha;