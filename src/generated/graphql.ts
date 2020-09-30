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

export type TokenQueryInput = {
  newOwner_id_lte?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<TokenQueryInput>>;
  owner_id_ne?: Maybe<Scalars['ObjectId']>;
  customer_id_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<TokenQueryInput>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  customer_id_gte?: Maybe<Scalars['String']>;
  newOwner_id_exists?: Maybe<Scalars['Boolean']>;
  customer_id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  eventLog?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  eventLog_in?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  newOwner_id_gt?: Maybe<Scalars['ObjectId']>;
  newOwner_id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  customer_id_ne?: Maybe<Scalars['String']>;
  newOwner_id_lt?: Maybe<Scalars['ObjectId']>;
  newOwner_id_gte?: Maybe<Scalars['ObjectId']>;
  owner_id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  customer_id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  customer_id?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  eventLog_nin?: Maybe<Array<Maybe<TokenEventLogQueryInput>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  owner_id_gte?: Maybe<Scalars['ObjectId']>;
  newOwner_id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  owner_id_exists?: Maybe<Scalars['Boolean']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  owner_id_lte?: Maybe<Scalars['ObjectId']>;
  owner_id_gt?: Maybe<Scalars['ObjectId']>;
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  owner_id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  owner_id_lt?: Maybe<Scalars['ObjectId']>;
  customer_id_gt?: Maybe<Scalars['String']>;
  newOwner_id_ne?: Maybe<Scalars['ObjectId']>;
  customer_id_lte?: Maybe<Scalars['String']>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  customer_id_lt?: Maybe<Scalars['String']>;
};

export enum TokenSortByInput {
  NewownerIdDesc = 'NEWOWNER_ID_DESC',
  OwnerIdAsc = 'OWNER_ID_ASC',
  OwnerIdDesc = 'OWNER_ID_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  CustomerIdAsc = 'CUSTOMER_ID_ASC',
  CustomerIdDesc = 'CUSTOMER_ID_DESC',
  NewownerIdAsc = 'NEWOWNER_ID_ASC'
}

export type TokenUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  customer_id_unset?: Maybe<Scalars['Boolean']>;
  eventLog?: Maybe<Array<Maybe<TokenEventLogUpdateInput>>>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
  customer_id?: Maybe<Scalars['String']>;
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  newOwner_id_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  owner_id_unset?: Maybe<Scalars['Boolean']>;
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

export type TransactionQueryInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  referral_exists?: Maybe<Scalars['Boolean']>;
  tokenLog_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  referral?: Maybe<Array<Maybe<TransactionReferralQueryInput>>>;
  tokenLog_nin?: Maybe<Array<Maybe<TransactionTokenLogQueryInput>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  referral_nin?: Maybe<Array<Maybe<TransactionReferralQueryInput>>>;
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLogQueryInput>>>;
  tokenLog_in?: Maybe<Array<Maybe<TransactionTokenLogQueryInput>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<TransactionQueryInput>>;
  OR?: Maybe<Array<TransactionQueryInput>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  referral_in?: Maybe<Array<Maybe<TransactionReferralQueryInput>>>;
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
  data: ParentPortfolioInsertInput;
  query?: Maybe<ParentPortfolioQueryInput>;
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
  set: EmployerPortfolioUpdateInput;
  query?: Maybe<EmployerPortfolioQueryInput>;
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
  data: SchoolPortfolioInsertInput;
  query?: Maybe<SchoolPortfolioQueryInput>;
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
  query?: Maybe<TransactionQueryInput>;
  data: TransactionInsertInput;
};


export type MutationUpsertOneUserArgs = {
  query?: Maybe<UserQueryInput>;
  data: UserInsertInput;
};

export type StudentPortfolioInsertInput = {
  guardian?: Maybe<StudentPortfolioGuardianInsertInput>;
  home?: Maybe<StudentPortfolioHomeInsertInput>;
  school?: Maybe<StudentPortfolioSchoolInsertInput>;
  _id?: Maybe<Scalars['ObjectId']>;
  date?: Maybe<Scalars['String']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
};

export type StudentPortfolioSchoolUpdateInput = {
  name?: Maybe<Scalars['String']>;
  name_unset?: Maybe<Scalars['Boolean']>;
  district?: Maybe<Scalars['String']>;
  district_unset?: Maybe<Scalars['Boolean']>;
};

