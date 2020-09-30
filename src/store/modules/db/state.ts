import { Stitch, RemoteMongoClient, RemoteMongoDatabase } from 'mongodb-stitch-browser-sdk';
import Database from '@/@types/database';
import { User } from '../../../generated/graphql';

const client = Stitch.initializeDefaultAppClient(process.env.VUE_APP_REALM_ID);

const state: {
  user: User | null;
  db: RemoteMongoDatabase;
} = {
  user: null,
  db: client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db(Database.Primary)
};
export default state;
