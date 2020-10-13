export const getItems: () => Item[] = () => {
    
    return items.map(item => setPrice(item))
        
}

const setPrice = (item:Item) => {
    
    if(item.price) return item
    
    if(item.ingredients.length > 0)
    {
        const totalPrice = item.ingredients.map(ingredient => {
            const item = findItem(ingredient)
            const price = item.price || 0
            return price * ingredient.number
        }).reduce((total, price) => total+price, 0)

        return {...item, price: totalPrice}
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
}

interface Ingredient
{
    name:string,
    number:number
}

const items = [
    {
        name: 'test',
        price: 12,
        ingredients: []
    },
    {
        name: 'test2',
        ingredients: [{name: 'test', number:2}]
    }
] as Item[]

