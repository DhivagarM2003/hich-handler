
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model statuslog
 * 
 */
export type statuslog = $Result.DefaultSelection<Prisma.$statuslogPayload>
/**
 * Model likes
 * 
 */
export type likes = $Result.DefaultSelection<Prisma.$likesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs>;

  /**
   * `prisma.statuslog`: Exposes CRUD operations for the **statuslog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuslogs
    * const statuslogs = await prisma.statuslog.findMany()
    * ```
    */
  get statuslog(): Prisma.statuslogDelegate<ExtArgs>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.likesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Student: 'Student',
    Admin: 'Admin',
    Post: 'Post',
    statuslog: 'statuslog',
    likes: 'likes'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'student' | 'admin' | 'post' | 'statuslog' | 'likes'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>,
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>,
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>,
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      statuslog: {
        payload: Prisma.$statuslogPayload<ExtArgs>
        fields: Prisma.statuslogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statuslogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statuslogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statuslogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statuslogPayload>
          }
          findFirst: {
            args: Prisma.statuslogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statuslogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statuslogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statuslogPayload>
          }
          findMany: {
            args: Prisma.statuslogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statuslogPayload>[]
          }
          create: {
            args: Prisma.statuslogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statuslogPayload>
          }
          createMany: {
            args: Prisma.statuslogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.statuslogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statuslogPayload>
          }
          update: {
            args: Prisma.statuslogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statuslogPayload>
          }
          deleteMany: {
            args: Prisma.statuslogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.statuslogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.statuslogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$statuslogPayload>
          }
          aggregate: {
            args: Prisma.StatuslogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateStatuslog>
          }
          groupBy: {
            args: Prisma.statuslogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<StatuslogGroupByOutputType>[]
          }
          count: {
            args: Prisma.statuslogCountArgs<ExtArgs>,
            result: $Utils.Optional<StatuslogCountAggregateOutputType> | number
          }
        }
      }
      likes: {
        payload: Prisma.$likesPayload<ExtArgs>
        fields: Prisma.likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findFirst: {
            args: Prisma.likesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findMany: {
            args: Prisma.likesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          create: {
            args: Prisma.likesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          createMany: {
            args: Prisma.likesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.likesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          update: {
            args: Prisma.likesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          deleteMany: {
            args: Prisma.likesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.likesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.likesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.likesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.likesCountArgs<ExtArgs>,
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    posts: number
    likes: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | StudentCountOutputTypeCountPostsArgs
    likes?: boolean | StudentCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }



  /**
   * Count Type PostCountOutputType
   */

  export type PostCountOutputType = {
    statuslog: number
    likes: number
  }

  export type PostCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statuslog?: boolean | PostCountOutputTypeCountStatuslogArgs
    likes?: boolean | PostCountOutputTypeCountLikesArgs
  }

  // Custom InputTypes

  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostCountOutputType
     */
    select?: PostCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountStatuslogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statuslogWhereInput
  }


  /**
   * PostCountOutputType without action
   */
  export type PostCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    roll: string | null
    name: string | null
    email: string | null
    phone: string | null
    dob: Date | null
    password: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    roll: string | null
    name: string | null
    email: string | null
    phone: string | null
    dob: Date | null
    password: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    roll: number
    name: number
    email: number
    phone: number
    dob: number
    password: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    roll?: true
    name?: true
    email?: true
    phone?: true
    dob?: true
    password?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    roll?: true
    name?: true
    email?: true
    phone?: true
    dob?: true
    password?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    roll?: true
    name?: true
    email?: true
    phone?: true
    dob?: true
    password?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    roll: string
    name: string | null
    email: string | null
    phone: string | null
    dob: Date
    password: string
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roll?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    dob?: boolean
    password?: boolean
    posts?: boolean | Student$postsArgs<ExtArgs>
    likes?: boolean | Student$likesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    roll?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    dob?: boolean
    password?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | Student$postsArgs<ExtArgs>
    likes?: boolean | Student$likesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
      likes: Prisma.$likesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roll: string
      name: string | null
      email: string | null
      phone: string | null
      dob: Date
      password: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }


  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends StudentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends StudentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends StudentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
    **/
    create<T extends StudentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentCreateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Students.
     *     @param {StudentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends StudentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
    **/
    delete<T extends StudentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends StudentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends StudentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends StudentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
    **/
    upsert<T extends StudentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>
    ): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends Student$postsArgs<ExtArgs> = {}>(args?: Subset<T, Student$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'> | Null>;

    likes<T extends Student$likesArgs<ExtArgs> = {}>(args?: Subset<T, Student$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly roll: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly dob: FieldRef<"Student", 'DateTime'>
    readonly password: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }


  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }


  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }


  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }


  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }


  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }


  /**
   * Student.posts
   */
  export type Student$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Student.likes
   */
  export type Student$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }


  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: StudentInclude<ExtArgs> | null
  }



  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    dob: Date | null
    email: string | null
    phone: string | null
    name: string | null
    password: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    dob: Date | null
    email: string | null
    phone: string | null
    name: string | null
    password: string | null
    domain: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    dob: number
    email: number
    phone: number
    name: number
    password: number
    domain: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    dob?: true
    email?: true
    phone?: true
    name?: true
    password?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    dob?: true
    email?: true
    phone?: true
    name?: true
    password?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    dob?: true
    email?: true
    phone?: true
    name?: true
    password?: true
    domain?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    dob: Date
    email: string | null
    phone: string | null
    name: string | null
    password: string
    domain: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dob?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    password?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    dob?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    password?: boolean
    domain?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dob: Date
      email: string | null
      phone: string | null
      name: string | null
      password: string
      domain: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }


  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminCreateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>
    ): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly dob: FieldRef<"Admin", 'DateTime'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly phone: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly domain: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }


  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }



  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    postid: string | null
    title: string | null
    desc: string | null
    roll: string | null
    createdAt: Date | null
    updatedAt: Date | null
    domain: string | null
    location: string | null
    currentstatus: string | null
  }

  export type PostMaxAggregateOutputType = {
    postid: string | null
    title: string | null
    desc: string | null
    roll: string | null
    createdAt: Date | null
    updatedAt: Date | null
    domain: string | null
    location: string | null
    currentstatus: string | null
  }

  export type PostCountAggregateOutputType = {
    postid: number
    title: number
    desc: number
    roll: number
    createdAt: number
    updatedAt: number
    domain: number
    location: number
    currentstatus: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    postid?: true
    title?: true
    desc?: true
    roll?: true
    createdAt?: true
    updatedAt?: true
    domain?: true
    location?: true
    currentstatus?: true
  }

  export type PostMaxAggregateInputType = {
    postid?: true
    title?: true
    desc?: true
    roll?: true
    createdAt?: true
    updatedAt?: true
    domain?: true
    location?: true
    currentstatus?: true
  }

  export type PostCountAggregateInputType = {
    postid?: true
    title?: true
    desc?: true
    roll?: true
    createdAt?: true
    updatedAt?: true
    domain?: true
    location?: true
    currentstatus?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    postid: string
    title: string
    desc: string
    roll: string
    createdAt: Date
    updatedAt: Date
    domain: string
    location: string
    currentstatus: string
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    postid?: boolean
    title?: boolean
    desc?: boolean
    roll?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domain?: boolean
    location?: boolean
    currentstatus?: boolean
    statuslog?: boolean | Post$statuslogArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    postid?: boolean
    title?: boolean
    desc?: boolean
    roll?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    domain?: boolean
    location?: boolean
    currentstatus?: boolean
  }

  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statuslog?: boolean | Post$statuslogArgs<ExtArgs>
    likes?: boolean | Post$likesArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
    _count?: boolean | PostCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      statuslog: Prisma.$statuslogPayload<ExtArgs>[]
      likes: Prisma.$likesPayload<ExtArgs>[]
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      postid: string
      title: string
      desc: string
      roll: string
      createdAt: Date
      updatedAt: Date
      domain: string
      location: string
      currentstatus: string
    }, ExtArgs["result"]["post"]>
    composites: {}
  }


  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Post that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `postid`
     * const postWithPostidOnly = await prisma.post.findMany({ select: { postid: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PostCreateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PostDeleteArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PostUpsertArgs<ExtArgs>>
    ): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    statuslog<T extends Post$statuslogArgs<ExtArgs> = {}>(args?: Subset<T, Post$statuslogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statuslogPayload<ExtArgs>, T, 'findMany'> | Null>;

    likes<T extends Post$likesArgs<ExtArgs> = {}>(args?: Subset<T, Post$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findMany'> | Null>;

    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Post model
   */ 
  interface PostFieldRefs {
    readonly postid: FieldRef<"Post", 'String'>
    readonly title: FieldRef<"Post", 'String'>
    readonly desc: FieldRef<"Post", 'String'>
    readonly roll: FieldRef<"Post", 'String'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly updatedAt: FieldRef<"Post", 'DateTime'>
    readonly domain: FieldRef<"Post", 'String'>
    readonly location: FieldRef<"Post", 'String'>
    readonly currentstatus: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }


  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
  }


  /**
   * Post.statuslog
   */
  export type Post$statuslogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
    where?: statuslogWhereInput
    orderBy?: statuslogOrderByWithRelationInput | statuslogOrderByWithRelationInput[]
    cursor?: statuslogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatuslogScalarFieldEnum | StatuslogScalarFieldEnum[]
  }


  /**
   * Post.likes
   */
  export type Post$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }


  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PostInclude<ExtArgs> | null
  }



  /**
   * Model statuslog
   */

  export type AggregateStatuslog = {
    _count: StatuslogCountAggregateOutputType | null
    _min: StatuslogMinAggregateOutputType | null
    _max: StatuslogMaxAggregateOutputType | null
  }

  export type StatuslogMinAggregateOutputType = {
    id: string | null
    postid: string | null
    status: string | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StatuslogMaxAggregateOutputType = {
    id: string | null
    postid: string | null
    status: string | null
    feedback: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StatuslogCountAggregateOutputType = {
    id: number
    postid: number
    status: number
    feedback: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StatuslogMinAggregateInputType = {
    id?: true
    postid?: true
    status?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StatuslogMaxAggregateInputType = {
    id?: true
    postid?: true
    status?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StatuslogCountAggregateInputType = {
    id?: true
    postid?: true
    status?: true
    feedback?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StatuslogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statuslog to aggregate.
     */
    where?: statuslogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuslogs to fetch.
     */
    orderBy?: statuslogOrderByWithRelationInput | statuslogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statuslogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuslogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuslogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statuslogs
    **/
    _count?: true | StatuslogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatuslogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatuslogMaxAggregateInputType
  }

  export type GetStatuslogAggregateType<T extends StatuslogAggregateArgs> = {
        [P in keyof T & keyof AggregateStatuslog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatuslog[P]>
      : GetScalarType<T[P], AggregateStatuslog[P]>
  }




  export type statuslogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statuslogWhereInput
    orderBy?: statuslogOrderByWithAggregationInput | statuslogOrderByWithAggregationInput[]
    by: StatuslogScalarFieldEnum[] | StatuslogScalarFieldEnum
    having?: statuslogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatuslogCountAggregateInputType | true
    _min?: StatuslogMinAggregateInputType
    _max?: StatuslogMaxAggregateInputType
  }

  export type StatuslogGroupByOutputType = {
    id: string
    postid: string
    status: string
    feedback: string
    createdAt: Date
    updatedAt: Date
    _count: StatuslogCountAggregateOutputType | null
    _min: StatuslogMinAggregateOutputType | null
    _max: StatuslogMaxAggregateOutputType | null
  }

  type GetStatuslogGroupByPayload<T extends statuslogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatuslogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatuslogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatuslogGroupByOutputType[P]>
            : GetScalarType<T[P], StatuslogGroupByOutputType[P]>
        }
      >
    >


  export type statuslogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postid?: boolean
    status?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statuslog"]>

  export type statuslogSelectScalar = {
    id?: boolean
    postid?: boolean
    status?: boolean
    feedback?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type statuslogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
  }


  export type $statuslogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "statuslog"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postid: string
      status: string
      feedback: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["statuslog"]>
    composites: {}
  }


  type statuslogGetPayload<S extends boolean | null | undefined | statuslogDefaultArgs> = $Result.GetResult<Prisma.$statuslogPayload, S>

  type statuslogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<statuslogFindManyArgs, 'select' | 'include'> & {
      select?: StatuslogCountAggregateInputType | true
    }

  export interface statuslogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['statuslog'], meta: { name: 'statuslog' } }
    /**
     * Find zero or one Statuslog that matches the filter.
     * @param {statuslogFindUniqueArgs} args - Arguments to find a Statuslog
     * @example
     * // Get one Statuslog
     * const statuslog = await prisma.statuslog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends statuslogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, statuslogFindUniqueArgs<ExtArgs>>
    ): Prisma__statuslogClient<$Result.GetResult<Prisma.$statuslogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Statuslog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {statuslogFindUniqueOrThrowArgs} args - Arguments to find a Statuslog
     * @example
     * // Get one Statuslog
     * const statuslog = await prisma.statuslog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends statuslogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, statuslogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__statuslogClient<$Result.GetResult<Prisma.$statuslogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Statuslog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statuslogFindFirstArgs} args - Arguments to find a Statuslog
     * @example
     * // Get one Statuslog
     * const statuslog = await prisma.statuslog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends statuslogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, statuslogFindFirstArgs<ExtArgs>>
    ): Prisma__statuslogClient<$Result.GetResult<Prisma.$statuslogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Statuslog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statuslogFindFirstOrThrowArgs} args - Arguments to find a Statuslog
     * @example
     * // Get one Statuslog
     * const statuslog = await prisma.statuslog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends statuslogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, statuslogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__statuslogClient<$Result.GetResult<Prisma.$statuslogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Statuslogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statuslogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuslogs
     * const statuslogs = await prisma.statuslog.findMany()
     * 
     * // Get first 10 Statuslogs
     * const statuslogs = await prisma.statuslog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statuslogWithIdOnly = await prisma.statuslog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends statuslogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statuslogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statuslogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Statuslog.
     * @param {statuslogCreateArgs} args - Arguments to create a Statuslog.
     * @example
     * // Create one Statuslog
     * const Statuslog = await prisma.statuslog.create({
     *   data: {
     *     // ... data to create a Statuslog
     *   }
     * })
     * 
    **/
    create<T extends statuslogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, statuslogCreateArgs<ExtArgs>>
    ): Prisma__statuslogClient<$Result.GetResult<Prisma.$statuslogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Statuslogs.
     *     @param {statuslogCreateManyArgs} args - Arguments to create many Statuslogs.
     *     @example
     *     // Create many Statuslogs
     *     const statuslog = await prisma.statuslog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends statuslogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statuslogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Statuslog.
     * @param {statuslogDeleteArgs} args - Arguments to delete one Statuslog.
     * @example
     * // Delete one Statuslog
     * const Statuslog = await prisma.statuslog.delete({
     *   where: {
     *     // ... filter to delete one Statuslog
     *   }
     * })
     * 
    **/
    delete<T extends statuslogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, statuslogDeleteArgs<ExtArgs>>
    ): Prisma__statuslogClient<$Result.GetResult<Prisma.$statuslogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Statuslog.
     * @param {statuslogUpdateArgs} args - Arguments to update one Statuslog.
     * @example
     * // Update one Statuslog
     * const statuslog = await prisma.statuslog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends statuslogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, statuslogUpdateArgs<ExtArgs>>
    ): Prisma__statuslogClient<$Result.GetResult<Prisma.$statuslogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Statuslogs.
     * @param {statuslogDeleteManyArgs} args - Arguments to filter Statuslogs to delete.
     * @example
     * // Delete a few Statuslogs
     * const { count } = await prisma.statuslog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends statuslogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, statuslogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuslogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statuslogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuslogs
     * const statuslog = await prisma.statuslog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends statuslogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, statuslogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Statuslog.
     * @param {statuslogUpsertArgs} args - Arguments to update or create a Statuslog.
     * @example
     * // Update or create a Statuslog
     * const statuslog = await prisma.statuslog.upsert({
     *   create: {
     *     // ... data to create a Statuslog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statuslog we want to update
     *   }
     * })
    **/
    upsert<T extends statuslogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, statuslogUpsertArgs<ExtArgs>>
    ): Prisma__statuslogClient<$Result.GetResult<Prisma.$statuslogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Statuslogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statuslogCountArgs} args - Arguments to filter Statuslogs to count.
     * @example
     * // Count the number of Statuslogs
     * const count = await prisma.statuslog.count({
     *   where: {
     *     // ... the filter for the Statuslogs we want to count
     *   }
     * })
    **/
    count<T extends statuslogCountArgs>(
      args?: Subset<T, statuslogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatuslogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statuslog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatuslogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatuslogAggregateArgs>(args: Subset<T, StatuslogAggregateArgs>): Prisma.PrismaPromise<GetStatuslogAggregateType<T>>

    /**
     * Group by Statuslog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statuslogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends statuslogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statuslogGroupByArgs['orderBy'] }
        : { orderBy?: statuslogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, statuslogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatuslogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the statuslog model
   */
  readonly fields: statuslogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for statuslog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statuslogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the statuslog model
   */ 
  interface statuslogFieldRefs {
    readonly id: FieldRef<"statuslog", 'String'>
    readonly postid: FieldRef<"statuslog", 'String'>
    readonly status: FieldRef<"statuslog", 'String'>
    readonly feedback: FieldRef<"statuslog", 'String'>
    readonly createdAt: FieldRef<"statuslog", 'DateTime'>
    readonly updatedAt: FieldRef<"statuslog", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * statuslog findUnique
   */
  export type statuslogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
    /**
     * Filter, which statuslog to fetch.
     */
    where: statuslogWhereUniqueInput
  }


  /**
   * statuslog findUniqueOrThrow
   */
  export type statuslogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
    /**
     * Filter, which statuslog to fetch.
     */
    where: statuslogWhereUniqueInput
  }


  /**
   * statuslog findFirst
   */
  export type statuslogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
    /**
     * Filter, which statuslog to fetch.
     */
    where?: statuslogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuslogs to fetch.
     */
    orderBy?: statuslogOrderByWithRelationInput | statuslogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuslogs.
     */
    cursor?: statuslogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuslogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuslogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuslogs.
     */
    distinct?: StatuslogScalarFieldEnum | StatuslogScalarFieldEnum[]
  }


  /**
   * statuslog findFirstOrThrow
   */
  export type statuslogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
    /**
     * Filter, which statuslog to fetch.
     */
    where?: statuslogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuslogs to fetch.
     */
    orderBy?: statuslogOrderByWithRelationInput | statuslogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statuslogs.
     */
    cursor?: statuslogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuslogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuslogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statuslogs.
     */
    distinct?: StatuslogScalarFieldEnum | StatuslogScalarFieldEnum[]
  }


  /**
   * statuslog findMany
   */
  export type statuslogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
    /**
     * Filter, which statuslogs to fetch.
     */
    where?: statuslogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statuslogs to fetch.
     */
    orderBy?: statuslogOrderByWithRelationInput | statuslogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statuslogs.
     */
    cursor?: statuslogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statuslogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statuslogs.
     */
    skip?: number
    distinct?: StatuslogScalarFieldEnum | StatuslogScalarFieldEnum[]
  }


  /**
   * statuslog create
   */
  export type statuslogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
    /**
     * The data needed to create a statuslog.
     */
    data: XOR<statuslogCreateInput, statuslogUncheckedCreateInput>
  }


  /**
   * statuslog createMany
   */
  export type statuslogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many statuslogs.
     */
    data: statuslogCreateManyInput | statuslogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * statuslog update
   */
  export type statuslogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
    /**
     * The data needed to update a statuslog.
     */
    data: XOR<statuslogUpdateInput, statuslogUncheckedUpdateInput>
    /**
     * Choose, which statuslog to update.
     */
    where: statuslogWhereUniqueInput
  }


  /**
   * statuslog updateMany
   */
  export type statuslogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update statuslogs.
     */
    data: XOR<statuslogUpdateManyMutationInput, statuslogUncheckedUpdateManyInput>
    /**
     * Filter which statuslogs to update
     */
    where?: statuslogWhereInput
  }


  /**
   * statuslog upsert
   */
  export type statuslogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
    /**
     * The filter to search for the statuslog to update in case it exists.
     */
    where: statuslogWhereUniqueInput
    /**
     * In case the statuslog found by the `where` argument doesn't exist, create a new statuslog with this data.
     */
    create: XOR<statuslogCreateInput, statuslogUncheckedCreateInput>
    /**
     * In case the statuslog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statuslogUpdateInput, statuslogUncheckedUpdateInput>
  }


  /**
   * statuslog delete
   */
  export type statuslogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
    /**
     * Filter which statuslog to delete.
     */
    where: statuslogWhereUniqueInput
  }


  /**
   * statuslog deleteMany
   */
  export type statuslogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statuslogs to delete
     */
    where?: statuslogWhereInput
  }


  /**
   * statuslog without action
   */
  export type statuslogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statuslog
     */
    select?: statuslogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: statuslogInclude<ExtArgs> | null
  }



  /**
   * Model likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    id: string | null
    postid: string | null
    roll: string | null
  }

  export type LikesMaxAggregateOutputType = {
    id: string | null
    postid: string | null
    roll: string | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    postid: number
    roll: number
    _all: number
  }


  export type LikesMinAggregateInputType = {
    id?: true
    postid?: true
    roll?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    postid?: true
    roll?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    postid?: true
    roll?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to aggregate.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
    orderBy?: likesOrderByWithAggregationInput | likesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: string
    postid: string
    roll: string
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postid?: boolean
    roll?: boolean
    post?: boolean | PostDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectScalar = {
    id?: boolean
    postid?: boolean
    roll?: boolean
  }

  export type likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | PostDefaultArgs<ExtArgs>
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }


  export type $likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "likes"
    objects: {
      post: Prisma.$PostPayload<ExtArgs>
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postid: string
      roll: string
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }


  type likesGetPayload<S extends boolean | null | undefined | likesDefaultArgs> = $Result.GetResult<Prisma.$likesPayload, S>

  type likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<likesFindManyArgs, 'select' | 'include'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['likes'], meta: { name: 'likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {likesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends likesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, likesFindUniqueArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Likes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {likesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends likesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, likesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends likesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, likesFindFirstArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends likesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, likesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends likesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, likesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Likes.
     * @param {likesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
    **/
    create<T extends likesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, likesCreateArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Likes.
     *     @param {likesCreateManyArgs} args - Arguments to create many Likes.
     *     @example
     *     // Create many Likes
     *     const likes = await prisma.likes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends likesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, likesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Likes.
     * @param {likesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
    **/
    delete<T extends likesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, likesDeleteArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Likes.
     * @param {likesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends likesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, likesUpdateArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Likes.
     * @param {likesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends likesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, likesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends likesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, likesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Likes.
     * @param {likesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
    **/
    upsert<T extends likesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, likesUpsertArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likesCountArgs>(
      args?: Subset<T, likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likesGroupByArgs['orderBy'] }
        : { orderBy?: likesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the likes model
   */
  readonly fields: likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    post<T extends PostDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PostDefaultArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the likes model
   */ 
  interface likesFieldRefs {
    readonly id: FieldRef<"likes", 'String'>
    readonly postid: FieldRef<"likes", 'String'>
    readonly roll: FieldRef<"likes", 'String'>
  }
    

  // Custom InputTypes

  /**
   * likes findUnique
   */
  export type likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }


  /**
   * likes findUniqueOrThrow
   */
  export type likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }


  /**
   * likes findFirst
   */
  export type likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }


  /**
   * likes findFirstOrThrow
   */
  export type likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }


  /**
   * likes findMany
   */
  export type likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }


  /**
   * likes create
   */
  export type likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to create a likes.
     */
    data: XOR<likesCreateInput, likesUncheckedCreateInput>
  }


  /**
   * likes createMany
   */
  export type likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * likes update
   */
  export type likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to update a likes.
     */
    data: XOR<likesUpdateInput, likesUncheckedUpdateInput>
    /**
     * Choose, which likes to update.
     */
    where: likesWhereUniqueInput
  }


  /**
   * likes updateMany
   */
  export type likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
  }


  /**
   * likes upsert
   */
  export type likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The filter to search for the likes to update in case it exists.
     */
    where: likesWhereUniqueInput
    /**
     * In case the likes found by the `where` argument doesn't exist, create a new likes with this data.
     */
    create: XOR<likesCreateInput, likesUncheckedCreateInput>
    /**
     * In case the likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likesUpdateInput, likesUncheckedUpdateInput>
  }


  /**
   * likes delete
   */
  export type likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter which likes to delete.
     */
    where: likesWhereUniqueInput
  }


  /**
   * likes deleteMany
   */
  export type likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to delete
     */
    where?: likesWhereInput
  }


  /**
   * likes without action
   */
  export type likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentScalarFieldEnum: {
    id: 'id',
    roll: 'roll',
    name: 'name',
    email: 'email',
    phone: 'phone',
    dob: 'dob',
    password: 'password'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    dob: 'dob',
    email: 'email',
    phone: 'phone',
    name: 'name',
    password: 'password',
    domain: 'domain',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const PostScalarFieldEnum: {
    postid: 'postid',
    title: 'title',
    desc: 'desc',
    roll: 'roll',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    domain: 'domain',
    location: 'location',
    currentstatus: 'currentstatus'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const StatuslogScalarFieldEnum: {
    id: 'id',
    postid: 'postid',
    status: 'status',
    feedback: 'feedback',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StatuslogScalarFieldEnum = (typeof StatuslogScalarFieldEnum)[keyof typeof StatuslogScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    postid: 'postid',
    roll: 'roll'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    roll?: StringFilter<"Student"> | string
    name?: StringNullableFilter<"Student"> | string | null
    email?: StringNullableFilter<"Student"> | string | null
    phone?: StringNullableFilter<"Student"> | string | null
    dob?: DateTimeFilter<"Student"> | Date | string
    password?: StringFilter<"Student"> | string
    posts?: PostListRelationFilter
    likes?: LikesListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    roll?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    dob?: SortOrder
    password?: SortOrder
    posts?: PostOrderByRelationAggregateInput
    likes?: likesOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roll?: string
    email?: string
    phone?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringNullableFilter<"Student"> | string | null
    dob?: DateTimeFilter<"Student"> | Date | string
    password?: StringFilter<"Student"> | string
    posts?: PostListRelationFilter
    likes?: LikesListRelationFilter
  }, "id" | "roll" | "email" | "phone">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    roll?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    dob?: SortOrder
    password?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    roll?: StringWithAggregatesFilter<"Student"> | string
    name?: StringNullableWithAggregatesFilter<"Student"> | string | null
    email?: StringNullableWithAggregatesFilter<"Student"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    dob?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    password?: StringWithAggregatesFilter<"Student"> | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    dob?: DateTimeFilter<"Admin"> | Date | string
    email?: StringNullableFilter<"Admin"> | string | null
    phone?: StringNullableFilter<"Admin"> | string | null
    name?: StringNullableFilter<"Admin"> | string | null
    password?: StringFilter<"Admin"> | string
    domain?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    dob?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    dob?: DateTimeFilter<"Admin"> | Date | string
    name?: StringNullableFilter<"Admin"> | string | null
    password?: StringFilter<"Admin"> | string
    domain?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email" | "phone">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    dob?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    dob?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    email?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    name?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    password?: StringWithAggregatesFilter<"Admin"> | string
    domain?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    postid?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    desc?: StringFilter<"Post"> | string
    roll?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    domain?: StringFilter<"Post"> | string
    location?: StringFilter<"Post"> | string
    currentstatus?: StringFilter<"Post"> | string
    statuslog?: StatuslogListRelationFilter
    likes?: LikesListRelationFilter
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    postid?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    roll?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: SortOrder
    location?: SortOrder
    currentstatus?: SortOrder
    statuslog?: statuslogOrderByRelationAggregateInput
    likes?: likesOrderByRelationAggregateInput
    student?: StudentOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    postid?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    desc?: StringFilter<"Post"> | string
    roll?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    domain?: StringFilter<"Post"> | string
    location?: StringFilter<"Post"> | string
    currentstatus?: StringFilter<"Post"> | string
    statuslog?: StatuslogListRelationFilter
    likes?: LikesListRelationFilter
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "postid">

  export type PostOrderByWithAggregationInput = {
    postid?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    roll?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: SortOrder
    location?: SortOrder
    currentstatus?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    postid?: StringWithAggregatesFilter<"Post"> | string
    title?: StringWithAggregatesFilter<"Post"> | string
    desc?: StringWithAggregatesFilter<"Post"> | string
    roll?: StringWithAggregatesFilter<"Post"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    domain?: StringWithAggregatesFilter<"Post"> | string
    location?: StringWithAggregatesFilter<"Post"> | string
    currentstatus?: StringWithAggregatesFilter<"Post"> | string
  }

  export type statuslogWhereInput = {
    AND?: statuslogWhereInput | statuslogWhereInput[]
    OR?: statuslogWhereInput[]
    NOT?: statuslogWhereInput | statuslogWhereInput[]
    id?: StringFilter<"statuslog"> | string
    postid?: StringFilter<"statuslog"> | string
    status?: StringFilter<"statuslog"> | string
    feedback?: StringFilter<"statuslog"> | string
    createdAt?: DateTimeFilter<"statuslog"> | Date | string
    updatedAt?: DateTimeFilter<"statuslog"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
  }

  export type statuslogOrderByWithRelationInput = {
    id?: SortOrder
    postid?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    post?: PostOrderByWithRelationInput
  }

  export type statuslogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: statuslogWhereInput | statuslogWhereInput[]
    OR?: statuslogWhereInput[]
    NOT?: statuslogWhereInput | statuslogWhereInput[]
    postid?: StringFilter<"statuslog"> | string
    status?: StringFilter<"statuslog"> | string
    feedback?: StringFilter<"statuslog"> | string
    createdAt?: DateTimeFilter<"statuslog"> | Date | string
    updatedAt?: DateTimeFilter<"statuslog"> | Date | string
    post?: XOR<PostRelationFilter, PostWhereInput>
  }, "id">

  export type statuslogOrderByWithAggregationInput = {
    id?: SortOrder
    postid?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: statuslogCountOrderByAggregateInput
    _max?: statuslogMaxOrderByAggregateInput
    _min?: statuslogMinOrderByAggregateInput
  }

  export type statuslogScalarWhereWithAggregatesInput = {
    AND?: statuslogScalarWhereWithAggregatesInput | statuslogScalarWhereWithAggregatesInput[]
    OR?: statuslogScalarWhereWithAggregatesInput[]
    NOT?: statuslogScalarWhereWithAggregatesInput | statuslogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"statuslog"> | string
    postid?: StringWithAggregatesFilter<"statuslog"> | string
    status?: StringWithAggregatesFilter<"statuslog"> | string
    feedback?: StringWithAggregatesFilter<"statuslog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"statuslog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"statuslog"> | Date | string
  }

  export type likesWhereInput = {
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    id?: StringFilter<"likes"> | string
    postid?: StringFilter<"likes"> | string
    roll?: StringFilter<"likes"> | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type likesOrderByWithRelationInput = {
    id?: SortOrder
    postid?: SortOrder
    roll?: SortOrder
    post?: PostOrderByWithRelationInput
    student?: StudentOrderByWithRelationInput
  }

  export type likesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    postid?: StringFilter<"likes"> | string
    roll?: StringFilter<"likes"> | string
    post?: XOR<PostRelationFilter, PostWhereInput>
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "id">

  export type likesOrderByWithAggregationInput = {
    id?: SortOrder
    postid?: SortOrder
    roll?: SortOrder
    _count?: likesCountOrderByAggregateInput
    _max?: likesMaxOrderByAggregateInput
    _min?: likesMinOrderByAggregateInput
  }

  export type likesScalarWhereWithAggregatesInput = {
    AND?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    OR?: likesScalarWhereWithAggregatesInput[]
    NOT?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"likes"> | string
    postid?: StringWithAggregatesFilter<"likes"> | string
    roll?: StringWithAggregatesFilter<"likes"> | string
  }

  export type StudentCreateInput = {
    id?: string
    roll: string
    name?: string | null
    email?: string | null
    phone?: string | null
    dob: Date | string
    password: string
    posts?: PostCreateNestedManyWithoutStudentInput
    likes?: likesCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    roll: string
    name?: string | null
    email?: string | null
    phone?: string | null
    dob: Date | string
    password: string
    posts?: PostUncheckedCreateNestedManyWithoutStudentInput
    likes?: likesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutStudentNestedInput
    likes?: likesUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutStudentNestedInput
    likes?: likesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    roll: string
    name?: string | null
    email?: string | null
    phone?: string | null
    dob: Date | string
    password: string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateInput = {
    id?: string
    dob: Date | string
    email?: string | null
    phone?: string | null
    name?: string | null
    password: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    dob: Date | string
    email?: string | null
    phone?: string | null
    name?: string | null
    password: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    dob: Date | string
    email?: string | null
    phone?: string | null
    name?: string | null
    password: string
    domain: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    postid?: string
    title: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    location?: string
    currentstatus: string
    statuslog?: statuslogCreateNestedManyWithoutPostInput
    likes?: likesCreateNestedManyWithoutPostInput
    student: StudentCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    postid?: string
    title: string
    desc: string
    roll: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    location?: string
    currentstatus: string
    statuslog?: statuslogUncheckedCreateNestedManyWithoutPostInput
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostUpdateInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
    statuslog?: statuslogUpdateManyWithoutPostNestedInput
    likes?: likesUpdateManyWithoutPostNestedInput
    student?: StudentUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
    statuslog?: statuslogUncheckedUpdateManyWithoutPostNestedInput
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateManyInput = {
    postid?: string
    title: string
    desc: string
    roll: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    location?: string
    currentstatus: string
  }

  export type PostUpdateManyMutationInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
  }

  export type PostUncheckedUpdateManyInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
  }

  export type statuslogCreateInput = {
    id?: string
    status: string
    feedback: string
    createdAt?: Date | string
    updatedAt?: Date | string
    post: PostCreateNestedOneWithoutStatuslogInput
  }

  export type statuslogUncheckedCreateInput = {
    id?: string
    postid: string
    status: string
    feedback: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statuslogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: PostUpdateOneRequiredWithoutStatuslogNestedInput
  }

  export type statuslogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statuslogCreateManyInput = {
    id?: string
    postid: string
    status: string
    feedback: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statuslogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statuslogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likesCreateInput = {
    id?: string
    post: PostCreateNestedOneWithoutLikesInput
    student: StudentCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateInput = {
    id?: string
    postid: string
    roll: string
  }

  export type likesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutLikesNestedInput
    student?: StudentUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
  }

  export type likesCreateManyInput = {
    id?: string
    postid: string
    roll: string
  }

  export type likesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type likesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type LikesListRelationFilter = {
    every?: likesWhereInput
    some?: likesWhereInput
    none?: likesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    roll?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    password?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    roll?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    password?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    roll?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    dob?: SortOrder
    password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    dob?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    dob?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    dob?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    password?: SortOrder
    domain?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StatuslogListRelationFilter = {
    every?: statuslogWhereInput
    some?: statuslogWhereInput
    none?: statuslogWhereInput
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type statuslogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostCountOrderByAggregateInput = {
    postid?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    roll?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: SortOrder
    location?: SortOrder
    currentstatus?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    postid?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    roll?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: SortOrder
    location?: SortOrder
    currentstatus?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    postid?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    roll?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    domain?: SortOrder
    location?: SortOrder
    currentstatus?: SortOrder
  }

  export type PostRelationFilter = {
    is?: PostWhereInput
    isNot?: PostWhereInput
  }

  export type statuslogCountOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type statuslogMaxOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type statuslogMinOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type likesCountOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    roll?: SortOrder
  }

  export type likesMaxOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    roll?: SortOrder
  }

  export type likesMinOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    roll?: SortOrder
  }

  export type PostCreateNestedManyWithoutStudentInput = {
    create?: XOR<PostCreateWithoutStudentInput, PostUncheckedCreateWithoutStudentInput> | PostCreateWithoutStudentInput[] | PostUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutStudentInput | PostCreateOrConnectWithoutStudentInput[]
    createMany?: PostCreateManyStudentInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type likesCreateNestedManyWithoutStudentInput = {
    create?: XOR<likesCreateWithoutStudentInput, likesUncheckedCreateWithoutStudentInput> | likesCreateWithoutStudentInput[] | likesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: likesCreateOrConnectWithoutStudentInput | likesCreateOrConnectWithoutStudentInput[]
    createMany?: likesCreateManyStudentInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PostCreateWithoutStudentInput, PostUncheckedCreateWithoutStudentInput> | PostCreateWithoutStudentInput[] | PostUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutStudentInput | PostCreateOrConnectWithoutStudentInput[]
    createMany?: PostCreateManyStudentInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<likesCreateWithoutStudentInput, likesUncheckedCreateWithoutStudentInput> | likesCreateWithoutStudentInput[] | likesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: likesCreateOrConnectWithoutStudentInput | likesCreateOrConnectWithoutStudentInput[]
    createMany?: likesCreateManyStudentInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PostUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PostCreateWithoutStudentInput, PostUncheckedCreateWithoutStudentInput> | PostCreateWithoutStudentInput[] | PostUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutStudentInput | PostCreateOrConnectWithoutStudentInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutStudentInput | PostUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PostCreateManyStudentInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutStudentInput | PostUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PostUpdateManyWithWhereWithoutStudentInput | PostUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type likesUpdateManyWithoutStudentNestedInput = {
    create?: XOR<likesCreateWithoutStudentInput, likesUncheckedCreateWithoutStudentInput> | likesCreateWithoutStudentInput[] | likesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: likesCreateOrConnectWithoutStudentInput | likesCreateOrConnectWithoutStudentInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutStudentInput | likesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: likesCreateManyStudentInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutStudentInput | likesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: likesUpdateManyWithWhereWithoutStudentInput | likesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PostCreateWithoutStudentInput, PostUncheckedCreateWithoutStudentInput> | PostCreateWithoutStudentInput[] | PostUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PostCreateOrConnectWithoutStudentInput | PostCreateOrConnectWithoutStudentInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutStudentInput | PostUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PostCreateManyStudentInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutStudentInput | PostUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PostUpdateManyWithWhereWithoutStudentInput | PostUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<likesCreateWithoutStudentInput, likesUncheckedCreateWithoutStudentInput> | likesCreateWithoutStudentInput[] | likesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: likesCreateOrConnectWithoutStudentInput | likesCreateOrConnectWithoutStudentInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutStudentInput | likesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: likesCreateManyStudentInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutStudentInput | likesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: likesUpdateManyWithWhereWithoutStudentInput | likesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type statuslogCreateNestedManyWithoutPostInput = {
    create?: XOR<statuslogCreateWithoutPostInput, statuslogUncheckedCreateWithoutPostInput> | statuslogCreateWithoutPostInput[] | statuslogUncheckedCreateWithoutPostInput[]
    connectOrCreate?: statuslogCreateOrConnectWithoutPostInput | statuslogCreateOrConnectWithoutPostInput[]
    createMany?: statuslogCreateManyPostInputEnvelope
    connect?: statuslogWhereUniqueInput | statuslogWhereUniqueInput[]
  }

  export type likesCreateNestedManyWithoutPostInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type StudentCreateNestedOneWithoutPostsInput = {
    create?: XOR<StudentCreateWithoutPostsInput, StudentUncheckedCreateWithoutPostsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPostsInput
    connect?: StudentWhereUniqueInput
  }

  export type statuslogUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<statuslogCreateWithoutPostInput, statuslogUncheckedCreateWithoutPostInput> | statuslogCreateWithoutPostInput[] | statuslogUncheckedCreateWithoutPostInput[]
    connectOrCreate?: statuslogCreateOrConnectWithoutPostInput | statuslogCreateOrConnectWithoutPostInput[]
    createMany?: statuslogCreateManyPostInputEnvelope
    connect?: statuslogWhereUniqueInput | statuslogWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type statuslogUpdateManyWithoutPostNestedInput = {
    create?: XOR<statuslogCreateWithoutPostInput, statuslogUncheckedCreateWithoutPostInput> | statuslogCreateWithoutPostInput[] | statuslogUncheckedCreateWithoutPostInput[]
    connectOrCreate?: statuslogCreateOrConnectWithoutPostInput | statuslogCreateOrConnectWithoutPostInput[]
    upsert?: statuslogUpsertWithWhereUniqueWithoutPostInput | statuslogUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: statuslogCreateManyPostInputEnvelope
    set?: statuslogWhereUniqueInput | statuslogWhereUniqueInput[]
    disconnect?: statuslogWhereUniqueInput | statuslogWhereUniqueInput[]
    delete?: statuslogWhereUniqueInput | statuslogWhereUniqueInput[]
    connect?: statuslogWhereUniqueInput | statuslogWhereUniqueInput[]
    update?: statuslogUpdateWithWhereUniqueWithoutPostInput | statuslogUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: statuslogUpdateManyWithWhereWithoutPostInput | statuslogUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: statuslogScalarWhereInput | statuslogScalarWhereInput[]
  }

  export type likesUpdateManyWithoutPostNestedInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPostInput | likesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPostInput | likesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPostInput | likesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type StudentUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<StudentCreateWithoutPostsInput, StudentUncheckedCreateWithoutPostsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPostsInput
    upsert?: StudentUpsertWithoutPostsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPostsInput, StudentUpdateWithoutPostsInput>, StudentUncheckedUpdateWithoutPostsInput>
  }

  export type statuslogUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<statuslogCreateWithoutPostInput, statuslogUncheckedCreateWithoutPostInput> | statuslogCreateWithoutPostInput[] | statuslogUncheckedCreateWithoutPostInput[]
    connectOrCreate?: statuslogCreateOrConnectWithoutPostInput | statuslogCreateOrConnectWithoutPostInput[]
    upsert?: statuslogUpsertWithWhereUniqueWithoutPostInput | statuslogUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: statuslogCreateManyPostInputEnvelope
    set?: statuslogWhereUniqueInput | statuslogWhereUniqueInput[]
    disconnect?: statuslogWhereUniqueInput | statuslogWhereUniqueInput[]
    delete?: statuslogWhereUniqueInput | statuslogWhereUniqueInput[]
    connect?: statuslogWhereUniqueInput | statuslogWhereUniqueInput[]
    update?: statuslogUpdateWithWhereUniqueWithoutPostInput | statuslogUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: statuslogUpdateManyWithWhereWithoutPostInput | statuslogUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: statuslogScalarWhereInput | statuslogScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPostInput | likesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPostInput | likesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPostInput | likesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type PostCreateNestedOneWithoutStatuslogInput = {
    create?: XOR<PostCreateWithoutStatuslogInput, PostUncheckedCreateWithoutStatuslogInput>
    connectOrCreate?: PostCreateOrConnectWithoutStatuslogInput
    connect?: PostWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutStatuslogNestedInput = {
    create?: XOR<PostCreateWithoutStatuslogInput, PostUncheckedCreateWithoutStatuslogInput>
    connectOrCreate?: PostCreateOrConnectWithoutStatuslogInput
    upsert?: PostUpsertWithoutStatuslogInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutStatuslogInput, PostUpdateWithoutStatuslogInput>, PostUncheckedUpdateWithoutStatuslogInput>
  }

  export type PostCreateNestedOneWithoutLikesInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    connect?: PostWhereUniqueInput
  }

  export type StudentCreateNestedOneWithoutLikesInput = {
    create?: XOR<StudentCreateWithoutLikesInput, StudentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutLikesInput
    connect?: StudentWhereUniqueInput
  }

  export type PostUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    connectOrCreate?: PostCreateOrConnectWithoutLikesInput
    upsert?: PostUpsertWithoutLikesInput
    connect?: PostWhereUniqueInput
    update?: XOR<XOR<PostUpdateToOneWithWhereWithoutLikesInput, PostUpdateWithoutLikesInput>, PostUncheckedUpdateWithoutLikesInput>
  }

  export type StudentUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<StudentCreateWithoutLikesInput, StudentUncheckedCreateWithoutLikesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutLikesInput
    upsert?: StudentUpsertWithoutLikesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutLikesInput, StudentUpdateWithoutLikesInput>, StudentUncheckedUpdateWithoutLikesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PostCreateWithoutStudentInput = {
    postid?: string
    title: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    location?: string
    currentstatus: string
    statuslog?: statuslogCreateNestedManyWithoutPostInput
    likes?: likesCreateNestedManyWithoutPostInput
  }

  export type PostUncheckedCreateWithoutStudentInput = {
    postid?: string
    title: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    location?: string
    currentstatus: string
    statuslog?: statuslogUncheckedCreateNestedManyWithoutPostInput
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutStudentInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutStudentInput, PostUncheckedCreateWithoutStudentInput>
  }

  export type PostCreateManyStudentInputEnvelope = {
    data: PostCreateManyStudentInput | PostCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type likesCreateWithoutStudentInput = {
    id?: string
    post: PostCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutStudentInput = {
    id?: string
    postid: string
  }

  export type likesCreateOrConnectWithoutStudentInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutStudentInput, likesUncheckedCreateWithoutStudentInput>
  }

  export type likesCreateManyStudentInputEnvelope = {
    data: likesCreateManyStudentInput | likesCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutStudentInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutStudentInput, PostUncheckedUpdateWithoutStudentInput>
    create: XOR<PostCreateWithoutStudentInput, PostUncheckedCreateWithoutStudentInput>
  }

  export type PostUpdateWithWhereUniqueWithoutStudentInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutStudentInput, PostUncheckedUpdateWithoutStudentInput>
  }

  export type PostUpdateManyWithWhereWithoutStudentInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutStudentInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    postid?: StringFilter<"Post"> | string
    title?: StringFilter<"Post"> | string
    desc?: StringFilter<"Post"> | string
    roll?: StringFilter<"Post"> | string
    createdAt?: DateTimeFilter<"Post"> | Date | string
    updatedAt?: DateTimeFilter<"Post"> | Date | string
    domain?: StringFilter<"Post"> | string
    location?: StringFilter<"Post"> | string
    currentstatus?: StringFilter<"Post"> | string
  }

  export type likesUpsertWithWhereUniqueWithoutStudentInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutStudentInput, likesUncheckedUpdateWithoutStudentInput>
    create: XOR<likesCreateWithoutStudentInput, likesUncheckedCreateWithoutStudentInput>
  }

  export type likesUpdateWithWhereUniqueWithoutStudentInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutStudentInput, likesUncheckedUpdateWithoutStudentInput>
  }

  export type likesUpdateManyWithWhereWithoutStudentInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutStudentInput>
  }

  export type likesScalarWhereInput = {
    AND?: likesScalarWhereInput | likesScalarWhereInput[]
    OR?: likesScalarWhereInput[]
    NOT?: likesScalarWhereInput | likesScalarWhereInput[]
    id?: StringFilter<"likes"> | string
    postid?: StringFilter<"likes"> | string
    roll?: StringFilter<"likes"> | string
  }

  export type statuslogCreateWithoutPostInput = {
    id?: string
    status: string
    feedback: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statuslogUncheckedCreateWithoutPostInput = {
    id?: string
    status: string
    feedback: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type statuslogCreateOrConnectWithoutPostInput = {
    where: statuslogWhereUniqueInput
    create: XOR<statuslogCreateWithoutPostInput, statuslogUncheckedCreateWithoutPostInput>
  }

  export type statuslogCreateManyPostInputEnvelope = {
    data: statuslogCreateManyPostInput | statuslogCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type likesCreateWithoutPostInput = {
    id?: string
    student: StudentCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutPostInput = {
    id?: string
    roll: string
  }

  export type likesCreateOrConnectWithoutPostInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput>
  }

  export type likesCreateManyPostInputEnvelope = {
    data: likesCreateManyPostInput | likesCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutPostsInput = {
    id?: string
    roll: string
    name?: string | null
    email?: string | null
    phone?: string | null
    dob: Date | string
    password: string
    likes?: likesCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutPostsInput = {
    id?: string
    roll: string
    name?: string | null
    email?: string | null
    phone?: string | null
    dob: Date | string
    password: string
    likes?: likesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutPostsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPostsInput, StudentUncheckedCreateWithoutPostsInput>
  }

  export type statuslogUpsertWithWhereUniqueWithoutPostInput = {
    where: statuslogWhereUniqueInput
    update: XOR<statuslogUpdateWithoutPostInput, statuslogUncheckedUpdateWithoutPostInput>
    create: XOR<statuslogCreateWithoutPostInput, statuslogUncheckedCreateWithoutPostInput>
  }

  export type statuslogUpdateWithWhereUniqueWithoutPostInput = {
    where: statuslogWhereUniqueInput
    data: XOR<statuslogUpdateWithoutPostInput, statuslogUncheckedUpdateWithoutPostInput>
  }

  export type statuslogUpdateManyWithWhereWithoutPostInput = {
    where: statuslogScalarWhereInput
    data: XOR<statuslogUpdateManyMutationInput, statuslogUncheckedUpdateManyWithoutPostInput>
  }

  export type statuslogScalarWhereInput = {
    AND?: statuslogScalarWhereInput | statuslogScalarWhereInput[]
    OR?: statuslogScalarWhereInput[]
    NOT?: statuslogScalarWhereInput | statuslogScalarWhereInput[]
    id?: StringFilter<"statuslog"> | string
    postid?: StringFilter<"statuslog"> | string
    status?: StringFilter<"statuslog"> | string
    feedback?: StringFilter<"statuslog"> | string
    createdAt?: DateTimeFilter<"statuslog"> | Date | string
    updatedAt?: DateTimeFilter<"statuslog"> | Date | string
  }

  export type likesUpsertWithWhereUniqueWithoutPostInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutPostInput, likesUncheckedUpdateWithoutPostInput>
    create: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput>
  }

  export type likesUpdateWithWhereUniqueWithoutPostInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutPostInput, likesUncheckedUpdateWithoutPostInput>
  }

  export type likesUpdateManyWithWhereWithoutPostInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutPostInput>
  }

  export type StudentUpsertWithoutPostsInput = {
    update: XOR<StudentUpdateWithoutPostsInput, StudentUncheckedUpdateWithoutPostsInput>
    create: XOR<StudentCreateWithoutPostsInput, StudentUncheckedCreateWithoutPostsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPostsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPostsInput, StudentUncheckedUpdateWithoutPostsInput>
  }

  export type StudentUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    likes?: likesUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    likes?: likesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PostCreateWithoutStatuslogInput = {
    postid?: string
    title: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    location?: string
    currentstatus: string
    likes?: likesCreateNestedManyWithoutPostInput
    student: StudentCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutStatuslogInput = {
    postid?: string
    title: string
    desc: string
    roll: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    location?: string
    currentstatus: string
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutStatuslogInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutStatuslogInput, PostUncheckedCreateWithoutStatuslogInput>
  }

  export type PostUpsertWithoutStatuslogInput = {
    update: XOR<PostUpdateWithoutStatuslogInput, PostUncheckedUpdateWithoutStatuslogInput>
    create: XOR<PostCreateWithoutStatuslogInput, PostUncheckedCreateWithoutStatuslogInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutStatuslogInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutStatuslogInput, PostUncheckedUpdateWithoutStatuslogInput>
  }

  export type PostUpdateWithoutStatuslogInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
    likes?: likesUpdateManyWithoutPostNestedInput
    student?: StudentUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutStatuslogInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostCreateWithoutLikesInput = {
    postid?: string
    title: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    location?: string
    currentstatus: string
    statuslog?: statuslogCreateNestedManyWithoutPostInput
    student: StudentCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateWithoutLikesInput = {
    postid?: string
    title: string
    desc: string
    roll: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    location?: string
    currentstatus: string
    statuslog?: statuslogUncheckedCreateNestedManyWithoutPostInput
  }

  export type PostCreateOrConnectWithoutLikesInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
  }

  export type StudentCreateWithoutLikesInput = {
    id?: string
    roll: string
    name?: string | null
    email?: string | null
    phone?: string | null
    dob: Date | string
    password: string
    posts?: PostCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutLikesInput = {
    id?: string
    roll: string
    name?: string | null
    email?: string | null
    phone?: string | null
    dob: Date | string
    password: string
    posts?: PostUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutLikesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutLikesInput, StudentUncheckedCreateWithoutLikesInput>
  }

  export type PostUpsertWithoutLikesInput = {
    update: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
    create: XOR<PostCreateWithoutLikesInput, PostUncheckedCreateWithoutLikesInput>
    where?: PostWhereInput
  }

  export type PostUpdateToOneWithWhereWithoutLikesInput = {
    where?: PostWhereInput
    data: XOR<PostUpdateWithoutLikesInput, PostUncheckedUpdateWithoutLikesInput>
  }

  export type PostUpdateWithoutLikesInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
    statuslog?: statuslogUpdateManyWithoutPostNestedInput
    student?: StudentUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateWithoutLikesInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
    statuslog?: statuslogUncheckedUpdateManyWithoutPostNestedInput
  }

  export type StudentUpsertWithoutLikesInput = {
    update: XOR<StudentUpdateWithoutLikesInput, StudentUncheckedUpdateWithoutLikesInput>
    create: XOR<StudentCreateWithoutLikesInput, StudentUncheckedCreateWithoutLikesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutLikesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutLikesInput, StudentUncheckedUpdateWithoutLikesInput>
  }

  export type StudentUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    posts?: PostUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    password?: StringFieldUpdateOperationsInput | string
    posts?: PostUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type PostCreateManyStudentInput = {
    postid?: string
    title: string
    desc: string
    createdAt?: Date | string
    updatedAt?: Date | string
    domain: string
    location?: string
    currentstatus: string
  }

  export type likesCreateManyStudentInput = {
    id?: string
    postid: string
  }

  export type PostUpdateWithoutStudentInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
    statuslog?: statuslogUpdateManyWithoutPostNestedInput
    likes?: likesUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateWithoutStudentInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
    statuslog?: statuslogUncheckedUpdateManyWithoutPostNestedInput
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
  }

  export type PostUncheckedUpdateManyWithoutStudentInput = {
    postid?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    domain?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    currentstatus?: StringFieldUpdateOperationsInput | string
  }

  export type likesUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    post?: PostUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
  }

  export type likesUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
  }

  export type statuslogCreateManyPostInput = {
    id?: string
    status: string
    feedback: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type likesCreateManyPostInput = {
    id?: string
    roll: string
  }

  export type statuslogUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statuslogUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type statuslogUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    feedback?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likesUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    student?: StudentUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
  }

  export type likesUncheckedUpdateManyWithoutPostInput = {
    id?: StringFieldUpdateOperationsInput | string
    roll?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostCountOutputTypeDefaultArgs instead
     */
    export type PostCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostDefaultArgs instead
     */
    export type PostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostDefaultArgs<ExtArgs>
    /**
     * @deprecated Use statuslogDefaultArgs instead
     */
    export type statuslogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = statuslogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use likesDefaultArgs instead
     */
    export type likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = likesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}