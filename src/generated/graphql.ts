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

export type EmployerPortfolioWorkQueryInput = {
  state_gt?: Maybe<Scalars['String']>;
  streetAddress_gte?: Maybe<Scalars['String']>;
  streetAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_lte?: Maybe<Scalars['String']>;
  state_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_lt?: Maybe<Scalars['String']>;
  streetAddress_lt?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  state_ne?: Maybe<Scalars['String']>;
  city_gte?: Maybe<Scalars['String']>;
  zipcode_lt?: Maybe<Scalars['String']>;
  streetAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_exists?: Maybe<Scalars['Boolean']>;
  streetAddress_lte?: Maybe<Scalars['String']>;
  state_lte?: Maybe<Scalars['String']>;
  streetAddress_ne?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  city_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_gte?: Maybe<Scalars['String']>;
  state_lt?: Maybe<Scalars['String']>;
  zipcode_ne?: Maybe<Scalars['String']>;
  streetAddress_gt?: Maybe<Scalars['String']>;
  city_ne?: Maybe<Scalars['String']>;
  city_exists?: Maybe<Scalars['Boolean']>;
  zipcode_gt?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipcode_gte?: Maybe<Scalars['String']>;
  city_gt?: Maybe<Scalars['String']>;
  zipcode_lte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<EmployerPortfolioWorkQueryInput>>;
  streetAddress_exists?: Maybe<Scalars['Boolean']>;
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  zipcode_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  zipcode_exists?: Maybe<Scalars['Boolean']>;
  zipcode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<EmployerPortfolioWorkQueryInput>>;
  city?: Maybe<Scalars['String']>;
};

export type EmployerPortfolioInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  employerName?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  primaryProduct?: Maybe<Scalars['String']>;
  work?: Maybe<EmployerPortfolioWorkInsertInput>;
};

export type TransactionTokenLogQueryInput = {
  timestamp?: Maybe<Scalars['DateTime']>;
  sentTo_exists?: Maybe<Scalars['Boolean']>;
  receivedFrom_ne?: Maybe<Scalars['ObjectId']>;
  receivedFrom_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  timestamp_gt?: Maybe<Scalars['DateTime']>;
  tokensSent?: Maybe<Scalars['Int']>;
  timestamp_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  tokensSent_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sentTo_ne?: Maybe<Scalars['ObjectId']>;
  receivedFrom_gt?: Maybe<Scalars['ObjectId']>;
  event_lt?: Maybe<Scalars['String']>;
  tokensSent_lte?: Maybe<Scalars['Int']>;
  event_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  receivedFrom?: Maybe<Scalars['ObjectId']>;
  receivedFrom_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  receivedFrom_gte?: Maybe<Scalars['ObjectId']>;
  tokensSent_gte?: Maybe<Scalars['Int']>;
  sentTo?: Maybe<Scalars['ObjectId']>;
  sentTo_lt?: Maybe<Scalars['ObjectId']>;
  timestamp_gte?: Maybe<Scalars['DateTime']>;
  tokensSent_exists?: Maybe<Scalars['Boolean']>;
  timestamp_ne?: Maybe<Scalars['DateTime']>;
  event_lte?: Maybe<Scalars['String']>;
  event_gt?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<TransactionTokenLogQueryInput>>;
  sentTo_gte?: Maybe<Scalars['ObjectId']>;
  event_ne?: Maybe<Scalars['String']>;
  tokensSent_gt?: Maybe<Scalars['Int']>;
  sentTo_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  receivedFrom_exists?: Maybe<Scalars['Boolean']>;
  timestamp_exists?: Maybe<Scalars['Boolean']>;
  tokensSent_ne?: Maybe<Scalars['Int']>;
  event_exists?: Maybe<Scalars['Boolean']>;
  timestamp_lte?: Maybe<Scalars['DateTime']>;
  tokensSent_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  timestamp_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  timestamp_lt?: Maybe<Scalars['DateTime']>;
  sentTo_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  event_gte?: Maybe<Scalars['String']>;
  receivedFrom_lt?: Maybe<Scalars['ObjectId']>;
  receivedFrom_lte?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<TransactionTokenLogQueryInput>>;
  sentTo_gt?: Maybe<Scalars['ObjectId']>;
  sentTo_lte?: Maybe<Scalars['ObjectId']>;
  event_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  tokensSent_lt?: Maybe<Scalars['Int']>;
};

