import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
  /** The `DateTime` scalar type represents a DateTime. The DateTime is serialized as an RFC 3339 quoted string */
  DateTime: any;
};

export type ParentPortfolioQueryInput = {
  email?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  participantEmail_ne?: Maybe<Scalars['String']>;
  homeAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_lte?: Maybe<Scalars['String']>;
  participantEmail_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  email_exists?: Maybe<Scalars['Boolean']>;
  participantEmail_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<ParentPortfolioQueryInput>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<ParentPortfolioQueryInput>>;
  participantEmail_gt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  homeAddress_ne?: Maybe<Scalars['String']>;
  homeAddress_gt?: Maybe<Scalars['String']>;
  participantEmail?: Maybe<Scalars['String']>;
  homeAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  email_lt?: Maybe<Scalars['String']>;
  homeAddress_lte?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  homeAddress?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  participantEmail_lt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  participantEmail_gte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  homeAddress_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  homeAddress_exists?: Maybe<Scalars['Boolean']>;
  homeAddress_gte?: Maybe<Scalars['String']>;
  participantEmail_lte?: Maybe<Scalars['String']>;
  participantEmail_exists?: Maybe<Scalars['Boolean']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export enum TeacherPortfolioSortByInput {
  SchooladdressAsc = 'SCHOOLADDRESS_ASC',
  SchooladdressDesc = 'SCHOOLADDRESS_DESC',
  SchooldistrictAsc = 'SCHOOLDISTRICT_ASC',
  SchooldistrictDesc = 'SCHOOLDISTRICT_DESC',
  SchoolnameAsc = 'SCHOOLNAME_ASC',
  SchoolnameDesc = 'SCHOOLNAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type TransactionReferralInsertInput = {
  sentTo?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type ParentPortfolioUpdateInput = {
  homeAddress_unset?: Maybe<Scalars['Boolean']>;
  participantEmail?: Maybe<Scalars['String']>;
  participantEmail_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  homeAddress?: Maybe<Scalars['String']>;
};

export type StudentPortfolioHome = {
  __typename?: 'StudentPortfolioHome';
  /** @deprecated  */
  address?: Maybe<Scalars['String']>;
  /** @deprecated  */
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
  /** @deprecated  */
  eventLog?: Maybe<Array<Maybe<UserEventLog>>>;
  /** @deprecated  */
  firstName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  lastName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  profileImg?: Maybe<Scalars['String']>;
  /** @deprecated  */
  stripeId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  /** @deprecated  */
  deletedCount: Scalars['Int'];
};

export type StudentPortfolioUpdateInput = {
  school_unset?: Maybe<Scalars['Boolean']>;
  guardian?: Maybe<StudentPortfolioGuardianUpdateInput>;
  school?: Maybe<StudentPortfolioSchoolUpdateInput>;
  home_unset?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  date_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  grade?: Maybe<Scalars['String']>;
  home?: Maybe<StudentPortfolioHomeUpdateInput>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  ethnicity_unset?: Maybe<Scalars['Boolean']>;
  guardian_unset?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['String']>;
  gender_unset?: Maybe<Scalars['Boolean']>;
  grade_unset?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioInsertInput = {
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  guardian?: Maybe<StudentPortfolioGuardianInsertInput>;
  home?: Maybe<StudentPortfolioHomeInsertInput>;
  school?: Maybe<StudentPortfolioSchoolInsertInput>;
  _id?: Maybe<Scalars['ObjectId']>;
  date?: Maybe<Scalars['String']>;
};

export type StudentPortfolioQueryInput = {
  grade_lte?: Maybe<Scalars['String']>;
  gender_ne?: Maybe<Scalars['String']>;
  ethnicity_exists?: Maybe<Scalars['Boolean']>;
  gender_lte?: Maybe<Scalars['String']>;
  grade_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<StudentPortfolioQueryInput>>;
  school?: Maybe<StudentPortfolioSchoolQueryInput>;
  home?: Maybe<StudentPortfolioHomeQueryInput>;
  guardian?: Maybe<StudentPortfolioGuardianQueryInput>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  ethnicity_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  school_exists?: Maybe<Scalars['Boolean']>;
  grade_ne?: Maybe<Scalars['String']>;
  ethnicity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_exists?: Maybe<Scalars['Boolean']>;
  date_ne?: Maybe<Scalars['String']>;
  grade_lt?: Maybe<Scalars['String']>;
  date_gte?: Maybe<Scalars['String']>;
  date_gt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<StudentPortfolioQueryInput>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  date_lte?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  grade?: Maybe<Scalars['String']>;
  grade_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  home_exists?: Maybe<Scalars['Boolean']>;
  gender_lt?: Maybe<Scalars['String']>;
  gender_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_gte?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  grade_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  gender_gt?: Maybe<Scalars['String']>;
  date_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  guardian_exists?: Maybe<Scalars['Boolean']>;
  grade_gte?: Maybe<Scalars['String']>;
  date_lt?: Maybe<Scalars['String']>;
};

export type StudentPortfolioHomeInsertInput = {
  address?: Maybe<Scalars['String']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StudentPortfolio = {
  __typename?: 'StudentPortfolio';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  date?: Maybe<Scalars['String']>;
  /** @deprecated  */
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated  */
  gender?: Maybe<Scalars['String']>;
  /** @deprecated  */
  grade?: Maybe<Scalars['String']>;
  /** @deprecated  */
  guardian?: Maybe<StudentPortfolioGuardian>;
  /** @deprecated  */
  home?: Maybe<StudentPortfolioHome>;
  /** @deprecated  */
  school?: Maybe<StudentPortfolioSchool>;
};

export type UserEventLogInsertInput = {
  event?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type TransactionUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  referral?: Maybe<Array<Maybe<TransactionReferralUpdateInput>>>;
  referral_unset?: Maybe<Scalars['Boolean']>;
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLogUpdateInput>>>;
  tokenLog_unset?: Maybe<Scalars['Boolean']>;
};

export type SendReferalInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ObjectId'];
};

export type DefaultPayload = {
  __typename?: 'DefaultPayload';
  /** @deprecated  */
  status: Scalars['String'];
};

export type SendTokensInput = {
  sender_id?: Maybe<Scalars['ObjectId']>;
  recipient_id?: Maybe<Scalars['ObjectId']>;
  recipient_email?: Maybe<Scalars['String']>;
  token_ids?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type SendTokensTransactionRecipient = {
  __typename?: 'SendTokensTransactionRecipient';
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
  /** @deprecated  */
  firstName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  lastName?: Maybe<Scalars['String']>;
};

export type TokenEventLogQueryInput = {
  event_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_ne?: Maybe<Scalars['String']>;
  created_exists?: Maybe<Scalars['Boolean']>;
  created_lt?: Maybe<Scalars['DateTime']>;
  created_lte?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<TokenEventLogQueryInput>>;
  event_gte?: Maybe<Scalars['String']>;
  event_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<TokenEventLogQueryInput>>;
  event_gt?: Maybe<Scalars['String']>;
  event_lte?: Maybe<Scalars['String']>;
  event_lt?: Maybe<Scalars['String']>;
  created_gte?: Maybe<Scalars['DateTime']>;
  created_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  created_ne?: Maybe<Scalars['DateTime']>;
  event_exists?: Maybe<Scalars['Boolean']>;
  created_gt?: Maybe<Scalars['DateTime']>;
  created_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  created?: Maybe<Scalars['DateTime']>;
};

export enum TransactionSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SchoolPortfolioSortByInput {
  DistrictaddressDesc = 'DISTRICTADDRESS_DESC',
  SchooldistrictAsc = 'SCHOOLDISTRICT_ASC',
  StakeholderAsc = 'STAKEHOLDER_ASC',
  StakeholderaccessDesc = 'STAKEHOLDERACCESS_DESC',
  DistrictaddressAsc = 'DISTRICTADDRESS_ASC',
  SchooldistrictDesc = 'SCHOOLDISTRICT_DESC',
  StakeholderDesc = 'STAKEHOLDER_DESC',
  StakeholderaccessAsc = 'STAKEHOLDERACCESS_ASC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  /** @deprecated  */
  matchedCount: Scalars['Int'];
  /** @deprecated  */
  modifiedCount: Scalars['Int'];
};

export type UserEventLogUpdateInput = {
  event?: Maybe<Scalars['String']>;
  event_unset?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_unset?: Maybe<Scalars['Boolean']>;
};

export type Token = {
  __typename?: 'Token';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  customer_id?: Maybe<Scalars['String']>;
  /** @deprecated  */
  eventLog?: Maybe<Array<Maybe<TokenEventLog>>>;
  /** @deprecated  */
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  owner_id?: Maybe<Scalars['ObjectId']>;
};

export type TransactionReferral = {
  __typename?: 'TransactionReferral';
  /** @deprecated  */
  sentTo?: Maybe<Scalars['String']>;
  /** @deprecated  */
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type StudentPortfolioHomeQueryInput = {
  address_lte?: Maybe<Scalars['String']>;
  address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  address_ne?: Maybe<Scalars['String']>;
  language_exists?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  address_gt?: Maybe<Scalars['String']>;
  address_lt?: Maybe<Scalars['String']>;
  address_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  language_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_gte?: Maybe<Scalars['String']>;
  language_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserQueryInput = {
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLog_in?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  email?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_gte?: Maybe<Scalars['String']>;
  stripeId_lt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  stripeId_exists?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  profileImg_lt?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  lastName_ne?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<UserQueryInput>>;
  userTypes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<UserQueryInput>>;
  firstName_lt?: Maybe<Scalars['String']>;
  stripeId_gte?: Maybe<Scalars['String']>;
  profileImg_ne?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  profileImg_exists?: Maybe<Scalars['Boolean']>;
  lastName_lt?: Maybe<Scalars['String']>;
  profileImg_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  userTypes_exists?: Maybe<Scalars['Boolean']>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  lastName_gt?: Maybe<Scalars['String']>;
  profileImg_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLog?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  profileImg_lte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  email_ne?: Maybe<Scalars['String']>;
  profileImg_gt?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  firstName_gte?: Maybe<Scalars['String']>;
  stripeId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_lte?: Maybe<Scalars['String']>;
  profileImg_gte?: Maybe<Scalars['String']>;
  firstName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  email_lte?: Maybe<Scalars['String']>;
  email_lt?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  email_gte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  lastName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_ne?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  stripeId_lte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  stripeId_gt?: Maybe<Scalars['String']>;
  firstName_ne?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  userTypes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLog_nin?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  firstName_lte?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
};

export enum UserSortByInput {
  FirstnameDesc = 'FIRSTNAME_DESC',
  ProfileimgAsc = 'PROFILEIMG_ASC',
  StripeidAsc = 'STRIPEID_ASC',
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  ProfileimgDesc = 'PROFILEIMG_DESC',
  StripeidDesc = 'STRIPEID_DESC'
}

export type TeacherPortfolioUpdateInput = {
  schoolDistrict_unset?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  schoolAddress?: Maybe<Scalars['String']>;
  schoolAddress_unset?: Maybe<Scalars['Boolean']>;
  schoolDistrict?: Maybe<Scalars['String']>;
};

export type TokenInsertInput = {
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  customer_id?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<TokenEventLogInsertInput>>>;
};

export type StudentPortfolioGuardianInsertInput = {
  email?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
};

export type TeacherPortfolioInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  schoolAddress?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolQueryInput = {
  OR?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  district_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_exists?: Maybe<Scalars['Boolean']>;
  name_lt?: Maybe<Scalars['String']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  district_lte?: Maybe<Scalars['String']>;
  district_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  name_lte?: Maybe<Scalars['String']>;
  district_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  district?: Maybe<Scalars['String']>;
  district_gt?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
  district_gte?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  district_ne?: Maybe<Scalars['String']>;
};

export type StudentPortfolioGuardian = {
  __typename?: 'StudentPortfolioGuardian';
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
  /** @deprecated  */
  relationship?: Maybe<Scalars['String']>;
};

export enum StudentPortfolioSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  GradeAsc = 'GRADE_ASC',
  GradeDesc = 'GRADE_DESC'
}

export type TeacherPortfolio = {
  __typename?: 'TeacherPortfolio';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  schoolAddress?: Maybe<Scalars['String']>;
  /** @deprecated  */
  schoolDistrict?: Maybe<Scalars['String']>;
  /** @deprecated  */
  schoolName?: Maybe<Scalars['String']>;
};

export enum ParentPortfolioSortByInput {
  HomeaddressAsc = 'HOMEADDRESS_ASC',
  HomeaddressDesc = 'HOMEADDRESS_DESC',
  ParticipantemailAsc = 'PARTICIPANTEMAIL_ASC',
  ParticipantemailDesc = 'PARTICIPANTEMAIL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC'
}

export type ParentPortfolioInsertInput = {
  homeAddress?: Maybe<Scalars['String']>;
  participantEmail?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
};

export type TokenEventLogUpdateInput = {
  created?: Maybe<Scalars['DateTime']>;
  created_unset?: Maybe<Scalars['Boolean']>;
  event?: Maybe<Scalars['String']>;
  event_unset?: Maybe<Scalars['Boolean']>;
};

export type EmployerPortfolioUpdateInput = {
  industry?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  primaryProduct?: Maybe<Scalars['String']>;
  primaryProduct_unset?: Maybe<Scalars['Boolean']>;
  workAddress?: Maybe<Scalars['String']>;
  employerName?: Maybe<Scalars['String']>;
  employerName_unset?: Maybe<Scalars['Boolean']>;
  jobTitle_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  industry_unset?: Maybe<Scalars['Boolean']>;
  workAddress_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type SendTokensTransaction = {
  __typename?: 'SendTokensTransaction';
  /** @deprecated  */
  recipient?: Maybe<SendTokensTransactionRecipient>;
  /** @deprecated  */
  timestamp?: Maybe<Scalars['DateTime']>;
  /** @deprecated  */
  token_ids?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  /** @deprecated  */
  tokensSent?: Maybe<Scalars['Int']>;
};

export type TeacherPortfolioQueryInput = {
  schoolDistrict_lte?: Maybe<Scalars['String']>;
  schoolName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolAddress_lt?: Maybe<Scalars['String']>;
  schoolName_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  schoolAddress_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<TeacherPortfolioQueryInput>>;
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  schoolName_lt?: Maybe<Scalars['String']>;
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  schoolAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  OR?: Maybe<Array<TeacherPortfolioQueryInput>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  schoolName_gt?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  schoolName?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  schoolName_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  schoolAddress_gt?: Maybe<Scalars['String']>;
  schoolAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolAddress_gte?: Maybe<Scalars['String']>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  schoolDistrict_ne?: Maybe<Scalars['String']>;
  schoolName_ne?: Maybe<Scalars['String']>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolAddress_exists?: Maybe<Scalars['Boolean']>;
  schoolName_lte?: Maybe<Scalars['String']>;
  schoolAddress?: Maybe<Scalars['String']>;
  schoolAddress_lte?: Maybe<Scalars['String']>;
};

export type TokenEventLogInsertInput = {
  created?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolUpdateInput = {
  name_unset?: Maybe<Scalars['Boolean']>;
  district?: Maybe<Scalars['String']>;
  district_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type TransactionInsertInput = {
  referral?: Maybe<Array<Maybe<TransactionReferralInsertInput>>>;
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLogInsertInput>>>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type StudentPortfolioSchoolInsertInput = {
  name?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated  */
  employerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  employerPortfolios: Array<Maybe<EmployerPortfolio>>;
  /** @deprecated  */
  parentPortfolio?: Maybe<ParentPortfolio>;
  /** @deprecated  */
  parentPortfolios: Array<Maybe<ParentPortfolio>>;
  /** @deprecated  */
  schoolPortfolio?: Maybe<SchoolPortfolio>;
  /** @deprecated  */
  schoolPortfolios: Array<Maybe<SchoolPortfolio>>;
  /** @deprecated  */
  studentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  studentPortfolios: Array<Maybe<StudentPortfolio>>;
  /** @deprecated  */
  teacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  teacherPortfolios: Array<Maybe<TeacherPortfolio>>;
  /** @deprecated  */
  token?: Maybe<Token>;
  /** @deprecated  */
  tokens: Array<Maybe<Token>>;
  /** @deprecated  */
  transaction?: Maybe<Transaction>;
  /** @deprecated  */
  transactions: Array<Maybe<Transaction>>;
  /** @deprecated  */
  user?: Maybe<User>;
  /** @deprecated  */
  users: Array<Maybe<User>>;
};

export type QueryEmployerPortfolioArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
};

export type QueryEmployerPortfoliosArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<EmployerPortfolioSortByInput>;
};

export type QueryParentPortfolioArgs = {
  query?: Maybe<ParentPortfolioQueryInput>;
};

export type QueryParentPortfoliosArgs = {
  query?: Maybe<ParentPortfolioQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<ParentPortfolioSortByInput>;
};

export type QuerySchoolPortfolioArgs = {
  query?: Maybe<SchoolPortfolioQueryInput>;
};

export type QuerySchoolPortfoliosArgs = {
  sortBy?: Maybe<SchoolPortfolioSortByInput>;
  query?: Maybe<SchoolPortfolioQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryStudentPortfolioArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
};

export type QueryStudentPortfoliosArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<StudentPortfolioSortByInput>;
};

export type QueryTeacherPortfolioArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
};

export type QueryTeacherPortfoliosArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<TeacherPortfolioSortByInput>;
};

export type QueryTokenArgs = {
  query?: Maybe<TokenQueryInput>;
};

export type QueryTokensArgs = {
  query?: Maybe<TokenQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<TokenSortByInput>;
};

export type QueryTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
};

export type QueryTransactionsArgs = {
  query?: Maybe<TransactionQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<TransactionSortByInput>;
};

export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};

export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
};

export enum TokenSortByInput {
  OwnerIdAsc = 'OWNER_ID_ASC',
  OwnerIdDesc = 'OWNER_ID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  NewownerIdAsc = 'NEWOWNER_ID_ASC',
  NewownerIdDesc = 'NEWOWNER_ID_DESC'
}

export type UserEventLog = {
  __typename?: 'UserEventLog';
  /** @deprecated  */
  event?: Maybe<Scalars['String']>;
  /** @deprecated  */
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type StudentPortfolioGuardianUpdateInput = {
  relationship_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  relationship?: Maybe<Scalars['String']>;
};

export type TokenQueryInput = {
  owner_id?: Maybe<Scalars['ObjectId']>;
  newOwner_id_gt?: Maybe<Scalars['ObjectId']>;
  newOwner_id_lte?: Maybe<Scalars['ObjectId']>;
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  customer_id_lte?: Maybe<Scalars['String']>;
  newOwner_id_ne?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  eventLog?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  customer_id_lt?: Maybe<Scalars['String']>;
  customer_id_exists?: Maybe<Scalars['Boolean']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  customer_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  owner_id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  OR?: Maybe<Array<TokenQueryInput>>;
  _id?: Maybe<Scalars['ObjectId']>;
  owner_id_gt?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  owner_id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  newOwner_id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  customer_id_gt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  owner_id_gte?: Maybe<Scalars['ObjectId']>;
  newOwner_id_lt?: Maybe<Scalars['ObjectId']>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  eventLog_in?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  customer_id_gte?: Maybe<Scalars['String']>;
  owner_id_ne?: Maybe<Scalars['ObjectId']>;
  eventLog_nin?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  newOwner_id_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  customer_id?: Maybe<Scalars['String']>;
  owner_id_lte?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<TokenQueryInput>>;
  owner_id_lt?: Maybe<Scalars['ObjectId']>;
  newOwner_id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  customer_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  customer_id_ne?: Maybe<Scalars['String']>;
  owner_id_exists?: Maybe<Scalars['Boolean']>;
  newOwner_id_gte?: Maybe<Scalars['ObjectId']>;
};

export type TokenEventLog = {
  __typename?: 'TokenEventLog';
  /** @deprecated  */
  created?: Maybe<Scalars['DateTime']>;
  /** @deprecated  */
  event?: Maybe<Scalars['String']>;
};

export enum EmployerPortfolioSortByInput {
  IndustryDesc = 'INDUSTRY_DESC',
  JobtitleAsc = 'JOBTITLE_ASC',
  PrimaryproductAsc = 'PRIMARYPRODUCT_ASC',
  PrimaryproductDesc = 'PRIMARYPRODUCT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmployernameAsc = 'EMPLOYERNAME_ASC',
  IndustryAsc = 'INDUSTRY_ASC',
  WorkaddressDesc = 'WORKADDRESS_DESC',
  EmployernameDesc = 'EMPLOYERNAME_DESC',
  JobtitleDesc = 'JOBTITLE_DESC',
  WorkaddressAsc = 'WORKADDRESS_ASC'
}

export type Mutation = {
  __typename?: 'Mutation';
  /** @deprecated  */
  deleteManyEmployerPortfolios?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyParentPortfolios?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManySchoolPortfolios?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyStudentPortfolios?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyTeacherPortfolios?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyTokens?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyTransactions?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  deleteOneParentPortfolio?: Maybe<ParentPortfolio>;
  /** @deprecated  */
  deleteOneSchoolPortfolio?: Maybe<SchoolPortfolio>;
  /** @deprecated  */
  deleteOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  deleteOneTeacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  deleteOneToken?: Maybe<Token>;
  /** @deprecated  */
  deleteOneTransaction?: Maybe<Transaction>;
  /** @deprecated  */
  deleteOneUser?: Maybe<User>;
  /** @deprecated  */
  insertManyEmployerPortfolios?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyParentPortfolios?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManySchoolPortfolios?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyStudentPortfolios?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyTeacherPortfolios?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyTokens?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyTransactions?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyUsers?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  insertOneParentPortfolio?: Maybe<ParentPortfolio>;
  /** @deprecated  */
  insertOneSchoolPortfolio?: Maybe<SchoolPortfolio>;
  /** @deprecated  */
  insertOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  insertOneTeacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  insertOneToken?: Maybe<Token>;
  /** @deprecated  */
  insertOneTransaction?: Maybe<Transaction>;
  /** @deprecated  */
  insertOneUser?: Maybe<User>;
  /** @deprecated  */
  replaceOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  replaceOneParentPortfolio?: Maybe<ParentPortfolio>;
  /** @deprecated  */
  replaceOneSchoolPortfolio?: Maybe<SchoolPortfolio>;
  /** @deprecated  */
  replaceOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  replaceOneTeacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  replaceOneToken?: Maybe<Token>;
  /** @deprecated  */
  replaceOneTransaction?: Maybe<Transaction>;
  /** @deprecated  */
  replaceOneUser?: Maybe<User>;
  /** @deprecated  */
  sendRefferal?: Maybe<DefaultPayload>;
  /** @deprecated  */
  sendTokensMutation?: Maybe<SendTokensTransaction>;
  /** @deprecated  */
  updateManyEmployerPortfolios?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyParentPortfolios?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManySchoolPortfolios?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyStudentPortfolios?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyTeacherPortfolios?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyTokens?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyTransactions?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyUsers?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  updateOneParentPortfolio?: Maybe<ParentPortfolio>;
  /** @deprecated  */
  updateOneSchoolPortfolio?: Maybe<SchoolPortfolio>;
  /** @deprecated  */
  updateOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  updateOneTeacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  updateOneToken?: Maybe<Token>;
  /** @deprecated  */
  updateOneTransaction?: Maybe<Transaction>;
  /** @deprecated  */
  updateOneUser?: Maybe<User>;
  /** @deprecated  */
  upsertOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  upsertOneParentPortfolio?: Maybe<ParentPortfolio>;
  /** @deprecated  */
  upsertOneSchoolPortfolio?: Maybe<SchoolPortfolio>;
  /** @deprecated  */
  upsertOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  upsertOneTeacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  upsertOneToken?: Maybe<Token>;
  /** @deprecated  */
  upsertOneTransaction?: Maybe<Transaction>;
  /** @deprecated  */
  upsertOneUser?: Maybe<User>;
};

export type MutationDeleteManyEmployerPortfoliosArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
};

export type MutationDeleteManyParentPortfoliosArgs = {
  query?: Maybe<ParentPortfolioQueryInput>;
};

export type MutationDeleteManySchoolPortfoliosArgs = {
  query?: Maybe<SchoolPortfolioQueryInput>;
};

export type MutationDeleteManyStudentPortfoliosArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
};

