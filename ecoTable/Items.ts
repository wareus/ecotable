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
        name: 'test',
        price: 12,
        ingredients: [],
    },
    {
        name: 'test2',
        ingredients: [{name: 'test', number:2}],
        labor: 100,
        extra: 100
    },
    {
        name: 'test3',
        ingredients: [{name: 'test2', number:2}],
        labor: 1000,
        extra: 1000
    },
    {
        name: 'test4',
        ingredients: [{name: 'test2', number:1}, {name: 'test', number:2}],
        labor: 1000,
    },

] as Item[]

