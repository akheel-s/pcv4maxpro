import BSON from 'bson';

export enum UserTypes {
  student,
  stakeholder,
  organizer
}
export interface User {
  _id: BSON.ObjectID;
  firstName?: string;
  lastName?: string;
  email: string;
  phone?: string;
  birthday?: Date;
  gender?: string;
  culture?: string;
  terms?: boolean;
  verifiedPhone?: Date;
  userTypes?: string[];
  participantProgram_ids?: BSON.ObjectID[];
  stakeholderProgram_ids?: BSON.ObjectID[];
  organizerProgram_ids?: BSON.ObjectID[];
}
