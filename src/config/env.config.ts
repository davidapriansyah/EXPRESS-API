import dotenv from 'dotenv';

interface EnvInterface {
    APP_PORT: number;
    APP_FOR: string;
    DB_HOST: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
}

const env = ():EnvInterface => {
    let obj = {}
    try {
       let loadEnv = dotenv.config();
        if(!loadEnv) {throw new Error('Fail to Load Env')}

        let appPort= process.env.APP_PORT;
        if(!appPort) {throw new Error('Fail to Load Env APP_PORT')}

        let appFor = process.env.APP_FOR;
        if(!appFor) {throw new Error('Fail to Load Env APP_FOR')}

        let dbHost = process.env.DB_HOST;
        if(!dbHost) {throw new Error('Fail to Load Env DB_HOST')}

        let dbPort = process.env.DB_PORT;
        if(!dbPort) {throw new Error('Fail to Load Env DB_PORT')}

        let dbUser = process.env.DB_USER;
        if(!dbUser) {throw new Error('Fail to Load Env DB_USER')}

        let dbPassword = process.env.DB_PASSWORD;
        if(!dbPassword) {throw new Error('Fail to Load Env DB_PASSWORD')}

        let dbName = process.env.DB_NAME;   
        if(!dbName) {throw new Error('Fail to Load Env DB_NAME')}


    } catch (error) {
        
    }

    return obj as EnvInterface;
}

export default {env};