export const getItems: () => Item[] = () => {
    
    return items.map(item => setPrice(item))
        
}

const setPrice = (item:Item) => {
    
    if(item.price) return item
    
    if(item.ingredients.length > 0)
    {
        const totalPrice = item.ingredients.map(ingredient => {
            const item = setPrice(findItem(ingredient))
            const price = item.price || 0
            return price * ingredient.number
        }).reduce((total, price) => total+price, 0)

        const labor = item.labor || 0
        const extra = item.extra || 0

        return {...item, price: totalPrice + labor + extra}
    }

    return {...item, info:'Missing price', price: 0}
}

const findItem = (ingredient:Ingredient) =>{
    return items.filter(item => item.name === ingredient.name)[0]
}

interface Item
{
    name:string,
    price?:number
    ingredients: Ingredient []
    info?: string
    labor?: number,
    extra?: number
}

interface Ingredient
{
    name:string,
    number:number
}

const items = [
    {
        name: 'Mortar',
        price: 30,
        ingredients: [],
    },
    {
        name: 'Stone',
        price: 10,
        ingredients: [],
    },
    {
        name: 'Plant Fibers',
        price: 1,
        ingredients: [],
    },
    {
        name: 'Wood',
        price: 10,
        ingredients: [],
    },
    {
        name: 'Crushed Iron Ore',
        price: 50,
        ingredients: [],
    },
    {
        name: 'Cast Iron Stove',
        ingredients: [{name: 'Iron Bar', number:8}, {name: 'Lumber', number:8}],
        labor: 500
    },
    {
        name: 'Iron Bar',
        ingredients: [{name: 'Iron Concentrate', number:0.66}],
        labor: 50,
        extra: 50
    },
    {
        name: 'Iron Concentrate',
        ingredients: [{name: 'Crushed Iron Ore', number:5}],
        labor: 40,
        extra: 50
    },
    {
        name: 'Lumber',
        ingredients: [{name: 'Nail', number:4}, {name: 'HewnLog', number:4}],
        labor: 60,
    },
    {
        name: 'HewnLog',
        ingredients: [{name: 'Wood', number:2}],
        labor: 30,
    },
    {
        name: 'Nail',
        ingredients: [{name: 'Iron Bar', number:0.0625}],
        labor: 5,
    },
    {
        name: 'Hand Plow',
        ingredients: [{name: 'Iron Bar', number:10}, {name: 'HewnLog', number:10}, {name: 'Wood Board', number:50}, {name: 'Wooden Wheel', number:1}],
        labor: 100,
    },
    {
        name: 'Wood Board',
        ingredients: [{name: 'HewnLog', number:1}],
        labor: 60,
    },
    {
        name: 'Wooden Wheel',
        ingredients: [{name: 'HewnLog', number:4}],
        labor: 60,
    },
    {
        name: 'Basic Upgrade 4',
        ingredients: [{name: 'Wooden Wheel', number:20}, {name: 'Plant Fibers', number:120}, {name: 'Basic Upgrade 3', number:1}],
        labor: 100,
    },
    {
        name: 'Basic Upgrade 3',
        ingredients: [{name: 'Wood Board', number:20}, {name: 'Plant Fibers', number:80}, {name: 'Basic Upgrade 2', number:1}],
        labor: 100,
    },
    {
        name: 'Basic Upgrade 2',
        ingredients: [{name: 'Mortar', number:20}, {name: 'Mortared Stone', number:20}, {name: 'Basic Upgrade 1', number:1}],
        labor: 100,
    },
    {
        name: 'Basic Upgrade 1',
        ingredients: [{name: 'HewnLog', number:40}],
        labor: 100,
    },
    {
        name: 'Mortared Stone',
        ingredients: [{name: 'Mortar', number:1},{name: 'Stone', number:4}],
        labor: 30,
    },

] as Item[]

