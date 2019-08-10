import multiply from './testingExamples';
//function test
describe('multiplyFunction', () => {
    it("multiplys two numbers", () => {
        const expected = 6;
        const actual = multiply.multiply(2,3);
        expect(actual).toBe(expected);
       })
})


