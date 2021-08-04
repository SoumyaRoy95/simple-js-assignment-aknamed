const problem = require('./problem')

test("returns YES for a sorted columns array", ()=>{
    expect(problem(["abdc", "fghe", "ijkl", "mnpo"])).toBe("YES")
})

test("returns NO for a non sorted columns array", ()=>{
    expect(problem(["xyz", "uwv", "rts"])).toBe("NO")
})

test("returns YES for a null array", ()=>{
    expect(problem([])).toBe("YES")
})