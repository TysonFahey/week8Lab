// let creates a cariable. it can be changed

let school = 'Minneapolis college'
console.log(school)
school = 'Saint Paul College'
console.log(school)
school = 'Metro State'
console.log(school)

// Constants can not be changed

const language = 'JavaScript'
console.log(language)
// language = 'Python' // assignment error 


// you may add data in a const
const states = ['Minn', 'wisc', 'Iowa']
// states = ['cali', 'oreg'] // assignment to constant variable error. 
states.push('mich')
console.log(states)

// objest
const address = {
    number: '1501',
    street: 'Henne',
    city: 'MN'
}
// the following will result in errors
// address = 1234
// address = {}
// address = {number: 'oh', street: 'main'}

address.zip = '55403'
console.log(address) // adding new properties or changing existing properties is allowed
