class node {
    constructor(dado){
        this.dado = dado;
        this.proximo = null;
    }
}
class Lista{
        constructor(){
            this.head = new node();
        }

        add(dado){
            let novo_no = new node(dado);
            novo_no.proximo = this.head.proximo;
            this.head.proximo = novo_no;
        }

        append(dado){   // diferente do add esse método append adiciona no final 
            let novo_no = new node(dado); // instaciamos um novo nó
            if(this.isEmpty()){ // se a lista estiver vazia a gente já adiciona ele
                this.head.proximo = novo_no;
            } else { // mas caso ela esteja cheia...
                let no = this.head.proximo; // nós temos que ter essa variável auxiliar que recebe o proximo valor depois da cabeça
                while(no.proximo != null){  // iniciamos esse laço e enquanto o valor do no.proximo n for nulo
                    no = no.proximo; // percorremos pegando o valor do proximo e alocando em no, 
                } // quando por fim o no.proximo for nulo
                no.proximo = novo_no; // pegamos essa posição e adicionamos um novo_no;
            }
            }

      
            appendString(string){
                for(let i=0; i<string.length; i++){
                    this.append(string[i]);
                }
            }
        

            
	addAt(posicao, dado) {

		if (posicao >= this.size()) {
			//adicionando no final
			this.append(dado);
		} else {
			if (posicao <= 0) {
				//adicionando no inicio
				this.add(dado);
			} else {
				let novo_no = new Node(dado);
				let i = 0;

				let anterior = this.head;
				let atual = this.head.proximo;

				while (i != posicao) {
					//iteração
					anterior = atual;
					atual = atual.proximo;
					i++;
				}
				anterior.proximo = novo_no;
				novo_no.proximo = atual;
			}

		}
	}
        
            getAt(index){
		
                if (this.head.proximo == null) {
                    return null;
                } else {
                    let cont = 0;
                    let atual = this.head.proximo;
                    while (cont <= index) {
                        if (cont == index) {
                            return atual.dado;
                        }
                        //iteração
                        atual = atual.proximo;
                        cont++;
                    }
                }
                return null;
            }


            substring(A, B){
                let listaux;
                listaux = new Lista();
                for(let i= A; i< B; i++){
                    let auxiliar;
                    auxiliar = this.removeAt(i); // o elemento que remover naquela posição do indice, eu adiciona na minha auxiliar
                    listaux.append(auxiliar);
                }
                return listaux.toString();
                
            }

        removeAt(index) {
            if(this.head.proximo == null) {
                return null
            }
            else {
                let cont = 0
                let atual = this.head.proximo
                while (cont <= index) {
                    if(cont == index) {
                        return atual.dado
                    }
    
                    atual = atual.proximo
                    cont++
                }
            }
            return null
        }

        removeLast(){
           let no_a = this.head; // uma variável auxiliar "no_a", recebe a cabeça
           let no_b = this.head.proximo; // uma variável auxiliar "no_b" recebe o valor posterior da cabeça ou seja "this.head.proximo"

                while(no_b.proximo != null){ // enquanto esse valor de "no_b"  não apontar pro nulo, o laço vai ser executado pra percorrer a lista
                    no_a = no_b; // a variável auxiliar "no_a" recebe esse valor de "no_b" pra poder ir andando na lista 
                    no_b=no_b.proximo; // a variável no_b recebe o proximo valor ou seja no_b.proximo e assim prossegue até que no_b.proximo seja nulo
                }
                no_a.proximo = null; // e então pegamos o no_a.proximo que no caso seria o ultimo da lista e excluimos
            
        } 
        
        size(){
            let contador = 0 // uma variável contador é iniciada com 0
            let aux = this.head.proximo // uma variável auxiliar ("aux"), recebe o proximo elemento da cabeça
    
            while(aux !==  null ) { // enquanto essa variável auxiliar não for nula, ou seja, enquanto ela não apontar pro nulo, ela vai percorrer a lista
                aux = aux.proximo // ela sempre vai guardar o proximo valor do dela, para que posssa percorrer tudo
                contador ++ // a variável contador vai contando quantos elementos tem na lista
            }
    
            return contador
        }

        removeFirst(){
            if(this.isEmpty()){
                throw new Error;
            } else {
                let first = this.head.proximo;
                this.head.proximo = first.proximo;
            }
        }

        isEmpty() {
            if(this.head.proximo === null){
                return true;
            } else {
                return false;
            }
        }

            
        toString() {
            let aux = this.head.proximo;
            let result = "";
    
            while (aux !== null) {
                result += aux.dado + (aux.proximo ? " " : "");
                aux = aux.proximo;
            }
    
            return result;
        }


    }

    export default Lista;