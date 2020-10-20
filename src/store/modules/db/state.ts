import { Stitch, RemoteMongoClient, RemoteMongoDatabase } from 'mongodb-stitch-browser-sdk';
import { User } from '../../../generated/graphql';

const client = Stitch.initializeDefaultAppClient(
  process.env.NODE_ENV === 'production'
    ? process.env.VUE_APP_REALM_ID
    : process.env.VUE_APP_REALM_ID_DEV
);

const state: {
  user: User | null;
  db: RemoteMongoDatabase;
} = {
  user: null,
  db: client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('Primary')
};
export default state;