export type MutationDeleteManyTeacherPortfoliosArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
};

export type MutationDeleteManyTokensArgs = {
  query?: Maybe<TokenQueryInput>;
};

export type MutationDeleteManyTransactionsArgs = {
  query?: Maybe<TransactionQueryInput>;
};

export type MutationDeleteManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
};

export type MutationDeleteOneEmployerPortfolioArgs = {
  query: EmployerPortfolioQueryInput;
};

export type MutationDeleteOneParentPortfolioArgs = {
  query: ParentPortfolioQueryInput;
};

export type MutationDeleteOneSchoolPortfolioArgs = {
  query: SchoolPortfolioQueryInput;
};

export type MutationDeleteOneStudentPortfolioArgs = {
  query: StudentPortfolioQueryInput;
};

export type MutationDeleteOneTeacherPortfolioArgs = {
  query: TeacherPortfolioQueryInput;
};

export type MutationDeleteOneTokenArgs = {
  query: TokenQueryInput;
};

export type MutationDeleteOneTransactionArgs = {
  query: TransactionQueryInput;
};

export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
};

export type MutationInsertManyEmployerPortfoliosArgs = {
  data: Array<EmployerPortfolioInsertInput>;
};

export type MutationInsertManyParentPortfoliosArgs = {
  data: Array<ParentPortfolioInsertInput>;
};

