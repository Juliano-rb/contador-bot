const purchase ={
    items : [
        {
            name : '',
            amount: 0,
            cost: 0,
            involved : [
                "Juliano",
                "Rodrigo"
            ]
        }
    ],
    people: [
        'Juliano',
        'Rodrigo',
        'Julio'
    ]
}

function addPeople(people_name){
    if not find people_name then
    purchase.people.push(people_name)
}

function addItem(item_properties, people_involved){
    let item = {
        name : item_properties.name,
        amount : item_properties.amount,
        cost : item_properties.cost,
        involved : people_involved
    }

    purchase.items.push(item)
}

console.log(purchase)

addItem({name:"Leite", amount: 1, cost:5.49}, ["Juliano", "Rodrigo"])

console.log(purchase)