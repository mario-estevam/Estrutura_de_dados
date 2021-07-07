import Pilha from "../src/Questões1e2/PilhaDinamica";

let p;

beforeEach(() => {
			p = new Pilha();
		}
);

test("Inicial é vazia", 
		() =>{
			p.push("dado")
			expect(p.isEmpty()).toBe(false);
		}
)


test("Retirar", 
		() =>{
			p.push("dado")
        	p.pop()
			expect(p.isEmpty()).toBe(true);
		}
)


test("Size", 
		() =>{
            p.push("dado")
			p.push("dado")
			p.push("dado")
			p.push("dado")
			expect(p.length()).toBe(4);
		}
)
