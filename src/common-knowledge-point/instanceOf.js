class PrimitiveString {
    static [Symbol.hasInstance](x) {
        return typeof x === 'string'
    }
}
const str = 'hello nina'
console.log(str instanceof PrimitiveString)