import gql from 'graphql-tag'
import * as Urql from 'urql'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  _int4: any
  bigint: any
  bpchar: any
  geography: any
  geometry: any
  json: any
  jsonb: any
  numeric: any
  smallint: any
  timestamp: any
  timestamptz: any
  tsvector: any
}

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

export type CheckoutOrManagePostPaymentOutput = {
  __typename?: 'CheckoutOrManagePostPaymentOutput'
  url: Scalars['String']
}

export type GetStripeCustomerPortalLinkOutput = {
  __typename?: 'GetStripeCustomerPortalLinkOutput'
  link: Scalars['String']
}

export type MyMutationOutput = {
  __typename?: 'MyMutationOutput'
  id: Scalars['bigint']
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>
}

/** Boolean expression to compare columns of type "_int4". All fields are combined with logical 'AND'. */
export type _Int4_Comparison_Exp = {
  _eq?: Maybe<Scalars['_int4']>
  _gt?: Maybe<Scalars['_int4']>
  _gte?: Maybe<Scalars['_int4']>
  _in?: Maybe<Array<Scalars['_int4']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['_int4']>
  _lte?: Maybe<Scalars['_int4']>
  _neq?: Maybe<Scalars['_int4']>
  _nin?: Maybe<Array<Scalars['_int4']>>
}

