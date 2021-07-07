import Questao from '../src/Lista'

let ls;

beforeEach(() => {
    ls = new Questao();
}
);


test("instanciar",
		() => {
			expect(ls.isEmpty()).toBe(true);
		}
)

test("Substring",
		() => {
			ls.appendString("TANIRO")
            console.log(ls.substring(1,3))
		}
)