export type ParentPortfolioParentInsertInput = {
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type TransactionUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  referral?: Maybe<Array<Maybe<TransactionReferralUpdateInput>>>;
  referral_unset?: Maybe<Scalars['Boolean']>;
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLogUpdateInput>>>;
  tokenLog_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type StudentPortfolioGuardian = {
  __typename?: 'StudentPortfolioGuardian';
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
  /** @deprecated  */
  firstName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  lastName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  relationship?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchool = {
  __typename?: 'StudentPortfolioSchool';
  /** @deprecated  */
  district?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
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
  phoneNumber?: Maybe<Scalars['String']>;
  /** @deprecated  */
  profileImg?: Maybe<Scalars['String']>;
  /** @deprecated  */
  stripeId?: Maybe<Scalars['String']>;
  /** @deprecated  */
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SchoolPortfolioQueryInput = {
  schoolDistrict_ne?: Maybe<Scalars['String']>;
  schoolDistrict_lte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  district?: Maybe<SchoolPortfolioDistrictQueryInput>;
  position_gte?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  staffType_exists?: Maybe<Scalars['Boolean']>;
  position_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  position_gt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  staffType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  position?: Maybe<Scalars['String']>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  position_ne?: Maybe<Scalars['String']>;
  position_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<SchoolPortfolioQueryInput>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  position_lt?: Maybe<Scalars['String']>;
  staffType_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  OR?: Maybe<Array<SchoolPortfolioQueryInput>>;
  position_lte?: Maybe<Scalars['String']>;
  district_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  position_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum EmployerPortfolioSortByInput {
  PrimaryproductDesc = 'PRIMARYPRODUCT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmployernameAsc = 'EMPLOYERNAME_ASC',
  JobtitleAsc = 'JOBTITLE_ASC',
  PrimaryproductAsc = 'PRIMARYPRODUCT_ASC',
  JobtitleDesc = 'JOBTITLE_DESC',
  EmployernameDesc = 'EMPLOYERNAME_DESC',
  IndustryAsc = 'INDUSTRY_ASC',
  IndustryDesc = 'INDUSTRY_DESC'
}

export type TeacherPortfolioQueryInput = {
  AND?: Maybe<Array<TeacherPortfolioQueryInput>>;
  schools?: Maybe<TeacherPortfolioSchoolQueryInput>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName_exists?: Maybe<Scalars['Boolean']>;
  subjects_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_ne?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  schools_exists?: Maybe<Scalars['Boolean']>;
  schoolName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolName_lte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  OR?: Maybe<Array<TeacherPortfolioQueryInput>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_ne?: Maybe<Scalars['String']>;
  schoolName_lt?: Maybe<Scalars['String']>;
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_lte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  schoolName_gt?: Maybe<Scalars['String']>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  schoolName_gte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  subjects_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  subjects_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TokenQueryInput = {
  newOwner_id_exists?: Maybe<Scalars['Boolean']>;
  newOwner_id_lt?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<TokenQueryInput>>;
  customer_id_exists?: Maybe<Scalars['Boolean']>;
  owner_id_gte?: Maybe<Scalars['ObjectId']>;
  owner_id_lt?: Maybe<Scalars['ObjectId']>;
  eventLog_in?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  customer_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  customer_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  customer_id_ne?: Maybe<Scalars['String']>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  owner_id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  owner_id_ne?: Maybe<Scalars['ObjectId']>;
  customer_id_lte?: Maybe<Scalars['String']>;
  owner_id_exists?: Maybe<Scalars['Boolean']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  customer_id_gt?: Maybe<Scalars['String']>;
  newOwner_id_gt?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  customer_id?: Maybe<Scalars['String']>;
  newOwner_id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  eventLog?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  owner_id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  owner_id_gt?: Maybe<Scalars['ObjectId']>;
  newOwner_id_gte?: Maybe<Scalars['ObjectId']>;
  customer_id_gte?: Maybe<Scalars['String']>;
  owner_id_lte?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  newOwner_id_lte?: Maybe<Scalars['ObjectId']>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<TokenQueryInput>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  newOwner_id_ne?: Maybe<Scalars['ObjectId']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  eventLog_nin?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  newOwner_id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  customer_id_lt?: Maybe<Scalars['String']>;
};

export type DefaultPayload = {
  __typename?: 'DefaultPayload';
  /** @deprecated  */
  status: Scalars['String'];
};

export type TeacherPortfolioSchoolInsertInput = {
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type StudentPortfolioQueryInput = {
  grade_ne?: Maybe<Scalars['String']>;
  guardian_exists?: Maybe<Scalars['Boolean']>;
  gender_lte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioQueryInput>>;
  school_exists?: Maybe<Scalars['Boolean']>;
  home?: Maybe<StudentPortfolioHomeQueryInput>;
  gender_gte?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  school?: Maybe<StudentPortfolioSchoolQueryInput>;
  gender_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_exists?: Maybe<Scalars['Boolean']>;
  date_gt?: Maybe<Scalars['String']>;
  guardian?: Maybe<StudentPortfolioGuardianQueryInput>;
  ethnicity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_gt?: Maybe<Scalars['String']>;
  gender_ne?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  ethnicity_exists?: Maybe<Scalars['Boolean']>;
  home_exists?: Maybe<Scalars['Boolean']>;
  date_ne?: Maybe<Scalars['String']>;
  date_lte?: Maybe<Scalars['String']>;
  ethnicity_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  invited?: Maybe<Scalars['Boolean']>;
  grade?: Maybe<Scalars['String']>;
  invited_exists?: Maybe<Scalars['Boolean']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<StudentPortfolioQueryInput>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  grade_lt?: Maybe<Scalars['String']>;
  grade_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_lt?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  gender_exists?: Maybe<Scalars['Boolean']>;
  grade_gte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  grade_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  gender_lt?: Maybe<Scalars['String']>;
  date_gte?: Maybe<Scalars['String']>;
  date_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_gt?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_lte?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  invited_ne?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioSchoolInsertInput = {
  district?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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

export type QueryTransactionArgs = {
  query?: Maybe<TransactionQueryInput>;
};

export type QueryTransactionsArgs = {
  sortBy?: Maybe<TransactionSortByInput>;
  query?: Maybe<TransactionQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};

export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};

export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
};

export type TokenInsertInput = {
  eventLog?: Maybe<Array<Maybe<TokenEventLogInsertInput>>>;
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  customer_id?: Maybe<Scalars['String']>;
};

export type SchoolPortfolioDistrictUpdateInput = {
  city?: Maybe<Scalars['String']>;
  city_unset?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  state_unset?: Maybe<Scalars['Boolean']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddress_unset?: Maybe<Scalars['Boolean']>;
  zipcode?: Maybe<Scalars['String']>;
  zipcode_unset?: Maybe<Scalars['Boolean']>;
};

export type ParentPortfolioUpdateInput = {
  parent?: Maybe<ParentPortfolioParentUpdateInput>;
  parent_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
};

export type TransactionTokenLogUpdateInput = {
  tokensSent_unset?: Maybe<Scalars['Boolean']>;
  event_unset?: Maybe<Scalars['Boolean']>;
  event?: Maybe<Scalars['String']>;
  sentTo_unset?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  sentTo?: Maybe<Scalars['ObjectId']>;
  timestamp_unset?: Maybe<Scalars['Boolean']>;
  tokensSent?: Maybe<Scalars['Int']>;
  tokensSent_inc?: Maybe<Scalars['Int']>;
  receivedFrom?: Maybe<Scalars['ObjectId']>;
  receivedFrom_unset?: Maybe<Scalars['Boolean']>;
};

export type EmployerPortfolioUpdateInput = {
  industry?: Maybe<Scalars['String']>;
  work?: Maybe<EmployerPortfolioWorkUpdateInput>;
  work_unset?: Maybe<Scalars['Boolean']>;
  employerName?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  jobTitle_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  primaryProduct?: Maybe<Scalars['String']>;
  primaryProduct_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  employerName_unset?: Maybe<Scalars['Boolean']>;
  industry_unset?: Maybe<Scalars['Boolean']>;
};

export type EmployerPortfolioWorkUpdateInput = {
  zipcode?: Maybe<Scalars['String']>;
  zipcode_unset?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  city_unset?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  state_unset?: Maybe<Scalars['Boolean']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddress_unset?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioGuardianUpdateInput = {
  lastName?: Maybe<Scalars['String']>;
  lastName_unset?: Maybe<Scalars['Boolean']>;
  relationship?: Maybe<Scalars['String']>;
  relationship_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_unset?: Maybe<Scalars['Boolean']>;
};

export type ParentPortfolioParent = {
  __typename?: 'ParentPortfolioParent';
  /** @deprecated  */
  city?: Maybe<Scalars['String']>;
  /** @deprecated  */
  state?: Maybe<Scalars['String']>;
  /** @deprecated  */
  streetAddress?: Maybe<Scalars['String']>;
  /** @deprecated  */
  zipcode?: Maybe<Scalars['String']>;
};

export type StudentPortfolioHomeQueryInput = {
  city_lte?: Maybe<Scalars['String']>;
  state_gt?: Maybe<Scalars['String']>;
  language_exists?: Maybe<Scalars['Boolean']>;
  zipcode_gt?: Maybe<Scalars['String']>;
  streetAddress_gt?: Maybe<Scalars['String']>;
  zipcode_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_ne?: Maybe<Scalars['String']>;
  zipcode_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  language_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_exists?: Maybe<Scalars['Boolean']>;
  state_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress_exists?: Maybe<Scalars['Boolean']>;
  language_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress_gte?: Maybe<Scalars['String']>;
  city_lt?: Maybe<Scalars['String']>;
  zipcode_gte?: Maybe<Scalars['String']>;
  streetAddress_ne?: Maybe<Scalars['String']>;
  zipcode_lte?: Maybe<Scalars['String']>;
  city_gte?: Maybe<Scalars['String']>;
  state_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  state_ne?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddress_lt?: Maybe<Scalars['String']>;
  streetAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<Scalars['String']>;
  zipcode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  zipcode_ne?: Maybe<Scalars['String']>;
  city_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress_lte?: Maybe<Scalars['String']>;
  zipcode_lt?: Maybe<Scalars['String']>;
  state_lt?: Maybe<Scalars['String']>;
  state_gte?: Maybe<Scalars['String']>;
  state_lte?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  city_gt?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolQueryInput = {
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  district_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_lt?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_gt?: Maybe<Scalars['String']>;
  district_gte?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  district_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  district?: Maybe<Scalars['String']>;
  district_lte?: Maybe<Scalars['String']>;
  district_ne?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
};

export type TransactionReferralQueryInput = {
  sentTo_lt?: Maybe<Scalars['String']>;
  sentTo_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  timestamp_lt?: Maybe<Scalars['DateTime']>;
  sentTo?: Maybe<Scalars['String']>;
  sentTo_gte?: Maybe<Scalars['String']>;
  sentTo_ne?: Maybe<Scalars['String']>;
  sentTo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_gte?: Maybe<Scalars['DateTime']>;
  sentTo_lte?: Maybe<Scalars['String']>;
  timestamp_exists?: Maybe<Scalars['Boolean']>;
  timestamp_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  timestamp_gt?: Maybe<Scalars['DateTime']>;
  sentTo_gt?: Maybe<Scalars['String']>;
  timestamp_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  timestamp_ne?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<TransactionReferralQueryInput>>;
  sentTo_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<TransactionReferralQueryInput>>;
  timestamp_lte?: Maybe<Scalars['DateTime']>;
};

export type TransactionTokenLog = {
  __typename?: 'TransactionTokenLog';
  /** @deprecated  */
  event?: Maybe<Scalars['String']>;
  /** @deprecated  */
  receivedFrom?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  sentTo?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  timestamp?: Maybe<Scalars['DateTime']>;
  /** @deprecated  */
  tokensSent?: Maybe<Scalars['Int']>;
};

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
  data: SchoolPortfolioInsertInput;
  query?: Maybe<SchoolPortfolioQueryInput>;
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
  set: StudentPortfolioUpdateInput;
  query?: Maybe<StudentPortfolioQueryInput>;
};

export type MutationUpdateManyTeacherPortfoliosArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
  set: TeacherPortfolioUpdateInput;
};

export type MutationUpdateManyTokensArgs = {
  set: TokenUpdateInput;
  query?: Maybe<TokenQueryInput>;
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
  data: EmployerPortfolioInsertInput;
  query?: Maybe<EmployerPortfolioQueryInput>;
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
  query?: Maybe<StudentPortfolioQueryInput>;
  data: StudentPortfolioInsertInput;
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
  data: TransactionInsertInput;
  query?: Maybe<TransactionQueryInput>;
};

export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};

export type TokenEventLogUpdateInput = {
  event_unset?: Maybe<Scalars['Boolean']>;
  created?: Maybe<Scalars['DateTime']>;
  created_unset?: Maybe<Scalars['Boolean']>;
  event?: Maybe<Scalars['String']>;
};

export type UserInsertInput = {
  profileImg?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogInsertInput>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
};

export type StudentPortfolioHomeUpdateInput = {
  language_unset?: Maybe<Scalars['Boolean']>;
  zipcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  state_unset?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress_unset?: Maybe<Scalars['Boolean']>;
  zipcode_unset?: Maybe<Scalars['Boolean']>;
  city_unset?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
};

export type SchoolPortfolioDistrictInsertInput = {
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
};

export type TransactionReferralInsertInput = {
  timestamp?: Maybe<Scalars['DateTime']>;
  sentTo?: Maybe<Scalars['String']>;
};

export type SendReferalInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ObjectId'];
};

export type TokenUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  customer_id?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<TokenEventLogUpdateInput>>>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
  newOwner_id_unset?: Maybe<Scalars['Boolean']>;
  owner_id_unset?: Maybe<Scalars['Boolean']>;
  customer_id_unset?: Maybe<Scalars['Boolean']>;
};

export type SchoolPortfolio = {
  __typename?: 'SchoolPortfolio';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  district?: Maybe<SchoolPortfolioDistrict>;
  /** @deprecated  */
  position?: Maybe<Scalars['String']>;
  /** @deprecated  */
  schoolDistrict?: Maybe<Scalars['String']>;
  /** @deprecated  */
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum UserSortByInput {
  ProfileimgDesc = 'PROFILEIMG_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  StripeidDesc = 'STRIPEID_DESC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  PhonenumberDesc = 'PHONENUMBER_DESC',
  EmailDesc = 'EMAIL_DESC',
  ProfileimgAsc = 'PROFILEIMG_ASC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  EmailAsc = 'EMAIL_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  PhonenumberAsc = 'PHONENUMBER_ASC',
  StripeidAsc = 'STRIPEID_ASC'
}

export type ParentPortfolioInsertInput = {
  parent?: Maybe<ParentPortfolioParentInsertInput>;
  _id?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
};

export type TeacherPortfolioSchoolQueryInput = {
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<TeacherPortfolioSchoolQueryInput>>;
  state_lt?: Maybe<Scalars['String']>;
  streetAddress_lte?: Maybe<Scalars['String']>;
  city_ne?: Maybe<Scalars['String']>;
  streetAddress_gte?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  city_lt?: Maybe<Scalars['String']>;
  zipcode_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<TeacherPortfolioSchoolQueryInput>>;
  city?: Maybe<Scalars['String']>;
  state_gt?: Maybe<Scalars['String']>;
  state_gte?: Maybe<Scalars['String']>;
  zipcode_ne?: Maybe<Scalars['String']>;
  zipcode_gte?: Maybe<Scalars['String']>;
  zipcode_exists?: Maybe<Scalars['Boolean']>;
  city_gte?: Maybe<Scalars['String']>;
  state_ne?: Maybe<Scalars['String']>;
  zipcode_lt?: Maybe<Scalars['String']>;
  streetAddress_lt?: Maybe<Scalars['String']>;
  city_gt?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  streetAddress_gt?: Maybe<Scalars['String']>;
  city_exists?: Maybe<Scalars['Boolean']>;
  streetAddress_exists?: Maybe<Scalars['Boolean']>;
  streetAddress_ne?: Maybe<Scalars['String']>;
  state_lte?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  state_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  zipcode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_exists?: Maybe<Scalars['Boolean']>;
  zipcode_gt?: Maybe<Scalars['String']>;
  zipcode_lte?: Maybe<Scalars['String']>;
  streetAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_lte?: Maybe<Scalars['String']>;
  city_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  /** @deprecated  */
  matchedCount: Scalars['Int'];
  /** @deprecated  */
  modifiedCount: Scalars['Int'];
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
  work?: Maybe<EmployerPortfolioWork>;
};

export enum TeacherPortfolioSortByInput {
  SchooldistrictAsc = 'SCHOOLDISTRICT_ASC',
  SchooldistrictDesc = 'SCHOOLDISTRICT_DESC',
  SchoolnameAsc = 'SCHOOLNAME_ASC',
  SchoolnameDesc = 'SCHOOLNAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type StudentPortfolioGuardianInsertInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
};

export type StudentPortfolioHomeInsertInput = {
  zipcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
};

export type SchoolPortfolioInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  district?: Maybe<SchoolPortfolioDistrictInsertInput>;
  position?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TransactionInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  referral?: Maybe<Array<Maybe<TransactionReferralInsertInput>>>;
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLogInsertInput>>>;
};

export type TeacherPortfolio = {
  __typename?: 'TeacherPortfolio';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  schoolDistrict?: Maybe<Scalars['String']>;
  /** @deprecated  */
  schoolName?: Maybe<Scalars['String']>;
  /** @deprecated  */
  schools?: Maybe<TeacherPortfolioSchool>;
  /** @deprecated  */
  subjects?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ParentPortfolioParentQueryInput = {
  zipcode_ne?: Maybe<Scalars['String']>;
  zipcode_exists?: Maybe<Scalars['Boolean']>;
  city_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress_exists?: Maybe<Scalars['Boolean']>;
  streetAddress_lt?: Maybe<Scalars['String']>;
  state_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<ParentPortfolioParentQueryInput>>;
  state_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_gt?: Maybe<Scalars['String']>;
  streetAddress_lte?: Maybe<Scalars['String']>;
  state_gt?: Maybe<Scalars['String']>;
  state_ne?: Maybe<Scalars['String']>;
  zipcode_lte?: Maybe<Scalars['String']>;
  city_lt?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddress_gt?: Maybe<Scalars['String']>;
  streetAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  zipcode_lt?: Maybe<Scalars['String']>;
  streetAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  zipcode?: Maybe<Scalars['String']>;
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city?: Maybe<Scalars['String']>;
  city_gte?: Maybe<Scalars['String']>;
  state_exists?: Maybe<Scalars['Boolean']>;
  zipcode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_exists?: Maybe<Scalars['Boolean']>;
  zipcode_gte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<ParentPortfolioParentQueryInput>>;
  state_gte?: Maybe<Scalars['String']>;
  zipcode_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress_gte?: Maybe<Scalars['String']>;
  city_lte?: Maybe<Scalars['String']>;
  streetAddress_ne?: Maybe<Scalars['String']>;
  state_lte?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city_ne?: Maybe<Scalars['String']>;
  zipcode_gt?: Maybe<Scalars['String']>;
};

export type SchoolPortfolioDistrict = {
  __typename?: 'SchoolPortfolioDistrict';
  /** @deprecated  */
  city?: Maybe<Scalars['String']>;
  /** @deprecated  */
  state?: Maybe<Scalars['String']>;
  /** @deprecated  */
  streetAddress?: Maybe<Scalars['String']>;
  /** @deprecated  */
  zipcode?: Maybe<Scalars['String']>;
};

export type TeacherPortfolioSchool = {
  __typename?: 'TeacherPortfolioSchool';
  /** @deprecated  */
  city?: Maybe<Scalars['String']>;
  /** @deprecated  */
  state?: Maybe<Scalars['String']>;
  /** @deprecated  */
  streetAddress?: Maybe<Scalars['String']>;
  /** @deprecated  */
  zipcode?: Maybe<Scalars['String']>;
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

export type StudentPortfolioInsertInput = {
  guardian?: Maybe<StudentPortfolioGuardianInsertInput>;
  invited?: Maybe<Scalars['Boolean']>;
  school?: Maybe<StudentPortfolioSchoolInsertInput>;
  home?: Maybe<StudentPortfolioHomeInsertInput>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  date?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
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

export type ParentPortfolioParentUpdateInput = {
  streetAddress_unset?: Maybe<Scalars['Boolean']>;
  zipcode?: Maybe<Scalars['String']>;
  zipcode_unset?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  city_unset?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  state_unset?: Maybe<Scalars['Boolean']>;
  streetAddress?: Maybe<Scalars['String']>;
};

export type TransactionReferralUpdateInput = {
  sentTo?: Maybe<Scalars['String']>;
  sentTo_unset?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_unset?: Maybe<Scalars['Boolean']>;
};

export type TeacherPortfolioUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  schoolName_unset?: Maybe<Scalars['Boolean']>;
  schools?: Maybe<TeacherPortfolioSchoolUpdateInput>;
  schoolDistrict_unset?: Maybe<Scalars['Boolean']>;
  schools_unset?: Maybe<Scalars['Boolean']>;
  subjects_unset?: Maybe<Scalars['Boolean']>;
  subjects?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
};

export type UserEventLog = {
  __typename?: 'UserEventLog';
  /** @deprecated  */
  event?: Maybe<Scalars['String']>;
  /** @deprecated  */
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type ParentPortfolio = {
  __typename?: 'ParentPortfolio';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
  /** @deprecated  */
  parent?: Maybe<ParentPortfolioParent>;
};

export type EmployerPortfolioQueryInput = {
  work?: Maybe<EmployerPortfolioWorkQueryInput>;
  employerName_gte?: Maybe<Scalars['String']>;
  industry_gt?: Maybe<Scalars['String']>;
  industry_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<EmployerPortfolioQueryInput>>;
  industry_gte?: Maybe<Scalars['String']>;
  jobTitle_lt?: Maybe<Scalars['String']>;
  employerName_gt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<EmployerPortfolioQueryInput>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  jobTitle_ne?: Maybe<Scalars['String']>;
  employerName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  employerName_ne?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  industry_lte?: Maybe<Scalars['String']>;
  employerName?: Maybe<Scalars['String']>;
  industry_lt?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  jobTitle_lte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  primaryProduct_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_exists?: Maybe<Scalars['Boolean']>;
  jobTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  employerName_lte?: Maybe<Scalars['String']>;
  employerName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  industry_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  industry?: Maybe<Scalars['String']>;
  industry_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  work_exists?: Maybe<Scalars['Boolean']>;
  employerName_exists?: Maybe<Scalars['Boolean']>;
  primaryProduct_lte?: Maybe<Scalars['String']>;
  employerName_lt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  jobTitle_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_gte?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  primaryProduct?: Maybe<Scalars['String']>;
  jobTitle_exists?: Maybe<Scalars['Boolean']>;
  primaryProduct_ne?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  jobTitle_gt?: Maybe<Scalars['String']>;
  jobTitle_gte?: Maybe<Scalars['String']>;
  primaryProduct_gt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  industry_ne?: Maybe<Scalars['String']>;
  primaryProduct_lt?: Maybe<Scalars['String']>;
};

export enum SchoolPortfolioSortByInput {
  SchooldistrictAsc = 'SCHOOLDISTRICT_ASC',
  SchooldistrictDesc = 'SCHOOLDISTRICT_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  PositionAsc = 'POSITION_ASC',
  PositionDesc = 'POSITION_DESC'
}

export type TokenEventLogInsertInput = {
  created?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Scalars['String']>;
};

export type EmployerPortfolioWorkInsertInput = {
  streetAddress?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
};

export type SchoolPortfolioUpdateInput = {
  district_unset?: Maybe<Scalars['Boolean']>;
  district?: Maybe<SchoolPortfolioDistrictUpdateInput>;
  position?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_unset?: Maybe<Scalars['Boolean']>;
  staffType_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  position_unset?: Maybe<Scalars['Boolean']>;
};

export enum StudentPortfolioSortByInput {
  GradeDesc = 'GRADE_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  GradeAsc = 'GRADE_ASC'
}

export type UserEventLogQueryInput = {
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  timestamp_gte?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Scalars['String']>;
  event_lte?: Maybe<Scalars['String']>;
  timestamp_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  timestamp_ne?: Maybe<Scalars['DateTime']>;
  event_exists?: Maybe<Scalars['Boolean']>;
  timestamp_exists?: Maybe<Scalars['Boolean']>;
  timestamp_gt?: Maybe<Scalars['DateTime']>;
  event_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_lt?: Maybe<Scalars['String']>;
  timestamp_lt?: Maybe<Scalars['DateTime']>;
  event_gt?: Maybe<Scalars['String']>;
  event_gte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<UserEventLogQueryInput>>;
  event_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_ne?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<UserEventLogQueryInput>>;
  timestamp_lte?: Maybe<Scalars['DateTime']>;
};

export type TransactionReferral = {
  __typename?: 'TransactionReferral';
  /** @deprecated  */
  sentTo?: Maybe<Scalars['String']>;
  /** @deprecated  */
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type StudentPortfolioGuardianQueryInput = {
  lastName_gte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_lt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_ne?: Maybe<Scalars['String']>;
  relationship_gt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  relationship_gte?: Maybe<Scalars['String']>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  relationship_lte?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_exists?: Maybe<Scalars['Boolean']>;
  firstName_gt?: Maybe<Scalars['String']>;
  email_ne?: Maybe<Scalars['String']>;
  lastName_gt?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_lte?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  firstName?: Maybe<Scalars['String']>;
  firstName_ne?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
  relationship_ne?: Maybe<Scalars['String']>;
  relationship_exists?: Maybe<Scalars['Boolean']>;
  email_lt?: Maybe<Scalars['String']>;
  relationship_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_lt?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  email_gte?: Maybe<Scalars['String']>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  lastName_lte?: Maybe<Scalars['String']>;
  firstName_lt?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolUpdateInput = {
  district_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_unset?: Maybe<Scalars['Boolean']>;
  district?: Maybe<Scalars['String']>;
};

export type UserEventLogInsertInput = {
  event?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type UserUpdateInput = {
  firstName_unset?: Maybe<Scalars['Boolean']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  userTypes_unset?: Maybe<Scalars['Boolean']>;
  stripeId_unset?: Maybe<Scalars['Boolean']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  phoneNumber?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  profileImg_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogUpdateInput>>>;
  lastName_unset?: Maybe<Scalars['Boolean']>;
  stripeId?: Maybe<Scalars['String']>;
  phoneNumber_unset?: Maybe<Scalars['Boolean']>;
};

export type TransactionTokenLogInsertInput = {
  tokensSent?: Maybe<Scalars['Int']>;
  event?: Maybe<Scalars['String']>;
  receivedFrom?: Maybe<Scalars['ObjectId']>;
  sentTo?: Maybe<Scalars['ObjectId']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type SendTokensInput = {
  recipient_email?: Maybe<Scalars['String']>;
  token_ids?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  sender_id?: Maybe<Scalars['ObjectId']>;
  recipient_id?: Maybe<Scalars['ObjectId']>;
};

export type TeacherPortfolioInsertInput = {
  schools?: Maybe<TeacherPortfolioSchoolInsertInput>;
  subjects?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
};

export type TeacherPortfolioSchoolUpdateInput = {
  city?: Maybe<Scalars['String']>;
  city_unset?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Scalars['String']>;
  state_unset?: Maybe<Scalars['Boolean']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddress_unset?: Maybe<Scalars['Boolean']>;
  zipcode?: Maybe<Scalars['String']>;
  zipcode_unset?: Maybe<Scalars['Boolean']>;
};

export type ParentPortfolioQueryInput = {
  _id_gte?: Maybe<Scalars['ObjectId']>;
  email_lt?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  email_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
  email_ne?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  email_gte?: Maybe<Scalars['String']>;
  parent?: Maybe<ParentPortfolioParentQueryInput>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<ParentPortfolioQueryInput>>;
  AND?: Maybe<Array<ParentPortfolioQueryInput>>;
  parent_exists?: Maybe<Scalars['Boolean']>;
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
  invited?: Maybe<Scalars['Boolean']>;
  /** @deprecated  */
  school?: Maybe<StudentPortfolioSchool>;
};

export type StudentPortfolioHome = {
  __typename?: 'StudentPortfolioHome';
  /** @deprecated  */
  city?: Maybe<Scalars['String']>;
  /** @deprecated  */
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated  */
  state?: Maybe<Scalars['String']>;
  /** @deprecated  */
  streetAddress?: Maybe<Scalars['String']>;
  /** @deprecated  */
  zipcode?: Maybe<Scalars['String']>;
};

export enum ParentPortfolioSortByInput {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type TransactionQueryInput = {
  _id_exists?: Maybe<Scalars['Boolean']>;
  tokenLog_exists?: Maybe<Scalars['Boolean']>;
  referral_in?: Maybe<Array<Maybe<TransactionReferralQueryInput>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLogQueryInput>>>;
  referral_nin?: Maybe<Array<Maybe<TransactionReferralQueryInput>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  referral_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  referral?: Maybe<Array<Maybe<TransactionReferralQueryInput>>>;
  tokenLog_in?: Maybe<Array<Maybe<TransactionTokenLogQueryInput>>>;
  OR?: Maybe<Array<TransactionQueryInput>>;
  tokenLog_nin?: Maybe<Array<Maybe<TransactionTokenLogQueryInput>>>;
  AND?: Maybe<Array<TransactionQueryInput>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
};

export type StudentPortfolioUpdateInput = {
  home?: Maybe<StudentPortfolioHomeUpdateInput>;
  invited_unset?: Maybe<Scalars['Boolean']>;
  school_unset?: Maybe<Scalars['Boolean']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  date_unset?: Maybe<Scalars['Boolean']>;
  gender_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  home_unset?: Maybe<Scalars['Boolean']>;
  school?: Maybe<StudentPortfolioSchoolUpdateInput>;
  guardian?: Maybe<StudentPortfolioGuardianUpdateInput>;
  guardian_unset?: Maybe<Scalars['Boolean']>;
  grade_unset?: Maybe<Scalars['Boolean']>;
  grade?: Maybe<Scalars['String']>;
  invited?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['String']>;
  ethnicity_unset?: Maybe<Scalars['Boolean']>;
};

export type SchoolPortfolioDistrictQueryInput = {
  zipcode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  zipcode_ne?: Maybe<Scalars['String']>;
  streetAddress_ne?: Maybe<Scalars['String']>;
  zipcode_gt?: Maybe<Scalars['String']>;
  state_gt?: Maybe<Scalars['String']>;
  city_ne?: Maybe<Scalars['String']>;
  streetAddress_lt?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city_gte?: Maybe<Scalars['String']>;
  streetAddress_exists?: Maybe<Scalars['Boolean']>;
  state_lte?: Maybe<Scalars['String']>;
  streetAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_lte?: Maybe<Scalars['String']>;
  streetAddress_lte?: Maybe<Scalars['String']>;
  zipcode_lte?: Maybe<Scalars['String']>;
  zipcode_gte?: Maybe<Scalars['String']>;
  streetAddress_gt?: Maybe<Scalars['String']>;
  state_lt?: Maybe<Scalars['String']>;
  state_ne?: Maybe<Scalars['String']>;
  streetAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress?: Maybe<Scalars['String']>;
  city_gt?: Maybe<Scalars['String']>;
  zipcode_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress_gte?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<SchoolPortfolioDistrictQueryInput>>;
  state_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_exists?: Maybe<Scalars['Boolean']>;
  city_lt?: Maybe<Scalars['String']>;
  zipcode_lt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<SchoolPortfolioDistrictQueryInput>>;
  zipcode_exists?: Maybe<Scalars['Boolean']>;
  state_gte?: Maybe<Scalars['String']>;
  state_exists?: Maybe<Scalars['Boolean']>;
};

export type TokenEventLogQueryInput = {
  created_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  created_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  created_gte?: Maybe<Scalars['DateTime']>;
  event_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  created_lte?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Scalars['String']>;
  event_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<TokenEventLogQueryInput>>;
  created?: Maybe<Scalars['DateTime']>;
  created_ne?: Maybe<Scalars['DateTime']>;
  created_gt?: Maybe<Scalars['DateTime']>;
  event_lt?: Maybe<Scalars['String']>;
  event_gt?: Maybe<Scalars['String']>;
  event_lte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<TokenEventLogQueryInput>>;
  created_exists?: Maybe<Scalars['Boolean']>;
  created_lt?: Maybe<Scalars['DateTime']>;
  event_ne?: Maybe<Scalars['String']>;
  event_gte?: Maybe<Scalars['String']>;
};

export type UserQueryInput = {
  phoneNumber?: Maybe<Scalars['String']>;
  profileImg_ne?: Maybe<Scalars['String']>;
  phoneNumber_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<UserQueryInput>>;
  profileImg_lte?: Maybe<Scalars['String']>;
  lastName_lt?: Maybe<Scalars['String']>;
  lastName_gte?: Maybe<Scalars['String']>;
  userTypes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_lte?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  firstName_lt?: Maybe<Scalars['String']>;
  phoneNumber_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLog_in?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  lastName_lte?: Maybe<Scalars['String']>;
  stripeId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  profileImg_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<UserQueryInput>>;
  phoneNumber_lt?: Maybe<Scalars['String']>;
  stripeId_gt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  profileImg_lt?: Maybe<Scalars['String']>;
  lastName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  profileImg_gte?: Maybe<Scalars['String']>;
  phoneNumber_gt?: Maybe<Scalars['String']>;
  firstName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  firstName_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  userTypes_exists?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  phoneNumber_gte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  stripeId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  phoneNumber_exists?: Maybe<Scalars['Boolean']>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  stripeId_exists?: Maybe<Scalars['Boolean']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  profileImg_exists?: Maybe<Scalars['Boolean']>;
  email_gt?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  firstName_lte?: Maybe<Scalars['String']>;
  profileImg_gt?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  lastName_gt?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLog_nin?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  stripeId_lt?: Maybe<Scalars['String']>;
  phoneNumber_ne?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  userTypes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  profileImg_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  firstName_ne?: Maybe<Scalars['String']>;
  phoneNumber_lte?: Maybe<Scalars['String']>;
  email_lt?: Maybe<Scalars['String']>;
  lastName_ne?: Maybe<Scalars['String']>;
  stripeId_ne?: Maybe<Scalars['String']>;
  email_ne?: Maybe<Scalars['String']>;
  stripeId_gte?: Maybe<Scalars['String']>;
};

export type EmployerPortfolioWork = {
  __typename?: 'EmployerPortfolioWork';
  /** @deprecated  */
  city?: Maybe<Scalars['String']>;
  /** @deprecated  */
  state?: Maybe<Scalars['String']>;
  /** @deprecated  */
  streetAddress?: Maybe<Scalars['String']>;
  /** @deprecated  */
  zipcode?: Maybe<Scalars['String']>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  /** @deprecated  */
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  /** @deprecated  */
  deletedCount: Scalars['Int'];
};

export type UserEventLogUpdateInput = {
  timestamp_unset?: Maybe<Scalars['Boolean']>;
  event?: Maybe<Scalars['String']>;
  event_unset?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export enum TransactionSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

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
