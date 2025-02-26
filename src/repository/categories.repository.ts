import knexx from "../config/db.config";

const Insert = async (data: any) => {
    let result = await knexx('categories').insert(data);
    return result;
}

const Update = async (data: any, id: number) => {  
    let result = await knexx('categories').where({id}).update(data);
    return result;
}

const Delete = async (id: number) => {
    let result = await knexx('categories').where({id}).delete();
    return result;
}

const FindByName = async (category_name: string) => {
    let result = await knexx('categories').where({category_name});
    return result;
}

const FindAll = async () => {
    let result = await knexx('categories');
    return result;
}
export { Insert, Update, Delete, FindByName, FindAll };