## Install Jest using npm
`npm insatll --save-dev jest`

1. expect().toBe()
- used with identical values

## Using matchers
- Used to test values in different ways

1. Common Matchers
- toBe() - uses Object.is to test exact equality
- toEqual() -checks the value of an object
    - ignores object keys with `undefined properties`, `undefined array items`, `object type mismatch`
- not -test for the opposite

2. Truthiness
3. Numbers
4. Strings
5. arrays and iterables
6. Exceptions

