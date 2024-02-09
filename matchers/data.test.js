const data = require ('./data')();

test('Object Assignment',()=>{
    expect(data).toEqual({"one": 1, "two" : 2})
})