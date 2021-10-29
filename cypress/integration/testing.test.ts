function add(arr:number[]){
    return arr.reduce((acc,val) => val + acc,0)
}

it('adds things', () => {
   expect(add([1,2])).to.equal(3)
})