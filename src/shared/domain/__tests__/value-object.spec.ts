import { ValueObject } from "../value-object";


class TestValueObject extends ValueObject {
    constructor(public readonly value: string) {
        super();
    }
}


describe("ValueObject unit tests", () => {

    test("should be equal when all properties are the same", () => {
        const vo1 = new TestValueObject("test");
        const vo2 = new TestValueObject("test");
        expect(vo1.equals(vo2)).toBe(true);
    });

    test("should not be equal when properties are different", () => {
        const vo1 = new TestValueObject("test");
        const vo2 = new TestValueObject("different");
        expect(vo1.equals(vo2)).toBe(false);
    });
});
