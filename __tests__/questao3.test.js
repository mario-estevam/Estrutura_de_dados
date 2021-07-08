import listaSimples from "../src/Questão3/questao3";

    let l;

    beforeEach(() => {
        l = new listaSimples();
    });

    test("teste de add", ()=>{
        l.add(1);
        l.add(2);
        l.add(3);
        expect(l.removeFirst()).toBe(1);
        
    });

    test("teste de append", ()=>{
        l.append(1);
        l.append(2);
        l.append(3);
        expect(l.removeFirst()).toBe(3);
    });