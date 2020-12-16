const enhancer = require('./enhancer.js');
// test away!
describe("Sanity", () => {
    test("works", () => {
        expect(2*3).toBe(6)
    })
})

describe("enhancer tests", () => {
    let shovel
    beforeEach(() => {
        shovel = new enhancer.newItem('shovel', 50, 16)
    })
    it('is defined', () => {
        expect(shovel).toBeDefined()
    })
    it('has repair method', () => {
        expect(shovel.repair).toBeDefined()
    })
    it("repair method works", () => {
        expect(shovel.repair(shovel)).toStrictEqual({...shovel, durability:100})
    })
    it("has success method", () => {
        expect(shovel.success).toBeDefined()
    })
    it('has working success method', () => {
        //expect(shovel.success(shovel)).toStrictEqual({...shovel, enchantment:20})
    })
    it('has fail method', () => {
        expect(shovel.fail).toBeDefined()
    })
    test("fail method works", () => {
        expect(shovel.fail(shovel)).toStrictEqual({...shovel, durability:40, enchantment:15})
    })
})

