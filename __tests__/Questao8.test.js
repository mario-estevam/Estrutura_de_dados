import Questao8 from "../src/Questao8L4";
import Lista from "../src/Lista";
import Questao8Pessoa from "../src/ReturnQ8";

    let teste;

    beforeEach(()=>{
        teste = new Lista();
    });

    test("Ordem alfabética", () => {
        let result;        
        teste.add(new Questao8Pessoa("taniro", 45));
        teste.add(new Questao8Pessoa("maria", 16));
        teste.add(new Questao8Pessoa("joao", 18));
        teste.add(new Questao8Pessoa("davi", 17));
        teste.add(new Questao8Pessoa("ana", 22));      
        result = new Questao8(teste);
        let t = result.ordemAlfabetica();
        expect(t.toString()).toBe("ana 22->davi 17->joao 18->maria 16->taniro 45");
    });

    test("Ordem numérica", () => {
        let result;        
        teste.add(new Questao8Pessoa("taniro", 45));
        teste.add(new Questao8Pessoa("maria", 16));
        teste.add(new Questao8Pessoa("joao", 18));
        teste.add(new Questao8Pessoa("davi", 17));
        teste.add(new Questao8Pessoa("ana", 22));      
        result = new Questao8(teste);
        let t = result.ordemNumerica();
        expect(t.toString()).toBe("maria 16->davi 17->joao 18->ana 22->taniro 45");
    });