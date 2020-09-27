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

export type StudentPortfolioGuardianUpdateInput = {
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  relationship?: Maybe<Scalars['String']>;
  relationship_unset?: Maybe<Scalars['Boolean']>;
};

export type UserEventLogQueryInput = {
  AND?: Maybe<Array<UserEventLogQueryInput>>;
  created_ne?: Maybe<Scalars['DateTime']>;
  created_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  created?: Maybe<Scalars['DateTime']>;
  created_gte?: Maybe<Scalars['DateTime']>;
  created_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<UserEventLogQueryInput>>;
  created_gt?: Maybe<Scalars['DateTime']>;
  created_lt?: Maybe<Scalars['DateTime']>;
  created_lte?: Maybe<Scalars['DateTime']>;
  created_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
};

export enum StudentPortfolioSortByInput {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  GradeAsc = 'GRADE_ASC',
  GradeDesc = 'GRADE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

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

export type UserUpdateInput = {
  lastName?: Maybe<Scalars['String']>;
  stripeId_unset?: Maybe<Scalars['Boolean']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogUpdateInput>>>;
  email_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  firstName_unset?: Maybe<Scalars['Boolean']>;
  lastName_unset?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  userTypes_unset?: Maybe<Scalars['Boolean']>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
};

export type UserEventLog = {
  __typename?: 'UserEventLog';
  /** @deprecated  */
  created?: Maybe<Scalars['DateTime']>;
};

export type UserInsertInput = {
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogInsertInput>>>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
};

export type StudentPortfolioHomeInsertInput = {
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolQueryInput = {
  district_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lte?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  district_ne?: Maybe<Scalars['String']>;
  district_exists?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_lte?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  district_gte?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  district_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gte?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_gt?: Maybe<Scalars['String']>;
  district_lt?: Maybe<Scalars['String']>;
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

export type EmployerPortfolioQueryInput = {
  jobTitle_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  industry_lt?: Maybe<Scalars['String']>;
  workAddress?: Maybe<Scalars['String']>;
  primaryProduct_ne?: Maybe<Scalars['String']>;
  industry_ne?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<EmployerPortfolioQueryInput>>;
  industry_lte?: Maybe<Scalars['String']>;
  industry_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct?: Maybe<Scalars['String']>;
  workAddress_lt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  workAddress_lte?: Maybe<Scalars['String']>;
  industry_exists?: Maybe<Scalars['Boolean']>;
  industry_gte?: Maybe<Scalars['String']>;
  employerName_ne?: Maybe<Scalars['String']>;
  employerName_lt?: Maybe<Scalars['String']>;
  jobTitle_ne?: Maybe<Scalars['String']>;
  workAddress_gte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  jobTitle_gte?: Maybe<Scalars['String']>;
  primaryProduct_lt?: Maybe<Scalars['String']>;
  industry_gt?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  industry?: Maybe<Scalars['String']>;
  employerName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress_ne?: Maybe<Scalars['String']>;
  jobTitle_lt?: Maybe<Scalars['String']>;
  workAddress_gt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<EmployerPortfolioQueryInput>>;
  jobTitle_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  primaryProduct_gte?: Maybe<Scalars['String']>;
  workAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_lte?: Maybe<Scalars['String']>;
  jobTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  employerName_lte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  workAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  employerName_gte?: Maybe<Scalars['String']>;
  jobTitle_gt?: Maybe<Scalars['String']>;
  employerName_gt?: Maybe<Scalars['String']>;
  primaryProduct_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_lte?: Maybe<Scalars['String']>;
  industry_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  employerName_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  employerName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress_exists?: Maybe<Scalars['Boolean']>;
  primaryProduct_gt?: Maybe<Scalars['String']>;
  employerName?: Maybe<Scalars['String']>;
};

export enum EmployerPortfolioSortByInput {
  EmployernameAsc = 'EMPLOYERNAME_ASC',
  IndustryAsc = 'INDUSTRY_ASC',
  JobtitleAsc = 'JOBTITLE_ASC',
  JobtitleDesc = 'JOBTITLE_DESC',
  PrimaryproductAsc = 'PRIMARYPRODUCT_ASC',
  WorkaddressDesc = 'WORKADDRESS_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmployernameDesc = 'EMPLOYERNAME_DESC',
  IndustryDesc = 'INDUSTRY_DESC',
  PrimaryproductDesc = 'PRIMARYPRODUCT_DESC',
  WorkaddressAsc = 'WORKADDRESS_ASC'
}

export type StudentPortfolioInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  date?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  guardian?: Maybe<StudentPortfolioGuardianInsertInput>;
  home?: Maybe<StudentPortfolioHomeInsertInput>;
  school?: Maybe<StudentPortfolioSchoolInsertInput>;
};

export type EmployerPortfolioUpdateInput = {
  employerName?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  workAddress_unset?: Maybe<Scalars['Boolean']>;
  industry_unset?: Maybe<Scalars['Boolean']>;
  employerName_unset?: Maybe<Scalars['Boolean']>;
  primaryProduct?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  jobTitle_unset?: Maybe<Scalars['Boolean']>;
  jobTitle?: Maybe<Scalars['String']>;
  primaryProduct_unset?: Maybe<Scalars['Boolean']>;
  workAddress?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type StudentPortfolioGuardian = {
  __typename?: 'StudentPortfolioGuardian';
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
  /** @deprecated  */
  relationship?: Maybe<Scalars['String']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  /** @deprecated  */
  matchedCount: Scalars['Int'];
  /** @deprecated  */
  modifiedCount: Scalars['Int'];
};

export type StudentPortfolioUpdateInput = {
  date?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  school?: Maybe<StudentPortfolioSchoolUpdateInput>;
  grade?: Maybe<Scalars['String']>;
  school_unset?: Maybe<Scalars['Boolean']>;
  guardian_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  guardian?: Maybe<StudentPortfolioGuardianUpdateInput>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  home_unset?: Maybe<Scalars['Boolean']>;
  gender_unset?: Maybe<Scalars['Boolean']>;
  home?: Maybe<StudentPortfolioHomeUpdateInput>;
  ethnicity_unset?: Maybe<Scalars['Boolean']>;
  date_unset?: Maybe<Scalars['Boolean']>;
  grade_unset?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioSchoolInsertInput = {
  district?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
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

export type Mutation = {
  __typename?: 'Mutation';
  /** @deprecated  */
  deleteManyEmployerPortfolios?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyStudentPortfolios?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyTeacherPortfolios?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteManyUsers?: Maybe<DeleteManyPayload>;
  /** @deprecated  */
  deleteOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  deleteOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  deleteOneTeacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  deleteOneUser?: Maybe<User>;
  /** @deprecated  */
  insertManyEmployerPortfolios?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyStudentPortfolios?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyTeacherPortfolios?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertManyUsers?: Maybe<InsertManyPayload>;
  /** @deprecated  */
  insertOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  insertOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  insertOneTeacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  insertOneUser?: Maybe<User>;
  /** @deprecated  */
  replaceOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  replaceOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  replaceOneTeacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  replaceOneUser?: Maybe<User>;
  /** @deprecated  */
  updateManyEmployerPortfolios?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyStudentPortfolios?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyTeacherPortfolios?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateManyUsers?: Maybe<UpdateManyPayload>;
  /** @deprecated  */
  updateOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  updateOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  updateOneTeacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  updateOneUser?: Maybe<User>;
  /** @deprecated  */
  upsertOneEmployerPortfolio?: Maybe<EmployerPortfolio>;
  /** @deprecated  */
  upsertOneStudentPortfolio?: Maybe<StudentPortfolio>;
  /** @deprecated  */
  upsertOneTeacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  upsertOneUser?: Maybe<User>;
};


export type MutationDeleteManyEmployerPortfoliosArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
};


export type MutationDeleteManyStudentPortfoliosArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
};


export type MutationDeleteManyTeacherPortfoliosArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
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


export type MutationDeleteOneTeacherPortfolioArgs = {
  query: TeacherPortfolioQueryInput;
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


export type MutationInsertManyTeacherPortfoliosArgs = {
  data: Array<TeacherPortfolioInsertInput>;
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


export type MutationInsertOneTeacherPortfolioArgs = {
  data: TeacherPortfolioInsertInput;
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


export type MutationReplaceOneTeacherPortfolioArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
  data: TeacherPortfolioInsertInput;
};


export type MutationReplaceOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};


export type MutationUpdateManyEmployerPortfoliosArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
  set: EmployerPortfolioUpdateInput;
};


export type MutationUpdateManyStudentPortfoliosArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  set: StudentPortfolioUpdateInput;
};


export type MutationUpdateManyTeacherPortfoliosArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
  set: TeacherPortfolioUpdateInput;
};


export type MutationUpdateManyUsersArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpdateOneEmployerPortfolioArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
  set: EmployerPortfolioUpdateInput;
};


export type MutationUpdateOneStudentPortfolioArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  set: StudentPortfolioUpdateInput;
};


export type MutationUpdateOneTeacherPortfolioArgs = {
  query?: Maybe<TeacherPortfolioQueryInput>;
  set: TeacherPortfolioUpdateInput;
};


export type MutationUpdateOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  set: UserUpdateInput;
};


export type MutationUpsertOneEmployerPortfolioArgs = {
  query?: Maybe<EmployerPortfolioQueryInput>;
  data: EmployerPortfolioInsertInput;
};


export type MutationUpsertOneStudentPortfolioArgs = {
  query?: Maybe<StudentPortfolioQueryInput>;
  data: StudentPortfolioInsertInput;
};


export type MutationUpsertOneTeacherPortfolioArgs = {
  data: TeacherPortfolioInsertInput;
  query?: Maybe<TeacherPortfolioQueryInput>;
};


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};

export type StudentPortfolioHomeUpdateInput = {
  address?: Maybe<Scalars['String']>;
  address_unset?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  language_unset?: Maybe<Scalars['Boolean']>;
};

export type UserQueryInput = {
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_exists?: Maybe<Scalars['Boolean']>;
  firstName_lte?: Maybe<Scalars['String']>;
  lastName_lt?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  stripeId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_lte?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_gt?: Maybe<Scalars['String']>;
  email_ne?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  email_gte?: Maybe<Scalars['String']>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  lastName_gt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<UserQueryInput>>;
  stripeId_exists?: Maybe<Scalars['Boolean']>;
  eventLog_nin?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  lastName_ne?: Maybe<Scalars['String']>;
  stripeId_ne?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  lastName_lte?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<UserQueryInput>>;
  lastName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_lt?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  stripeId_gte?: Maybe<Scalars['String']>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  userTypes_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  stripeId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_lt?: Maybe<Scalars['String']>;
  userTypes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  stripeId_lte?: Maybe<Scalars['String']>;
  firstName_ne?: Maybe<Scalars['String']>;
  userTypes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_gte?: Maybe<Scalars['String']>;
  eventLog_in?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  email_lt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  stripeId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
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

export type TeacherPortfolioQueryInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  schoolAddress_ne?: Maybe<Scalars['String']>;
  schoolName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolAddress_gt?: Maybe<Scalars['String']>;
  schoolAddress?: Maybe<Scalars['String']>;
  schoolAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  schoolAddress_gte?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<TeacherPortfolioQueryInput>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  schoolName_gte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  schoolName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_ne?: Maybe<Scalars['String']>;
  schoolName_ne?: Maybe<Scalars['String']>;
  schoolName_exists?: Maybe<Scalars['Boolean']>;
  schoolAddress_lte?: Maybe<Scalars['String']>;
  schoolDistrict_lte?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName_lt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolAddress_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<TeacherPortfolioQueryInput>>;
  schoolName_gt?: Maybe<Scalars['String']>;
  schoolAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  schoolAddress_lt?: Maybe<Scalars['String']>;
  schoolName_lte?: Maybe<Scalars['String']>;
};

