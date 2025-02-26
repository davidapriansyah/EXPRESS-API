import knexx from "../config/db.config";
const Insert = async (data: any) => {
    let result = await knexx('users').insert(data);
    return result;
}

const Update = async (data: any, id: number) => {
    let result = await knexx('users').where({id}).update(data);
    return result;
}

const Delete = async (id: number) => {
    let result = await knexx('users').where({id}).delete();
    return result;
}

export { Insert, Update, Delete };