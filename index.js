const fs = require('fs')

const lista = [
    {
        name: 'banana', 
        length: 1
    },
    {
        name: 'Laranja',
        length: 5
    },
    {
        name: 'ovo',
        length: 2
        
    },
    {
        name: 'cebolinha',
        length: 2
    },
    {
        name: 'limão',
        length: 1
    },
    {
        name: 'nata',
        length: 2
    },
    {
        name: 'mamão',
        length: 1
    },
    {
        name:'colve',
        length: 2
    },
    {
        name: 'sorvete',
        length: 3
    }
]

console.table(lista, ['name', 'length'])

let string = 'quantidade item\n'

lista.forEach((item) => {
    string += `${item.length} : ${item.name}\n` 
})

fs.writeFileSync('lista.txt', string)