export type MutationInsertManySchoolPortfoliosArgs = {
  data: Array<SchoolPortfolioInsertInput>;
};

export type MutationInsertManyStudentPortfoliosArgs = {
  data: Array<StudentPortfolioInsertInput>;
};

export type MutationInsertManyTeacherPortfoliosArgs = {
  data: Array<TeacherPortfolioInsertInput>;
};

export type MutationInsertManyTokensArgs = {
  data: Array<TokenInsertInput>;
};

export type MutationInsertManyTransactionsArgs = {
  data: Array<TransactionInsertInput>;
};

export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};

export type MutationInsertOneEmployerPortfolioArgs = {
  data: EmployerPortfolioInsertInput;
};

export type MutationInsertOneParentPortfolioArgs = {
  data: ParentPortfolioInsertInput;
};

export type MutationInsertOneSchoolPortfolioArgs = {
  data: SchoolPortfolioInsertInput;
};

export type MutationInsertOneStudentPortfolioArgs = {
  data: StudentPortfolioInsertInput;
};

export type MutationInsertOneTeacherPortfolioArgs = {
  data: TeacherPortfolioInsertInput;
};

export type MutationInsertOneTokenArgs = {
  data: TokenInsertInput;
};

export type MutationInsertOneTransactionArgs = {
  data: TransactionInsertInput;
};

