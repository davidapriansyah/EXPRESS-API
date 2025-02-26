import load from "./env.config"
import knex, { Knex } from "knex"
import knexconfig from "../knexfile"

let configKnex;
if(load.env().APP_FOR === "LOCAL") {
    configKnex = knexconfig.development;
} else if(load.env().APP_FOR === "DEV") {
    configKnex = knexconfig.staging;
} else {
   load.env().APP_FOR === "PRODUCTION"
}
{
    configKnex = knexconfig.production;
}

const knexx = knex(configKnex);

export default knexx;