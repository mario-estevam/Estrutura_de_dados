import Fila from "../src/Questões1e2/FilaDinamica";

let f;

beforeEach(() => {
	f = new Fila();
}
);

test("Instanciação", () => {
	expect(f.isEmpty()).toBe(true);
	expect(f.length()).toBe(0);
});

test("Completa a fila", () => {
	f.enqueue("A");
	f.enqueue("B");
	f.enqueue("C");
	f.enqueue("D");
	f.enqueue("E");
	f.enqueue("F")
	expect(f.isEmpty()).toBe(false);
	expect(f.length()).toBe(6);
});


test("Retirando dado", () => {
	f.enqueue("A");
	f.enqueue("B");
	f.enqueue("C");
	f.enqueue("D");
	f.enqueue("E");
	f.enqueue("F");

	f.dequeue("F");
	expect(f.isEmpty()).toBe(false);
	expect(f.length()).toBe(5);
});