export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};

export type MutationReplaceOneEmployerPortfolioArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
  data: EmployerPortfolioInsertInput;
};

export type MutationReplaceOneParentPortfolioArgs = {
  query?: Maybe<ParentPortfolioQueryInput>;
  data: ParentPortfolioInsertInput;
};

export type MutationReplaceOneSchoolPortfolioArgs = {
  query?: Maybe<SchoolPortfolioQueryInput>;
  data: SchoolPortfolioInsertInput;
};

export type MutationReplaceOneStudentPortfolioArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  data: StudentPortfolioInsertInput;
};

export type MutationReplaceOneTeacherPortfolioArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
  data: TeacherPortfolioInsertInput;
};

export type MutationReplaceOneTokenArgs = {
  data: TokenInsertInput;
  query?: Maybe<TokenQueryInput>;
};

export type MutationReplaceOneTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
  data: TransactionInsertInput;
};

export type MutationReplaceOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};

export type MutationSendRefferalArgs = {
  input?: Maybe<SendReferalInput>;
};

export type MutationSendTokensMutationArgs = {
  input?: Maybe<SendTokensInput>;
};

export type MutationUpdateManyEmployerPortfoliosArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
  set: EmployerPortfolioUpdateInput;
};

export type MutationUpdateManyParentPortfoliosArgs = {
  query?: Maybe<ParentPortfolioQueryInput>;
  set: ParentPortfolioUpdateInput;
};

