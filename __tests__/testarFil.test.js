import FilaP from "../src/lista2/Fila";

let f;

beforeEach(()=>{
    f = new FilaP(5);
});

test("Instanciação", () =>{
    expect(f.lenght()).toBe(0);
})

test("Enfileirar/desenfileirar", () => {

    f.enqueue(1);
    f.enqueue(2);
    expect(f.dequeue()).toBe(1);
    f.enqueue(3);
    f.enqueue(4);
    expect(f.dequeue()).toBe(2);
});

test("primeiro da fila", ()=> {
    f.enqueue("a");
    f.enqueue("b");
    f.enqueue("c");
    expect(f.front()).toStrictEqual("a");
});

test("conversao para String", () => {
    f.enqueue(10);
    f.enqueue(20);
    f.enqueue(30);
    f.enqueue(40);
    expect(f.toString()).toStrictEqual("[10, 20, 30, 40]");
});
