import knexx from "../config/db.config";

const Insert = async (data: any) => {
    let result = await knexx('products').insert(data);
    return result;
}

const Update = async (data: any, id: number) => {
    let result = await knexx('products').where({id}).update(data);
    return result;
}

const Delete = async (id: number) => {
    let result = await knexx('products').where({id}).delete();
    return result;
}

const FindByName = async (product_name: string) => {
    let result = await knexx('products').where({product_name});
    return result;
}

const FindAll = async () => {    
    let result = await knexx('products');
    return result;
}

export { Insert, Update, Delete, FindByName, FindAll}