export type MutationUpdateManySchoolPortfoliosArgs = {
  query?: Maybe<SchoolPortfolioQueryInput>;
  set: SchoolPortfolioUpdateInput;
};

export type MutationUpdateManyStudentPortfoliosArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  set: StudentPortfolioUpdateInput;
};

export type MutationUpdateManyTeacherPortfoliosArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
  set: TeacherPortfolioUpdateInput;
};

export type MutationUpdateManyTokensArgs = {
  query?: Maybe<TokenQueryInput>;
  set: TokenUpdateInput;
};

export type MutationUpdateManyTransactionsArgs = {
  query?: Maybe<TransactionQueryInput>;
  set: TransactionUpdateInput;
};

export type MutationUpdateManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};

export type MutationUpdateOneEmployerPortfolioArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
  set: EmployerPortfolioUpdateInput;
};

export type MutationUpdateOneParentPortfolioArgs = {
  query?: Maybe<ParentPortfolioQueryInput>;
  set: ParentPortfolioUpdateInput;
};

export type MutationUpdateOneSchoolPortfolioArgs = {
  query?: Maybe<SchoolPortfolioQueryInput>;
  set: SchoolPortfolioUpdateInput;
};

export type MutationUpdateOneStudentPortfolioArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  set: StudentPortfolioUpdateInput;
};

export type MutationUpdateOneTeacherPortfolioArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
  set: TeacherPortfolioUpdateInput;
};

export type MutationUpdateOneTokenArgs = {
  query?: Maybe<TokenQueryInput>;
  set: TokenUpdateInput;
};

export type MutationUpdateOneTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
  set: TransactionUpdateInput;
};

export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};

export type MutationUpsertOneEmployerPortfolioArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
  data: EmployerPortfolioInsertInput;
};

export type MutationUpsertOneParentPortfolioArgs = {
  query?: Maybe<ParentPortfolioQueryInput>;
  data: ParentPortfolioInsertInput;
};

export type MutationUpsertOneSchoolPortfolioArgs = {
  query?: Maybe<SchoolPortfolioQueryInput>;
  data: SchoolPortfolioInsertInput;
};

export type MutationUpsertOneStudentPortfolioArgs = {
  data: StudentPortfolioInsertInput;
  query?: Maybe<StudentPortfolioQueryInput>;
};

export type MutationUpsertOneTeacherPortfolioArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
  data: TeacherPortfolioInsertInput;
};

export type MutationUpsertOneTokenArgs = {
  query?: Maybe<TokenQueryInput>;
  data: TokenInsertInput;
};

export type MutationUpsertOneTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
  data: TransactionInsertInput;
};

export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};