export type StudentPortfolioHomeQueryInput = {
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_gt?: Maybe<Scalars['String']>;
  language_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_lt?: Maybe<Scalars['String']>;
  language_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  address_ne?: Maybe<Scalars['String']>;
  address_exists?: Maybe<Scalars['Boolean']>;
  language_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  address_gte?: Maybe<Scalars['String']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_lte?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchool = {
  __typename?: 'StudentPortfolioSchool';
  /** @deprecated  */
  district?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

export enum UserSortByInput {
  IdAsc = '_ID_ASC',
  EmailAsc = 'EMAIL_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  StripeidDesc = 'STRIPEID_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  StripeidAsc = 'STRIPEID_ASC',
  IdDesc = '_ID_DESC',
  EmailDesc = 'EMAIL_DESC'
}

export type UserEventLogInsertInput = {
  created?: Maybe<Scalars['DateTime']>;
};


export enum TeacherPortfolioSortByInput {
  SchooladdressDesc = 'SCHOOLADDRESS_DESC',
  SchooldistrictAsc = 'SCHOOLDISTRICT_ASC',
  SchooldistrictDesc = 'SCHOOLDISTRICT_DESC',
  SchoolnameAsc = 'SCHOOLNAME_ASC',
  SchoolnameDesc = 'SCHOOLNAME_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  SchooladdressAsc = 'SCHOOLADDRESS_ASC'
}

export type EmployerPortfolioInsertInput = {
  primaryProduct?: Maybe<Scalars['String']>;
  workAddress?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  employerName?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
};

export type StudentPortfolioGuardianInsertInput = {
  relationship?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};


export type StudentPortfolioHome = {
  __typename?: 'StudentPortfolioHome';
  /** @deprecated  */
  address?: Maybe<Scalars['String']>;
  /** @deprecated  */
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  /** @deprecated  */
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
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
  teacherPortfolio?: Maybe<TeacherPortfolio>;
  /** @deprecated  */
  teacherPortfolios: Array<Maybe<TeacherPortfolio>>;
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


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
};

export type StudentPortfolioGuardianQueryInput = {
  relationship_exists?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_gte?: Maybe<Scalars['String']>;
  relationship_lte?: Maybe<Scalars['String']>;
  relationship_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  email_lte?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
  relationship_lt?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_lt?: Maybe<Scalars['String']>;
  relationship_gte?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  relationship_gt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  email_ne?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolUpdateInput = {
  name_unset?: Maybe<Scalars['Boolean']>;
  district?: Maybe<Scalars['String']>;
  district_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  /** @deprecated  */
  deletedCount: Scalars['Int'];
};

export type TeacherPortfolioUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  schoolAddress?: Maybe<Scalars['String']>;
  schoolAddress_unset?: Maybe<Scalars['Boolean']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolDistrict_unset?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_unset?: Maybe<Scalars['Boolean']>;
};

export type UserEventLogUpdateInput = {
  created?: Maybe<Scalars['DateTime']>;
  created_unset?: Maybe<Scalars['Boolean']>;
};

export type TeacherPortfolioInsertInput = {
  schoolAddress?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type StudentPortfolioQueryInput = {
  OR?: Maybe<Array<StudentPortfolioQueryInput>>;
  school_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  ethnicity_exists?: Maybe<Scalars['Boolean']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  ethnicity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_exists?: Maybe<Scalars['Boolean']>;
  school?: Maybe<StudentPortfolioSchoolQueryInput>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  grade?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  grade_ne?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  gender_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioQueryInput>>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_gte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  date?: Maybe<Scalars['String']>;
  home_exists?: Maybe<Scalars['Boolean']>;
  grade_lte?: Maybe<Scalars['String']>;
  guardian_exists?: Maybe<Scalars['Boolean']>;
  gender_lte?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  date_gte?: Maybe<Scalars['String']>;
  grade_lt?: Maybe<Scalars['String']>;
  date_lt?: Maybe<Scalars['String']>;
  gender_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_gt?: Maybe<Scalars['String']>;
  ethnicity_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_ne?: Maybe<Scalars['String']>;
  grade_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_gt?: Maybe<Scalars['String']>;
  gender_ne?: Maybe<Scalars['String']>;
  date_lte?: Maybe<Scalars['String']>;
  guardian?: Maybe<StudentPortfolioGuardianQueryInput>;
  grade_gte?: Maybe<Scalars['String']>;
  date_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  home?: Maybe<StudentPortfolioHomeQueryInput>;
  gender_gt?: Maybe<Scalars['String']>;
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_exists?: Maybe<Scalars['Boolean']>;
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
    