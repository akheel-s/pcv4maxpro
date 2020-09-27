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

export type ParentPortfolioInsertInput = {
  email?: Maybe<Scalars['String']>;
  homeAddress?: Maybe<Scalars['String']>;
  participantEmail?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type StudentPortfolioUpdateInput = {
  grade_unset?: Maybe<Scalars['Boolean']>;
  home_unset?: Maybe<Scalars['Boolean']>;
  guardian?: Maybe<StudentPortfolioGuardianUpdateInput>;
  gender?: Maybe<Scalars['String']>;
  gender_unset?: Maybe<Scalars['Boolean']>;
  date_unset?: Maybe<Scalars['Boolean']>;
  school?: Maybe<StudentPortfolioSchoolUpdateInput>;
  guardian_unset?: Maybe<Scalars['Boolean']>;
  ethnicity_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  home?: Maybe<StudentPortfolioHomeUpdateInput>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  school_unset?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['String']>;
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


export type StudentPortfolioQueryInput = {
  AND?: Maybe<Array<StudentPortfolioQueryInput>>;
  ethnicity_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  grade_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_ne?: Maybe<Scalars['String']>;
  gender_exists?: Maybe<Scalars['Boolean']>;
  home_exists?: Maybe<Scalars['Boolean']>;
  date_lt?: Maybe<Scalars['String']>;
  gender_ne?: Maybe<Scalars['String']>;
  guardian_exists?: Maybe<Scalars['Boolean']>;
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_gt?: Maybe<Scalars['String']>;
  ethnicity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_gt?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_lte?: Maybe<Scalars['String']>;
  school_exists?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  grade?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  date_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_exists?: Maybe<Scalars['Boolean']>;
  gender_gte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  gender_lte?: Maybe<Scalars['String']>;
  grade_lte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_lt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<StudentPortfolioQueryInput>>;
  home?: Maybe<StudentPortfolioHomeQueryInput>;
  date?: Maybe<Scalars['String']>;
  grade_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  guardian?: Maybe<StudentPortfolioGuardianQueryInput>;
  school?: Maybe<StudentPortfolioSchoolQueryInput>;
  ethnicity_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  date_ne?: Maybe<Scalars['String']>;
  grade_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  date_gte?: Maybe<Scalars['String']>;
  gender_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_gte?: Maybe<Scalars['String']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  gender_gt?: Maybe<Scalars['String']>;
};

export type StudentPortfolioGuardianQueryInput = {
  relationship_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_gt?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  email_lt?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_exists?: Maybe<Scalars['Boolean']>;
  relationship_lt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  relationship_exists?: Maybe<Scalars['Boolean']>;
  relationship?: Maybe<Scalars['String']>;
  relationship_lte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  relationship_gte?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_ne?: Maybe<Scalars['String']>;
  relationship_ne?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
};

export type EmployerPortfolioQueryInput = {
  primaryProduct_exists?: Maybe<Scalars['Boolean']>;
  workAddress?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  employerName_gte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  employerName_gt?: Maybe<Scalars['String']>;
  employerName?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  workAddress_lte?: Maybe<Scalars['String']>;
  industry_gt?: Maybe<Scalars['String']>;
  workAddress_exists?: Maybe<Scalars['Boolean']>;
  jobTitle_gte?: Maybe<Scalars['String']>;
  primaryProduct_ne?: Maybe<Scalars['String']>;
  employerName_exists?: Maybe<Scalars['Boolean']>;
  primaryProduct?: Maybe<Scalars['String']>;
  employerName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress_ne?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  jobTitle_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  employerName_ne?: Maybe<Scalars['String']>;
  primaryProduct_gt?: Maybe<Scalars['String']>;
  jobTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  industry_lt?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  jobTitle_lt?: Maybe<Scalars['String']>;
  jobTitle_gt?: Maybe<Scalars['String']>;
  employerName_lt?: Maybe<Scalars['String']>;
  industry_lte?: Maybe<Scalars['String']>;
  industry_gte?: Maybe<Scalars['String']>;
  jobTitle_exists?: Maybe<Scalars['Boolean']>;
  industry_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress_gte?: Maybe<Scalars['String']>;
  primaryProduct_lte?: Maybe<Scalars['String']>;
  industry_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress_gt?: Maybe<Scalars['String']>;
  workAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  employerName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_gte?: Maybe<Scalars['String']>;
  employerName_lte?: Maybe<Scalars['String']>;
  jobTitle_lte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<EmployerPortfolioQueryInput>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<EmployerPortfolioQueryInput>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  primaryProduct_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  workAddress_lt?: Maybe<Scalars['String']>;
  industry_exists?: Maybe<Scalars['Boolean']>;
  primaryProduct_lt?: Maybe<Scalars['String']>;
  industry_ne?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  jobTitle_ne?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchool = {
  __typename?: 'StudentPortfolioSchool';
  /** @deprecated  */
  district?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

export type StudentPortfolioHome = {
  __typename?: 'StudentPortfolioHome';
  /** @deprecated  */
  address?: Maybe<Scalars['String']>;
  /** @deprecated  */
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ParentPortfolioQueryInput = {
  email_exists?: Maybe<Scalars['Boolean']>;
  homeAddress_lte?: Maybe<Scalars['String']>;
  participantEmail_gte?: Maybe<Scalars['String']>;
  email_ne?: Maybe<Scalars['String']>;
  participantEmail_lte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  homeAddress_ne?: Maybe<Scalars['String']>;
  participantEmail_gt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  email_gt?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  homeAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeAddress?: Maybe<Scalars['String']>;
  participantEmail_lt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  email_lte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeAddress_exists?: Maybe<Scalars['Boolean']>;
  homeAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeAddress_lt?: Maybe<Scalars['String']>;
  participantEmail_exists?: Maybe<Scalars['Boolean']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  participantEmail?: Maybe<Scalars['String']>;
  participantEmail_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  participantEmail_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_lt?: Maybe<Scalars['String']>;
  homeAddress_gte?: Maybe<Scalars['String']>;
  homeAddress_gt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<ParentPortfolioQueryInput>>;
  AND?: Maybe<Array<ParentPortfolioQueryInput>>;
  participantEmail_ne?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type UserInsertInput = {
  email?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogInsertInput>>>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type UserQueryInput = {
  lastName_ne?: Maybe<Scalars['String']>;
  firstName_ne?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_gt?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  email_ne?: Maybe<Scalars['String']>;
  firstName_lte?: Maybe<Scalars['String']>;
  userTypes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  stripeId?: Maybe<Scalars['String']>;
  userTypes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_gt?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  firstName_gte?: Maybe<Scalars['String']>;
  lastName_gte?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  lastName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_lt?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  firstName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_lte?: Maybe<Scalars['String']>;
  eventLog_in?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  firstName_gt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<UserQueryInput>>;
  lastName?: Maybe<Scalars['String']>;
  lastName_gt?: Maybe<Scalars['String']>;
  stripeId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_lt?: Maybe<Scalars['String']>;
  stripeId_gte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  userTypes_exists?: Maybe<Scalars['Boolean']>;
  stripeId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  eventLog_nin?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  email?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  lastName_lte?: Maybe<Scalars['String']>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_ne?: Maybe<Scalars['String']>;
  stripeId_exists?: Maybe<Scalars['Boolean']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  AND?: Maybe<Array<UserQueryInput>>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  stripeId_lt?: Maybe<Scalars['String']>;
};

export type UserEventLog = {
  __typename?: 'UserEventLog';
  /** @deprecated  */
  created?: Maybe<Scalars['DateTime']>;
};

export type SchoolPortfolioQueryInput = {
  districtAddress_exists?: Maybe<Scalars['Boolean']>;
  districtAddress_gte?: Maybe<Scalars['String']>;
  stakeholderAccess_ne?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<SchoolPortfolioQueryInput>>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  stakeholder?: Maybe<Scalars['String']>;
  districtAddress_lte?: Maybe<Scalars['String']>;
  districtAddress_gt?: Maybe<Scalars['String']>;
  stakeholderAccess_gte?: Maybe<Scalars['String']>;
  staffType_exists?: Maybe<Scalars['Boolean']>;
  stakeholder_gt?: Maybe<Scalars['String']>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  stakeholderAccess_lte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholderAccess_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  districtAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder_ne?: Maybe<Scalars['String']>;
  stakeholderAccess_exists?: Maybe<Scalars['Boolean']>;
  districtAddress_ne?: Maybe<Scalars['String']>;
  staffType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  districtAddress?: Maybe<Scalars['String']>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  districtAddress_lt?: Maybe<Scalars['String']>;
  stakeholderAccess_lt?: Maybe<Scalars['String']>;
  stakeholder_gte?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolDistrict_lte?: Maybe<Scalars['String']>;
  stakeholder_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholderAccess_gt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<SchoolPortfolioQueryInput>>;
  stakeholder_lte?: Maybe<Scalars['String']>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  districtAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  stakeholder_lt?: Maybe<Scalars['String']>;
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
  staffType_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholderAccess_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_ne?: Maybe<Scalars['String']>;
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
  data: SchoolPortfolioInsertInput;
  query?: Maybe<SchoolPortfolioQueryInput>;
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

export type StudentPortfolioSchoolInsertInput = {
  name?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolUpdateInput = {
  district?: Maybe<Scalars['String']>;
  district_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  name_unset?: Maybe<Scalars['Boolean']>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  /** @deprecated  */
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type SchoolPortfolioInsertInput = {
  schoolDistrict?: Maybe<Scalars['String']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder?: Maybe<Scalars['String']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  districtAddress?: Maybe<Scalars['String']>;
};

export type EmployerPortfolioUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  industry?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  workAddress?: Maybe<Scalars['String']>;
  workAddress_unset?: Maybe<Scalars['Boolean']>;
  employerName?: Maybe<Scalars['String']>;
  employerName_unset?: Maybe<Scalars['Boolean']>;
  industry_unset?: Maybe<Scalars['Boolean']>;
  jobTitle_unset?: Maybe<Scalars['Boolean']>;
  primaryProduct?: Maybe<Scalars['String']>;
  primaryProduct_unset?: Maybe<Scalars['Boolean']>;
};

export type SchoolPortfolioUpdateInput = {
  stakeholderAccess?: Maybe<Scalars['String']>;
  stakeholder?: Maybe<Scalars['String']>;
  schoolDistrict_unset?: Maybe<Scalars['Boolean']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholder_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  stakeholderAccess_unset?: Maybe<Scalars['Boolean']>;
  staffType_unset?: Maybe<Scalars['Boolean']>;
  districtAddress?: Maybe<Scalars['String']>;
  districtAddress_unset?: Maybe<Scalars['Boolean']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioSchoolQueryInput = {
  name_gte?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  district_exists?: Maybe<Scalars['Boolean']>;
  district_gte?: Maybe<Scalars['String']>;
  district_lte?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  district_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  name_ne?: Maybe<Scalars['String']>;
  district_lt?: Maybe<Scalars['String']>;
  district_gt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  name_lte?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  district_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_ne?: Maybe<Scalars['String']>;
};

export enum StudentPortfolioSortByInput {
  GenderDesc = 'GENDER_DESC',
  GradeAsc = 'GRADE_ASC',
  GradeDesc = 'GRADE_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC',
  GenderAsc = 'GENDER_ASC'
}

export type EmployerPortfolioInsertInput = {
  employerName?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  primaryProduct?: Maybe<Scalars['String']>;
  workAddress?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export enum EmployerPortfolioSortByInput {
  PrimaryproductAsc = 'PRIMARYPRODUCT_ASC',
  WorkaddressDesc = 'WORKADDRESS_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  IndustryDesc = 'INDUSTRY_DESC',
  JobtitleAsc = 'JOBTITLE_ASC',
  JobtitleDesc = 'JOBTITLE_DESC',
  PrimaryproductDesc = 'PRIMARYPRODUCT_DESC',
  WorkaddressAsc = 'WORKADDRESS_ASC',
  EmployernameAsc = 'EMPLOYERNAME_ASC',
  EmployernameDesc = 'EMPLOYERNAME_DESC',
  IndustryAsc = 'INDUSTRY_ASC'
}

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

export type ParentPortfolioUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  homeAddress?: Maybe<Scalars['String']>;
  homeAddress_unset?: Maybe<Scalars['Boolean']>;
  participantEmail?: Maybe<Scalars['String']>;
  participantEmail_unset?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioHomeUpdateInput = {
  address?: Maybe<Scalars['String']>;
  address_unset?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  language_unset?: Maybe<Scalars['Boolean']>;
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

export type UserEventLogQueryInput = {
  created_lte?: Maybe<Scalars['DateTime']>;
  created?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<UserEventLogQueryInput>>;
  created_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  created_gt?: Maybe<Scalars['DateTime']>;
  created_lt?: Maybe<Scalars['DateTime']>;
  created_exists?: Maybe<Scalars['Boolean']>;
  created_ne?: Maybe<Scalars['DateTime']>;
  created_gte?: Maybe<Scalars['DateTime']>;
  created_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  AND?: Maybe<Array<UserEventLogQueryInput>>;
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

export enum UserSortByInput {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameDesc = 'LASTNAME_DESC',
  StripeidDesc = 'STRIPEID_DESC',
  IdDesc = '_ID_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  LastnameAsc = 'LASTNAME_ASC',
  StripeidAsc = 'STRIPEID_ASC',
  IdAsc = '_ID_ASC'
}

export type StudentPortfolioHomeQueryInput = {
  address_lte?: Maybe<Scalars['String']>;
  address_lt?: Maybe<Scalars['String']>;
  language_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  address?: Maybe<Scalars['String']>;
  address_gt?: Maybe<Scalars['String']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  address_ne?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_exists?: Maybe<Scalars['Boolean']>;
  language_exists?: Maybe<Scalars['Boolean']>;
  address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_gte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  language_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StudentPortfolioGuardian = {
  __typename?: 'StudentPortfolioGuardian';
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
  /** @deprecated  */
  relationship?: Maybe<Scalars['String']>;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  /** @deprecated  */
  deletedCount: Scalars['Int'];
};

export type UserEventLogUpdateInput = {
  created?: Maybe<Scalars['DateTime']>;
  created_unset?: Maybe<Scalars['Boolean']>;
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


export type QueryUserArgs = {
  query?: Maybe<UserQueryInput>;
};


export type QueryUsersArgs = {
  query?: Maybe<UserQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<UserSortByInput>;
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

export enum SchoolPortfolioSortByInput {
  IdAsc = '_ID_ASC',
  SchooldistrictAsc = 'SCHOOLDISTRICT_ASC',
  SchooldistrictDesc = 'SCHOOLDISTRICT_DESC',
  StakeholderaccessAsc = 'STAKEHOLDERACCESS_ASC',
  StakeholderaccessDesc = 'STAKEHOLDERACCESS_DESC',
  IdDesc = '_ID_DESC',
  DistrictaddressAsc = 'DISTRICTADDRESS_ASC',
  DistrictaddressDesc = 'DISTRICTADDRESS_DESC',
  StakeholderAsc = 'STAKEHOLDER_ASC',
  StakeholderDesc = 'STAKEHOLDER_DESC'
}

export type TeacherPortfolioInsertInput = {
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  schoolAddress?: Maybe<Scalars['String']>;
};

export type StudentPortfolioHomeInsertInput = {
  address?: Maybe<Scalars['String']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TeacherPortfolioUpdateInput = {
  schoolAddress_unset?: Maybe<Scalars['Boolean']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolDistrict_unset?: Maybe<Scalars['Boolean']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolName_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  schoolAddress?: Maybe<Scalars['String']>;
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

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  /** @deprecated  */
  matchedCount: Scalars['Int'];
  /** @deprecated  */
  modifiedCount: Scalars['Int'];
};

export type UserUpdateInput = {
  stripeId?: Maybe<Scalars['String']>;
  lastName_unset?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogUpdateInput>>>;
  firstName_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  stripeId_unset?: Maybe<Scalars['Boolean']>;
  userTypes_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
};


export enum ParentPortfolioSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  HomeaddressAsc = 'HOMEADDRESS_ASC',
  HomeaddressDesc = 'HOMEADDRESS_DESC',
  ParticipantemailAsc = 'PARTICIPANTEMAIL_ASC',
  ParticipantemailDesc = 'PARTICIPANTEMAIL_DESC'
}

export type UserEventLogInsertInput = {
  created?: Maybe<Scalars['DateTime']>;
};

export type TeacherPortfolioQueryInput = {
  schoolAddress_lte?: Maybe<Scalars['String']>;
  schoolAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolName_exists?: Maybe<Scalars['Boolean']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName_lt?: Maybe<Scalars['String']>;
  schoolAddress_lt?: Maybe<Scalars['String']>;
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  schoolName_ne?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<TeacherPortfolioQueryInput>>;
  schoolName_gt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  schoolName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  schoolAddress_gt?: Maybe<Scalars['String']>;
  schoolAddress?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  schoolName_gte?: Maybe<Scalars['String']>;
  schoolAddress_gte?: Maybe<Scalars['String']>;
  schoolDistrict_ne?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  schoolAddress_exists?: Maybe<Scalars['Boolean']>;
  schoolName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolName_lte?: Maybe<Scalars['String']>;
  schoolAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_lte?: Maybe<Scalars['String']>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
  schoolAddress_ne?: Maybe<Scalars['String']>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<TeacherPortfolioQueryInput>>;
};

export type StudentPortfolioGuardianUpdateInput = {
  relationship_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  relationship?: Maybe<Scalars['String']>;
};

export type StudentPortfolioGuardianInsertInput = {
  email?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
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
    