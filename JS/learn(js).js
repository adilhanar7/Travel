const test = [
    {
        name:'Aidana',
        age: 15,
    },
    {
        name:'Malika',
        age: 15,
    },
    {
        name: 'Oleg',
        age: 17,
    },
    {
        name:'Beknazar',
        age: 18,
    }
]

const NewTest = test.reduce((acc,obj,index) =>{
    // return  [...acc,{[obj.name]:obj.age}]
    const values = Object.values(test)
    const TestAcc = acc
    return [...TestAcc, ...values, {[obj.name]: obj.age}]
},[])



console.log(NewTest)