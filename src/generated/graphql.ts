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
  /** The `DateTime` scalar type represents a DateTime. The DateTime is serialized as an RFC 3339 quoted string */
  DateTime: any;
  ObjectId: any;
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

export type TokenEventLogInsertInput = {
  event?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['DateTime']>;
};

export type StudentPortfolioGuardianQueryInput = {
  email_ne?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_gte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  relationship_ne?: Maybe<Scalars['String']>;
  relationship_lt?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  relationship_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  email_lt?: Maybe<Scalars['String']>;
  relationship_gte?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  relationship_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship?: Maybe<Scalars['String']>;
  relationship_lte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  email_lte?: Maybe<Scalars['String']>;
  relationship_gt?: Maybe<Scalars['String']>;
};

export type StudentPortfolioGuardian = {
  __typename?: 'StudentPortfolioGuardian';
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
  /** @deprecated  */
  relationship?: Maybe<Scalars['String']>;
};

export type UserEventLogQueryInput = {
  created_gte?: Maybe<Scalars['DateTime']>;
  created_lte?: Maybe<Scalars['DateTime']>;
  created_ne?: Maybe<Scalars['DateTime']>;
  created_gt?: Maybe<Scalars['DateTime']>;
  created_lt?: Maybe<Scalars['DateTime']>;
  created_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  created_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<UserEventLogQueryInput>>;
  created?: Maybe<Scalars['DateTime']>;
  created_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  OR?: Maybe<Array<UserEventLogQueryInput>>;
};

export type TeacherPortfolioUpdateInput = {
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolDistrict_unset?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  schoolAddress?: Maybe<Scalars['String']>;
  schoolAddress_unset?: Maybe<Scalars['Boolean']>;
};

export type UserInsertInput = {
  eventLog?: Maybe<Array<Maybe<UserEventLogInsertInput>>>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
};

