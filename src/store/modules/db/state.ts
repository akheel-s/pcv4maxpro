import { Stitch, RemoteMongoClient, RemoteMongoDatabase } from 'mongodb-stitch-browser-sdk';
import Database from '@/@types/database';
import { User } from '../../../@types/user.d';

const client = Stitch.initializeDefaultAppClient('');

const state: {
  user: User | null;
  db: RemoteMongoDatabase;
} = {
  user: null,
  db: client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db(Database.Primary)
};
export default state;