export type SendReferalInput = {
  id: Scalars['ObjectId'];
  name: Scalars['String'];
  email: Scalars['String'];
};

export type StudentPortfolioQueryInput = {
  grade_gte?: Maybe<Scalars['String']>;
  home_exists?: Maybe<Scalars['Boolean']>;
  ethnicity_exists?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  gender_gte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  grade_exists?: Maybe<Scalars['Boolean']>;
  school?: Maybe<StudentPortfolioSchoolQueryInput>;
  gender_ne?: Maybe<Scalars['String']>;
  grade_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  date_gte?: Maybe<Scalars['String']>;
  date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  grade_gt?: Maybe<Scalars['String']>;
  grade_lte?: Maybe<Scalars['String']>;
  date_gt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  date_lte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  date_exists?: Maybe<Scalars['Boolean']>;
  gender_lt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  date_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  guardian?: Maybe<StudentPortfolioGuardianQueryInput>;
  gender_lte?: Maybe<Scalars['String']>;
  grade?: Maybe<Scalars['String']>;
  grade_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<StudentPortfolioQueryInput>>;
  gender_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  school_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  grade_lt?: Maybe<Scalars['String']>;
  ethnicity_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<StudentPortfolioQueryInput>>;
  guardian_exists?: Maybe<Scalars['Boolean']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender_exists?: Maybe<Scalars['Boolean']>;
  grade_ne?: Maybe<Scalars['String']>;
  date_lt?: Maybe<Scalars['String']>;
  ethnicity_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['String']>;
  date_ne?: Maybe<Scalars['String']>;
  gender_gt?: Maybe<Scalars['String']>;
  home?: Maybe<StudentPortfolioHomeQueryInput>;
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

export type StudentPortfolioGuardianUpdateInput = {
  relationship?: Maybe<Scalars['String']>;
  relationship_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
};

export type StudentPortfolioHomeUpdateInput = {
  address?: Maybe<Scalars['String']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  language_unset?: Maybe<Scalars['Boolean']>;
  state_unset?: Maybe<Scalars['Boolean']>;
  zipcode?: Maybe<Scalars['String']>;
  city_unset?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress?: Maybe<Scalars['String']>;
  zipcode_unset?: Maybe<Scalars['Boolean']>;
  address_unset?: Maybe<Scalars['Boolean']>;
  city?: Maybe<Scalars['String']>;
  streetAddress_unset?: Maybe<Scalars['Boolean']>;
};


export type StudentPortfolioGuardian = {
  __typename?: 'StudentPortfolioGuardian';
  /** @deprecated  */
  email?: Maybe<Scalars['String']>;
  /** @deprecated  */
  relationship?: Maybe<Scalars['String']>;
};

export enum TransactionSortByInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type TransactionReferralUpdateInput = {
  sentTo?: Maybe<Scalars['String']>;
  sentTo_unset?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_unset?: Maybe<Scalars['Boolean']>;
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

export type UserUpdateInput = {
  lastName_unset?: Maybe<Scalars['Boolean']>;
  stripeId_unset?: Maybe<Scalars['Boolean']>;
  eventLog_unset?: Maybe<Scalars['Boolean']>;
  profileImg?: Maybe<Scalars['String']>;
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName?: Maybe<Scalars['String']>;
  firstName_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogUpdateInput>>>;
  lastName?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  profileImg_unset?: Maybe<Scalars['Boolean']>;
  userTypes_unset?: Maybe<Scalars['Boolean']>;
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
  sortBy?: Maybe<EmployerPortfolioSortByInput>;
  query?: Maybe<EmployerPortfolioQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryParentPortfolioArgs = {
  query?: Maybe<ParentPortfolioQueryInput>;
};


export type QueryParentPortfoliosArgs = {
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<ParentPortfolioSortByInput>;
  query?: Maybe<ParentPortfolioQueryInput>;
};


export type QuerySchoolPortfolioArgs = {
  query?: Maybe<SchoolPortfolioQueryInput>;
};


export type QuerySchoolPortfoliosArgs = {
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<SchoolPortfolioSortByInput>;
  query?: Maybe<SchoolPortfolioQueryInput>;
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
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<TokenSortByInput>;
  query?: Maybe<TokenQueryInput>;
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

export type StudentPortfolioSchoolQueryInput = {
  name_lte?: Maybe<Scalars['String']>;
  district_gte?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  district_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gt?: Maybe<Scalars['String']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_ne?: Maybe<Scalars['String']>;
  district_lte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  district?: Maybe<Scalars['String']>;
  district_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  district_exists?: Maybe<Scalars['Boolean']>;
  district_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioSchoolQueryInput>>;
  name_ne?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  district_lt?: Maybe<Scalars['String']>;
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

export type TransactionReferral = {
  __typename?: 'TransactionReferral';
  /** @deprecated  */
  sentTo?: Maybe<Scalars['String']>;
  /** @deprecated  */
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  /** @deprecated  */
  deletedCount: Scalars['Int'];
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

export type TokenEventLogQueryInput = {
  event_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<TokenEventLogQueryInput>>;
  created_gte?: Maybe<Scalars['DateTime']>;
  event_lt?: Maybe<Scalars['String']>;
  created_gt?: Maybe<Scalars['DateTime']>;
  event_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  created_lt?: Maybe<Scalars['DateTime']>;
  event_gte?: Maybe<Scalars['String']>;
  created_lte?: Maybe<Scalars['DateTime']>;
  created_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  event_ne?: Maybe<Scalars['String']>;
  event?: Maybe<Scalars['String']>;
  created_exists?: Maybe<Scalars['Boolean']>;
  event_gt?: Maybe<Scalars['String']>;
  event_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<TokenEventLogQueryInput>>;
  created?: Maybe<Scalars['DateTime']>;
  created_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  created_ne?: Maybe<Scalars['DateTime']>;
  event_lte?: Maybe<Scalars['String']>;
};

export type TokenEventLog = {
  __typename?: 'TokenEventLog';
  /** @deprecated  */
  created?: Maybe<Scalars['DateTime']>;
  /** @deprecated  */
  event?: Maybe<Scalars['String']>;
};

export type TeacherPortfolioInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  schoolAddress?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName?: Maybe<Scalars['String']>;
};

export enum UserSortByInput {
  StripeidAsc = 'STRIPEID_ASC',
  IdDesc = '_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  LastnameDesc = 'LASTNAME_DESC',
  ProfileimgAsc = 'PROFILEIMG_ASC',
  ProfileimgDesc = 'PROFILEIMG_DESC',
  StripeidDesc = 'STRIPEID_DESC',
  IdAsc = '_ID_ASC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  LastnameAsc = 'LASTNAME_ASC'
}

export type TokenInsertInput = {
  newOwner_id?: Maybe<Scalars['ObjectId']>;
  owner_id?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  customer_id?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<TokenEventLogInsertInput>>>;
};

export type SchoolPortfolioInsertInput = {
  stakeholder?: Maybe<Scalars['String']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  districtAddress?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserEventLogInsertInput = {
  event?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type StudentPortfolioHomeQueryInput = {
  language_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  address_ne?: Maybe<Scalars['String']>;
  streetAddress_gte?: Maybe<Scalars['String']>;
  zipcode_lte?: Maybe<Scalars['String']>;
  address_gte?: Maybe<Scalars['String']>;
  zipcode_ne?: Maybe<Scalars['String']>;
  streetAddress_exists?: Maybe<Scalars['Boolean']>;
  zipcode_gte?: Maybe<Scalars['String']>;
  address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_lte?: Maybe<Scalars['String']>;
  language_exists?: Maybe<Scalars['Boolean']>;
  state?: Maybe<Array<Maybe<Scalars['String']>>>;
  zipcode_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_lte?: Maybe<Scalars['String']>;
  city_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  zipcode_exists?: Maybe<Scalars['Boolean']>;
  streetAddress_ne?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
  address_gt?: Maybe<Scalars['String']>;
  streetAddress?: Maybe<Scalars['String']>;
  streetAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_gt?: Maybe<Scalars['String']>;
  language_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  city?: Maybe<Scalars['String']>;
  streetAddress_lt?: Maybe<Scalars['String']>;
  city_gte?: Maybe<Scalars['String']>;
  streetAddress_gt?: Maybe<Scalars['String']>;
  address_lt?: Maybe<Scalars['String']>;
  streetAddress_lte?: Maybe<Scalars['String']>;
  zipcode_lt?: Maybe<Scalars['String']>;
  city_ne?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioHomeQueryInput>>;
  address_exists?: Maybe<Scalars['Boolean']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  state_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  zipcode_gt?: Maybe<Scalars['String']>;
  city_exists?: Maybe<Scalars['Boolean']>;
  state_exists?: Maybe<Scalars['Boolean']>;
  zipcode_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  city_lt?: Maybe<Scalars['String']>;
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

export type StudentPortfolioSchool = {
  __typename?: 'StudentPortfolioSchool';
  /** @deprecated  */
  district?: Maybe<Scalars['String']>;
  /** @deprecated  */
  name?: Maybe<Scalars['String']>;
};

export type EmployerPortfolioQueryInput = {
  jobTitle_lte?: Maybe<Scalars['String']>;
  workAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress?: Maybe<Scalars['String']>;
  employerName_lte?: Maybe<Scalars['String']>;
  workAddress_lt?: Maybe<Scalars['String']>;
  jobTitle_gt?: Maybe<Scalars['String']>;
  workAddress_gte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  industry_gte?: Maybe<Scalars['String']>;
  primaryProduct_gte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<EmployerPortfolioQueryInput>>;
  industry_lt?: Maybe<Scalars['String']>;
  workAddress_lte?: Maybe<Scalars['String']>;
  industry_ne?: Maybe<Scalars['String']>;
  jobTitle_ne?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  primaryProduct_lte?: Maybe<Scalars['String']>;
  industry_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  employerName_gt?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  jobTitle_lt?: Maybe<Scalars['String']>;
  employerName_ne?: Maybe<Scalars['String']>;
  employerName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_gt?: Maybe<Scalars['String']>;
  primaryProduct_exists?: Maybe<Scalars['Boolean']>;
  industry_lte?: Maybe<Scalars['String']>;
  employerName_exists?: Maybe<Scalars['Boolean']>;
  jobTitle_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_ne?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  workAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_gte?: Maybe<Scalars['String']>;
  primaryProduct_lt?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  primaryProduct_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  jobTitle_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  workAddress_gt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  industry_gt?: Maybe<Scalars['String']>;
  employerName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  industry_exists?: Maybe<Scalars['Boolean']>;
  employerName_gte?: Maybe<Scalars['String']>;
  employerName_lt?: Maybe<Scalars['String']>;
  industry_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  primaryProduct?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<EmployerPortfolioQueryInput>>;
  jobTitle_exists?: Maybe<Scalars['Boolean']>;
  workAddress_ne?: Maybe<Scalars['String']>;
  employerName?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  workAddress_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type UserEventLogQueryInput = {
  AND?: Maybe<Array<UserEventLogQueryInput>>;
  event_gte?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_ne?: Maybe<Scalars['DateTime']>;
  event_exists?: Maybe<Scalars['Boolean']>;
  timestamp_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  event?: Maybe<Scalars['String']>;
  event_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_ne?: Maybe<Scalars['String']>;
  timestamp_gt?: Maybe<Scalars['DateTime']>;
  timestamp_lte?: Maybe<Scalars['DateTime']>;
  timestamp_lt?: Maybe<Scalars['DateTime']>;
  timestamp_gte?: Maybe<Scalars['DateTime']>;
  event_lte?: Maybe<Scalars['String']>;
  timestamp_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  OR?: Maybe<Array<UserEventLogQueryInput>>;
  event_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_lt?: Maybe<Scalars['String']>;
  timestamp_exists?: Maybe<Scalars['Boolean']>;
  event_gt?: Maybe<Scalars['String']>;
};

export type TransactionInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  referral?: Maybe<Array<Maybe<TransactionReferralInsertInput>>>;
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLogInsertInput>>>;
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

export type ParentPortfolioQueryInput = {
  email?: Maybe<Scalars['String']>;
  homeAddress_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  participantEmail?: Maybe<Scalars['String']>;
  participantEmail_lte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  homeAddress?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  participantEmail_exists?: Maybe<Scalars['Boolean']>;
  homeAddress_lte?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeAddress_ne?: Maybe<Scalars['String']>;
  participantEmail_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<ParentPortfolioQueryInput>>;
  email_gte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  participantEmail_lt?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  email_ne?: Maybe<Scalars['String']>;
  homeAddress_exists?: Maybe<Scalars['Boolean']>;
  email_lt?: Maybe<Scalars['String']>;
  participantEmail_gte?: Maybe<Scalars['String']>;
  homeAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  participantEmail_gt?: Maybe<Scalars['String']>;
  participantEmail_ne?: Maybe<Scalars['String']>;
  homeAddress_gt?: Maybe<Scalars['String']>;
  participantEmail_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeAddress_gte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  OR?: Maybe<Array<ParentPortfolioQueryInput>>;
};

export type UserEventLog = {
  __typename?: 'UserEventLog';
  /** @deprecated  */
  event?: Maybe<Scalars['String']>;
  /** @deprecated  */
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type TransactionTokenLogQueryInput = {
  sentTo_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  timestamp_ne?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Scalars['String']>;
  event_lt?: Maybe<Scalars['String']>;
  tokensSent_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  tokensSent_ne?: Maybe<Scalars['Int']>;
  receivedFrom_exists?: Maybe<Scalars['Boolean']>;
  receivedFrom_ne?: Maybe<Scalars['ObjectId']>;
  timestamp_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  event_gte?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  receivedFrom_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  receivedFrom_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  timestamp_lt?: Maybe<Scalars['DateTime']>;
  timestamp_lte?: Maybe<Scalars['DateTime']>;
  tokensSent_exists?: Maybe<Scalars['Boolean']>;
  tokensSent_lte?: Maybe<Scalars['Int']>;
  event_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  event_ne?: Maybe<Scalars['String']>;
  sentTo_gt?: Maybe<Scalars['ObjectId']>;
  sentTo?: Maybe<Scalars['ObjectId']>;
  sentTo_exists?: Maybe<Scalars['Boolean']>;
  tokensSent?: Maybe<Scalars['Int']>;
  tokensSent_gte?: Maybe<Scalars['Int']>;
  event_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<TransactionTokenLogQueryInput>>;
  receivedFrom?: Maybe<Scalars['ObjectId']>;
  timestamp_exists?: Maybe<Scalars['Boolean']>;
  event_exists?: Maybe<Scalars['Boolean']>;
  tokensSent_gt?: Maybe<Scalars['Int']>;
  sentTo_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  event_gt?: Maybe<Scalars['String']>;
  event_lte?: Maybe<Scalars['String']>;
  sentTo_lte?: Maybe<Scalars['ObjectId']>;
  timestamp_gte?: Maybe<Scalars['DateTime']>;
  OR?: Maybe<Array<TransactionTokenLogQueryInput>>;
  sentTo_gte?: Maybe<Scalars['ObjectId']>;
  receivedFrom_gt?: Maybe<Scalars['ObjectId']>;
  tokensSent_lt?: Maybe<Scalars['Int']>;
  timestamp_gt?: Maybe<Scalars['DateTime']>;
  receivedFrom_gte?: Maybe<Scalars['ObjectId']>;
  timestamp_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  receivedFrom_lte?: Maybe<Scalars['ObjectId']>;
  sentTo_ne?: Maybe<Scalars['ObjectId']>;
  tokensSent_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  receivedFrom_lt?: Maybe<Scalars['ObjectId']>;
  sentTo_lt?: Maybe<Scalars['ObjectId']>;
};

export type EmployerPortfolioUpdateInput = {
  workAddress?: Maybe<Scalars['String']>;
  employerName?: Maybe<Scalars['String']>;
  employerName_unset?: Maybe<Scalars['Boolean']>;
  industry_unset?: Maybe<Scalars['Boolean']>;
  jobTitle_unset?: Maybe<Scalars['Boolean']>;
  workAddress_unset?: Maybe<Scalars['Boolean']>;
  industry?: Maybe<Scalars['String']>;
  primaryProduct?: Maybe<Scalars['String']>;
  primaryProduct_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  jobTitle?: Maybe<Scalars['String']>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  /** @deprecated  */
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type TransactionTokenLogUpdateInput = {
  event?: Maybe<Scalars['String']>;
  event_unset?: Maybe<Scalars['Boolean']>;
  receivedFrom?: Maybe<Scalars['ObjectId']>;
  sentTo?: Maybe<Scalars['ObjectId']>;
  receivedFrom_unset?: Maybe<Scalars['Boolean']>;
  tokensSent_inc?: Maybe<Scalars['Int']>;
  tokensSent_unset?: Maybe<Scalars['Boolean']>;
  timestamp_unset?: Maybe<Scalars['Boolean']>;
  tokensSent?: Maybe<Scalars['Int']>;
  sentTo_unset?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type TransactionReferralQueryInput = {
  sentTo_gte?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_lt?: Maybe<Scalars['DateTime']>;
  timestamp_in?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  sentTo_ne?: Maybe<Scalars['String']>;
  sentTo_gt?: Maybe<Scalars['String']>;
  sentTo_exists?: Maybe<Scalars['Boolean']>;
  sentTo_lt?: Maybe<Scalars['String']>;
  sentTo_lte?: Maybe<Scalars['String']>;
  sentTo_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  timestamp_ne?: Maybe<Scalars['DateTime']>;
  timestamp_gt?: Maybe<Scalars['DateTime']>;
  timestamp_gte?: Maybe<Scalars['DateTime']>;
  sentTo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  timestamp_nin?: Maybe<Array<Maybe<Scalars['DateTime']>>>;
  OR?: Maybe<Array<TransactionReferralQueryInput>>;
  sentTo?: Maybe<Scalars['String']>;
  timestamp_lte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<TransactionReferralQueryInput>>;
  timestamp_exists?: Maybe<Scalars['Boolean']>;
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

export type StudentPortfolioSchoolInsertInput = {
  district?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type UserEventLogUpdateInput = {
  event_unset?: Maybe<Scalars['Boolean']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  timestamp_unset?: Maybe<Scalars['Boolean']>;
  event?: Maybe<Scalars['String']>;
};

export type SchoolPortfolioQueryInput = {
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  stakeholder_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  stakeholderAccess_lte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<SchoolPortfolioQueryInput>>;
  districtAddress_ne?: Maybe<Scalars['String']>;
  stakeholderAccess_gte?: Maybe<Scalars['String']>;
  stakeholder?: Maybe<Scalars['String']>;
  stakeholder_lte?: Maybe<Scalars['String']>;
  stakeholder_ne?: Maybe<Scalars['String']>;
  stakeholder_gt?: Maybe<Scalars['String']>;
  stakeholderAccess_ne?: Maybe<Scalars['String']>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict?: Maybe<Scalars['String']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  staffType_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  staffType_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  stakeholder_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  stakeholderAccess_exists?: Maybe<Scalars['Boolean']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
  schoolDistrict_lte?: Maybe<Scalars['String']>;
  districtAddress_gt?: Maybe<Scalars['String']>;
  districtAddress_lte?: Maybe<Scalars['String']>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  stakeholderAccess_gt?: Maybe<Scalars['String']>;
  stakeholderAccess_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  staffType_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  stakeholder_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  districtAddress_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  stakeholder_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholderAccess_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  districtAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stakeholderAccess_lt?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_ne?: Maybe<Scalars['String']>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  stakeholder_gte?: Maybe<Scalars['String']>;
  districtAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  districtAddress_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<SchoolPortfolioQueryInput>>;
  districtAddress?: Maybe<Scalars['String']>;
  districtAddress_gte?: Maybe<Scalars['String']>;
};

export type StudentPortfolioGuardianInsertInput = {
  email?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
};

export type StudentPortfolioHomeInsertInput = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  state?: Maybe<Array<Maybe<Scalars['String']>>>;
  streetAddress?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

export type TransactionUpdateInput = {
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLogUpdateInput>>>;
  tokenLog_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  referral?: Maybe<Array<Maybe<TransactionReferralUpdateInput>>>;
  referral_unset?: Maybe<Scalars['Boolean']>;
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

export enum EmployerPortfolioSortByInput {
  EmployernameDesc = 'EMPLOYERNAME_DESC',
  IndustryDesc = 'INDUSTRY_DESC',
  WorkaddressDesc = 'WORKADDRESS_DESC',
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC',
  PrimaryproductDesc = 'PRIMARYPRODUCT_DESC',
  WorkaddressAsc = 'WORKADDRESS_ASC',
  EmployernameAsc = 'EMPLOYERNAME_ASC',
  IndustryAsc = 'INDUSTRY_ASC',
  JobtitleAsc = 'JOBTITLE_ASC',
  JobtitleDesc = 'JOBTITLE_DESC',
  PrimaryproductAsc = 'PRIMARYPRODUCT_ASC'
}

export type Transaction = {
  __typename?: 'Transaction';
  /** @deprecated  */
  _id?: Maybe<Scalars['ObjectId']>;
  /** @deprecated  */
  referral?: Maybe<Array<Maybe<TransactionReferral>>>;
  /** @deprecated  */
  tokenLog?: Maybe<Array<Maybe<TransactionTokenLog>>>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  /** @deprecated  */
  matchedCount: Scalars['Int'];
  /** @deprecated  */
  modifiedCount: Scalars['Int'];
};

export type EmployerPortfolioInsertInput = {
  workAddress?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  employerName?: Maybe<Scalars['String']>;
  industry?: Maybe<Scalars['String']>;
  jobTitle?: Maybe<Scalars['String']>;
  primaryProduct?: Maybe<Scalars['String']>;
};

export type TransactionReferralInsertInput = {
  sentTo?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['DateTime']>;
};

export type ParentPortfolioUpdateInput = {
  participantEmail_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['String']>;
  email_unset?: Maybe<Scalars['Boolean']>;
  homeAddress?: Maybe<Scalars['String']>;
  homeAddress_unset?: Maybe<Scalars['Boolean']>;
  participantEmail?: Maybe<Scalars['String']>;
};

export type ParentPortfolioInsertInput = {
  homeAddress?: Maybe<Scalars['String']>;
  participantEmail?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
};

export type SendTokensInput = {
  recipient_id?: Maybe<Scalars['ObjectId']>;
  recipient_email?: Maybe<Scalars['String']>;
  token_ids?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  sender_id?: Maybe<Scalars['ObjectId']>;
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

export type StudentPortfolioHome = {
  __typename?: 'StudentPortfolioHome';
  /** @deprecated  */
  address?: Maybe<Scalars['String']>;
  /** @deprecated  */
  city?: Maybe<Scalars['String']>;
  /** @deprecated  */
  language?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated  */
  state?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** @deprecated  */
  streetAddress?: Maybe<Scalars['String']>;
  /** @deprecated  */
  zipcode?: Maybe<Scalars['String']>;
};

export type TeacherPortfolioQueryInput = {
  schoolDistrict_lt?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  schoolAddress_lte?: Maybe<Scalars['String']>;
  schoolName_exists?: Maybe<Scalars['Boolean']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  schoolName_gte?: Maybe<Scalars['String']>;
  schoolDistrict_ne?: Maybe<Scalars['String']>;
  schoolAddress_lt?: Maybe<Scalars['String']>;
  schoolName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolName_ne?: Maybe<Scalars['String']>;
  schoolAddress?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  schoolName_lte?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  schoolName_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<TeacherPortfolioQueryInput>>;
  OR?: Maybe<Array<TeacherPortfolioQueryInput>>;
  schoolName?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  schoolAddress_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_gte?: Maybe<Scalars['String']>;
  schoolAddress_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolDistrict_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  schoolDistrict_gt?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  schoolDistrict_exists?: Maybe<Scalars['Boolean']>;
  schoolAddress_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  schoolName_gt?: Maybe<Scalars['String']>;
  schoolDistrict_lte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  schoolAddress_gte?: Maybe<Scalars['String']>;
  schoolAddress_ne?: Maybe<Scalars['String']>;
  schoolAddress_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
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

export type UserQueryInput = {
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  profileImg_exists?: Maybe<Scalars['Boolean']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  email_lte?: Maybe<Scalars['String']>;
  stripeId_gt?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  profileImg_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  firstName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  firstName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  stripeId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  lastName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
  userTypes_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  stripeId?: Maybe<Scalars['String']>;
  firstName_lte?: Maybe<Scalars['String']>;
  email_ne?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  firstName_ne?: Maybe<Scalars['String']>;
  firstName_exists?: Maybe<Scalars['Boolean']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  firstName_lt?: Maybe<Scalars['String']>;
  lastName_lt?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  lastName_gt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  eventLog_exists?: Maybe<Scalars['Boolean']>;
  eventLog_in?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  userTypes_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  profileImg_lt?: Maybe<Scalars['String']>;
  stripeId_lte?: Maybe<Scalars['String']>;
  stripeId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<UserQueryInput>>;
  email_gte?: Maybe<Scalars['String']>;
  profileImg_lte?: Maybe<Scalars['String']>;
  profileImg_gt?: Maybe<Scalars['String']>;
  eventLog_nin?: Maybe<Array<Maybe<UserEventLogQueryInput>>>;
  AND?: Maybe<Array<UserQueryInput>>;
  lastName_ne?: Maybe<Scalars['String']>;
  stripeId_gte?: Maybe<Scalars['String']>;
  email_lt?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_exists?: Maybe<Scalars['Boolean']>;
  stripeId_ne?: Maybe<Scalars['String']>;
  profileImg_ne?: Maybe<Scalars['String']>;
  stripeId_lt?: Maybe<Scalars['String']>;
  stripeId_exists?: Maybe<Scalars['Boolean']>;
  lastName_lte?: Maybe<Scalars['String']>;
  profileImg_gte?: Maybe<Scalars['String']>;
  profileImg_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  profileImg?: Maybe<Scalars['String']>;
  userTypes_exists?: Maybe<Scalars['Boolean']>;
  lastName_gte?: Maybe<Scalars['String']>;
};

export enum SchoolPortfolioSortByInput {
  IdAsc = '_ID_ASC',
  SchooldistrictDesc = 'SCHOOLDISTRICT_DESC',
  StakeholderAsc = 'STAKEHOLDER_ASC',
  StakeholderaccessAsc = 'STAKEHOLDERACCESS_ASC',
  StakeholderaccessDesc = 'STAKEHOLDERACCESS_DESC',
  IdDesc = '_ID_DESC',
  DistrictaddressAsc = 'DISTRICTADDRESS_ASC',
  DistrictaddressDesc = 'DISTRICTADDRESS_DESC',
  SchooldistrictAsc = 'SCHOOLDISTRICT_ASC',
  StakeholderDesc = 'STAKEHOLDER_DESC'
}

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

export type SchoolPortfolioUpdateInput = {
  schoolDistrict_unset?: Maybe<Scalars['Boolean']>;
  staffType_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  stakeholder_unset?: Maybe<Scalars['Boolean']>;
  stakeholderAccess?: Maybe<Scalars['String']>;
  stakeholder?: Maybe<Scalars['String']>;
  districtAddress?: Maybe<Scalars['String']>;
  schoolDistrict?: Maybe<Scalars['String']>;
  stakeholderAccess_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  staffType?: Maybe<Array<Maybe<Scalars['String']>>>;
  districtAddress_unset?: Maybe<Scalars['Boolean']>;
};

export type TokenEventLogInsertInput = {
  created?: Maybe<Scalars['DateTime']>;
  event?: Maybe<Scalars['String']>;
};

export type DefaultPayload = {
  __typename?: 'DefaultPayload';
  /** @deprecated  */
  status: Scalars['String'];
};

export type StudentPortfolioGuardianQueryInput = {
  relationship_gte?: Maybe<Scalars['String']>;
  relationship_lt?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  relationship?: Maybe<Scalars['String']>;
  relationship_exists?: Maybe<Scalars['Boolean']>;
  relationship_lte?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_exists?: Maybe<Scalars['Boolean']>;
  relationship_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_lt?: Maybe<Scalars['String']>;
  relationship_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_ne?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  relationship_gt?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<StudentPortfolioGuardianQueryInput>>;
  email_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  relationship_ne?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TransactionTokenLogInsertInput = {
  sentTo?: Maybe<Scalars['ObjectId']>;
  timestamp?: Maybe<Scalars['DateTime']>;
  tokensSent?: Maybe<Scalars['Int']>;
  event?: Maybe<Scalars['String']>;
  receivedFrom?: Maybe<Scalars['ObjectId']>;
};

export type TokenEventLogUpdateInput = {
  created?: Maybe<Scalars['DateTime']>;
  created_unset?: Maybe<Scalars['Boolean']>;
  event?: Maybe<Scalars['String']>;
  event_unset?: Maybe<Scalars['Boolean']>;
};

export type UserInsertInput = {
  userTypes?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  email?: Maybe<Scalars['String']>;
  eventLog?: Maybe<Array<Maybe<UserEventLogInsertInput>>>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  profileImg?: Maybe<Scalars['String']>;
  stripeId?: Maybe<Scalars['String']>;
};

export type StudentPortfolioUpdateInput = {
  guardian?: Maybe<StudentPortfolioGuardianUpdateInput>;
  home?: Maybe<StudentPortfolioHomeUpdateInput>;
  home_unset?: Maybe<Scalars['Boolean']>;
  gender_unset?: Maybe<Scalars['Boolean']>;
  grade_unset?: Maybe<Scalars['Boolean']>;
  school_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  guardian_unset?: Maybe<Scalars['Boolean']>;
  date_unset?: Maybe<Scalars['Boolean']>;
  grade?: Maybe<Scalars['String']>;
  school?: Maybe<StudentPortfolioSchoolUpdateInput>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  ethnicity?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  ethnicity_unset?: Maybe<Scalars['Boolean']>;
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
    