import ordem from "../src/TesteQ8/Questao8teste";
import Lista from "../src/TesteQ8/Lista";
import listaReturn from "../src/TesteQ8/ReturnTeste";

    let ls;

    beforeEach(()=>{
        ls = new Lista();
    });

    test("Ordem numérica", () => {
        let aux;        
        ls.add(new listaReturn("goku", 45));
        ls.add(new listaReturn("Maroleona", 16));
        ls.add(new listaReturn("Peter", 18));
        ls.add(new listaReturn("Batman", 17));
        ls.add(new listaReturn("Noele", 22));      
        aux = new ordem(ls);
        let t = aux.ordemNum();
        expect(t.toString()).toBe("Maroleona 16->Batman 17->Peter 18->Noele 22->goku 45");
    });