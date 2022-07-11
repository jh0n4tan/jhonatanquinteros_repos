import { DataSource } from "typeorm";
import { URL } from "url";
import entities from '../models/entities'
import config from '../config';

const dbUrl = new URL( config.DATABASE_URL );
const routingId = dbUrl.searchParams.get("options");
dbUrl.searchParams.delete("options");

export const AppDataSource = new DataSource({
  type: "cockroachdb",
  url: dbUrl.toString(),
  ssl: true,
  extra: {
    options: routingId
  },
  entities:[entities.Organization,entities.Tribe,entities.Repository,entities.Metrics],
  synchronize:true
});