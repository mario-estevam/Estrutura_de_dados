import FilaCircular from "../../src/Fila/FilaCircular";

let f;

beforeEach(() => {
	f = new FilaCircular(5);
});

test("Instanciação", () => {
	expect(f.isEmpty()).toBe(true);
	expect(f.isFull()).toBe(false);
	expect(f.lenght()).toBe(0);
	expect(() => {
		f.dequeue();
	}).toThrowError("queue underflow");
});

test("Completa a fila", () => {
	f.enqueue("A");
	f.enqueue("B");
	f.enqueue("C");
	f.enqueue("D");
	f.enqueue("E");
	expect(f.isEmpty()).toBe(false);
	expect(f.isFull()).toBe(true);
	expect(f.lenght()).toBe(5);
	expect(() => {
		f.enqueue("F");
	}).toThrowError("queue overflow");
	f.dequeue();
	expect(f.front()).toBe("B");
	expect(f.lenght()).toBe(4);
	expect(f.isFull()).toBe(false);
});