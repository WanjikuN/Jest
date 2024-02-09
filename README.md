## Install Jest using npm
`npm insatll --save-dev jest`

1. expect().toBe()
- used with identical values

## Expect
- Used along with matchers to assert something about a value
    ### Modifiers
    - .not - does the opposite
    - .resolves - 
    - .toBeCloseTo - floating numbers

## Using matchers
- Used to test values in different ways.
- Use describe to call a couple oftests together.

1. Common Matchers
- toBe() - uses Object.is to test exact equality
- toEqual() -checks the value of an object
    - ignores object keys with `undefined properties`, `undefined array items`, `object type mismatch`
- not -test for the opposite

2. Truthiness
- toBeNull matches only null
- toBeUndefined matches only undefined
- toBeDefined is the opposite of toBeUndefined
- toBeTruthy matches anything that an if statement treats as true
- toBeFalsy matches anything that an if statement treats as false

3. Numbers
4. Strings
- toMatch - used to check strings against regular expressions
   eg .toMatch(/stop/) -like includes

5. arrays and iterables
- toContain - check if an array or iterable contains a particular item

6. Exceptions



