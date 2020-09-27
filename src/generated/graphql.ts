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

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  /** @deprecated  */
  matchedCount: Scalars['Int'];
  /** @deprecated  */
  modifiedCount: Scalars['Int'];
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

export type StudentPortfolioInsertInput = {
  date?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  guardian?: Maybe<StudentPortfolioGuardianInsertInput>;
  home?: Maybe<StudentPortfolioHomeInsertInput>;
  school?: Maybe<StudentPortfolioSchoolInsertInput>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type StudentPortfolioHomeInsertInput = {
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
};

export type UserEventLogQueryInput = {
  created_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<UserEventLogQueryInput>>;
  created_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<UserEventLogQueryInput>>;
  created?: Maybe<Scalars['DateTime']>;
  created_ne?: Maybe<Scalars['DateTime']>;
  created_gt?: Maybe<Scalars['DateTime']>;
  created_lt?: Maybe<Scalars['DateTime']>;
  created_lte?: Maybe<Scalars['DateTime']>;
  created_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  created_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export type StudentPortfolioHome = {
  __typename?: 'StudentPortfolioHome';
  /** @deprecated  */
  address?: Maybe<Scalars['String']>;
  /** @deprecated  */
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type EmployerPortfolioInsertInput = {
  industry?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  primaryProduct?: Maybe<Scalars['String']>;
  workAddress?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  employerName?: Maybe<Scalars['String']>;
};

export type StudentPortfolioUpdateInput = {
  guardian_unset?: Maybe<Scalars['Boolean']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_unset?: Maybe<Scalars['Boolean']>;
  grade?: Maybe<Scalars['String']>;
  guardian?: Maybe<StudentPortfolioGuardianUpdateInput>;
  home?: Maybe<StudentPortfolioHomeUpdateInput>;
  school?: Maybe<StudentPortfolioSchoolUpdateInput>;
  gender_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  grade_unset?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  home_unset?: Maybe<Scalars['Boolean']>;
  ethnicity_unset?: Maybe<Scalars['Boolean']>;
  school_unset?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioGuardianUpdateInput = {
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  relationship?: Maybe<Scalars['String']>;
  relationship_unset?: Maybe<Scalars['Boolean']>;
};

export type UserQueryInput = {
  firstName_ne?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  stripeId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_gte?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  stripeId_gte?: Maybe<Scalars['String']>;
  lastName_lt?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  email_gt?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  email_lt?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_ne?: Maybe<Scalars['String']>;
  userTypes_exists?: Maybe<Scalars['Boolean']>;
  eventLog_nin?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  firstName?: Maybe<Scalars['String']>;
  lastName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<UserQueryInput>>;
  firstName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLog_in?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  lastName_gt?: Maybe<Scalars['String']>;
  userTypes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<UserQueryInput>>;
  stripeId_exists?: Maybe<Scalars['Boolean']>;
  email_gte?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  lastName_ne?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  stripeId_gt?: Maybe<Scalars['String']>;
  stripeId_ne?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  lastName_lte?: Maybe<Scalars['String']>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  stripeId?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  stripeId_lt?: Maybe<Scalars['String']>;
  firstName_lt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_lte?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  firstName_lte?: Maybe<Scalars['String']>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  userTypes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export enum UserSortByInput {
  LastnameDesc = 'LASTNAME_DESC',
  StripeidAsc = 'STRIPEID_ASC',
  StripeidDesc = 'STRIPEID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameAsc = 'LASTNAME_ASC'
}

export type StudentPortfolioQueryInput = {
  gender_lte?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  school_exists?: Maybe<Scalars['Boolean']>;
  grade?: Maybe<Scalars['String']>;
  guardian?: Maybe<StudentPortfolioGuardianQueryInput>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  school?: Maybe<StudentPortfolioSchoolQueryInput>;
  grade_gte?: Maybe<Scalars['String']>;
  grade_exists?: Maybe<Scalars['Boolean']>;
  date_lt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioQueryInput>>;
  gender_ne?: Maybe<Scalars['String']>;
  grade_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  grade_ne?: Maybe<Scalars['String']>;
  grade_gt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioQueryInput>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  gender_lt?: Maybe<Scalars['String']>;
  gender_gt?: Maybe<Scalars['String']>;
  ethnicity_exists?: Maybe<Scalars['Boolean']>;
  date_gte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  ethnicity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  gender_exists?: Maybe<Scalars['Boolean']>;
  grade_lt?: Maybe<Scalars['String']>;
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_lte?: Maybe<Scalars['String']>;
  ethnicity_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  date_lte?: Maybe<Scalars['String']>;
  guardian_exists?: Maybe<Scalars['Boolean']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  home?: Maybe<StudentPortfolioHomeQueryInput>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  home_exists?: Maybe<Scalars['Boolean']>;
  date_gt?: Maybe<Scalars['String']>;
  gender_gte?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_ne?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolUpdateInput = {
  name_unset?: Maybe<Scalars['Boolean']>;
  district?: Maybe<Scalars['String']>;
  district_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  lastName?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  userTypes_unset?: Maybe<Scalars['Boolean']>;
  firstName_unset?: Maybe<Scalars['Boolean']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogUpdateInput>>>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
  lastName_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  stripeId_unset?: Maybe<Scalars['Boolean']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  /** @deprecated  */
  employerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  employerPortfolios: Array<Maybe<EmployerPortfolio>>;
  /** @deprecated  */
  studentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  studentPortfolios: Array<Maybe<StudentPortfolio>>;
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


export type QueryStudentPortfolioArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
};


export type QueryStudentPortfoliosArgs = {
  sortBy?: Maybe<StudentPortfolioSortByInput>;
  query?: Maybe<StudentPortfolioQueryInput>;
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

export type StudentPortfolioGuardianQueryInput = {
  relationship_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  relationship_ne?: Maybe<Scalars['String']>;
  relationship_gt?: Maybe<Scalars['String']>;
  relationship_lte?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_gte?: Maybe<Scalars['String']>;
  relationship_gte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  email_gt?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email_ne?: Maybe<Scalars['String']>;
  relationship_lt?: Maybe<Scalars['String']>;
  email_lt?: Maybe<Scalars['String']>;
  relationship_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_lte?: Maybe<Scalars['String']>;
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

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  /** @deprecated  */
  deletedCount: Scalars['Int'];
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

export type UserEventLogInsertInput = {
  created?: Maybe<Scalars['DateTime']>;
};

export enum StudentPortfolioSortByInput {
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  GradeAsc = 'GRADE_ASC',
  GradeDesc = 'GRADE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC'
}

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

export type UserEventLogUpdateInput = {
  created?: Maybe<Scalars['DateTime']>;
  created_unset?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioSchoolQueryInput = {
  district_gt?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
  district_lte?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  district_ne?: Maybe<Scalars['String']>;
  district_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_lt?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  district_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gte?: Maybe<Scalars['String']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_gte?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  district?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  name_lte?: Maybe<Scalars['String']>;
  district_exists?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioGuardian = {
  __typename?: 'StudentPortfolioGuardian';
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
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

export type EmployerPortfolioQueryInput = {
  jobTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_gte?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  workAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  employerName_lt?: Maybe<Scalars['String']>;
  primaryProduct_exists?: Maybe<Scalars['Boolean']>;
  primaryProduct_ne?: Maybe<Scalars['String']>;
  workAddress_gt?: Maybe<Scalars['String']>;
  workAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_exists?: Maybe<Scalars['Boolean']>;
  jobTitle_lte?: Maybe<Scalars['String']>;
  employerName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  employerName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<EmployerPortfolioQueryInput>>;
  workAddress_gte?: Maybe<Scalars['String']>;
  workAddress_lt?: Maybe<Scalars['String']>;
  employerName?: Maybe<Scalars['String']>;
  workAddress_ne?: Maybe<Scalars['String']>;
  industry_gt?: Maybe<Scalars['String']>;
  jobTitle_lt?: Maybe<Scalars['String']>;
  employerName_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  primaryProduct_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  industry_gte?: Maybe<Scalars['String']>;
  industry_lte?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  industry_lt?: Maybe<Scalars['String']>;
  industry_ne?: Maybe<Scalars['String']>;
  workAddress_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  employerName_ne?: Maybe<Scalars['String']>;
  primaryProduct_lt?: Maybe<Scalars['String']>;
  primaryProduct_lte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  employerName_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  jobTitle_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_gte?: Maybe<Scalars['String']>;
  jobTitle_ne?: Maybe<Scalars['String']>;
  industry_exists?: Maybe<Scalars['Boolean']>;
  workAddress_lte?: Maybe<Scalars['String']>;
  employerName_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  employerName_lte?: Maybe<Scalars['String']>;
  industry_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  industry_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<EmployerPortfolioQueryInput>>;
  primaryProduct?: Maybe<Scalars['String']>;
  jobTitle_gt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  primaryProduct_gt?: Maybe<Scalars['String']>;
  workAddress?: Maybe<Scalars['String']>;
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

export enum EmployerPortfolioSortByInput {
  EmployernameDesc = 'EMPLOYERNAME_DESC',
  JobtitleAsc = 'JOBTITLE_ASC',
  JobtitleDesc = 'JOBTITLE_DESC',
  PrimaryproductAsc = 'PRIMARYPRODUCT_ASC',
  PrimaryproductDesc = 'PRIMARYPRODUCT_DESC',
  WorkaddressDesc = 'WORKADDRESS_DESC',
  EmployernameAsc = 'EMPLOYERNAME_ASC',
  IdDesc = '_ID_DESC',
  IndustryAsc = 'INDUSTRY_ASC',
  IndustryDesc = 'INDUSTRY_DESC',
  WorkaddressAsc = 'WORKADDRESS_ASC',
  IdAsc = '_ID_ASC'
}

export type UserEventLog = {
  __typename?: 'UserEventLog';
  /** @deprecated  */
  created?: Maybe<Scalars['DateTime']>;
};

export type StudentPortfolioHomeQueryInput = {
  language_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  language_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  address?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_exists?: Maybe<Scalars['Boolean']>;
  address_gte?: Maybe<Scalars['String']>;
  address_ne?: Maybe<Scalars['String']>;
  address_lt?: Maybe<Scalars['String']>;
  address_gt?: Maybe<Scalars['String']>;
  language_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_lte?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** @deprecated  */
  deleteManyEmployerPortfolios?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyStudentPortfolios?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  deleteOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  deleteOneUser?: Maybe<User>;
  /** @deprecated  */
  insertManyEmployerPortfolios?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyStudentPortfolios?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyUsers?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  insertOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  insertOneUser?: Maybe<User>;
  /** @deprecated  */
  replaceOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  replaceOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  replaceOneUser?: Maybe<User>;
  /** @deprecated  */
  updateManyEmployerPortfolios?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyStudentPortfolios?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyUsers?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  updateOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  updateOneUser?: Maybe<User>;
  /** @deprecated  */
  upsertOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  upsertOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  upsertOneUser?: Maybe<User>;
};


export type MutationDeleteManyEmployerPortfoliosArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
};


export type MutationDeleteManyStudentPortfoliosArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
};


export type MutationDeleteManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
};


export type MutationDeleteOneEmployerPortfolioArgs = {
  query: EmployerPortfolioQueryInput;
};


export type MutationDeleteOneStudentPortfolioArgs = {
  query: StudentPortfolioQueryInput;
};


export type MutationDeleteOneUserArgs = {
  query: UserQueryInput;
};


export type MutationInsertManyEmployerPortfoliosArgs = {
  data: Array<EmployerPortfolioInsertInput>;
};


export type MutationInsertManyStudentPortfoliosArgs = {
  data: Array<StudentPortfolioInsertInput>;
};


export type MutationInsertManyUsersArgs = {
  data: Array<UserInsertInput>;
};


export type MutationInsertOneEmployerPortfolioArgs = {
  data: EmployerPortfolioInsertInput;
};


export type MutationInsertOneStudentPortfolioArgs = {
  data: StudentPortfolioInsertInput;
};


export type MutationInsertOneUserArgs = {
  data: UserInsertInput;
};


export type MutationReplaceOneEmployerPortfolioArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
  data: EmployerPortfolioInsertInput;
};


export type MutationReplaceOneStudentPortfolioArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  data: StudentPortfolioInsertInput;
};


export type MutationReplaceOneUserArgs = {
  data: UserInsertInput;
  query?: Maybe<UserQueryInput>;
};


export type MutationUpdateManyEmployerPortfoliosArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
  set: EmployerPortfolioUpdateInput;
};


export type MutationUpdateManyStudentPortfoliosArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  set: StudentPortfolioUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateOneEmployerPortfolioArgs = {
  set: EmployerPortfolioUpdateInput;
  query?: Maybe<EmployerPortfolioQueryInput>;
};


export type MutationUpdateOneStudentPortfolioArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  set: StudentPortfolioUpdateInput;
};


export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpsertOneEmployerPortfolioArgs = {
  data: EmployerPortfolioInsertInput;
  query?: Maybe<EmployerPortfolioQueryInput>;
};


export type MutationUpsertOneStudentPortfolioArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  data: StudentPortfolioInsertInput;
};


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};

export type StudentPortfolioGuardianInsertInput = {
  relationship?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolInsertInput = {
  district?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type EmployerPortfolioUpdateInput = {
  industry_unset?: Maybe<Scalars['Boolean']>;
  primaryProduct_unset?: Maybe<Scalars['Boolean']>;
  workAddress_unset?: Maybe<Scalars['Boolean']>;
  employerName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  industry?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  primaryProduct?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  employerName_unset?: Maybe<Scalars['Boolean']>;
  jobTitle_unset?: Maybe<Scalars['Boolean']>;
  workAddress?: Maybe<Scalars['String']>;
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
    