export type EmployerPortfolioUpdateInput = {
  workAddress_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  jobTitle_unset?: Maybe<Scalars['Boolean']>;
  primaryProduct?: Maybe<Scalars['String']>;
  primaryProduct_unset?: Maybe<Scalars['Boolean']>;
  employerName?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  industry_unset?: Maybe<Scalars['Boolean']>;
  jobTitle?: Maybe<Scalars['String']>;
  employerName_unset?: Maybe<Scalars['Boolean']>;
  workAddress?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchool = {
  __typename?: 'StudentPortfolioSchool';
  /** @deprecated  */
  district?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
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

export type UserEventLogInsertInput = {
  created?: Maybe<Scalars['DateTime']>;
};

export type TeacherPortfolioInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  schoolAddress?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
};

export type TokenEventLogUpdateInput = {
  created?: Maybe<Scalars['DateTime']>;
  created_unset?: Maybe<Scalars['Boolean']>;
  event?: Maybe<Scalars['String']>;
  event_unset?: Maybe<Scalars['Boolean']>;
};

export enum TeacherPortfolioSortByInput {
  SchooldistrictAsc = 'SCHOOLDISTRICT_ASC',
  SchooldistrictDesc = 'SCHOOLDISTRICT_DESC',
  SchoolnameAsc = 'SCHOOLNAME_ASC',
  SchoolnameDesc = 'SCHOOLNAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  SchooladdressAsc = 'SCHOOLADDRESS_ASC',
  SchooladdressDesc = 'SCHOOLADDRESS_DESC'
}

export enum UserSortByInput {
  LastnameDesc = 'LASTNAME_DESC',
  StripeidDesc = 'STRIPEID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  StripeidAsc = 'STRIPEID_ASC',
  EmailAsc = 'EMAIL_ASC'
}

export type ParentPortfolioQueryInput = {
  homeAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  participantEmail_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  homeAddress_lt?: Maybe<Scalars['String']>;
  participantEmail_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  participantEmail_ne?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  email_lt?: Maybe<Scalars['String']>;
  participantEmail_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeAddress_ne?: Maybe<Scalars['String']>;
  email_ne?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  homeAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<ParentPortfolioQueryInput>>;
  email_gte?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  participantEmail_gt?: Maybe<Scalars['String']>;
  participantEmail_lt?: Maybe<Scalars['String']>;
  homeAddress?: Maybe<Scalars['String']>;
  participantEmail_lte?: Maybe<Scalars['String']>;
  participantEmail?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  homeAddress_gte?: Maybe<Scalars['String']>;
  homeAddress_lte?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<ParentPortfolioQueryInput>>;
  homeAddress_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  participantEmail_gte?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  homeAddress_exists?: Maybe<Scalars['Boolean']>;
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

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  /** @deprecated  */
  deletedCount: Scalars['Int'];
};

export type StudentPortfolioSchoolInsertInput = {
  district?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StudentPortfolioUpdateInput = {
  guardian?: Maybe<StudentPortfolioGuardianUpdateInput>;
  home_unset?: Maybe<Scalars['Boolean']>;
  gender_unset?: Maybe<Scalars['Boolean']>;
  home?: Maybe<StudentPortfolioHomeUpdateInput>;
  guardian_unset?: Maybe<Scalars['Boolean']>;
  school_unset?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade?: Maybe<Scalars['String']>;
  school?: Maybe<StudentPortfolioSchoolUpdateInput>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  ethnicity_unset?: Maybe<Scalars['Boolean']>;
  grade_unset?: Maybe<Scalars['Boolean']>;
  date_unset?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
};

export type SchoolPortfolioInsertInput = {
  schoolDistrict?: Maybe<Scalars['String']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder?: Maybe<Scalars['String']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  districtAddress?: Maybe<Scalars['String']>;
};

export type StudentPortfolioGuardianUpdateInput = {
  relationship?: Maybe<Scalars['String']>;
  relationship_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
};

export type SchoolPortfolioUpdateInput = {
  stakeholder?: Maybe<Scalars['String']>;
  stakeholderAccess_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  districtAddress?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  districtAddress_unset?: Maybe<Scalars['Boolean']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder_unset?: Maybe<Scalars['Boolean']>;
  staffType_unset?: Maybe<Scalars['Boolean']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
  schoolDistrict_unset?: Maybe<Scalars['Boolean']>;
};

export type EmployerPortfolioInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  employerName?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  primaryProduct?: Maybe<Scalars['String']>;
  workAddress?: Maybe<Scalars['String']>;
};

export type ParentPortfolioUpdateInput = {
  homeAddress?: Maybe<Scalars['String']>;
  homeAddress_unset?: Maybe<Scalars['Boolean']>;
  participantEmail?: Maybe<Scalars['String']>;
  participantEmail_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
};

export type TeacherPortfolioQueryInput = {
  _id_lte?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<TeacherPortfolioQueryInput>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  schoolAddress_lt?: Maybe<Scalars['String']>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  schoolName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolAddress_exists?: Maybe<Scalars['Boolean']>;
  schoolAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolName_exists?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_lte?: Maybe<Scalars['String']>;
  schoolName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  schoolAddress_ne?: Maybe<Scalars['String']>;
  schoolAddress_gt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_ne?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  schoolName_lt?: Maybe<Scalars['String']>;
  schoolName_ne?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  schoolAddress?: Maybe<Scalars['String']>;
  schoolName_gte?: Maybe<Scalars['String']>;
  schoolAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolName_gt?: Maybe<Scalars['String']>;
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  schoolAddress_lte?: Maybe<Scalars['String']>;
  schoolAddress_gte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<TeacherPortfolioQueryInput>>;
  schoolDistrict_lte?: Maybe<Scalars['String']>;
};

export type UserQueryInput = {
  stripeId?: Maybe<Scalars['String']>;
  stripeId_lt?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  eventLog_in?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  lastName?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userTypes_exists?: Maybe<Scalars['Boolean']>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_gte?: Maybe<Scalars['String']>;
  stripeId_gte?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_ne?: Maybe<Scalars['String']>;
  stripeId_exists?: Maybe<Scalars['Boolean']>;
  userTypes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_lt?: Maybe<Scalars['String']>;
  stripeId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_ne?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  stripeId_lte?: Maybe<Scalars['String']>;
  lastName_gt?: Maybe<Scalars['String']>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  email_gt?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_lte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLog?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<UserQueryInput>>;
  _id?: Maybe<Scalars['ObjectId']>;
  lastName_lt?: Maybe<Scalars['String']>;
  userTypes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_lte?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_lt?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_ne?: Maybe<Scalars['String']>;
  eventLog_nin?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  stripeId_gt?: Maybe<Scalars['String']>;
  stripeId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<UserQueryInput>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  lastName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  lastName_ne?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  firstName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  lastName_gte?: Maybe<Scalars['String']>;
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
  stripeId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  /** @deprecated  */
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type StudentPortfolioHomeUpdateInput = {
  address?: Maybe<Scalars['String']>;
  address_unset?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  language_unset?: Maybe<Scalars['Boolean']>;
};

export enum EmployerPortfolioSortByInput {
  IndustryDesc = 'INDUSTRY_DESC',
  PrimaryproductAsc = 'PRIMARYPRODUCT_ASC',
  WorkaddressAsc = 'WORKADDRESS_ASC',
  IdAsc = '_ID_ASC',
  WorkaddressDesc = 'WORKADDRESS_DESC',
  IdDesc = '_ID_DESC',
  EmployernameAsc = 'EMPLOYERNAME_ASC',
  EmployernameDesc = 'EMPLOYERNAME_DESC',
  IndustryAsc = 'INDUSTRY_ASC',
  JobtitleAsc = 'JOBTITLE_ASC',
  JobtitleDesc = 'JOBTITLE_DESC',
  PrimaryproductDesc = 'PRIMARYPRODUCT_DESC'
}

export type TokenQueryInput = {
  eventLog?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  owner_id_gt?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<TokenQueryInput>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  eventLog_nin?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  owner_id_ne?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<TokenQueryInput>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  owner_id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  customer_id_gt?: Maybe<Scalars['String']>;
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  eventLog_in?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  customer_id_ne?: Maybe<Scalars['String']>;
  owner_id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  newOwner_id_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  owner_id_exists?: Maybe<Scalars['Boolean']>;
  owner_id_lte?: Maybe<Scalars['ObjectId']>;
  customer_id?: Maybe<Scalars['String']>;
  customer_id_exists?: Maybe<Scalars['Boolean']>;
  owner_id_gte?: Maybe<Scalars['ObjectId']>;
  newOwner_id_gte?: Maybe<Scalars['ObjectId']>;
  customer_id_lte?: Maybe<Scalars['String']>;
  newOwner_id_ne?: Maybe<Scalars['ObjectId']>;
  customer_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  customer_id_gte?: Maybe<Scalars['String']>;
  customer_id_lt?: Maybe<Scalars['String']>;
  newOwner_id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  customer_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  newOwner_id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  newOwner_id_lt?: Maybe<Scalars['ObjectId']>;
  owner_id_lt?: Maybe<Scalars['ObjectId']>;
  newOwner_id_lte?: Maybe<Scalars['ObjectId']>;
  newOwner_id_gt?: Maybe<Scalars['ObjectId']>;
};

export type StudentPortfolioHomeQueryInput = {
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  address_gt?: Maybe<Scalars['String']>;
  address_gte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  language_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  language_exists?: Maybe<Scalars['Boolean']>;
  address_exists?: Maybe<Scalars['Boolean']>;
  address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  language_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  address_ne?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_lte?: Maybe<Scalars['String']>;
};

export type TokenUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  newOwner_id_unset?: Maybe<Scalars['Boolean']>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  customer_id?: Maybe<Scalars['String']>;
  customer_id_unset?: Maybe<Scalars['Boolean']>;
  owner_id_unset?: Maybe<Scalars['Boolean']>;
  eventLog?: Maybe<Array<Maybe<TokenEventLogUpdateInput>>>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioSchoolUpdateInput = {
  district?: Maybe<Scalars['String']>;
  district_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_unset?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioQueryInput = {
  grade_lt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  home?: Maybe<StudentPortfolioHomeQueryInput>;
  gender?: Maybe<Scalars['String']>;
  gender_gte?: Maybe<Scalars['String']>;
  grade_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_lte?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  date_exists?: Maybe<Scalars['Boolean']>;
  grade_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_exists?: Maybe<Scalars['Boolean']>;
  ethnicity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ethnicity_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<StudentPortfolioQueryInput>>;
  guardian?: Maybe<StudentPortfolioGuardianQueryInput>;
  ethnicity_exists?: Maybe<Scalars['Boolean']>;
  gender_lte?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_lte?: Maybe<Scalars['String']>;
  date_gte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<StudentPortfolioQueryInput>>;
  date_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  date_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  guardian_exists?: Maybe<Scalars['Boolean']>;
  gender_gt?: Maybe<Scalars['String']>;
  home_exists?: Maybe<Scalars['Boolean']>;
  grade_gte?: Maybe<Scalars['String']>;
  date_ne?: Maybe<Scalars['String']>;
  gender_ne?: Maybe<Scalars['String']>;
  gender_exists?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['String']>;
  school?: Maybe<StudentPortfolioSchoolQueryInput>;
  school_exists?: Maybe<Scalars['Boolean']>;
  date_gt?: Maybe<Scalars['String']>;
  grade_ne?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_gt?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  gender_lt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type StudentPortfolioHome = {
  __typename?: 'StudentPortfolioHome';
  /** @deprecated  */
  address?: Maybe<Scalars['String']>;
  /** @deprecated  */
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum ParentPortfolioSortByInput {
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  HomeaddressAsc = 'HOMEADDRESS_ASC',
  HomeaddressDesc = 'HOMEADDRESS_DESC',
  ParticipantemailAsc = 'PARTICIPANTEMAIL_ASC',
  ParticipantemailDesc = 'PARTICIPANTEMAIL_DESC',
  IdAsc = '_ID_ASC'
}

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

export type StudentPortfolioHomeInsertInput = {
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
};

export type UserEventLogUpdateInput = {
  created_unset?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['DateTime']>;
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
  user?: Maybe<User>;
  /** @deprecated  */
  users: Array<Maybe<User>>;
};


export type QueryEmployerPortfolioArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
};


export type QueryEmployerPortfoliosArgs = {
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<EmployerPortfolioSortByInput>;
  query?: Maybe<EmployerPortfolioQueryInput>;
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
  query?: Maybe<SchoolPortfolioQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SchoolPortfolioSortByInput>;
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


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
};


export type TokenEventLog = {
  __typename?: 'TokenEventLog';
  /** @deprecated  */
  created?: Maybe<Scalars['DateTime']>;
  /** @deprecated  */
  event?: Maybe<Scalars['String']>;
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

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  /** @deprecated  */
  matchedCount: Scalars['Int'];
  /** @deprecated  */
  modifiedCount: Scalars['Int'];
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

export type UserUpdateInput = {
  stripeId_unset?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
  lastName_unset?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  firstName_unset?: Maybe<Scalars['Boolean']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogUpdateInput>>>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  userTypes_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
};

export type TokenInsertInput = {
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  customer_id?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<TokenEventLogInsertInput>>>;
};

export type TokenEventLogQueryInput = {
  created_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  event_exists?: Maybe<Scalars['Boolean']>;
  created_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  event_gt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<TokenEventLogQueryInput>>;
  event_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  created_ne?: Maybe<Scalars['DateTime']>;
  created?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<TokenEventLogQueryInput>>;
  created_lt?: Maybe<Scalars['DateTime']>;
  created_gt?: Maybe<Scalars['DateTime']>;
  created_exists?: Maybe<Scalars['Boolean']>;
  event?: Maybe<Scalars['String']>;
  created_lte?: Maybe<Scalars['DateTime']>;
  event_gte?: Maybe<Scalars['String']>;
  event_lt?: Maybe<Scalars['String']>;
  event_lte?: Maybe<Scalars['String']>;
  created_gte?: Maybe<Scalars['DateTime']>;
  event_ne?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolQueryInput = {
  name_gte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_lte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  name_exists?: Maybe<Scalars['Boolean']>;
  district_exists?: Maybe<Scalars['Boolean']>;
  district?: Maybe<Scalars['String']>;
  district_lt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  district_gte?: Maybe<Scalars['String']>;
  district_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_ne?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  district_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lt?: Maybe<Scalars['String']>;
  district_gt?: Maybe<Scalars['String']>;
};

export type EmployerPortfolioQueryInput = {
  primaryProduct_gt?: Maybe<Scalars['String']>;
  jobTitle_gte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<EmployerPortfolioQueryInput>>;
  primaryProduct_lt?: Maybe<Scalars['String']>;
  jobTitle_ne?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  primaryProduct_lte?: Maybe<Scalars['String']>;
  primaryProduct_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  workAddress_lt?: Maybe<Scalars['String']>;
  industry_lt?: Maybe<Scalars['String']>;
  workAddress_gt?: Maybe<Scalars['String']>;
  primaryProduct_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress_gte?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  primaryProduct_ne?: Maybe<Scalars['String']>;
  workAddress_ne?: Maybe<Scalars['String']>;
  workAddress_exists?: Maybe<Scalars['Boolean']>;
  employerName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  industry_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_lt?: Maybe<Scalars['String']>;
  jobTitle_gt?: Maybe<Scalars['String']>;
  employerName_ne?: Maybe<Scalars['String']>;
  employerName_gt?: Maybe<Scalars['String']>;
  primaryProduct_gte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  employerName_lte?: Maybe<Scalars['String']>;
  jobTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<EmployerPortfolioQueryInput>>;
  workAddress_lte?: Maybe<Scalars['String']>;
  workAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_lte?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  industry_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  employerName_exists?: Maybe<Scalars['Boolean']>;
  primaryProduct_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  employerName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  industry_exists?: Maybe<Scalars['Boolean']>;
  jobTitle_exists?: Maybe<Scalars['Boolean']>;
  industry?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  industry_gt?: Maybe<Scalars['String']>;
  employerName?: Maybe<Scalars['String']>;
  employerName_lt?: Maybe<Scalars['String']>;
  workAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  industry_lte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  primaryProduct?: Maybe<Scalars['String']>;
  industry_gte?: Maybe<Scalars['String']>;
  industry_ne?: Maybe<Scalars['String']>;
  employerName_gte?: Maybe<Scalars['String']>;
};

export type SchoolPortfolioQueryInput = {
  staffType_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder_gt?: Maybe<Scalars['String']>;
  schoolDistrict_lte?: Maybe<Scalars['String']>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  districtAddress?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<SchoolPortfolioQueryInput>>;
  stakeholder_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  staffType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholderAccess_lte?: Maybe<Scalars['String']>;
  stakeholder_ne?: Maybe<Scalars['String']>;
  stakeholderAccess_exists?: Maybe<Scalars['Boolean']>;
  stakeholder_exists?: Maybe<Scalars['Boolean']>;
  stakeholderAccess_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  districtAddress_gte?: Maybe<Scalars['String']>;
  stakeholderAccess_lt?: Maybe<Scalars['String']>;
  districtAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict?: Maybe<Scalars['String']>;
  stakeholder_lt?: Maybe<Scalars['String']>;
  districtAddress_lte?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  districtAddress_gt?: Maybe<Scalars['String']>;
  stakeholderAccess_ne?: Maybe<Scalars['String']>;
  stakeholderAccess_gte?: Maybe<Scalars['String']>;
  districtAddress_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder_gte?: Maybe<Scalars['String']>;
  districtAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  staffType_exists?: Maybe<Scalars['Boolean']>;
  stakeholderAccess_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  stakeholder_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_ne?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  districtAddress_lt?: Maybe<Scalars['String']>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<SchoolPortfolioQueryInput>>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  stakeholderAccess_gt?: Maybe<Scalars['String']>;
  districtAddress_ne?: Maybe<Scalars['String']>;
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  stakeholder_lte?: Maybe<Scalars['String']>;
};

export type UserEventLog = {
  __typename?: 'UserEventLog';
  /** @deprecated  */
  created?: Maybe<Scalars['DateTime']>;
};

export enum SchoolPortfolioSortByInput {
  StakeholderaccessAsc = 'STAKEHOLDERACCESS_ASC',
  IdDesc = '_ID_DESC',
  DistrictaddressAsc = 'DISTRICTADDRESS_ASC',
  SchooldistrictDesc = 'SCHOOLDISTRICT_DESC',
  StakeholderDesc = 'STAKEHOLDER_DESC',
  StakeholderaccessDesc = 'STAKEHOLDERACCESS_DESC',
  IdAsc = '_ID_ASC',
  DistrictaddressDesc = 'DISTRICTADDRESS_DESC',
  SchooldistrictAsc = 'SCHOOLDISTRICT_ASC',
  StakeholderAsc = 'STAKEHOLDER_ASC'
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
  replaceOneUser?: Maybe<User>;
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
  query?: Maybe<TokenQueryInput>;
  data: TokenInsertInput;
};


export type MutationReplaceOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
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
  set: SchoolPortfolioUpdateInput;
  query?: Maybe<SchoolPortfolioQueryInput>;
};


export type MutationUpdateOneStudentPortfolioArgs = {
  set: StudentPortfolioUpdateInput;
  query?: Maybe<StudentPortfolioQueryInput>;
};


export type MutationUpdateOneTeacherPortfolioArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
  set: TeacherPortfolioUpdateInput;
};


export type MutationUpdateOneTokenArgs = {
  query?: Maybe<TokenQueryInput>;
  set: TokenUpdateInput;
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


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};

export type StudentPortfolioGuardianInsertInput = {
  relationship?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type ParentPortfolioInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
  homeAddress?: Maybe<Scalars['String']>;
  participantEmail?: Maybe<Scalars['String']>;
};

export type StudentPortfolioInsertInput = {
  grade?: Maybe<Scalars['String']>;
  guardian?: Maybe<StudentPortfolioGuardianInsertInput>;
  home?: Maybe<StudentPortfolioHomeInsertInput>;
  school?: Maybe<StudentPortfolioSchoolInsertInput>;
  _id?: Maybe<Scalars['ObjectId']>;
  date?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
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
  "__schema": {
    "types": []
  }
};
      export default result;
    