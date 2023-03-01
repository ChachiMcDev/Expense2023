// runningtotal = 0
// convert string to array
// find  >
//     count amount of < after a > and multiply by 2
// add to runingtotal
// remove > from array then start over while adding to runningtotal

let runningTotal = 0
const string = '-->-><-><-->-'
const stringa = '>----<'
const stringb = '<<>><'
const stringc = '><<><<>>'
const arrayIt = string.split('')
const arrayIta = stringa.split('')
const arrayItb = stringb.split('')
const arrayItc = stringc.split('')


arrayIt.forEach((val, indx) => {
    if (val === '>') {
        arrayIt.forEach((y, index) => {
            if (y === '<') {
                if (indx < index) {
                    runningTotal += 2
                }
            }
        })

    }
})




runningTotal = 0
arrayIta.forEach((val, indx) => {
    if (val === '>') {
        arrayIta.forEach((y, index) => {
            if (y === '<') {
                if (indx < index) {
                    runningTotal += 2
                }
            }
        })

    }
})



runningTotal = 0
arrayItb.forEach((val, indx) => {
    if (val === '>') {
        arrayItb.forEach((y, index) => {
            if (y === '<') {
                if (indx < index) {
                    runningTotal += 2
                }
            }
        })

    }
})








let wtf = 0
let xcount = 0
let remainder = 0
let ycount = 0
let prevIndex
let newArr = []

//const stringc = '> < < > < < > >' = 12
//const stringc = '><<><<>>'
arrayItc.forEach((x, indx) => {
    if (x === '>') {
        xcount += 1
        console.log(arrayItc.splice(indx, 1))

    }

})
console.log(xcount)



//const stringd = '>><->-<<--<>>' = 22
const stringd = '>><->-<<--<>>'
const arrayItd = stringd.split('')

let xcountd = 0
let ycountd = 0
let huh = 0
let current
let xobj = {}
let yobj = {}
arrayItd.forEach((x, ind) => {
    if (x === '>') {
        return xobj[ind] = x
    }
})

arrayItd.map((x, ind) => {
    if (x === '<') {
        return yobj[ind] = x
    }
})