export type StudentPortfolioHomeUpdateInput = {
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  language_unset?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  address_unset?: Maybe<Scalars['Boolean']>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  /** @deprecated  */
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type StudentPortfolioGuardianQueryInput = {
  AND?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  email_ne?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
  relationship_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_lt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  email?: Maybe<Scalars['String']>;
  relationship_gte?: Maybe<Scalars['String']>;
  relationship_lte?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_lte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  relationship_ne?: Maybe<Scalars['String']>;
  relationship_exists?: Maybe<Scalars['Boolean']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_gte?: Maybe<Scalars['String']>;
  email_lt?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  relationship_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_gt?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchool = {
  __typename?: 'StudentPortfolioSchool';
  /** @deprecated  */
  district?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

export type TransactionReferralQueryInput = {
  sentTo_gte?: Maybe<Scalars['String']>;
  sentTo_exists?: Maybe<Scalars['Boolean']>;
  timestamp_exists?: Maybe<Scalars['Boolean']>;
  sentTo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  sentTo_lt?: Maybe<Scalars['String']>;
  timestamp_ne?: Maybe<Scalars['DateTime']>;
  timestamp_lte?: Maybe<Scalars['DateTime']>;
  sentTo_gt?: Maybe<Scalars['String']>;
  sentTo_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<TransactionReferralQueryInput>>;
  timestamp_gt?: Maybe<Scalars['DateTime']>;
  timestamp_gte?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<TransactionReferralQueryInput>>;
  sentTo?: Maybe<Scalars['String']>;
  sentTo_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  timestamp_lt?: Maybe<Scalars['DateTime']>;
  sentTo_lte?: Maybe<Scalars['String']>;
  timestamp_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type Transaction = {
  __typename?: 'Transaction';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  referral?: Maybe<Array<Maybe<TransactionReferral>>>;
  /** @deprecated  */
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLog>>>;
};

export type SchoolPortfolio = {
  __typename?: 'SchoolPortfolio';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  districtAddress?: Maybe<Scalars['String']>;
  /** @deprecated  */
  schoolDistrict?: Maybe<Scalars['String']>;
  /** @deprecated  */
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated  */
  stakeholder?: Maybe<Scalars['String']>;
  /** @deprecated  */
  stakeholderAccess?: Maybe<Scalars['String']>;
};

export type TransactionTokenLogInsertInput = {
  event?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  tokensSent?: Maybe<Scalars['Int']>;
};

export type ParentPortfolio = {
  __typename?: 'ParentPortfolio';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
  /** @deprecated  */
  homeAddress?: Maybe<Scalars['String']>;
  /** @deprecated  */
  participantEmail?: Maybe<Scalars['String']>;
};

export type TransactionTokenLogQueryInput = {
  timestamp_ne?: Maybe<Scalars['DateTime']>;
  tokensSent_lt?: Maybe<Scalars['Int']>;
  tokensSent_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  OR?: Maybe<Array<TransactionTokenLogQueryInput>>;
  timestamp_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  timestamp?: Maybe<Scalars['DateTime']>;
  tokensSent_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tokensSent_gte?: Maybe<Scalars['Int']>;
  tokensSent_ne?: Maybe<Scalars['Int']>;
  event_gt?: Maybe<Scalars['String']>;
  timestamp_exists?: Maybe<Scalars['Boolean']>;
  event_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_exists?: Maybe<Scalars['Boolean']>;
  event_lt?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  timestamp_gt?: Maybe<Scalars['DateTime']>;
  timestamp_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  timestamp_lte?: Maybe<Scalars['DateTime']>;
  event_lte?: Maybe<Scalars['String']>;
  event_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_ne?: Maybe<Scalars['String']>;
  tokensSent?: Maybe<Scalars['Int']>;
  event_gte?: Maybe<Scalars['String']>;
  tokensSent_lte?: Maybe<Scalars['Int']>;
  AND?: Maybe<Array<TransactionTokenLogQueryInput>>;
  tokensSent_exists?: Maybe<Scalars['Boolean']>;
  timestamp_gte?: Maybe<Scalars['DateTime']>;
  timestamp_lt?: Maybe<Scalars['DateTime']>;
  tokensSent_gt?: Maybe<Scalars['Int']>;
};

export type SchoolPortfolioInsertInput = {
  stakeholder?: Maybe<Scalars['String']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  districtAddress?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TransactionTokenLogUpdateInput = {
  event_unset?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_unset?: Maybe<Scalars['Boolean']>;
  tokensSent?: Maybe<Scalars['Int']>;
  tokensSent_inc?: Maybe<Scalars['Int']>;
  tokensSent_unset?: Maybe<Scalars['Boolean']>;
  event?: Maybe<Scalars['String']>;
};

export type TransactionReferralUpdateInput = {
  sentTo?: Maybe<Scalars['String']>;
  sentTo_unset?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_unset?: Maybe<Scalars['Boolean']>;
};

export type EmployerPortfolioQueryInput = {
  _id_ne?: Maybe<Scalars['ObjectId']>;
  employerName_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  industry_ne?: Maybe<Scalars['String']>;
  employerName_ne?: Maybe<Scalars['String']>;
  primaryProduct_gt?: Maybe<Scalars['String']>;
  workAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress?: Maybe<Scalars['String']>;
  workAddress_gt?: Maybe<Scalars['String']>;
  industry_gte?: Maybe<Scalars['String']>;
  jobTitle_ne?: Maybe<Scalars['String']>;
  workAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_exists?: Maybe<Scalars['Boolean']>;
  employerName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  industry_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  industry?: Maybe<Scalars['String']>;
  primaryProduct_lt?: Maybe<Scalars['String']>;
  primaryProduct_lte?: Maybe<Scalars['String']>;
  industry_lt?: Maybe<Scalars['String']>;
  jobTitle_lte?: Maybe<Scalars['String']>;
  primaryProduct_exists?: Maybe<Scalars['Boolean']>;
  employerName_gt?: Maybe<Scalars['String']>;
  primaryProduct_ne?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  employerName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  primaryProduct_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_gte?: Maybe<Scalars['String']>;
  employerName_lt?: Maybe<Scalars['String']>;
  industry_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  employerName_lte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<EmployerPortfolioQueryInput>>;
  primaryProduct_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct?: Maybe<Scalars['String']>;
  workAddress_lt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<EmployerPortfolioQueryInput>>;
  industry_exists?: Maybe<Scalars['Boolean']>;
  jobTitle_gte?: Maybe<Scalars['String']>;
  workAddress_exists?: Maybe<Scalars['Boolean']>;
  industry_lte?: Maybe<Scalars['String']>;
  industry_gt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  workAddress_lte?: Maybe<Scalars['String']>;
  jobTitle_lt?: Maybe<Scalars['String']>;
  jobTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_gt?: Maybe<Scalars['String']>;
  employerName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  employerName_gte?: Maybe<Scalars['String']>;
  workAddress_ne?: Maybe<Scalars['String']>;
  workAddress_gte?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
};

export type EmployerPortfolio = {
  __typename?: 'EmployerPortfolio';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  employerName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  industry?: Maybe<Scalars['String']>;
  /** @deprecated  */
  jobTitle?: Maybe<Scalars['String']>;
  /** @deprecated  */
  primaryProduct?: Maybe<Scalars['String']>;
  /** @deprecated  */
  workAddress?: Maybe<Scalars['String']>;
};

export type EmployerPortfolioInsertInput = {
  primaryProduct?: Maybe<Scalars['String']>;
  workAddress?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  employerName?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
};

export type TokenUpdateInput = {
  eventLog?: Maybe<Array<Maybe<TokenEventLogUpdateInput>>>;
  owner_id_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  customer_id_unset?: Maybe<Scalars['Boolean']>;
  newOwner_id_unset?: Maybe<Scalars['Boolean']>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  customer_id?: Maybe<Scalars['String']>;
};

export type UserInsertInput = {
  eventLog?: Maybe<Array<Maybe<UserEventLogInsertInput>>>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
};

export type SchoolPortfolioUpdateInput = {
  stakeholder_unset?: Maybe<Scalars['Boolean']>;
  districtAddress_unset?: Maybe<Scalars['Boolean']>;
  stakeholderAccess_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolDistrict_unset?: Maybe<Scalars['Boolean']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  staffType_unset?: Maybe<Scalars['Boolean']>;
  stakeholder?: Maybe<Scalars['String']>;
  districtAddress?: Maybe<Scalars['String']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
};

export type TransactionQueryInput = {
  AND?: Maybe<Array<TransactionQueryInput>>;
  referral?: Maybe<Array<Maybe<TransactionReferralQueryInput>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  tokenLog_in?: Maybe<Array<Maybe<TransactionTokenLogQueryInput>>>;
  tokenLog_exists?: Maybe<Scalars['Boolean']>;
  referral_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLogQueryInput>>>;
  referral_in?: Maybe<Array<Maybe<TransactionReferralQueryInput>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  referral_nin?: Maybe<Array<Maybe<TransactionReferralQueryInput>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  tokenLog_nin?: Maybe<Array<Maybe<TransactionTokenLogQueryInput>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  OR?: Maybe<Array<TransactionQueryInput>>;
};

export type TransactionTokenLog = {
  __typename?: 'TransactionTokenLog';
  /** @deprecated  */
  event?: Maybe<Scalars['String']>;
  /** @deprecated  */
  timestamp?: Maybe<Scalars['DateTime']>;
  /** @deprecated  */
  tokensSent?: Maybe<Scalars['Int']>;
};

export type SchoolPortfolioQueryInput = {
  stakeholder_gt?: Maybe<Scalars['String']>;
  stakeholder_exists?: Maybe<Scalars['Boolean']>;
  stakeholder_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholderAccess_ne?: Maybe<Scalars['String']>;
  districtAddress_gt?: Maybe<Scalars['String']>;
  districtAddress_lte?: Maybe<Scalars['String']>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  staffType_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  stakeholderAccess_gt?: Maybe<Scalars['String']>;
  districtAddress_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  stakeholder?: Maybe<Scalars['String']>;
  stakeholderAccess_lte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  schoolDistrict?: Maybe<Scalars['String']>;
  stakeholderAccess_gte?: Maybe<Scalars['String']>;
  stakeholder_lte?: Maybe<Scalars['String']>;
  districtAddress_ne?: Maybe<Scalars['String']>;
  districtAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder_gte?: Maybe<Scalars['String']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  staffType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder_lt?: Maybe<Scalars['String']>;
  stakeholderAccess_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_lte?: Maybe<Scalars['String']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholderAccess_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  districtAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  districtAddress_lt?: Maybe<Scalars['String']>;
  schoolDistrict_ne?: Maybe<Scalars['String']>;
  stakeholder_ne?: Maybe<Scalars['String']>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<SchoolPortfolioQueryInput>>;
  stakeholderAccess_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  staffType_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  districtAddress_gte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<SchoolPortfolioQueryInput>>;
  stakeholderAccess_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  districtAddress?: Maybe<Scalars['String']>;
};

export type UserEventLogQueryInput = {
  timestamp_gte?: Maybe<Scalars['DateTime']>;
  event_exists?: Maybe<Scalars['Boolean']>;
  event_ne?: Maybe<Scalars['String']>;
  timestamp_ne?: Maybe<Scalars['DateTime']>;
  event_gt?: Maybe<Scalars['String']>;
  timestamp_lte?: Maybe<Scalars['DateTime']>;
  event_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<UserEventLogQueryInput>>;
  OR?: Maybe<Array<UserEventLogQueryInput>>;
  event?: Maybe<Scalars['String']>;
  event_lte?: Maybe<Scalars['String']>;
  event_gte?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_exists?: Maybe<Scalars['Boolean']>;
  timestamp_lt?: Maybe<Scalars['DateTime']>;
  event_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  timestamp_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  timestamp_gt?: Maybe<Scalars['DateTime']>;
  event_lt?: Maybe<Scalars['String']>;
  timestamp_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type UserUpdateInput = {
  stripeId_unset?: Maybe<Scalars['Boolean']>;
  userTypes_unset?: Maybe<Scalars['Boolean']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogUpdateInput>>>;
  firstName_unset?: Maybe<Scalars['Boolean']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  lastName_unset?: Maybe<Scalars['Boolean']>;
  profileImg?: Maybe<Scalars['String']>;
  profileImg_unset?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
};

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string;
      name: string;
      possibleTypes: {
        name: string;
      }[];
    }[];
  };
}
const result: IntrospectionResultData = {
  __schema: {
    types: []
  }
};
export default result;
