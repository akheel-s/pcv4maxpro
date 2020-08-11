import authState from './modules/auth/state';
import realmAppState from './modules/realmApp/state';

export interface RootState {
  auth: typeof authState;
  realmApp: typeof realmAppState;
}
