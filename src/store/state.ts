import authState from './modules/auth/state';
import realmAppState from './modules/realmApp/state';
import toolState from './modules/tools/state';
import dbState from './modules/db/state';

export interface RootState {
  auth: typeof authState;
  realmApp: typeof realmAppState;
  tools: typeof toolState;
  db: typeof dbState;
}