/** columns and relationships of "all_posts" */
export type All_Posts = {
  __typename?: 'all_posts'
  alt_city_id?: Maybe<Scalars['bpchar']>
  alt_id?: Maybe<Scalars['bpchar']>
  category_id?: Maybe<Scalars['smallint']>
  category_name?: Maybe<Scalars['String']>
  detail?: Maybe<Scalars['String']>
  post_id: Scalars['bigint']
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  price_range?: Maybe<Scalars['_int4']>
  promotion_status?: Maybe<Scalars['smallint']>
  rank?: Maybe<Scalars['bpchar']>
  sub_category_id: Scalars['smallint']
  sub_category_name?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['jsonb']>
  title?: Maybe<Scalars['String']>
  /** An object relationship */
  user?: Maybe<Users>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** columns and relationships of "all_posts" */
export type All_PostsTagsArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "all_posts" */
export type All_Posts_Aggregate = {
  __typename?: 'all_posts_aggregate'
  aggregate?: Maybe<All_Posts_Aggregate_Fields>
  nodes: Array<All_Posts>
}

/** aggregate fields of "all_posts" */
export type All_Posts_Aggregate_Fields = {
  __typename?: 'all_posts_aggregate_fields'
  avg?: Maybe<All_Posts_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<All_Posts_Max_Fields>
  min?: Maybe<All_Posts_Min_Fields>
  stddev?: Maybe<All_Posts_Stddev_Fields>
  stddev_pop?: Maybe<All_Posts_Stddev_Pop_Fields>
  stddev_samp?: Maybe<All_Posts_Stddev_Samp_Fields>
  sum?: Maybe<All_Posts_Sum_Fields>
  var_pop?: Maybe<All_Posts_Var_Pop_Fields>
  var_samp?: Maybe<All_Posts_Var_Samp_Fields>
  variance?: Maybe<All_Posts_Variance_Fields>
}

/** aggregate fields of "all_posts" */
export type All_Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<All_Posts_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type All_Posts_Append_Input = {
  tags?: Maybe<Scalars['jsonb']>
}

/** aggregate avg on columns */
export type All_Posts_Avg_Fields = {
  __typename?: 'all_posts_avg_fields'
  category_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "all_posts". All fields are combined with a logical 'AND'. */
export type All_Posts_Bool_Exp = {
  _and?: Maybe<Array<All_Posts_Bool_Exp>>
  _not?: Maybe<All_Posts_Bool_Exp>
  _or?: Maybe<Array<All_Posts_Bool_Exp>>
  alt_city_id?: Maybe<Bpchar_Comparison_Exp>
  alt_id?: Maybe<Bpchar_Comparison_Exp>
  category_id?: Maybe<Smallint_Comparison_Exp>
  category_name?: Maybe<String_Comparison_Exp>
  detail?: Maybe<String_Comparison_Exp>
  post_id?: Maybe<Bigint_Comparison_Exp>
  posted_by?: Maybe<Bigint_Comparison_Exp>
  price_description?: Maybe<String_Comparison_Exp>
  price_range?: Maybe<_Int4_Comparison_Exp>
  promotion_status?: Maybe<Smallint_Comparison_Exp>
  rank?: Maybe<Bpchar_Comparison_Exp>
  sub_category_id?: Maybe<Smallint_Comparison_Exp>
  sub_category_name?: Maybe<String_Comparison_Exp>
  tags?: Maybe<Jsonb_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  zip_code_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "all_posts" */
export enum All_Posts_Constraint {
  /** unique or primary key constraint on columns "post_id" */
  AllPostsPkey = 'all_posts_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type All_Posts_Delete_At_Path_Input = {
  tags?: Maybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type All_Posts_Delete_Elem_Input = {
  tags?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type All_Posts_Delete_Key_Input = {
  tags?: Maybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "all_posts" */
export type All_Posts_Inc_Input = {
  category_id?: Maybe<Scalars['smallint']>
  post_id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  promotion_status?: Maybe<Scalars['smallint']>
  sub_category_id?: Maybe<Scalars['smallint']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "all_posts" */
export type All_Posts_Insert_Input = {
  alt_city_id?: Maybe<Scalars['bpchar']>
  alt_id?: Maybe<Scalars['bpchar']>
  category_id?: Maybe<Scalars['smallint']>
  category_name?: Maybe<Scalars['String']>
  detail?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  price_range?: Maybe<Scalars['_int4']>
  promotion_status?: Maybe<Scalars['smallint']>
  rank?: Maybe<Scalars['bpchar']>
  sub_category_id?: Maybe<Scalars['smallint']>
  sub_category_name?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['jsonb']>
  title?: Maybe<Scalars['String']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type All_Posts_Max_Fields = {
  __typename?: 'all_posts_max_fields'
  alt_city_id?: Maybe<Scalars['bpchar']>
  alt_id?: Maybe<Scalars['bpchar']>
  category_id?: Maybe<Scalars['smallint']>
  category_name?: Maybe<Scalars['String']>
  detail?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  promotion_status?: Maybe<Scalars['smallint']>
  rank?: Maybe<Scalars['bpchar']>
  sub_category_id?: Maybe<Scalars['smallint']>
  sub_category_name?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type All_Posts_Min_Fields = {
  __typename?: 'all_posts_min_fields'
  alt_city_id?: Maybe<Scalars['bpchar']>
  alt_id?: Maybe<Scalars['bpchar']>
  category_id?: Maybe<Scalars['smallint']>
  category_name?: Maybe<Scalars['String']>
  detail?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  promotion_status?: Maybe<Scalars['smallint']>
  rank?: Maybe<Scalars['bpchar']>
  sub_category_id?: Maybe<Scalars['smallint']>
  sub_category_name?: Maybe<Scalars['String']>
  title?: Maybe<Scalars['String']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** response of any mutation on the table "all_posts" */
export type All_Posts_Mutation_Response = {
  __typename?: 'all_posts_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<All_Posts>
}

/** on_conflict condition type for table "all_posts" */
export type All_Posts_On_Conflict = {
  constraint: All_Posts_Constraint
  update_columns?: Array<All_Posts_Update_Column>
  where?: Maybe<All_Posts_Bool_Exp>
}

/** Ordering options when selecting data from "all_posts". */
export type All_Posts_Order_By = {
  alt_city_id?: Maybe<Order_By>
  alt_id?: Maybe<Order_By>
  category_id?: Maybe<Order_By>
  category_name?: Maybe<Order_By>
  detail?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  price_description?: Maybe<Order_By>
  price_range?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  rank?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  sub_category_name?: Maybe<Order_By>
  tags?: Maybe<Order_By>
  title?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** primary key columns input for table: all_posts */
export type All_Posts_Pk_Columns_Input = {
  post_id: Scalars['bigint']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type All_Posts_Prepend_Input = {
  tags?: Maybe<Scalars['jsonb']>
}

/** select columns of table "all_posts" */
export enum All_Posts_Select_Column {
  /** column name */
  AltCityId = 'alt_city_id',
  /** column name */
  AltId = 'alt_id',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  Detail = 'detail',
  /** column name */
  PostId = 'post_id',
  /** column name */
  PostedBy = 'posted_by',
  /** column name */
  PriceDescription = 'price_description',
  /** column name */
  PriceRange = 'price_range',
  /** column name */
  PromotionStatus = 'promotion_status',
  /** column name */
  Rank = 'rank',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  SubCategoryName = 'sub_category_name',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  ZipCodeId = 'zip_code_id',
}

/** input type for updating data in table "all_posts" */
export type All_Posts_Set_Input = {
  alt_city_id?: Maybe<Scalars['bpchar']>
  alt_id?: Maybe<Scalars['bpchar']>
  category_id?: Maybe<Scalars['smallint']>
  category_name?: Maybe<Scalars['String']>
  detail?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  price_range?: Maybe<Scalars['_int4']>
  promotion_status?: Maybe<Scalars['smallint']>
  rank?: Maybe<Scalars['bpchar']>
  sub_category_id?: Maybe<Scalars['smallint']>
  sub_category_name?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['jsonb']>
  title?: Maybe<Scalars['String']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type All_Posts_Stddev_Fields = {
  __typename?: 'all_posts_stddev_fields'
  category_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type All_Posts_Stddev_Pop_Fields = {
  __typename?: 'all_posts_stddev_pop_fields'
  category_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type All_Posts_Stddev_Samp_Fields = {
  __typename?: 'all_posts_stddev_samp_fields'
  category_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "all_posts" */
export type All_Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: All_Posts_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type All_Posts_Stream_Cursor_Value_Input = {
  alt_city_id?: Maybe<Scalars['bpchar']>
  alt_id?: Maybe<Scalars['bpchar']>
  category_id?: Maybe<Scalars['smallint']>
  category_name?: Maybe<Scalars['String']>
  detail?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  price_range?: Maybe<Scalars['_int4']>
  promotion_status?: Maybe<Scalars['smallint']>
  rank?: Maybe<Scalars['bpchar']>
  sub_category_id?: Maybe<Scalars['smallint']>
  sub_category_name?: Maybe<Scalars['String']>
  tags?: Maybe<Scalars['jsonb']>
  title?: Maybe<Scalars['String']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type All_Posts_Sum_Fields = {
  __typename?: 'all_posts_sum_fields'
  category_id?: Maybe<Scalars['smallint']>
  post_id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  promotion_status?: Maybe<Scalars['smallint']>
  sub_category_id?: Maybe<Scalars['smallint']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** update columns of table "all_posts" */
export enum All_Posts_Update_Column {
  /** column name */
  AltCityId = 'alt_city_id',
  /** column name */
  AltId = 'alt_id',
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  Detail = 'detail',
  /** column name */
  PostId = 'post_id',
  /** column name */
  PostedBy = 'posted_by',
  /** column name */
  PriceDescription = 'price_description',
  /** column name */
  PriceRange = 'price_range',
  /** column name */
  PromotionStatus = 'promotion_status',
  /** column name */
  Rank = 'rank',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  SubCategoryName = 'sub_category_name',
  /** column name */
  Tags = 'tags',
  /** column name */
  Title = 'title',
  /** column name */
  ZipCodeId = 'zip_code_id',
}

export type All_Posts_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<All_Posts_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<All_Posts_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<All_Posts_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<All_Posts_Delete_Key_Input>
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<All_Posts_Inc_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<All_Posts_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<All_Posts_Set_Input>
  where: All_Posts_Bool_Exp
}

/** aggregate var_pop on columns */
export type All_Posts_Var_Pop_Fields = {
  __typename?: 'all_posts_var_pop_fields'
  category_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type All_Posts_Var_Samp_Fields = {
  __typename?: 'all_posts_var_samp_fields'
  category_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type All_Posts_Variance_Fields = {
  __typename?: 'all_posts_variance_fields'
  category_id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>
  _gt?: Maybe<Scalars['bigint']>
  _gte?: Maybe<Scalars['bigint']>
  _in?: Maybe<Array<Scalars['bigint']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['bigint']>
  _lte?: Maybe<Scalars['bigint']>
  _neq?: Maybe<Scalars['bigint']>
  _nin?: Maybe<Array<Scalars['bigint']>>
}

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>
  _gt?: Maybe<Scalars['bpchar']>
  _gte?: Maybe<Scalars['bpchar']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['bpchar']>
  _in?: Maybe<Array<Scalars['bpchar']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['bpchar']>
  _is_null?: Maybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['bpchar']>
  _lt?: Maybe<Scalars['bpchar']>
  _lte?: Maybe<Scalars['bpchar']>
  _neq?: Maybe<Scalars['bpchar']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['bpchar']>
  _nin?: Maybe<Array<Scalars['bpchar']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['bpchar']>
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['bpchar']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['bpchar']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['bpchar']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['bpchar']>
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['bpchar']>
}

/** columns and relationships of "business_sizes" */
export type Business_Sizes = {
  __typename?: 'business_sizes'
  display_name: Scalars['String']
  /** An array relationship */
  promotions: Array<Promotions>
  /** An aggregate relationship */
  promotions_aggregate: Promotions_Aggregate
  status?: Maybe<Scalars['smallint']>
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  value: Scalars['String']
}

/** columns and relationships of "business_sizes" */
export type Business_SizesPromotionsArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

/** columns and relationships of "business_sizes" */
export type Business_SizesPromotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

/** columns and relationships of "business_sizes" */
export type Business_SizesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "business_sizes" */
export type Business_SizesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** aggregated selection of "business_sizes" */
export type Business_Sizes_Aggregate = {
  __typename?: 'business_sizes_aggregate'
  aggregate?: Maybe<Business_Sizes_Aggregate_Fields>
  nodes: Array<Business_Sizes>
}

/** aggregate fields of "business_sizes" */
export type Business_Sizes_Aggregate_Fields = {
  __typename?: 'business_sizes_aggregate_fields'
  avg?: Maybe<Business_Sizes_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Business_Sizes_Max_Fields>
  min?: Maybe<Business_Sizes_Min_Fields>
  stddev?: Maybe<Business_Sizes_Stddev_Fields>
  stddev_pop?: Maybe<Business_Sizes_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Business_Sizes_Stddev_Samp_Fields>
  sum?: Maybe<Business_Sizes_Sum_Fields>
  var_pop?: Maybe<Business_Sizes_Var_Pop_Fields>
  var_samp?: Maybe<Business_Sizes_Var_Samp_Fields>
  variance?: Maybe<Business_Sizes_Variance_Fields>
}

/** aggregate fields of "business_sizes" */
export type Business_Sizes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Business_Sizes_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Business_Sizes_Avg_Fields = {
  __typename?: 'business_sizes_avg_fields'
  status?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "business_sizes". All fields are combined with a logical 'AND'. */
export type Business_Sizes_Bool_Exp = {
  _and?: Maybe<Array<Business_Sizes_Bool_Exp>>
  _not?: Maybe<Business_Sizes_Bool_Exp>
  _or?: Maybe<Array<Business_Sizes_Bool_Exp>>
  display_name?: Maybe<String_Comparison_Exp>
  promotions?: Maybe<Promotions_Bool_Exp>
  status?: Maybe<Smallint_Comparison_Exp>
  users?: Maybe<Users_Bool_Exp>
  value?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "business_sizes" */
export enum Business_Sizes_Constraint {
  /** unique or primary key constraint on columns "value" */
  BusinessSizesPkey = 'business_sizes_pkey',
}

/** input type for incrementing numeric columns in table "business_sizes" */
export type Business_Sizes_Inc_Input = {
  status?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "business_sizes" */
export type Business_Sizes_Insert_Input = {
  display_name?: Maybe<Scalars['String']>
  promotions?: Maybe<Promotions_Arr_Rel_Insert_Input>
  status?: Maybe<Scalars['smallint']>
  users?: Maybe<Users_Arr_Rel_Insert_Input>
  value?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Business_Sizes_Max_Fields = {
  __typename?: 'business_sizes_max_fields'
  display_name?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['smallint']>
  value?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Business_Sizes_Min_Fields = {
  __typename?: 'business_sizes_min_fields'
  display_name?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['smallint']>
  value?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "business_sizes" */
export type Business_Sizes_Mutation_Response = {
  __typename?: 'business_sizes_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Business_Sizes>
}

/** input type for inserting object relation for remote table "business_sizes" */
export type Business_Sizes_Obj_Rel_Insert_Input = {
  data: Business_Sizes_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Business_Sizes_On_Conflict>
}

/** on_conflict condition type for table "business_sizes" */
export type Business_Sizes_On_Conflict = {
  constraint: Business_Sizes_Constraint
  update_columns?: Array<Business_Sizes_Update_Column>
  where?: Maybe<Business_Sizes_Bool_Exp>
}

/** Ordering options when selecting data from "business_sizes". */
export type Business_Sizes_Order_By = {
  display_name?: Maybe<Order_By>
  promotions_aggregate?: Maybe<Promotions_Aggregate_Order_By>
  status?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_Aggregate_Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: business_sizes */
export type Business_Sizes_Pk_Columns_Input = {
  value: Scalars['String']
}

/** select columns of table "business_sizes" */
export enum Business_Sizes_Select_Column {
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Status = 'status',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "business_sizes" */
export type Business_Sizes_Set_Input = {
  display_name?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['smallint']>
  value?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Business_Sizes_Stddev_Fields = {
  __typename?: 'business_sizes_stddev_fields'
  status?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Business_Sizes_Stddev_Pop_Fields = {
  __typename?: 'business_sizes_stddev_pop_fields'
  status?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Business_Sizes_Stddev_Samp_Fields = {
  __typename?: 'business_sizes_stddev_samp_fields'
  status?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "business_sizes" */
export type Business_Sizes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Business_Sizes_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Business_Sizes_Stream_Cursor_Value_Input = {
  display_name?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['smallint']>
  value?: Maybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Business_Sizes_Sum_Fields = {
  __typename?: 'business_sizes_sum_fields'
  status?: Maybe<Scalars['smallint']>
}

/** update columns of table "business_sizes" */
export enum Business_Sizes_Update_Column {
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Status = 'status',
  /** column name */
  Value = 'value',
}

export type Business_Sizes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Business_Sizes_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Business_Sizes_Set_Input>
  where: Business_Sizes_Bool_Exp
}

/** aggregate var_pop on columns */
export type Business_Sizes_Var_Pop_Fields = {
  __typename?: 'business_sizes_var_pop_fields'
  status?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Business_Sizes_Var_Samp_Fields = {
  __typename?: 'business_sizes_var_samp_fields'
  status?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Business_Sizes_Variance_Fields = {
  __typename?: 'business_sizes_variance_fields'
  status?: Maybe<Scalars['Float']>
}

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories'
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  name: Scalars['String']
  order?: Maybe<Scalars['smallint']>
  /** An array relationship */
  sub_categories: Array<Sub_Categories>
  /** An aggregate relationship */
  sub_categories_aggregate: Sub_Categories_Aggregate
  updated_at: Scalars['timestamp']
}

/** columns and relationships of "categories" */
export type CategoriesSub_CategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

/** columns and relationships of "categories" */
export type CategoriesSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate'
  aggregate?: Maybe<Categories_Aggregate_Fields>
  nodes: Array<Categories>
}

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields'
  avg?: Maybe<Categories_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Categories_Max_Fields>
  min?: Maybe<Categories_Min_Fields>
  stddev?: Maybe<Categories_Stddev_Fields>
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>
  sum?: Maybe<Categories_Sum_Fields>
  var_pop?: Maybe<Categories_Var_Pop_Fields>
  var_samp?: Maybe<Categories_Var_Samp_Fields>
  variance?: Maybe<Categories_Variance_Fields>
}

/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Categories_Bool_Exp>>
  _not?: Maybe<Categories_Bool_Exp>
  _or?: Maybe<Array<Categories_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Smallint_Comparison_Exp>
  sub_categories?: Maybe<Sub_Categories_Bool_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  CategoriesPkey = 'categories_pkey',
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  sub_categories?: Maybe<Sub_Categories_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Categories>
}

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Categories_On_Conflict>
}

/** on_conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint
  update_columns?: Array<Categories_Update_Column>
  where?: Maybe<Categories_Bool_Exp>
}

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_categories_aggregate?: Maybe<Sub_Categories_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "categories" */
export type Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Categories_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Categories_Stream_Cursor_Value_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields'
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
}

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Categories_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Categories_Set_Input>
  where: Categories_Bool_Exp
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
  __typename?: 'categories_variance_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

export type Category_Finder_Args = {
  search_text?: Maybe<Scalars['String']>
}

/** columns and relationships of "category_list" */
export type Category_List = {
  __typename?: 'category_list'
  category_id?: Maybe<Scalars['bigint']>
  category_name?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  sub_category_name?: Maybe<Scalars['String']>
  values?: Maybe<Scalars['json']>
}

/** columns and relationships of "category_list" */
export type Category_ListValuesArgs = {
  path?: Maybe<Scalars['String']>
}

export type Category_List_Aggregate = {
  __typename?: 'category_list_aggregate'
  aggregate?: Maybe<Category_List_Aggregate_Fields>
  nodes: Array<Category_List>
}

/** aggregate fields of "category_list" */
export type Category_List_Aggregate_Fields = {
  __typename?: 'category_list_aggregate_fields'
  avg?: Maybe<Category_List_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Category_List_Max_Fields>
  min?: Maybe<Category_List_Min_Fields>
  stddev?: Maybe<Category_List_Stddev_Fields>
  stddev_pop?: Maybe<Category_List_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Category_List_Stddev_Samp_Fields>
  sum?: Maybe<Category_List_Sum_Fields>
  var_pop?: Maybe<Category_List_Var_Pop_Fields>
  var_samp?: Maybe<Category_List_Var_Samp_Fields>
  variance?: Maybe<Category_List_Variance_Fields>
}

/** aggregate fields of "category_list" */
export type Category_List_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Category_List_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Category_List_Avg_Fields = {
  __typename?: 'category_list_avg_fields'
  category_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "category_list". All fields are combined with a logical 'AND'. */
export type Category_List_Bool_Exp = {
  _and?: Maybe<Array<Category_List_Bool_Exp>>
  _not?: Maybe<Category_List_Bool_Exp>
  _or?: Maybe<Array<Category_List_Bool_Exp>>
  category_id?: Maybe<Bigint_Comparison_Exp>
  category_name?: Maybe<String_Comparison_Exp>
  sub_category_id?: Maybe<Bigint_Comparison_Exp>
  sub_category_name?: Maybe<String_Comparison_Exp>
  values?: Maybe<Json_Comparison_Exp>
}

/** aggregate max on columns */
export type Category_List_Max_Fields = {
  __typename?: 'category_list_max_fields'
  category_id?: Maybe<Scalars['bigint']>
  category_name?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  sub_category_name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Category_List_Min_Fields = {
  __typename?: 'category_list_min_fields'
  category_id?: Maybe<Scalars['bigint']>
  category_name?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  sub_category_name?: Maybe<Scalars['String']>
}

/** Ordering options when selecting data from "category_list". */
export type Category_List_Order_By = {
  category_id?: Maybe<Order_By>
  category_name?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  sub_category_name?: Maybe<Order_By>
  values?: Maybe<Order_By>
}

/** select columns of table "category_list" */
export enum Category_List_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CategoryName = 'category_name',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  SubCategoryName = 'sub_category_name',
  /** column name */
  Values = 'values',
}

/** aggregate stddev on columns */
export type Category_List_Stddev_Fields = {
  __typename?: 'category_list_stddev_fields'
  category_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Category_List_Stddev_Pop_Fields = {
  __typename?: 'category_list_stddev_pop_fields'
  category_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Category_List_Stddev_Samp_Fields = {
  __typename?: 'category_list_stddev_samp_fields'
  category_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "category_list" */
export type Category_List_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Category_List_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Category_List_Stream_Cursor_Value_Input = {
  category_id?: Maybe<Scalars['bigint']>
  category_name?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  sub_category_name?: Maybe<Scalars['String']>
  values?: Maybe<Scalars['json']>
}

/** aggregate sum on columns */
export type Category_List_Sum_Fields = {
  __typename?: 'category_list_sum_fields'
  category_id?: Maybe<Scalars['bigint']>
  sub_category_id?: Maybe<Scalars['bigint']>
}

/** aggregate var_pop on columns */
export type Category_List_Var_Pop_Fields = {
  __typename?: 'category_list_var_pop_fields'
  category_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Category_List_Var_Samp_Fields = {
  __typename?: 'category_list_var_samp_fields'
  category_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Category_List_Variance_Fields = {
  __typename?: 'category_list_variance_fields'
  category_id?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "cities" */
export type Cities = {
  __typename?: 'cities'
  alt_id: Scalars['bpchar']
  country_code: Scalars['String']
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  name: Scalars['String']
  state_code: Scalars['String']
  updated_at: Scalars['timestamp']
  /** An array relationship */
  zip_codes: Array<Zip_Codes>
  /** An aggregate relationship */
  zip_codes_aggregate: Zip_Codes_Aggregate
}

/** columns and relationships of "cities" */
export type CitiesZip_CodesArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

/** columns and relationships of "cities" */
export type CitiesZip_Codes_AggregateArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

/** aggregated selection of "cities" */
export type Cities_Aggregate = {
  __typename?: 'cities_aggregate'
  aggregate?: Maybe<Cities_Aggregate_Fields>
  nodes: Array<Cities>
}

/** aggregate fields of "cities" */
export type Cities_Aggregate_Fields = {
  __typename?: 'cities_aggregate_fields'
  avg?: Maybe<Cities_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Cities_Max_Fields>
  min?: Maybe<Cities_Min_Fields>
  stddev?: Maybe<Cities_Stddev_Fields>
  stddev_pop?: Maybe<Cities_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Cities_Stddev_Samp_Fields>
  sum?: Maybe<Cities_Sum_Fields>
  var_pop?: Maybe<Cities_Var_Pop_Fields>
  var_samp?: Maybe<Cities_Var_Samp_Fields>
  variance?: Maybe<Cities_Variance_Fields>
}

/** aggregate fields of "cities" */
export type Cities_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cities_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Cities_Avg_Fields = {
  __typename?: 'cities_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export type Cities_Bool_Exp = {
  _and?: Maybe<Array<Cities_Bool_Exp>>
  _not?: Maybe<Cities_Bool_Exp>
  _or?: Maybe<Array<Cities_Bool_Exp>>
  alt_id?: Maybe<Bpchar_Comparison_Exp>
  country_code?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  state_code?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  zip_codes?: Maybe<Zip_Codes_Bool_Exp>
}

/** unique or primary key constraints on table "cities" */
export enum Cities_Constraint {
  /** unique or primary key constraint on columns "alt_id" */
  CitiesAltIdKey = 'cities_alt_id_key',
  /** unique or primary key constraint on columns "id" */
  CitiesPkey = 'cities_pkey',
}

/** input type for incrementing numeric columns in table "cities" */
export type Cities_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "cities" */
export type Cities_Insert_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  country_code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  state_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  zip_codes?: Maybe<Zip_Codes_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Cities_Max_Fields = {
  __typename?: 'cities_max_fields'
  alt_id?: Maybe<Scalars['bpchar']>
  country_code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  state_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type Cities_Min_Fields = {
  __typename?: 'cities_min_fields'
  alt_id?: Maybe<Scalars['bpchar']>
  country_code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  state_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "cities" */
export type Cities_Mutation_Response = {
  __typename?: 'cities_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Cities>
}

/** input type for inserting object relation for remote table "cities" */
export type Cities_Obj_Rel_Insert_Input = {
  data: Cities_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Cities_On_Conflict>
}

/** on_conflict condition type for table "cities" */
export type Cities_On_Conflict = {
  constraint: Cities_Constraint
  update_columns?: Array<Cities_Update_Column>
  where?: Maybe<Cities_Bool_Exp>
}

/** Ordering options when selecting data from "cities". */
export type Cities_Order_By = {
  alt_id?: Maybe<Order_By>
  country_code?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  state_code?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  zip_codes_aggregate?: Maybe<Zip_Codes_Aggregate_Order_By>
}

/** primary key columns input for table: cities */
export type Cities_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "cities" */
export enum Cities_Select_Column {
  /** column name */
  AltId = 'alt_id',
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StateCode = 'state_code',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "cities" */
export type Cities_Set_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  country_code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  state_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Cities_Stddev_Fields = {
  __typename?: 'cities_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Cities_Stddev_Pop_Fields = {
  __typename?: 'cities_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Cities_Stddev_Samp_Fields = {
  __typename?: 'cities_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "cities" */
export type Cities_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Cities_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Cities_Stream_Cursor_Value_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  country_code?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  state_code?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate sum on columns */
export type Cities_Sum_Fields = {
  __typename?: 'cities_sum_fields'
  id?: Maybe<Scalars['bigint']>
}

/** update columns of table "cities" */
export enum Cities_Update_Column {
  /** column name */
  AltId = 'alt_id',
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StateCode = 'state_code',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Cities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Cities_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Cities_Set_Input>
  where: Cities_Bool_Exp
}

/** aggregate var_pop on columns */
export type Cities_Var_Pop_Fields = {
  __typename?: 'cities_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Cities_Var_Samp_Fields = {
  __typename?: 'cities_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Cities_Variance_Fields = {
  __typename?: 'cities_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC',
}

/** columns and relationships of "donations" */
export type Donations = {
  __typename?: 'donations'
  amount: Scalars['numeric']
  created_at: Scalars['timestamptz']
  email?: Maybe<Scalars['String']>
  id: Scalars['bigint']
  stripe_checkout_session_id: Scalars['String']
  updated_at: Scalars['timestamptz']
}

/** aggregated selection of "donations" */
export type Donations_Aggregate = {
  __typename?: 'donations_aggregate'
  aggregate?: Maybe<Donations_Aggregate_Fields>
  nodes: Array<Donations>
}

/** aggregate fields of "donations" */
export type Donations_Aggregate_Fields = {
  __typename?: 'donations_aggregate_fields'
  avg?: Maybe<Donations_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Donations_Max_Fields>
  min?: Maybe<Donations_Min_Fields>
  stddev?: Maybe<Donations_Stddev_Fields>
  stddev_pop?: Maybe<Donations_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Donations_Stddev_Samp_Fields>
  sum?: Maybe<Donations_Sum_Fields>
  var_pop?: Maybe<Donations_Var_Pop_Fields>
  var_samp?: Maybe<Donations_Var_Samp_Fields>
  variance?: Maybe<Donations_Variance_Fields>
}

/** aggregate fields of "donations" */
export type Donations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Donations_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Donations_Avg_Fields = {
  __typename?: 'donations_avg_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "donations". All fields are combined with a logical 'AND'. */
export type Donations_Bool_Exp = {
  _and?: Maybe<Array<Donations_Bool_Exp>>
  _not?: Maybe<Donations_Bool_Exp>
  _or?: Maybe<Array<Donations_Bool_Exp>>
  amount?: Maybe<Numeric_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  stripe_checkout_session_id?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
}

/** unique or primary key constraints on table "donations" */
export enum Donations_Constraint {
  /** unique or primary key constraint on columns "id" */
  DonationsPkey = 'donations_pkey',
}

/** input type for incrementing numeric columns in table "donations" */
export type Donations_Inc_Input = {
  amount?: Maybe<Scalars['numeric']>
  id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "donations" */
export type Donations_Insert_Input = {
  amount?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  stripe_checkout_session_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate max on columns */
export type Donations_Max_Fields = {
  __typename?: 'donations_max_fields'
  amount?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  stripe_checkout_session_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate min on columns */
export type Donations_Min_Fields = {
  __typename?: 'donations_min_fields'
  amount?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  stripe_checkout_session_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** response of any mutation on the table "donations" */
export type Donations_Mutation_Response = {
  __typename?: 'donations_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Donations>
}

/** on_conflict condition type for table "donations" */
export type Donations_On_Conflict = {
  constraint: Donations_Constraint
  update_columns?: Array<Donations_Update_Column>
  where?: Maybe<Donations_Bool_Exp>
}

/** Ordering options when selecting data from "donations". */
export type Donations_Order_By = {
  amount?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  stripe_checkout_session_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: donations */
export type Donations_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "donations" */
export enum Donations_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  StripeCheckoutSessionId = 'stripe_checkout_session_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "donations" */
export type Donations_Set_Input = {
  amount?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  stripe_checkout_session_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate stddev on columns */
export type Donations_Stddev_Fields = {
  __typename?: 'donations_stddev_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Donations_Stddev_Pop_Fields = {
  __typename?: 'donations_stddev_pop_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Donations_Stddev_Samp_Fields = {
  __typename?: 'donations_stddev_samp_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "donations" */
export type Donations_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Donations_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Donations_Stream_Cursor_Value_Input = {
  amount?: Maybe<Scalars['numeric']>
  created_at?: Maybe<Scalars['timestamptz']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  stripe_checkout_session_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** aggregate sum on columns */
export type Donations_Sum_Fields = {
  __typename?: 'donations_sum_fields'
  amount?: Maybe<Scalars['numeric']>
  id?: Maybe<Scalars['bigint']>
}

/** update columns of table "donations" */
export enum Donations_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  StripeCheckoutSessionId = 'stripe_checkout_session_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Donations_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Donations_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Donations_Set_Input>
  where: Donations_Bool_Exp
}

/** aggregate var_pop on columns */
export type Donations_Var_Pop_Fields = {
  __typename?: 'donations_var_pop_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Donations_Var_Samp_Fields = {
  __typename?: 'donations_var_samp_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Donations_Variance_Fields = {
  __typename?: 'donations_variance_fields'
  amount?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "files" */
export type Files = {
  __typename?: 'files'
  /** An array relationship */
  avatars: Array<Users>
  /** An aggregate relationship */
  avatars_aggregate: Users_Aggregate
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  key: Scalars['String']
  /** An array relationship */
  messages: Array<Messages>
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate
  name?: Maybe<Scalars['String']>
  /** An array relationship */
  post_attachments: Array<Post_Attachments>
  /** An aggregate relationship */
  post_attachments_aggregate: Post_Attachments_Aggregate
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at: Scalars['timestamp']
  url: Scalars['String']
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
}

/** columns and relationships of "files" */
export type FilesAvatarsArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "files" */
export type FilesAvatars_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "files" */
export type FilesMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "files" */
export type FilesMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "files" */
export type FilesPost_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

/** columns and relationships of "files" */
export type FilesPost_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

/** aggregated selection of "files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate'
  aggregate?: Maybe<Files_Aggregate_Fields>
  nodes: Array<Files>
}

/** aggregate fields of "files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields'
  avg?: Maybe<Files_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Files_Max_Fields>
  min?: Maybe<Files_Min_Fields>
  stddev?: Maybe<Files_Stddev_Fields>
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>
  sum?: Maybe<Files_Sum_Fields>
  var_pop?: Maybe<Files_Var_Pop_Fields>
  var_samp?: Maybe<Files_Var_Samp_Fields>
  variance?: Maybe<Files_Variance_Fields>
}

/** aggregate fields of "files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Files_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "files" */
export type Files_Aggregate_Order_By = {
  avg?: Maybe<Files_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Files_Max_Order_By>
  min?: Maybe<Files_Min_Order_By>
  stddev?: Maybe<Files_Stddev_Order_By>
  stddev_pop?: Maybe<Files_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Files_Stddev_Samp_Order_By>
  sum?: Maybe<Files_Sum_Order_By>
  var_pop?: Maybe<Files_Var_Pop_Order_By>
  var_samp?: Maybe<Files_Var_Samp_Order_By>
  variance?: Maybe<Files_Variance_Order_By>
}

/** input type for inserting array relation for remote table "files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Files_On_Conflict>
}

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "files" */
export type Files_Avg_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: Maybe<Array<Files_Bool_Exp>>
  _not?: Maybe<Files_Bool_Exp>
  _or?: Maybe<Array<Files_Bool_Exp>>
  avatars?: Maybe<Users_Bool_Exp>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  key?: Maybe<String_Comparison_Exp>
  messages?: Maybe<Messages_Bool_Exp>
  name?: Maybe<String_Comparison_Exp>
  post_attachments?: Maybe<Post_Attachments_Bool_Exp>
  size?: Maybe<Bigint_Comparison_Exp>
  type?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  url?: Maybe<String_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "key" */
  FilesKeyKey = 'files_key_key',
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey',
}

/** input type for incrementing numeric columns in table "files" */
export type Files_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  size?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "files" */
export type Files_Insert_Input = {
  avatars?: Maybe<Users_Arr_Rel_Insert_Input>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  key?: Maybe<Scalars['String']>
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>
  name?: Maybe<Scalars['String']>
  post_attachments?: Maybe<Post_Attachments_Arr_Rel_Insert_Input>
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  url?: Maybe<Scalars['String']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  url?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "files" */
export type Files_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  key?: Maybe<Order_By>
  name?: Maybe<Order_By>
  size?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  url?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  url?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "files" */
export type Files_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  key?: Maybe<Order_By>
  name?: Maybe<Order_By>
  size?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  url?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Files>
}

/** input type for inserting object relation for remote table "files" */
export type Files_Obj_Rel_Insert_Input = {
  data: Files_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Files_On_Conflict>
}

/** on_conflict condition type for table "files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint
  update_columns?: Array<Files_Update_Column>
  where?: Maybe<Files_Bool_Exp>
}

/** Ordering options when selecting data from "files". */
export type Files_Order_By = {
  avatars_aggregate?: Maybe<Users_Aggregate_Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  key?: Maybe<Order_By>
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>
  name?: Maybe<Order_By>
  post_attachments_aggregate?: Maybe<Post_Attachments_Aggregate_Order_By>
  size?: Maybe<Order_By>
  type?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  url?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: files */
export type Files_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "files" */
export enum Files_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "files" */
export type Files_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  url?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "files" */
export type Files_Stddev_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "files" */
export type Files_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "files" */
export type Files_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "files" */
export type Files_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Files_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Files_Stream_Cursor_Value_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  key?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  size?: Maybe<Scalars['bigint']>
  type?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  url?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields'
  id?: Maybe<Scalars['bigint']>
  size?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "files" */
export type Files_Sum_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "files" */
export enum Files_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url',
  /** column name */
  UserId = 'user_id',
}

export type Files_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Files_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Files_Set_Input>
  where: Files_Bool_Exp
}

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "files" */
export type Files_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "files" */
export type Files_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields'
  id?: Maybe<Scalars['Float']>
  size?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "files" */
export type Files_Variance_Order_By = {
  id?: Maybe<Order_By>
  size?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

export type Geography_Cast_Exp = {
  geometry?: Maybe<Geometry_Comparison_Exp>
}

/** Boolean expression to compare columns of type "geography". All fields are combined with logical 'AND'. */
export type Geography_Comparison_Exp = {
  _cast?: Maybe<Geography_Cast_Exp>
  _eq?: Maybe<Scalars['geography']>
  _gt?: Maybe<Scalars['geography']>
  _gte?: Maybe<Scalars['geography']>
  _in?: Maybe<Array<Scalars['geography']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['geography']>
  _lte?: Maybe<Scalars['geography']>
  _neq?: Maybe<Scalars['geography']>
  _nin?: Maybe<Array<Scalars['geography']>>
  /** is the column within a given distance from the given geography value */
  _st_d_within?: Maybe<St_D_Within_Geography_Input>
  /** does the column spatially intersect the given geography value */
  _st_intersects?: Maybe<Scalars['geography']>
}

export type Geometry_Cast_Exp = {
  geography?: Maybe<Geography_Comparison_Exp>
}

/** Boolean expression to compare columns of type "geometry". All fields are combined with logical 'AND'. */
export type Geometry_Comparison_Exp = {
  _cast?: Maybe<Geometry_Cast_Exp>
  _eq?: Maybe<Scalars['geometry']>
  _gt?: Maybe<Scalars['geometry']>
  _gte?: Maybe<Scalars['geometry']>
  _in?: Maybe<Array<Scalars['geometry']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['geometry']>
  _lte?: Maybe<Scalars['geometry']>
  _neq?: Maybe<Scalars['geometry']>
  _nin?: Maybe<Array<Scalars['geometry']>>
  /** is the column within a given 3D distance from the given geometry value */
  _st_3d_d_within?: Maybe<St_D_Within_Input>
  /** does the column spatially intersect the given geometry value in 3D */
  _st_3d_intersects?: Maybe<Scalars['geometry']>
  /** does the column contain the given geometry value */
  _st_contains?: Maybe<Scalars['geometry']>
  /** does the column cross the given geometry value */
  _st_crosses?: Maybe<Scalars['geometry']>
  /** is the column within a given distance from the given geometry value */
  _st_d_within?: Maybe<St_D_Within_Input>
  /** is the column equal to given geometry value (directionality is ignored) */
  _st_equals?: Maybe<Scalars['geometry']>
  /** does the column spatially intersect the given geometry value */
  _st_intersects?: Maybe<Scalars['geometry']>
  /** does the column 'spatially overlap' (intersect but not completely contain) the given geometry value */
  _st_overlaps?: Maybe<Scalars['geometry']>
  /** does the column have atleast one point in common with the given geometry value */
  _st_touches?: Maybe<Scalars['geometry']>
  /** is the column contained in the given geometry value */
  _st_within?: Maybe<Scalars['geometry']>
}

export type Get_Postsubcategories_Args = {
  selected_sub_category_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
}

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: Maybe<Scalars['json']>
  _gt?: Maybe<Scalars['json']>
  _gte?: Maybe<Scalars['json']>
  _in?: Maybe<Array<Scalars['json']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['json']>
  _lte?: Maybe<Scalars['json']>
  _neq?: Maybe<Scalars['json']>
  _nin?: Maybe<Array<Scalars['json']>>
}

export type Jsonb_Cast_Exp = {
  String?: Maybe<String_Comparison_Exp>
}

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: Maybe<Jsonb_Cast_Exp>
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>
  _eq?: Maybe<Scalars['jsonb']>
  _gt?: Maybe<Scalars['jsonb']>
  _gte?: Maybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>
  _in?: Maybe<Array<Scalars['jsonb']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['jsonb']>
  _lte?: Maybe<Scalars['jsonb']>
  _neq?: Maybe<Scalars['jsonb']>
  _nin?: Maybe<Array<Scalars['jsonb']>>
}

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages'
  alt_id: Scalars['bpchar']
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  file?: Maybe<Files>
  file_id?: Maybe<Scalars['bigint']>
  id: Scalars['bigint']
  is_file?: Maybe<Scalars['Boolean']>
  is_read?: Maybe<Scalars['Boolean']>
  /** An object relationship */
  room: Rooms
  room_id: Scalars['bigint']
  updated_at?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
}

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate'
  aggregate?: Maybe<Messages_Aggregate_Fields>
  nodes: Array<Messages>
}

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields'
  avg?: Maybe<Messages_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Messages_Max_Fields>
  min?: Maybe<Messages_Min_Fields>
  stddev?: Maybe<Messages_Stddev_Fields>
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>
  sum?: Maybe<Messages_Sum_Fields>
  var_pop?: Maybe<Messages_Var_Pop_Fields>
  var_samp?: Maybe<Messages_Var_Samp_Fields>
  variance?: Maybe<Messages_Variance_Fields>
}

/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Messages_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  avg?: Maybe<Messages_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Messages_Max_Order_By>
  min?: Maybe<Messages_Min_Order_By>
  stddev?: Maybe<Messages_Stddev_Order_By>
  stddev_pop?: Maybe<Messages_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Messages_Stddev_Samp_Order_By>
  sum?: Maybe<Messages_Sum_Order_By>
  var_pop?: Maybe<Messages_Var_Pop_Order_By>
  var_samp?: Maybe<Messages_Var_Samp_Order_By>
  variance?: Maybe<Messages_Variance_Order_By>
}

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Messages_On_Conflict>
}

/** aggregate avg on columns */
export type Messages_Avg_Fields = {
  __typename?: 'messages_avg_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "messages" */
export type Messages_Avg_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: Maybe<Array<Messages_Bool_Exp>>
  _not?: Maybe<Messages_Bool_Exp>
  _or?: Maybe<Array<Messages_Bool_Exp>>
  alt_id?: Maybe<Bpchar_Comparison_Exp>
  content?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  file?: Maybe<Files_Bool_Exp>
  file_id?: Maybe<Bigint_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  is_file?: Maybe<Boolean_Comparison_Exp>
  is_read?: Maybe<Boolean_Comparison_Exp>
  room?: Maybe<Rooms_Bool_Exp>
  room_id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint on columns "alt_id" */
  MessagesAltIdKey = 'messages_alt_id_key',
  /** unique or primary key constraint on columns "id" */
  MessagesPkey = 'messages_pkey',
}

/** input type for incrementing numeric columns in table "messages" */
export type Messages_Inc_Input = {
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  file?: Maybe<Files_Obj_Rel_Insert_Input>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  is_file?: Maybe<Scalars['Boolean']>
  is_read?: Maybe<Scalars['Boolean']>
  room?: Maybe<Rooms_Obj_Rel_Insert_Input>
  room_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields'
  alt_id?: Maybe<Scalars['bpchar']>
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  alt_id?: Maybe<Order_By>
  content?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields'
  alt_id?: Maybe<Scalars['bpchar']>
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  alt_id?: Maybe<Order_By>
  content?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Messages>
}

/** on_conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint
  update_columns?: Array<Messages_Update_Column>
  where?: Maybe<Messages_Bool_Exp>
}

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  alt_id?: Maybe<Order_By>
  content?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  file?: Maybe<Files_Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_file?: Maybe<Order_By>
  is_read?: Maybe<Order_By>
  room?: Maybe<Rooms_Order_By>
  room_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  AltId = 'alt_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsFile = 'is_file',
  /** column name */
  IsRead = 'is_read',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  is_file?: Maybe<Scalars['Boolean']>
  is_read?: Maybe<Scalars['Boolean']>
  room_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type Messages_Stddev_Fields = {
  __typename?: 'messages_stddev_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "messages" */
export type Messages_Stddev_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Messages_Stddev_Pop_Fields = {
  __typename?: 'messages_stddev_pop_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "messages" */
export type Messages_Stddev_Pop_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Messages_Stddev_Samp_Fields = {
  __typename?: 'messages_stddev_samp_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "messages" */
export type Messages_Stddev_Samp_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "messages" */
export type Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Messages_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Messages_Stream_Cursor_Value_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  content?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamptz']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  is_file?: Maybe<Scalars['Boolean']>
  is_read?: Maybe<Scalars['Boolean']>
  room_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type Messages_Sum_Fields = {
  __typename?: 'messages_sum_fields'
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "messages" */
export type Messages_Sum_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  AltId = 'alt_id',
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsFile = 'is_file',
  /** column name */
  IsRead = 'is_read',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

export type Messages_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Messages_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Messages_Set_Input>
  where: Messages_Bool_Exp
}

/** aggregate var_pop on columns */
export type Messages_Var_Pop_Fields = {
  __typename?: 'messages_var_pop_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "messages" */
export type Messages_Var_Pop_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Messages_Var_Samp_Fields = {
  __typename?: 'messages_var_samp_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "messages" */
export type Messages_Var_Samp_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Messages_Variance_Fields = {
  __typename?: 'messages_variance_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "messages" */
export type Messages_Variance_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  MyMutation?: Maybe<MyMutationOutput>
  /** Cancel paypal subscription */
  cancel_paypal_subscription: Scalars['String']
  /** Cancel stripe subscription */
  cancel_stripe_subscription: Scalars['String']
  checkout_or_manage_post_payment: CheckoutOrManagePostPaymentOutput
  /** delete data from the table: "all_posts" */
  delete_all_posts?: Maybe<All_Posts_Mutation_Response>
  /** delete single row from the table: "all_posts" */
  delete_all_posts_by_pk?: Maybe<All_Posts>
  /** delete data from the table: "business_sizes" */
  delete_business_sizes?: Maybe<Business_Sizes_Mutation_Response>
  /** delete single row from the table: "business_sizes" */
  delete_business_sizes_by_pk?: Maybe<Business_Sizes>
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>
  /** delete data from the table: "cities" */
  delete_cities?: Maybe<Cities_Mutation_Response>
  /** delete single row from the table: "cities" */
  delete_cities_by_pk?: Maybe<Cities>
  /** delete data from the table: "donations" */
  delete_donations?: Maybe<Donations_Mutation_Response>
  /** delete single row from the table: "donations" */
  delete_donations_by_pk?: Maybe<Donations>
  /** delete data from the table: "files" */
  delete_files?: Maybe<Files_Mutation_Response>
  /** delete single row from the table: "files" */
  delete_files_by_pk?: Maybe<Files>
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>
  /** delete data from the table: "payment_methods" */
  delete_payment_methods?: Maybe<Payment_Methods_Mutation_Response>
  /** delete single row from the table: "payment_methods" */
  delete_payment_methods_by_pk?: Maybe<Payment_Methods>
  /** delete data from the table: "payments" */
  delete_payments?: Maybe<Payments_Mutation_Response>
  /** delete single row from the table: "payments" */
  delete_payments_by_pk?: Maybe<Payments>
  /** delete data from the table: "possible_values" */
  delete_possible_values?: Maybe<Possible_Values_Mutation_Response>
  /** delete single row from the table: "possible_values" */
  delete_possible_values_by_pk?: Maybe<Possible_Values>
  /** delete data from the table: "post_attachments" */
  delete_post_attachments?: Maybe<Post_Attachments_Mutation_Response>
  /** delete single row from the table: "post_attachments" */
  delete_post_attachments_by_pk?: Maybe<Post_Attachments>
  /** delete data from the table: "post_attributes" */
  delete_post_attributes?: Maybe<Post_Attributes_Mutation_Response>
  /** delete single row from the table: "post_attributes" */
  delete_post_attributes_by_pk?: Maybe<Post_Attributes>
  /** delete data from the table: "posts" */
  delete_posts?: Maybe<Posts_Mutation_Response>
  /** delete single row from the table: "posts" */
  delete_posts_by_pk?: Maybe<Posts>
  /** delete data from the table: "promotional_status" */
  delete_promotional_status?: Maybe<Promotional_Status_Mutation_Response>
  /** delete single row from the table: "promotional_status" */
  delete_promotional_status_by_pk?: Maybe<Promotional_Status>
  /** delete data from the table: "promotions" */
  delete_promotions?: Maybe<Promotions_Mutation_Response>
  /** delete single row from the table: "promotions" */
  delete_promotions_by_pk?: Maybe<Promotions>
  /** delete data from the table: "properties" */
  delete_properties?: Maybe<Properties_Mutation_Response>
  /** delete single row from the table: "properties" */
  delete_properties_by_pk?: Maybe<Properties>
  /** delete data from the table: "rooms" */
  delete_rooms?: Maybe<Rooms_Mutation_Response>
  /** delete single row from the table: "rooms" */
  delete_rooms_by_pk?: Maybe<Rooms>
  /** delete data from the table: "statuses" */
  delete_statuses?: Maybe<Statuses_Mutation_Response>
  /** delete single row from the table: "statuses" */
  delete_statuses_by_pk?: Maybe<Statuses>
  /** delete data from the table: "sub_categories" */
  delete_sub_categories?: Maybe<Sub_Categories_Mutation_Response>
  /** delete single row from the table: "sub_categories" */
  delete_sub_categories_by_pk?: Maybe<Sub_Categories>
  /** delete data from the table: "user_documents" */
  delete_user_documents?: Maybe<User_Documents_Mutation_Response>
  /** delete single row from the table: "user_documents" */
  delete_user_documents_by_pk?: Maybe<User_Documents>
  /** delete data from the table: "user_emails" */
  delete_user_emails?: Maybe<User_Emails_Mutation_Response>
  /** delete single row from the table: "user_emails" */
  delete_user_emails_by_pk?: Maybe<User_Emails>
  /** delete data from the table: "user_notes" */
  delete_user_notes?: Maybe<User_Notes_Mutation_Response>
  /** delete single row from the table: "user_notes" */
  delete_user_notes_by_pk?: Maybe<User_Notes>
  /** delete data from the table: "user_roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>
  /** delete single row from the table: "user_roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>
  /** delete data from the table: "user_rooms" */
  delete_user_rooms?: Maybe<User_Rooms_Mutation_Response>
  /** delete single row from the table: "user_rooms" */
  delete_user_rooms_by_pk?: Maybe<User_Rooms>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** delete data from the table: "warning_messages" */
  delete_warning_messages?: Maybe<Warning_Messages_Mutation_Response>
  /** delete single row from the table: "warning_messages" */
  delete_warning_messages_by_pk?: Maybe<Warning_Messages>
  /** delete data from the table: "zip_codes" */
  delete_zip_codes?: Maybe<Zip_Codes_Mutation_Response>
  /** delete single row from the table: "zip_codes" */
  delete_zip_codes_by_pk?: Maybe<Zip_Codes>
  get_stripe_customer_portal_link: GetStripeCustomerPortalLinkOutput
  /** insert data into the table: "all_posts" */
  insert_all_posts?: Maybe<All_Posts_Mutation_Response>
  /** insert a single row into the table: "all_posts" */
  insert_all_posts_one?: Maybe<All_Posts>
  /** insert data into the table: "business_sizes" */
  insert_business_sizes?: Maybe<Business_Sizes_Mutation_Response>
  /** insert a single row into the table: "business_sizes" */
  insert_business_sizes_one?: Maybe<Business_Sizes>
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>
  /** insert data into the table: "cities" */
  insert_cities?: Maybe<Cities_Mutation_Response>
  /** insert a single row into the table: "cities" */
  insert_cities_one?: Maybe<Cities>
  /** insert data into the table: "donations" */
  insert_donations?: Maybe<Donations_Mutation_Response>
  /** insert a single row into the table: "donations" */
  insert_donations_one?: Maybe<Donations>
  /** insert data into the table: "files" */
  insert_files?: Maybe<Files_Mutation_Response>
  /** insert a single row into the table: "files" */
  insert_files_one?: Maybe<Files>
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>
  /** insert data into the table: "payment_methods" */
  insert_payment_methods?: Maybe<Payment_Methods_Mutation_Response>
  /** insert a single row into the table: "payment_methods" */
  insert_payment_methods_one?: Maybe<Payment_Methods>
  /** insert data into the table: "payments" */
  insert_payments?: Maybe<Payments_Mutation_Response>
  /** insert a single row into the table: "payments" */
  insert_payments_one?: Maybe<Payments>
  /** insert data into the table: "possible_values" */
  insert_possible_values?: Maybe<Possible_Values_Mutation_Response>
  /** insert a single row into the table: "possible_values" */
  insert_possible_values_one?: Maybe<Possible_Values>
  /** insert data into the table: "post_attachments" */
  insert_post_attachments?: Maybe<Post_Attachments_Mutation_Response>
  /** insert a single row into the table: "post_attachments" */
  insert_post_attachments_one?: Maybe<Post_Attachments>
  /** insert data into the table: "post_attributes" */
  insert_post_attributes?: Maybe<Post_Attributes_Mutation_Response>
  /** insert a single row into the table: "post_attributes" */
  insert_post_attributes_one?: Maybe<Post_Attributes>
  /** insert data into the table: "posts" */
  insert_posts?: Maybe<Posts_Mutation_Response>
  /** insert a single row into the table: "posts" */
  insert_posts_one?: Maybe<Posts>
  /** insert data into the table: "promotional_status" */
  insert_promotional_status?: Maybe<Promotional_Status_Mutation_Response>
  /** insert a single row into the table: "promotional_status" */
  insert_promotional_status_one?: Maybe<Promotional_Status>
  /** insert data into the table: "promotions" */
  insert_promotions?: Maybe<Promotions_Mutation_Response>
  /** insert a single row into the table: "promotions" */
  insert_promotions_one?: Maybe<Promotions>
  /** insert data into the table: "properties" */
  insert_properties?: Maybe<Properties_Mutation_Response>
  /** insert a single row into the table: "properties" */
  insert_properties_one?: Maybe<Properties>
  /** insert data into the table: "rooms" */
  insert_rooms?: Maybe<Rooms_Mutation_Response>
  /** insert a single row into the table: "rooms" */
  insert_rooms_one?: Maybe<Rooms>
  /** insert data into the table: "statuses" */
  insert_statuses?: Maybe<Statuses_Mutation_Response>
  /** insert a single row into the table: "statuses" */
  insert_statuses_one?: Maybe<Statuses>
  /** insert data into the table: "sub_categories" */
  insert_sub_categories?: Maybe<Sub_Categories_Mutation_Response>
  /** insert a single row into the table: "sub_categories" */
  insert_sub_categories_one?: Maybe<Sub_Categories>
  /** insert data into the table: "user_documents" */
  insert_user_documents?: Maybe<User_Documents_Mutation_Response>
  /** insert a single row into the table: "user_documents" */
  insert_user_documents_one?: Maybe<User_Documents>
  /** insert data into the table: "user_emails" */
  insert_user_emails?: Maybe<User_Emails_Mutation_Response>
  /** insert a single row into the table: "user_emails" */
  insert_user_emails_one?: Maybe<User_Emails>
  /** insert data into the table: "user_notes" */
  insert_user_notes?: Maybe<User_Notes_Mutation_Response>
  /** insert a single row into the table: "user_notes" */
  insert_user_notes_one?: Maybe<User_Notes>
  /** insert data into the table: "user_roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>
  /** insert a single row into the table: "user_roles" */
  insert_user_roles_one?: Maybe<User_Roles>
  /** insert data into the table: "user_rooms" */
  insert_user_rooms?: Maybe<User_Rooms_Mutation_Response>
  /** insert a single row into the table: "user_rooms" */
  insert_user_rooms_one?: Maybe<User_Rooms>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** insert data into the table: "warning_messages" */
  insert_warning_messages?: Maybe<Warning_Messages_Mutation_Response>
  /** insert a single row into the table: "warning_messages" */
  insert_warning_messages_one?: Maybe<Warning_Messages>
  /** insert data into the table: "zip_codes" */
  insert_zip_codes?: Maybe<Zip_Codes_Mutation_Response>
  /** insert a single row into the table: "zip_codes" */
  insert_zip_codes_one?: Maybe<Zip_Codes>
  /** update data of the table: "all_posts" */
  update_all_posts?: Maybe<All_Posts_Mutation_Response>
  /** update single row of the table: "all_posts" */
  update_all_posts_by_pk?: Maybe<All_Posts>
  /** update multiples rows of table: "all_posts" */
  update_all_posts_many?: Maybe<Array<Maybe<All_Posts_Mutation_Response>>>
  /** update data of the table: "business_sizes" */
  update_business_sizes?: Maybe<Business_Sizes_Mutation_Response>
  /** update single row of the table: "business_sizes" */
  update_business_sizes_by_pk?: Maybe<Business_Sizes>
  /** update multiples rows of table: "business_sizes" */
  update_business_sizes_many?: Maybe<
    Array<Maybe<Business_Sizes_Mutation_Response>>
  >
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>
  /** update multiples rows of table: "categories" */
  update_categories_many?: Maybe<Array<Maybe<Categories_Mutation_Response>>>
  /** update data of the table: "cities" */
  update_cities?: Maybe<Cities_Mutation_Response>
  /** update single row of the table: "cities" */
  update_cities_by_pk?: Maybe<Cities>
  /** update multiples rows of table: "cities" */
  update_cities_many?: Maybe<Array<Maybe<Cities_Mutation_Response>>>
  /** update data of the table: "donations" */
  update_donations?: Maybe<Donations_Mutation_Response>
  /** update single row of the table: "donations" */
  update_donations_by_pk?: Maybe<Donations>
  /** update multiples rows of table: "donations" */
  update_donations_many?: Maybe<Array<Maybe<Donations_Mutation_Response>>>
  /** update data of the table: "files" */
  update_files?: Maybe<Files_Mutation_Response>
  /** update single row of the table: "files" */
  update_files_by_pk?: Maybe<Files>
  /** update multiples rows of table: "files" */
  update_files_many?: Maybe<Array<Maybe<Files_Mutation_Response>>>
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>
  /** update multiples rows of table: "messages" */
  update_messages_many?: Maybe<Array<Maybe<Messages_Mutation_Response>>>
  /** update data of the table: "payment_methods" */
  update_payment_methods?: Maybe<Payment_Methods_Mutation_Response>
  /** update single row of the table: "payment_methods" */
  update_payment_methods_by_pk?: Maybe<Payment_Methods>
  /** update multiples rows of table: "payment_methods" */
  update_payment_methods_many?: Maybe<
    Array<Maybe<Payment_Methods_Mutation_Response>>
  >
  /** update data of the table: "payments" */
  update_payments?: Maybe<Payments_Mutation_Response>
  /** update single row of the table: "payments" */
  update_payments_by_pk?: Maybe<Payments>
  /** update multiples rows of table: "payments" */
  update_payments_many?: Maybe<Array<Maybe<Payments_Mutation_Response>>>
  /** update data of the table: "possible_values" */
  update_possible_values?: Maybe<Possible_Values_Mutation_Response>
  /** update single row of the table: "possible_values" */
  update_possible_values_by_pk?: Maybe<Possible_Values>
  /** update multiples rows of table: "possible_values" */
  update_possible_values_many?: Maybe<
    Array<Maybe<Possible_Values_Mutation_Response>>
  >
  /** update data of the table: "post_attachments" */
  update_post_attachments?: Maybe<Post_Attachments_Mutation_Response>
  /** update single row of the table: "post_attachments" */
  update_post_attachments_by_pk?: Maybe<Post_Attachments>
  /** update multiples rows of table: "post_attachments" */
  update_post_attachments_many?: Maybe<
    Array<Maybe<Post_Attachments_Mutation_Response>>
  >
  /** update data of the table: "post_attributes" */
  update_post_attributes?: Maybe<Post_Attributes_Mutation_Response>
  /** update single row of the table: "post_attributes" */
  update_post_attributes_by_pk?: Maybe<Post_Attributes>
  /** update multiples rows of table: "post_attributes" */
  update_post_attributes_many?: Maybe<
    Array<Maybe<Post_Attributes_Mutation_Response>>
  >
  /** update data of the table: "posts" */
  update_posts?: Maybe<Posts_Mutation_Response>
  /** update single row of the table: "posts" */
  update_posts_by_pk?: Maybe<Posts>
  /** update multiples rows of table: "posts" */
  update_posts_many?: Maybe<Array<Maybe<Posts_Mutation_Response>>>
  /** update data of the table: "promotional_status" */
  update_promotional_status?: Maybe<Promotional_Status_Mutation_Response>
  /** update single row of the table: "promotional_status" */
  update_promotional_status_by_pk?: Maybe<Promotional_Status>
  /** update multiples rows of table: "promotional_status" */
  update_promotional_status_many?: Maybe<
    Array<Maybe<Promotional_Status_Mutation_Response>>
  >
  /** update data of the table: "promotions" */
  update_promotions?: Maybe<Promotions_Mutation_Response>
  /** update single row of the table: "promotions" */
  update_promotions_by_pk?: Maybe<Promotions>
  /** update multiples rows of table: "promotions" */
  update_promotions_many?: Maybe<Array<Maybe<Promotions_Mutation_Response>>>
  /** update data of the table: "properties" */
  update_properties?: Maybe<Properties_Mutation_Response>
  /** update single row of the table: "properties" */
  update_properties_by_pk?: Maybe<Properties>
  /** update multiples rows of table: "properties" */
  update_properties_many?: Maybe<Array<Maybe<Properties_Mutation_Response>>>
  /** update data of the table: "rooms" */
  update_rooms?: Maybe<Rooms_Mutation_Response>
  /** update single row of the table: "rooms" */
  update_rooms_by_pk?: Maybe<Rooms>
  /** update multiples rows of table: "rooms" */
  update_rooms_many?: Maybe<Array<Maybe<Rooms_Mutation_Response>>>
  /** update data of the table: "statuses" */
  update_statuses?: Maybe<Statuses_Mutation_Response>
  /** update single row of the table: "statuses" */
  update_statuses_by_pk?: Maybe<Statuses>
  /** update multiples rows of table: "statuses" */
  update_statuses_many?: Maybe<Array<Maybe<Statuses_Mutation_Response>>>
  /** update data of the table: "sub_categories" */
  update_sub_categories?: Maybe<Sub_Categories_Mutation_Response>
  /** update single row of the table: "sub_categories" */
  update_sub_categories_by_pk?: Maybe<Sub_Categories>
  /** update multiples rows of table: "sub_categories" */
  update_sub_categories_many?: Maybe<
    Array<Maybe<Sub_Categories_Mutation_Response>>
  >
  /** update data of the table: "user_documents" */
  update_user_documents?: Maybe<User_Documents_Mutation_Response>
  /** update single row of the table: "user_documents" */
  update_user_documents_by_pk?: Maybe<User_Documents>
  /** update multiples rows of table: "user_documents" */
  update_user_documents_many?: Maybe<
    Array<Maybe<User_Documents_Mutation_Response>>
  >
  /** update data of the table: "user_emails" */
  update_user_emails?: Maybe<User_Emails_Mutation_Response>
  /** update single row of the table: "user_emails" */
  update_user_emails_by_pk?: Maybe<User_Emails>
  /** update multiples rows of table: "user_emails" */
  update_user_emails_many?: Maybe<Array<Maybe<User_Emails_Mutation_Response>>>
  /** update data of the table: "user_notes" */
  update_user_notes?: Maybe<User_Notes_Mutation_Response>
  /** update single row of the table: "user_notes" */
  update_user_notes_by_pk?: Maybe<User_Notes>
  /** update multiples rows of table: "user_notes" */
  update_user_notes_many?: Maybe<Array<Maybe<User_Notes_Mutation_Response>>>
  /** update data of the table: "user_roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>
  /** update single row of the table: "user_roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>
  /** update multiples rows of table: "user_roles" */
  update_user_roles_many?: Maybe<Array<Maybe<User_Roles_Mutation_Response>>>
  /** update data of the table: "user_rooms" */
  update_user_rooms?: Maybe<User_Rooms_Mutation_Response>
  /** update single row of the table: "user_rooms" */
  update_user_rooms_by_pk?: Maybe<User_Rooms>
  /** update multiples rows of table: "user_rooms" */
  update_user_rooms_many?: Maybe<Array<Maybe<User_Rooms_Mutation_Response>>>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>
  /** update data of the table: "warning_messages" */
  update_warning_messages?: Maybe<Warning_Messages_Mutation_Response>
  /** update single row of the table: "warning_messages" */
  update_warning_messages_by_pk?: Maybe<Warning_Messages>
  /** update multiples rows of table: "warning_messages" */
  update_warning_messages_many?: Maybe<
    Array<Maybe<Warning_Messages_Mutation_Response>>
  >
  /** update data of the table: "zip_codes" */
  update_zip_codes?: Maybe<Zip_Codes_Mutation_Response>
  /** update single row of the table: "zip_codes" */
  update_zip_codes_by_pk?: Maybe<Zip_Codes>
  /** update multiples rows of table: "zip_codes" */
  update_zip_codes_many?: Maybe<Array<Maybe<Zip_Codes_Mutation_Response>>>
}

/** mutation root */
export type Mutation_RootMyMutationArgs = {
  name?: Maybe<Scalars['String']>
}

/** mutation root */
export type Mutation_RootCancel_Paypal_SubscriptionArgs = {
  post_id: Scalars['Int']
  sub_id: Scalars['String']
}

/** mutation root */
export type Mutation_RootCancel_Stripe_SubscriptionArgs = {
  post_id: Scalars['Int']
  sub_id: Scalars['String']
}

/** mutation root */
export type Mutation_RootCheckout_Or_Manage_Post_PaymentArgs = {
  post_id: Scalars['bigint']
  updated_post_is_local: Scalars['Boolean']
}

/** mutation root */
export type Mutation_RootDelete_All_PostsArgs = {
  where: All_Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_All_Posts_By_PkArgs = {
  post_id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Business_SizesArgs = {
  where: Business_Sizes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Business_Sizes_By_PkArgs = {
  value: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_CitiesArgs = {
  where: Cities_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Cities_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_DonationsArgs = {
  where: Donations_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Donations_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_FilesArgs = {
  where: Files_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Files_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Payment_MethodsArgs = {
  where: Payment_Methods_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Payment_Methods_By_PkArgs = {
  name: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_PaymentsArgs = {
  where: Payments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Payments_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Possible_ValuesArgs = {
  where: Possible_Values_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Possible_Values_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Post_AttachmentsArgs = {
  where: Post_Attachments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Post_Attachments_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Post_AttributesArgs = {
  where: Post_Attributes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Post_Attributes_By_PkArgs = {
  post_id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_PostsArgs = {
  where: Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Posts_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Promotional_StatusArgs = {
  where: Promotional_Status_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Promotional_Status_By_PkArgs = {
  id: Scalars['smallint']
}

/** mutation root */
export type Mutation_RootDelete_PromotionsArgs = {
  where: Promotions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Promotions_By_PkArgs = {
  id: Scalars['smallint']
}

/** mutation root */
export type Mutation_RootDelete_PropertiesArgs = {
  where: Properties_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Properties_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_RoomsArgs = {
  where: Rooms_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Rooms_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_StatusesArgs = {
  where: Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Statuses_By_PkArgs = {
  value: Scalars['String']
}

/** mutation root */
export type Mutation_RootDelete_Sub_CategoriesArgs = {
  where: Sub_Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Sub_Categories_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_User_DocumentsArgs = {
  where: User_Documents_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Documents_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_User_EmailsArgs = {
  where: User_Emails_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Emails_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_User_NotesArgs = {
  where: User_Notes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Notes_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  user_id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_User_RoomsArgs = {
  where: User_Rooms_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_Rooms_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootDelete_Warning_MessagesArgs = {
  where: Warning_Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Warning_Messages_By_PkArgs = {
  id: Scalars['smallint']
}

/** mutation root */
export type Mutation_RootDelete_Zip_CodesArgs = {
  where: Zip_Codes_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Zip_Codes_By_PkArgs = {
  id: Scalars['bigint']
}

/** mutation root */
export type Mutation_RootGet_Stripe_Customer_Portal_LinkArgs = {
  path?: Maybe<Scalars['String']>
}

/** mutation root */
export type Mutation_RootInsert_All_PostsArgs = {
  objects: Array<All_Posts_Insert_Input>
  on_conflict?: Maybe<All_Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_All_Posts_OneArgs = {
  object: All_Posts_Insert_Input
  on_conflict?: Maybe<All_Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Business_SizesArgs = {
  objects: Array<Business_Sizes_Insert_Input>
  on_conflict?: Maybe<Business_Sizes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Business_Sizes_OneArgs = {
  object: Business_Sizes_Insert_Input
  on_conflict?: Maybe<Business_Sizes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>
  on_conflict?: Maybe<Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input
  on_conflict?: Maybe<Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_CitiesArgs = {
  objects: Array<Cities_Insert_Input>
  on_conflict?: Maybe<Cities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Cities_OneArgs = {
  object: Cities_Insert_Input
  on_conflict?: Maybe<Cities_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_DonationsArgs = {
  objects: Array<Donations_Insert_Input>
  on_conflict?: Maybe<Donations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Donations_OneArgs = {
  object: Donations_Insert_Input
  on_conflict?: Maybe<Donations_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_FilesArgs = {
  objects: Array<Files_Insert_Input>
  on_conflict?: Maybe<Files_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Files_OneArgs = {
  object: Files_Insert_Input
  on_conflict?: Maybe<Files_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>
  on_conflict?: Maybe<Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input
  on_conflict?: Maybe<Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Payment_MethodsArgs = {
  objects: Array<Payment_Methods_Insert_Input>
  on_conflict?: Maybe<Payment_Methods_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Payment_Methods_OneArgs = {
  object: Payment_Methods_Insert_Input
  on_conflict?: Maybe<Payment_Methods_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PaymentsArgs = {
  objects: Array<Payments_Insert_Input>
  on_conflict?: Maybe<Payments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Payments_OneArgs = {
  object: Payments_Insert_Input
  on_conflict?: Maybe<Payments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Possible_ValuesArgs = {
  objects: Array<Possible_Values_Insert_Input>
  on_conflict?: Maybe<Possible_Values_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Possible_Values_OneArgs = {
  object: Possible_Values_Insert_Input
  on_conflict?: Maybe<Possible_Values_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_AttachmentsArgs = {
  objects: Array<Post_Attachments_Insert_Input>
  on_conflict?: Maybe<Post_Attachments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_Attachments_OneArgs = {
  object: Post_Attachments_Insert_Input
  on_conflict?: Maybe<Post_Attachments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_AttributesArgs = {
  objects: Array<Post_Attributes_Insert_Input>
  on_conflict?: Maybe<Post_Attributes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Post_Attributes_OneArgs = {
  object: Post_Attributes_Insert_Input
  on_conflict?: Maybe<Post_Attributes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PostsArgs = {
  objects: Array<Posts_Insert_Input>
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Posts_OneArgs = {
  object: Posts_Insert_Input
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Promotional_StatusArgs = {
  objects: Array<Promotional_Status_Insert_Input>
  on_conflict?: Maybe<Promotional_Status_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Promotional_Status_OneArgs = {
  object: Promotional_Status_Insert_Input
  on_conflict?: Maybe<Promotional_Status_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PromotionsArgs = {
  objects: Array<Promotions_Insert_Input>
  on_conflict?: Maybe<Promotions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Promotions_OneArgs = {
  object: Promotions_Insert_Input
  on_conflict?: Maybe<Promotions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_PropertiesArgs = {
  objects: Array<Properties_Insert_Input>
  on_conflict?: Maybe<Properties_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Properties_OneArgs = {
  object: Properties_Insert_Input
  on_conflict?: Maybe<Properties_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_RoomsArgs = {
  objects: Array<Rooms_Insert_Input>
  on_conflict?: Maybe<Rooms_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Rooms_OneArgs = {
  object: Rooms_Insert_Input
  on_conflict?: Maybe<Rooms_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_StatusesArgs = {
  objects: Array<Statuses_Insert_Input>
  on_conflict?: Maybe<Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Statuses_OneArgs = {
  object: Statuses_Insert_Input
  on_conflict?: Maybe<Statuses_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Sub_CategoriesArgs = {
  objects: Array<Sub_Categories_Insert_Input>
  on_conflict?: Maybe<Sub_Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Sub_Categories_OneArgs = {
  object: Sub_Categories_Insert_Input
  on_conflict?: Maybe<Sub_Categories_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_DocumentsArgs = {
  objects: Array<User_Documents_Insert_Input>
  on_conflict?: Maybe<User_Documents_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Documents_OneArgs = {
  object: User_Documents_Insert_Input
  on_conflict?: Maybe<User_Documents_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_EmailsArgs = {
  objects: Array<User_Emails_Insert_Input>
  on_conflict?: Maybe<User_Emails_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Emails_OneArgs = {
  object: User_Emails_Insert_Input
  on_conflict?: Maybe<User_Emails_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_NotesArgs = {
  objects: Array<User_Notes_Insert_Input>
  on_conflict?: Maybe<User_Notes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Notes_OneArgs = {
  object: User_Notes_Insert_Input
  on_conflict?: Maybe<User_Notes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>
  on_conflict?: Maybe<User_Roles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input
  on_conflict?: Maybe<User_Roles_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_RoomsArgs = {
  objects: Array<User_Rooms_Insert_Input>
  on_conflict?: Maybe<User_Rooms_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_Rooms_OneArgs = {
  object: User_Rooms_Insert_Input
  on_conflict?: Maybe<User_Rooms_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Warning_MessagesArgs = {
  objects: Array<Warning_Messages_Insert_Input>
  on_conflict?: Maybe<Warning_Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Warning_Messages_OneArgs = {
  object: Warning_Messages_Insert_Input
  on_conflict?: Maybe<Warning_Messages_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Zip_CodesArgs = {
  objects: Array<Zip_Codes_Insert_Input>
  on_conflict?: Maybe<Zip_Codes_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Zip_Codes_OneArgs = {
  object: Zip_Codes_Insert_Input
  on_conflict?: Maybe<Zip_Codes_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_All_PostsArgs = {
  _append?: Maybe<All_Posts_Append_Input>
  _delete_at_path?: Maybe<All_Posts_Delete_At_Path_Input>
  _delete_elem?: Maybe<All_Posts_Delete_Elem_Input>
  _delete_key?: Maybe<All_Posts_Delete_Key_Input>
  _inc?: Maybe<All_Posts_Inc_Input>
  _prepend?: Maybe<All_Posts_Prepend_Input>
  _set?: Maybe<All_Posts_Set_Input>
  where: All_Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_All_Posts_By_PkArgs = {
  _append?: Maybe<All_Posts_Append_Input>
  _delete_at_path?: Maybe<All_Posts_Delete_At_Path_Input>
  _delete_elem?: Maybe<All_Posts_Delete_Elem_Input>
  _delete_key?: Maybe<All_Posts_Delete_Key_Input>
  _inc?: Maybe<All_Posts_Inc_Input>
  _prepend?: Maybe<All_Posts_Prepend_Input>
  _set?: Maybe<All_Posts_Set_Input>
  pk_columns: All_Posts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_All_Posts_ManyArgs = {
  updates: Array<All_Posts_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Business_SizesArgs = {
  _inc?: Maybe<Business_Sizes_Inc_Input>
  _set?: Maybe<Business_Sizes_Set_Input>
  where: Business_Sizes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Business_Sizes_By_PkArgs = {
  _inc?: Maybe<Business_Sizes_Inc_Input>
  _set?: Maybe<Business_Sizes_Set_Input>
  pk_columns: Business_Sizes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Business_Sizes_ManyArgs = {
  updates: Array<Business_Sizes_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: Maybe<Categories_Inc_Input>
  _set?: Maybe<Categories_Set_Input>
  where: Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: Maybe<Categories_Inc_Input>
  _set?: Maybe<Categories_Set_Input>
  pk_columns: Categories_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Categories_ManyArgs = {
  updates: Array<Categories_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_CitiesArgs = {
  _inc?: Maybe<Cities_Inc_Input>
  _set?: Maybe<Cities_Set_Input>
  where: Cities_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Cities_By_PkArgs = {
  _inc?: Maybe<Cities_Inc_Input>
  _set?: Maybe<Cities_Set_Input>
  pk_columns: Cities_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Cities_ManyArgs = {
  updates: Array<Cities_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_DonationsArgs = {
  _inc?: Maybe<Donations_Inc_Input>
  _set?: Maybe<Donations_Set_Input>
  where: Donations_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Donations_By_PkArgs = {
  _inc?: Maybe<Donations_Inc_Input>
  _set?: Maybe<Donations_Set_Input>
  pk_columns: Donations_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Donations_ManyArgs = {
  updates: Array<Donations_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_FilesArgs = {
  _inc?: Maybe<Files_Inc_Input>
  _set?: Maybe<Files_Set_Input>
  where: Files_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Files_By_PkArgs = {
  _inc?: Maybe<Files_Inc_Input>
  _set?: Maybe<Files_Set_Input>
  pk_columns: Files_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Files_ManyArgs = {
  updates: Array<Files_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: Maybe<Messages_Inc_Input>
  _set?: Maybe<Messages_Set_Input>
  where: Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: Maybe<Messages_Inc_Input>
  _set?: Maybe<Messages_Set_Input>
  pk_columns: Messages_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Messages_ManyArgs = {
  updates: Array<Messages_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Payment_MethodsArgs = {
  _set?: Maybe<Payment_Methods_Set_Input>
  where: Payment_Methods_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Payment_Methods_By_PkArgs = {
  _set?: Maybe<Payment_Methods_Set_Input>
  pk_columns: Payment_Methods_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Payment_Methods_ManyArgs = {
  updates: Array<Payment_Methods_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_PaymentsArgs = {
  _inc?: Maybe<Payments_Inc_Input>
  _set?: Maybe<Payments_Set_Input>
  where: Payments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Payments_By_PkArgs = {
  _inc?: Maybe<Payments_Inc_Input>
  _set?: Maybe<Payments_Set_Input>
  pk_columns: Payments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Payments_ManyArgs = {
  updates: Array<Payments_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Possible_ValuesArgs = {
  _inc?: Maybe<Possible_Values_Inc_Input>
  _set?: Maybe<Possible_Values_Set_Input>
  where: Possible_Values_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Possible_Values_By_PkArgs = {
  _inc?: Maybe<Possible_Values_Inc_Input>
  _set?: Maybe<Possible_Values_Set_Input>
  pk_columns: Possible_Values_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Possible_Values_ManyArgs = {
  updates: Array<Possible_Values_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Post_AttachmentsArgs = {
  _inc?: Maybe<Post_Attachments_Inc_Input>
  _set?: Maybe<Post_Attachments_Set_Input>
  where: Post_Attachments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Post_Attachments_By_PkArgs = {
  _inc?: Maybe<Post_Attachments_Inc_Input>
  _set?: Maybe<Post_Attachments_Set_Input>
  pk_columns: Post_Attachments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Post_Attachments_ManyArgs = {
  updates: Array<Post_Attachments_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Post_AttributesArgs = {
  _append?: Maybe<Post_Attributes_Append_Input>
  _delete_at_path?: Maybe<Post_Attributes_Delete_At_Path_Input>
  _delete_elem?: Maybe<Post_Attributes_Delete_Elem_Input>
  _delete_key?: Maybe<Post_Attributes_Delete_Key_Input>
  _inc?: Maybe<Post_Attributes_Inc_Input>
  _prepend?: Maybe<Post_Attributes_Prepend_Input>
  _set?: Maybe<Post_Attributes_Set_Input>
  where: Post_Attributes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Post_Attributes_By_PkArgs = {
  _append?: Maybe<Post_Attributes_Append_Input>
  _delete_at_path?: Maybe<Post_Attributes_Delete_At_Path_Input>
  _delete_elem?: Maybe<Post_Attributes_Delete_Elem_Input>
  _delete_key?: Maybe<Post_Attributes_Delete_Key_Input>
  _inc?: Maybe<Post_Attributes_Inc_Input>
  _prepend?: Maybe<Post_Attributes_Prepend_Input>
  _set?: Maybe<Post_Attributes_Set_Input>
  pk_columns: Post_Attributes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Post_Attributes_ManyArgs = {
  updates: Array<Post_Attributes_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_PostsArgs = {
  _inc?: Maybe<Posts_Inc_Input>
  _set?: Maybe<Posts_Set_Input>
  where: Posts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Posts_By_PkArgs = {
  _inc?: Maybe<Posts_Inc_Input>
  _set?: Maybe<Posts_Set_Input>
  pk_columns: Posts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Posts_ManyArgs = {
  updates: Array<Posts_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Promotional_StatusArgs = {
  _inc?: Maybe<Promotional_Status_Inc_Input>
  _set?: Maybe<Promotional_Status_Set_Input>
  where: Promotional_Status_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Promotional_Status_By_PkArgs = {
  _inc?: Maybe<Promotional_Status_Inc_Input>
  _set?: Maybe<Promotional_Status_Set_Input>
  pk_columns: Promotional_Status_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Promotional_Status_ManyArgs = {
  updates: Array<Promotional_Status_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_PromotionsArgs = {
  _inc?: Maybe<Promotions_Inc_Input>
  _set?: Maybe<Promotions_Set_Input>
  where: Promotions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Promotions_By_PkArgs = {
  _inc?: Maybe<Promotions_Inc_Input>
  _set?: Maybe<Promotions_Set_Input>
  pk_columns: Promotions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Promotions_ManyArgs = {
  updates: Array<Promotions_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_PropertiesArgs = {
  _inc?: Maybe<Properties_Inc_Input>
  _set?: Maybe<Properties_Set_Input>
  where: Properties_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Properties_By_PkArgs = {
  _inc?: Maybe<Properties_Inc_Input>
  _set?: Maybe<Properties_Set_Input>
  pk_columns: Properties_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Properties_ManyArgs = {
  updates: Array<Properties_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_RoomsArgs = {
  _inc?: Maybe<Rooms_Inc_Input>
  _set?: Maybe<Rooms_Set_Input>
  where: Rooms_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Rooms_By_PkArgs = {
  _inc?: Maybe<Rooms_Inc_Input>
  _set?: Maybe<Rooms_Set_Input>
  pk_columns: Rooms_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Rooms_ManyArgs = {
  updates: Array<Rooms_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_StatusesArgs = {
  _set?: Maybe<Statuses_Set_Input>
  where: Statuses_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Statuses_By_PkArgs = {
  _set?: Maybe<Statuses_Set_Input>
  pk_columns: Statuses_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Statuses_ManyArgs = {
  updates: Array<Statuses_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Sub_CategoriesArgs = {
  _inc?: Maybe<Sub_Categories_Inc_Input>
  _set?: Maybe<Sub_Categories_Set_Input>
  where: Sub_Categories_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Sub_Categories_By_PkArgs = {
  _inc?: Maybe<Sub_Categories_Inc_Input>
  _set?: Maybe<Sub_Categories_Set_Input>
  pk_columns: Sub_Categories_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Sub_Categories_ManyArgs = {
  updates: Array<Sub_Categories_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_User_DocumentsArgs = {
  _inc?: Maybe<User_Documents_Inc_Input>
  _set?: Maybe<User_Documents_Set_Input>
  where: User_Documents_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Documents_By_PkArgs = {
  _inc?: Maybe<User_Documents_Inc_Input>
  _set?: Maybe<User_Documents_Set_Input>
  pk_columns: User_Documents_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_Documents_ManyArgs = {
  updates: Array<User_Documents_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_User_EmailsArgs = {
  _inc?: Maybe<User_Emails_Inc_Input>
  _set?: Maybe<User_Emails_Set_Input>
  where: User_Emails_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Emails_By_PkArgs = {
  _inc?: Maybe<User_Emails_Inc_Input>
  _set?: Maybe<User_Emails_Set_Input>
  pk_columns: User_Emails_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_Emails_ManyArgs = {
  updates: Array<User_Emails_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_User_NotesArgs = {
  _inc?: Maybe<User_Notes_Inc_Input>
  _set?: Maybe<User_Notes_Set_Input>
  where: User_Notes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Notes_By_PkArgs = {
  _inc?: Maybe<User_Notes_Inc_Input>
  _set?: Maybe<User_Notes_Set_Input>
  pk_columns: User_Notes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_Notes_ManyArgs = {
  updates: Array<User_Notes_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_User_RolesArgs = {
  _inc?: Maybe<User_Roles_Inc_Input>
  _set?: Maybe<User_Roles_Set_Input>
  where: User_Roles_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _inc?: Maybe<User_Roles_Inc_Input>
  _set?: Maybe<User_Roles_Set_Input>
  pk_columns: User_Roles_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_Roles_ManyArgs = {
  updates: Array<User_Roles_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_User_RoomsArgs = {
  _inc?: Maybe<User_Rooms_Inc_Input>
  _set?: Maybe<User_Rooms_Set_Input>
  where: User_Rooms_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_Rooms_By_PkArgs = {
  _inc?: Maybe<User_Rooms_Inc_Input>
  _set?: Maybe<User_Rooms_Set_Input>
  pk_columns: User_Rooms_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_User_Rooms_ManyArgs = {
  updates: Array<User_Rooms_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>
  _set?: Maybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Warning_MessagesArgs = {
  _inc?: Maybe<Warning_Messages_Inc_Input>
  _set?: Maybe<Warning_Messages_Set_Input>
  where: Warning_Messages_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Warning_Messages_By_PkArgs = {
  _inc?: Maybe<Warning_Messages_Inc_Input>
  _set?: Maybe<Warning_Messages_Set_Input>
  pk_columns: Warning_Messages_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Warning_Messages_ManyArgs = {
  updates: Array<Warning_Messages_Updates>
}

/** mutation root */
export type Mutation_RootUpdate_Zip_CodesArgs = {
  _inc?: Maybe<Zip_Codes_Inc_Input>
  _set?: Maybe<Zip_Codes_Set_Input>
  where: Zip_Codes_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Zip_Codes_By_PkArgs = {
  _inc?: Maybe<Zip_Codes_Inc_Input>
  _set?: Maybe<Zip_Codes_Set_Input>
  pk_columns: Zip_Codes_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Zip_Codes_ManyArgs = {
  updates: Array<Zip_Codes_Updates>
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>
  _gt?: Maybe<Scalars['numeric']>
  _gte?: Maybe<Scalars['numeric']>
  _in?: Maybe<Array<Scalars['numeric']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['numeric']>
  _lte?: Maybe<Scalars['numeric']>
  _neq?: Maybe<Scalars['numeric']>
  _nin?: Maybe<Array<Scalars['numeric']>>
}

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "payment_methods" */
export type Payment_Methods = {
  __typename?: 'payment_methods'
  name: Scalars['String']
  /** An array relationship */
  payments: Array<Payments>
  /** An aggregate relationship */
  payments_aggregate: Payments_Aggregate
}

/** columns and relationships of "payment_methods" */
export type Payment_MethodsPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

/** columns and relationships of "payment_methods" */
export type Payment_MethodsPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

/** aggregated selection of "payment_methods" */
export type Payment_Methods_Aggregate = {
  __typename?: 'payment_methods_aggregate'
  aggregate?: Maybe<Payment_Methods_Aggregate_Fields>
  nodes: Array<Payment_Methods>
}

/** aggregate fields of "payment_methods" */
export type Payment_Methods_Aggregate_Fields = {
  __typename?: 'payment_methods_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Payment_Methods_Max_Fields>
  min?: Maybe<Payment_Methods_Min_Fields>
}

/** aggregate fields of "payment_methods" */
export type Payment_Methods_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payment_Methods_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "payment_methods". All fields are combined with a logical 'AND'. */
export type Payment_Methods_Bool_Exp = {
  _and?: Maybe<Array<Payment_Methods_Bool_Exp>>
  _not?: Maybe<Payment_Methods_Bool_Exp>
  _or?: Maybe<Array<Payment_Methods_Bool_Exp>>
  name?: Maybe<String_Comparison_Exp>
  payments?: Maybe<Payments_Bool_Exp>
}

/** unique or primary key constraints on table "payment_methods" */
export enum Payment_Methods_Constraint {
  /** unique or primary key constraint on columns "name" */
  PaymentMethodsPkey = 'payment_methods_pkey',
}

export enum Payment_Methods_Enum {
  PayPal = 'PayPal',
  Stripe = 'Stripe',
}

/** Boolean expression to compare columns of type "payment_methods_enum". All fields are combined with logical 'AND'. */
export type Payment_Methods_Enum_Comparison_Exp = {
  _eq?: Maybe<Payment_Methods_Enum>
  _in?: Maybe<Array<Payment_Methods_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Payment_Methods_Enum>
  _nin?: Maybe<Array<Payment_Methods_Enum>>
}

/** input type for inserting data into table "payment_methods" */
export type Payment_Methods_Insert_Input = {
  name?: Maybe<Scalars['String']>
  payments?: Maybe<Payments_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Payment_Methods_Max_Fields = {
  __typename?: 'payment_methods_max_fields'
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Payment_Methods_Min_Fields = {
  __typename?: 'payment_methods_min_fields'
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "payment_methods" */
export type Payment_Methods_Mutation_Response = {
  __typename?: 'payment_methods_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Methods>
}

/** input type for inserting object relation for remote table "payment_methods" */
export type Payment_Methods_Obj_Rel_Insert_Input = {
  data: Payment_Methods_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Payment_Methods_On_Conflict>
}

/** on_conflict condition type for table "payment_methods" */
export type Payment_Methods_On_Conflict = {
  constraint: Payment_Methods_Constraint
  update_columns?: Array<Payment_Methods_Update_Column>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

/** Ordering options when selecting data from "payment_methods". */
export type Payment_Methods_Order_By = {
  name?: Maybe<Order_By>
  payments_aggregate?: Maybe<Payments_Aggregate_Order_By>
}

/** primary key columns input for table: payment_methods */
export type Payment_Methods_Pk_Columns_Input = {
  name: Scalars['String']
}

/** select columns of table "payment_methods" */
export enum Payment_Methods_Select_Column {
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "payment_methods" */
export type Payment_Methods_Set_Input = {
  name?: Maybe<Scalars['String']>
}

/** Streaming cursor of the table "payment_methods" */
export type Payment_Methods_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payment_Methods_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Payment_Methods_Stream_Cursor_Value_Input = {
  name?: Maybe<Scalars['String']>
}

/** update columns of table "payment_methods" */
export enum Payment_Methods_Update_Column {
  /** column name */
  Name = 'name',
}

export type Payment_Methods_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Payment_Methods_Set_Input>
  where: Payment_Methods_Bool_Exp
}

/** columns and relationships of "payments" */
export type Payments = {
  __typename?: 'payments'
  active: Scalars['Boolean']
  id: Scalars['bigint']
  last_payment?: Maybe<Scalars['timestamptz']>
  /** An object relationship */
  paymentMethodByPaymentMethod?: Maybe<Payment_Methods>
  payment_method?: Maybe<Payment_Methods_Enum>
  paypal_subscription_id?: Maybe<Scalars['String']>
  /** An object relationship */
  post?: Maybe<Posts>
  post_id?: Maybe<Scalars['bigint']>
  promotion_id?: Maybe<Scalars['smallint']>
  status?: Maybe<Statuses_Enum>
  /** An object relationship */
  statusByStatus?: Maybe<Statuses>
  stripe_subscription_id?: Maybe<Scalars['String']>
}

/** aggregated selection of "payments" */
export type Payments_Aggregate = {
  __typename?: 'payments_aggregate'
  aggregate?: Maybe<Payments_Aggregate_Fields>
  nodes: Array<Payments>
}

/** aggregate fields of "payments" */
export type Payments_Aggregate_Fields = {
  __typename?: 'payments_aggregate_fields'
  avg?: Maybe<Payments_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Payments_Max_Fields>
  min?: Maybe<Payments_Min_Fields>
  stddev?: Maybe<Payments_Stddev_Fields>
  stddev_pop?: Maybe<Payments_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Payments_Stddev_Samp_Fields>
  sum?: Maybe<Payments_Sum_Fields>
  var_pop?: Maybe<Payments_Var_Pop_Fields>
  var_samp?: Maybe<Payments_Var_Samp_Fields>
  variance?: Maybe<Payments_Variance_Fields>
}

/** aggregate fields of "payments" */
export type Payments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Payments_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "payments" */
export type Payments_Aggregate_Order_By = {
  avg?: Maybe<Payments_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Payments_Max_Order_By>
  min?: Maybe<Payments_Min_Order_By>
  stddev?: Maybe<Payments_Stddev_Order_By>
  stddev_pop?: Maybe<Payments_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Payments_Stddev_Samp_Order_By>
  sum?: Maybe<Payments_Sum_Order_By>
  var_pop?: Maybe<Payments_Var_Pop_Order_By>
  var_samp?: Maybe<Payments_Var_Samp_Order_By>
  variance?: Maybe<Payments_Variance_Order_By>
}

/** input type for inserting array relation for remote table "payments" */
export type Payments_Arr_Rel_Insert_Input = {
  data: Array<Payments_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Payments_On_Conflict>
}

/** aggregate avg on columns */
export type Payments_Avg_Fields = {
  __typename?: 'payments_avg_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "payments" */
export type Payments_Avg_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "payments". All fields are combined with a logical 'AND'. */
export type Payments_Bool_Exp = {
  _and?: Maybe<Array<Payments_Bool_Exp>>
  _not?: Maybe<Payments_Bool_Exp>
  _or?: Maybe<Array<Payments_Bool_Exp>>
  active?: Maybe<Boolean_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  last_payment?: Maybe<Timestamptz_Comparison_Exp>
  paymentMethodByPaymentMethod?: Maybe<Payment_Methods_Bool_Exp>
  payment_method?: Maybe<Payment_Methods_Enum_Comparison_Exp>
  paypal_subscription_id?: Maybe<String_Comparison_Exp>
  post?: Maybe<Posts_Bool_Exp>
  post_id?: Maybe<Bigint_Comparison_Exp>
  promotion_id?: Maybe<Smallint_Comparison_Exp>
  status?: Maybe<Statuses_Enum_Comparison_Exp>
  statusByStatus?: Maybe<Statuses_Bool_Exp>
  stripe_subscription_id?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "payments" */
export enum Payments_Constraint {
  /** unique or primary key constraint on columns "post_id" */
  ActiveOnly_1True = 'active_only_1_true',
  /** unique or primary key constraint on columns "id" */
  PaymentsPkey = 'payments_pkey',
  /** unique or primary key constraint on columns "paypal_subscription_id" */
  PaypalSubscriptionId = 'paypal_subscription_id',
  /** unique or primary key constraint on columns "stripe_subscription_id" */
  StripeSubscriptionId = 'stripe_subscription_id',
}

/** input type for incrementing numeric columns in table "payments" */
export type Payments_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  promotion_id?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "payments" */
export type Payments_Insert_Input = {
  active?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['bigint']>
  last_payment?: Maybe<Scalars['timestamptz']>
  paymentMethodByPaymentMethod?: Maybe<Payment_Methods_Obj_Rel_Insert_Input>
  payment_method?: Maybe<Payment_Methods_Enum>
  paypal_subscription_id?: Maybe<Scalars['String']>
  post?: Maybe<Posts_Obj_Rel_Insert_Input>
  post_id?: Maybe<Scalars['bigint']>
  promotion_id?: Maybe<Scalars['smallint']>
  status?: Maybe<Statuses_Enum>
  statusByStatus?: Maybe<Statuses_Obj_Rel_Insert_Input>
  stripe_subscription_id?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Payments_Max_Fields = {
  __typename?: 'payments_max_fields'
  id?: Maybe<Scalars['bigint']>
  last_payment?: Maybe<Scalars['timestamptz']>
  paypal_subscription_id?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['bigint']>
  promotion_id?: Maybe<Scalars['smallint']>
  stripe_subscription_id?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "payments" */
export type Payments_Max_Order_By = {
  id?: Maybe<Order_By>
  last_payment?: Maybe<Order_By>
  paypal_subscription_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  stripe_subscription_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Payments_Min_Fields = {
  __typename?: 'payments_min_fields'
  id?: Maybe<Scalars['bigint']>
  last_payment?: Maybe<Scalars['timestamptz']>
  paypal_subscription_id?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['bigint']>
  promotion_id?: Maybe<Scalars['smallint']>
  stripe_subscription_id?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "payments" */
export type Payments_Min_Order_By = {
  id?: Maybe<Order_By>
  last_payment?: Maybe<Order_By>
  paypal_subscription_id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  stripe_subscription_id?: Maybe<Order_By>
}

/** response of any mutation on the table "payments" */
export type Payments_Mutation_Response = {
  __typename?: 'payments_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Payments>
}

/** on_conflict condition type for table "payments" */
export type Payments_On_Conflict = {
  constraint: Payments_Constraint
  update_columns?: Array<Payments_Update_Column>
  where?: Maybe<Payments_Bool_Exp>
}

/** Ordering options when selecting data from "payments". */
export type Payments_Order_By = {
  active?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_payment?: Maybe<Order_By>
  paymentMethodByPaymentMethod?: Maybe<Payment_Methods_Order_By>
  payment_method?: Maybe<Order_By>
  paypal_subscription_id?: Maybe<Order_By>
  post?: Maybe<Posts_Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
  status?: Maybe<Order_By>
  statusByStatus?: Maybe<Statuses_Order_By>
  stripe_subscription_id?: Maybe<Order_By>
}

/** primary key columns input for table: payments */
export type Payments_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "payments" */
export enum Payments_Select_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Id = 'id',
  /** column name */
  LastPayment = 'last_payment',
  /** column name */
  PaymentMethod = 'payment_method',
  /** column name */
  PaypalSubscriptionId = 'paypal_subscription_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  Status = 'status',
  /** column name */
  StripeSubscriptionId = 'stripe_subscription_id',
}

/** input type for updating data in table "payments" */
export type Payments_Set_Input = {
  active?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['bigint']>
  last_payment?: Maybe<Scalars['timestamptz']>
  payment_method?: Maybe<Payment_Methods_Enum>
  paypal_subscription_id?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['bigint']>
  promotion_id?: Maybe<Scalars['smallint']>
  status?: Maybe<Statuses_Enum>
  stripe_subscription_id?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Payments_Stddev_Fields = {
  __typename?: 'payments_stddev_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "payments" */
export type Payments_Stddev_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Payments_Stddev_Pop_Fields = {
  __typename?: 'payments_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "payments" */
export type Payments_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Payments_Stddev_Samp_Fields = {
  __typename?: 'payments_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "payments" */
export type Payments_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "payments" */
export type Payments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Payments_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Payments_Stream_Cursor_Value_Input = {
  active?: Maybe<Scalars['Boolean']>
  id?: Maybe<Scalars['bigint']>
  last_payment?: Maybe<Scalars['timestamptz']>
  payment_method?: Maybe<Payment_Methods_Enum>
  paypal_subscription_id?: Maybe<Scalars['String']>
  post_id?: Maybe<Scalars['bigint']>
  promotion_id?: Maybe<Scalars['smallint']>
  status?: Maybe<Statuses_Enum>
  stripe_subscription_id?: Maybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Payments_Sum_Fields = {
  __typename?: 'payments_sum_fields'
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  promotion_id?: Maybe<Scalars['smallint']>
}

/** order by sum() on columns of table "payments" */
export type Payments_Sum_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** update columns of table "payments" */
export enum Payments_Update_Column {
  /** column name */
  Active = 'active',
  /** column name */
  Id = 'id',
  /** column name */
  LastPayment = 'last_payment',
  /** column name */
  PaymentMethod = 'payment_method',
  /** column name */
  PaypalSubscriptionId = 'paypal_subscription_id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  PromotionId = 'promotion_id',
  /** column name */
  Status = 'status',
  /** column name */
  StripeSubscriptionId = 'stripe_subscription_id',
}

export type Payments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Payments_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Payments_Set_Input>
  where: Payments_Bool_Exp
}

/** aggregate var_pop on columns */
export type Payments_Var_Pop_Fields = {
  __typename?: 'payments_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "payments" */
export type Payments_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Payments_Var_Samp_Fields = {
  __typename?: 'payments_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "payments" */
export type Payments_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Payments_Variance_Fields = {
  __typename?: 'payments_variance_fields'
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
  promotion_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "payments" */
export type Payments_Variance_Order_By = {
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  promotion_id?: Maybe<Order_By>
}

/** columns and relationships of "possible_values" */
export type Possible_Values = {
  __typename?: 'possible_values'
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  order?: Maybe<Scalars['smallint']>
  /** An object relationship */
  property: Properties
  property_id: Scalars['bigint']
  updated_at: Scalars['timestamp']
  values: Scalars['json']
}

/** columns and relationships of "possible_values" */
export type Possible_ValuesValuesArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "possible_values" */
export type Possible_Values_Aggregate = {
  __typename?: 'possible_values_aggregate'
  aggregate?: Maybe<Possible_Values_Aggregate_Fields>
  nodes: Array<Possible_Values>
}

/** aggregate fields of "possible_values" */
export type Possible_Values_Aggregate_Fields = {
  __typename?: 'possible_values_aggregate_fields'
  avg?: Maybe<Possible_Values_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Possible_Values_Max_Fields>
  min?: Maybe<Possible_Values_Min_Fields>
  stddev?: Maybe<Possible_Values_Stddev_Fields>
  stddev_pop?: Maybe<Possible_Values_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Possible_Values_Stddev_Samp_Fields>
  sum?: Maybe<Possible_Values_Sum_Fields>
  var_pop?: Maybe<Possible_Values_Var_Pop_Fields>
  var_samp?: Maybe<Possible_Values_Var_Samp_Fields>
  variance?: Maybe<Possible_Values_Variance_Fields>
}

/** aggregate fields of "possible_values" */
export type Possible_Values_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Possible_Values_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "possible_values" */
export type Possible_Values_Aggregate_Order_By = {
  avg?: Maybe<Possible_Values_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Possible_Values_Max_Order_By>
  min?: Maybe<Possible_Values_Min_Order_By>
  stddev?: Maybe<Possible_Values_Stddev_Order_By>
  stddev_pop?: Maybe<Possible_Values_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Possible_Values_Stddev_Samp_Order_By>
  sum?: Maybe<Possible_Values_Sum_Order_By>
  var_pop?: Maybe<Possible_Values_Var_Pop_Order_By>
  var_samp?: Maybe<Possible_Values_Var_Samp_Order_By>
  variance?: Maybe<Possible_Values_Variance_Order_By>
}

/** input type for inserting array relation for remote table "possible_values" */
export type Possible_Values_Arr_Rel_Insert_Input = {
  data: Array<Possible_Values_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Possible_Values_On_Conflict>
}

/** aggregate avg on columns */
export type Possible_Values_Avg_Fields = {
  __typename?: 'possible_values_avg_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "possible_values" */
export type Possible_Values_Avg_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "possible_values". All fields are combined with a logical 'AND'. */
export type Possible_Values_Bool_Exp = {
  _and?: Maybe<Array<Possible_Values_Bool_Exp>>
  _not?: Maybe<Possible_Values_Bool_Exp>
  _or?: Maybe<Array<Possible_Values_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  order?: Maybe<Smallint_Comparison_Exp>
  property?: Maybe<Properties_Bool_Exp>
  property_id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  values?: Maybe<Json_Comparison_Exp>
}

/** unique or primary key constraints on table "possible_values" */
export enum Possible_Values_Constraint {
  /** unique or primary key constraint on columns "id" */
  PossibleValuesPkey = 'possible_values_pkey',
}

/** input type for incrementing numeric columns in table "possible_values" */
export type Possible_Values_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  property_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "possible_values" */
export type Possible_Values_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  property?: Maybe<Properties_Obj_Rel_Insert_Input>
  property_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  values?: Maybe<Scalars['json']>
}

/** aggregate max on columns */
export type Possible_Values_Max_Fields = {
  __typename?: 'possible_values_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  property_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "possible_values" */
export type Possible_Values_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Possible_Values_Min_Fields = {
  __typename?: 'possible_values_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  property_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "possible_values" */
export type Possible_Values_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "possible_values" */
export type Possible_Values_Mutation_Response = {
  __typename?: 'possible_values_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Possible_Values>
}

/** on_conflict condition type for table "possible_values" */
export type Possible_Values_On_Conflict = {
  constraint: Possible_Values_Constraint
  update_columns?: Array<Possible_Values_Update_Column>
  where?: Maybe<Possible_Values_Bool_Exp>
}

/** Ordering options when selecting data from "possible_values". */
export type Possible_Values_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property?: Maybe<Properties_Order_By>
  property_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  values?: Maybe<Order_By>
}

/** primary key columns input for table: possible_values */
export type Possible_Values_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "possible_values" */
export enum Possible_Values_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  PropertyId = 'property_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Values = 'values',
}

/** input type for updating data in table "possible_values" */
export type Possible_Values_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  property_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  values?: Maybe<Scalars['json']>
}

/** aggregate stddev on columns */
export type Possible_Values_Stddev_Fields = {
  __typename?: 'possible_values_stddev_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "possible_values" */
export type Possible_Values_Stddev_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Possible_Values_Stddev_Pop_Fields = {
  __typename?: 'possible_values_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "possible_values" */
export type Possible_Values_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Possible_Values_Stddev_Samp_Fields = {
  __typename?: 'possible_values_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "possible_values" */
export type Possible_Values_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "possible_values" */
export type Possible_Values_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Possible_Values_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Possible_Values_Stream_Cursor_Value_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  property_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  values?: Maybe<Scalars['json']>
}

/** aggregate sum on columns */
export type Possible_Values_Sum_Fields = {
  __typename?: 'possible_values_sum_fields'
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  property_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "possible_values" */
export type Possible_Values_Sum_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** update columns of table "possible_values" */
export enum Possible_Values_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  PropertyId = 'property_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Values = 'values',
}

export type Possible_Values_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Possible_Values_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Possible_Values_Set_Input>
  where: Possible_Values_Bool_Exp
}

/** aggregate var_pop on columns */
export type Possible_Values_Var_Pop_Fields = {
  __typename?: 'possible_values_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "possible_values" */
export type Possible_Values_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Possible_Values_Var_Samp_Fields = {
  __typename?: 'possible_values_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "possible_values" */
export type Possible_Values_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Possible_Values_Variance_Fields = {
  __typename?: 'possible_values_variance_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  property_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "possible_values" */
export type Possible_Values_Variance_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  property_id?: Maybe<Order_By>
}

/** columns and relationships of "post_attachments" */
export type Post_Attachments = {
  __typename?: 'post_attachments'
  created_at: Scalars['timestamp']
  /** An object relationship */
  file: Files
  file_id: Scalars['bigint']
  id: Scalars['bigint']
  /** An object relationship */
  post: Posts
  post_id: Scalars['bigint']
  updated_at: Scalars['timestamp']
}

/** aggregated selection of "post_attachments" */
export type Post_Attachments_Aggregate = {
  __typename?: 'post_attachments_aggregate'
  aggregate?: Maybe<Post_Attachments_Aggregate_Fields>
  nodes: Array<Post_Attachments>
}

/** aggregate fields of "post_attachments" */
export type Post_Attachments_Aggregate_Fields = {
  __typename?: 'post_attachments_aggregate_fields'
  avg?: Maybe<Post_Attachments_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Post_Attachments_Max_Fields>
  min?: Maybe<Post_Attachments_Min_Fields>
  stddev?: Maybe<Post_Attachments_Stddev_Fields>
  stddev_pop?: Maybe<Post_Attachments_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Post_Attachments_Stddev_Samp_Fields>
  sum?: Maybe<Post_Attachments_Sum_Fields>
  var_pop?: Maybe<Post_Attachments_Var_Pop_Fields>
  var_samp?: Maybe<Post_Attachments_Var_Samp_Fields>
  variance?: Maybe<Post_Attachments_Variance_Fields>
}

/** aggregate fields of "post_attachments" */
export type Post_Attachments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Attachments_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "post_attachments" */
export type Post_Attachments_Aggregate_Order_By = {
  avg?: Maybe<Post_Attachments_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Post_Attachments_Max_Order_By>
  min?: Maybe<Post_Attachments_Min_Order_By>
  stddev?: Maybe<Post_Attachments_Stddev_Order_By>
  stddev_pop?: Maybe<Post_Attachments_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Post_Attachments_Stddev_Samp_Order_By>
  sum?: Maybe<Post_Attachments_Sum_Order_By>
  var_pop?: Maybe<Post_Attachments_Var_Pop_Order_By>
  var_samp?: Maybe<Post_Attachments_Var_Samp_Order_By>
  variance?: Maybe<Post_Attachments_Variance_Order_By>
}

/** input type for inserting array relation for remote table "post_attachments" */
export type Post_Attachments_Arr_Rel_Insert_Input = {
  data: Array<Post_Attachments_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Post_Attachments_On_Conflict>
}

/** aggregate avg on columns */
export type Post_Attachments_Avg_Fields = {
  __typename?: 'post_attachments_avg_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "post_attachments" */
export type Post_Attachments_Avg_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "post_attachments". All fields are combined with a logical 'AND'. */
export type Post_Attachments_Bool_Exp = {
  _and?: Maybe<Array<Post_Attachments_Bool_Exp>>
  _not?: Maybe<Post_Attachments_Bool_Exp>
  _or?: Maybe<Array<Post_Attachments_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  file?: Maybe<Files_Bool_Exp>
  file_id?: Maybe<Bigint_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  post?: Maybe<Posts_Bool_Exp>
  post_id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "post_attachments" */
export enum Post_Attachments_Constraint {
  /** unique or primary key constraint on columns "id" */
  PostAttachmentsPkey = 'post_attachments_pkey',
}

/** input type for incrementing numeric columns in table "post_attachments" */
export type Post_Attachments_Inc_Input = {
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "post_attachments" */
export type Post_Attachments_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  file?: Maybe<Files_Obj_Rel_Insert_Input>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post?: Maybe<Posts_Obj_Rel_Insert_Input>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Post_Attachments_Max_Fields = {
  __typename?: 'post_attachments_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "post_attachments" */
export type Post_Attachments_Max_Order_By = {
  created_at?: Maybe<Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Post_Attachments_Min_Fields = {
  __typename?: 'post_attachments_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "post_attachments" */
export type Post_Attachments_Min_Order_By = {
  created_at?: Maybe<Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "post_attachments" */
export type Post_Attachments_Mutation_Response = {
  __typename?: 'post_attachments_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Post_Attachments>
}

/** on_conflict condition type for table "post_attachments" */
export type Post_Attachments_On_Conflict = {
  constraint: Post_Attachments_Constraint
  update_columns?: Array<Post_Attachments_Update_Column>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

/** Ordering options when selecting data from "post_attachments". */
export type Post_Attachments_Order_By = {
  created_at?: Maybe<Order_By>
  file?: Maybe<Files_Order_By>
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post?: Maybe<Posts_Order_By>
  post_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: post_attachments */
export type Post_Attachments_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "post_attachments" */
export enum Post_Attachments_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "post_attachments" */
export type Post_Attachments_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Post_Attachments_Stddev_Fields = {
  __typename?: 'post_attachments_stddev_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "post_attachments" */
export type Post_Attachments_Stddev_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Post_Attachments_Stddev_Pop_Fields = {
  __typename?: 'post_attachments_stddev_pop_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "post_attachments" */
export type Post_Attachments_Stddev_Pop_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Post_Attachments_Stddev_Samp_Fields = {
  __typename?: 'post_attachments_stddev_samp_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "post_attachments" */
export type Post_Attachments_Stddev_Samp_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "post_attachments" */
export type Post_Attachments_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Attachments_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Post_Attachments_Stream_Cursor_Value_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate sum on columns */
export type Post_Attachments_Sum_Fields = {
  __typename?: 'post_attachments_sum_fields'
  file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  post_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "post_attachments" */
export type Post_Attachments_Sum_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** update columns of table "post_attachments" */
export enum Post_Attachments_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Post_Attachments_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Post_Attachments_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Post_Attachments_Set_Input>
  where: Post_Attachments_Bool_Exp
}

/** aggregate var_pop on columns */
export type Post_Attachments_Var_Pop_Fields = {
  __typename?: 'post_attachments_var_pop_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "post_attachments" */
export type Post_Attachments_Var_Pop_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Post_Attachments_Var_Samp_Fields = {
  __typename?: 'post_attachments_var_samp_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "post_attachments" */
export type Post_Attachments_Var_Samp_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Post_Attachments_Variance_Fields = {
  __typename?: 'post_attachments_variance_fields'
  file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  post_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "post_attachments" */
export type Post_Attachments_Variance_Order_By = {
  file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  post_id?: Maybe<Order_By>
}

/** columns and relationships of "post_attributes" */
export type Post_Attributes = {
  __typename?: 'post_attributes'
  created_at: Scalars['timestamp']
  possible_value?: Maybe<Scalars['jsonb']>
  /** An object relationship */
  post: Posts
  post_id: Scalars['bigint']
  updated_at: Scalars['timestamp']
  weighted_tsv?: Maybe<Scalars['tsvector']>
}

/** columns and relationships of "post_attributes" */
export type Post_AttributesPossible_ValueArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "post_attributes" */
export type Post_Attributes_Aggregate = {
  __typename?: 'post_attributes_aggregate'
  aggregate?: Maybe<Post_Attributes_Aggregate_Fields>
  nodes: Array<Post_Attributes>
}

/** aggregate fields of "post_attributes" */
export type Post_Attributes_Aggregate_Fields = {
  __typename?: 'post_attributes_aggregate_fields'
  avg?: Maybe<Post_Attributes_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Post_Attributes_Max_Fields>
  min?: Maybe<Post_Attributes_Min_Fields>
  stddev?: Maybe<Post_Attributes_Stddev_Fields>
  stddev_pop?: Maybe<Post_Attributes_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Post_Attributes_Stddev_Samp_Fields>
  sum?: Maybe<Post_Attributes_Sum_Fields>
  var_pop?: Maybe<Post_Attributes_Var_Pop_Fields>
  var_samp?: Maybe<Post_Attributes_Var_Samp_Fields>
  variance?: Maybe<Post_Attributes_Variance_Fields>
}

/** aggregate fields of "post_attributes" */
export type Post_Attributes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Post_Attributes_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Post_Attributes_Append_Input = {
  possible_value?: Maybe<Scalars['jsonb']>
}

/** aggregate avg on columns */
export type Post_Attributes_Avg_Fields = {
  __typename?: 'post_attributes_avg_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "post_attributes". All fields are combined with a logical 'AND'. */
export type Post_Attributes_Bool_Exp = {
  _and?: Maybe<Array<Post_Attributes_Bool_Exp>>
  _not?: Maybe<Post_Attributes_Bool_Exp>
  _or?: Maybe<Array<Post_Attributes_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  possible_value?: Maybe<Jsonb_Comparison_Exp>
  post?: Maybe<Posts_Bool_Exp>
  post_id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  weighted_tsv?: Maybe<Tsvector_Comparison_Exp>
}

/** unique or primary key constraints on table "post_attributes" */
export enum Post_Attributes_Constraint {
  /** unique or primary key constraint on columns "post_id" */
  PostAttributesPkey = 'post_attributes_pkey',
  /** unique or primary key constraint on columns "post_id" */
  PostAttributesPostIdKey = 'post_attributes_post_id_key',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Post_Attributes_Delete_At_Path_Input = {
  possible_value?: Maybe<Array<Scalars['String']>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Post_Attributes_Delete_Elem_Input = {
  possible_value?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Post_Attributes_Delete_Key_Input = {
  possible_value?: Maybe<Scalars['String']>
}

/** input type for incrementing numeric columns in table "post_attributes" */
export type Post_Attributes_Inc_Input = {
  post_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "post_attributes" */
export type Post_Attributes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  possible_value?: Maybe<Scalars['jsonb']>
  post?: Maybe<Posts_Obj_Rel_Insert_Input>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Post_Attributes_Max_Fields = {
  __typename?: 'post_attributes_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate min on columns */
export type Post_Attributes_Min_Fields = {
  __typename?: 'post_attributes_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** response of any mutation on the table "post_attributes" */
export type Post_Attributes_Mutation_Response = {
  __typename?: 'post_attributes_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Post_Attributes>
}

/** input type for inserting object relation for remote table "post_attributes" */
export type Post_Attributes_Obj_Rel_Insert_Input = {
  data: Post_Attributes_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Post_Attributes_On_Conflict>
}

/** on_conflict condition type for table "post_attributes" */
export type Post_Attributes_On_Conflict = {
  constraint: Post_Attributes_Constraint
  update_columns?: Array<Post_Attributes_Update_Column>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

/** Ordering options when selecting data from "post_attributes". */
export type Post_Attributes_Order_By = {
  created_at?: Maybe<Order_By>
  possible_value?: Maybe<Order_By>
  post?: Maybe<Posts_Order_By>
  post_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  weighted_tsv?: Maybe<Order_By>
}

/** primary key columns input for table: post_attributes */
export type Post_Attributes_Pk_Columns_Input = {
  post_id: Scalars['bigint']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Post_Attributes_Prepend_Input = {
  possible_value?: Maybe<Scalars['jsonb']>
}

/** select columns of table "post_attributes" */
export enum Post_Attributes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PossibleValue = 'possible_value',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WeightedTsv = 'weighted_tsv',
}

/** input type for updating data in table "post_attributes" */
export type Post_Attributes_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  possible_value?: Maybe<Scalars['jsonb']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Post_Attributes_Stddev_Fields = {
  __typename?: 'post_attributes_stddev_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Post_Attributes_Stddev_Pop_Fields = {
  __typename?: 'post_attributes_stddev_pop_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Post_Attributes_Stddev_Samp_Fields = {
  __typename?: 'post_attributes_stddev_samp_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "post_attributes" */
export type Post_Attributes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Post_Attributes_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Post_Attributes_Stream_Cursor_Value_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  possible_value?: Maybe<Scalars['jsonb']>
  post_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  weighted_tsv?: Maybe<Scalars['tsvector']>
}

/** aggregate sum on columns */
export type Post_Attributes_Sum_Fields = {
  __typename?: 'post_attributes_sum_fields'
  post_id?: Maybe<Scalars['bigint']>
}

/** update columns of table "post_attributes" */
export enum Post_Attributes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  PossibleValue = 'possible_value',
  /** column name */
  PostId = 'post_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Post_Attributes_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: Maybe<Post_Attributes_Append_Input>
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: Maybe<Post_Attributes_Delete_At_Path_Input>
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: Maybe<Post_Attributes_Delete_Elem_Input>
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: Maybe<Post_Attributes_Delete_Key_Input>
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Post_Attributes_Inc_Input>
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: Maybe<Post_Attributes_Prepend_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Post_Attributes_Set_Input>
  where: Post_Attributes_Bool_Exp
}

/** aggregate var_pop on columns */
export type Post_Attributes_Var_Pop_Fields = {
  __typename?: 'post_attributes_var_pop_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Post_Attributes_Var_Samp_Fields = {
  __typename?: 'post_attributes_var_samp_fields'
  post_id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Post_Attributes_Variance_Fields = {
  __typename?: 'post_attributes_variance_fields'
  post_id?: Maybe<Scalars['Float']>
}

export type Post_List_Args = {
  alt_city_id?: Maybe<Scalars['String']>
  lat?: Maybe<Scalars['numeric']>
  long?: Maybe<Scalars['numeric']>
  search_text?: Maybe<Scalars['String']>
}

/** columns and relationships of "posts" */
export type Posts = {
  __typename?: 'posts'
  alt_id: Scalars['bpchar']
  created_at: Scalars['timestamp']
  detail: Scalars['String']
  id: Scalars['bigint']
  is_local?: Maybe<Scalars['Boolean']>
  /** An array relationship */
  payments: Array<Payments>
  /** An aggregate relationship */
  payments_aggregate: Payments_Aggregate
  paypal_subscription_id?: Maybe<Scalars['String']>
  /** An array relationship */
  post_attachments: Array<Post_Attachments>
  /** An aggregate relationship */
  post_attachments_aggregate: Post_Attachments_Aggregate
  /** An object relationship */
  post_attribute?: Maybe<Post_Attributes>
  posted_by: Scalars['bigint']
  price_description?: Maybe<Scalars['String']>
  price_range?: Maybe<Scalars['_int4']>
  promotion_status?: Maybe<Scalars['smallint']>
  /** An object relationship */
  promotional_status?: Maybe<Promotional_Status>
  status?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  /** An object relationship */
  sub_category: Sub_Categories
  sub_category_id: Scalars['bigint']
  title: Scalars['String']
  updated_at: Scalars['timestamp']
  /** An object relationship */
  user: Users
  weighted_tsv?: Maybe<Scalars['tsvector']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** columns and relationships of "posts" */
export type PostsPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsPost_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

/** columns and relationships of "posts" */
export type PostsPost_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

/** aggregated selection of "posts" */
export type Posts_Aggregate = {
  __typename?: 'posts_aggregate'
  aggregate?: Maybe<Posts_Aggregate_Fields>
  nodes: Array<Posts>
}

/** aggregate fields of "posts" */
export type Posts_Aggregate_Fields = {
  __typename?: 'posts_aggregate_fields'
  avg?: Maybe<Posts_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Posts_Max_Fields>
  min?: Maybe<Posts_Min_Fields>
  stddev?: Maybe<Posts_Stddev_Fields>
  stddev_pop?: Maybe<Posts_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Posts_Stddev_Samp_Fields>
  sum?: Maybe<Posts_Sum_Fields>
  var_pop?: Maybe<Posts_Var_Pop_Fields>
  var_samp?: Maybe<Posts_Var_Samp_Fields>
  variance?: Maybe<Posts_Variance_Fields>
}

/** aggregate fields of "posts" */
export type Posts_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Posts_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "posts" */
export type Posts_Aggregate_Order_By = {
  avg?: Maybe<Posts_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Posts_Max_Order_By>
  min?: Maybe<Posts_Min_Order_By>
  stddev?: Maybe<Posts_Stddev_Order_By>
  stddev_pop?: Maybe<Posts_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Posts_Stddev_Samp_Order_By>
  sum?: Maybe<Posts_Sum_Order_By>
  var_pop?: Maybe<Posts_Var_Pop_Order_By>
  var_samp?: Maybe<Posts_Var_Samp_Order_By>
  variance?: Maybe<Posts_Variance_Order_By>
}

/** input type for inserting array relation for remote table "posts" */
export type Posts_Arr_Rel_Insert_Input = {
  data: Array<Posts_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** aggregate avg on columns */
export type Posts_Avg_Fields = {
  __typename?: 'posts_avg_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "posts" */
export type Posts_Avg_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "posts". All fields are combined with a logical 'AND'. */
export type Posts_Bool_Exp = {
  _and?: Maybe<Array<Posts_Bool_Exp>>
  _not?: Maybe<Posts_Bool_Exp>
  _or?: Maybe<Array<Posts_Bool_Exp>>
  alt_id?: Maybe<Bpchar_Comparison_Exp>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  detail?: Maybe<String_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  is_local?: Maybe<Boolean_Comparison_Exp>
  payments?: Maybe<Payments_Bool_Exp>
  paypal_subscription_id?: Maybe<String_Comparison_Exp>
  post_attachments?: Maybe<Post_Attachments_Bool_Exp>
  post_attribute?: Maybe<Post_Attributes_Bool_Exp>
  posted_by?: Maybe<Bigint_Comparison_Exp>
  price_description?: Maybe<String_Comparison_Exp>
  price_range?: Maybe<_Int4_Comparison_Exp>
  promotion_status?: Maybe<Smallint_Comparison_Exp>
  promotional_status?: Maybe<Promotional_Status_Bool_Exp>
  status?: Maybe<String_Comparison_Exp>
  stripe_customer_id?: Maybe<String_Comparison_Exp>
  sub_category?: Maybe<Sub_Categories_Bool_Exp>
  sub_category_id?: Maybe<Bigint_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  weighted_tsv?: Maybe<Tsvector_Comparison_Exp>
  years_of_experience?: Maybe<Smallint_Comparison_Exp>
}

/** unique or primary key constraints on table "posts" */
export enum Posts_Constraint {
  /** unique or primary key constraint on columns "alt_id" */
  PostsAltIdKey = 'posts_alt_id_key',
  /** unique or primary key constraint on columns "id" */
  PostsPkey = 'posts_pkey',
  /** unique or primary key constraint on columns "sub_category_id", "posted_by" */
  PostsPostedBySubCategoryIdKey = 'posts_posted_by_sub_category_id_key',
}

/** input type for incrementing numeric columns in table "posts" */
export type Posts_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  promotion_status?: Maybe<Scalars['smallint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "posts" */
export type Posts_Insert_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_local?: Maybe<Scalars['Boolean']>
  payments?: Maybe<Payments_Arr_Rel_Insert_Input>
  paypal_subscription_id?: Maybe<Scalars['String']>
  post_attachments?: Maybe<Post_Attachments_Arr_Rel_Insert_Input>
  post_attribute?: Maybe<Post_Attributes_Obj_Rel_Insert_Input>
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  price_range?: Maybe<Scalars['_int4']>
  promotion_status?: Maybe<Scalars['smallint']>
  promotional_status?: Maybe<Promotional_Status_Obj_Rel_Insert_Input>
  status?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  sub_category?: Maybe<Sub_Categories_Obj_Rel_Insert_Input>
  sub_category_id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  weighted_tsv?: Maybe<Scalars['tsvector']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** aggregate max on columns */
export type Posts_Max_Fields = {
  __typename?: 'posts_max_fields'
  alt_id?: Maybe<Scalars['bpchar']>
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  paypal_subscription_id?: Maybe<Scalars['String']>
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  promotion_status?: Maybe<Scalars['smallint']>
  status?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** order by max() on columns of table "posts" */
export type Posts_Max_Order_By = {
  alt_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  detail?: Maybe<Order_By>
  id?: Maybe<Order_By>
  paypal_subscription_id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  price_description?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  status?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Posts_Min_Fields = {
  __typename?: 'posts_min_fields'
  alt_id?: Maybe<Scalars['bpchar']>
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  paypal_subscription_id?: Maybe<Scalars['String']>
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  promotion_status?: Maybe<Scalars['smallint']>
  status?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** order by min() on columns of table "posts" */
export type Posts_Min_Order_By = {
  alt_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  detail?: Maybe<Order_By>
  id?: Maybe<Order_By>
  paypal_subscription_id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  price_description?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  status?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** response of any mutation on the table "posts" */
export type Posts_Mutation_Response = {
  __typename?: 'posts_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Posts>
}

/** input type for inserting object relation for remote table "posts" */
export type Posts_Obj_Rel_Insert_Input = {
  data: Posts_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Posts_On_Conflict>
}

/** on_conflict condition type for table "posts" */
export type Posts_On_Conflict = {
  constraint: Posts_Constraint
  update_columns?: Array<Posts_Update_Column>
  where?: Maybe<Posts_Bool_Exp>
}

/** Ordering options when selecting data from "posts". */
export type Posts_Order_By = {
  alt_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  detail?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_local?: Maybe<Order_By>
  payments_aggregate?: Maybe<Payments_Aggregate_Order_By>
  paypal_subscription_id?: Maybe<Order_By>
  post_attachments_aggregate?: Maybe<Post_Attachments_Aggregate_Order_By>
  post_attribute?: Maybe<Post_Attributes_Order_By>
  posted_by?: Maybe<Order_By>
  price_description?: Maybe<Order_By>
  price_range?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  promotional_status?: Maybe<Promotional_Status_Order_By>
  status?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  sub_category?: Maybe<Sub_Categories_Order_By>
  sub_category_id?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  weighted_tsv?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** primary key columns input for table: posts */
export type Posts_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "posts" */
export enum Posts_Select_Column {
  /** column name */
  AltId = 'alt_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  IsLocal = 'is_local',
  /** column name */
  PaypalSubscriptionId = 'paypal_subscription_id',
  /** column name */
  PostedBy = 'posted_by',
  /** column name */
  PriceDescription = 'price_description',
  /** column name */
  PriceRange = 'price_range',
  /** column name */
  PromotionStatus = 'promotion_status',
  /** column name */
  Status = 'status',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WeightedTsv = 'weighted_tsv',
  /** column name */
  YearsOfExperience = 'years_of_experience',
}

/** input type for updating data in table "posts" */
export type Posts_Set_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_local?: Maybe<Scalars['Boolean']>
  paypal_subscription_id?: Maybe<Scalars['String']>
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  price_range?: Maybe<Scalars['_int4']>
  promotion_status?: Maybe<Scalars['smallint']>
  status?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  weighted_tsv?: Maybe<Scalars['tsvector']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** aggregate stddev on columns */
export type Posts_Stddev_Fields = {
  __typename?: 'posts_stddev_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "posts" */
export type Posts_Stddev_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Posts_Stddev_Pop_Fields = {
  __typename?: 'posts_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "posts" */
export type Posts_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Posts_Stddev_Samp_Fields = {
  __typename?: 'posts_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "posts" */
export type Posts_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** Streaming cursor of the table "posts" */
export type Posts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Posts_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Posts_Stream_Cursor_Value_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  created_at?: Maybe<Scalars['timestamp']>
  detail?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_local?: Maybe<Scalars['Boolean']>
  paypal_subscription_id?: Maybe<Scalars['String']>
  posted_by?: Maybe<Scalars['bigint']>
  price_description?: Maybe<Scalars['String']>
  price_range?: Maybe<Scalars['_int4']>
  promotion_status?: Maybe<Scalars['smallint']>
  status?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  sub_category_id?: Maybe<Scalars['bigint']>
  title?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  weighted_tsv?: Maybe<Scalars['tsvector']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** aggregate sum on columns */
export type Posts_Sum_Fields = {
  __typename?: 'posts_sum_fields'
  id?: Maybe<Scalars['bigint']>
  posted_by?: Maybe<Scalars['bigint']>
  promotion_status?: Maybe<Scalars['smallint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  years_of_experience?: Maybe<Scalars['smallint']>
}

/** order by sum() on columns of table "posts" */
export type Posts_Sum_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** update columns of table "posts" */
export enum Posts_Update_Column {
  /** column name */
  AltId = 'alt_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Detail = 'detail',
  /** column name */
  Id = 'id',
  /** column name */
  IsLocal = 'is_local',
  /** column name */
  PaypalSubscriptionId = 'paypal_subscription_id',
  /** column name */
  PostedBy = 'posted_by',
  /** column name */
  PriceDescription = 'price_description',
  /** column name */
  PriceRange = 'price_range',
  /** column name */
  PromotionStatus = 'promotion_status',
  /** column name */
  Status = 'status',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  WeightedTsv = 'weighted_tsv',
  /** column name */
  YearsOfExperience = 'years_of_experience',
}

export type Posts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Posts_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Posts_Set_Input>
  where: Posts_Bool_Exp
}

/** aggregate var_pop on columns */
export type Posts_Var_Pop_Fields = {
  __typename?: 'posts_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "posts" */
export type Posts_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Posts_Var_Samp_Fields = {
  __typename?: 'posts_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "posts" */
export type Posts_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Posts_Variance_Fields = {
  __typename?: 'posts_variance_fields'
  id?: Maybe<Scalars['Float']>
  posted_by?: Maybe<Scalars['Float']>
  promotion_status?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
  years_of_experience?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "posts" */
export type Posts_Variance_Order_By = {
  id?: Maybe<Order_By>
  posted_by?: Maybe<Order_By>
  promotion_status?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  years_of_experience?: Maybe<Order_By>
}

/** columns and relationships of "promotional_status" */
export type Promotional_Status = {
  __typename?: 'promotional_status'
  id: Scalars['smallint']
  name: Scalars['String']
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
}

/** columns and relationships of "promotional_status" */
export type Promotional_StatusPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "promotional_status" */
export type Promotional_StatusPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** aggregated selection of "promotional_status" */
export type Promotional_Status_Aggregate = {
  __typename?: 'promotional_status_aggregate'
  aggregate?: Maybe<Promotional_Status_Aggregate_Fields>
  nodes: Array<Promotional_Status>
}

/** aggregate fields of "promotional_status" */
export type Promotional_Status_Aggregate_Fields = {
  __typename?: 'promotional_status_aggregate_fields'
  avg?: Maybe<Promotional_Status_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Promotional_Status_Max_Fields>
  min?: Maybe<Promotional_Status_Min_Fields>
  stddev?: Maybe<Promotional_Status_Stddev_Fields>
  stddev_pop?: Maybe<Promotional_Status_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Promotional_Status_Stddev_Samp_Fields>
  sum?: Maybe<Promotional_Status_Sum_Fields>
  var_pop?: Maybe<Promotional_Status_Var_Pop_Fields>
  var_samp?: Maybe<Promotional_Status_Var_Samp_Fields>
  variance?: Maybe<Promotional_Status_Variance_Fields>
}

/** aggregate fields of "promotional_status" */
export type Promotional_Status_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Promotional_Status_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Promotional_Status_Avg_Fields = {
  __typename?: 'promotional_status_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "promotional_status". All fields are combined with a logical 'AND'. */
export type Promotional_Status_Bool_Exp = {
  _and?: Maybe<Array<Promotional_Status_Bool_Exp>>
  _not?: Maybe<Promotional_Status_Bool_Exp>
  _or?: Maybe<Array<Promotional_Status_Bool_Exp>>
  id?: Maybe<Smallint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  posts?: Maybe<Posts_Bool_Exp>
}

/** unique or primary key constraints on table "promotional_status" */
export enum Promotional_Status_Constraint {
  /** unique or primary key constraint on columns "id" */
  PromotionalStatusPkey = 'promotional_status_pkey',
}

/** input type for incrementing numeric columns in table "promotional_status" */
export type Promotional_Status_Inc_Input = {
  id?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "promotional_status" */
export type Promotional_Status_Insert_Input = {
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Promotional_Status_Max_Fields = {
  __typename?: 'promotional_status_max_fields'
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Promotional_Status_Min_Fields = {
  __typename?: 'promotional_status_min_fields'
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "promotional_status" */
export type Promotional_Status_Mutation_Response = {
  __typename?: 'promotional_status_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Promotional_Status>
}

/** input type for inserting object relation for remote table "promotional_status" */
export type Promotional_Status_Obj_Rel_Insert_Input = {
  data: Promotional_Status_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Promotional_Status_On_Conflict>
}

/** on_conflict condition type for table "promotional_status" */
export type Promotional_Status_On_Conflict = {
  constraint: Promotional_Status_Constraint
  update_columns?: Array<Promotional_Status_Update_Column>
  where?: Maybe<Promotional_Status_Bool_Exp>
}

/** Ordering options when selecting data from "promotional_status". */
export type Promotional_Status_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>
}

/** primary key columns input for table: promotional_status */
export type Promotional_Status_Pk_Columns_Input = {
  id: Scalars['smallint']
}

/** select columns of table "promotional_status" */
export enum Promotional_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "promotional_status" */
export type Promotional_Status_Set_Input = {
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Promotional_Status_Stddev_Fields = {
  __typename?: 'promotional_status_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Promotional_Status_Stddev_Pop_Fields = {
  __typename?: 'promotional_status_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Promotional_Status_Stddev_Samp_Fields = {
  __typename?: 'promotional_status_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "promotional_status" */
export type Promotional_Status_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Promotional_Status_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Promotional_Status_Stream_Cursor_Value_Input = {
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Promotional_Status_Sum_Fields = {
  __typename?: 'promotional_status_sum_fields'
  id?: Maybe<Scalars['smallint']>
}

/** update columns of table "promotional_status" */
export enum Promotional_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

export type Promotional_Status_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Promotional_Status_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Promotional_Status_Set_Input>
  where: Promotional_Status_Bool_Exp
}

/** aggregate var_pop on columns */
export type Promotional_Status_Var_Pop_Fields = {
  __typename?: 'promotional_status_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Promotional_Status_Var_Samp_Fields = {
  __typename?: 'promotional_status_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Promotional_Status_Variance_Fields = {
  __typename?: 'promotional_status_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "promotions" */
export type Promotions = {
  __typename?: 'promotions'
  /** An object relationship */
  businessSizeByBusinessSize: Business_Sizes
  business_size: Scalars['String']
  id: Scalars['smallint']
  name: Scalars['String']
  price: Scalars['numeric']
  status?: Maybe<Scalars['smallint']>
  type: Scalars['String']
  /** An object relationship */
  warning_message: Warning_Messages
  warning_message_id: Scalars['smallint']
}

/** aggregated selection of "promotions" */
export type Promotions_Aggregate = {
  __typename?: 'promotions_aggregate'
  aggregate?: Maybe<Promotions_Aggregate_Fields>
  nodes: Array<Promotions>
}

/** aggregate fields of "promotions" */
export type Promotions_Aggregate_Fields = {
  __typename?: 'promotions_aggregate_fields'
  avg?: Maybe<Promotions_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Promotions_Max_Fields>
  min?: Maybe<Promotions_Min_Fields>
  stddev?: Maybe<Promotions_Stddev_Fields>
  stddev_pop?: Maybe<Promotions_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Promotions_Stddev_Samp_Fields>
  sum?: Maybe<Promotions_Sum_Fields>
  var_pop?: Maybe<Promotions_Var_Pop_Fields>
  var_samp?: Maybe<Promotions_Var_Samp_Fields>
  variance?: Maybe<Promotions_Variance_Fields>
}

/** aggregate fields of "promotions" */
export type Promotions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Promotions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "promotions" */
export type Promotions_Aggregate_Order_By = {
  avg?: Maybe<Promotions_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Promotions_Max_Order_By>
  min?: Maybe<Promotions_Min_Order_By>
  stddev?: Maybe<Promotions_Stddev_Order_By>
  stddev_pop?: Maybe<Promotions_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Promotions_Stddev_Samp_Order_By>
  sum?: Maybe<Promotions_Sum_Order_By>
  var_pop?: Maybe<Promotions_Var_Pop_Order_By>
  var_samp?: Maybe<Promotions_Var_Samp_Order_By>
  variance?: Maybe<Promotions_Variance_Order_By>
}

/** input type for inserting array relation for remote table "promotions" */
export type Promotions_Arr_Rel_Insert_Input = {
  data: Array<Promotions_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Promotions_On_Conflict>
}

/** aggregate avg on columns */
export type Promotions_Avg_Fields = {
  __typename?: 'promotions_avg_fields'
  id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  warning_message_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "promotions" */
export type Promotions_Avg_Order_By = {
  id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "promotions". All fields are combined with a logical 'AND'. */
export type Promotions_Bool_Exp = {
  _and?: Maybe<Array<Promotions_Bool_Exp>>
  _not?: Maybe<Promotions_Bool_Exp>
  _or?: Maybe<Array<Promotions_Bool_Exp>>
  businessSizeByBusinessSize?: Maybe<Business_Sizes_Bool_Exp>
  business_size?: Maybe<String_Comparison_Exp>
  id?: Maybe<Smallint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  price?: Maybe<Numeric_Comparison_Exp>
  status?: Maybe<Smallint_Comparison_Exp>
  type?: Maybe<String_Comparison_Exp>
  warning_message?: Maybe<Warning_Messages_Bool_Exp>
  warning_message_id?: Maybe<Smallint_Comparison_Exp>
}

/** unique or primary key constraints on table "promotions" */
export enum Promotions_Constraint {
  /** unique or primary key constraint on columns "id" */
  PromotionsPkey = 'promotions_pkey',
}

/** input type for incrementing numeric columns in table "promotions" */
export type Promotions_Inc_Input = {
  id?: Maybe<Scalars['smallint']>
  price?: Maybe<Scalars['numeric']>
  status?: Maybe<Scalars['smallint']>
  warning_message_id?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "promotions" */
export type Promotions_Insert_Input = {
  businessSizeByBusinessSize?: Maybe<Business_Sizes_Obj_Rel_Insert_Input>
  business_size?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
  status?: Maybe<Scalars['smallint']>
  type?: Maybe<Scalars['String']>
  warning_message?: Maybe<Warning_Messages_Obj_Rel_Insert_Input>
  warning_message_id?: Maybe<Scalars['smallint']>
}

/** aggregate max on columns */
export type Promotions_Max_Fields = {
  __typename?: 'promotions_max_fields'
  business_size?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
  status?: Maybe<Scalars['smallint']>
  type?: Maybe<Scalars['String']>
  warning_message_id?: Maybe<Scalars['smallint']>
}

/** order by max() on columns of table "promotions" */
export type Promotions_Max_Order_By = {
  business_size?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  type?: Maybe<Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Promotions_Min_Fields = {
  __typename?: 'promotions_min_fields'
  business_size?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
  status?: Maybe<Scalars['smallint']>
  type?: Maybe<Scalars['String']>
  warning_message_id?: Maybe<Scalars['smallint']>
}

/** order by min() on columns of table "promotions" */
export type Promotions_Min_Order_By = {
  business_size?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  type?: Maybe<Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** response of any mutation on the table "promotions" */
export type Promotions_Mutation_Response = {
  __typename?: 'promotions_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Promotions>
}

/** on_conflict condition type for table "promotions" */
export type Promotions_On_Conflict = {
  constraint: Promotions_Constraint
  update_columns?: Array<Promotions_Update_Column>
  where?: Maybe<Promotions_Bool_Exp>
}

/** Ordering options when selecting data from "promotions". */
export type Promotions_Order_By = {
  businessSizeByBusinessSize?: Maybe<Business_Sizes_Order_By>
  business_size?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  type?: Maybe<Order_By>
  warning_message?: Maybe<Warning_Messages_Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** primary key columns input for table: promotions */
export type Promotions_Pk_Columns_Input = {
  id: Scalars['smallint']
}

/** select columns of table "promotions" */
export enum Promotions_Select_Column {
  /** column name */
  BusinessSize = 'business_size',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  WarningMessageId = 'warning_message_id',
}

/** input type for updating data in table "promotions" */
export type Promotions_Set_Input = {
  business_size?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
  status?: Maybe<Scalars['smallint']>
  type?: Maybe<Scalars['String']>
  warning_message_id?: Maybe<Scalars['smallint']>
}

/** aggregate stddev on columns */
export type Promotions_Stddev_Fields = {
  __typename?: 'promotions_stddev_fields'
  id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  warning_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "promotions" */
export type Promotions_Stddev_Order_By = {
  id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Promotions_Stddev_Pop_Fields = {
  __typename?: 'promotions_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  warning_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "promotions" */
export type Promotions_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Promotions_Stddev_Samp_Fields = {
  __typename?: 'promotions_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  warning_message_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "promotions" */
export type Promotions_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "promotions" */
export type Promotions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Promotions_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Promotions_Stream_Cursor_Value_Input = {
  business_size?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  price?: Maybe<Scalars['numeric']>
  status?: Maybe<Scalars['smallint']>
  type?: Maybe<Scalars['String']>
  warning_message_id?: Maybe<Scalars['smallint']>
}

/** aggregate sum on columns */
export type Promotions_Sum_Fields = {
  __typename?: 'promotions_sum_fields'
  id?: Maybe<Scalars['smallint']>
  price?: Maybe<Scalars['numeric']>
  status?: Maybe<Scalars['smallint']>
  warning_message_id?: Maybe<Scalars['smallint']>
}

/** order by sum() on columns of table "promotions" */
export type Promotions_Sum_Order_By = {
  id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** update columns of table "promotions" */
export enum Promotions_Update_Column {
  /** column name */
  BusinessSize = 'business_size',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Status = 'status',
  /** column name */
  Type = 'type',
  /** column name */
  WarningMessageId = 'warning_message_id',
}

export type Promotions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Promotions_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Promotions_Set_Input>
  where: Promotions_Bool_Exp
}

/** aggregate var_pop on columns */
export type Promotions_Var_Pop_Fields = {
  __typename?: 'promotions_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  warning_message_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "promotions" */
export type Promotions_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Promotions_Var_Samp_Fields = {
  __typename?: 'promotions_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  warning_message_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "promotions" */
export type Promotions_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Promotions_Variance_Fields = {
  __typename?: 'promotions_variance_fields'
  id?: Maybe<Scalars['Float']>
  price?: Maybe<Scalars['Float']>
  status?: Maybe<Scalars['Float']>
  warning_message_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "promotions" */
export type Promotions_Variance_Order_By = {
  id?: Maybe<Order_By>
  price?: Maybe<Order_By>
  status?: Maybe<Order_By>
  warning_message_id?: Maybe<Order_By>
}

/** columns and relationships of "properties" */
export type Properties = {
  __typename?: 'properties'
  created_at: Scalars['timestamp']
  display_name: Scalars['String']
  id: Scalars['bigint']
  is_mandatory: Scalars['Boolean']
  name: Scalars['String']
  order: Scalars['smallint']
  /** An array relationship */
  possible_values: Array<Possible_Values>
  /** An aggregate relationship */
  possible_values_aggregate: Possible_Values_Aggregate
  /** An object relationship */
  sub_category: Sub_Categories
  sub_category_id: Scalars['bigint']
  updated_at: Scalars['timestamp']
}

/** columns and relationships of "properties" */
export type PropertiesPossible_ValuesArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

/** columns and relationships of "properties" */
export type PropertiesPossible_Values_AggregateArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

/** aggregated selection of "properties" */
export type Properties_Aggregate = {
  __typename?: 'properties_aggregate'
  aggregate?: Maybe<Properties_Aggregate_Fields>
  nodes: Array<Properties>
}

/** aggregate fields of "properties" */
export type Properties_Aggregate_Fields = {
  __typename?: 'properties_aggregate_fields'
  avg?: Maybe<Properties_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Properties_Max_Fields>
  min?: Maybe<Properties_Min_Fields>
  stddev?: Maybe<Properties_Stddev_Fields>
  stddev_pop?: Maybe<Properties_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Properties_Stddev_Samp_Fields>
  sum?: Maybe<Properties_Sum_Fields>
  var_pop?: Maybe<Properties_Var_Pop_Fields>
  var_samp?: Maybe<Properties_Var_Samp_Fields>
  variance?: Maybe<Properties_Variance_Fields>
}

/** aggregate fields of "properties" */
export type Properties_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Properties_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "properties" */
export type Properties_Aggregate_Order_By = {
  avg?: Maybe<Properties_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Properties_Max_Order_By>
  min?: Maybe<Properties_Min_Order_By>
  stddev?: Maybe<Properties_Stddev_Order_By>
  stddev_pop?: Maybe<Properties_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Properties_Stddev_Samp_Order_By>
  sum?: Maybe<Properties_Sum_Order_By>
  var_pop?: Maybe<Properties_Var_Pop_Order_By>
  var_samp?: Maybe<Properties_Var_Samp_Order_By>
  variance?: Maybe<Properties_Variance_Order_By>
}

/** input type for inserting array relation for remote table "properties" */
export type Properties_Arr_Rel_Insert_Input = {
  data: Array<Properties_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Properties_On_Conflict>
}

/** aggregate avg on columns */
export type Properties_Avg_Fields = {
  __typename?: 'properties_avg_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "properties" */
export type Properties_Avg_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "properties". All fields are combined with a logical 'AND'. */
export type Properties_Bool_Exp = {
  _and?: Maybe<Array<Properties_Bool_Exp>>
  _not?: Maybe<Properties_Bool_Exp>
  _or?: Maybe<Array<Properties_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  display_name?: Maybe<String_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  is_mandatory?: Maybe<Boolean_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Smallint_Comparison_Exp>
  possible_values?: Maybe<Possible_Values_Bool_Exp>
  sub_category?: Maybe<Sub_Categories_Bool_Exp>
  sub_category_id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "properties" */
export enum Properties_Constraint {
  /** unique or primary key constraint on columns "id" */
  PropertiesPkey = 'properties_pkey',
}

/** input type for incrementing numeric columns in table "properties" */
export type Properties_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  sub_category_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "properties" */
export type Properties_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  display_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_mandatory?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  possible_values?: Maybe<Possible_Values_Arr_Rel_Insert_Input>
  sub_category?: Maybe<Sub_Categories_Obj_Rel_Insert_Input>
  sub_category_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Properties_Max_Fields = {
  __typename?: 'properties_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  display_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "properties" */
export type Properties_Max_Order_By = {
  created_at?: Maybe<Order_By>
  display_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Properties_Min_Fields = {
  __typename?: 'properties_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  display_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "properties" */
export type Properties_Min_Order_By = {
  created_at?: Maybe<Order_By>
  display_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "properties" */
export type Properties_Mutation_Response = {
  __typename?: 'properties_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Properties>
}

/** input type for inserting object relation for remote table "properties" */
export type Properties_Obj_Rel_Insert_Input = {
  data: Properties_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Properties_On_Conflict>
}

/** on_conflict condition type for table "properties" */
export type Properties_On_Conflict = {
  constraint: Properties_Constraint
  update_columns?: Array<Properties_Update_Column>
  where?: Maybe<Properties_Bool_Exp>
}

/** Ordering options when selecting data from "properties". */
export type Properties_Order_By = {
  created_at?: Maybe<Order_By>
  display_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_mandatory?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  possible_values_aggregate?: Maybe<Possible_Values_Aggregate_Order_By>
  sub_category?: Maybe<Sub_Categories_Order_By>
  sub_category_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: properties */
export type Properties_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "properties" */
export enum Properties_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsMandatory = 'is_mandatory',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "properties" */
export type Properties_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  display_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_mandatory?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Properties_Stddev_Fields = {
  __typename?: 'properties_stddev_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "properties" */
export type Properties_Stddev_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Properties_Stddev_Pop_Fields = {
  __typename?: 'properties_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "properties" */
export type Properties_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Properties_Stddev_Samp_Fields = {
  __typename?: 'properties_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "properties" */
export type Properties_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "properties" */
export type Properties_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Properties_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Properties_Stream_Cursor_Value_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  display_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_mandatory?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  sub_category_id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate sum on columns */
export type Properties_Sum_Fields = {
  __typename?: 'properties_sum_fields'
  id?: Maybe<Scalars['bigint']>
  order?: Maybe<Scalars['smallint']>
  sub_category_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "properties" */
export type Properties_Sum_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** update columns of table "properties" */
export enum Properties_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsMandatory = 'is_mandatory',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  SubCategoryId = 'sub_category_id',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Properties_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Properties_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Properties_Set_Input>
  where: Properties_Bool_Exp
}

/** aggregate var_pop on columns */
export type Properties_Var_Pop_Fields = {
  __typename?: 'properties_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "properties" */
export type Properties_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Properties_Var_Samp_Fields = {
  __typename?: 'properties_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "properties" */
export type Properties_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Properties_Variance_Fields = {
  __typename?: 'properties_variance_fields'
  id?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
  sub_category_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "properties" */
export type Properties_Variance_Order_By = {
  id?: Maybe<Order_By>
  order?: Maybe<Order_By>
  sub_category_id?: Maybe<Order_By>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "all_posts" */
  all_posts: Array<All_Posts>
  /** fetch aggregated fields from the table: "all_posts" */
  all_posts_aggregate: All_Posts_Aggregate
  /** fetch data from the table: "all_posts" using primary key columns */
  all_posts_by_pk?: Maybe<All_Posts>
  /** fetch data from the table: "business_sizes" */
  business_sizes: Array<Business_Sizes>
  /** fetch aggregated fields from the table: "business_sizes" */
  business_sizes_aggregate: Business_Sizes_Aggregate
  /** fetch data from the table: "business_sizes" using primary key columns */
  business_sizes_by_pk?: Maybe<Business_Sizes>
  /** fetch data from the table: "categories" */
  categories: Array<Categories>
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>
  /** execute function "category_finder" which returns "category_list" */
  category_finder: Array<Category_List>
  /** execute function "category_finder" and query aggregates on result of table type "category_list" */
  category_finder_aggregate: Category_List_Aggregate
  /** fetch data from the table: "category_list" */
  category_list: Array<Category_List>
  /** fetch aggregated fields from the table: "category_list" */
  category_list_aggregate: Category_List_Aggregate
  /** fetch data from the table: "cities" */
  cities: Array<Cities>
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>
  /** fetch data from the table: "donations" */
  donations: Array<Donations>
  /** fetch aggregated fields from the table: "donations" */
  donations_aggregate: Donations_Aggregate
  /** fetch data from the table: "donations" using primary key columns */
  donations_by_pk?: Maybe<Donations>
  /** An array relationship */
  files: Array<Files>
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate
  /** fetch data from the table: "files" using primary key columns */
  files_by_pk?: Maybe<Files>
  /** execute function "get_postsubcategories" which returns "posts" */
  get_postsubcategories: Array<Posts>
  /** execute function "get_postsubcategories" and query aggregates on result of table type "posts" */
  get_postsubcategories_aggregate: Posts_Aggregate
  /** An array relationship */
  messages: Array<Messages>
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>
  /** fetch data from the table: "payment_methods" */
  payment_methods: Array<Payment_Methods>
  /** fetch aggregated fields from the table: "payment_methods" */
  payment_methods_aggregate: Payment_Methods_Aggregate
  /** fetch data from the table: "payment_methods" using primary key columns */
  payment_methods_by_pk?: Maybe<Payment_Methods>
  /** An array relationship */
  payments: Array<Payments>
  /** An aggregate relationship */
  payments_aggregate: Payments_Aggregate
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>
  /** An array relationship */
  possible_values: Array<Possible_Values>
  /** An aggregate relationship */
  possible_values_aggregate: Possible_Values_Aggregate
  /** fetch data from the table: "possible_values" using primary key columns */
  possible_values_by_pk?: Maybe<Possible_Values>
  /** An array relationship */
  post_attachments: Array<Post_Attachments>
  /** An aggregate relationship */
  post_attachments_aggregate: Post_Attachments_Aggregate
  /** fetch data from the table: "post_attachments" using primary key columns */
  post_attachments_by_pk?: Maybe<Post_Attachments>
  /** fetch data from the table: "post_attributes" */
  post_attributes: Array<Post_Attributes>
  /** fetch aggregated fields from the table: "post_attributes" */
  post_attributes_aggregate: Post_Attributes_Aggregate
  /** fetch data from the table: "post_attributes" using primary key columns */
  post_attributes_by_pk?: Maybe<Post_Attributes>
  /** execute function "post_list" which returns "all_posts" */
  post_list: Array<All_Posts>
  /** execute function "post_list" and query aggregates on result of table type "all_posts" */
  post_list_aggregate: All_Posts_Aggregate
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>
  /** fetch data from the table: "promotional_status" */
  promotional_status: Array<Promotional_Status>
  /** fetch aggregated fields from the table: "promotional_status" */
  promotional_status_aggregate: Promotional_Status_Aggregate
  /** fetch data from the table: "promotional_status" using primary key columns */
  promotional_status_by_pk?: Maybe<Promotional_Status>
  /** An array relationship */
  promotions: Array<Promotions>
  /** An aggregate relationship */
  promotions_aggregate: Promotions_Aggregate
  /** fetch data from the table: "promotions" using primary key columns */
  promotions_by_pk?: Maybe<Promotions>
  /** An array relationship */
  properties: Array<Properties>
  /** An aggregate relationship */
  properties_aggregate: Properties_Aggregate
  /** fetch data from the table: "properties" using primary key columns */
  properties_by_pk?: Maybe<Properties>
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>
  /** fetch data from the table: "statuses" */
  statuses: Array<Statuses>
  /** fetch aggregated fields from the table: "statuses" */
  statuses_aggregate: Statuses_Aggregate
  /** fetch data from the table: "statuses" using primary key columns */
  statuses_by_pk?: Maybe<Statuses>
  /** An array relationship */
  sub_categories: Array<Sub_Categories>
  /** An aggregate relationship */
  sub_categories_aggregate: Sub_Categories_Aggregate
  /** fetch data from the table: "sub_categories" using primary key columns */
  sub_categories_by_pk?: Maybe<Sub_Categories>
  /** An array relationship */
  user_documents: Array<User_Documents>
  /** An aggregate relationship */
  user_documents_aggregate: User_Documents_Aggregate
  /** fetch data from the table: "user_documents" using primary key columns */
  user_documents_by_pk?: Maybe<User_Documents>
  /** An array relationship */
  user_emails: Array<User_Emails>
  /** An aggregate relationship */
  user_emails_aggregate: User_Emails_Aggregate
  /** fetch data from the table: "user_emails" using primary key columns */
  user_emails_by_pk?: Maybe<User_Emails>
  /** An array relationship */
  user_notes: Array<User_Notes>
  /** An aggregate relationship */
  user_notes_aggregate: User_Notes_Aggregate
  /** fetch data from the table: "user_notes" using primary key columns */
  user_notes_by_pk?: Maybe<User_Notes>
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>
  /** An array relationship */
  user_rooms: Array<User_Rooms>
  /** An aggregate relationship */
  user_rooms_aggregate: User_Rooms_Aggregate
  /** fetch data from the table: "user_rooms" using primary key columns */
  user_rooms_by_pk?: Maybe<User_Rooms>
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table: "warning_messages" */
  warning_messages: Array<Warning_Messages>
  /** fetch aggregated fields from the table: "warning_messages" */
  warning_messages_aggregate: Warning_Messages_Aggregate
  /** fetch data from the table: "warning_messages" using primary key columns */
  warning_messages_by_pk?: Maybe<Warning_Messages>
  /** An array relationship */
  zip_codes: Array<Zip_Codes>
  /** An aggregate relationship */
  zip_codes_aggregate: Zip_Codes_Aggregate
  /** fetch data from the table: "zip_codes" using primary key columns */
  zip_codes_by_pk?: Maybe<Zip_Codes>
}

export type Query_RootAll_PostsArgs = {
  distinct_on?: Maybe<Array<All_Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<All_Posts_Order_By>>
  where?: Maybe<All_Posts_Bool_Exp>
}

export type Query_RootAll_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<All_Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<All_Posts_Order_By>>
  where?: Maybe<All_Posts_Bool_Exp>
}

export type Query_RootAll_Posts_By_PkArgs = {
  post_id: Scalars['bigint']
}

export type Query_RootBusiness_SizesArgs = {
  distinct_on?: Maybe<Array<Business_Sizes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Business_Sizes_Order_By>>
  where?: Maybe<Business_Sizes_Bool_Exp>
}

export type Query_RootBusiness_Sizes_AggregateArgs = {
  distinct_on?: Maybe<Array<Business_Sizes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Business_Sizes_Order_By>>
  where?: Maybe<Business_Sizes_Bool_Exp>
}

export type Query_RootBusiness_Sizes_By_PkArgs = {
  value: Scalars['String']
}

export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Order_By>>
  where?: Maybe<Categories_Bool_Exp>
}

export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Order_By>>
  where?: Maybe<Categories_Bool_Exp>
}

export type Query_RootCategories_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootCategory_FinderArgs = {
  args: Category_Finder_Args
  distinct_on?: Maybe<Array<Category_List_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_List_Order_By>>
  where?: Maybe<Category_List_Bool_Exp>
}

export type Query_RootCategory_Finder_AggregateArgs = {
  args: Category_Finder_Args
  distinct_on?: Maybe<Array<Category_List_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_List_Order_By>>
  where?: Maybe<Category_List_Bool_Exp>
}

export type Query_RootCategory_ListArgs = {
  distinct_on?: Maybe<Array<Category_List_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_List_Order_By>>
  where?: Maybe<Category_List_Bool_Exp>
}

export type Query_RootCategory_List_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_List_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_List_Order_By>>
  where?: Maybe<Category_List_Bool_Exp>
}

export type Query_RootCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

export type Query_RootCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

export type Query_RootCities_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootDonationsArgs = {
  distinct_on?: Maybe<Array<Donations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Donations_Order_By>>
  where?: Maybe<Donations_Bool_Exp>
}

export type Query_RootDonations_AggregateArgs = {
  distinct_on?: Maybe<Array<Donations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Donations_Order_By>>
  where?: Maybe<Donations_Bool_Exp>
}

export type Query_RootDonations_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

export type Query_RootFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

export type Query_RootFiles_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootGet_PostsubcategoriesArgs = {
  args: Get_Postsubcategories_Args
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Query_RootGet_Postsubcategories_AggregateArgs = {
  args: Get_Postsubcategories_Args
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Query_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

export type Query_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

export type Query_RootMessages_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPayment_MethodsArgs = {
  distinct_on?: Maybe<Array<Payment_Methods_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payment_Methods_Order_By>>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

export type Query_RootPayment_Methods_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Methods_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payment_Methods_Order_By>>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

export type Query_RootPayment_Methods_By_PkArgs = {
  name: Scalars['String']
}

export type Query_RootPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

export type Query_RootPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

export type Query_RootPayments_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPossible_ValuesArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

export type Query_RootPossible_Values_AggregateArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

export type Query_RootPossible_Values_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPost_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

export type Query_RootPost_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

export type Query_RootPost_Attachments_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPost_AttributesArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

export type Query_RootPost_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

export type Query_RootPost_Attributes_By_PkArgs = {
  post_id: Scalars['bigint']
}

export type Query_RootPost_ListArgs = {
  args: Post_List_Args
  distinct_on?: Maybe<Array<All_Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<All_Posts_Order_By>>
  where?: Maybe<All_Posts_Bool_Exp>
}

export type Query_RootPost_List_AggregateArgs = {
  args: Post_List_Args
  distinct_on?: Maybe<Array<All_Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<All_Posts_Order_By>>
  where?: Maybe<All_Posts_Bool_Exp>
}

export type Query_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Query_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Query_RootPosts_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootPromotional_StatusArgs = {
  distinct_on?: Maybe<Array<Promotional_Status_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotional_Status_Order_By>>
  where?: Maybe<Promotional_Status_Bool_Exp>
}

export type Query_RootPromotional_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotional_Status_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotional_Status_Order_By>>
  where?: Maybe<Promotional_Status_Bool_Exp>
}

export type Query_RootPromotional_Status_By_PkArgs = {
  id: Scalars['smallint']
}

export type Query_RootPromotionsArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

export type Query_RootPromotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

export type Query_RootPromotions_By_PkArgs = {
  id: Scalars['smallint']
}

export type Query_RootPropertiesArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

export type Query_RootProperties_AggregateArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

export type Query_RootProperties_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootRoomsArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rooms_Order_By>>
  where?: Maybe<Rooms_Bool_Exp>
}

export type Query_RootRooms_AggregateArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rooms_Order_By>>
  where?: Maybe<Rooms_Bool_Exp>
}

export type Query_RootRooms_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootStatusesArgs = {
  distinct_on?: Maybe<Array<Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Statuses_Order_By>>
  where?: Maybe<Statuses_Bool_Exp>
}

export type Query_RootStatuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Statuses_Order_By>>
  where?: Maybe<Statuses_Bool_Exp>
}

export type Query_RootStatuses_By_PkArgs = {
  value: Scalars['String']
}

export type Query_RootSub_CategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

export type Query_RootSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

export type Query_RootSub_Categories_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootUser_DocumentsArgs = {
  distinct_on?: Maybe<Array<User_Documents_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Documents_Order_By>>
  where?: Maybe<User_Documents_Bool_Exp>
}

export type Query_RootUser_Documents_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Documents_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Documents_Order_By>>
  where?: Maybe<User_Documents_Bool_Exp>
}

export type Query_RootUser_Documents_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootUser_EmailsArgs = {
  distinct_on?: Maybe<Array<User_Emails_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Emails_Order_By>>
  where?: Maybe<User_Emails_Bool_Exp>
}

export type Query_RootUser_Emails_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Emails_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Emails_Order_By>>
  where?: Maybe<User_Emails_Bool_Exp>
}

export type Query_RootUser_Emails_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootUser_NotesArgs = {
  distinct_on?: Maybe<Array<User_Notes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Notes_Order_By>>
  where?: Maybe<User_Notes_Bool_Exp>
}

export type Query_RootUser_Notes_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Notes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Notes_Order_By>>
  where?: Maybe<User_Notes_Bool_Exp>
}

export type Query_RootUser_Notes_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Roles_Order_By>>
  where?: Maybe<User_Roles_Bool_Exp>
}

export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Roles_Order_By>>
  where?: Maybe<User_Roles_Bool_Exp>
}

export type Query_RootUser_Roles_By_PkArgs = {
  user_id: Scalars['bigint']
}

export type Query_RootUser_RoomsArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

export type Query_RootUser_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

export type Query_RootUser_Rooms_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Query_RootUsers_By_PkArgs = {
  id: Scalars['bigint']
}

export type Query_RootWarning_MessagesArgs = {
  distinct_on?: Maybe<Array<Warning_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Warning_Messages_Order_By>>
  where?: Maybe<Warning_Messages_Bool_Exp>
}

export type Query_RootWarning_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Warning_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Warning_Messages_Order_By>>
  where?: Maybe<Warning_Messages_Bool_Exp>
}

export type Query_RootWarning_Messages_By_PkArgs = {
  id: Scalars['smallint']
}

export type Query_RootZip_CodesArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

export type Query_RootZip_Codes_AggregateArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

export type Query_RootZip_Codes_By_PkArgs = {
  id: Scalars['bigint']
}

/** columns and relationships of "rooms" */
export type Rooms = {
  __typename?: 'rooms'
  id: Scalars['bigint']
  /** An array relationship */
  messages: Array<Messages>
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate
  /** An array relationship */
  user_rooms: Array<User_Rooms>
  /** An aggregate relationship */
  user_rooms_aggregate: User_Rooms_Aggregate
}

/** columns and relationships of "rooms" */
export type RoomsMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "rooms" */
export type RoomsMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "rooms" */
export type RoomsUser_RoomsArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

/** columns and relationships of "rooms" */
export type RoomsUser_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

/** aggregated selection of "rooms" */
export type Rooms_Aggregate = {
  __typename?: 'rooms_aggregate'
  aggregate?: Maybe<Rooms_Aggregate_Fields>
  nodes: Array<Rooms>
}

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_Fields = {
  __typename?: 'rooms_aggregate_fields'
  avg?: Maybe<Rooms_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Rooms_Max_Fields>
  min?: Maybe<Rooms_Min_Fields>
  stddev?: Maybe<Rooms_Stddev_Fields>
  stddev_pop?: Maybe<Rooms_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Rooms_Stddev_Samp_Fields>
  sum?: Maybe<Rooms_Sum_Fields>
  var_pop?: Maybe<Rooms_Var_Pop_Fields>
  var_samp?: Maybe<Rooms_Var_Samp_Fields>
  variance?: Maybe<Rooms_Variance_Fields>
}

/** aggregate fields of "rooms" */
export type Rooms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rooms_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Rooms_Avg_Fields = {
  __typename?: 'rooms_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "rooms". All fields are combined with a logical 'AND'. */
export type Rooms_Bool_Exp = {
  _and?: Maybe<Array<Rooms_Bool_Exp>>
  _not?: Maybe<Rooms_Bool_Exp>
  _or?: Maybe<Array<Rooms_Bool_Exp>>
  id?: Maybe<Bigint_Comparison_Exp>
  messages?: Maybe<Messages_Bool_Exp>
  user_rooms?: Maybe<User_Rooms_Bool_Exp>
}

/** unique or primary key constraints on table "rooms" */
export enum Rooms_Constraint {
  /** unique or primary key constraint on columns "id" */
  RoomsPkey = 'rooms_pkey',
}

/** input type for incrementing numeric columns in table "rooms" */
export type Rooms_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "rooms" */
export type Rooms_Insert_Input = {
  id?: Maybe<Scalars['bigint']>
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>
  user_rooms?: Maybe<User_Rooms_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Rooms_Max_Fields = {
  __typename?: 'rooms_max_fields'
  id?: Maybe<Scalars['bigint']>
}

/** aggregate min on columns */
export type Rooms_Min_Fields = {
  __typename?: 'rooms_min_fields'
  id?: Maybe<Scalars['bigint']>
}

/** response of any mutation on the table "rooms" */
export type Rooms_Mutation_Response = {
  __typename?: 'rooms_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Rooms>
}

/** input type for inserting object relation for remote table "rooms" */
export type Rooms_Obj_Rel_Insert_Input = {
  data: Rooms_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Rooms_On_Conflict>
}

/** on_conflict condition type for table "rooms" */
export type Rooms_On_Conflict = {
  constraint: Rooms_Constraint
  update_columns?: Array<Rooms_Update_Column>
  where?: Maybe<Rooms_Bool_Exp>
}

/** Ordering options when selecting data from "rooms". */
export type Rooms_Order_By = {
  id?: Maybe<Order_By>
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>
  user_rooms_aggregate?: Maybe<User_Rooms_Aggregate_Order_By>
}

/** primary key columns input for table: rooms */
export type Rooms_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "rooms" */
export enum Rooms_Select_Column {
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "rooms" */
export type Rooms_Set_Input = {
  id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type Rooms_Stddev_Fields = {
  __typename?: 'rooms_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Rooms_Stddev_Pop_Fields = {
  __typename?: 'rooms_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Rooms_Stddev_Samp_Fields = {
  __typename?: 'rooms_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "rooms" */
export type Rooms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Rooms_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Rooms_Stream_Cursor_Value_Input = {
  id?: Maybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type Rooms_Sum_Fields = {
  __typename?: 'rooms_sum_fields'
  id?: Maybe<Scalars['bigint']>
}

/** update columns of table "rooms" */
export enum Rooms_Update_Column {
  /** column name */
  Id = 'id',
}

export type Rooms_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Rooms_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Rooms_Set_Input>
  where: Rooms_Bool_Exp
}

/** aggregate var_pop on columns */
export type Rooms_Var_Pop_Fields = {
  __typename?: 'rooms_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Rooms_Var_Samp_Fields = {
  __typename?: 'rooms_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Rooms_Variance_Fields = {
  __typename?: 'rooms_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: Maybe<Scalars['smallint']>
  _gt?: Maybe<Scalars['smallint']>
  _gte?: Maybe<Scalars['smallint']>
  _in?: Maybe<Array<Scalars['smallint']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['smallint']>
  _lte?: Maybe<Scalars['smallint']>
  _neq?: Maybe<Scalars['smallint']>
  _nin?: Maybe<Array<Scalars['smallint']>>
}

export type St_D_Within_Geography_Input = {
  distance: Scalars['Float']
  from: Scalars['geography']
  use_spheroid?: Maybe<Scalars['Boolean']>
}

export type St_D_Within_Input = {
  distance: Scalars['Float']
  from: Scalars['geometry']
}

/** columns and relationships of "statuses" */
export type Statuses = {
  __typename?: 'statuses'
  /** An array relationship */
  payments: Array<Payments>
  /** An aggregate relationship */
  payments_aggregate: Payments_Aggregate
  value: Scalars['String']
}

/** columns and relationships of "statuses" */
export type StatusesPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

/** columns and relationships of "statuses" */
export type StatusesPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

/** aggregated selection of "statuses" */
export type Statuses_Aggregate = {
  __typename?: 'statuses_aggregate'
  aggregate?: Maybe<Statuses_Aggregate_Fields>
  nodes: Array<Statuses>
}

/** aggregate fields of "statuses" */
export type Statuses_Aggregate_Fields = {
  __typename?: 'statuses_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Statuses_Max_Fields>
  min?: Maybe<Statuses_Min_Fields>
}

/** aggregate fields of "statuses" */
export type Statuses_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Statuses_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "statuses". All fields are combined with a logical 'AND'. */
export type Statuses_Bool_Exp = {
  _and?: Maybe<Array<Statuses_Bool_Exp>>
  _not?: Maybe<Statuses_Bool_Exp>
  _or?: Maybe<Array<Statuses_Bool_Exp>>
  payments?: Maybe<Payments_Bool_Exp>
  value?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "statuses" */
export enum Statuses_Constraint {
  /** unique or primary key constraint on columns "value" */
  StatusesPkey = 'statuses_pkey',
}

export enum Statuses_Enum {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

/** Boolean expression to compare columns of type "statuses_enum". All fields are combined with logical 'AND'. */
export type Statuses_Enum_Comparison_Exp = {
  _eq?: Maybe<Statuses_Enum>
  _in?: Maybe<Array<Statuses_Enum>>
  _is_null?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Statuses_Enum>
  _nin?: Maybe<Array<Statuses_Enum>>
}

/** input type for inserting data into table "statuses" */
export type Statuses_Insert_Input = {
  payments?: Maybe<Payments_Arr_Rel_Insert_Input>
  value?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Statuses_Max_Fields = {
  __typename?: 'statuses_max_fields'
  value?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Statuses_Min_Fields = {
  __typename?: 'statuses_min_fields'
  value?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "statuses" */
export type Statuses_Mutation_Response = {
  __typename?: 'statuses_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Statuses>
}

/** input type for inserting object relation for remote table "statuses" */
export type Statuses_Obj_Rel_Insert_Input = {
  data: Statuses_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Statuses_On_Conflict>
}

/** on_conflict condition type for table "statuses" */
export type Statuses_On_Conflict = {
  constraint: Statuses_Constraint
  update_columns?: Array<Statuses_Update_Column>
  where?: Maybe<Statuses_Bool_Exp>
}

/** Ordering options when selecting data from "statuses". */
export type Statuses_Order_By = {
  payments_aggregate?: Maybe<Payments_Aggregate_Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: statuses */
export type Statuses_Pk_Columns_Input = {
  value: Scalars['String']
}

/** select columns of table "statuses" */
export enum Statuses_Select_Column {
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "statuses" */
export type Statuses_Set_Input = {
  value?: Maybe<Scalars['String']>
}

/** Streaming cursor of the table "statuses" */
export type Statuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Statuses_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Statuses_Stream_Cursor_Value_Input = {
  value?: Maybe<Scalars['String']>
}

/** update columns of table "statuses" */
export enum Statuses_Update_Column {
  /** column name */
  Value = 'value',
}

export type Statuses_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Statuses_Set_Input>
  where: Statuses_Bool_Exp
}

/** columns and relationships of "sub_categories" */
export type Sub_Categories = {
  __typename?: 'sub_categories'
  /** An object relationship */
  category?: Maybe<Categories>
  category_id?: Maybe<Scalars['bigint']>
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  max_post_images: Scalars['smallint']
  name: Scalars['String']
  order?: Maybe<Scalars['smallint']>
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** An array relationship */
  properties: Array<Properties>
  /** An aggregate relationship */
  properties_aggregate: Properties_Aggregate
  updated_at: Scalars['timestamp']
}

/** columns and relationships of "sub_categories" */
export type Sub_CategoriesPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "sub_categories" */
export type Sub_CategoriesPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "sub_categories" */
export type Sub_CategoriesPropertiesArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

/** columns and relationships of "sub_categories" */
export type Sub_CategoriesProperties_AggregateArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

/** aggregated selection of "sub_categories" */
export type Sub_Categories_Aggregate = {
  __typename?: 'sub_categories_aggregate'
  aggregate?: Maybe<Sub_Categories_Aggregate_Fields>
  nodes: Array<Sub_Categories>
}

/** aggregate fields of "sub_categories" */
export type Sub_Categories_Aggregate_Fields = {
  __typename?: 'sub_categories_aggregate_fields'
  avg?: Maybe<Sub_Categories_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Sub_Categories_Max_Fields>
  min?: Maybe<Sub_Categories_Min_Fields>
  stddev?: Maybe<Sub_Categories_Stddev_Fields>
  stddev_pop?: Maybe<Sub_Categories_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Sub_Categories_Stddev_Samp_Fields>
  sum?: Maybe<Sub_Categories_Sum_Fields>
  var_pop?: Maybe<Sub_Categories_Var_Pop_Fields>
  var_samp?: Maybe<Sub_Categories_Var_Samp_Fields>
  variance?: Maybe<Sub_Categories_Variance_Fields>
}

/** aggregate fields of "sub_categories" */
export type Sub_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Sub_Categories_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "sub_categories" */
export type Sub_Categories_Aggregate_Order_By = {
  avg?: Maybe<Sub_Categories_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Sub_Categories_Max_Order_By>
  min?: Maybe<Sub_Categories_Min_Order_By>
  stddev?: Maybe<Sub_Categories_Stddev_Order_By>
  stddev_pop?: Maybe<Sub_Categories_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Sub_Categories_Stddev_Samp_Order_By>
  sum?: Maybe<Sub_Categories_Sum_Order_By>
  var_pop?: Maybe<Sub_Categories_Var_Pop_Order_By>
  var_samp?: Maybe<Sub_Categories_Var_Samp_Order_By>
  variance?: Maybe<Sub_Categories_Variance_Order_By>
}

/** input type for inserting array relation for remote table "sub_categories" */
export type Sub_Categories_Arr_Rel_Insert_Input = {
  data: Array<Sub_Categories_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Sub_Categories_On_Conflict>
}

/** aggregate avg on columns */
export type Sub_Categories_Avg_Fields = {
  __typename?: 'sub_categories_avg_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "sub_categories" */
export type Sub_Categories_Avg_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "sub_categories". All fields are combined with a logical 'AND'. */
export type Sub_Categories_Bool_Exp = {
  _and?: Maybe<Array<Sub_Categories_Bool_Exp>>
  _not?: Maybe<Sub_Categories_Bool_Exp>
  _or?: Maybe<Array<Sub_Categories_Bool_Exp>>
  category?: Maybe<Categories_Bool_Exp>
  category_id?: Maybe<Bigint_Comparison_Exp>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  max_post_images?: Maybe<Smallint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  order?: Maybe<Smallint_Comparison_Exp>
  posts?: Maybe<Posts_Bool_Exp>
  properties?: Maybe<Properties_Bool_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
}

/** unique or primary key constraints on table "sub_categories" */
export enum Sub_Categories_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubCategoriesPkey = 'sub_categories_pkey',
}

/** input type for incrementing numeric columns in table "sub_categories" */
export type Sub_Categories_Inc_Input = {
  category_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  order?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "sub_categories" */
export type Sub_Categories_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>
  category_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>
  properties?: Maybe<Properties_Arr_Rel_Insert_Input>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate max on columns */
export type Sub_Categories_Max_Fields = {
  __typename?: 'sub_categories_max_fields'
  category_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "sub_categories" */
export type Sub_Categories_Max_Order_By = {
  category_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Sub_Categories_Min_Fields = {
  __typename?: 'sub_categories_min_fields'
  category_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "sub_categories" */
export type Sub_Categories_Min_Order_By = {
  category_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "sub_categories" */
export type Sub_Categories_Mutation_Response = {
  __typename?: 'sub_categories_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Sub_Categories>
}

/** input type for inserting object relation for remote table "sub_categories" */
export type Sub_Categories_Obj_Rel_Insert_Input = {
  data: Sub_Categories_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Sub_Categories_On_Conflict>
}

/** on_conflict condition type for table "sub_categories" */
export type Sub_Categories_On_Conflict = {
  constraint: Sub_Categories_Constraint
  update_columns?: Array<Sub_Categories_Update_Column>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

/** Ordering options when selecting data from "sub_categories". */
export type Sub_Categories_Order_By = {
  category?: Maybe<Categories_Order_By>
  category_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  name?: Maybe<Order_By>
  order?: Maybe<Order_By>
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>
  properties_aggregate?: Maybe<Properties_Aggregate_Order_By>
  updated_at?: Maybe<Order_By>
}

/** primary key columns input for table: sub_categories */
export type Sub_Categories_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "sub_categories" */
export enum Sub_Categories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MaxPostImages = 'max_post_images',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "sub_categories" */
export type Sub_Categories_Set_Input = {
  category_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate stddev on columns */
export type Sub_Categories_Stddev_Fields = {
  __typename?: 'sub_categories_stddev_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Sub_Categories_Stddev_Pop_Fields = {
  __typename?: 'sub_categories_stddev_pop_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Sub_Categories_Stddev_Samp_Fields = {
  __typename?: 'sub_categories_stddev_samp_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "sub_categories" */
export type Sub_Categories_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** Streaming cursor of the table "sub_categories" */
export type Sub_Categories_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Sub_Categories_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Sub_Categories_Stream_Cursor_Value_Input = {
  category_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  order?: Maybe<Scalars['smallint']>
  updated_at?: Maybe<Scalars['timestamp']>
}

/** aggregate sum on columns */
export type Sub_Categories_Sum_Fields = {
  __typename?: 'sub_categories_sum_fields'
  category_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  max_post_images?: Maybe<Scalars['smallint']>
  order?: Maybe<Scalars['smallint']>
}

/** order by sum() on columns of table "sub_categories" */
export type Sub_Categories_Sum_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** update columns of table "sub_categories" */
export enum Sub_Categories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MaxPostImages = 'max_post_images',
  /** column name */
  Name = 'name',
  /** column name */
  Order = 'order',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Sub_Categories_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Sub_Categories_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Sub_Categories_Set_Input>
  where: Sub_Categories_Bool_Exp
}

/** aggregate var_pop on columns */
export type Sub_Categories_Var_Pop_Fields = {
  __typename?: 'sub_categories_var_pop_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "sub_categories" */
export type Sub_Categories_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Sub_Categories_Var_Samp_Fields = {
  __typename?: 'sub_categories_var_samp_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "sub_categories" */
export type Sub_Categories_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Sub_Categories_Variance_Fields = {
  __typename?: 'sub_categories_variance_fields'
  category_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  max_post_images?: Maybe<Scalars['Float']>
  order?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "sub_categories" */
export type Sub_Categories_Variance_Order_By = {
  category_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  max_post_images?: Maybe<Order_By>
  order?: Maybe<Order_By>
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "all_posts" */
  all_posts: Array<All_Posts>
  /** fetch aggregated fields from the table: "all_posts" */
  all_posts_aggregate: All_Posts_Aggregate
  /** fetch data from the table: "all_posts" using primary key columns */
  all_posts_by_pk?: Maybe<All_Posts>
  /** fetch data from the table in a streaming manner : "all_posts" */
  all_posts_stream: Array<All_Posts>
  /** fetch data from the table: "business_sizes" */
  business_sizes: Array<Business_Sizes>
  /** fetch aggregated fields from the table: "business_sizes" */
  business_sizes_aggregate: Business_Sizes_Aggregate
  /** fetch data from the table: "business_sizes" using primary key columns */
  business_sizes_by_pk?: Maybe<Business_Sizes>
  /** fetch data from the table in a streaming manner : "business_sizes" */
  business_sizes_stream: Array<Business_Sizes>
  /** fetch data from the table: "categories" */
  categories: Array<Categories>
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>
  /** fetch data from the table in a streaming manner : "categories" */
  categories_stream: Array<Categories>
  /** execute function "category_finder" which returns "category_list" */
  category_finder: Array<Category_List>
  /** execute function "category_finder" and query aggregates on result of table type "category_list" */
  category_finder_aggregate: Category_List_Aggregate
  /** fetch data from the table: "category_list" */
  category_list: Array<Category_List>
  /** fetch aggregated fields from the table: "category_list" */
  category_list_aggregate: Category_List_Aggregate
  /** fetch data from the table in a streaming manner : "category_list" */
  category_list_stream: Array<Category_List>
  /** fetch data from the table: "cities" */
  cities: Array<Cities>
  /** fetch aggregated fields from the table: "cities" */
  cities_aggregate: Cities_Aggregate
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>
  /** fetch data from the table in a streaming manner : "cities" */
  cities_stream: Array<Cities>
  /** fetch data from the table: "donations" */
  donations: Array<Donations>
  /** fetch aggregated fields from the table: "donations" */
  donations_aggregate: Donations_Aggregate
  /** fetch data from the table: "donations" using primary key columns */
  donations_by_pk?: Maybe<Donations>
  /** fetch data from the table in a streaming manner : "donations" */
  donations_stream: Array<Donations>
  /** An array relationship */
  files: Array<Files>
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate
  /** fetch data from the table: "files" using primary key columns */
  files_by_pk?: Maybe<Files>
  /** fetch data from the table in a streaming manner : "files" */
  files_stream: Array<Files>
  /** execute function "get_postsubcategories" which returns "posts" */
  get_postsubcategories: Array<Posts>
  /** execute function "get_postsubcategories" and query aggregates on result of table type "posts" */
  get_postsubcategories_aggregate: Posts_Aggregate
  /** An array relationship */
  messages: Array<Messages>
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>
  /** fetch data from the table in a streaming manner : "messages" */
  messages_stream: Array<Messages>
  /** fetch data from the table: "payment_methods" */
  payment_methods: Array<Payment_Methods>
  /** fetch aggregated fields from the table: "payment_methods" */
  payment_methods_aggregate: Payment_Methods_Aggregate
  /** fetch data from the table: "payment_methods" using primary key columns */
  payment_methods_by_pk?: Maybe<Payment_Methods>
  /** fetch data from the table in a streaming manner : "payment_methods" */
  payment_methods_stream: Array<Payment_Methods>
  /** An array relationship */
  payments: Array<Payments>
  /** An aggregate relationship */
  payments_aggregate: Payments_Aggregate
  /** fetch data from the table: "payments" using primary key columns */
  payments_by_pk?: Maybe<Payments>
  /** fetch data from the table in a streaming manner : "payments" */
  payments_stream: Array<Payments>
  /** An array relationship */
  possible_values: Array<Possible_Values>
  /** An aggregate relationship */
  possible_values_aggregate: Possible_Values_Aggregate
  /** fetch data from the table: "possible_values" using primary key columns */
  possible_values_by_pk?: Maybe<Possible_Values>
  /** fetch data from the table in a streaming manner : "possible_values" */
  possible_values_stream: Array<Possible_Values>
  /** An array relationship */
  post_attachments: Array<Post_Attachments>
  /** An aggregate relationship */
  post_attachments_aggregate: Post_Attachments_Aggregate
  /** fetch data from the table: "post_attachments" using primary key columns */
  post_attachments_by_pk?: Maybe<Post_Attachments>
  /** fetch data from the table in a streaming manner : "post_attachments" */
  post_attachments_stream: Array<Post_Attachments>
  /** fetch data from the table: "post_attributes" */
  post_attributes: Array<Post_Attributes>
  /** fetch aggregated fields from the table: "post_attributes" */
  post_attributes_aggregate: Post_Attributes_Aggregate
  /** fetch data from the table: "post_attributes" using primary key columns */
  post_attributes_by_pk?: Maybe<Post_Attributes>
  /** fetch data from the table in a streaming manner : "post_attributes" */
  post_attributes_stream: Array<Post_Attributes>
  /** execute function "post_list" which returns "all_posts" */
  post_list: Array<All_Posts>
  /** execute function "post_list" and query aggregates on result of table type "all_posts" */
  post_list_aggregate: All_Posts_Aggregate
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** fetch data from the table: "posts" using primary key columns */
  posts_by_pk?: Maybe<Posts>
  /** fetch data from the table in a streaming manner : "posts" */
  posts_stream: Array<Posts>
  /** fetch data from the table: "promotional_status" */
  promotional_status: Array<Promotional_Status>
  /** fetch aggregated fields from the table: "promotional_status" */
  promotional_status_aggregate: Promotional_Status_Aggregate
  /** fetch data from the table: "promotional_status" using primary key columns */
  promotional_status_by_pk?: Maybe<Promotional_Status>
  /** fetch data from the table in a streaming manner : "promotional_status" */
  promotional_status_stream: Array<Promotional_Status>
  /** An array relationship */
  promotions: Array<Promotions>
  /** An aggregate relationship */
  promotions_aggregate: Promotions_Aggregate
  /** fetch data from the table: "promotions" using primary key columns */
  promotions_by_pk?: Maybe<Promotions>
  /** fetch data from the table in a streaming manner : "promotions" */
  promotions_stream: Array<Promotions>
  /** An array relationship */
  properties: Array<Properties>
  /** An aggregate relationship */
  properties_aggregate: Properties_Aggregate
  /** fetch data from the table: "properties" using primary key columns */
  properties_by_pk?: Maybe<Properties>
  /** fetch data from the table in a streaming manner : "properties" */
  properties_stream: Array<Properties>
  /** fetch data from the table: "rooms" */
  rooms: Array<Rooms>
  /** fetch aggregated fields from the table: "rooms" */
  rooms_aggregate: Rooms_Aggregate
  /** fetch data from the table: "rooms" using primary key columns */
  rooms_by_pk?: Maybe<Rooms>
  /** fetch data from the table in a streaming manner : "rooms" */
  rooms_stream: Array<Rooms>
  /** fetch data from the table: "statuses" */
  statuses: Array<Statuses>
  /** fetch aggregated fields from the table: "statuses" */
  statuses_aggregate: Statuses_Aggregate
  /** fetch data from the table: "statuses" using primary key columns */
  statuses_by_pk?: Maybe<Statuses>
  /** fetch data from the table in a streaming manner : "statuses" */
  statuses_stream: Array<Statuses>
  /** An array relationship */
  sub_categories: Array<Sub_Categories>
  /** An aggregate relationship */
  sub_categories_aggregate: Sub_Categories_Aggregate
  /** fetch data from the table: "sub_categories" using primary key columns */
  sub_categories_by_pk?: Maybe<Sub_Categories>
  /** fetch data from the table in a streaming manner : "sub_categories" */
  sub_categories_stream: Array<Sub_Categories>
  /** An array relationship */
  user_documents: Array<User_Documents>
  /** An aggregate relationship */
  user_documents_aggregate: User_Documents_Aggregate
  /** fetch data from the table: "user_documents" using primary key columns */
  user_documents_by_pk?: Maybe<User_Documents>
  /** fetch data from the table in a streaming manner : "user_documents" */
  user_documents_stream: Array<User_Documents>
  /** An array relationship */
  user_emails: Array<User_Emails>
  /** An aggregate relationship */
  user_emails_aggregate: User_Emails_Aggregate
  /** fetch data from the table: "user_emails" using primary key columns */
  user_emails_by_pk?: Maybe<User_Emails>
  /** fetch data from the table in a streaming manner : "user_emails" */
  user_emails_stream: Array<User_Emails>
  /** An array relationship */
  user_notes: Array<User_Notes>
  /** An aggregate relationship */
  user_notes_aggregate: User_Notes_Aggregate
  /** fetch data from the table: "user_notes" using primary key columns */
  user_notes_by_pk?: Maybe<User_Notes>
  /** fetch data from the table in a streaming manner : "user_notes" */
  user_notes_stream: Array<User_Notes>
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>
  /** fetch data from the table in a streaming manner : "user_roles" */
  user_roles_stream: Array<User_Roles>
  /** An array relationship */
  user_rooms: Array<User_Rooms>
  /** An aggregate relationship */
  user_rooms_aggregate: User_Rooms_Aggregate
  /** fetch data from the table: "user_rooms" using primary key columns */
  user_rooms_by_pk?: Maybe<User_Rooms>
  /** fetch data from the table in a streaming manner : "user_rooms" */
  user_rooms_stream: Array<User_Rooms>
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
  /** fetch data from the table in a streaming manner : "users" */
  users_stream: Array<Users>
  /** fetch data from the table: "warning_messages" */
  warning_messages: Array<Warning_Messages>
  /** fetch aggregated fields from the table: "warning_messages" */
  warning_messages_aggregate: Warning_Messages_Aggregate
  /** fetch data from the table: "warning_messages" using primary key columns */
  warning_messages_by_pk?: Maybe<Warning_Messages>
  /** fetch data from the table in a streaming manner : "warning_messages" */
  warning_messages_stream: Array<Warning_Messages>
  /** An array relationship */
  zip_codes: Array<Zip_Codes>
  /** An aggregate relationship */
  zip_codes_aggregate: Zip_Codes_Aggregate
  /** fetch data from the table: "zip_codes" using primary key columns */
  zip_codes_by_pk?: Maybe<Zip_Codes>
  /** fetch data from the table in a streaming manner : "zip_codes" */
  zip_codes_stream: Array<Zip_Codes>
}

export type Subscription_RootAll_PostsArgs = {
  distinct_on?: Maybe<Array<All_Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<All_Posts_Order_By>>
  where?: Maybe<All_Posts_Bool_Exp>
}

export type Subscription_RootAll_Posts_AggregateArgs = {
  distinct_on?: Maybe<Array<All_Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<All_Posts_Order_By>>
  where?: Maybe<All_Posts_Bool_Exp>
}

export type Subscription_RootAll_Posts_By_PkArgs = {
  post_id: Scalars['bigint']
}

export type Subscription_RootAll_Posts_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<All_Posts_Stream_Cursor_Input>>
  where?: Maybe<All_Posts_Bool_Exp>
}

export type Subscription_RootBusiness_SizesArgs = {
  distinct_on?: Maybe<Array<Business_Sizes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Business_Sizes_Order_By>>
  where?: Maybe<Business_Sizes_Bool_Exp>
}

export type Subscription_RootBusiness_Sizes_AggregateArgs = {
  distinct_on?: Maybe<Array<Business_Sizes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Business_Sizes_Order_By>>
  where?: Maybe<Business_Sizes_Bool_Exp>
}

export type Subscription_RootBusiness_Sizes_By_PkArgs = {
  value: Scalars['String']
}

export type Subscription_RootBusiness_Sizes_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Business_Sizes_Stream_Cursor_Input>>
  where?: Maybe<Business_Sizes_Bool_Exp>
}

export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Order_By>>
  where?: Maybe<Categories_Bool_Exp>
}

export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Categories_Order_By>>
  where?: Maybe<Categories_Bool_Exp>
}

export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootCategories_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Categories_Stream_Cursor_Input>>
  where?: Maybe<Categories_Bool_Exp>
}

export type Subscription_RootCategory_FinderArgs = {
  args: Category_Finder_Args
  distinct_on?: Maybe<Array<Category_List_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_List_Order_By>>
  where?: Maybe<Category_List_Bool_Exp>
}

export type Subscription_RootCategory_Finder_AggregateArgs = {
  args: Category_Finder_Args
  distinct_on?: Maybe<Array<Category_List_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_List_Order_By>>
  where?: Maybe<Category_List_Bool_Exp>
}

export type Subscription_RootCategory_ListArgs = {
  distinct_on?: Maybe<Array<Category_List_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_List_Order_By>>
  where?: Maybe<Category_List_Bool_Exp>
}

export type Subscription_RootCategory_List_AggregateArgs = {
  distinct_on?: Maybe<Array<Category_List_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Category_List_Order_By>>
  where?: Maybe<Category_List_Bool_Exp>
}

export type Subscription_RootCategory_List_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Category_List_Stream_Cursor_Input>>
  where?: Maybe<Category_List_Bool_Exp>
}

export type Subscription_RootCitiesArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

export type Subscription_RootCities_AggregateArgs = {
  distinct_on?: Maybe<Array<Cities_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Cities_Order_By>>
  where?: Maybe<Cities_Bool_Exp>
}

export type Subscription_RootCities_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootCities_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Cities_Stream_Cursor_Input>>
  where?: Maybe<Cities_Bool_Exp>
}

export type Subscription_RootDonationsArgs = {
  distinct_on?: Maybe<Array<Donations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Donations_Order_By>>
  where?: Maybe<Donations_Bool_Exp>
}

export type Subscription_RootDonations_AggregateArgs = {
  distinct_on?: Maybe<Array<Donations_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Donations_Order_By>>
  where?: Maybe<Donations_Bool_Exp>
}

export type Subscription_RootDonations_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootDonations_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Donations_Stream_Cursor_Input>>
  where?: Maybe<Donations_Bool_Exp>
}

export type Subscription_RootFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

export type Subscription_RootFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

export type Subscription_RootFiles_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootFiles_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Files_Stream_Cursor_Input>>
  where?: Maybe<Files_Bool_Exp>
}

export type Subscription_RootGet_PostsubcategoriesArgs = {
  args: Get_Postsubcategories_Args
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Subscription_RootGet_Postsubcategories_AggregateArgs = {
  args: Get_Postsubcategories_Args
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Subscription_RootMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootMessages_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Messages_Stream_Cursor_Input>>
  where?: Maybe<Messages_Bool_Exp>
}

export type Subscription_RootPayment_MethodsArgs = {
  distinct_on?: Maybe<Array<Payment_Methods_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payment_Methods_Order_By>>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

export type Subscription_RootPayment_Methods_AggregateArgs = {
  distinct_on?: Maybe<Array<Payment_Methods_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payment_Methods_Order_By>>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

export type Subscription_RootPayment_Methods_By_PkArgs = {
  name: Scalars['String']
}

export type Subscription_RootPayment_Methods_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Payment_Methods_Stream_Cursor_Input>>
  where?: Maybe<Payment_Methods_Bool_Exp>
}

export type Subscription_RootPaymentsArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

export type Subscription_RootPayments_AggregateArgs = {
  distinct_on?: Maybe<Array<Payments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Payments_Order_By>>
  where?: Maybe<Payments_Bool_Exp>
}

export type Subscription_RootPayments_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPayments_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Payments_Stream_Cursor_Input>>
  where?: Maybe<Payments_Bool_Exp>
}

export type Subscription_RootPossible_ValuesArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

export type Subscription_RootPossible_Values_AggregateArgs = {
  distinct_on?: Maybe<Array<Possible_Values_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Possible_Values_Order_By>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

export type Subscription_RootPossible_Values_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPossible_Values_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Possible_Values_Stream_Cursor_Input>>
  where?: Maybe<Possible_Values_Bool_Exp>
}

export type Subscription_RootPost_AttachmentsArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

export type Subscription_RootPost_Attachments_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attachments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attachments_Order_By>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

export type Subscription_RootPost_Attachments_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPost_Attachments_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Post_Attachments_Stream_Cursor_Input>>
  where?: Maybe<Post_Attachments_Bool_Exp>
}

export type Subscription_RootPost_AttributesArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

export type Subscription_RootPost_Attributes_AggregateArgs = {
  distinct_on?: Maybe<Array<Post_Attributes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Post_Attributes_Order_By>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

export type Subscription_RootPost_Attributes_By_PkArgs = {
  post_id: Scalars['bigint']
}

export type Subscription_RootPost_Attributes_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Post_Attributes_Stream_Cursor_Input>>
  where?: Maybe<Post_Attributes_Bool_Exp>
}

export type Subscription_RootPost_ListArgs = {
  args: Post_List_Args
  distinct_on?: Maybe<Array<All_Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<All_Posts_Order_By>>
  where?: Maybe<All_Posts_Bool_Exp>
}

export type Subscription_RootPost_List_AggregateArgs = {
  args: Post_List_Args
  distinct_on?: Maybe<Array<All_Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<All_Posts_Order_By>>
  where?: Maybe<All_Posts_Bool_Exp>
}

export type Subscription_RootPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Subscription_RootPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Subscription_RootPosts_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootPosts_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Posts_Stream_Cursor_Input>>
  where?: Maybe<Posts_Bool_Exp>
}

export type Subscription_RootPromotional_StatusArgs = {
  distinct_on?: Maybe<Array<Promotional_Status_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotional_Status_Order_By>>
  where?: Maybe<Promotional_Status_Bool_Exp>
}

export type Subscription_RootPromotional_Status_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotional_Status_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotional_Status_Order_By>>
  where?: Maybe<Promotional_Status_Bool_Exp>
}

export type Subscription_RootPromotional_Status_By_PkArgs = {
  id: Scalars['smallint']
}

export type Subscription_RootPromotional_Status_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Promotional_Status_Stream_Cursor_Input>>
  where?: Maybe<Promotional_Status_Bool_Exp>
}

export type Subscription_RootPromotionsArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

export type Subscription_RootPromotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

export type Subscription_RootPromotions_By_PkArgs = {
  id: Scalars['smallint']
}

export type Subscription_RootPromotions_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Promotions_Stream_Cursor_Input>>
  where?: Maybe<Promotions_Bool_Exp>
}

export type Subscription_RootPropertiesArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

export type Subscription_RootProperties_AggregateArgs = {
  distinct_on?: Maybe<Array<Properties_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Properties_Order_By>>
  where?: Maybe<Properties_Bool_Exp>
}

export type Subscription_RootProperties_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootProperties_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Properties_Stream_Cursor_Input>>
  where?: Maybe<Properties_Bool_Exp>
}

export type Subscription_RootRoomsArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rooms_Order_By>>
  where?: Maybe<Rooms_Bool_Exp>
}

export type Subscription_RootRooms_AggregateArgs = {
  distinct_on?: Maybe<Array<Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Rooms_Order_By>>
  where?: Maybe<Rooms_Bool_Exp>
}

export type Subscription_RootRooms_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootRooms_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Rooms_Stream_Cursor_Input>>
  where?: Maybe<Rooms_Bool_Exp>
}

export type Subscription_RootStatusesArgs = {
  distinct_on?: Maybe<Array<Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Statuses_Order_By>>
  where?: Maybe<Statuses_Bool_Exp>
}

export type Subscription_RootStatuses_AggregateArgs = {
  distinct_on?: Maybe<Array<Statuses_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Statuses_Order_By>>
  where?: Maybe<Statuses_Bool_Exp>
}

export type Subscription_RootStatuses_By_PkArgs = {
  value: Scalars['String']
}

export type Subscription_RootStatuses_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Statuses_Stream_Cursor_Input>>
  where?: Maybe<Statuses_Bool_Exp>
}

export type Subscription_RootSub_CategoriesArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

export type Subscription_RootSub_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Sub_Categories_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Sub_Categories_Order_By>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

export type Subscription_RootSub_Categories_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootSub_Categories_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Sub_Categories_Stream_Cursor_Input>>
  where?: Maybe<Sub_Categories_Bool_Exp>
}

export type Subscription_RootUser_DocumentsArgs = {
  distinct_on?: Maybe<Array<User_Documents_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Documents_Order_By>>
  where?: Maybe<User_Documents_Bool_Exp>
}

export type Subscription_RootUser_Documents_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Documents_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Documents_Order_By>>
  where?: Maybe<User_Documents_Bool_Exp>
}

export type Subscription_RootUser_Documents_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootUser_Documents_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<User_Documents_Stream_Cursor_Input>>
  where?: Maybe<User_Documents_Bool_Exp>
}

export type Subscription_RootUser_EmailsArgs = {
  distinct_on?: Maybe<Array<User_Emails_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Emails_Order_By>>
  where?: Maybe<User_Emails_Bool_Exp>
}

export type Subscription_RootUser_Emails_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Emails_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Emails_Order_By>>
  where?: Maybe<User_Emails_Bool_Exp>
}

export type Subscription_RootUser_Emails_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootUser_Emails_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<User_Emails_Stream_Cursor_Input>>
  where?: Maybe<User_Emails_Bool_Exp>
}

export type Subscription_RootUser_NotesArgs = {
  distinct_on?: Maybe<Array<User_Notes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Notes_Order_By>>
  where?: Maybe<User_Notes_Bool_Exp>
}

export type Subscription_RootUser_Notes_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Notes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Notes_Order_By>>
  where?: Maybe<User_Notes_Bool_Exp>
}

export type Subscription_RootUser_Notes_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootUser_Notes_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<User_Notes_Stream_Cursor_Input>>
  where?: Maybe<User_Notes_Bool_Exp>
}

export type Subscription_RootUser_RolesArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Roles_Order_By>>
  where?: Maybe<User_Roles_Bool_Exp>
}

export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Roles_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Roles_Order_By>>
  where?: Maybe<User_Roles_Bool_Exp>
}

export type Subscription_RootUser_Roles_By_PkArgs = {
  user_id: Scalars['bigint']
}

export type Subscription_RootUser_Roles_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<User_Roles_Stream_Cursor_Input>>
  where?: Maybe<User_Roles_Bool_Exp>
}

export type Subscription_RootUser_RoomsArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

export type Subscription_RootUser_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

export type Subscription_RootUser_Rooms_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootUser_Rooms_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<User_Rooms_Stream_Cursor_Input>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Users_Stream_Cursor_Input>>
  where?: Maybe<Users_Bool_Exp>
}

export type Subscription_RootWarning_MessagesArgs = {
  distinct_on?: Maybe<Array<Warning_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Warning_Messages_Order_By>>
  where?: Maybe<Warning_Messages_Bool_Exp>
}

export type Subscription_RootWarning_Messages_AggregateArgs = {
  distinct_on?: Maybe<Array<Warning_Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Warning_Messages_Order_By>>
  where?: Maybe<Warning_Messages_Bool_Exp>
}

export type Subscription_RootWarning_Messages_By_PkArgs = {
  id: Scalars['smallint']
}

export type Subscription_RootWarning_Messages_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Warning_Messages_Stream_Cursor_Input>>
  where?: Maybe<Warning_Messages_Bool_Exp>
}

export type Subscription_RootZip_CodesArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

export type Subscription_RootZip_Codes_AggregateArgs = {
  distinct_on?: Maybe<Array<Zip_Codes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Zip_Codes_Order_By>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

export type Subscription_RootZip_Codes_By_PkArgs = {
  id: Scalars['bigint']
}

export type Subscription_RootZip_Codes_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<Maybe<Zip_Codes_Stream_Cursor_Input>>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>
  _gt?: Maybe<Scalars['timestamp']>
  _gte?: Maybe<Scalars['timestamp']>
  _in?: Maybe<Array<Scalars['timestamp']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamp']>
  _lte?: Maybe<Scalars['timestamp']>
  _neq?: Maybe<Scalars['timestamp']>
  _nin?: Maybe<Array<Scalars['timestamp']>>
}

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/** Boolean expression to compare columns of type "tsvector". All fields are combined with logical 'AND'. */
export type Tsvector_Comparison_Exp = {
  _eq?: Maybe<Scalars['tsvector']>
  _gt?: Maybe<Scalars['tsvector']>
  _gte?: Maybe<Scalars['tsvector']>
  _in?: Maybe<Array<Scalars['tsvector']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['tsvector']>
  _lte?: Maybe<Scalars['tsvector']>
  _neq?: Maybe<Scalars['tsvector']>
  _nin?: Maybe<Array<Scalars['tsvector']>>
}

/** columns and relationships of "user_documents" */
export type User_Documents = {
  __typename?: 'user_documents'
  created_at?: Maybe<Scalars['timestamp']>
  document: Scalars['String']
  id: Scalars['bigint']
  updated_at?: Maybe<Scalars['timestamp']>
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
}

/** aggregated selection of "user_documents" */
export type User_Documents_Aggregate = {
  __typename?: 'user_documents_aggregate'
  aggregate?: Maybe<User_Documents_Aggregate_Fields>
  nodes: Array<User_Documents>
}

/** aggregate fields of "user_documents" */
export type User_Documents_Aggregate_Fields = {
  __typename?: 'user_documents_aggregate_fields'
  avg?: Maybe<User_Documents_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<User_Documents_Max_Fields>
  min?: Maybe<User_Documents_Min_Fields>
  stddev?: Maybe<User_Documents_Stddev_Fields>
  stddev_pop?: Maybe<User_Documents_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Documents_Stddev_Samp_Fields>
  sum?: Maybe<User_Documents_Sum_Fields>
  var_pop?: Maybe<User_Documents_Var_Pop_Fields>
  var_samp?: Maybe<User_Documents_Var_Samp_Fields>
  variance?: Maybe<User_Documents_Variance_Fields>
}

/** aggregate fields of "user_documents" */
export type User_Documents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Documents_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_documents" */
export type User_Documents_Aggregate_Order_By = {
  avg?: Maybe<User_Documents_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<User_Documents_Max_Order_By>
  min?: Maybe<User_Documents_Min_Order_By>
  stddev?: Maybe<User_Documents_Stddev_Order_By>
  stddev_pop?: Maybe<User_Documents_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<User_Documents_Stddev_Samp_Order_By>
  sum?: Maybe<User_Documents_Sum_Order_By>
  var_pop?: Maybe<User_Documents_Var_Pop_Order_By>
  var_samp?: Maybe<User_Documents_Var_Samp_Order_By>
  variance?: Maybe<User_Documents_Variance_Order_By>
}

/** input type for inserting array relation for remote table "user_documents" */
export type User_Documents_Arr_Rel_Insert_Input = {
  data: Array<User_Documents_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<User_Documents_On_Conflict>
}

/** aggregate avg on columns */
export type User_Documents_Avg_Fields = {
  __typename?: 'user_documents_avg_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user_documents" */
export type User_Documents_Avg_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "user_documents". All fields are combined with a logical 'AND'. */
export type User_Documents_Bool_Exp = {
  _and?: Maybe<Array<User_Documents_Bool_Exp>>
  _not?: Maybe<User_Documents_Bool_Exp>
  _or?: Maybe<Array<User_Documents_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  document?: Maybe<String_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "user_documents" */
export enum User_Documents_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserDocumentPkey = 'user_document_pkey',
}

/** input type for incrementing numeric columns in table "user_documents" */
export type User_Documents_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "user_documents" */
export type User_Documents_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  document?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type User_Documents_Max_Fields = {
  __typename?: 'user_documents_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  document?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "user_documents" */
export type User_Documents_Max_Order_By = {
  created_at?: Maybe<Order_By>
  document?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Documents_Min_Fields = {
  __typename?: 'user_documents_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  document?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "user_documents" */
export type User_Documents_Min_Order_By = {
  created_at?: Maybe<Order_By>
  document?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "user_documents" */
export type User_Documents_Mutation_Response = {
  __typename?: 'user_documents_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Documents>
}

/** on_conflict condition type for table "user_documents" */
export type User_Documents_On_Conflict = {
  constraint: User_Documents_Constraint
  update_columns?: Array<User_Documents_Update_Column>
  where?: Maybe<User_Documents_Bool_Exp>
}

/** Ordering options when selecting data from "user_documents". */
export type User_Documents_Order_By = {
  created_at?: Maybe<Order_By>
  document?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: user_documents */
export type User_Documents_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "user_documents" */
export enum User_Documents_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Document = 'document',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_documents" */
export type User_Documents_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  document?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type User_Documents_Stddev_Fields = {
  __typename?: 'user_documents_stddev_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user_documents" */
export type User_Documents_Stddev_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Documents_Stddev_Pop_Fields = {
  __typename?: 'user_documents_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user_documents" */
export type User_Documents_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Documents_Stddev_Samp_Fields = {
  __typename?: 'user_documents_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user_documents" */
export type User_Documents_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "user_documents" */
export type User_Documents_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Documents_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type User_Documents_Stream_Cursor_Value_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  document?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type User_Documents_Sum_Fields = {
  __typename?: 'user_documents_sum_fields'
  id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "user_documents" */
export type User_Documents_Sum_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "user_documents" */
export enum User_Documents_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Document = 'document',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

export type User_Documents_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<User_Documents_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<User_Documents_Set_Input>
  where: User_Documents_Bool_Exp
}

/** aggregate var_pop on columns */
export type User_Documents_Var_Pop_Fields = {
  __typename?: 'user_documents_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user_documents" */
export type User_Documents_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Documents_Var_Samp_Fields = {
  __typename?: 'user_documents_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user_documents" */
export type User_Documents_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type User_Documents_Variance_Fields = {
  __typename?: 'user_documents_variance_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user_documents" */
export type User_Documents_Variance_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "user_emails" */
export type User_Emails = {
  __typename?: 'user_emails'
  created_at: Scalars['timestamp']
  email: Scalars['String']
  id: Scalars['bigint']
  updated_at: Scalars['timestamp']
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
}

/** aggregated selection of "user_emails" */
export type User_Emails_Aggregate = {
  __typename?: 'user_emails_aggregate'
  aggregate?: Maybe<User_Emails_Aggregate_Fields>
  nodes: Array<User_Emails>
}

/** aggregate fields of "user_emails" */
export type User_Emails_Aggregate_Fields = {
  __typename?: 'user_emails_aggregate_fields'
  avg?: Maybe<User_Emails_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<User_Emails_Max_Fields>
  min?: Maybe<User_Emails_Min_Fields>
  stddev?: Maybe<User_Emails_Stddev_Fields>
  stddev_pop?: Maybe<User_Emails_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Emails_Stddev_Samp_Fields>
  sum?: Maybe<User_Emails_Sum_Fields>
  var_pop?: Maybe<User_Emails_Var_Pop_Fields>
  var_samp?: Maybe<User_Emails_Var_Samp_Fields>
  variance?: Maybe<User_Emails_Variance_Fields>
}

/** aggregate fields of "user_emails" */
export type User_Emails_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Emails_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_emails" */
export type User_Emails_Aggregate_Order_By = {
  avg?: Maybe<User_Emails_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<User_Emails_Max_Order_By>
  min?: Maybe<User_Emails_Min_Order_By>
  stddev?: Maybe<User_Emails_Stddev_Order_By>
  stddev_pop?: Maybe<User_Emails_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<User_Emails_Stddev_Samp_Order_By>
  sum?: Maybe<User_Emails_Sum_Order_By>
  var_pop?: Maybe<User_Emails_Var_Pop_Order_By>
  var_samp?: Maybe<User_Emails_Var_Samp_Order_By>
  variance?: Maybe<User_Emails_Variance_Order_By>
}

/** input type for inserting array relation for remote table "user_emails" */
export type User_Emails_Arr_Rel_Insert_Input = {
  data: Array<User_Emails_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<User_Emails_On_Conflict>
}

/** aggregate avg on columns */
export type User_Emails_Avg_Fields = {
  __typename?: 'user_emails_avg_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user_emails" */
export type User_Emails_Avg_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "user_emails". All fields are combined with a logical 'AND'. */
export type User_Emails_Bool_Exp = {
  _and?: Maybe<Array<User_Emails_Bool_Exp>>
  _not?: Maybe<User_Emails_Bool_Exp>
  _or?: Maybe<Array<User_Emails_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "user_emails" */
export enum User_Emails_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserEmailPkey = 'user_email_pkey',
}

/** input type for incrementing numeric columns in table "user_emails" */
export type User_Emails_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "user_emails" */
export type User_Emails_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type User_Emails_Max_Fields = {
  __typename?: 'user_emails_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "user_emails" */
export type User_Emails_Max_Order_By = {
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Emails_Min_Fields = {
  __typename?: 'user_emails_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "user_emails" */
export type User_Emails_Min_Order_By = {
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "user_emails" */
export type User_Emails_Mutation_Response = {
  __typename?: 'user_emails_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Emails>
}

/** on_conflict condition type for table "user_emails" */
export type User_Emails_On_Conflict = {
  constraint: User_Emails_Constraint
  update_columns?: Array<User_Emails_Update_Column>
  where?: Maybe<User_Emails_Bool_Exp>
}

/** Ordering options when selecting data from "user_emails". */
export type User_Emails_Order_By = {
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: user_emails */
export type User_Emails_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "user_emails" */
export enum User_Emails_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_emails" */
export type User_Emails_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type User_Emails_Stddev_Fields = {
  __typename?: 'user_emails_stddev_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user_emails" */
export type User_Emails_Stddev_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Emails_Stddev_Pop_Fields = {
  __typename?: 'user_emails_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user_emails" */
export type User_Emails_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Emails_Stddev_Samp_Fields = {
  __typename?: 'user_emails_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user_emails" */
export type User_Emails_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "user_emails" */
export type User_Emails_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Emails_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type User_Emails_Stream_Cursor_Value_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type User_Emails_Sum_Fields = {
  __typename?: 'user_emails_sum_fields'
  id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "user_emails" */
export type User_Emails_Sum_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "user_emails" */
export enum User_Emails_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

export type User_Emails_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<User_Emails_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<User_Emails_Set_Input>
  where: User_Emails_Bool_Exp
}

/** aggregate var_pop on columns */
export type User_Emails_Var_Pop_Fields = {
  __typename?: 'user_emails_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user_emails" */
export type User_Emails_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Emails_Var_Samp_Fields = {
  __typename?: 'user_emails_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user_emails" */
export type User_Emails_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type User_Emails_Variance_Fields = {
  __typename?: 'user_emails_variance_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user_emails" */
export type User_Emails_Variance_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "user_notes" */
export type User_Notes = {
  __typename?: 'user_notes'
  created_at: Scalars['timestamp']
  id: Scalars['bigint']
  note: Scalars['String']
  updated_at: Scalars['timestamp']
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
}

/** aggregated selection of "user_notes" */
export type User_Notes_Aggregate = {
  __typename?: 'user_notes_aggregate'
  aggregate?: Maybe<User_Notes_Aggregate_Fields>
  nodes: Array<User_Notes>
}

/** aggregate fields of "user_notes" */
export type User_Notes_Aggregate_Fields = {
  __typename?: 'user_notes_aggregate_fields'
  avg?: Maybe<User_Notes_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<User_Notes_Max_Fields>
  min?: Maybe<User_Notes_Min_Fields>
  stddev?: Maybe<User_Notes_Stddev_Fields>
  stddev_pop?: Maybe<User_Notes_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Notes_Stddev_Samp_Fields>
  sum?: Maybe<User_Notes_Sum_Fields>
  var_pop?: Maybe<User_Notes_Var_Pop_Fields>
  var_samp?: Maybe<User_Notes_Var_Samp_Fields>
  variance?: Maybe<User_Notes_Variance_Fields>
}

/** aggregate fields of "user_notes" */
export type User_Notes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Notes_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_notes" */
export type User_Notes_Aggregate_Order_By = {
  avg?: Maybe<User_Notes_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<User_Notes_Max_Order_By>
  min?: Maybe<User_Notes_Min_Order_By>
  stddev?: Maybe<User_Notes_Stddev_Order_By>
  stddev_pop?: Maybe<User_Notes_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<User_Notes_Stddev_Samp_Order_By>
  sum?: Maybe<User_Notes_Sum_Order_By>
  var_pop?: Maybe<User_Notes_Var_Pop_Order_By>
  var_samp?: Maybe<User_Notes_Var_Samp_Order_By>
  variance?: Maybe<User_Notes_Variance_Order_By>
}

/** input type for inserting array relation for remote table "user_notes" */
export type User_Notes_Arr_Rel_Insert_Input = {
  data: Array<User_Notes_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<User_Notes_On_Conflict>
}

/** aggregate avg on columns */
export type User_Notes_Avg_Fields = {
  __typename?: 'user_notes_avg_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user_notes" */
export type User_Notes_Avg_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "user_notes". All fields are combined with a logical 'AND'. */
export type User_Notes_Bool_Exp = {
  _and?: Maybe<Array<User_Notes_Bool_Exp>>
  _not?: Maybe<User_Notes_Bool_Exp>
  _or?: Maybe<Array<User_Notes_Bool_Exp>>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  note?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "user_notes" */
export enum User_Notes_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserNotePkey = 'user_note_pkey',
}

/** input type for incrementing numeric columns in table "user_notes" */
export type User_Notes_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "user_notes" */
export type User_Notes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  note?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type User_Notes_Max_Fields = {
  __typename?: 'user_notes_max_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  note?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "user_notes" */
export type User_Notes_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  note?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Notes_Min_Fields = {
  __typename?: 'user_notes_min_fields'
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  note?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "user_notes" */
export type User_Notes_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  note?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "user_notes" */
export type User_Notes_Mutation_Response = {
  __typename?: 'user_notes_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Notes>
}

/** on_conflict condition type for table "user_notes" */
export type User_Notes_On_Conflict = {
  constraint: User_Notes_Constraint
  update_columns?: Array<User_Notes_Update_Column>
  where?: Maybe<User_Notes_Bool_Exp>
}

/** Ordering options when selecting data from "user_notes". */
export type User_Notes_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  note?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: user_notes */
export type User_Notes_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "user_notes" */
export enum User_Notes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_notes" */
export type User_Notes_Set_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  note?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type User_Notes_Stddev_Fields = {
  __typename?: 'user_notes_stddev_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user_notes" */
export type User_Notes_Stddev_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Notes_Stddev_Pop_Fields = {
  __typename?: 'user_notes_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user_notes" */
export type User_Notes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Notes_Stddev_Samp_Fields = {
  __typename?: 'user_notes_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user_notes" */
export type User_Notes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "user_notes" */
export type User_Notes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Notes_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type User_Notes_Stream_Cursor_Value_Input = {
  created_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['bigint']>
  note?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type User_Notes_Sum_Fields = {
  __typename?: 'user_notes_sum_fields'
  id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "user_notes" */
export type User_Notes_Sum_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "user_notes" */
export enum User_Notes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Note = 'note',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

export type User_Notes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<User_Notes_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<User_Notes_Set_Input>
  where: User_Notes_Bool_Exp
}

/** aggregate var_pop on columns */
export type User_Notes_Var_Pop_Fields = {
  __typename?: 'user_notes_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user_notes" */
export type User_Notes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Notes_Var_Samp_Fields = {
  __typename?: 'user_notes_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user_notes" */
export type User_Notes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type User_Notes_Variance_Fields = {
  __typename?: 'user_notes_variance_fields'
  id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user_notes" */
export type User_Notes_Variance_Order_By = {
  id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "user_roles" */
export type User_Roles = {
  __typename?: 'user_roles'
  comment?: Maybe<Scalars['String']>
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
  value: Scalars['String']
}

/** aggregated selection of "user_roles" */
export type User_Roles_Aggregate = {
  __typename?: 'user_roles_aggregate'
  aggregate?: Maybe<User_Roles_Aggregate_Fields>
  nodes: Array<User_Roles>
}

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_Fields = {
  __typename?: 'user_roles_aggregate_fields'
  avg?: Maybe<User_Roles_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<User_Roles_Max_Fields>
  min?: Maybe<User_Roles_Min_Fields>
  stddev?: Maybe<User_Roles_Stddev_Fields>
  stddev_pop?: Maybe<User_Roles_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Roles_Stddev_Samp_Fields>
  sum?: Maybe<User_Roles_Sum_Fields>
  var_pop?: Maybe<User_Roles_Var_Pop_Fields>
  var_samp?: Maybe<User_Roles_Var_Samp_Fields>
  variance?: Maybe<User_Roles_Variance_Fields>
}

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Roles_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type User_Roles_Avg_Fields = {
  __typename?: 'user_roles_avg_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "user_roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: Maybe<Array<User_Roles_Bool_Exp>>
  _not?: Maybe<User_Roles_Bool_Exp>
  _or?: Maybe<Array<User_Roles_Bool_Exp>>
  comment?: Maybe<String_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
  value?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "user_roles" */
export enum User_Roles_Constraint {
  /** unique or primary key constraint on columns "user_id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id" */
  UserRolesUserIdKey = 'user_roles_user_id_key',
}

/** input type for incrementing numeric columns in table "user_roles" */
export type User_Roles_Inc_Input = {
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  comment?: Maybe<Scalars['String']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
  value?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  __typename?: 'user_roles_max_fields'
  comment?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
  value?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  __typename?: 'user_roles_min_fields'
  comment?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
  value?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "user_roles" */
export type User_Roles_Mutation_Response = {
  __typename?: 'user_roles_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Roles>
}

/** input type for inserting object relation for remote table "user_roles" */
export type User_Roles_Obj_Rel_Insert_Input = {
  data: User_Roles_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<User_Roles_On_Conflict>
}

/** on_conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint
  update_columns?: Array<User_Roles_Update_Column>
  where?: Maybe<User_Roles_Bool_Exp>
}

/** Ordering options when selecting data from "user_roles". */
export type User_Roles_Order_By = {
  comment?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
  value?: Maybe<Order_By>
}

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  user_id: Scalars['bigint']
}

/** select columns of table "user_roles" */
export enum User_Roles_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Value = 'value',
}

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  comment?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
  value?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type User_Roles_Stddev_Fields = {
  __typename?: 'user_roles_stddev_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type User_Roles_Stddev_Pop_Fields = {
  __typename?: 'user_roles_stddev_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type User_Roles_Stddev_Samp_Fields = {
  __typename?: 'user_roles_stddev_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "user_roles" */
export type User_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Roles_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type User_Roles_Stream_Cursor_Value_Input = {
  comment?: Maybe<Scalars['String']>
  user_id?: Maybe<Scalars['bigint']>
  value?: Maybe<Scalars['String']>
}

/** aggregate sum on columns */
export type User_Roles_Sum_Fields = {
  __typename?: 'user_roles_sum_fields'
  user_id?: Maybe<Scalars['bigint']>
}

/** update columns of table "user_roles" */
export enum User_Roles_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Value = 'value',
}

export type User_Roles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<User_Roles_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<User_Roles_Set_Input>
  where: User_Roles_Bool_Exp
}

/** aggregate var_pop on columns */
export type User_Roles_Var_Pop_Fields = {
  __typename?: 'user_roles_var_pop_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type User_Roles_Var_Samp_Fields = {
  __typename?: 'user_roles_var_samp_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type User_Roles_Variance_Fields = {
  __typename?: 'user_roles_variance_fields'
  user_id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "user_rooms" */
export type User_Rooms = {
  __typename?: 'user_rooms'
  id: Scalars['bigint']
  /** An object relationship */
  room: Rooms
  room_id: Scalars['bigint']
  /** An object relationship */
  user: Users
  user_id: Scalars['bigint']
}

/** aggregated selection of "user_rooms" */
export type User_Rooms_Aggregate = {
  __typename?: 'user_rooms_aggregate'
  aggregate?: Maybe<User_Rooms_Aggregate_Fields>
  nodes: Array<User_Rooms>
}

/** aggregate fields of "user_rooms" */
export type User_Rooms_Aggregate_Fields = {
  __typename?: 'user_rooms_aggregate_fields'
  avg?: Maybe<User_Rooms_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<User_Rooms_Max_Fields>
  min?: Maybe<User_Rooms_Min_Fields>
  stddev?: Maybe<User_Rooms_Stddev_Fields>
  stddev_pop?: Maybe<User_Rooms_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Rooms_Stddev_Samp_Fields>
  sum?: Maybe<User_Rooms_Sum_Fields>
  var_pop?: Maybe<User_Rooms_Var_Pop_Fields>
  var_samp?: Maybe<User_Rooms_Var_Samp_Fields>
  variance?: Maybe<User_Rooms_Variance_Fields>
}

/** aggregate fields of "user_rooms" */
export type User_Rooms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Rooms_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_rooms" */
export type User_Rooms_Aggregate_Order_By = {
  avg?: Maybe<User_Rooms_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<User_Rooms_Max_Order_By>
  min?: Maybe<User_Rooms_Min_Order_By>
  stddev?: Maybe<User_Rooms_Stddev_Order_By>
  stddev_pop?: Maybe<User_Rooms_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<User_Rooms_Stddev_Samp_Order_By>
  sum?: Maybe<User_Rooms_Sum_Order_By>
  var_pop?: Maybe<User_Rooms_Var_Pop_Order_By>
  var_samp?: Maybe<User_Rooms_Var_Samp_Order_By>
  variance?: Maybe<User_Rooms_Variance_Order_By>
}

/** input type for inserting array relation for remote table "user_rooms" */
export type User_Rooms_Arr_Rel_Insert_Input = {
  data: Array<User_Rooms_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<User_Rooms_On_Conflict>
}

/** aggregate avg on columns */
export type User_Rooms_Avg_Fields = {
  __typename?: 'user_rooms_avg_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user_rooms" */
export type User_Rooms_Avg_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "user_rooms". All fields are combined with a logical 'AND'. */
export type User_Rooms_Bool_Exp = {
  _and?: Maybe<Array<User_Rooms_Bool_Exp>>
  _not?: Maybe<User_Rooms_Bool_Exp>
  _or?: Maybe<Array<User_Rooms_Bool_Exp>>
  id?: Maybe<Bigint_Comparison_Exp>
  room?: Maybe<Rooms_Bool_Exp>
  room_id?: Maybe<Bigint_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  user_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "user_rooms" */
export enum User_Rooms_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserRoomsPkey = 'user_rooms_pkey',
}

/** input type for incrementing numeric columns in table "user_rooms" */
export type User_Rooms_Inc_Input = {
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "user_rooms" */
export type User_Rooms_Insert_Input = {
  id?: Maybe<Scalars['bigint']>
  room?: Maybe<Rooms_Obj_Rel_Insert_Input>
  room_id?: Maybe<Scalars['bigint']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type User_Rooms_Max_Fields = {
  __typename?: 'user_rooms_max_fields'
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "user_rooms" */
export type User_Rooms_Max_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Rooms_Min_Fields = {
  __typename?: 'user_rooms_min_fields'
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "user_rooms" */
export type User_Rooms_Min_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** response of any mutation on the table "user_rooms" */
export type User_Rooms_Mutation_Response = {
  __typename?: 'user_rooms_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<User_Rooms>
}

/** on_conflict condition type for table "user_rooms" */
export type User_Rooms_On_Conflict = {
  constraint: User_Rooms_Constraint
  update_columns?: Array<User_Rooms_Update_Column>
  where?: Maybe<User_Rooms_Bool_Exp>
}

/** Ordering options when selecting data from "user_rooms". */
export type User_Rooms_Order_By = {
  id?: Maybe<Order_By>
  room?: Maybe<Rooms_Order_By>
  room_id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  user_id?: Maybe<Order_By>
}

/** primary key columns input for table: user_rooms */
export type User_Rooms_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "user_rooms" */
export enum User_Rooms_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_rooms" */
export type User_Rooms_Set_Input = {
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type User_Rooms_Stddev_Fields = {
  __typename?: 'user_rooms_stddev_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user_rooms" */
export type User_Rooms_Stddev_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Rooms_Stddev_Pop_Fields = {
  __typename?: 'user_rooms_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user_rooms" */
export type User_Rooms_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Rooms_Stddev_Samp_Fields = {
  __typename?: 'user_rooms_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user_rooms" */
export type User_Rooms_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "user_rooms" */
export type User_Rooms_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Rooms_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type User_Rooms_Stream_Cursor_Value_Input = {
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type User_Rooms_Sum_Fields = {
  __typename?: 'user_rooms_sum_fields'
  id?: Maybe<Scalars['bigint']>
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "user_rooms" */
export type User_Rooms_Sum_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** update columns of table "user_rooms" */
export enum User_Rooms_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  RoomId = 'room_id',
  /** column name */
  UserId = 'user_id',
}

export type User_Rooms_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<User_Rooms_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<User_Rooms_Set_Input>
  where: User_Rooms_Bool_Exp
}

/** aggregate var_pop on columns */
export type User_Rooms_Var_Pop_Fields = {
  __typename?: 'user_rooms_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user_rooms" */
export type User_Rooms_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Rooms_Var_Samp_Fields = {
  __typename?: 'user_rooms_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user_rooms" */
export type User_Rooms_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type User_Rooms_Variance_Fields = {
  __typename?: 'user_rooms_variance_fields'
  id?: Maybe<Scalars['Float']>
  room_id?: Maybe<Scalars['Float']>
  user_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user_rooms" */
export type User_Rooms_Variance_Order_By = {
  id?: Maybe<Order_By>
  room_id?: Maybe<Order_By>
  user_id?: Maybe<Order_By>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  alt_id: Scalars['bpchar']
  auto_loaded?: Maybe<Scalars['Boolean']>
  /** An object relationship */
  avatar?: Maybe<Files>
  avatar_file_id?: Maybe<Scalars['bigint']>
  /** An object relationship */
  businessSizeByBusinessSize?: Maybe<Business_Sizes>
  business_name?: Maybe<Scalars['String']>
  business_size: Scalars['String']
  contact_address?: Maybe<Scalars['String']>
  created_at: Scalars['timestamp']
  email: Scalars['String']
  /** An array relationship */
  files: Array<Files>
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate
  firebase_uid: Scalars['String']
  full_name: Scalars['String']
  id: Scalars['bigint']
  is_email_verified?: Maybe<Scalars['Boolean']>
  is_privacy_enabled: Scalars['Boolean']
  last_seen?: Maybe<Scalars['timestamp']>
  /** An array relationship */
  messages: Array<Messages>
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate
  phone?: Maybe<Scalars['String']>
  /** An array relationship */
  posts: Array<Posts>
  /** An aggregate relationship */
  posts_aggregate: Posts_Aggregate
  /** A computed field, executes function "users_public_contact_address" */
  public_contact_address?: Maybe<Scalars['String']>
  /** A computed field, executes function "users_public_phone" */
  public_phone?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at: Scalars['timestamp']
  /** An array relationship */
  user_documents: Array<User_Documents>
  /** An aggregate relationship */
  user_documents_aggregate: User_Documents_Aggregate
  /** An array relationship */
  user_emails: Array<User_Emails>
  /** An aggregate relationship */
  user_emails_aggregate: User_Emails_Aggregate
  /** An array relationship */
  user_notes: Array<User_Notes>
  /** An aggregate relationship */
  user_notes_aggregate: User_Notes_Aggregate
  /** An object relationship */
  user_role?: Maybe<User_Roles>
  /** An array relationship */
  user_rooms: Array<User_Rooms>
  /** An aggregate relationship */
  user_rooms_aggregate: User_Rooms_Aggregate
  /** An object relationship */
  zip_code: Zip_Codes
  zip_code_id: Scalars['bigint']
}

/** columns and relationships of "users" */
export type UsersFilesArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersFiles_AggregateArgs = {
  distinct_on?: Maybe<Array<Files_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Files_Order_By>>
  where?: Maybe<Files_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersMessagesArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersMessages_AggregateArgs = {
  distinct_on?: Maybe<Array<Messages_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Messages_Order_By>>
  where?: Maybe<Messages_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersPostsArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersPosts_AggregateArgs = {
  distinct_on?: Maybe<Array<Posts_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Posts_Order_By>>
  where?: Maybe<Posts_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_DocumentsArgs = {
  distinct_on?: Maybe<Array<User_Documents_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Documents_Order_By>>
  where?: Maybe<User_Documents_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_Documents_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Documents_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Documents_Order_By>>
  where?: Maybe<User_Documents_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_EmailsArgs = {
  distinct_on?: Maybe<Array<User_Emails_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Emails_Order_By>>
  where?: Maybe<User_Emails_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_Emails_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Emails_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Emails_Order_By>>
  where?: Maybe<User_Emails_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_NotesArgs = {
  distinct_on?: Maybe<Array<User_Notes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Notes_Order_By>>
  where?: Maybe<User_Notes_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_Notes_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Notes_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Notes_Order_By>>
  where?: Maybe<User_Notes_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_RoomsArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersUser_Rooms_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Rooms_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Rooms_Order_By>>
  where?: Maybe<User_Rooms_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  avg?: Maybe<Users_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
  stddev?: Maybe<Users_Stddev_Fields>
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>
  sum?: Maybe<Users_Sum_Fields>
  var_pop?: Maybe<Users_Var_Pop_Fields>
  var_samp?: Maybe<Users_Var_Samp_Fields>
  variance?: Maybe<Users_Variance_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Users_Max_Order_By>
  min?: Maybe<Users_Min_Order_By>
  stddev?: Maybe<Users_Stddev_Order_By>
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>
  sum?: Maybe<Users_Sum_Order_By>
  var_pop?: Maybe<Users_Var_Pop_Order_By>
  var_samp?: Maybe<Users_Var_Samp_Order_By>
  variance?: Maybe<Users_Variance_Order_By>
}

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Users_On_Conflict>
}

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Users_Bool_Exp>>
  alt_id?: Maybe<Bpchar_Comparison_Exp>
  auto_loaded?: Maybe<Boolean_Comparison_Exp>
  avatar?: Maybe<Files_Bool_Exp>
  avatar_file_id?: Maybe<Bigint_Comparison_Exp>
  businessSizeByBusinessSize?: Maybe<Business_Sizes_Bool_Exp>
  business_name?: Maybe<String_Comparison_Exp>
  business_size?: Maybe<String_Comparison_Exp>
  contact_address?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  files?: Maybe<Files_Bool_Exp>
  firebase_uid?: Maybe<String_Comparison_Exp>
  full_name?: Maybe<String_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  is_email_verified?: Maybe<Boolean_Comparison_Exp>
  is_privacy_enabled?: Maybe<Boolean_Comparison_Exp>
  last_seen?: Maybe<Timestamp_Comparison_Exp>
  messages?: Maybe<Messages_Bool_Exp>
  phone?: Maybe<String_Comparison_Exp>
  posts?: Maybe<Posts_Bool_Exp>
  public_contact_address?: Maybe<String_Comparison_Exp>
  public_phone?: Maybe<String_Comparison_Exp>
  stripe_customer_id?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  user_documents?: Maybe<User_Documents_Bool_Exp>
  user_emails?: Maybe<User_Emails_Bool_Exp>
  user_notes?: Maybe<User_Notes_Bool_Exp>
  user_role?: Maybe<User_Roles_Bool_Exp>
  user_rooms?: Maybe<User_Rooms_Bool_Exp>
  zip_code?: Maybe<Zip_Codes_Bool_Exp>
  zip_code_id?: Maybe<Bigint_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "firebase_uid" */
  UsersFirebaseUidKey = 'users_firebase_uid_key',
  /** unique or primary key constraint on columns "phone" */
  UsersPhoneKey = 'users_phone_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "alt_id" */
  UsersUserNameKey = 'users_user_name_key',
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  avatar_file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  auto_loaded?: Maybe<Scalars['Boolean']>
  avatar?: Maybe<Files_Obj_Rel_Insert_Input>
  avatar_file_id?: Maybe<Scalars['bigint']>
  businessSizeByBusinessSize?: Maybe<Business_Sizes_Obj_Rel_Insert_Input>
  business_name?: Maybe<Scalars['String']>
  business_size?: Maybe<Scalars['String']>
  contact_address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  files?: Maybe<Files_Arr_Rel_Insert_Input>
  firebase_uid?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_email_verified?: Maybe<Scalars['Boolean']>
  is_privacy_enabled?: Maybe<Scalars['Boolean']>
  last_seen?: Maybe<Scalars['timestamp']>
  messages?: Maybe<Messages_Arr_Rel_Insert_Input>
  phone?: Maybe<Scalars['String']>
  posts?: Maybe<Posts_Arr_Rel_Insert_Input>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  user_documents?: Maybe<User_Documents_Arr_Rel_Insert_Input>
  user_emails?: Maybe<User_Emails_Arr_Rel_Insert_Input>
  user_notes?: Maybe<User_Notes_Arr_Rel_Insert_Input>
  user_role?: Maybe<User_Roles_Obj_Rel_Insert_Input>
  user_rooms?: Maybe<User_Rooms_Arr_Rel_Insert_Input>
  zip_code?: Maybe<Zip_Codes_Obj_Rel_Insert_Input>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  alt_id?: Maybe<Scalars['bpchar']>
  avatar_file_id?: Maybe<Scalars['bigint']>
  business_name?: Maybe<Scalars['String']>
  business_size?: Maybe<Scalars['String']>
  contact_address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  firebase_uid?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  last_seen?: Maybe<Scalars['timestamp']>
  phone?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  alt_id?: Maybe<Order_By>
  avatar_file_id?: Maybe<Order_By>
  business_name?: Maybe<Order_By>
  business_size?: Maybe<Order_By>
  contact_address?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  firebase_uid?: Maybe<Order_By>
  full_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_seen?: Maybe<Order_By>
  phone?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  alt_id?: Maybe<Scalars['bpchar']>
  avatar_file_id?: Maybe<Scalars['bigint']>
  business_name?: Maybe<Scalars['String']>
  business_size?: Maybe<Scalars['String']>
  contact_address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  firebase_uid?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  last_seen?: Maybe<Scalars['timestamp']>
  phone?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  alt_id?: Maybe<Order_By>
  avatar_file_id?: Maybe<Order_By>
  business_name?: Maybe<Order_By>
  business_size?: Maybe<Order_By>
  contact_address?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  firebase_uid?: Maybe<Order_By>
  full_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  last_seen?: Maybe<Order_By>
  phone?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Users_On_Conflict>
}

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns?: Array<Users_Update_Column>
  where?: Maybe<Users_Bool_Exp>
}

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  alt_id?: Maybe<Order_By>
  auto_loaded?: Maybe<Order_By>
  avatar?: Maybe<Files_Order_By>
  avatar_file_id?: Maybe<Order_By>
  businessSizeByBusinessSize?: Maybe<Business_Sizes_Order_By>
  business_name?: Maybe<Order_By>
  business_size?: Maybe<Order_By>
  contact_address?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  files_aggregate?: Maybe<Files_Aggregate_Order_By>
  firebase_uid?: Maybe<Order_By>
  full_name?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_email_verified?: Maybe<Order_By>
  is_privacy_enabled?: Maybe<Order_By>
  last_seen?: Maybe<Order_By>
  messages_aggregate?: Maybe<Messages_Aggregate_Order_By>
  phone?: Maybe<Order_By>
  posts_aggregate?: Maybe<Posts_Aggregate_Order_By>
  public_contact_address?: Maybe<Order_By>
  public_phone?: Maybe<Order_By>
  stripe_customer_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user_documents_aggregate?: Maybe<User_Documents_Aggregate_Order_By>
  user_emails_aggregate?: Maybe<User_Emails_Aggregate_Order_By>
  user_notes_aggregate?: Maybe<User_Notes_Aggregate_Order_By>
  user_role?: Maybe<User_Roles_Order_By>
  user_rooms_aggregate?: Maybe<User_Rooms_Aggregate_Order_By>
  zip_code?: Maybe<Zip_Codes_Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AltId = 'alt_id',
  /** column name */
  AutoLoaded = 'auto_loaded',
  /** column name */
  AvatarFileId = 'avatar_file_id',
  /** column name */
  BusinessName = 'business_name',
  /** column name */
  BusinessSize = 'business_size',
  /** column name */
  ContactAddress = 'contact_address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseUid = 'firebase_uid',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsEmailVerified = 'is_email_verified',
  /** column name */
  IsPrivacyEnabled = 'is_privacy_enabled',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Phone = 'phone',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCodeId = 'zip_code_id',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  auto_loaded?: Maybe<Scalars['Boolean']>
  avatar_file_id?: Maybe<Scalars['bigint']>
  business_name?: Maybe<Scalars['String']>
  business_size?: Maybe<Scalars['String']>
  contact_address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  firebase_uid?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_email_verified?: Maybe<Scalars['Boolean']>
  is_privacy_enabled?: Maybe<Scalars['Boolean']>
  last_seen?: Maybe<Scalars['timestamp']>
  phone?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  alt_id?: Maybe<Scalars['bpchar']>
  auto_loaded?: Maybe<Scalars['Boolean']>
  avatar_file_id?: Maybe<Scalars['bigint']>
  business_name?: Maybe<Scalars['String']>
  business_size?: Maybe<Scalars['String']>
  contact_address?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  firebase_uid?: Maybe<Scalars['String']>
  full_name?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['bigint']>
  is_email_verified?: Maybe<Scalars['Boolean']>
  is_privacy_enabled?: Maybe<Scalars['Boolean']>
  last_seen?: Maybe<Scalars['timestamp']>
  phone?: Maybe<Scalars['String']>
  stripe_customer_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields'
  avatar_file_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  zip_code_id?: Maybe<Scalars['bigint']>
}

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AltId = 'alt_id',
  /** column name */
  AutoLoaded = 'auto_loaded',
  /** column name */
  AvatarFileId = 'avatar_file_id',
  /** column name */
  BusinessName = 'business_name',
  /** column name */
  BusinessSize = 'business_size',
  /** column name */
  ContactAddress = 'contact_address',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FirebaseUid = 'firebase_uid',
  /** column name */
  FullName = 'full_name',
  /** column name */
  Id = 'id',
  /** column name */
  IsEmailVerified = 'is_email_verified',
  /** column name */
  IsPrivacyEnabled = 'is_privacy_enabled',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  Phone = 'phone',
  /** column name */
  StripeCustomerId = 'stripe_customer_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCodeId = 'zip_code_id',
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Users_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields'
  avatar_file_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  zip_code_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  avatar_file_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  zip_code_id?: Maybe<Order_By>
}

/** columns and relationships of "warning_messages" */
export type Warning_Messages = {
  __typename?: 'warning_messages'
  id: Scalars['smallint']
  name: Scalars['String']
  /** An array relationship */
  promotions: Array<Promotions>
  /** An aggregate relationship */
  promotions_aggregate: Promotions_Aggregate
}

/** columns and relationships of "warning_messages" */
export type Warning_MessagesPromotionsArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

/** columns and relationships of "warning_messages" */
export type Warning_MessagesPromotions_AggregateArgs = {
  distinct_on?: Maybe<Array<Promotions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Promotions_Order_By>>
  where?: Maybe<Promotions_Bool_Exp>
}

/** aggregated selection of "warning_messages" */
export type Warning_Messages_Aggregate = {
  __typename?: 'warning_messages_aggregate'
  aggregate?: Maybe<Warning_Messages_Aggregate_Fields>
  nodes: Array<Warning_Messages>
}

/** aggregate fields of "warning_messages" */
export type Warning_Messages_Aggregate_Fields = {
  __typename?: 'warning_messages_aggregate_fields'
  avg?: Maybe<Warning_Messages_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Warning_Messages_Max_Fields>
  min?: Maybe<Warning_Messages_Min_Fields>
  stddev?: Maybe<Warning_Messages_Stddev_Fields>
  stddev_pop?: Maybe<Warning_Messages_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Warning_Messages_Stddev_Samp_Fields>
  sum?: Maybe<Warning_Messages_Sum_Fields>
  var_pop?: Maybe<Warning_Messages_Var_Pop_Fields>
  var_samp?: Maybe<Warning_Messages_Var_Samp_Fields>
  variance?: Maybe<Warning_Messages_Variance_Fields>
}

/** aggregate fields of "warning_messages" */
export type Warning_Messages_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Warning_Messages_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Warning_Messages_Avg_Fields = {
  __typename?: 'warning_messages_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "warning_messages". All fields are combined with a logical 'AND'. */
export type Warning_Messages_Bool_Exp = {
  _and?: Maybe<Array<Warning_Messages_Bool_Exp>>
  _not?: Maybe<Warning_Messages_Bool_Exp>
  _or?: Maybe<Array<Warning_Messages_Bool_Exp>>
  id?: Maybe<Smallint_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  promotions?: Maybe<Promotions_Bool_Exp>
}

/** unique or primary key constraints on table "warning_messages" */
export enum Warning_Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  WarningMessagesPkey = 'warning_messages_pkey',
}

/** input type for incrementing numeric columns in table "warning_messages" */
export type Warning_Messages_Inc_Input = {
  id?: Maybe<Scalars['smallint']>
}

/** input type for inserting data into table "warning_messages" */
export type Warning_Messages_Insert_Input = {
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
  promotions?: Maybe<Promotions_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Warning_Messages_Max_Fields = {
  __typename?: 'warning_messages_max_fields'
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Warning_Messages_Min_Fields = {
  __typename?: 'warning_messages_min_fields'
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "warning_messages" */
export type Warning_Messages_Mutation_Response = {
  __typename?: 'warning_messages_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Warning_Messages>
}

/** input type for inserting object relation for remote table "warning_messages" */
export type Warning_Messages_Obj_Rel_Insert_Input = {
  data: Warning_Messages_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Warning_Messages_On_Conflict>
}

/** on_conflict condition type for table "warning_messages" */
export type Warning_Messages_On_Conflict = {
  constraint: Warning_Messages_Constraint
  update_columns?: Array<Warning_Messages_Update_Column>
  where?: Maybe<Warning_Messages_Bool_Exp>
}

/** Ordering options when selecting data from "warning_messages". */
export type Warning_Messages_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  promotions_aggregate?: Maybe<Promotions_Aggregate_Order_By>
}

/** primary key columns input for table: warning_messages */
export type Warning_Messages_Pk_Columns_Input = {
  id: Scalars['smallint']
}

/** select columns of table "warning_messages" */
export enum Warning_Messages_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "warning_messages" */
export type Warning_Messages_Set_Input = {
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Warning_Messages_Stddev_Fields = {
  __typename?: 'warning_messages_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Warning_Messages_Stddev_Pop_Fields = {
  __typename?: 'warning_messages_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Warning_Messages_Stddev_Samp_Fields = {
  __typename?: 'warning_messages_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "warning_messages" */
export type Warning_Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Warning_Messages_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Warning_Messages_Stream_Cursor_Value_Input = {
  id?: Maybe<Scalars['smallint']>
  name?: Maybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Warning_Messages_Sum_Fields = {
  __typename?: 'warning_messages_sum_fields'
  id?: Maybe<Scalars['smallint']>
}

/** update columns of table "warning_messages" */
export enum Warning_Messages_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

export type Warning_Messages_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Warning_Messages_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Warning_Messages_Set_Input>
  where: Warning_Messages_Bool_Exp
}

/** aggregate var_pop on columns */
export type Warning_Messages_Var_Pop_Fields = {
  __typename?: 'warning_messages_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Warning_Messages_Var_Samp_Fields = {
  __typename?: 'warning_messages_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Warning_Messages_Variance_Fields = {
  __typename?: 'warning_messages_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** columns and relationships of "zip_codes" */
export type Zip_Codes = {
  __typename?: 'zip_codes'
  /** An object relationship */
  city: Cities
  city_id: Scalars['bigint']
  created_at: Scalars['timestamptz']
  geom?: Maybe<Scalars['geometry']>
  id: Scalars['bigint']
  latitude: Scalars['numeric']
  longitude: Scalars['numeric']
  updated_at: Scalars['timestamptz']
  /** An array relationship */
  users: Array<Users>
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate
  zip_code: Scalars['String']
}

/** columns and relationships of "zip_codes" */
export type Zip_CodesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "zip_codes" */
export type Zip_CodesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** aggregated selection of "zip_codes" */
export type Zip_Codes_Aggregate = {
  __typename?: 'zip_codes_aggregate'
  aggregate?: Maybe<Zip_Codes_Aggregate_Fields>
  nodes: Array<Zip_Codes>
}

/** aggregate fields of "zip_codes" */
export type Zip_Codes_Aggregate_Fields = {
  __typename?: 'zip_codes_aggregate_fields'
  avg?: Maybe<Zip_Codes_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Zip_Codes_Max_Fields>
  min?: Maybe<Zip_Codes_Min_Fields>
  stddev?: Maybe<Zip_Codes_Stddev_Fields>
  stddev_pop?: Maybe<Zip_Codes_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Zip_Codes_Stddev_Samp_Fields>
  sum?: Maybe<Zip_Codes_Sum_Fields>
  var_pop?: Maybe<Zip_Codes_Var_Pop_Fields>
  var_samp?: Maybe<Zip_Codes_Var_Samp_Fields>
  variance?: Maybe<Zip_Codes_Variance_Fields>
}

/** aggregate fields of "zip_codes" */
export type Zip_Codes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Zip_Codes_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "zip_codes" */
export type Zip_Codes_Aggregate_Order_By = {
  avg?: Maybe<Zip_Codes_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Zip_Codes_Max_Order_By>
  min?: Maybe<Zip_Codes_Min_Order_By>
  stddev?: Maybe<Zip_Codes_Stddev_Order_By>
  stddev_pop?: Maybe<Zip_Codes_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Zip_Codes_Stddev_Samp_Order_By>
  sum?: Maybe<Zip_Codes_Sum_Order_By>
  var_pop?: Maybe<Zip_Codes_Var_Pop_Order_By>
  var_samp?: Maybe<Zip_Codes_Var_Samp_Order_By>
  variance?: Maybe<Zip_Codes_Variance_Order_By>
}

/** input type for inserting array relation for remote table "zip_codes" */
export type Zip_Codes_Arr_Rel_Insert_Input = {
  data: Array<Zip_Codes_Insert_Input>
  /** upsert condition */
  on_conflict?: Maybe<Zip_Codes_On_Conflict>
}

/** aggregate avg on columns */
export type Zip_Codes_Avg_Fields = {
  __typename?: 'zip_codes_avg_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "zip_codes" */
export type Zip_Codes_Avg_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "zip_codes". All fields are combined with a logical 'AND'. */
export type Zip_Codes_Bool_Exp = {
  _and?: Maybe<Array<Zip_Codes_Bool_Exp>>
  _not?: Maybe<Zip_Codes_Bool_Exp>
  _or?: Maybe<Array<Zip_Codes_Bool_Exp>>
  city?: Maybe<Cities_Bool_Exp>
  city_id?: Maybe<Bigint_Comparison_Exp>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  geom?: Maybe<Geometry_Comparison_Exp>
  id?: Maybe<Bigint_Comparison_Exp>
  latitude?: Maybe<Numeric_Comparison_Exp>
  longitude?: Maybe<Numeric_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  users?: Maybe<Users_Bool_Exp>
  zip_code?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "zip_codes" */
export enum Zip_Codes_Constraint {
  /** unique or primary key constraint on columns "id" */
  ZipCodesPkey = 'zip_codes_pkey',
}

/** input type for incrementing numeric columns in table "zip_codes" */
export type Zip_Codes_Inc_Input = {
  city_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
}

/** input type for inserting data into table "zip_codes" */
export type Zip_Codes_Insert_Input = {
  city?: Maybe<Cities_Obj_Rel_Insert_Input>
  city_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamptz']>
  geom?: Maybe<Scalars['geometry']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamptz']>
  users?: Maybe<Users_Arr_Rel_Insert_Input>
  zip_code?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Zip_Codes_Max_Fields = {
  __typename?: 'zip_codes_max_fields'
  city_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamptz']>
  zip_code?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "zip_codes" */
export type Zip_Codes_Max_Order_By = {
  city_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  zip_code?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Zip_Codes_Min_Fields = {
  __typename?: 'zip_codes_min_fields'
  city_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamptz']>
  zip_code?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "zip_codes" */
export type Zip_Codes_Min_Order_By = {
  city_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  zip_code?: Maybe<Order_By>
}

/** response of any mutation on the table "zip_codes" */
export type Zip_Codes_Mutation_Response = {
  __typename?: 'zip_codes_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Array<Zip_Codes>
}

/** input type for inserting object relation for remote table "zip_codes" */
export type Zip_Codes_Obj_Rel_Insert_Input = {
  data: Zip_Codes_Insert_Input
  /** upsert condition */
  on_conflict?: Maybe<Zip_Codes_On_Conflict>
}

/** on_conflict condition type for table "zip_codes" */
export type Zip_Codes_On_Conflict = {
  constraint: Zip_Codes_Constraint
  update_columns?: Array<Zip_Codes_Update_Column>
  where?: Maybe<Zip_Codes_Bool_Exp>
}

/** Ordering options when selecting data from "zip_codes". */
export type Zip_Codes_Order_By = {
  city?: Maybe<Cities_Order_By>
  city_id?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  geom?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_Aggregate_Order_By>
  zip_code?: Maybe<Order_By>
}

/** primary key columns input for table: zip_codes */
export type Zip_Codes_Pk_Columns_Input = {
  id: Scalars['bigint']
}

/** select columns of table "zip_codes" */
export enum Zip_Codes_Select_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCode = 'zip_code',
}

/** input type for updating data in table "zip_codes" */
export type Zip_Codes_Set_Input = {
  city_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamptz']>
  geom?: Maybe<Scalars['geometry']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamptz']>
  zip_code?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Zip_Codes_Stddev_Fields = {
  __typename?: 'zip_codes_stddev_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "zip_codes" */
export type Zip_Codes_Stddev_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Zip_Codes_Stddev_Pop_Fields = {
  __typename?: 'zip_codes_stddev_pop_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "zip_codes" */
export type Zip_Codes_Stddev_Pop_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Zip_Codes_Stddev_Samp_Fields = {
  __typename?: 'zip_codes_stddev_samp_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "zip_codes" */
export type Zip_Codes_Stddev_Samp_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** Streaming cursor of the table "zip_codes" */
export type Zip_Codes_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Zip_Codes_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: Maybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Zip_Codes_Stream_Cursor_Value_Input = {
  city_id?: Maybe<Scalars['bigint']>
  created_at?: Maybe<Scalars['timestamptz']>
  geom?: Maybe<Scalars['geometry']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
  updated_at?: Maybe<Scalars['timestamptz']>
  zip_code?: Maybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Zip_Codes_Sum_Fields = {
  __typename?: 'zip_codes_sum_fields'
  city_id?: Maybe<Scalars['bigint']>
  id?: Maybe<Scalars['bigint']>
  latitude?: Maybe<Scalars['numeric']>
  longitude?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "zip_codes" */
export type Zip_Codes_Sum_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** update columns of table "zip_codes" */
export enum Zip_Codes_Update_Column {
  /** column name */
  CityId = 'city_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Geom = 'geom',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Longitude = 'longitude',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  ZipCode = 'zip_code',
}

export type Zip_Codes_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: Maybe<Zip_Codes_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: Maybe<Zip_Codes_Set_Input>
  where: Zip_Codes_Bool_Exp
}

/** aggregate var_pop on columns */
export type Zip_Codes_Var_Pop_Fields = {
  __typename?: 'zip_codes_var_pop_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "zip_codes" */
export type Zip_Codes_Var_Pop_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Zip_Codes_Var_Samp_Fields = {
  __typename?: 'zip_codes_var_samp_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "zip_codes" */
export type Zip_Codes_Var_Samp_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Zip_Codes_Variance_Fields = {
  __typename?: 'zip_codes_variance_fields'
  city_id?: Maybe<Scalars['Float']>
  id?: Maybe<Scalars['Float']>
  latitude?: Maybe<Scalars['Float']>
  longitude?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "zip_codes" */
export type Zip_Codes_Variance_Order_By = {
  city_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  latitude?: Maybe<Order_By>
  longitude?: Maybe<Order_By>
}

export type PostCard__UpdatePostMutationVariables = Exact<{
  post_id: Scalars['bigint']
  promotion_status: Scalars['smallint']
}>

export type PostCard__UpdatePostMutation = {
  __typename?: 'mutation_root'
  update_posts?: Maybe<{
    __typename?: 'posts_mutation_response'
    affected_rows: number
    returning: Array<{ __typename?: 'posts'; id: any }>
  }>
}

export type PostCard__DeletePostMutationVariables = Exact<{
  post_id: Scalars['bigint']
}>

export type PostCard__DeletePostMutation = {
  __typename?: 'mutation_root'
  delete_post_attachments?: Maybe<{
    __typename?: 'post_attachments_mutation_response'
    affected_rows: number
    returning: Array<{ __typename?: 'post_attachments'; post_id: any }>
  }>
  delete_post_attributes?: Maybe<{
    __typename?: 'post_attributes_mutation_response'
    affected_rows: number
    returning: Array<{ __typename?: 'post_attributes'; post_id: any }>
  }>
  delete_payments?: Maybe<{
    __typename?: 'payments_mutation_response'
    affected_rows: number
    returning: Array<{ __typename?: 'payments'; post_id?: Maybe<any> }>
  }>
  delete_all_posts?: Maybe<{
    __typename?: 'all_posts_mutation_response'
    affected_rows: number
    returning: Array<{ __typename?: 'all_posts'; post_id: any }>
  }>
  delete_posts?: Maybe<{
    __typename?: 'posts_mutation_response'
    affected_rows: number
    returning: Array<{ __typename?: 'posts'; id: any }>
  }>
}

export type CategoryFinder__SearchCategoriesQueryVariables = Exact<{
  term: Scalars['String']
}>

export type CategoryFinder__SearchCategoriesQuery = {
  __typename?: 'query_root'
  category_finder: Array<{
    __typename?: 'category_list'
    category_id?: Maybe<any>
    category_name?: Maybe<string>
    sub_category_id?: Maybe<any>
    sub_category_name?: Maybe<string>
    values?: Maybe<any>
  }>
}

export type GetRoomsListQueryVariables = Exact<{
  user_id?: Maybe<Scalars['bigint']>
}>

export type GetRoomsListQuery = {
  __typename?: 'query_root'
  rooms: Array<{
    __typename?: 'rooms'
    id: any
    user_rooms: Array<{
      __typename?: 'user_rooms'
      user: {
        __typename?: 'users'
        email: string
        full_name: string
        business_name?: Maybe<string>
        is_privacy_enabled: boolean
        id: any
        alt_id: any
        avatar?: Maybe<{ __typename?: 'files'; url: string }>
      }
      room: {
        __typename?: 'rooms'
        id: any
        messages: Array<{
          __typename?: 'messages'
          created_at?: Maybe<any>
          is_read?: Maybe<boolean>
          content?: Maybe<string>
          id: any
          user: { __typename?: 'users'; id: any }
        }>
        messages_aggregate: {
          __typename?: 'messages_aggregate'
          aggregate?: Maybe<{
            __typename?: 'messages_aggregate_fields'
            count: number
          }>
        }
      }
    }>
  }>
}

export type GetRoomForUserQueryVariables = Exact<{
  my_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}>

export type GetRoomForUserQuery = {
  __typename?: 'query_root'
  rooms: Array<{
    __typename?: 'rooms'
    id: any
    user_rooms: Array<{
      __typename?: 'user_rooms'
      user: {
        __typename?: 'users'
        email: string
        full_name: string
        business_name?: Maybe<string>
        is_privacy_enabled: boolean
        avatar?: Maybe<{ __typename?: 'files'; url: string }>
      }
      room: {
        __typename?: 'rooms'
        id: any
        messages: Array<{
          __typename?: 'messages'
          created_at?: Maybe<any>
          content?: Maybe<string>
          is_read?: Maybe<boolean>
          id: any
          user: { __typename?: 'users'; id: any }
        }>
      }
    }>
  }>
}

export type GetUserQueryVariables = Exact<{
  user_id: Scalars['bigint']
}>

export type GetUserQuery = {
  __typename?: 'query_root'
  users_by_pk?: Maybe<{
    __typename?: 'users'
    full_name: string
    business_name?: Maybe<string>
    is_privacy_enabled: boolean
    avatar?: Maybe<{ __typename?: 'files'; url: string }>
    posts: Array<{
      __typename?: 'posts'
      price_range?: Maybe<any>
      promotion_status?: Maybe<any>
      years_of_experience?: Maybe<any>
      sub_category: {
        __typename?: 'sub_categories'
        id: any
        name: string
        category?: Maybe<{ __typename?: 'categories'; id: any; name: string }>
      }
    }>
    zip_code: {
      __typename?: 'zip_codes'
      zip_code: string
      city: {
        __typename?: 'cities'
        name: string
        id: any
        alt_id: any
        state_code: string
      }
    }
  }>
}

export type GetAltUserQueryVariables = Exact<{
  user_id: Scalars['bpchar']
}>

export type GetAltUserQuery = {
  __typename?: 'query_root'
  users: Array<{ __typename?: 'users'; id: any }>
}

export type GetMessagesForRoomSubscriptionVariables = Exact<{
  room_id?: Maybe<Scalars['bigint']>
}>

export type GetMessagesForRoomSubscription = {
  __typename?: 'subscription_root'
  messages: Array<{
    __typename?: 'messages'
    id: any
    alt_id: any
    content?: Maybe<string>
    is_file?: Maybe<boolean>
    created_at?: Maybe<any>
    user: { __typename?: 'users'; id: any; alt_id: any }
    file?: Maybe<{
      __typename?: 'files'
      name?: Maybe<string>
      url: string
      type?: Maybe<string>
    }>
  }>
}

export type SendMessageMutationVariables = Exact<{
  room_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
  file_id?: Maybe<Scalars['bigint']>
  content?: Maybe<Scalars['String']>
  is_file?: Maybe<Scalars['Boolean']>
}>

export type SendMessageMutation = {
  __typename?: 'mutation_root'
  insert_messages?: Maybe<{
    __typename?: 'messages_mutation_response'
    returning: Array<{
      __typename?: 'messages'
      id: any
      content?: Maybe<string>
      is_file?: Maybe<boolean>
      created_at?: Maybe<any>
      file?: Maybe<{ __typename?: 'files'; name?: Maybe<string>; url: string }>
      user: { __typename?: 'users'; id: any; alt_id: any }
    }>
  }>
}

export type CreateRoomForUserMutationVariables = Exact<{
  my_id?: Maybe<Scalars['bigint']>
  user_id?: Maybe<Scalars['bigint']>
}>

export type CreateRoomForUserMutation = {
  __typename?: 'mutation_root'
  insert_rooms?: Maybe<{
    __typename?: 'rooms_mutation_response'
    returning: Array<{
      __typename?: 'rooms'
      id: any
      user_rooms: Array<{
        __typename?: 'user_rooms'
        user: {
          __typename?: 'users'
          email: string
          full_name: string
          business_name?: Maybe<string>
          is_privacy_enabled: boolean
          avatar?: Maybe<{ __typename?: 'files'; url: string }>
        }
        room: {
          __typename?: 'rooms'
          id: any
          messages: Array<{
            __typename?: 'messages'
            created_at?: Maybe<any>
            content?: Maybe<string>
            is_read?: Maybe<boolean>
            id: any
            user: { __typename?: 'users'; id: any }
          }>
        }
      }>
    }>
  }>
}

export type UpdateMessageMutationVariables = Exact<{
  message_id: Scalars['bigint']
  is_read?: Maybe<Scalars['Boolean']>
}>

export type UpdateMessageMutation = {
  __typename?: 'mutation_root'
  update_messages?: Maybe<{
    __typename?: 'messages_mutation_response'
    affected_rows: number
    returning: Array<{ __typename?: 'messages'; id: any }>
  }>
}

export type UpdateMessagesMutationVariables = Exact<{
  user_id: Scalars['bigint']
  is_read?: Maybe<Scalars['Boolean']>
}>

export type UpdateMessagesMutation = {
  __typename?: 'mutation_root'
  update_messages?: Maybe<{
    __typename?: 'messages_mutation_response'
    affected_rows: number
    returning: Array<{ __typename?: 'messages'; is_read?: Maybe<boolean> }>
  }>
}

export type CityChooser__SearchCitiesQueryVariables = Exact<{
  term: Scalars['String']
}>

export type CityChooser__SearchCitiesQuery = {
  __typename?: 'query_root'
  zip_codes: Array<{
    __typename?: 'zip_codes'
    id: any
    zip_code: string
    latitude: any
    longitude: any
    city: {
      __typename?: 'cities'
      id: any
      name: string
      state_code: string
      country_code: string
      alt_id: any
    }
  }>
}

export type UserOnlineSubscriptionVariables = Exact<{
  id: Scalars['bigint']
}>

export type UserOnlineSubscription = {
  __typename?: 'subscription_root'
  users_by_pk?: Maybe<{ __typename?: 'users'; last_seen?: Maybe<any> }>
}

export type PostEdit__PreviousPostsCountQueryVariables = Exact<{
  user_id: Scalars['bigint']
}>

export type PostEdit__PreviousPostsCountQuery = {
  __typename?: 'query_root'
  posts_aggregate: {
    __typename?: 'posts_aggregate'
    aggregate?: Maybe<{ __typename?: 'posts_aggregate_fields'; count: number }>
  }
}

export type PostEdit__GetPostsubcategoriesQueryVariables = Exact<{
  selected_sub_category_id?: Maybe<Scalars['Int']>
  user_id?: Maybe<Scalars['Int']>
}>

export type PostEdit__GetPostsubcategoriesQuery = {
  __typename?: 'query_root'
  get_postsubcategories: Array<{ __typename?: 'posts'; sub_category_id: any }>
}

export type PostEdit__UpdatePostWithAttributesMutationVariables = Exact<{
  post_id: Scalars['bigint']
  sub_category_id: Scalars['bigint']
  title: Scalars['String']
  detail: Scalars['String']
  price_range: Scalars['_int4']
  price_description?: Maybe<Scalars['String']>
  post_attachments:
    | Array<Post_Attachments_Insert_Input>
    | Post_Attachments_Insert_Input
  years_of_experience?: Maybe<Scalars['smallint']>
  post_attributes:
    | Array<Post_Attributes_Insert_Input>
    | Post_Attributes_Insert_Input
}>

export type PostEdit__UpdatePostWithAttributesMutation = {
  __typename?: 'mutation_root'
  delete_post_attachments?: Maybe<{
    __typename?: 'post_attachments_mutation_response'
    affected_rows: number
  }>
  insert_post_attachments?: Maybe<{
    __typename?: 'post_attachments_mutation_response'
    affected_rows: number
  }>
  delete_post_attributes?: Maybe<{
    __typename?: 'post_attributes_mutation_response'
    affected_rows: number
  }>
  insert_post_attributes?: Maybe<{
    __typename?: 'post_attributes_mutation_response'
    affected_rows: number
  }>
  update_posts?: Maybe<{
    __typename?: 'posts_mutation_response'
    returning: Array<{
      __typename?: 'posts'
      id: any
      alt_id: any
      title: string
    }>
  }>
}

export type PostEdit__UpdatePostWithoutAttributesMutationVariables = Exact<{
  post_id: Scalars['bigint']
  sub_category_id: Scalars['bigint']
  title: Scalars['String']
  detail: Scalars['String']
  price_range: Scalars['_int4']
  price_description?: Maybe<Scalars['String']>
  post_attachments:
    | Array<Post_Attachments_Insert_Input>
    | Post_Attachments_Insert_Input
  years_of_experience?: Maybe<Scalars['smallint']>
}>

export type PostEdit__UpdatePostWithoutAttributesMutation = {
  __typename?: 'mutation_root'
  delete_post_attachments?: Maybe<{
    __typename?: 'post_attachments_mutation_response'
    affected_rows: number
  }>
  insert_post_attachments?: Maybe<{
    __typename?: 'post_attachments_mutation_response'
    affected_rows: number
  }>
  delete_post_attributes?: Maybe<{
    __typename?: 'post_attributes_mutation_response'
    affected_rows: number
  }>
  update_posts?: Maybe<{
    __typename?: 'posts_mutation_response'
    returning: Array<{
      __typename?: 'posts'
      id: any
      alt_id: any
      title: string
    }>
  }>
}

export type PostDelete__DeletePostMutationVariables = Exact<{
  post_id: Scalars['bigint']
}>

export type PostDelete__DeletePostMutation = {
  __typename?: 'mutation_root'
  delete_post_attachments?: Maybe<{
    __typename?: 'post_attachments_mutation_response'
    affected_rows: number
  }>
  delete_post_attributes?: Maybe<{
    __typename?: 'post_attributes_mutation_response'
    affected_rows: number
  }>
  delete_payments?: Maybe<{
    __typename?: 'payments_mutation_response'
    affected_rows: number
  }>
  delete_posts?: Maybe<{
    __typename?: 'posts_mutation_response'
    affected_rows: number
  }>
}

export type PostEdit__GetStripeCustomerPortalLinkMutationVariables = Exact<{
  post_id: Scalars['bigint']
  updated_post_is_local: Scalars['Boolean']
}>

export type PostEdit__GetStripeCustomerPortalLinkMutation = {
  __typename?: 'mutation_root'
  checkout_or_manage_post_payment: {
    __typename?: 'CheckoutOrManagePostPaymentOutput'
    url: string
  }
}

export type PostNew__PreviousPostsCountQueryVariables = Exact<{
  user_id: Scalars['bigint']
}>

export type PostNew__PreviousPostsCountQuery = {
  __typename?: 'query_root'
  posts_aggregate: {
    __typename?: 'posts_aggregate'
    aggregate?: Maybe<{ __typename?: 'posts_aggregate_fields'; count: number }>
  }
}

export type PostNew__PreviousPostsQueryVariables = Exact<{
  user_id: Scalars['bigint']
}>

export type PostNew__PreviousPostsQuery = {
  __typename?: 'query_root'
  posts: Array<{
    __typename?: 'posts'
    id: any
    title: string
    sub_category_id: any
  }>
}

export type PostNew__InsertPostMutationVariables = Exact<{
  sub_category_id: Scalars['bigint']
  title: Scalars['String']
  detail: Scalars['String']
  price_range: Scalars['_int4']
  price_description?: Maybe<Scalars['String']>
  years_of_experience?: Maybe<Scalars['smallint']>
  promotion_status?: Maybe<Scalars['smallint']>
  post_attachments:
    | Array<Post_Attachments_Insert_Input>
    | Post_Attachments_Insert_Input
}>

export type PostNew__InsertPostMutation = {
  __typename?: 'mutation_root'
  insert_posts?: Maybe<{
    __typename?: 'posts_mutation_response'
    returning: Array<{
      __typename?: 'posts'
      id: any
      alt_id: any
      title: string
    }>
  }>
}

export type PostNew__InsertPostAttributeMutationVariables = Exact<{
  sub_category_id: Scalars['bigint']
  title: Scalars['String']
  detail: Scalars['String']
  price_range: Scalars['_int4']
  price_description?: Maybe<Scalars['String']>
  years_of_experience?: Maybe<Scalars['smallint']>
  promotion_status?: Maybe<Scalars['smallint']>
  post_attachments:
    | Array<Post_Attachments_Insert_Input>
    | Post_Attachments_Insert_Input
  post_attribute: Post_Attributes_Insert_Input
}>

export type PostNew__InsertPostAttributeMutation = {
  __typename?: 'mutation_root'
  insert_posts?: Maybe<{
    __typename?: 'posts_mutation_response'
    returning: Array<{
      __typename?: 'posts'
      id: any
      alt_id: any
      title: string
    }>
  }>
}

export type PostNew__GetStripeCustomerPortalLinkMutationVariables = Exact<{
  post_id: Scalars['bigint']
  updated_post_is_local: Scalars['Boolean']
}>

export type PostNew__GetStripeCustomerPortalLinkMutation = {
  __typename?: 'mutation_root'
  checkout_or_manage_post_payment: {
    __typename?: 'CheckoutOrManagePostPaymentOutput'
    url: string
  }
}

export type BusinessSizesGqlQueryVariables = Exact<{
  businessSize?: Maybe<Scalars['String']>
}>

export type BusinessSizesGqlQuery = {
  __typename?: 'query_root'
  promotions: Array<{
    __typename?: 'promotions'
    name: string
    price: any
    type: string
  }>
}

export type CancelPaypalSubscriptionGqlMutationVariables = Exact<{
  sub_id: Scalars['String']
  post_id: Scalars['Int']
}>

export type CancelPaypalSubscriptionGqlMutation = {
  __typename?: 'mutation_root'
  cancel_paypal_subscription: string
}

export type CancelStripeSubscriptionGqlMutationVariables = Exact<{
  sub_id: Scalars['String']
  post_id: Scalars['Int']
}>

export type CancelStripeSubscriptionGqlMutation = {
  __typename?: 'mutation_root'
  cancel_stripe_subscription: string
}

export type SettingsAccount__UpdateAccountMutationVariables = Exact<{
  user_id: Scalars['bigint']
  _set: Users_Set_Input
}>

export type SettingsAccount__UpdateAccountMutation = {
  __typename?: 'mutation_root'
  update_users_by_pk?: Maybe<{ __typename?: 'users'; id: any }>
}

export type SettingsSellerProfile__UpdateProfile_NuMutationVariables = Exact<{
  user_id?: Maybe<Scalars['bigint']>
  is_privacy_enabled?: Maybe<Scalars['Boolean']>
  business_size?: Maybe<Scalars['String']>
  business_name?: Maybe<Scalars['String']>
  contact_address?: Maybe<Scalars['String']>
}>

export type SettingsSellerProfile__UpdateProfile_NuMutation = {
  __typename?: 'mutation_root'
  update_users?: Maybe<{
    __typename?: 'users_mutation_response'
    affected_rows: number
    returning: Array<{
      __typename?: 'users'
      id: any
      business_size: string
      is_privacy_enabled: boolean
    }>
  }>
}

export type SettingsSellerProfile__UpdateProfileMutationVariables = Exact<{
  user_id: Scalars['bigint']
  _set: Users_Set_Input
}>

export type SettingsSellerProfile__UpdateProfileMutation = {
  __typename?: 'mutation_root'
  update_users_by_pk?: Maybe<{ __typename?: 'users'; id: any }>
}

export type SettingsSellerProfile__UpdatePromotionalStatusMutationVariables =
  Exact<{
    user_id?: Maybe<Scalars['bigint']>
    promotion_status?: Maybe<Scalars['smallint']>
  }>

export type SettingsSellerProfile__UpdatePromotionalStatusMutation = {
  __typename?: 'mutation_root'
  update_posts?: Maybe<{
    __typename?: 'posts_mutation_response'
    affected_rows: number
    returning: Array<{ __typename?: 'posts'; promotion_status?: Maybe<any> }>
  }>
}

export type SettingsSellerProfile__GetStripeCustomerPortalLinkMutationVariables =
  Exact<{
    path?: Maybe<Scalars['String']>
  }>

export type SettingsSellerProfile__GetStripeCustomerPortalLinkMutation = {
  __typename?: 'mutation_root'
  get_stripe_customer_portal_link: {
    __typename?: 'GetStripeCustomerPortalLinkOutput'
    link: string
  }
}

export type FetchBusinessSizeQueryVariables = Exact<{ [key: string]: never }>

export type FetchBusinessSizeQuery = {
  __typename?: 'query_root'
  business_sizes: Array<{
    __typename?: 'business_sizes'
    status?: Maybe<any>
    value: string
    display_name: string
  }>
}

export type SettingsUpdatePhoneNumber__UpdateProfileMutationVariables = Exact<{
  user_id: Scalars['bigint']
  _set: Users_Set_Input
}>

export type SettingsUpdatePhoneNumber__UpdateProfileMutation = {
  __typename?: 'mutation_root'
  update_users_by_pk?: Maybe<{ __typename?: 'users'; id: any }>
}

export type CategoriesContext__GetMeQueryVariables = Exact<{
  [key: string]: never
}>

export type CategoriesContext__GetMeQuery = {
  __typename?: 'query_root'
  categories: Array<{
    __typename?: 'categories'
    name: string
    id: any
    sub_categories: Array<{
      __typename?: 'sub_categories'
      name: string
      id: any
      category_id?: Maybe<any>
    }>
  }>
}

export type CityContext__UpdateUserZipAndCityMutationVariables = Exact<{
  user_id: Scalars['bigint']
  zip_code_id: Scalars['bigint']
}>

export type CityContext__UpdateUserZipAndCityMutation = {
  __typename?: 'mutation_root'
  update_users_by_pk?: Maybe<{ __typename?: 'users'; id: any }>
}

export type UserContext__GetMeQueryVariables = Exact<{
  firebase_uid: Scalars['String']
}>

export type UserContext__GetMeQuery = {
  __typename?: 'query_root'
  meArray: Array<{
    __typename?: 'users'
    id: any
    alt_id: any
    full_name: string
    is_privacy_enabled: boolean
    firebase_uid: string
    email: string
    phone?: Maybe<string>
    contact_address?: Maybe<string>
    business_size: string
    business_name?: Maybe<string>
    posts: Array<{ __typename?: 'posts'; promotion_status?: Maybe<any> }>
    avatar?: Maybe<{ __typename?: 'files'; id: any; url: string }>
    zip_code: {
      __typename?: 'zip_codes'
      id: any
      zip_code: string
      latitude: any
      longitude: any
      city: {
        __typename?: 'cities'
        id: any
        name: string
        state_code: string
        country_code: string
        alt_id: any
      }
    }
  }>
}

export type UserContext__UpdateLastSeenMutationVariables = Exact<{
  id: Scalars['bigint']
}>

export type UserContext__UpdateLastSeenMutation = {
  __typename?: 'mutation_root'
  update_users_by_pk?: Maybe<{ __typename?: 'users'; last_seen?: Maybe<any> }>
}

export const PostCard__UpdatePostDocument = gql`
  mutation PostCard__updatePost(
    $post_id: bigint!
    $promotion_status: smallint!
  ) {
    update_posts(
      where: { id: { _eq: $post_id } }
      _set: { promotion_status: $promotion_status }
    ) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export function usePostCard__UpdatePostMutation() {
  return Urql.useMutation<
    PostCard__UpdatePostMutation,
    PostCard__UpdatePostMutationVariables
  >(PostCard__UpdatePostDocument)
}
export const PostCard__DeletePostDocument = gql`
  mutation PostCard__deletePost($post_id: bigint!) {
    delete_post_attachments(where: { post_id: { _eq: $post_id } }) {
      affected_rows
      returning {
        post_id
      }
    }
    delete_post_attributes(where: { post_id: { _eq: $post_id } }) {
      affected_rows
      returning {
        post_id
      }
    }
    delete_payments(where: { post_id: { _eq: $post_id } }) {
      affected_rows
      returning {
        post_id
      }
    }
    delete_all_posts(where: { post_id: { _eq: $post_id } }) {
      affected_rows
      returning {
        post_id
      }
    }
    delete_posts(where: { id: { _eq: $post_id } }) {
      affected_rows
      returning {
        id
      }
    }
  }
`

export function usePostCard__DeletePostMutation() {
  return Urql.useMutation<
    PostCard__DeletePostMutation,
    PostCard__DeletePostMutationVariables
  >(PostCard__DeletePostDocument)
}
export const CategoryFinder__SearchCategoriesDocument = gql`
  query CategoryFinder__SearchCategories($term: String!) {
    category_finder(args: { search_text: $term }) {
      category_id
      category_name
      sub_category_id
      sub_category_name
      values
    }
  }
`

export function useCategoryFinder__SearchCategoriesQuery(
  options: Omit<
    Urql.UseQueryArgs<CategoryFinder__SearchCategoriesQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<CategoryFinder__SearchCategoriesQuery>({
    query: CategoryFinder__SearchCategoriesDocument,
    ...options,
  })
}
export const GetRoomsListDocument = gql`
  query GetRoomsList($user_id: bigint) {
    rooms(where: { user_rooms: { user_id: { _eq: $user_id } } }) {
      id
      user_rooms(where: { user_id: { _neq: $user_id } }) {
        user {
          email
          full_name
          business_name
          is_privacy_enabled
          avatar {
            url
          }
          id
          alt_id
        }
        room {
          id
          messages(limit: 1, order_by: { created_at: desc }) {
            created_at
            is_read
            content
            id
            user {
              id
            }
          }
          messages_aggregate(where: { is_read: { _eq: false } }) {
            aggregate {
              count
            }
          }
        }
      }
    }
  }
`

export function useGetRoomsListQuery(
  options: Omit<Urql.UseQueryArgs<GetRoomsListQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetRoomsListQuery>({
    query: GetRoomsListDocument,
    ...options,
  })
}
export const GetRoomForUserDocument = gql`
  query GetRoomForUser($my_id: bigint, $user_id: bigint) {
    rooms(
      where: {
        _and: {
          user_rooms: { user_id: { _eq: $my_id } }
          _and: { user_rooms: { user_id: { _eq: $user_id } } }
        }
      }
    ) {
      id
      user_rooms(where: { user_id: { _neq: $my_id } }) {
        user {
          email
          full_name
          business_name
          is_privacy_enabled
          avatar {
            url
          }
        }
        room {
          id
          messages(limit: 1, order_by: { created_at: desc }) {
            created_at
            content
            is_read
            id
            user {
              id
            }
          }
        }
      }
    }
  }
`

export function useGetRoomForUserQuery(
  options: Omit<Urql.UseQueryArgs<GetRoomForUserQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetRoomForUserQuery>({
    query: GetRoomForUserDocument,
    ...options,
  })
}
export const GetUserDocument = gql`
  query getUser($user_id: bigint!) {
    users_by_pk(id: $user_id) {
      avatar {
        url
      }
      full_name
      business_name
      is_privacy_enabled
      posts {
        price_range
        promotion_status
        years_of_experience
        sub_category {
          id
          category {
            id
            name
          }
          name
        }
      }
      zip_code {
        zip_code
        city {
          name
          id
          alt_id
          state_code
        }
      }
    }
  }
`

export function useGetUserQuery(
  options: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetUserQuery>({ query: GetUserDocument, ...options })
}
export const GetAltUserDocument = gql`
  query getAltUser($user_id: bpchar!) {
    users(where: { alt_id: { _eq: $user_id } }) {
      id
    }
  }
`

export function useGetAltUserQuery(
  options: Omit<Urql.UseQueryArgs<GetAltUserQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<GetAltUserQuery>({
    query: GetAltUserDocument,
    ...options,
  })
}
export const GetMessagesForRoomDocument = gql`
  subscription GetMessagesForRoom($room_id: bigint) {
    messages(
      where: { room_id: { _eq: $room_id } }
      order_by: { created_at: desc }
    ) {
      id
      alt_id
      content
      user {
        id
        alt_id
      }
      is_file
      file {
        name
        url
        type
      }
      created_at
    }
  }
`

export function useGetMessagesForRoomSubscription<
  TData = GetMessagesForRoomSubscription
>(
  options: Omit<
    Urql.UseSubscriptionArgs<GetMessagesForRoomSubscriptionVariables>,
    'query'
  > = {},
  handler?: Urql.SubscriptionHandler<GetMessagesForRoomSubscription, TData>
) {
  return Urql.useSubscription<
    GetMessagesForRoomSubscription,
    TData,
    GetMessagesForRoomSubscriptionVariables
  >({ query: GetMessagesForRoomDocument, ...options }, handler)
}
export const SendMessageDocument = gql`
  mutation SendMessage(
    $room_id: bigint
    $user_id: bigint
    $file_id: bigint
    $content: String
    $is_file: Boolean = false
  ) {
    insert_messages(
      objects: {
        user_id: $user_id
        content: $content
        room_id: $room_id
        file_id: $file_id
        is_file: $is_file
      }
    ) {
      returning {
        id
        content
        is_file
        file {
          name
          url
        }
        user {
          id
          alt_id
        }
        created_at
      }
    }
  }
`

export function useSendMessageMutation() {
  return Urql.useMutation<SendMessageMutation, SendMessageMutationVariables>(
    SendMessageDocument
  )
}
export const CreateRoomForUserDocument = gql`
  mutation CreateRoomForUser($my_id: bigint, $user_id: bigint) {
    insert_rooms(
      objects: {
        user_rooms: {
          data: [{ user_id: $my_id }, { user_id: $user_id }]
          on_conflict: { constraint: user_rooms_pkey }
        }
      }
      on_conflict: { constraint: rooms_pkey }
    ) {
      returning {
        id
        user_rooms(where: { user_id: { _neq: $my_id } }) {
          user {
            email
            full_name
            business_name
            is_privacy_enabled
            avatar {
              url
            }
          }
          room {
            id
            messages(limit: 1, order_by: { created_at: desc }) {
              created_at
              content
              is_read
              id
              user {
                id
              }
            }
          }
        }
      }
    }
  }
`

export function useCreateRoomForUserMutation() {
  return Urql.useMutation<
    CreateRoomForUserMutation,
    CreateRoomForUserMutationVariables
  >(CreateRoomForUserDocument)
}
export const UpdateMessageDocument = gql`
  mutation UpdateMessage($message_id: bigint!, $is_read: Boolean) {
    update_messages(
      _set: { is_read: $is_read }
      where: { id: { _eq: $message_id } }
    ) {
      affected_rows
      affected_rows
      returning {
        id
      }
    }
  }
`

export function useUpdateMessageMutation() {
  return Urql.useMutation<
    UpdateMessageMutation,
    UpdateMessageMutationVariables
  >(UpdateMessageDocument)
}
export const UpdateMessagesDocument = gql`
  mutation UpdateMessages($user_id: bigint!, $is_read: Boolean) {
    update_messages(
      _set: { is_read: $is_read }
      where: {
        room: {
          user_rooms: {
            room: { user_rooms: { user_id: { _eq: $user_id } } }
            user: { user_rooms: { user_id: { _neq: $user_id } } }
          }
        }
      }
    ) {
      affected_rows
      returning {
        is_read
      }
    }
  }
`

export function useUpdateMessagesMutation() {
  return Urql.useMutation<
    UpdateMessagesMutation,
    UpdateMessagesMutationVariables
  >(UpdateMessagesDocument)
}
export const CityChooser__SearchCitiesDocument = gql`
  query CityChooser__SearchCities($term: String!) {
    zip_codes(
      limit: 5
      where: {
        _or: [
          { zip_code: { _ilike: $term } }
          { city: { name: { _ilike: $term } } }
          { city: { state_code: { _ilike: $term } } }
        ]
      }
    ) {
      id
      zip_code
      latitude
      longitude
      city {
        id
        name
        state_code
        country_code
        alt_id
      }
    }
  }
`

export function useCityChooser__SearchCitiesQuery(
  options: Omit<
    Urql.UseQueryArgs<CityChooser__SearchCitiesQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<CityChooser__SearchCitiesQuery>({
    query: CityChooser__SearchCitiesDocument,
    ...options,
  })
}
export const UserOnlineDocument = gql`
  subscription userOnline($id: bigint!) {
    users_by_pk(id: $id) {
      last_seen
    }
  }
`

export function useUserOnlineSubscription<TData = UserOnlineSubscription>(
  options: Omit<
    Urql.UseSubscriptionArgs<UserOnlineSubscriptionVariables>,
    'query'
  > = {},
  handler?: Urql.SubscriptionHandler<UserOnlineSubscription, TData>
) {
  return Urql.useSubscription<
    UserOnlineSubscription,
    TData,
    UserOnlineSubscriptionVariables
  >({ query: UserOnlineDocument, ...options }, handler)
}
export const PostEdit__PreviousPostsCountDocument = gql`
  query PostEdit__previousPostsCount($user_id: bigint!) {
    posts_aggregate(where: { posted_by: { _eq: $user_id } }) {
      aggregate {
        count
      }
    }
  }
`

export function usePostEdit__PreviousPostsCountQuery(
  options: Omit<
    Urql.UseQueryArgs<PostEdit__PreviousPostsCountQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<PostEdit__PreviousPostsCountQuery>({
    query: PostEdit__PreviousPostsCountDocument,
    ...options,
  })
}
export const PostEdit__GetPostsubcategoriesDocument = gql`
  query PostEdit__getPostsubcategories(
    $selected_sub_category_id: Int
    $user_id: Int
  ) {
    get_postsubcategories(
      args: {
        selected_sub_category_id: $selected_sub_category_id
        user_id: $user_id
      }
    ) {
      sub_category_id
    }
  }
`

export function usePostEdit__GetPostsubcategoriesQuery(
  options: Omit<
    Urql.UseQueryArgs<PostEdit__GetPostsubcategoriesQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<PostEdit__GetPostsubcategoriesQuery>({
    query: PostEdit__GetPostsubcategoriesDocument,
    ...options,
  })
}
export const PostEdit__UpdatePostWithAttributesDocument = gql`
  mutation PostEdit__updatePostWithAttributes(
    $post_id: bigint!
    $sub_category_id: bigint!
    $title: String!
    $detail: String!
    $price_range: _int4!
    $price_description: String
    $post_attachments: [post_attachments_insert_input!]!
    $years_of_experience: smallint
    $post_attributes: [post_attributes_insert_input!]!
  ) {
    delete_post_attachments(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    insert_post_attachments(objects: $post_attachments) {
      affected_rows
    }
    delete_post_attributes(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    insert_post_attributes(objects: $post_attributes) {
      affected_rows
    }
    update_posts(
      where: { id: { _eq: $post_id } }
      _set: {
        sub_category_id: $sub_category_id
        title: $title
        detail: $detail
        price_range: $price_range
        price_description: $price_description
        years_of_experience: $years_of_experience
      }
    ) {
      returning {
        id
        alt_id
        title
      }
    }
  }
`

export function usePostEdit__UpdatePostWithAttributesMutation() {
  return Urql.useMutation<
    PostEdit__UpdatePostWithAttributesMutation,
    PostEdit__UpdatePostWithAttributesMutationVariables
  >(PostEdit__UpdatePostWithAttributesDocument)
}
export const PostEdit__UpdatePostWithoutAttributesDocument = gql`
  mutation PostEdit__updatePostWithoutAttributes(
    $post_id: bigint!
    $sub_category_id: bigint!
    $title: String!
    $detail: String!
    $price_range: _int4!
    $price_description: String
    $post_attachments: [post_attachments_insert_input!]!
    $years_of_experience: smallint
  ) {
    delete_post_attachments(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    insert_post_attachments(objects: $post_attachments) {
      affected_rows
    }
    delete_post_attributes(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    update_posts(
      where: { id: { _eq: $post_id } }
      _set: {
        sub_category_id: $sub_category_id
        title: $title
        detail: $detail
        price_range: $price_range
        price_description: $price_description
        years_of_experience: $years_of_experience
      }
    ) {
      returning {
        id
        alt_id
        title
      }
    }
  }
`

export function usePostEdit__UpdatePostWithoutAttributesMutation() {
  return Urql.useMutation<
    PostEdit__UpdatePostWithoutAttributesMutation,
    PostEdit__UpdatePostWithoutAttributesMutationVariables
  >(PostEdit__UpdatePostWithoutAttributesDocument)
}
export const PostDelete__DeletePostDocument = gql`
  mutation PostDelete__deletePost($post_id: bigint!) {
    delete_post_attachments(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    delete_post_attributes(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    delete_payments(where: { post_id: { _eq: $post_id } }) {
      affected_rows
    }
    delete_posts(where: { id: { _eq: $post_id } }) {
      affected_rows
    }
  }
`

export function usePostDelete__DeletePostMutation() {
  return Urql.useMutation<
    PostDelete__DeletePostMutation,
    PostDelete__DeletePostMutationVariables
  >(PostDelete__DeletePostDocument)
}
export const PostEdit__GetStripeCustomerPortalLinkDocument = gql`
  mutation PostEdit__GetStripeCustomerPortalLink(
    $post_id: bigint!
    $updated_post_is_local: Boolean!
  ) {
    checkout_or_manage_post_payment(
      post_id: $post_id
      updated_post_is_local: $updated_post_is_local
    ) {
      url
    }
  }
`

export function usePostEdit__GetStripeCustomerPortalLinkMutation() {
  return Urql.useMutation<
    PostEdit__GetStripeCustomerPortalLinkMutation,
    PostEdit__GetStripeCustomerPortalLinkMutationVariables
  >(PostEdit__GetStripeCustomerPortalLinkDocument)
}
export const PostNew__PreviousPostsCountDocument = gql`
  query PostNew__previousPostsCount($user_id: bigint!) {
    posts_aggregate(where: { posted_by: { _eq: $user_id } }) {
      aggregate {
        count
      }
    }
  }
`

export function usePostNew__PreviousPostsCountQuery(
  options: Omit<
    Urql.UseQueryArgs<PostNew__PreviousPostsCountQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<PostNew__PreviousPostsCountQuery>({
    query: PostNew__PreviousPostsCountDocument,
    ...options,
  })
}
export const PostNew__PreviousPostsDocument = gql`
  query PostNew__previousPosts($user_id: bigint!) {
    posts(where: { _and: { posted_by: { _eq: $user_id } } }) {
      id
      title
      sub_category_id
    }
  }
`

export function usePostNew__PreviousPostsQuery(
  options: Omit<
    Urql.UseQueryArgs<PostNew__PreviousPostsQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<PostNew__PreviousPostsQuery>({
    query: PostNew__PreviousPostsDocument,
    ...options,
  })
}
export const PostNew__InsertPostDocument = gql`
  mutation PostNew__insertPost(
    $sub_category_id: bigint!
    $title: String!
    $detail: String!
    $price_range: _int4!
    $price_description: String
    $years_of_experience: smallint
    $promotion_status: smallint
    $post_attachments: [post_attachments_insert_input!]!
  ) {
    insert_posts(
      objects: {
        sub_category_id: $sub_category_id
        title: $title
        detail: $detail
        price_range: $price_range
        price_description: $price_description
        years_of_experience: $years_of_experience
        promotion_status: $promotion_status
        post_attachments: { data: $post_attachments }
      }
    ) {
      returning {
        id
        alt_id
        title
      }
    }
  }
`

export function usePostNew__InsertPostMutation() {
  return Urql.useMutation<
    PostNew__InsertPostMutation,
    PostNew__InsertPostMutationVariables
  >(PostNew__InsertPostDocument)
}
export const PostNew__InsertPostAttributeDocument = gql`
  mutation PostNew__insertPostAttribute(
    $sub_category_id: bigint!
    $title: String!
    $detail: String!
    $price_range: _int4!
    $price_description: String
    $years_of_experience: smallint
    $promotion_status: smallint
    $post_attachments: [post_attachments_insert_input!]!
    $post_attribute: post_attributes_insert_input!
  ) {
    insert_posts(
      objects: {
        sub_category_id: $sub_category_id
        title: $title
        detail: $detail
        price_range: $price_range
        price_description: $price_description
        years_of_experience: $years_of_experience
        promotion_status: $promotion_status
        post_attachments: { data: $post_attachments }
        post_attribute: { data: $post_attribute }
      }
    ) {
      returning {
        id
        alt_id
        title
      }
    }
  }
`

export function usePostNew__InsertPostAttributeMutation() {
  return Urql.useMutation<
    PostNew__InsertPostAttributeMutation,
    PostNew__InsertPostAttributeMutationVariables
  >(PostNew__InsertPostAttributeDocument)
}
export const PostNew__GetStripeCustomerPortalLinkDocument = gql`
  mutation PostNew__GetStripeCustomerPortalLink(
    $post_id: bigint!
    $updated_post_is_local: Boolean!
  ) {
    checkout_or_manage_post_payment(
      post_id: $post_id
      updated_post_is_local: $updated_post_is_local
    ) {
      url
    }
  }
`

export function usePostNew__GetStripeCustomerPortalLinkMutation() {
  return Urql.useMutation<
    PostNew__GetStripeCustomerPortalLinkMutation,
    PostNew__GetStripeCustomerPortalLinkMutationVariables
  >(PostNew__GetStripeCustomerPortalLinkDocument)
}
export const BusinessSizesGqlDocument = gql`
  query BusinessSizesGql($businessSize: String) {
    promotions(where: { business_size: { _eq: $businessSize } }) {
      name
      price
      type
    }
  }
`

export function useBusinessSizesGqlQuery(
  options: Omit<Urql.UseQueryArgs<BusinessSizesGqlQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<BusinessSizesGqlQuery>({
    query: BusinessSizesGqlDocument,
    ...options,
  })
}
export const CancelPaypalSubscriptionGqlDocument = gql`
  mutation CancelPaypalSubscriptionGql($sub_id: String!, $post_id: Int!) {
    cancel_paypal_subscription(sub_id: $sub_id, post_id: $post_id)
  }
`

export function useCancelPaypalSubscriptionGqlMutation() {
  return Urql.useMutation<
    CancelPaypalSubscriptionGqlMutation,
    CancelPaypalSubscriptionGqlMutationVariables
  >(CancelPaypalSubscriptionGqlDocument)
}
export const CancelStripeSubscriptionGqlDocument = gql`
  mutation CancelStripeSubscriptionGql($sub_id: String!, $post_id: Int!) {
    cancel_stripe_subscription(sub_id: $sub_id, post_id: $post_id)
  }
`

export function useCancelStripeSubscriptionGqlMutation() {
  return Urql.useMutation<
    CancelStripeSubscriptionGqlMutation,
    CancelStripeSubscriptionGqlMutationVariables
  >(CancelStripeSubscriptionGqlDocument)
}
export const SettingsAccount__UpdateAccountDocument = gql`
  mutation SettingsAccount__updateAccount(
    $user_id: bigint!
    $_set: users_set_input!
  ) {
    update_users_by_pk(_set: $_set, pk_columns: { id: $user_id }) {
      id
    }
  }
`

export function useSettingsAccount__UpdateAccountMutation() {
  return Urql.useMutation<
    SettingsAccount__UpdateAccountMutation,
    SettingsAccount__UpdateAccountMutationVariables
  >(SettingsAccount__UpdateAccountDocument)
}
export const SettingsSellerProfile__UpdateProfile_NuDocument = gql`
  mutation SettingsSellerProfile__UpdateProfile_NU(
    $user_id: bigint
    $is_privacy_enabled: Boolean
    $business_size: String
    $business_name: String
    $contact_address: String
  ) {
    update_users(
      where: { id: { _eq: $user_id } }
      _set: {
        is_privacy_enabled: $is_privacy_enabled
        business_size: $business_size
        business_name: $business_name
        contact_address: $contact_address
      }
    ) {
      affected_rows
      returning {
        id
        business_size
        is_privacy_enabled
      }
    }
  }
`

export function useSettingsSellerProfile__UpdateProfile_NuMutation() {
  return Urql.useMutation<
    SettingsSellerProfile__UpdateProfile_NuMutation,
    SettingsSellerProfile__UpdateProfile_NuMutationVariables
  >(SettingsSellerProfile__UpdateProfile_NuDocument)
}
export const SettingsSellerProfile__UpdateProfileDocument = gql`
  mutation SettingsSellerProfile__UpdateProfile(
    $user_id: bigint!
    $_set: users_set_input!
  ) {
    update_users_by_pk(_set: $_set, pk_columns: { id: $user_id }) {
      id
    }
  }
`

export function useSettingsSellerProfile__UpdateProfileMutation() {
  return Urql.useMutation<
    SettingsSellerProfile__UpdateProfileMutation,
    SettingsSellerProfile__UpdateProfileMutationVariables
  >(SettingsSellerProfile__UpdateProfileDocument)
}
export const SettingsSellerProfile__UpdatePromotionalStatusDocument = gql`
  mutation SettingsSellerProfile__UpdatePromotionalStatus(
    $user_id: bigint
    $promotion_status: smallint
  ) {
    update_posts(
      where: { posted_by: { _eq: $user_id } }
      _set: { promotion_status: $promotion_status }
    ) {
      affected_rows
      returning {
        promotion_status
      }
    }
  }
`

export function useSettingsSellerProfile__UpdatePromotionalStatusMutation() {
  return Urql.useMutation<
    SettingsSellerProfile__UpdatePromotionalStatusMutation,
    SettingsSellerProfile__UpdatePromotionalStatusMutationVariables
  >(SettingsSellerProfile__UpdatePromotionalStatusDocument)
}
export const SettingsSellerProfile__GetStripeCustomerPortalLinkDocument = gql`
  mutation SettingsSellerProfile__GetStripeCustomerPortalLink($path: String) {
    get_stripe_customer_portal_link(path: $path) {
      link
    }
  }
`

export function useSettingsSellerProfile__GetStripeCustomerPortalLinkMutation() {
  return Urql.useMutation<
    SettingsSellerProfile__GetStripeCustomerPortalLinkMutation,
    SettingsSellerProfile__GetStripeCustomerPortalLinkMutationVariables
  >(SettingsSellerProfile__GetStripeCustomerPortalLinkDocument)
}
export const FetchBusinessSizeDocument = gql`
  query FetchBusinessSize {
    business_sizes(order_by: { display_name: asc }) {
      status
      value
      display_name
    }
  }
`

export function useFetchBusinessSizeQuery(
  options: Omit<
    Urql.UseQueryArgs<FetchBusinessSizeQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<FetchBusinessSizeQuery>({
    query: FetchBusinessSizeDocument,
    ...options,
  })
}
export const SettingsUpdatePhoneNumber__UpdateProfileDocument = gql`
  mutation SettingsUpdatePhoneNumber__updateProfile(
    $user_id: bigint!
    $_set: users_set_input!
  ) {
    update_users_by_pk(_set: $_set, pk_columns: { id: $user_id }) {
      id
    }
  }
`

export function useSettingsUpdatePhoneNumber__UpdateProfileMutation() {
  return Urql.useMutation<
    SettingsUpdatePhoneNumber__UpdateProfileMutation,
    SettingsUpdatePhoneNumber__UpdateProfileMutationVariables
  >(SettingsUpdatePhoneNumber__UpdateProfileDocument)
}
export const CategoriesContext__GetMeDocument = gql`
  query CategoriesContext__GetMe {
    categories(order_by: { order: asc }) {
      name
      id
      sub_categories {
        name
        id
        category_id
      }
    }
  }
`

export function useCategoriesContext__GetMeQuery(
  options: Omit<
    Urql.UseQueryArgs<CategoriesContext__GetMeQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<CategoriesContext__GetMeQuery>({
    query: CategoriesContext__GetMeDocument,
    ...options,
  })
}
export const CityContext__UpdateUserZipAndCityDocument = gql`
  mutation CityContext__UpdateUserZipAndCity(
    $user_id: bigint!
    $zip_code_id: bigint!
  ) {
    update_users_by_pk(
      _set: { zip_code_id: $zip_code_id }
      pk_columns: { id: $user_id }
    ) {
      id
    }
  }
`

export function useCityContext__UpdateUserZipAndCityMutation() {
  return Urql.useMutation<
    CityContext__UpdateUserZipAndCityMutation,
    CityContext__UpdateUserZipAndCityMutationVariables
  >(CityContext__UpdateUserZipAndCityDocument)
}
export const UserContext__GetMeDocument = gql`
  query UserContext__GetMe($firebase_uid: String!) {
    meArray: users(limit: 1, where: { firebase_uid: { _eq: $firebase_uid } }) {
      id
      alt_id
      full_name
      is_privacy_enabled
      firebase_uid
      email
      phone
      contact_address
      posts {
        promotion_status
      }
      avatar {
        id
        url
      }
      zip_code {
        id
        zip_code
        latitude
        longitude
        city {
          id
          name
          state_code
          country_code
          alt_id
        }
      }
      business_size
      business_name
      contact_address
      is_privacy_enabled
    }
  }
`

export function useUserContext__GetMeQuery(
  options: Omit<
    Urql.UseQueryArgs<UserContext__GetMeQueryVariables>,
    'query'
  > = {}
) {
  return Urql.useQuery<UserContext__GetMeQuery>({
    query: UserContext__GetMeDocument,
    ...options,
  })
}
export const UserContext__UpdateLastSeenDocument = gql`
  mutation UserContext__UpdateLastSeen($id: bigint!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { last_seen: "now()" }) {
      last_seen
    }
  }
`

export function useUserContext__UpdateLastSeenMutation() {
  return Urql.useMutation<
    UserContext__UpdateLastSeenMutation,
    UserContext__UpdateLastSeenMutationVariables
  >(UserContext__UpdateLastSeenDocument)
}
