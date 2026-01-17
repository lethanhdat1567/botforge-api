
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model Folder
 * 
 */
export type Folder = $Result.DefaultSelection<Prisma.$FolderPayload>
/**
 * Model Flow
 * 
 */
export type Flow = $Result.DefaultSelection<Prisma.$FlowPayload>
/**
 * Model UserFlowState
 * 
 */
export type UserFlowState = $Result.DefaultSelection<Prisma.$UserFlowStatePayload>
/**
 * Model FlowShare
 * 
 */
export type FlowShare = $Result.DefaultSelection<Prisma.$FlowSharePayload>
/**
 * Model FlowComment
 * 
 */
export type FlowComment = $Result.DefaultSelection<Prisma.$FlowCommentPayload>
/**
 * Model FlowLike
 * 
 */
export type FlowLike = $Result.DefaultSelection<Prisma.$FlowLikePayload>
/**
 * Model FlowSave
 * 
 */
export type FlowSave = $Result.DefaultSelection<Prisma.$FlowSavePayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model FlowFallback
 * 
 */
export type FlowFallback = $Result.DefaultSelection<Prisma.$FlowFallbackPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  admin: 'admin',
  user: 'user'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Provider: {
  local: 'local',
  facebook: 'facebook',
  google: 'google'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const FlowStatus: {
  draft: 'draft',
  published: 'published'
};

export type FlowStatus = (typeof FlowStatus)[keyof typeof FlowStatus]


export const Platform: {
  facebook: 'facebook',
  instagram: 'instagram',
  zalo: 'zalo'
};

export type Platform = (typeof Platform)[keyof typeof Platform]


export const UserFlowStatus: {
  running: 'running',
  pending: 'pending',
  cancelled: 'cancelled',
  completed: 'completed'
};

export type UserFlowStatus = (typeof UserFlowStatus)[keyof typeof UserFlowStatus]


export const FlowShareStatus: {
  active: 'active',
  inactive: 'inactive'
};

export type FlowShareStatus = (typeof FlowShareStatus)[keyof typeof FlowShareStatus]


export const NotificationType: {
  comment: 'comment',
  reply: 'reply',
  download: 'download',
  flow_done: 'flow_done',
  flow_cancelled: 'flow_cancelled',
  new_user: 'new_user',
  chat_message: 'chat_message'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]


export const TimeoutUnit: {
  second: 'second',
  minute: 'minute',
  hour: 'hour',
  day: 'day'
};

export type TimeoutUnit = (typeof TimeoutUnit)[keyof typeof TimeoutUnit]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type FlowStatus = $Enums.FlowStatus

export const FlowStatus: typeof $Enums.FlowStatus

export type Platform = $Enums.Platform

export const Platform: typeof $Enums.Platform

export type UserFlowStatus = $Enums.UserFlowStatus

export const UserFlowStatus: typeof $Enums.UserFlowStatus

export type FlowShareStatus = $Enums.FlowShareStatus

export const FlowShareStatus: typeof $Enums.FlowShareStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

export type TimeoutUnit = $Enums.TimeoutUnit

export const TimeoutUnit: typeof $Enums.TimeoutUnit

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.folder`: Exposes CRUD operations for the **Folder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Folders
    * const folders = await prisma.folder.findMany()
    * ```
    */
  get folder(): Prisma.FolderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flow`: Exposes CRUD operations for the **Flow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flows
    * const flows = await prisma.flow.findMany()
    * ```
    */
  get flow(): Prisma.FlowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFlowState`: Exposes CRUD operations for the **UserFlowState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFlowStates
    * const userFlowStates = await prisma.userFlowState.findMany()
    * ```
    */
  get userFlowState(): Prisma.UserFlowStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowShare`: Exposes CRUD operations for the **FlowShare** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowShares
    * const flowShares = await prisma.flowShare.findMany()
    * ```
    */
  get flowShare(): Prisma.FlowShareDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowComment`: Exposes CRUD operations for the **FlowComment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowComments
    * const flowComments = await prisma.flowComment.findMany()
    * ```
    */
  get flowComment(): Prisma.FlowCommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowLike`: Exposes CRUD operations for the **FlowLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowLikes
    * const flowLikes = await prisma.flowLike.findMany()
    * ```
    */
  get flowLike(): Prisma.FlowLikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowSave`: Exposes CRUD operations for the **FlowSave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowSaves
    * const flowSaves = await prisma.flowSave.findMany()
    * ```
    */
  get flowSave(): Prisma.FlowSaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowFallback`: Exposes CRUD operations for the **FlowFallback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowFallbacks
    * const flowFallbacks = await prisma.flowFallback.findMany()
    * ```
    */
  get flowFallback(): Prisma.FlowFallbackDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    RefreshToken: 'RefreshToken',
    PasswordResetToken: 'PasswordResetToken',
    Folder: 'Folder',
    Flow: 'Flow',
    UserFlowState: 'UserFlowState',
    FlowShare: 'FlowShare',
    FlowComment: 'FlowComment',
    FlowLike: 'FlowLike',
    FlowSave: 'FlowSave',
    Notification: 'Notification',
    FlowFallback: 'FlowFallback'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "refreshToken" | "passwordResetToken" | "folder" | "flow" | "userFlowState" | "flowShare" | "flowComment" | "flowLike" | "flowSave" | "notification" | "flowFallback"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      Folder: {
        payload: Prisma.$FolderPayload<ExtArgs>
        fields: Prisma.FolderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FolderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FolderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findFirst: {
            args: Prisma.FolderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FolderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          findMany: {
            args: Prisma.FolderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>[]
          }
          create: {
            args: Prisma.FolderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          createMany: {
            args: Prisma.FolderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FolderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          update: {
            args: Prisma.FolderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          deleteMany: {
            args: Prisma.FolderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FolderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FolderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FolderPayload>
          }
          aggregate: {
            args: Prisma.FolderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFolder>
          }
          groupBy: {
            args: Prisma.FolderGroupByArgs<ExtArgs>
            result: $Utils.Optional<FolderGroupByOutputType>[]
          }
          count: {
            args: Prisma.FolderCountArgs<ExtArgs>
            result: $Utils.Optional<FolderCountAggregateOutputType> | number
          }
        }
      }
      Flow: {
        payload: Prisma.$FlowPayload<ExtArgs>
        fields: Prisma.FlowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          findFirst: {
            args: Prisma.FlowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          findMany: {
            args: Prisma.FlowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>[]
          }
          create: {
            args: Prisma.FlowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          createMany: {
            args: Prisma.FlowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          update: {
            args: Prisma.FlowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          deleteMany: {
            args: Prisma.FlowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowPayload>
          }
          aggregate: {
            args: Prisma.FlowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlow>
          }
          groupBy: {
            args: Prisma.FlowGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowCountArgs<ExtArgs>
            result: $Utils.Optional<FlowCountAggregateOutputType> | number
          }
        }
      }
      UserFlowState: {
        payload: Prisma.$UserFlowStatePayload<ExtArgs>
        fields: Prisma.UserFlowStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFlowStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFlowStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFlowStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFlowStatePayload>
          }
          findFirst: {
            args: Prisma.UserFlowStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFlowStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFlowStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFlowStatePayload>
          }
          findMany: {
            args: Prisma.UserFlowStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFlowStatePayload>[]
          }
          create: {
            args: Prisma.UserFlowStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFlowStatePayload>
          }
          createMany: {
            args: Prisma.UserFlowStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserFlowStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFlowStatePayload>
          }
          update: {
            args: Prisma.UserFlowStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFlowStatePayload>
          }
          deleteMany: {
            args: Prisma.UserFlowStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFlowStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserFlowStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFlowStatePayload>
          }
          aggregate: {
            args: Prisma.UserFlowStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFlowState>
          }
          groupBy: {
            args: Prisma.UserFlowStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFlowStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFlowStateCountArgs<ExtArgs>
            result: $Utils.Optional<UserFlowStateCountAggregateOutputType> | number
          }
        }
      }
      FlowShare: {
        payload: Prisma.$FlowSharePayload<ExtArgs>
        fields: Prisma.FlowShareFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowShareFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSharePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowShareFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSharePayload>
          }
          findFirst: {
            args: Prisma.FlowShareFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSharePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowShareFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSharePayload>
          }
          findMany: {
            args: Prisma.FlowShareFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSharePayload>[]
          }
          create: {
            args: Prisma.FlowShareCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSharePayload>
          }
          createMany: {
            args: Prisma.FlowShareCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlowShareDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSharePayload>
          }
          update: {
            args: Prisma.FlowShareUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSharePayload>
          }
          deleteMany: {
            args: Prisma.FlowShareDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowShareUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlowShareUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSharePayload>
          }
          aggregate: {
            args: Prisma.FlowShareAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowShare>
          }
          groupBy: {
            args: Prisma.FlowShareGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowShareGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowShareCountArgs<ExtArgs>
            result: $Utils.Optional<FlowShareCountAggregateOutputType> | number
          }
        }
      }
      FlowComment: {
        payload: Prisma.$FlowCommentPayload<ExtArgs>
        fields: Prisma.FlowCommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowCommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowCommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowCommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowCommentPayload>
          }
          findFirst: {
            args: Prisma.FlowCommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowCommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowCommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowCommentPayload>
          }
          findMany: {
            args: Prisma.FlowCommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowCommentPayload>[]
          }
          create: {
            args: Prisma.FlowCommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowCommentPayload>
          }
          createMany: {
            args: Prisma.FlowCommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlowCommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowCommentPayload>
          }
          update: {
            args: Prisma.FlowCommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowCommentPayload>
          }
          deleteMany: {
            args: Prisma.FlowCommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowCommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlowCommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowCommentPayload>
          }
          aggregate: {
            args: Prisma.FlowCommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowComment>
          }
          groupBy: {
            args: Prisma.FlowCommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowCommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowCommentCountArgs<ExtArgs>
            result: $Utils.Optional<FlowCommentCountAggregateOutputType> | number
          }
        }
      }
      FlowLike: {
        payload: Prisma.$FlowLikePayload<ExtArgs>
        fields: Prisma.FlowLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowLikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowLikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowLikePayload>
          }
          findFirst: {
            args: Prisma.FlowLikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowLikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowLikePayload>
          }
          findMany: {
            args: Prisma.FlowLikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowLikePayload>[]
          }
          create: {
            args: Prisma.FlowLikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowLikePayload>
          }
          createMany: {
            args: Prisma.FlowLikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlowLikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowLikePayload>
          }
          update: {
            args: Prisma.FlowLikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowLikePayload>
          }
          deleteMany: {
            args: Prisma.FlowLikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowLikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlowLikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowLikePayload>
          }
          aggregate: {
            args: Prisma.FlowLikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowLike>
          }
          groupBy: {
            args: Prisma.FlowLikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowLikeCountArgs<ExtArgs>
            result: $Utils.Optional<FlowLikeCountAggregateOutputType> | number
          }
        }
      }
      FlowSave: {
        payload: Prisma.$FlowSavePayload<ExtArgs>
        fields: Prisma.FlowSaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowSaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowSaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSavePayload>
          }
          findFirst: {
            args: Prisma.FlowSaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowSaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSavePayload>
          }
          findMany: {
            args: Prisma.FlowSaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSavePayload>[]
          }
          create: {
            args: Prisma.FlowSaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSavePayload>
          }
          createMany: {
            args: Prisma.FlowSaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlowSaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSavePayload>
          }
          update: {
            args: Prisma.FlowSaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSavePayload>
          }
          deleteMany: {
            args: Prisma.FlowSaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowSaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlowSaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowSavePayload>
          }
          aggregate: {
            args: Prisma.FlowSaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowSave>
          }
          groupBy: {
            args: Prisma.FlowSaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowSaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowSaveCountArgs<ExtArgs>
            result: $Utils.Optional<FlowSaveCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      FlowFallback: {
        payload: Prisma.$FlowFallbackPayload<ExtArgs>
        fields: Prisma.FlowFallbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowFallbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowFallbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowFallbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowFallbackPayload>
          }
          findFirst: {
            args: Prisma.FlowFallbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowFallbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowFallbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowFallbackPayload>
          }
          findMany: {
            args: Prisma.FlowFallbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowFallbackPayload>[]
          }
          create: {
            args: Prisma.FlowFallbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowFallbackPayload>
          }
          createMany: {
            args: Prisma.FlowFallbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlowFallbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowFallbackPayload>
          }
          update: {
            args: Prisma.FlowFallbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowFallbackPayload>
          }
          deleteMany: {
            args: Prisma.FlowFallbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowFallbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlowFallbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowFallbackPayload>
          }
          aggregate: {
            args: Prisma.FlowFallbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowFallback>
          }
          groupBy: {
            args: Prisma.FlowFallbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowFallbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowFallbackCountArgs<ExtArgs>
            result: $Utils.Optional<FlowFallbackCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    passwordResetToken?: PasswordResetTokenOmit
    folder?: FolderOmit
    flow?: FlowOmit
    userFlowState?: UserFlowStateOmit
    flowShare?: FlowShareOmit
    flowComment?: FlowCommentOmit
    flowLike?: FlowLikeOmit
    flowSave?: FlowSaveOmit
    notification?: NotificationOmit
    flowFallback?: FlowFallbackOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    folders: number
    flows: number
    flowShares: number
    flowLikes: number
    flowSave: number
    flowComments: number
    notifications: number
    userFlowStates: number
    refreshTokens: number
    PasswordResetToken: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folders?: boolean | UserCountOutputTypeCountFoldersArgs
    flows?: boolean | UserCountOutputTypeCountFlowsArgs
    flowShares?: boolean | UserCountOutputTypeCountFlowSharesArgs
    flowLikes?: boolean | UserCountOutputTypeCountFlowLikesArgs
    flowSave?: boolean | UserCountOutputTypeCountFlowSaveArgs
    flowComments?: boolean | UserCountOutputTypeCountFlowCommentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    userFlowStates?: boolean | UserCountOutputTypeCountUserFlowStatesArgs
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs
    PasswordResetToken?: boolean | UserCountOutputTypeCountPasswordResetTokenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFoldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlowSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowShareWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlowLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowLikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlowSaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowSaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlowCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowCommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserFlowStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFlowStateWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
  }


  /**
   * Count Type FolderCountOutputType
   */

  export type FolderCountOutputType = {
    flows: number
  }

  export type FolderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flows?: boolean | FolderCountOutputTypeCountFlowsArgs
  }

  // Custom InputTypes
  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FolderCountOutputType
     */
    select?: FolderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FolderCountOutputType without action
   */
  export type FolderCountOutputTypeCountFlowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowWhereInput
  }


  /**
   * Count Type FlowCountOutputType
   */

  export type FlowCountOutputType = {
    states: number
    shares: number
  }

  export type FlowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    states?: boolean | FlowCountOutputTypeCountStatesArgs
    shares?: boolean | FlowCountOutputTypeCountSharesArgs
  }

  // Custom InputTypes
  /**
   * FlowCountOutputType without action
   */
  export type FlowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowCountOutputType
     */
    select?: FlowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlowCountOutputType without action
   */
  export type FlowCountOutputTypeCountStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFlowStateWhereInput
  }

  /**
   * FlowCountOutputType without action
   */
  export type FlowCountOutputTypeCountSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowShareWhereInput
  }


  /**
   * Count Type FlowShareCountOutputType
   */

  export type FlowShareCountOutputType = {
    comments: number
    likes: number
    saves: number
  }

  export type FlowShareCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | FlowShareCountOutputTypeCountCommentsArgs
    likes?: boolean | FlowShareCountOutputTypeCountLikesArgs
    saves?: boolean | FlowShareCountOutputTypeCountSavesArgs
  }

  // Custom InputTypes
  /**
   * FlowShareCountOutputType without action
   */
  export type FlowShareCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShareCountOutputType
     */
    select?: FlowShareCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlowShareCountOutputType without action
   */
  export type FlowShareCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowCommentWhereInput
  }

  /**
   * FlowShareCountOutputType without action
   */
  export type FlowShareCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowLikeWhereInput
  }

  /**
   * FlowShareCountOutputType without action
   */
  export type FlowShareCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowSaveWhereInput
  }


  /**
   * Count Type FlowCommentCountOutputType
   */

  export type FlowCommentCountOutputType = {
    replies: number
  }

  export type FlowCommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | FlowCommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * FlowCommentCountOutputType without action
   */
  export type FlowCommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowCommentCountOutputType
     */
    select?: FlowCommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FlowCommentCountOutputType without action
   */
  export type FlowCommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowCommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    displayName: string | null
    email: string | null
    avatar: string | null
    password: string | null
    role: $Enums.Role | null
    provider: $Enums.Provider | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    displayName: string | null
    email: string | null
    avatar: string | null
    password: string | null
    role: $Enums.Role | null
    provider: $Enums.Provider | null
    providerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    displayName: number
    email: number
    avatar: number
    password: number
    role: number
    provider: number
    providerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    email?: true
    avatar?: true
    password?: true
    role?: true
    provider?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    email?: true
    avatar?: true
    password?: true
    role?: true
    provider?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    displayName?: true
    email?: true
    avatar?: true
    password?: true
    role?: true
    provider?: true
    providerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    displayName: string | null
    email: string
    avatar: string | null
    password: string
    role: $Enums.Role
    provider: $Enums.Provider
    providerId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    displayName?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    role?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    folders?: boolean | User$foldersArgs<ExtArgs>
    flows?: boolean | User$flowsArgs<ExtArgs>
    flowShares?: boolean | User$flowSharesArgs<ExtArgs>
    flowLikes?: boolean | User$flowLikesArgs<ExtArgs>
    flowSave?: boolean | User$flowSaveArgs<ExtArgs>
    flowComments?: boolean | User$flowCommentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    fallback?: boolean | User$fallbackArgs<ExtArgs>
    userFlowStates?: boolean | User$userFlowStatesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    PasswordResetToken?: boolean | User$PasswordResetTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    displayName?: boolean
    email?: boolean
    avatar?: boolean
    password?: boolean
    role?: boolean
    provider?: boolean
    providerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "displayName" | "email" | "avatar" | "password" | "role" | "provider" | "providerId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    folders?: boolean | User$foldersArgs<ExtArgs>
    flows?: boolean | User$flowsArgs<ExtArgs>
    flowShares?: boolean | User$flowSharesArgs<ExtArgs>
    flowLikes?: boolean | User$flowLikesArgs<ExtArgs>
    flowSave?: boolean | User$flowSaveArgs<ExtArgs>
    flowComments?: boolean | User$flowCommentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    fallback?: boolean | User$fallbackArgs<ExtArgs>
    userFlowStates?: boolean | User$userFlowStatesArgs<ExtArgs>
    refreshTokens?: boolean | User$refreshTokensArgs<ExtArgs>
    PasswordResetToken?: boolean | User$PasswordResetTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      folders: Prisma.$FolderPayload<ExtArgs>[]
      flows: Prisma.$FlowPayload<ExtArgs>[]
      flowShares: Prisma.$FlowSharePayload<ExtArgs>[]
      flowLikes: Prisma.$FlowLikePayload<ExtArgs>[]
      flowSave: Prisma.$FlowSavePayload<ExtArgs>[]
      flowComments: Prisma.$FlowCommentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      fallback: Prisma.$FlowFallbackPayload<ExtArgs> | null
      userFlowStates: Prisma.$UserFlowStatePayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      PasswordResetToken: Prisma.$PasswordResetTokenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      displayName: string | null
      email: string
      avatar: string | null
      password: string
      role: $Enums.Role
      provider: $Enums.Provider
      providerId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    folders<T extends User$foldersArgs<ExtArgs> = {}>(args?: Subset<T, User$foldersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flows<T extends User$flowsArgs<ExtArgs> = {}>(args?: Subset<T, User$flowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flowShares<T extends User$flowSharesArgs<ExtArgs> = {}>(args?: Subset<T, User$flowSharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flowLikes<T extends User$flowLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$flowLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flowSave<T extends User$flowSaveArgs<ExtArgs> = {}>(args?: Subset<T, User$flowSaveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flowComments<T extends User$flowCommentsArgs<ExtArgs> = {}>(args?: Subset<T, User$flowCommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fallback<T extends User$fallbackArgs<ExtArgs> = {}>(args?: Subset<T, User$fallbackArgs<ExtArgs>>): Prisma__FlowFallbackClient<$Result.GetResult<Prisma.$FlowFallbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    userFlowStates<T extends User$userFlowStatesArgs<ExtArgs> = {}>(args?: Subset<T, User$userFlowStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends User$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PasswordResetToken<T extends User$PasswordResetTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$PasswordResetTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly provider: FieldRef<"User", 'Provider'>
    readonly providerId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.folders
   */
  export type User$foldersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    cursor?: FolderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * User.flows
   */
  export type User$flowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    where?: FlowWhereInput
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    cursor?: FlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowScalarFieldEnum | FlowScalarFieldEnum[]
  }

  /**
   * User.flowShares
   */
  export type User$flowSharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    where?: FlowShareWhereInput
    orderBy?: FlowShareOrderByWithRelationInput | FlowShareOrderByWithRelationInput[]
    cursor?: FlowShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowShareScalarFieldEnum | FlowShareScalarFieldEnum[]
  }

  /**
   * User.flowLikes
   */
  export type User$flowLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    where?: FlowLikeWhereInput
    orderBy?: FlowLikeOrderByWithRelationInput | FlowLikeOrderByWithRelationInput[]
    cursor?: FlowLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowLikeScalarFieldEnum | FlowLikeScalarFieldEnum[]
  }

  /**
   * User.flowSave
   */
  export type User$flowSaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    where?: FlowSaveWhereInput
    orderBy?: FlowSaveOrderByWithRelationInput | FlowSaveOrderByWithRelationInput[]
    cursor?: FlowSaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowSaveScalarFieldEnum | FlowSaveScalarFieldEnum[]
  }

  /**
   * User.flowComments
   */
  export type User$flowCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    where?: FlowCommentWhereInput
    orderBy?: FlowCommentOrderByWithRelationInput | FlowCommentOrderByWithRelationInput[]
    cursor?: FlowCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowCommentScalarFieldEnum | FlowCommentScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.fallback
   */
  export type User$fallbackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
    where?: FlowFallbackWhereInput
  }

  /**
   * User.userFlowStates
   */
  export type User$userFlowStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    where?: UserFlowStateWhereInput
    orderBy?: UserFlowStateOrderByWithRelationInput | UserFlowStateOrderByWithRelationInput[]
    cursor?: UserFlowStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFlowStateScalarFieldEnum | UserFlowStateScalarFieldEnum[]
  }

  /**
   * User.refreshTokens
   */
  export type User$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * User.PasswordResetToken
   */
  export type User$PasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    cursor?: PasswordResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>



  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    expiresAt: Date
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>



  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly userId: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Model Folder
   */

  export type AggregateFolder = {
    _count: FolderCountAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  export type FolderMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    platform: $Enums.Platform | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FolderMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    platform: $Enums.Platform | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FolderCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    platform: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FolderMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FolderMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FolderCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    platform?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FolderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folder to aggregate.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Folders
    **/
    _count?: true | FolderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FolderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FolderMaxAggregateInputType
  }

  export type GetFolderAggregateType<T extends FolderAggregateArgs> = {
        [P in keyof T & keyof AggregateFolder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFolder[P]>
      : GetScalarType<T[P], AggregateFolder[P]>
  }




  export type FolderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FolderWhereInput
    orderBy?: FolderOrderByWithAggregationInput | FolderOrderByWithAggregationInput[]
    by: FolderScalarFieldEnum[] | FolderScalarFieldEnum
    having?: FolderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FolderCountAggregateInputType | true
    _min?: FolderMinAggregateInputType
    _max?: FolderMaxAggregateInputType
  }

  export type FolderGroupByOutputType = {
    id: string
    userId: string
    name: string
    platform: $Enums.Platform
    createdAt: Date
    updatedAt: Date
    _count: FolderCountAggregateOutputType | null
    _min: FolderMinAggregateOutputType | null
    _max: FolderMaxAggregateOutputType | null
  }

  type GetFolderGroupByPayload<T extends FolderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FolderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FolderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FolderGroupByOutputType[P]>
            : GetScalarType<T[P], FolderGroupByOutputType[P]>
        }
      >
    >


  export type FolderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    flows?: boolean | Folder$flowsArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["folder"]>



  export type FolderSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    platform?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FolderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "platform" | "createdAt" | "updatedAt", ExtArgs["result"]["folder"]>
  export type FolderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    flows?: boolean | Folder$flowsArgs<ExtArgs>
    _count?: boolean | FolderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FolderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Folder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      flows: Prisma.$FlowPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      platform: $Enums.Platform
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["folder"]>
    composites: {}
  }

  type FolderGetPayload<S extends boolean | null | undefined | FolderDefaultArgs> = $Result.GetResult<Prisma.$FolderPayload, S>

  type FolderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FolderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FolderCountAggregateInputType | true
    }

  export interface FolderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Folder'], meta: { name: 'Folder' } }
    /**
     * Find zero or one Folder that matches the filter.
     * @param {FolderFindUniqueArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FolderFindUniqueArgs>(args: SelectSubset<T, FolderFindUniqueArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Folder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FolderFindUniqueOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FolderFindUniqueOrThrowArgs>(args: SelectSubset<T, FolderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FolderFindFirstArgs>(args?: SelectSubset<T, FolderFindFirstArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Folder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindFirstOrThrowArgs} args - Arguments to find a Folder
     * @example
     * // Get one Folder
     * const folder = await prisma.folder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FolderFindFirstOrThrowArgs>(args?: SelectSubset<T, FolderFindFirstOrThrowArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Folders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Folders
     * const folders = await prisma.folder.findMany()
     * 
     * // Get first 10 Folders
     * const folders = await prisma.folder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const folderWithIdOnly = await prisma.folder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FolderFindManyArgs>(args?: SelectSubset<T, FolderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Folder.
     * @param {FolderCreateArgs} args - Arguments to create a Folder.
     * @example
     * // Create one Folder
     * const Folder = await prisma.folder.create({
     *   data: {
     *     // ... data to create a Folder
     *   }
     * })
     * 
     */
    create<T extends FolderCreateArgs>(args: SelectSubset<T, FolderCreateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Folders.
     * @param {FolderCreateManyArgs} args - Arguments to create many Folders.
     * @example
     * // Create many Folders
     * const folder = await prisma.folder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FolderCreateManyArgs>(args?: SelectSubset<T, FolderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Folder.
     * @param {FolderDeleteArgs} args - Arguments to delete one Folder.
     * @example
     * // Delete one Folder
     * const Folder = await prisma.folder.delete({
     *   where: {
     *     // ... filter to delete one Folder
     *   }
     * })
     * 
     */
    delete<T extends FolderDeleteArgs>(args: SelectSubset<T, FolderDeleteArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Folder.
     * @param {FolderUpdateArgs} args - Arguments to update one Folder.
     * @example
     * // Update one Folder
     * const folder = await prisma.folder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FolderUpdateArgs>(args: SelectSubset<T, FolderUpdateArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Folders.
     * @param {FolderDeleteManyArgs} args - Arguments to filter Folders to delete.
     * @example
     * // Delete a few Folders
     * const { count } = await prisma.folder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FolderDeleteManyArgs>(args?: SelectSubset<T, FolderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Folders
     * const folder = await prisma.folder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FolderUpdateManyArgs>(args: SelectSubset<T, FolderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Folder.
     * @param {FolderUpsertArgs} args - Arguments to update or create a Folder.
     * @example
     * // Update or create a Folder
     * const folder = await prisma.folder.upsert({
     *   create: {
     *     // ... data to create a Folder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Folder we want to update
     *   }
     * })
     */
    upsert<T extends FolderUpsertArgs>(args: SelectSubset<T, FolderUpsertArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Folders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderCountArgs} args - Arguments to filter Folders to count.
     * @example
     * // Count the number of Folders
     * const count = await prisma.folder.count({
     *   where: {
     *     // ... the filter for the Folders we want to count
     *   }
     * })
    **/
    count<T extends FolderCountArgs>(
      args?: Subset<T, FolderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FolderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FolderAggregateArgs>(args: Subset<T, FolderAggregateArgs>): Prisma.PrismaPromise<GetFolderAggregateType<T>>

    /**
     * Group by Folder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FolderGroupByArgs} args - Group by arguments.
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
      T extends FolderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FolderGroupByArgs['orderBy'] }
        : { orderBy?: FolderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FolderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFolderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Folder model
   */
  readonly fields: FolderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Folder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FolderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flows<T extends Folder$flowsArgs<ExtArgs> = {}>(args?: Subset<T, Folder$flowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Folder model
   */
  interface FolderFieldRefs {
    readonly id: FieldRef<"Folder", 'String'>
    readonly userId: FieldRef<"Folder", 'String'>
    readonly name: FieldRef<"Folder", 'String'>
    readonly platform: FieldRef<"Folder", 'Platform'>
    readonly createdAt: FieldRef<"Folder", 'DateTime'>
    readonly updatedAt: FieldRef<"Folder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Folder findUnique
   */
  export type FolderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findUniqueOrThrow
   */
  export type FolderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder findFirst
   */
  export type FolderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findFirstOrThrow
   */
  export type FolderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folder to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Folders.
     */
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder findMany
   */
  export type FolderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter, which Folders to fetch.
     */
    where?: FolderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Folders to fetch.
     */
    orderBy?: FolderOrderByWithRelationInput | FolderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Folders.
     */
    cursor?: FolderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Folders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Folders.
     */
    skip?: number
    distinct?: FolderScalarFieldEnum | FolderScalarFieldEnum[]
  }

  /**
   * Folder create
   */
  export type FolderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to create a Folder.
     */
    data: XOR<FolderCreateInput, FolderUncheckedCreateInput>
  }

  /**
   * Folder createMany
   */
  export type FolderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Folders.
     */
    data: FolderCreateManyInput | FolderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Folder update
   */
  export type FolderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The data needed to update a Folder.
     */
    data: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
    /**
     * Choose, which Folder to update.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder updateMany
   */
  export type FolderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Folders.
     */
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyInput>
    /**
     * Filter which Folders to update
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to update.
     */
    limit?: number
  }

  /**
   * Folder upsert
   */
  export type FolderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * The filter to search for the Folder to update in case it exists.
     */
    where: FolderWhereUniqueInput
    /**
     * In case the Folder found by the `where` argument doesn't exist, create a new Folder with this data.
     */
    create: XOR<FolderCreateInput, FolderUncheckedCreateInput>
    /**
     * In case the Folder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FolderUpdateInput, FolderUncheckedUpdateInput>
  }

  /**
   * Folder delete
   */
  export type FolderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
    /**
     * Filter which Folder to delete.
     */
    where: FolderWhereUniqueInput
  }

  /**
   * Folder deleteMany
   */
  export type FolderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Folders to delete
     */
    where?: FolderWhereInput
    /**
     * Limit how many Folders to delete.
     */
    limit?: number
  }

  /**
   * Folder.flows
   */
  export type Folder$flowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    where?: FlowWhereInput
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    cursor?: FlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowScalarFieldEnum | FlowScalarFieldEnum[]
  }

  /**
   * Folder without action
   */
  export type FolderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Folder
     */
    select?: FolderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Folder
     */
    omit?: FolderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FolderInclude<ExtArgs> | null
  }


  /**
   * Model Flow
   */

  export type AggregateFlow = {
    _count: FlowCountAggregateOutputType | null
    _min: FlowMinAggregateOutputType | null
    _max: FlowMaxAggregateOutputType | null
  }

  export type FlowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    pageId: string | null
    folderId: string | null
    pageAccessToken: string | null
    name: string | null
    description: string | null
    status: $Enums.FlowStatus | null
    platform: $Enums.Platform | null
    timeoutDuration: string | null
    startNodeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    pageId: string | null
    folderId: string | null
    pageAccessToken: string | null
    name: string | null
    description: string | null
    status: $Enums.FlowStatus | null
    platform: $Enums.Platform | null
    timeoutDuration: string | null
    startNodeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowCountAggregateOutputType = {
    id: number
    userId: number
    pageId: number
    folderId: number
    pageAccessToken: number
    name: number
    description: number
    status: number
    logicJson: number
    layoutJson: number
    platform: number
    timeoutDuration: number
    startNodeId: number
    timeoutJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlowMinAggregateInputType = {
    id?: true
    userId?: true
    pageId?: true
    folderId?: true
    pageAccessToken?: true
    name?: true
    description?: true
    status?: true
    platform?: true
    timeoutDuration?: true
    startNodeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowMaxAggregateInputType = {
    id?: true
    userId?: true
    pageId?: true
    folderId?: true
    pageAccessToken?: true
    name?: true
    description?: true
    status?: true
    platform?: true
    timeoutDuration?: true
    startNodeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowCountAggregateInputType = {
    id?: true
    userId?: true
    pageId?: true
    folderId?: true
    pageAccessToken?: true
    name?: true
    description?: true
    status?: true
    logicJson?: true
    layoutJson?: true
    platform?: true
    timeoutDuration?: true
    startNodeId?: true
    timeoutJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flow to aggregate.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flows
    **/
    _count?: true | FlowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowMaxAggregateInputType
  }

  export type GetFlowAggregateType<T extends FlowAggregateArgs> = {
        [P in keyof T & keyof AggregateFlow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlow[P]>
      : GetScalarType<T[P], AggregateFlow[P]>
  }




  export type FlowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowWhereInput
    orderBy?: FlowOrderByWithAggregationInput | FlowOrderByWithAggregationInput[]
    by: FlowScalarFieldEnum[] | FlowScalarFieldEnum
    having?: FlowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowCountAggregateInputType | true
    _min?: FlowMinAggregateInputType
    _max?: FlowMaxAggregateInputType
  }

  export type FlowGroupByOutputType = {
    id: string
    userId: string
    pageId: string | null
    folderId: string
    pageAccessToken: string | null
    name: string
    description: string | null
    status: $Enums.FlowStatus
    logicJson: JsonValue | null
    layoutJson: JsonValue | null
    platform: $Enums.Platform
    timeoutDuration: string | null
    startNodeId: string | null
    timeoutJson: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: FlowCountAggregateOutputType | null
    _min: FlowMinAggregateOutputType | null
    _max: FlowMaxAggregateOutputType | null
  }

  type GetFlowGroupByPayload<T extends FlowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowGroupByOutputType[P]>
            : GetScalarType<T[P], FlowGroupByOutputType[P]>
        }
      >
    >


  export type FlowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    pageId?: boolean
    folderId?: boolean
    pageAccessToken?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    logicJson?: boolean
    layoutJson?: boolean
    platform?: boolean
    timeoutDuration?: boolean
    startNodeId?: boolean
    timeoutJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FolderDefaultArgs<ExtArgs>
    states?: boolean | Flow$statesArgs<ExtArgs>
    shares?: boolean | Flow$sharesArgs<ExtArgs>
    _count?: boolean | FlowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flow"]>



  export type FlowSelectScalar = {
    id?: boolean
    userId?: boolean
    pageId?: boolean
    folderId?: boolean
    pageAccessToken?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    logicJson?: boolean
    layoutJson?: boolean
    platform?: boolean
    timeoutDuration?: boolean
    startNodeId?: boolean
    timeoutJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "pageId" | "folderId" | "pageAccessToken" | "name" | "description" | "status" | "logicJson" | "layoutJson" | "platform" | "timeoutDuration" | "startNodeId" | "timeoutJson" | "createdAt" | "updatedAt", ExtArgs["result"]["flow"]>
  export type FlowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    folder?: boolean | FolderDefaultArgs<ExtArgs>
    states?: boolean | Flow$statesArgs<ExtArgs>
    shares?: boolean | Flow$sharesArgs<ExtArgs>
    _count?: boolean | FlowCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FlowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flow"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      folder: Prisma.$FolderPayload<ExtArgs>
      states: Prisma.$UserFlowStatePayload<ExtArgs>[]
      shares: Prisma.$FlowSharePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      pageId: string | null
      folderId: string
      pageAccessToken: string | null
      name: string
      description: string | null
      status: $Enums.FlowStatus
      logicJson: Prisma.JsonValue | null
      layoutJson: Prisma.JsonValue | null
      platform: $Enums.Platform
      timeoutDuration: string | null
      startNodeId: string | null
      timeoutJson: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flow"]>
    composites: {}
  }

  type FlowGetPayload<S extends boolean | null | undefined | FlowDefaultArgs> = $Result.GetResult<Prisma.$FlowPayload, S>

  type FlowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowCountAggregateInputType | true
    }

  export interface FlowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flow'], meta: { name: 'Flow' } }
    /**
     * Find zero or one Flow that matches the filter.
     * @param {FlowFindUniqueArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowFindUniqueArgs>(args: SelectSubset<T, FlowFindUniqueArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowFindUniqueOrThrowArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFindFirstArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowFindFirstArgs>(args?: SelectSubset<T, FlowFindFirstArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFindFirstOrThrowArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flows
     * const flows = await prisma.flow.findMany()
     * 
     * // Get first 10 Flows
     * const flows = await prisma.flow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowWithIdOnly = await prisma.flow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowFindManyArgs>(args?: SelectSubset<T, FlowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flow.
     * @param {FlowCreateArgs} args - Arguments to create a Flow.
     * @example
     * // Create one Flow
     * const Flow = await prisma.flow.create({
     *   data: {
     *     // ... data to create a Flow
     *   }
     * })
     * 
     */
    create<T extends FlowCreateArgs>(args: SelectSubset<T, FlowCreateArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flows.
     * @param {FlowCreateManyArgs} args - Arguments to create many Flows.
     * @example
     * // Create many Flows
     * const flow = await prisma.flow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowCreateManyArgs>(args?: SelectSubset<T, FlowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flow.
     * @param {FlowDeleteArgs} args - Arguments to delete one Flow.
     * @example
     * // Delete one Flow
     * const Flow = await prisma.flow.delete({
     *   where: {
     *     // ... filter to delete one Flow
     *   }
     * })
     * 
     */
    delete<T extends FlowDeleteArgs>(args: SelectSubset<T, FlowDeleteArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flow.
     * @param {FlowUpdateArgs} args - Arguments to update one Flow.
     * @example
     * // Update one Flow
     * const flow = await prisma.flow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowUpdateArgs>(args: SelectSubset<T, FlowUpdateArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flows.
     * @param {FlowDeleteManyArgs} args - Arguments to filter Flows to delete.
     * @example
     * // Delete a few Flows
     * const { count } = await prisma.flow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowDeleteManyArgs>(args?: SelectSubset<T, FlowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flows
     * const flow = await prisma.flow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowUpdateManyArgs>(args: SelectSubset<T, FlowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flow.
     * @param {FlowUpsertArgs} args - Arguments to update or create a Flow.
     * @example
     * // Update or create a Flow
     * const flow = await prisma.flow.upsert({
     *   create: {
     *     // ... data to create a Flow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flow we want to update
     *   }
     * })
     */
    upsert<T extends FlowUpsertArgs>(args: SelectSubset<T, FlowUpsertArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowCountArgs} args - Arguments to filter Flows to count.
     * @example
     * // Count the number of Flows
     * const count = await prisma.flow.count({
     *   where: {
     *     // ... the filter for the Flows we want to count
     *   }
     * })
    **/
    count<T extends FlowCountArgs>(
      args?: Subset<T, FlowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowAggregateArgs>(args: Subset<T, FlowAggregateArgs>): Prisma.PrismaPromise<GetFlowAggregateType<T>>

    /**
     * Group by Flow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowGroupByArgs} args - Group by arguments.
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
      T extends FlowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowGroupByArgs['orderBy'] }
        : { orderBy?: FlowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flow model
   */
  readonly fields: FlowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    folder<T extends FolderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FolderDefaultArgs<ExtArgs>>): Prisma__FolderClient<$Result.GetResult<Prisma.$FolderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    states<T extends Flow$statesArgs<ExtArgs> = {}>(args?: Subset<T, Flow$statesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shares<T extends Flow$sharesArgs<ExtArgs> = {}>(args?: Subset<T, Flow$sharesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Flow model
   */
  interface FlowFieldRefs {
    readonly id: FieldRef<"Flow", 'String'>
    readonly userId: FieldRef<"Flow", 'String'>
    readonly pageId: FieldRef<"Flow", 'String'>
    readonly folderId: FieldRef<"Flow", 'String'>
    readonly pageAccessToken: FieldRef<"Flow", 'String'>
    readonly name: FieldRef<"Flow", 'String'>
    readonly description: FieldRef<"Flow", 'String'>
    readonly status: FieldRef<"Flow", 'FlowStatus'>
    readonly logicJson: FieldRef<"Flow", 'Json'>
    readonly layoutJson: FieldRef<"Flow", 'Json'>
    readonly platform: FieldRef<"Flow", 'Platform'>
    readonly timeoutDuration: FieldRef<"Flow", 'String'>
    readonly startNodeId: FieldRef<"Flow", 'String'>
    readonly timeoutJson: FieldRef<"Flow", 'Json'>
    readonly createdAt: FieldRef<"Flow", 'DateTime'>
    readonly updatedAt: FieldRef<"Flow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flow findUnique
   */
  export type FlowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter, which Flow to fetch.
     */
    where: FlowWhereUniqueInput
  }

  /**
   * Flow findUniqueOrThrow
   */
  export type FlowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter, which Flow to fetch.
     */
    where: FlowWhereUniqueInput
  }

  /**
   * Flow findFirst
   */
  export type FlowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter, which Flow to fetch.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flows.
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flows.
     */
    distinct?: FlowScalarFieldEnum | FlowScalarFieldEnum[]
  }

  /**
   * Flow findFirstOrThrow
   */
  export type FlowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter, which Flow to fetch.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flows.
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flows.
     */
    distinct?: FlowScalarFieldEnum | FlowScalarFieldEnum[]
  }

  /**
   * Flow findMany
   */
  export type FlowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter, which Flows to fetch.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: FlowOrderByWithRelationInput | FlowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flows.
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    distinct?: FlowScalarFieldEnum | FlowScalarFieldEnum[]
  }

  /**
   * Flow create
   */
  export type FlowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * The data needed to create a Flow.
     */
    data: XOR<FlowCreateInput, FlowUncheckedCreateInput>
  }

  /**
   * Flow createMany
   */
  export type FlowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flows.
     */
    data: FlowCreateManyInput | FlowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flow update
   */
  export type FlowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * The data needed to update a Flow.
     */
    data: XOR<FlowUpdateInput, FlowUncheckedUpdateInput>
    /**
     * Choose, which Flow to update.
     */
    where: FlowWhereUniqueInput
  }

  /**
   * Flow updateMany
   */
  export type FlowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flows.
     */
    data: XOR<FlowUpdateManyMutationInput, FlowUncheckedUpdateManyInput>
    /**
     * Filter which Flows to update
     */
    where?: FlowWhereInput
    /**
     * Limit how many Flows to update.
     */
    limit?: number
  }

  /**
   * Flow upsert
   */
  export type FlowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * The filter to search for the Flow to update in case it exists.
     */
    where: FlowWhereUniqueInput
    /**
     * In case the Flow found by the `where` argument doesn't exist, create a new Flow with this data.
     */
    create: XOR<FlowCreateInput, FlowUncheckedCreateInput>
    /**
     * In case the Flow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowUpdateInput, FlowUncheckedUpdateInput>
  }

  /**
   * Flow delete
   */
  export type FlowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
    /**
     * Filter which Flow to delete.
     */
    where: FlowWhereUniqueInput
  }

  /**
   * Flow deleteMany
   */
  export type FlowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flows to delete
     */
    where?: FlowWhereInput
    /**
     * Limit how many Flows to delete.
     */
    limit?: number
  }

  /**
   * Flow.states
   */
  export type Flow$statesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    where?: UserFlowStateWhereInput
    orderBy?: UserFlowStateOrderByWithRelationInput | UserFlowStateOrderByWithRelationInput[]
    cursor?: UserFlowStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFlowStateScalarFieldEnum | UserFlowStateScalarFieldEnum[]
  }

  /**
   * Flow.shares
   */
  export type Flow$sharesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    where?: FlowShareWhereInput
    orderBy?: FlowShareOrderByWithRelationInput | FlowShareOrderByWithRelationInput[]
    cursor?: FlowShareWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowShareScalarFieldEnum | FlowShareScalarFieldEnum[]
  }

  /**
   * Flow without action
   */
  export type FlowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flow
     */
    omit?: FlowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowInclude<ExtArgs> | null
  }


  /**
   * Model UserFlowState
   */

  export type AggregateUserFlowState = {
    _count: UserFlowStateCountAggregateOutputType | null
    _min: UserFlowStateMinAggregateOutputType | null
    _max: UserFlowStateMaxAggregateOutputType | null
  }

  export type UserFlowStateMinAggregateOutputType = {
    id: string | null
    platformUserId: string | null
    ownerUserId: string | null
    flowId: string | null
    pageId: string | null
    currentStep: string | null
    status: $Enums.UserFlowStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserFlowStateMaxAggregateOutputType = {
    id: string | null
    platformUserId: string | null
    ownerUserId: string | null
    flowId: string | null
    pageId: string | null
    currentStep: string | null
    status: $Enums.UserFlowStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserFlowStateCountAggregateOutputType = {
    id: number
    platformUserId: number
    ownerUserId: number
    flowId: number
    pageId: number
    currentStep: number
    stepHistory: number
    variables: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserFlowStateMinAggregateInputType = {
    id?: true
    platformUserId?: true
    ownerUserId?: true
    flowId?: true
    pageId?: true
    currentStep?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserFlowStateMaxAggregateInputType = {
    id?: true
    platformUserId?: true
    ownerUserId?: true
    flowId?: true
    pageId?: true
    currentStep?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserFlowStateCountAggregateInputType = {
    id?: true
    platformUserId?: true
    ownerUserId?: true
    flowId?: true
    pageId?: true
    currentStep?: true
    stepHistory?: true
    variables?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserFlowStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFlowState to aggregate.
     */
    where?: UserFlowStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFlowStates to fetch.
     */
    orderBy?: UserFlowStateOrderByWithRelationInput | UserFlowStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFlowStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFlowStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFlowStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFlowStates
    **/
    _count?: true | UserFlowStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFlowStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFlowStateMaxAggregateInputType
  }

  export type GetUserFlowStateAggregateType<T extends UserFlowStateAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFlowState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFlowState[P]>
      : GetScalarType<T[P], AggregateUserFlowState[P]>
  }




  export type UserFlowStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFlowStateWhereInput
    orderBy?: UserFlowStateOrderByWithAggregationInput | UserFlowStateOrderByWithAggregationInput[]
    by: UserFlowStateScalarFieldEnum[] | UserFlowStateScalarFieldEnum
    having?: UserFlowStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFlowStateCountAggregateInputType | true
    _min?: UserFlowStateMinAggregateInputType
    _max?: UserFlowStateMaxAggregateInputType
  }

  export type UserFlowStateGroupByOutputType = {
    id: string
    platformUserId: string
    ownerUserId: string
    flowId: string
    pageId: string
    currentStep: string
    stepHistory: JsonValue | null
    variables: JsonValue | null
    status: $Enums.UserFlowStatus
    createdAt: Date
    updatedAt: Date
    _count: UserFlowStateCountAggregateOutputType | null
    _min: UserFlowStateMinAggregateOutputType | null
    _max: UserFlowStateMaxAggregateOutputType | null
  }

  type GetUserFlowStateGroupByPayload<T extends UserFlowStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFlowStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFlowStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFlowStateGroupByOutputType[P]>
            : GetScalarType<T[P], UserFlowStateGroupByOutputType[P]>
        }
      >
    >


  export type UserFlowStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platformUserId?: boolean
    ownerUserId?: boolean
    flowId?: boolean
    pageId?: boolean
    currentStep?: boolean
    stepHistory?: boolean
    variables?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    flow?: boolean | FlowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFlowState"]>



  export type UserFlowStateSelectScalar = {
    id?: boolean
    platformUserId?: boolean
    ownerUserId?: boolean
    flowId?: boolean
    pageId?: boolean
    currentStep?: boolean
    stepHistory?: boolean
    variables?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserFlowStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platformUserId" | "ownerUserId" | "flowId" | "pageId" | "currentStep" | "stepHistory" | "variables" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["userFlowState"]>
  export type UserFlowStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    flow?: boolean | FlowDefaultArgs<ExtArgs>
  }

  export type $UserFlowStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFlowState"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      flow: Prisma.$FlowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      platformUserId: string
      ownerUserId: string
      flowId: string
      pageId: string
      currentStep: string
      stepHistory: Prisma.JsonValue | null
      variables: Prisma.JsonValue | null
      status: $Enums.UserFlowStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userFlowState"]>
    composites: {}
  }

  type UserFlowStateGetPayload<S extends boolean | null | undefined | UserFlowStateDefaultArgs> = $Result.GetResult<Prisma.$UserFlowStatePayload, S>

  type UserFlowStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFlowStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFlowStateCountAggregateInputType | true
    }

  export interface UserFlowStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFlowState'], meta: { name: 'UserFlowState' } }
    /**
     * Find zero or one UserFlowState that matches the filter.
     * @param {UserFlowStateFindUniqueArgs} args - Arguments to find a UserFlowState
     * @example
     * // Get one UserFlowState
     * const userFlowState = await prisma.userFlowState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFlowStateFindUniqueArgs>(args: SelectSubset<T, UserFlowStateFindUniqueArgs<ExtArgs>>): Prisma__UserFlowStateClient<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFlowState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFlowStateFindUniqueOrThrowArgs} args - Arguments to find a UserFlowState
     * @example
     * // Get one UserFlowState
     * const userFlowState = await prisma.userFlowState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFlowStateFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFlowStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFlowStateClient<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFlowState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFlowStateFindFirstArgs} args - Arguments to find a UserFlowState
     * @example
     * // Get one UserFlowState
     * const userFlowState = await prisma.userFlowState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFlowStateFindFirstArgs>(args?: SelectSubset<T, UserFlowStateFindFirstArgs<ExtArgs>>): Prisma__UserFlowStateClient<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFlowState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFlowStateFindFirstOrThrowArgs} args - Arguments to find a UserFlowState
     * @example
     * // Get one UserFlowState
     * const userFlowState = await prisma.userFlowState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFlowStateFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFlowStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFlowStateClient<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFlowStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFlowStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFlowStates
     * const userFlowStates = await prisma.userFlowState.findMany()
     * 
     * // Get first 10 UserFlowStates
     * const userFlowStates = await prisma.userFlowState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFlowStateWithIdOnly = await prisma.userFlowState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFlowStateFindManyArgs>(args?: SelectSubset<T, UserFlowStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFlowState.
     * @param {UserFlowStateCreateArgs} args - Arguments to create a UserFlowState.
     * @example
     * // Create one UserFlowState
     * const UserFlowState = await prisma.userFlowState.create({
     *   data: {
     *     // ... data to create a UserFlowState
     *   }
     * })
     * 
     */
    create<T extends UserFlowStateCreateArgs>(args: SelectSubset<T, UserFlowStateCreateArgs<ExtArgs>>): Prisma__UserFlowStateClient<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFlowStates.
     * @param {UserFlowStateCreateManyArgs} args - Arguments to create many UserFlowStates.
     * @example
     * // Create many UserFlowStates
     * const userFlowState = await prisma.userFlowState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFlowStateCreateManyArgs>(args?: SelectSubset<T, UserFlowStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFlowState.
     * @param {UserFlowStateDeleteArgs} args - Arguments to delete one UserFlowState.
     * @example
     * // Delete one UserFlowState
     * const UserFlowState = await prisma.userFlowState.delete({
     *   where: {
     *     // ... filter to delete one UserFlowState
     *   }
     * })
     * 
     */
    delete<T extends UserFlowStateDeleteArgs>(args: SelectSubset<T, UserFlowStateDeleteArgs<ExtArgs>>): Prisma__UserFlowStateClient<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFlowState.
     * @param {UserFlowStateUpdateArgs} args - Arguments to update one UserFlowState.
     * @example
     * // Update one UserFlowState
     * const userFlowState = await prisma.userFlowState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFlowStateUpdateArgs>(args: SelectSubset<T, UserFlowStateUpdateArgs<ExtArgs>>): Prisma__UserFlowStateClient<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFlowStates.
     * @param {UserFlowStateDeleteManyArgs} args - Arguments to filter UserFlowStates to delete.
     * @example
     * // Delete a few UserFlowStates
     * const { count } = await prisma.userFlowState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFlowStateDeleteManyArgs>(args?: SelectSubset<T, UserFlowStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFlowStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFlowStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFlowStates
     * const userFlowState = await prisma.userFlowState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFlowStateUpdateManyArgs>(args: SelectSubset<T, UserFlowStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFlowState.
     * @param {UserFlowStateUpsertArgs} args - Arguments to update or create a UserFlowState.
     * @example
     * // Update or create a UserFlowState
     * const userFlowState = await prisma.userFlowState.upsert({
     *   create: {
     *     // ... data to create a UserFlowState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFlowState we want to update
     *   }
     * })
     */
    upsert<T extends UserFlowStateUpsertArgs>(args: SelectSubset<T, UserFlowStateUpsertArgs<ExtArgs>>): Prisma__UserFlowStateClient<$Result.GetResult<Prisma.$UserFlowStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFlowStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFlowStateCountArgs} args - Arguments to filter UserFlowStates to count.
     * @example
     * // Count the number of UserFlowStates
     * const count = await prisma.userFlowState.count({
     *   where: {
     *     // ... the filter for the UserFlowStates we want to count
     *   }
     * })
    **/
    count<T extends UserFlowStateCountArgs>(
      args?: Subset<T, UserFlowStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFlowStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFlowState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFlowStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserFlowStateAggregateArgs>(args: Subset<T, UserFlowStateAggregateArgs>): Prisma.PrismaPromise<GetUserFlowStateAggregateType<T>>

    /**
     * Group by UserFlowState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFlowStateGroupByArgs} args - Group by arguments.
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
      T extends UserFlowStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFlowStateGroupByArgs['orderBy'] }
        : { orderBy?: UserFlowStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserFlowStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFlowStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFlowState model
   */
  readonly fields: UserFlowStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFlowState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFlowStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    flow<T extends FlowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowDefaultArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserFlowState model
   */
  interface UserFlowStateFieldRefs {
    readonly id: FieldRef<"UserFlowState", 'String'>
    readonly platformUserId: FieldRef<"UserFlowState", 'String'>
    readonly ownerUserId: FieldRef<"UserFlowState", 'String'>
    readonly flowId: FieldRef<"UserFlowState", 'String'>
    readonly pageId: FieldRef<"UserFlowState", 'String'>
    readonly currentStep: FieldRef<"UserFlowState", 'String'>
    readonly stepHistory: FieldRef<"UserFlowState", 'Json'>
    readonly variables: FieldRef<"UserFlowState", 'Json'>
    readonly status: FieldRef<"UserFlowState", 'UserFlowStatus'>
    readonly createdAt: FieldRef<"UserFlowState", 'DateTime'>
    readonly updatedAt: FieldRef<"UserFlowState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserFlowState findUnique
   */
  export type UserFlowStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    /**
     * Filter, which UserFlowState to fetch.
     */
    where: UserFlowStateWhereUniqueInput
  }

  /**
   * UserFlowState findUniqueOrThrow
   */
  export type UserFlowStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    /**
     * Filter, which UserFlowState to fetch.
     */
    where: UserFlowStateWhereUniqueInput
  }

  /**
   * UserFlowState findFirst
   */
  export type UserFlowStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    /**
     * Filter, which UserFlowState to fetch.
     */
    where?: UserFlowStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFlowStates to fetch.
     */
    orderBy?: UserFlowStateOrderByWithRelationInput | UserFlowStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFlowStates.
     */
    cursor?: UserFlowStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFlowStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFlowStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFlowStates.
     */
    distinct?: UserFlowStateScalarFieldEnum | UserFlowStateScalarFieldEnum[]
  }

  /**
   * UserFlowState findFirstOrThrow
   */
  export type UserFlowStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    /**
     * Filter, which UserFlowState to fetch.
     */
    where?: UserFlowStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFlowStates to fetch.
     */
    orderBy?: UserFlowStateOrderByWithRelationInput | UserFlowStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFlowStates.
     */
    cursor?: UserFlowStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFlowStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFlowStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFlowStates.
     */
    distinct?: UserFlowStateScalarFieldEnum | UserFlowStateScalarFieldEnum[]
  }

  /**
   * UserFlowState findMany
   */
  export type UserFlowStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    /**
     * Filter, which UserFlowStates to fetch.
     */
    where?: UserFlowStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFlowStates to fetch.
     */
    orderBy?: UserFlowStateOrderByWithRelationInput | UserFlowStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFlowStates.
     */
    cursor?: UserFlowStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFlowStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFlowStates.
     */
    skip?: number
    distinct?: UserFlowStateScalarFieldEnum | UserFlowStateScalarFieldEnum[]
  }

  /**
   * UserFlowState create
   */
  export type UserFlowStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFlowState.
     */
    data: XOR<UserFlowStateCreateInput, UserFlowStateUncheckedCreateInput>
  }

  /**
   * UserFlowState createMany
   */
  export type UserFlowStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFlowStates.
     */
    data: UserFlowStateCreateManyInput | UserFlowStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFlowState update
   */
  export type UserFlowStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFlowState.
     */
    data: XOR<UserFlowStateUpdateInput, UserFlowStateUncheckedUpdateInput>
    /**
     * Choose, which UserFlowState to update.
     */
    where: UserFlowStateWhereUniqueInput
  }

  /**
   * UserFlowState updateMany
   */
  export type UserFlowStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFlowStates.
     */
    data: XOR<UserFlowStateUpdateManyMutationInput, UserFlowStateUncheckedUpdateManyInput>
    /**
     * Filter which UserFlowStates to update
     */
    where?: UserFlowStateWhereInput
    /**
     * Limit how many UserFlowStates to update.
     */
    limit?: number
  }

  /**
   * UserFlowState upsert
   */
  export type UserFlowStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFlowState to update in case it exists.
     */
    where: UserFlowStateWhereUniqueInput
    /**
     * In case the UserFlowState found by the `where` argument doesn't exist, create a new UserFlowState with this data.
     */
    create: XOR<UserFlowStateCreateInput, UserFlowStateUncheckedCreateInput>
    /**
     * In case the UserFlowState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFlowStateUpdateInput, UserFlowStateUncheckedUpdateInput>
  }

  /**
   * UserFlowState delete
   */
  export type UserFlowStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
    /**
     * Filter which UserFlowState to delete.
     */
    where: UserFlowStateWhereUniqueInput
  }

  /**
   * UserFlowState deleteMany
   */
  export type UserFlowStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFlowStates to delete
     */
    where?: UserFlowStateWhereInput
    /**
     * Limit how many UserFlowStates to delete.
     */
    limit?: number
  }

  /**
   * UserFlowState without action
   */
  export type UserFlowStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFlowState
     */
    select?: UserFlowStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFlowState
     */
    omit?: UserFlowStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFlowStateInclude<ExtArgs> | null
  }


  /**
   * Model FlowShare
   */

  export type AggregateFlowShare = {
    _count: FlowShareCountAggregateOutputType | null
    _avg: FlowShareAvgAggregateOutputType | null
    _sum: FlowShareSumAggregateOutputType | null
    _min: FlowShareMinAggregateOutputType | null
    _max: FlowShareMaxAggregateOutputType | null
  }

  export type FlowShareAvgAggregateOutputType = {
    downloadCount: number | null
  }

  export type FlowShareSumAggregateOutputType = {
    downloadCount: number | null
  }

  export type FlowShareMinAggregateOutputType = {
    id: string | null
    flowId: string | null
    userId: string | null
    name: string | null
    description: string | null
    thumbnail: string | null
    status: $Enums.FlowShareStatus | null
    downloadCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowShareMaxAggregateOutputType = {
    id: string | null
    flowId: string | null
    userId: string | null
    name: string | null
    description: string | null
    thumbnail: string | null
    status: $Enums.FlowShareStatus | null
    downloadCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowShareCountAggregateOutputType = {
    id: number
    flowId: number
    userId: number
    name: number
    description: number
    thumbnail: number
    status: number
    downloadCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlowShareAvgAggregateInputType = {
    downloadCount?: true
  }

  export type FlowShareSumAggregateInputType = {
    downloadCount?: true
  }

  export type FlowShareMinAggregateInputType = {
    id?: true
    flowId?: true
    userId?: true
    name?: true
    description?: true
    thumbnail?: true
    status?: true
    downloadCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowShareMaxAggregateInputType = {
    id?: true
    flowId?: true
    userId?: true
    name?: true
    description?: true
    thumbnail?: true
    status?: true
    downloadCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowShareCountAggregateInputType = {
    id?: true
    flowId?: true
    userId?: true
    name?: true
    description?: true
    thumbnail?: true
    status?: true
    downloadCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlowShareAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowShare to aggregate.
     */
    where?: FlowShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowShares to fetch.
     */
    orderBy?: FlowShareOrderByWithRelationInput | FlowShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowShares
    **/
    _count?: true | FlowShareCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowShareAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowShareSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowShareMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowShareMaxAggregateInputType
  }

  export type GetFlowShareAggregateType<T extends FlowShareAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowShare]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowShare[P]>
      : GetScalarType<T[P], AggregateFlowShare[P]>
  }




  export type FlowShareGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowShareWhereInput
    orderBy?: FlowShareOrderByWithAggregationInput | FlowShareOrderByWithAggregationInput[]
    by: FlowShareScalarFieldEnum[] | FlowShareScalarFieldEnum
    having?: FlowShareScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowShareCountAggregateInputType | true
    _avg?: FlowShareAvgAggregateInputType
    _sum?: FlowShareSumAggregateInputType
    _min?: FlowShareMinAggregateInputType
    _max?: FlowShareMaxAggregateInputType
  }

  export type FlowShareGroupByOutputType = {
    id: string
    flowId: string
    userId: string
    name: string
    description: string | null
    thumbnail: string | null
    status: $Enums.FlowShareStatus
    downloadCount: number
    createdAt: Date
    updatedAt: Date
    _count: FlowShareCountAggregateOutputType | null
    _avg: FlowShareAvgAggregateOutputType | null
    _sum: FlowShareSumAggregateOutputType | null
    _min: FlowShareMinAggregateOutputType | null
    _max: FlowShareMaxAggregateOutputType | null
  }

  type GetFlowShareGroupByPayload<T extends FlowShareGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowShareGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowShareGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowShareGroupByOutputType[P]>
            : GetScalarType<T[P], FlowShareGroupByOutputType[P]>
        }
      >
    >


  export type FlowShareSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flowId?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    thumbnail?: boolean
    status?: boolean
    downloadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flow?: boolean | FlowDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | FlowShare$commentsArgs<ExtArgs>
    likes?: boolean | FlowShare$likesArgs<ExtArgs>
    saves?: boolean | FlowShare$savesArgs<ExtArgs>
    _count?: boolean | FlowShareCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowShare"]>



  export type FlowShareSelectScalar = {
    id?: boolean
    flowId?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    thumbnail?: boolean
    status?: boolean
    downloadCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlowShareOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flowId" | "userId" | "name" | "description" | "thumbnail" | "status" | "downloadCount" | "createdAt" | "updatedAt", ExtArgs["result"]["flowShare"]>
  export type FlowShareInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flow?: boolean | FlowDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | FlowShare$commentsArgs<ExtArgs>
    likes?: boolean | FlowShare$likesArgs<ExtArgs>
    saves?: boolean | FlowShare$savesArgs<ExtArgs>
    _count?: boolean | FlowShareCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FlowSharePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowShare"
    objects: {
      flow: Prisma.$FlowPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$FlowCommentPayload<ExtArgs>[]
      likes: Prisma.$FlowLikePayload<ExtArgs>[]
      saves: Prisma.$FlowSavePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flowId: string
      userId: string
      name: string
      description: string | null
      thumbnail: string | null
      status: $Enums.FlowShareStatus
      downloadCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flowShare"]>
    composites: {}
  }

  type FlowShareGetPayload<S extends boolean | null | undefined | FlowShareDefaultArgs> = $Result.GetResult<Prisma.$FlowSharePayload, S>

  type FlowShareCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowShareFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowShareCountAggregateInputType | true
    }

  export interface FlowShareDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowShare'], meta: { name: 'FlowShare' } }
    /**
     * Find zero or one FlowShare that matches the filter.
     * @param {FlowShareFindUniqueArgs} args - Arguments to find a FlowShare
     * @example
     * // Get one FlowShare
     * const flowShare = await prisma.flowShare.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowShareFindUniqueArgs>(args: SelectSubset<T, FlowShareFindUniqueArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowShare that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowShareFindUniqueOrThrowArgs} args - Arguments to find a FlowShare
     * @example
     * // Get one FlowShare
     * const flowShare = await prisma.flowShare.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowShareFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowShareFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowShare that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowShareFindFirstArgs} args - Arguments to find a FlowShare
     * @example
     * // Get one FlowShare
     * const flowShare = await prisma.flowShare.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowShareFindFirstArgs>(args?: SelectSubset<T, FlowShareFindFirstArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowShare that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowShareFindFirstOrThrowArgs} args - Arguments to find a FlowShare
     * @example
     * // Get one FlowShare
     * const flowShare = await prisma.flowShare.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowShareFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowShareFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowShares that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowShareFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowShares
     * const flowShares = await prisma.flowShare.findMany()
     * 
     * // Get first 10 FlowShares
     * const flowShares = await prisma.flowShare.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowShareWithIdOnly = await prisma.flowShare.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowShareFindManyArgs>(args?: SelectSubset<T, FlowShareFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowShare.
     * @param {FlowShareCreateArgs} args - Arguments to create a FlowShare.
     * @example
     * // Create one FlowShare
     * const FlowShare = await prisma.flowShare.create({
     *   data: {
     *     // ... data to create a FlowShare
     *   }
     * })
     * 
     */
    create<T extends FlowShareCreateArgs>(args: SelectSubset<T, FlowShareCreateArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowShares.
     * @param {FlowShareCreateManyArgs} args - Arguments to create many FlowShares.
     * @example
     * // Create many FlowShares
     * const flowShare = await prisma.flowShare.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowShareCreateManyArgs>(args?: SelectSubset<T, FlowShareCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowShare.
     * @param {FlowShareDeleteArgs} args - Arguments to delete one FlowShare.
     * @example
     * // Delete one FlowShare
     * const FlowShare = await prisma.flowShare.delete({
     *   where: {
     *     // ... filter to delete one FlowShare
     *   }
     * })
     * 
     */
    delete<T extends FlowShareDeleteArgs>(args: SelectSubset<T, FlowShareDeleteArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowShare.
     * @param {FlowShareUpdateArgs} args - Arguments to update one FlowShare.
     * @example
     * // Update one FlowShare
     * const flowShare = await prisma.flowShare.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowShareUpdateArgs>(args: SelectSubset<T, FlowShareUpdateArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowShares.
     * @param {FlowShareDeleteManyArgs} args - Arguments to filter FlowShares to delete.
     * @example
     * // Delete a few FlowShares
     * const { count } = await prisma.flowShare.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowShareDeleteManyArgs>(args?: SelectSubset<T, FlowShareDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowShareUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowShares
     * const flowShare = await prisma.flowShare.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowShareUpdateManyArgs>(args: SelectSubset<T, FlowShareUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowShare.
     * @param {FlowShareUpsertArgs} args - Arguments to update or create a FlowShare.
     * @example
     * // Update or create a FlowShare
     * const flowShare = await prisma.flowShare.upsert({
     *   create: {
     *     // ... data to create a FlowShare
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowShare we want to update
     *   }
     * })
     */
    upsert<T extends FlowShareUpsertArgs>(args: SelectSubset<T, FlowShareUpsertArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowShares.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowShareCountArgs} args - Arguments to filter FlowShares to count.
     * @example
     * // Count the number of FlowShares
     * const count = await prisma.flowShare.count({
     *   where: {
     *     // ... the filter for the FlowShares we want to count
     *   }
     * })
    **/
    count<T extends FlowShareCountArgs>(
      args?: Subset<T, FlowShareCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowShareCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowShareAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowShareAggregateArgs>(args: Subset<T, FlowShareAggregateArgs>): Prisma.PrismaPromise<GetFlowShareAggregateType<T>>

    /**
     * Group by FlowShare.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowShareGroupByArgs} args - Group by arguments.
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
      T extends FlowShareGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowShareGroupByArgs['orderBy'] }
        : { orderBy?: FlowShareGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowShareGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowShareGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowShare model
   */
  readonly fields: FlowShareFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowShare.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowShareClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flow<T extends FlowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowDefaultArgs<ExtArgs>>): Prisma__FlowClient<$Result.GetResult<Prisma.$FlowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends FlowShare$commentsArgs<ExtArgs> = {}>(args?: Subset<T, FlowShare$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends FlowShare$likesArgs<ExtArgs> = {}>(args?: Subset<T, FlowShare$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saves<T extends FlowShare$savesArgs<ExtArgs> = {}>(args?: Subset<T, FlowShare$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlowShare model
   */
  interface FlowShareFieldRefs {
    readonly id: FieldRef<"FlowShare", 'String'>
    readonly flowId: FieldRef<"FlowShare", 'String'>
    readonly userId: FieldRef<"FlowShare", 'String'>
    readonly name: FieldRef<"FlowShare", 'String'>
    readonly description: FieldRef<"FlowShare", 'String'>
    readonly thumbnail: FieldRef<"FlowShare", 'String'>
    readonly status: FieldRef<"FlowShare", 'FlowShareStatus'>
    readonly downloadCount: FieldRef<"FlowShare", 'Int'>
    readonly createdAt: FieldRef<"FlowShare", 'DateTime'>
    readonly updatedAt: FieldRef<"FlowShare", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlowShare findUnique
   */
  export type FlowShareFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    /**
     * Filter, which FlowShare to fetch.
     */
    where: FlowShareWhereUniqueInput
  }

  /**
   * FlowShare findUniqueOrThrow
   */
  export type FlowShareFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    /**
     * Filter, which FlowShare to fetch.
     */
    where: FlowShareWhereUniqueInput
  }

  /**
   * FlowShare findFirst
   */
  export type FlowShareFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    /**
     * Filter, which FlowShare to fetch.
     */
    where?: FlowShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowShares to fetch.
     */
    orderBy?: FlowShareOrderByWithRelationInput | FlowShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowShares.
     */
    cursor?: FlowShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowShares.
     */
    distinct?: FlowShareScalarFieldEnum | FlowShareScalarFieldEnum[]
  }

  /**
   * FlowShare findFirstOrThrow
   */
  export type FlowShareFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    /**
     * Filter, which FlowShare to fetch.
     */
    where?: FlowShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowShares to fetch.
     */
    orderBy?: FlowShareOrderByWithRelationInput | FlowShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowShares.
     */
    cursor?: FlowShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowShares.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowShares.
     */
    distinct?: FlowShareScalarFieldEnum | FlowShareScalarFieldEnum[]
  }

  /**
   * FlowShare findMany
   */
  export type FlowShareFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    /**
     * Filter, which FlowShares to fetch.
     */
    where?: FlowShareWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowShares to fetch.
     */
    orderBy?: FlowShareOrderByWithRelationInput | FlowShareOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowShares.
     */
    cursor?: FlowShareWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowShares from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowShares.
     */
    skip?: number
    distinct?: FlowShareScalarFieldEnum | FlowShareScalarFieldEnum[]
  }

  /**
   * FlowShare create
   */
  export type FlowShareCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowShare.
     */
    data: XOR<FlowShareCreateInput, FlowShareUncheckedCreateInput>
  }

  /**
   * FlowShare createMany
   */
  export type FlowShareCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowShares.
     */
    data: FlowShareCreateManyInput | FlowShareCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowShare update
   */
  export type FlowShareUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowShare.
     */
    data: XOR<FlowShareUpdateInput, FlowShareUncheckedUpdateInput>
    /**
     * Choose, which FlowShare to update.
     */
    where: FlowShareWhereUniqueInput
  }

  /**
   * FlowShare updateMany
   */
  export type FlowShareUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowShares.
     */
    data: XOR<FlowShareUpdateManyMutationInput, FlowShareUncheckedUpdateManyInput>
    /**
     * Filter which FlowShares to update
     */
    where?: FlowShareWhereInput
    /**
     * Limit how many FlowShares to update.
     */
    limit?: number
  }

  /**
   * FlowShare upsert
   */
  export type FlowShareUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowShare to update in case it exists.
     */
    where: FlowShareWhereUniqueInput
    /**
     * In case the FlowShare found by the `where` argument doesn't exist, create a new FlowShare with this data.
     */
    create: XOR<FlowShareCreateInput, FlowShareUncheckedCreateInput>
    /**
     * In case the FlowShare was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowShareUpdateInput, FlowShareUncheckedUpdateInput>
  }

  /**
   * FlowShare delete
   */
  export type FlowShareDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
    /**
     * Filter which FlowShare to delete.
     */
    where: FlowShareWhereUniqueInput
  }

  /**
   * FlowShare deleteMany
   */
  export type FlowShareDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowShares to delete
     */
    where?: FlowShareWhereInput
    /**
     * Limit how many FlowShares to delete.
     */
    limit?: number
  }

  /**
   * FlowShare.comments
   */
  export type FlowShare$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    where?: FlowCommentWhereInput
    orderBy?: FlowCommentOrderByWithRelationInput | FlowCommentOrderByWithRelationInput[]
    cursor?: FlowCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowCommentScalarFieldEnum | FlowCommentScalarFieldEnum[]
  }

  /**
   * FlowShare.likes
   */
  export type FlowShare$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    where?: FlowLikeWhereInput
    orderBy?: FlowLikeOrderByWithRelationInput | FlowLikeOrderByWithRelationInput[]
    cursor?: FlowLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowLikeScalarFieldEnum | FlowLikeScalarFieldEnum[]
  }

  /**
   * FlowShare.saves
   */
  export type FlowShare$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    where?: FlowSaveWhereInput
    orderBy?: FlowSaveOrderByWithRelationInput | FlowSaveOrderByWithRelationInput[]
    cursor?: FlowSaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowSaveScalarFieldEnum | FlowSaveScalarFieldEnum[]
  }

  /**
   * FlowShare without action
   */
  export type FlowShareDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowShare
     */
    select?: FlowShareSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowShare
     */
    omit?: FlowShareOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowShareInclude<ExtArgs> | null
  }


  /**
   * Model FlowComment
   */

  export type AggregateFlowComment = {
    _count: FlowCommentCountAggregateOutputType | null
    _min: FlowCommentMinAggregateOutputType | null
    _max: FlowCommentMaxAggregateOutputType | null
  }

  export type FlowCommentMinAggregateOutputType = {
    id: string | null
    flowShareId: string | null
    userId: string | null
    comment: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowCommentMaxAggregateOutputType = {
    id: string | null
    flowShareId: string | null
    userId: string | null
    comment: string | null
    parentId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowCommentCountAggregateOutputType = {
    id: number
    flowShareId: number
    userId: number
    comment: number
    parentId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlowCommentMinAggregateInputType = {
    id?: true
    flowShareId?: true
    userId?: true
    comment?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowCommentMaxAggregateInputType = {
    id?: true
    flowShareId?: true
    userId?: true
    comment?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowCommentCountAggregateInputType = {
    id?: true
    flowShareId?: true
    userId?: true
    comment?: true
    parentId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlowCommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowComment to aggregate.
     */
    where?: FlowCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowComments to fetch.
     */
    orderBy?: FlowCommentOrderByWithRelationInput | FlowCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowComments
    **/
    _count?: true | FlowCommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowCommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowCommentMaxAggregateInputType
  }

  export type GetFlowCommentAggregateType<T extends FlowCommentAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowComment[P]>
      : GetScalarType<T[P], AggregateFlowComment[P]>
  }




  export type FlowCommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowCommentWhereInput
    orderBy?: FlowCommentOrderByWithAggregationInput | FlowCommentOrderByWithAggregationInput[]
    by: FlowCommentScalarFieldEnum[] | FlowCommentScalarFieldEnum
    having?: FlowCommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowCommentCountAggregateInputType | true
    _min?: FlowCommentMinAggregateInputType
    _max?: FlowCommentMaxAggregateInputType
  }

  export type FlowCommentGroupByOutputType = {
    id: string
    flowShareId: string
    userId: string
    comment: string
    parentId: string | null
    createdAt: Date
    updatedAt: Date
    _count: FlowCommentCountAggregateOutputType | null
    _min: FlowCommentMinAggregateOutputType | null
    _max: FlowCommentMaxAggregateOutputType | null
  }

  type GetFlowCommentGroupByPayload<T extends FlowCommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowCommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowCommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowCommentGroupByOutputType[P]>
            : GetScalarType<T[P], FlowCommentGroupByOutputType[P]>
        }
      >
    >


  export type FlowCommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flowShareId?: boolean
    userId?: boolean
    comment?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flowShare?: boolean | FlowShareDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | FlowComment$parentArgs<ExtArgs>
    replies?: boolean | FlowComment$repliesArgs<ExtArgs>
    _count?: boolean | FlowCommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowComment"]>



  export type FlowCommentSelectScalar = {
    id?: boolean
    flowShareId?: boolean
    userId?: boolean
    comment?: boolean
    parentId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlowCommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flowShareId" | "userId" | "comment" | "parentId" | "createdAt" | "updatedAt", ExtArgs["result"]["flowComment"]>
  export type FlowCommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowShare?: boolean | FlowShareDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | FlowComment$parentArgs<ExtArgs>
    replies?: boolean | FlowComment$repliesArgs<ExtArgs>
    _count?: boolean | FlowCommentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $FlowCommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowComment"
    objects: {
      flowShare: Prisma.$FlowSharePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$FlowCommentPayload<ExtArgs> | null
      replies: Prisma.$FlowCommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flowShareId: string
      userId: string
      comment: string
      parentId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flowComment"]>
    composites: {}
  }

  type FlowCommentGetPayload<S extends boolean | null | undefined | FlowCommentDefaultArgs> = $Result.GetResult<Prisma.$FlowCommentPayload, S>

  type FlowCommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowCommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowCommentCountAggregateInputType | true
    }

  export interface FlowCommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowComment'], meta: { name: 'FlowComment' } }
    /**
     * Find zero or one FlowComment that matches the filter.
     * @param {FlowCommentFindUniqueArgs} args - Arguments to find a FlowComment
     * @example
     * // Get one FlowComment
     * const flowComment = await prisma.flowComment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowCommentFindUniqueArgs>(args: SelectSubset<T, FlowCommentFindUniqueArgs<ExtArgs>>): Prisma__FlowCommentClient<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowComment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowCommentFindUniqueOrThrowArgs} args - Arguments to find a FlowComment
     * @example
     * // Get one FlowComment
     * const flowComment = await prisma.flowComment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowCommentFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowCommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowCommentClient<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowComment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowCommentFindFirstArgs} args - Arguments to find a FlowComment
     * @example
     * // Get one FlowComment
     * const flowComment = await prisma.flowComment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowCommentFindFirstArgs>(args?: SelectSubset<T, FlowCommentFindFirstArgs<ExtArgs>>): Prisma__FlowCommentClient<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowComment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowCommentFindFirstOrThrowArgs} args - Arguments to find a FlowComment
     * @example
     * // Get one FlowComment
     * const flowComment = await prisma.flowComment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowCommentFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowCommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowCommentClient<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowCommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowComments
     * const flowComments = await prisma.flowComment.findMany()
     * 
     * // Get first 10 FlowComments
     * const flowComments = await prisma.flowComment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowCommentWithIdOnly = await prisma.flowComment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowCommentFindManyArgs>(args?: SelectSubset<T, FlowCommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowComment.
     * @param {FlowCommentCreateArgs} args - Arguments to create a FlowComment.
     * @example
     * // Create one FlowComment
     * const FlowComment = await prisma.flowComment.create({
     *   data: {
     *     // ... data to create a FlowComment
     *   }
     * })
     * 
     */
    create<T extends FlowCommentCreateArgs>(args: SelectSubset<T, FlowCommentCreateArgs<ExtArgs>>): Prisma__FlowCommentClient<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowComments.
     * @param {FlowCommentCreateManyArgs} args - Arguments to create many FlowComments.
     * @example
     * // Create many FlowComments
     * const flowComment = await prisma.flowComment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowCommentCreateManyArgs>(args?: SelectSubset<T, FlowCommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowComment.
     * @param {FlowCommentDeleteArgs} args - Arguments to delete one FlowComment.
     * @example
     * // Delete one FlowComment
     * const FlowComment = await prisma.flowComment.delete({
     *   where: {
     *     // ... filter to delete one FlowComment
     *   }
     * })
     * 
     */
    delete<T extends FlowCommentDeleteArgs>(args: SelectSubset<T, FlowCommentDeleteArgs<ExtArgs>>): Prisma__FlowCommentClient<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowComment.
     * @param {FlowCommentUpdateArgs} args - Arguments to update one FlowComment.
     * @example
     * // Update one FlowComment
     * const flowComment = await prisma.flowComment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowCommentUpdateArgs>(args: SelectSubset<T, FlowCommentUpdateArgs<ExtArgs>>): Prisma__FlowCommentClient<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowComments.
     * @param {FlowCommentDeleteManyArgs} args - Arguments to filter FlowComments to delete.
     * @example
     * // Delete a few FlowComments
     * const { count } = await prisma.flowComment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowCommentDeleteManyArgs>(args?: SelectSubset<T, FlowCommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowCommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowComments
     * const flowComment = await prisma.flowComment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowCommentUpdateManyArgs>(args: SelectSubset<T, FlowCommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowComment.
     * @param {FlowCommentUpsertArgs} args - Arguments to update or create a FlowComment.
     * @example
     * // Update or create a FlowComment
     * const flowComment = await prisma.flowComment.upsert({
     *   create: {
     *     // ... data to create a FlowComment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowComment we want to update
     *   }
     * })
     */
    upsert<T extends FlowCommentUpsertArgs>(args: SelectSubset<T, FlowCommentUpsertArgs<ExtArgs>>): Prisma__FlowCommentClient<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowCommentCountArgs} args - Arguments to filter FlowComments to count.
     * @example
     * // Count the number of FlowComments
     * const count = await prisma.flowComment.count({
     *   where: {
     *     // ... the filter for the FlowComments we want to count
     *   }
     * })
    **/
    count<T extends FlowCommentCountArgs>(
      args?: Subset<T, FlowCommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowCommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowCommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowCommentAggregateArgs>(args: Subset<T, FlowCommentAggregateArgs>): Prisma.PrismaPromise<GetFlowCommentAggregateType<T>>

    /**
     * Group by FlowComment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowCommentGroupByArgs} args - Group by arguments.
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
      T extends FlowCommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowCommentGroupByArgs['orderBy'] }
        : { orderBy?: FlowCommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowCommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowComment model
   */
  readonly fields: FlowCommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowComment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowCommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowShare<T extends FlowShareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowShareDefaultArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends FlowComment$parentArgs<ExtArgs> = {}>(args?: Subset<T, FlowComment$parentArgs<ExtArgs>>): Prisma__FlowCommentClient<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends FlowComment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, FlowComment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowCommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlowComment model
   */
  interface FlowCommentFieldRefs {
    readonly id: FieldRef<"FlowComment", 'String'>
    readonly flowShareId: FieldRef<"FlowComment", 'String'>
    readonly userId: FieldRef<"FlowComment", 'String'>
    readonly comment: FieldRef<"FlowComment", 'String'>
    readonly parentId: FieldRef<"FlowComment", 'String'>
    readonly createdAt: FieldRef<"FlowComment", 'DateTime'>
    readonly updatedAt: FieldRef<"FlowComment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlowComment findUnique
   */
  export type FlowCommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    /**
     * Filter, which FlowComment to fetch.
     */
    where: FlowCommentWhereUniqueInput
  }

  /**
   * FlowComment findUniqueOrThrow
   */
  export type FlowCommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    /**
     * Filter, which FlowComment to fetch.
     */
    where: FlowCommentWhereUniqueInput
  }

  /**
   * FlowComment findFirst
   */
  export type FlowCommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    /**
     * Filter, which FlowComment to fetch.
     */
    where?: FlowCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowComments to fetch.
     */
    orderBy?: FlowCommentOrderByWithRelationInput | FlowCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowComments.
     */
    cursor?: FlowCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowComments.
     */
    distinct?: FlowCommentScalarFieldEnum | FlowCommentScalarFieldEnum[]
  }

  /**
   * FlowComment findFirstOrThrow
   */
  export type FlowCommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    /**
     * Filter, which FlowComment to fetch.
     */
    where?: FlowCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowComments to fetch.
     */
    orderBy?: FlowCommentOrderByWithRelationInput | FlowCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowComments.
     */
    cursor?: FlowCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowComments.
     */
    distinct?: FlowCommentScalarFieldEnum | FlowCommentScalarFieldEnum[]
  }

  /**
   * FlowComment findMany
   */
  export type FlowCommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    /**
     * Filter, which FlowComments to fetch.
     */
    where?: FlowCommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowComments to fetch.
     */
    orderBy?: FlowCommentOrderByWithRelationInput | FlowCommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowComments.
     */
    cursor?: FlowCommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowComments.
     */
    skip?: number
    distinct?: FlowCommentScalarFieldEnum | FlowCommentScalarFieldEnum[]
  }

  /**
   * FlowComment create
   */
  export type FlowCommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowComment.
     */
    data: XOR<FlowCommentCreateInput, FlowCommentUncheckedCreateInput>
  }

  /**
   * FlowComment createMany
   */
  export type FlowCommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowComments.
     */
    data: FlowCommentCreateManyInput | FlowCommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowComment update
   */
  export type FlowCommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowComment.
     */
    data: XOR<FlowCommentUpdateInput, FlowCommentUncheckedUpdateInput>
    /**
     * Choose, which FlowComment to update.
     */
    where: FlowCommentWhereUniqueInput
  }

  /**
   * FlowComment updateMany
   */
  export type FlowCommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowComments.
     */
    data: XOR<FlowCommentUpdateManyMutationInput, FlowCommentUncheckedUpdateManyInput>
    /**
     * Filter which FlowComments to update
     */
    where?: FlowCommentWhereInput
    /**
     * Limit how many FlowComments to update.
     */
    limit?: number
  }

  /**
   * FlowComment upsert
   */
  export type FlowCommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowComment to update in case it exists.
     */
    where: FlowCommentWhereUniqueInput
    /**
     * In case the FlowComment found by the `where` argument doesn't exist, create a new FlowComment with this data.
     */
    create: XOR<FlowCommentCreateInput, FlowCommentUncheckedCreateInput>
    /**
     * In case the FlowComment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowCommentUpdateInput, FlowCommentUncheckedUpdateInput>
  }

  /**
   * FlowComment delete
   */
  export type FlowCommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    /**
     * Filter which FlowComment to delete.
     */
    where: FlowCommentWhereUniqueInput
  }

  /**
   * FlowComment deleteMany
   */
  export type FlowCommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowComments to delete
     */
    where?: FlowCommentWhereInput
    /**
     * Limit how many FlowComments to delete.
     */
    limit?: number
  }

  /**
   * FlowComment.parent
   */
  export type FlowComment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    where?: FlowCommentWhereInput
  }

  /**
   * FlowComment.replies
   */
  export type FlowComment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
    where?: FlowCommentWhereInput
    orderBy?: FlowCommentOrderByWithRelationInput | FlowCommentOrderByWithRelationInput[]
    cursor?: FlowCommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowCommentScalarFieldEnum | FlowCommentScalarFieldEnum[]
  }

  /**
   * FlowComment without action
   */
  export type FlowCommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowComment
     */
    select?: FlowCommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowComment
     */
    omit?: FlowCommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowCommentInclude<ExtArgs> | null
  }


  /**
   * Model FlowLike
   */

  export type AggregateFlowLike = {
    _count: FlowLikeCountAggregateOutputType | null
    _min: FlowLikeMinAggregateOutputType | null
    _max: FlowLikeMaxAggregateOutputType | null
  }

  export type FlowLikeMinAggregateOutputType = {
    id: string | null
    flowShareId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type FlowLikeMaxAggregateOutputType = {
    id: string | null
    flowShareId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type FlowLikeCountAggregateOutputType = {
    id: number
    flowShareId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type FlowLikeMinAggregateInputType = {
    id?: true
    flowShareId?: true
    userId?: true
    createdAt?: true
  }

  export type FlowLikeMaxAggregateInputType = {
    id?: true
    flowShareId?: true
    userId?: true
    createdAt?: true
  }

  export type FlowLikeCountAggregateInputType = {
    id?: true
    flowShareId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type FlowLikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowLike to aggregate.
     */
    where?: FlowLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowLikes to fetch.
     */
    orderBy?: FlowLikeOrderByWithRelationInput | FlowLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowLikes
    **/
    _count?: true | FlowLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowLikeMaxAggregateInputType
  }

  export type GetFlowLikeAggregateType<T extends FlowLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowLike[P]>
      : GetScalarType<T[P], AggregateFlowLike[P]>
  }




  export type FlowLikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowLikeWhereInput
    orderBy?: FlowLikeOrderByWithAggregationInput | FlowLikeOrderByWithAggregationInput[]
    by: FlowLikeScalarFieldEnum[] | FlowLikeScalarFieldEnum
    having?: FlowLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowLikeCountAggregateInputType | true
    _min?: FlowLikeMinAggregateInputType
    _max?: FlowLikeMaxAggregateInputType
  }

  export type FlowLikeGroupByOutputType = {
    id: string
    flowShareId: string
    userId: string
    createdAt: Date
    _count: FlowLikeCountAggregateOutputType | null
    _min: FlowLikeMinAggregateOutputType | null
    _max: FlowLikeMaxAggregateOutputType | null
  }

  type GetFlowLikeGroupByPayload<T extends FlowLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowLikeGroupByOutputType[P]>
            : GetScalarType<T[P], FlowLikeGroupByOutputType[P]>
        }
      >
    >


  export type FlowLikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flowShareId?: boolean
    userId?: boolean
    createdAt?: boolean
    flowShare?: boolean | FlowShareDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowLike"]>



  export type FlowLikeSelectScalar = {
    id?: boolean
    flowShareId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type FlowLikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flowShareId" | "userId" | "createdAt", ExtArgs["result"]["flowLike"]>
  export type FlowLikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowShare?: boolean | FlowShareDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlowLikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowLike"
    objects: {
      flowShare: Prisma.$FlowSharePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flowShareId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["flowLike"]>
    composites: {}
  }

  type FlowLikeGetPayload<S extends boolean | null | undefined | FlowLikeDefaultArgs> = $Result.GetResult<Prisma.$FlowLikePayload, S>

  type FlowLikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowLikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowLikeCountAggregateInputType | true
    }

  export interface FlowLikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowLike'], meta: { name: 'FlowLike' } }
    /**
     * Find zero or one FlowLike that matches the filter.
     * @param {FlowLikeFindUniqueArgs} args - Arguments to find a FlowLike
     * @example
     * // Get one FlowLike
     * const flowLike = await prisma.flowLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowLikeFindUniqueArgs>(args: SelectSubset<T, FlowLikeFindUniqueArgs<ExtArgs>>): Prisma__FlowLikeClient<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowLike that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowLikeFindUniqueOrThrowArgs} args - Arguments to find a FlowLike
     * @example
     * // Get one FlowLike
     * const flowLike = await prisma.flowLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowLikeFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowLikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowLikeClient<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowLikeFindFirstArgs} args - Arguments to find a FlowLike
     * @example
     * // Get one FlowLike
     * const flowLike = await prisma.flowLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowLikeFindFirstArgs>(args?: SelectSubset<T, FlowLikeFindFirstArgs<ExtArgs>>): Prisma__FlowLikeClient<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowLikeFindFirstOrThrowArgs} args - Arguments to find a FlowLike
     * @example
     * // Get one FlowLike
     * const flowLike = await prisma.flowLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowLikeFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowLikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowLikeClient<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowLikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowLikes
     * const flowLikes = await prisma.flowLike.findMany()
     * 
     * // Get first 10 FlowLikes
     * const flowLikes = await prisma.flowLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowLikeWithIdOnly = await prisma.flowLike.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowLikeFindManyArgs>(args?: SelectSubset<T, FlowLikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowLike.
     * @param {FlowLikeCreateArgs} args - Arguments to create a FlowLike.
     * @example
     * // Create one FlowLike
     * const FlowLike = await prisma.flowLike.create({
     *   data: {
     *     // ... data to create a FlowLike
     *   }
     * })
     * 
     */
    create<T extends FlowLikeCreateArgs>(args: SelectSubset<T, FlowLikeCreateArgs<ExtArgs>>): Prisma__FlowLikeClient<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowLikes.
     * @param {FlowLikeCreateManyArgs} args - Arguments to create many FlowLikes.
     * @example
     * // Create many FlowLikes
     * const flowLike = await prisma.flowLike.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowLikeCreateManyArgs>(args?: SelectSubset<T, FlowLikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowLike.
     * @param {FlowLikeDeleteArgs} args - Arguments to delete one FlowLike.
     * @example
     * // Delete one FlowLike
     * const FlowLike = await prisma.flowLike.delete({
     *   where: {
     *     // ... filter to delete one FlowLike
     *   }
     * })
     * 
     */
    delete<T extends FlowLikeDeleteArgs>(args: SelectSubset<T, FlowLikeDeleteArgs<ExtArgs>>): Prisma__FlowLikeClient<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowLike.
     * @param {FlowLikeUpdateArgs} args - Arguments to update one FlowLike.
     * @example
     * // Update one FlowLike
     * const flowLike = await prisma.flowLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowLikeUpdateArgs>(args: SelectSubset<T, FlowLikeUpdateArgs<ExtArgs>>): Prisma__FlowLikeClient<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowLikes.
     * @param {FlowLikeDeleteManyArgs} args - Arguments to filter FlowLikes to delete.
     * @example
     * // Delete a few FlowLikes
     * const { count } = await prisma.flowLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowLikeDeleteManyArgs>(args?: SelectSubset<T, FlowLikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowLikes
     * const flowLike = await prisma.flowLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowLikeUpdateManyArgs>(args: SelectSubset<T, FlowLikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowLike.
     * @param {FlowLikeUpsertArgs} args - Arguments to update or create a FlowLike.
     * @example
     * // Update or create a FlowLike
     * const flowLike = await prisma.flowLike.upsert({
     *   create: {
     *     // ... data to create a FlowLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowLike we want to update
     *   }
     * })
     */
    upsert<T extends FlowLikeUpsertArgs>(args: SelectSubset<T, FlowLikeUpsertArgs<ExtArgs>>): Prisma__FlowLikeClient<$Result.GetResult<Prisma.$FlowLikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowLikeCountArgs} args - Arguments to filter FlowLikes to count.
     * @example
     * // Count the number of FlowLikes
     * const count = await prisma.flowLike.count({
     *   where: {
     *     // ... the filter for the FlowLikes we want to count
     *   }
     * })
    **/
    count<T extends FlowLikeCountArgs>(
      args?: Subset<T, FlowLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowLikeAggregateArgs>(args: Subset<T, FlowLikeAggregateArgs>): Prisma.PrismaPromise<GetFlowLikeAggregateType<T>>

    /**
     * Group by FlowLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowLikeGroupByArgs} args - Group by arguments.
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
      T extends FlowLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowLikeGroupByArgs['orderBy'] }
        : { orderBy?: FlowLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowLike model
   */
  readonly fields: FlowLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowLikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowShare<T extends FlowShareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowShareDefaultArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlowLike model
   */
  interface FlowLikeFieldRefs {
    readonly id: FieldRef<"FlowLike", 'String'>
    readonly flowShareId: FieldRef<"FlowLike", 'String'>
    readonly userId: FieldRef<"FlowLike", 'String'>
    readonly createdAt: FieldRef<"FlowLike", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlowLike findUnique
   */
  export type FlowLikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    /**
     * Filter, which FlowLike to fetch.
     */
    where: FlowLikeWhereUniqueInput
  }

  /**
   * FlowLike findUniqueOrThrow
   */
  export type FlowLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    /**
     * Filter, which FlowLike to fetch.
     */
    where: FlowLikeWhereUniqueInput
  }

  /**
   * FlowLike findFirst
   */
  export type FlowLikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    /**
     * Filter, which FlowLike to fetch.
     */
    where?: FlowLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowLikes to fetch.
     */
    orderBy?: FlowLikeOrderByWithRelationInput | FlowLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowLikes.
     */
    cursor?: FlowLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowLikes.
     */
    distinct?: FlowLikeScalarFieldEnum | FlowLikeScalarFieldEnum[]
  }

  /**
   * FlowLike findFirstOrThrow
   */
  export type FlowLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    /**
     * Filter, which FlowLike to fetch.
     */
    where?: FlowLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowLikes to fetch.
     */
    orderBy?: FlowLikeOrderByWithRelationInput | FlowLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowLikes.
     */
    cursor?: FlowLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowLikes.
     */
    distinct?: FlowLikeScalarFieldEnum | FlowLikeScalarFieldEnum[]
  }

  /**
   * FlowLike findMany
   */
  export type FlowLikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    /**
     * Filter, which FlowLikes to fetch.
     */
    where?: FlowLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowLikes to fetch.
     */
    orderBy?: FlowLikeOrderByWithRelationInput | FlowLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowLikes.
     */
    cursor?: FlowLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowLikes.
     */
    skip?: number
    distinct?: FlowLikeScalarFieldEnum | FlowLikeScalarFieldEnum[]
  }

  /**
   * FlowLike create
   */
  export type FlowLikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowLike.
     */
    data: XOR<FlowLikeCreateInput, FlowLikeUncheckedCreateInput>
  }

  /**
   * FlowLike createMany
   */
  export type FlowLikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowLikes.
     */
    data: FlowLikeCreateManyInput | FlowLikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowLike update
   */
  export type FlowLikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowLike.
     */
    data: XOR<FlowLikeUpdateInput, FlowLikeUncheckedUpdateInput>
    /**
     * Choose, which FlowLike to update.
     */
    where: FlowLikeWhereUniqueInput
  }

  /**
   * FlowLike updateMany
   */
  export type FlowLikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowLikes.
     */
    data: XOR<FlowLikeUpdateManyMutationInput, FlowLikeUncheckedUpdateManyInput>
    /**
     * Filter which FlowLikes to update
     */
    where?: FlowLikeWhereInput
    /**
     * Limit how many FlowLikes to update.
     */
    limit?: number
  }

  /**
   * FlowLike upsert
   */
  export type FlowLikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowLike to update in case it exists.
     */
    where: FlowLikeWhereUniqueInput
    /**
     * In case the FlowLike found by the `where` argument doesn't exist, create a new FlowLike with this data.
     */
    create: XOR<FlowLikeCreateInput, FlowLikeUncheckedCreateInput>
    /**
     * In case the FlowLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowLikeUpdateInput, FlowLikeUncheckedUpdateInput>
  }

  /**
   * FlowLike delete
   */
  export type FlowLikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
    /**
     * Filter which FlowLike to delete.
     */
    where: FlowLikeWhereUniqueInput
  }

  /**
   * FlowLike deleteMany
   */
  export type FlowLikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowLikes to delete
     */
    where?: FlowLikeWhereInput
    /**
     * Limit how many FlowLikes to delete.
     */
    limit?: number
  }

  /**
   * FlowLike without action
   */
  export type FlowLikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowLike
     */
    select?: FlowLikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowLike
     */
    omit?: FlowLikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowLikeInclude<ExtArgs> | null
  }


  /**
   * Model FlowSave
   */

  export type AggregateFlowSave = {
    _count: FlowSaveCountAggregateOutputType | null
    _min: FlowSaveMinAggregateOutputType | null
    _max: FlowSaveMaxAggregateOutputType | null
  }

  export type FlowSaveMinAggregateOutputType = {
    id: string | null
    flowShareId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type FlowSaveMaxAggregateOutputType = {
    id: string | null
    flowShareId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type FlowSaveCountAggregateOutputType = {
    id: number
    flowShareId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type FlowSaveMinAggregateInputType = {
    id?: true
    flowShareId?: true
    userId?: true
    createdAt?: true
  }

  export type FlowSaveMaxAggregateInputType = {
    id?: true
    flowShareId?: true
    userId?: true
    createdAt?: true
  }

  export type FlowSaveCountAggregateInputType = {
    id?: true
    flowShareId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type FlowSaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowSave to aggregate.
     */
    where?: FlowSaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowSaves to fetch.
     */
    orderBy?: FlowSaveOrderByWithRelationInput | FlowSaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowSaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowSaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowSaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowSaves
    **/
    _count?: true | FlowSaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowSaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowSaveMaxAggregateInputType
  }

  export type GetFlowSaveAggregateType<T extends FlowSaveAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowSave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowSave[P]>
      : GetScalarType<T[P], AggregateFlowSave[P]>
  }




  export type FlowSaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowSaveWhereInput
    orderBy?: FlowSaveOrderByWithAggregationInput | FlowSaveOrderByWithAggregationInput[]
    by: FlowSaveScalarFieldEnum[] | FlowSaveScalarFieldEnum
    having?: FlowSaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowSaveCountAggregateInputType | true
    _min?: FlowSaveMinAggregateInputType
    _max?: FlowSaveMaxAggregateInputType
  }

  export type FlowSaveGroupByOutputType = {
    id: string
    flowShareId: string
    userId: string
    createdAt: Date
    _count: FlowSaveCountAggregateOutputType | null
    _min: FlowSaveMinAggregateOutputType | null
    _max: FlowSaveMaxAggregateOutputType | null
  }

  type GetFlowSaveGroupByPayload<T extends FlowSaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowSaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowSaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowSaveGroupByOutputType[P]>
            : GetScalarType<T[P], FlowSaveGroupByOutputType[P]>
        }
      >
    >


  export type FlowSaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    flowShareId?: boolean
    userId?: boolean
    createdAt?: boolean
    flowShare?: boolean | FlowShareDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowSave"]>



  export type FlowSaveSelectScalar = {
    id?: boolean
    flowShareId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type FlowSaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "flowShareId" | "userId" | "createdAt", ExtArgs["result"]["flowSave"]>
  export type FlowSaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flowShare?: boolean | FlowShareDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlowSavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowSave"
    objects: {
      flowShare: Prisma.$FlowSharePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      flowShareId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["flowSave"]>
    composites: {}
  }

  type FlowSaveGetPayload<S extends boolean | null | undefined | FlowSaveDefaultArgs> = $Result.GetResult<Prisma.$FlowSavePayload, S>

  type FlowSaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowSaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowSaveCountAggregateInputType | true
    }

  export interface FlowSaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowSave'], meta: { name: 'FlowSave' } }
    /**
     * Find zero or one FlowSave that matches the filter.
     * @param {FlowSaveFindUniqueArgs} args - Arguments to find a FlowSave
     * @example
     * // Get one FlowSave
     * const flowSave = await prisma.flowSave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowSaveFindUniqueArgs>(args: SelectSubset<T, FlowSaveFindUniqueArgs<ExtArgs>>): Prisma__FlowSaveClient<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowSave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowSaveFindUniqueOrThrowArgs} args - Arguments to find a FlowSave
     * @example
     * // Get one FlowSave
     * const flowSave = await prisma.flowSave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowSaveFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowSaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowSaveClient<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowSave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowSaveFindFirstArgs} args - Arguments to find a FlowSave
     * @example
     * // Get one FlowSave
     * const flowSave = await prisma.flowSave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowSaveFindFirstArgs>(args?: SelectSubset<T, FlowSaveFindFirstArgs<ExtArgs>>): Prisma__FlowSaveClient<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowSave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowSaveFindFirstOrThrowArgs} args - Arguments to find a FlowSave
     * @example
     * // Get one FlowSave
     * const flowSave = await prisma.flowSave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowSaveFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowSaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowSaveClient<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowSaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowSaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowSaves
     * const flowSaves = await prisma.flowSave.findMany()
     * 
     * // Get first 10 FlowSaves
     * const flowSaves = await prisma.flowSave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowSaveWithIdOnly = await prisma.flowSave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowSaveFindManyArgs>(args?: SelectSubset<T, FlowSaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowSave.
     * @param {FlowSaveCreateArgs} args - Arguments to create a FlowSave.
     * @example
     * // Create one FlowSave
     * const FlowSave = await prisma.flowSave.create({
     *   data: {
     *     // ... data to create a FlowSave
     *   }
     * })
     * 
     */
    create<T extends FlowSaveCreateArgs>(args: SelectSubset<T, FlowSaveCreateArgs<ExtArgs>>): Prisma__FlowSaveClient<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowSaves.
     * @param {FlowSaveCreateManyArgs} args - Arguments to create many FlowSaves.
     * @example
     * // Create many FlowSaves
     * const flowSave = await prisma.flowSave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowSaveCreateManyArgs>(args?: SelectSubset<T, FlowSaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowSave.
     * @param {FlowSaveDeleteArgs} args - Arguments to delete one FlowSave.
     * @example
     * // Delete one FlowSave
     * const FlowSave = await prisma.flowSave.delete({
     *   where: {
     *     // ... filter to delete one FlowSave
     *   }
     * })
     * 
     */
    delete<T extends FlowSaveDeleteArgs>(args: SelectSubset<T, FlowSaveDeleteArgs<ExtArgs>>): Prisma__FlowSaveClient<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowSave.
     * @param {FlowSaveUpdateArgs} args - Arguments to update one FlowSave.
     * @example
     * // Update one FlowSave
     * const flowSave = await prisma.flowSave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowSaveUpdateArgs>(args: SelectSubset<T, FlowSaveUpdateArgs<ExtArgs>>): Prisma__FlowSaveClient<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowSaves.
     * @param {FlowSaveDeleteManyArgs} args - Arguments to filter FlowSaves to delete.
     * @example
     * // Delete a few FlowSaves
     * const { count } = await prisma.flowSave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowSaveDeleteManyArgs>(args?: SelectSubset<T, FlowSaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowSaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowSaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowSaves
     * const flowSave = await prisma.flowSave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowSaveUpdateManyArgs>(args: SelectSubset<T, FlowSaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowSave.
     * @param {FlowSaveUpsertArgs} args - Arguments to update or create a FlowSave.
     * @example
     * // Update or create a FlowSave
     * const flowSave = await prisma.flowSave.upsert({
     *   create: {
     *     // ... data to create a FlowSave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowSave we want to update
     *   }
     * })
     */
    upsert<T extends FlowSaveUpsertArgs>(args: SelectSubset<T, FlowSaveUpsertArgs<ExtArgs>>): Prisma__FlowSaveClient<$Result.GetResult<Prisma.$FlowSavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowSaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowSaveCountArgs} args - Arguments to filter FlowSaves to count.
     * @example
     * // Count the number of FlowSaves
     * const count = await prisma.flowSave.count({
     *   where: {
     *     // ... the filter for the FlowSaves we want to count
     *   }
     * })
    **/
    count<T extends FlowSaveCountArgs>(
      args?: Subset<T, FlowSaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowSaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowSave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowSaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowSaveAggregateArgs>(args: Subset<T, FlowSaveAggregateArgs>): Prisma.PrismaPromise<GetFlowSaveAggregateType<T>>

    /**
     * Group by FlowSave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowSaveGroupByArgs} args - Group by arguments.
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
      T extends FlowSaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowSaveGroupByArgs['orderBy'] }
        : { orderBy?: FlowSaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowSaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowSaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowSave model
   */
  readonly fields: FlowSaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowSave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowSaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flowShare<T extends FlowShareDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FlowShareDefaultArgs<ExtArgs>>): Prisma__FlowShareClient<$Result.GetResult<Prisma.$FlowSharePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlowSave model
   */
  interface FlowSaveFieldRefs {
    readonly id: FieldRef<"FlowSave", 'String'>
    readonly flowShareId: FieldRef<"FlowSave", 'String'>
    readonly userId: FieldRef<"FlowSave", 'String'>
    readonly createdAt: FieldRef<"FlowSave", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlowSave findUnique
   */
  export type FlowSaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    /**
     * Filter, which FlowSave to fetch.
     */
    where: FlowSaveWhereUniqueInput
  }

  /**
   * FlowSave findUniqueOrThrow
   */
  export type FlowSaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    /**
     * Filter, which FlowSave to fetch.
     */
    where: FlowSaveWhereUniqueInput
  }

  /**
   * FlowSave findFirst
   */
  export type FlowSaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    /**
     * Filter, which FlowSave to fetch.
     */
    where?: FlowSaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowSaves to fetch.
     */
    orderBy?: FlowSaveOrderByWithRelationInput | FlowSaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowSaves.
     */
    cursor?: FlowSaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowSaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowSaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowSaves.
     */
    distinct?: FlowSaveScalarFieldEnum | FlowSaveScalarFieldEnum[]
  }

  /**
   * FlowSave findFirstOrThrow
   */
  export type FlowSaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    /**
     * Filter, which FlowSave to fetch.
     */
    where?: FlowSaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowSaves to fetch.
     */
    orderBy?: FlowSaveOrderByWithRelationInput | FlowSaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowSaves.
     */
    cursor?: FlowSaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowSaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowSaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowSaves.
     */
    distinct?: FlowSaveScalarFieldEnum | FlowSaveScalarFieldEnum[]
  }

  /**
   * FlowSave findMany
   */
  export type FlowSaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    /**
     * Filter, which FlowSaves to fetch.
     */
    where?: FlowSaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowSaves to fetch.
     */
    orderBy?: FlowSaveOrderByWithRelationInput | FlowSaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowSaves.
     */
    cursor?: FlowSaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowSaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowSaves.
     */
    skip?: number
    distinct?: FlowSaveScalarFieldEnum | FlowSaveScalarFieldEnum[]
  }

  /**
   * FlowSave create
   */
  export type FlowSaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowSave.
     */
    data: XOR<FlowSaveCreateInput, FlowSaveUncheckedCreateInput>
  }

  /**
   * FlowSave createMany
   */
  export type FlowSaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowSaves.
     */
    data: FlowSaveCreateManyInput | FlowSaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowSave update
   */
  export type FlowSaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowSave.
     */
    data: XOR<FlowSaveUpdateInput, FlowSaveUncheckedUpdateInput>
    /**
     * Choose, which FlowSave to update.
     */
    where: FlowSaveWhereUniqueInput
  }

  /**
   * FlowSave updateMany
   */
  export type FlowSaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowSaves.
     */
    data: XOR<FlowSaveUpdateManyMutationInput, FlowSaveUncheckedUpdateManyInput>
    /**
     * Filter which FlowSaves to update
     */
    where?: FlowSaveWhereInput
    /**
     * Limit how many FlowSaves to update.
     */
    limit?: number
  }

  /**
   * FlowSave upsert
   */
  export type FlowSaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowSave to update in case it exists.
     */
    where: FlowSaveWhereUniqueInput
    /**
     * In case the FlowSave found by the `where` argument doesn't exist, create a new FlowSave with this data.
     */
    create: XOR<FlowSaveCreateInput, FlowSaveUncheckedCreateInput>
    /**
     * In case the FlowSave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowSaveUpdateInput, FlowSaveUncheckedUpdateInput>
  }

  /**
   * FlowSave delete
   */
  export type FlowSaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
    /**
     * Filter which FlowSave to delete.
     */
    where: FlowSaveWhereUniqueInput
  }

  /**
   * FlowSave deleteMany
   */
  export type FlowSaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowSaves to delete
     */
    where?: FlowSaveWhereInput
    /**
     * Limit how many FlowSaves to delete.
     */
    limit?: number
  }

  /**
   * FlowSave without action
   */
  export type FlowSaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowSave
     */
    select?: FlowSaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowSave
     */
    omit?: FlowSaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowSaveInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    message: string | null
    avatar: string | null
    relatedId: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: $Enums.NotificationType | null
    message: string | null
    avatar: string | null
    relatedId: string | null
    read: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    message: number
    avatar: number
    relatedId: number
    read: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    avatar?: true
    relatedId?: true
    read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    avatar?: true
    relatedId?: true
    read?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    message?: true
    avatar?: true
    relatedId?: true
    read?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: $Enums.NotificationType
    message: string
    avatar: string | null
    relatedId: string
    read: boolean
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    avatar?: boolean
    relatedId?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    message?: boolean
    avatar?: boolean
    relatedId?: boolean
    read?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "message" | "avatar" | "relatedId" | "read" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: $Enums.NotificationType
      message: string
      avatar: string | null
      relatedId: string
      read: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'NotificationType'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly avatar: FieldRef<"Notification", 'String'>
    readonly relatedId: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model FlowFallback
   */

  export type AggregateFlowFallback = {
    _count: FlowFallbackCountAggregateOutputType | null
    _avg: FlowFallbackAvgAggregateOutputType | null
    _sum: FlowFallbackSumAggregateOutputType | null
    _min: FlowFallbackMinAggregateOutputType | null
    _max: FlowFallbackMaxAggregateOutputType | null
  }

  export type FlowFallbackAvgAggregateOutputType = {
    timeoutDuration: number | null
  }

  export type FlowFallbackSumAggregateOutputType = {
    timeoutDuration: number | null
  }

  export type FlowFallbackMinAggregateOutputType = {
    id: string | null
    userId: string | null
    timeoutDuration: number | null
    timeoutUnit: $Enums.TimeoutUnit | null
    fallbackMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowFallbackMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    timeoutDuration: number | null
    timeoutUnit: $Enums.TimeoutUnit | null
    fallbackMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowFallbackCountAggregateOutputType = {
    id: number
    userId: number
    timeoutDuration: number
    timeoutUnit: number
    fallbackMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlowFallbackAvgAggregateInputType = {
    timeoutDuration?: true
  }

  export type FlowFallbackSumAggregateInputType = {
    timeoutDuration?: true
  }

  export type FlowFallbackMinAggregateInputType = {
    id?: true
    userId?: true
    timeoutDuration?: true
    timeoutUnit?: true
    fallbackMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowFallbackMaxAggregateInputType = {
    id?: true
    userId?: true
    timeoutDuration?: true
    timeoutUnit?: true
    fallbackMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowFallbackCountAggregateInputType = {
    id?: true
    userId?: true
    timeoutDuration?: true
    timeoutUnit?: true
    fallbackMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlowFallbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowFallback to aggregate.
     */
    where?: FlowFallbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowFallbacks to fetch.
     */
    orderBy?: FlowFallbackOrderByWithRelationInput | FlowFallbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowFallbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowFallbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowFallbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowFallbacks
    **/
    _count?: true | FlowFallbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowFallbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowFallbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowFallbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowFallbackMaxAggregateInputType
  }

  export type GetFlowFallbackAggregateType<T extends FlowFallbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowFallback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowFallback[P]>
      : GetScalarType<T[P], AggregateFlowFallback[P]>
  }




  export type FlowFallbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowFallbackWhereInput
    orderBy?: FlowFallbackOrderByWithAggregationInput | FlowFallbackOrderByWithAggregationInput[]
    by: FlowFallbackScalarFieldEnum[] | FlowFallbackScalarFieldEnum
    having?: FlowFallbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowFallbackCountAggregateInputType | true
    _avg?: FlowFallbackAvgAggregateInputType
    _sum?: FlowFallbackSumAggregateInputType
    _min?: FlowFallbackMinAggregateInputType
    _max?: FlowFallbackMaxAggregateInputType
  }

  export type FlowFallbackGroupByOutputType = {
    id: string
    userId: string
    timeoutDuration: number
    timeoutUnit: $Enums.TimeoutUnit
    fallbackMessage: string
    createdAt: Date
    updatedAt: Date
    _count: FlowFallbackCountAggregateOutputType | null
    _avg: FlowFallbackAvgAggregateOutputType | null
    _sum: FlowFallbackSumAggregateOutputType | null
    _min: FlowFallbackMinAggregateOutputType | null
    _max: FlowFallbackMaxAggregateOutputType | null
  }

  type GetFlowFallbackGroupByPayload<T extends FlowFallbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowFallbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowFallbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowFallbackGroupByOutputType[P]>
            : GetScalarType<T[P], FlowFallbackGroupByOutputType[P]>
        }
      >
    >


  export type FlowFallbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    timeoutDuration?: boolean
    timeoutUnit?: boolean
    fallbackMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowFallback"]>



  export type FlowFallbackSelectScalar = {
    id?: boolean
    userId?: boolean
    timeoutDuration?: boolean
    timeoutUnit?: boolean
    fallbackMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlowFallbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "timeoutDuration" | "timeoutUnit" | "fallbackMessage" | "createdAt" | "updatedAt", ExtArgs["result"]["flowFallback"]>
  export type FlowFallbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlowFallbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlowFallback"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      timeoutDuration: number
      timeoutUnit: $Enums.TimeoutUnit
      fallbackMessage: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flowFallback"]>
    composites: {}
  }

  type FlowFallbackGetPayload<S extends boolean | null | undefined | FlowFallbackDefaultArgs> = $Result.GetResult<Prisma.$FlowFallbackPayload, S>

  type FlowFallbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowFallbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowFallbackCountAggregateInputType | true
    }

  export interface FlowFallbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlowFallback'], meta: { name: 'FlowFallback' } }
    /**
     * Find zero or one FlowFallback that matches the filter.
     * @param {FlowFallbackFindUniqueArgs} args - Arguments to find a FlowFallback
     * @example
     * // Get one FlowFallback
     * const flowFallback = await prisma.flowFallback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowFallbackFindUniqueArgs>(args: SelectSubset<T, FlowFallbackFindUniqueArgs<ExtArgs>>): Prisma__FlowFallbackClient<$Result.GetResult<Prisma.$FlowFallbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FlowFallback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowFallbackFindUniqueOrThrowArgs} args - Arguments to find a FlowFallback
     * @example
     * // Get one FlowFallback
     * const flowFallback = await prisma.flowFallback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowFallbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowFallbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowFallbackClient<$Result.GetResult<Prisma.$FlowFallbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowFallback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFallbackFindFirstArgs} args - Arguments to find a FlowFallback
     * @example
     * // Get one FlowFallback
     * const flowFallback = await prisma.flowFallback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowFallbackFindFirstArgs>(args?: SelectSubset<T, FlowFallbackFindFirstArgs<ExtArgs>>): Prisma__FlowFallbackClient<$Result.GetResult<Prisma.$FlowFallbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FlowFallback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFallbackFindFirstOrThrowArgs} args - Arguments to find a FlowFallback
     * @example
     * // Get one FlowFallback
     * const flowFallback = await prisma.flowFallback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowFallbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowFallbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowFallbackClient<$Result.GetResult<Prisma.$FlowFallbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FlowFallbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFallbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowFallbacks
     * const flowFallbacks = await prisma.flowFallback.findMany()
     * 
     * // Get first 10 FlowFallbacks
     * const flowFallbacks = await prisma.flowFallback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowFallbackWithIdOnly = await prisma.flowFallback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowFallbackFindManyArgs>(args?: SelectSubset<T, FlowFallbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowFallbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FlowFallback.
     * @param {FlowFallbackCreateArgs} args - Arguments to create a FlowFallback.
     * @example
     * // Create one FlowFallback
     * const FlowFallback = await prisma.flowFallback.create({
     *   data: {
     *     // ... data to create a FlowFallback
     *   }
     * })
     * 
     */
    create<T extends FlowFallbackCreateArgs>(args: SelectSubset<T, FlowFallbackCreateArgs<ExtArgs>>): Prisma__FlowFallbackClient<$Result.GetResult<Prisma.$FlowFallbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FlowFallbacks.
     * @param {FlowFallbackCreateManyArgs} args - Arguments to create many FlowFallbacks.
     * @example
     * // Create many FlowFallbacks
     * const flowFallback = await prisma.flowFallback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowFallbackCreateManyArgs>(args?: SelectSubset<T, FlowFallbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowFallback.
     * @param {FlowFallbackDeleteArgs} args - Arguments to delete one FlowFallback.
     * @example
     * // Delete one FlowFallback
     * const FlowFallback = await prisma.flowFallback.delete({
     *   where: {
     *     // ... filter to delete one FlowFallback
     *   }
     * })
     * 
     */
    delete<T extends FlowFallbackDeleteArgs>(args: SelectSubset<T, FlowFallbackDeleteArgs<ExtArgs>>): Prisma__FlowFallbackClient<$Result.GetResult<Prisma.$FlowFallbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FlowFallback.
     * @param {FlowFallbackUpdateArgs} args - Arguments to update one FlowFallback.
     * @example
     * // Update one FlowFallback
     * const flowFallback = await prisma.flowFallback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowFallbackUpdateArgs>(args: SelectSubset<T, FlowFallbackUpdateArgs<ExtArgs>>): Prisma__FlowFallbackClient<$Result.GetResult<Prisma.$FlowFallbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FlowFallbacks.
     * @param {FlowFallbackDeleteManyArgs} args - Arguments to filter FlowFallbacks to delete.
     * @example
     * // Delete a few FlowFallbacks
     * const { count } = await prisma.flowFallback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowFallbackDeleteManyArgs>(args?: SelectSubset<T, FlowFallbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowFallbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFallbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowFallbacks
     * const flowFallback = await prisma.flowFallback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowFallbackUpdateManyArgs>(args: SelectSubset<T, FlowFallbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowFallback.
     * @param {FlowFallbackUpsertArgs} args - Arguments to update or create a FlowFallback.
     * @example
     * // Update or create a FlowFallback
     * const flowFallback = await prisma.flowFallback.upsert({
     *   create: {
     *     // ... data to create a FlowFallback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowFallback we want to update
     *   }
     * })
     */
    upsert<T extends FlowFallbackUpsertArgs>(args: SelectSubset<T, FlowFallbackUpsertArgs<ExtArgs>>): Prisma__FlowFallbackClient<$Result.GetResult<Prisma.$FlowFallbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FlowFallbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFallbackCountArgs} args - Arguments to filter FlowFallbacks to count.
     * @example
     * // Count the number of FlowFallbacks
     * const count = await prisma.flowFallback.count({
     *   where: {
     *     // ... the filter for the FlowFallbacks we want to count
     *   }
     * })
    **/
    count<T extends FlowFallbackCountArgs>(
      args?: Subset<T, FlowFallbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowFallbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowFallback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFallbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowFallbackAggregateArgs>(args: Subset<T, FlowFallbackAggregateArgs>): Prisma.PrismaPromise<GetFlowFallbackAggregateType<T>>

    /**
     * Group by FlowFallback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFallbackGroupByArgs} args - Group by arguments.
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
      T extends FlowFallbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowFallbackGroupByArgs['orderBy'] }
        : { orderBy?: FlowFallbackGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowFallbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowFallbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlowFallback model
   */
  readonly fields: FlowFallbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowFallback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowFallbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlowFallback model
   */
  interface FlowFallbackFieldRefs {
    readonly id: FieldRef<"FlowFallback", 'String'>
    readonly userId: FieldRef<"FlowFallback", 'String'>
    readonly timeoutDuration: FieldRef<"FlowFallback", 'Int'>
    readonly timeoutUnit: FieldRef<"FlowFallback", 'TimeoutUnit'>
    readonly fallbackMessage: FieldRef<"FlowFallback", 'String'>
    readonly createdAt: FieldRef<"FlowFallback", 'DateTime'>
    readonly updatedAt: FieldRef<"FlowFallback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlowFallback findUnique
   */
  export type FlowFallbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
    /**
     * Filter, which FlowFallback to fetch.
     */
    where: FlowFallbackWhereUniqueInput
  }

  /**
   * FlowFallback findUniqueOrThrow
   */
  export type FlowFallbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
    /**
     * Filter, which FlowFallback to fetch.
     */
    where: FlowFallbackWhereUniqueInput
  }

  /**
   * FlowFallback findFirst
   */
  export type FlowFallbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
    /**
     * Filter, which FlowFallback to fetch.
     */
    where?: FlowFallbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowFallbacks to fetch.
     */
    orderBy?: FlowFallbackOrderByWithRelationInput | FlowFallbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowFallbacks.
     */
    cursor?: FlowFallbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowFallbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowFallbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowFallbacks.
     */
    distinct?: FlowFallbackScalarFieldEnum | FlowFallbackScalarFieldEnum[]
  }

  /**
   * FlowFallback findFirstOrThrow
   */
  export type FlowFallbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
    /**
     * Filter, which FlowFallback to fetch.
     */
    where?: FlowFallbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowFallbacks to fetch.
     */
    orderBy?: FlowFallbackOrderByWithRelationInput | FlowFallbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowFallbacks.
     */
    cursor?: FlowFallbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowFallbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowFallbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowFallbacks.
     */
    distinct?: FlowFallbackScalarFieldEnum | FlowFallbackScalarFieldEnum[]
  }

  /**
   * FlowFallback findMany
   */
  export type FlowFallbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
    /**
     * Filter, which FlowFallbacks to fetch.
     */
    where?: FlowFallbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowFallbacks to fetch.
     */
    orderBy?: FlowFallbackOrderByWithRelationInput | FlowFallbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowFallbacks.
     */
    cursor?: FlowFallbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowFallbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowFallbacks.
     */
    skip?: number
    distinct?: FlowFallbackScalarFieldEnum | FlowFallbackScalarFieldEnum[]
  }

  /**
   * FlowFallback create
   */
  export type FlowFallbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
    /**
     * The data needed to create a FlowFallback.
     */
    data: XOR<FlowFallbackCreateInput, FlowFallbackUncheckedCreateInput>
  }

  /**
   * FlowFallback createMany
   */
  export type FlowFallbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlowFallbacks.
     */
    data: FlowFallbackCreateManyInput | FlowFallbackCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FlowFallback update
   */
  export type FlowFallbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
    /**
     * The data needed to update a FlowFallback.
     */
    data: XOR<FlowFallbackUpdateInput, FlowFallbackUncheckedUpdateInput>
    /**
     * Choose, which FlowFallback to update.
     */
    where: FlowFallbackWhereUniqueInput
  }

  /**
   * FlowFallback updateMany
   */
  export type FlowFallbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlowFallbacks.
     */
    data: XOR<FlowFallbackUpdateManyMutationInput, FlowFallbackUncheckedUpdateManyInput>
    /**
     * Filter which FlowFallbacks to update
     */
    where?: FlowFallbackWhereInput
    /**
     * Limit how many FlowFallbacks to update.
     */
    limit?: number
  }

  /**
   * FlowFallback upsert
   */
  export type FlowFallbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
    /**
     * The filter to search for the FlowFallback to update in case it exists.
     */
    where: FlowFallbackWhereUniqueInput
    /**
     * In case the FlowFallback found by the `where` argument doesn't exist, create a new FlowFallback with this data.
     */
    create: XOR<FlowFallbackCreateInput, FlowFallbackUncheckedCreateInput>
    /**
     * In case the FlowFallback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowFallbackUpdateInput, FlowFallbackUncheckedUpdateInput>
  }

  /**
   * FlowFallback delete
   */
  export type FlowFallbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
    /**
     * Filter which FlowFallback to delete.
     */
    where: FlowFallbackWhereUniqueInput
  }

  /**
   * FlowFallback deleteMany
   */
  export type FlowFallbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlowFallbacks to delete
     */
    where?: FlowFallbackWhereInput
    /**
     * Limit how many FlowFallbacks to delete.
     */
    limit?: number
  }

  /**
   * FlowFallback without action
   */
  export type FlowFallbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlowFallback
     */
    select?: FlowFallbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FlowFallback
     */
    omit?: FlowFallbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowFallbackInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    displayName: 'displayName',
    email: 'email',
    avatar: 'avatar',
    password: 'password',
    role: 'role',
    provider: 'provider',
    providerId: 'providerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const FolderScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    platform: 'platform',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FolderScalarFieldEnum = (typeof FolderScalarFieldEnum)[keyof typeof FolderScalarFieldEnum]


  export const FlowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    pageId: 'pageId',
    folderId: 'folderId',
    pageAccessToken: 'pageAccessToken',
    name: 'name',
    description: 'description',
    status: 'status',
    logicJson: 'logicJson',
    layoutJson: 'layoutJson',
    platform: 'platform',
    timeoutDuration: 'timeoutDuration',
    startNodeId: 'startNodeId',
    timeoutJson: 'timeoutJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlowScalarFieldEnum = (typeof FlowScalarFieldEnum)[keyof typeof FlowScalarFieldEnum]


  export const UserFlowStateScalarFieldEnum: {
    id: 'id',
    platformUserId: 'platformUserId',
    ownerUserId: 'ownerUserId',
    flowId: 'flowId',
    pageId: 'pageId',
    currentStep: 'currentStep',
    stepHistory: 'stepHistory',
    variables: 'variables',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserFlowStateScalarFieldEnum = (typeof UserFlowStateScalarFieldEnum)[keyof typeof UserFlowStateScalarFieldEnum]


  export const FlowShareScalarFieldEnum: {
    id: 'id',
    flowId: 'flowId',
    userId: 'userId',
    name: 'name',
    description: 'description',
    thumbnail: 'thumbnail',
    status: 'status',
    downloadCount: 'downloadCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlowShareScalarFieldEnum = (typeof FlowShareScalarFieldEnum)[keyof typeof FlowShareScalarFieldEnum]


  export const FlowCommentScalarFieldEnum: {
    id: 'id',
    flowShareId: 'flowShareId',
    userId: 'userId',
    comment: 'comment',
    parentId: 'parentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlowCommentScalarFieldEnum = (typeof FlowCommentScalarFieldEnum)[keyof typeof FlowCommentScalarFieldEnum]


  export const FlowLikeScalarFieldEnum: {
    id: 'id',
    flowShareId: 'flowShareId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type FlowLikeScalarFieldEnum = (typeof FlowLikeScalarFieldEnum)[keyof typeof FlowLikeScalarFieldEnum]


  export const FlowSaveScalarFieldEnum: {
    id: 'id',
    flowShareId: 'flowShareId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type FlowSaveScalarFieldEnum = (typeof FlowSaveScalarFieldEnum)[keyof typeof FlowSaveScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    message: 'message',
    avatar: 'avatar',
    relatedId: 'relatedId',
    read: 'read',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const FlowFallbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    timeoutDuration: 'timeoutDuration',
    timeoutUnit: 'timeoutUnit',
    fallbackMessage: 'fallbackMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlowFallbackScalarFieldEnum = (typeof FlowFallbackScalarFieldEnum)[keyof typeof FlowFallbackScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    username: 'username',
    displayName: 'displayName',
    email: 'email',
    avatar: 'avatar',
    password: 'password',
    providerId: 'providerId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RefreshTokenOrderByRelevanceFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId'
  };

  export type RefreshTokenOrderByRelevanceFieldEnum = (typeof RefreshTokenOrderByRelevanceFieldEnum)[keyof typeof RefreshTokenOrderByRelevanceFieldEnum]


  export const PasswordResetTokenOrderByRelevanceFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId'
  };

  export type PasswordResetTokenOrderByRelevanceFieldEnum = (typeof PasswordResetTokenOrderByRelevanceFieldEnum)[keyof typeof PasswordResetTokenOrderByRelevanceFieldEnum]


  export const FolderOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name'
  };

  export type FolderOrderByRelevanceFieldEnum = (typeof FolderOrderByRelevanceFieldEnum)[keyof typeof FolderOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const FlowOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    pageId: 'pageId',
    folderId: 'folderId',
    pageAccessToken: 'pageAccessToken',
    name: 'name',
    description: 'description',
    timeoutDuration: 'timeoutDuration',
    startNodeId: 'startNodeId'
  };

  export type FlowOrderByRelevanceFieldEnum = (typeof FlowOrderByRelevanceFieldEnum)[keyof typeof FlowOrderByRelevanceFieldEnum]


  export const UserFlowStateOrderByRelevanceFieldEnum: {
    id: 'id',
    platformUserId: 'platformUserId',
    ownerUserId: 'ownerUserId',
    flowId: 'flowId',
    pageId: 'pageId',
    currentStep: 'currentStep'
  };

  export type UserFlowStateOrderByRelevanceFieldEnum = (typeof UserFlowStateOrderByRelevanceFieldEnum)[keyof typeof UserFlowStateOrderByRelevanceFieldEnum]


  export const FlowShareOrderByRelevanceFieldEnum: {
    id: 'id',
    flowId: 'flowId',
    userId: 'userId',
    name: 'name',
    description: 'description',
    thumbnail: 'thumbnail'
  };

  export type FlowShareOrderByRelevanceFieldEnum = (typeof FlowShareOrderByRelevanceFieldEnum)[keyof typeof FlowShareOrderByRelevanceFieldEnum]


  export const FlowCommentOrderByRelevanceFieldEnum: {
    id: 'id',
    flowShareId: 'flowShareId',
    userId: 'userId',
    comment: 'comment',
    parentId: 'parentId'
  };

  export type FlowCommentOrderByRelevanceFieldEnum = (typeof FlowCommentOrderByRelevanceFieldEnum)[keyof typeof FlowCommentOrderByRelevanceFieldEnum]


  export const FlowLikeOrderByRelevanceFieldEnum: {
    id: 'id',
    flowShareId: 'flowShareId',
    userId: 'userId'
  };

  export type FlowLikeOrderByRelevanceFieldEnum = (typeof FlowLikeOrderByRelevanceFieldEnum)[keyof typeof FlowLikeOrderByRelevanceFieldEnum]


  export const FlowSaveOrderByRelevanceFieldEnum: {
    id: 'id',
    flowShareId: 'flowShareId',
    userId: 'userId'
  };

  export type FlowSaveOrderByRelevanceFieldEnum = (typeof FlowSaveOrderByRelevanceFieldEnum)[keyof typeof FlowSaveOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    avatar: 'avatar',
    relatedId: 'relatedId'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const FlowFallbackOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    fallbackMessage: 'fallbackMessage'
  };

  export type FlowFallbackOrderByRelevanceFieldEnum = (typeof FlowFallbackOrderByRelevanceFieldEnum)[keyof typeof FlowFallbackOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Platform'
   */
  export type EnumPlatformFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Platform'>
    


  /**
   * Reference to a field of type 'FlowStatus'
   */
  export type EnumFlowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlowStatus'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'UserFlowStatus'
   */
  export type EnumUserFlowStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserFlowStatus'>
    


  /**
   * Reference to a field of type 'FlowShareStatus'
   */
  export type EnumFlowShareStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FlowShareStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'TimeoutUnit'
   */
  export type EnumTimeoutUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TimeoutUnit'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    displayName?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    avatar?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    providerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    folders?: FolderListRelationFilter
    flows?: FlowListRelationFilter
    flowShares?: FlowShareListRelationFilter
    flowLikes?: FlowLikeListRelationFilter
    flowSave?: FlowSaveListRelationFilter
    flowComments?: FlowCommentListRelationFilter
    notifications?: NotificationListRelationFilter
    fallback?: XOR<FlowFallbackNullableScalarRelationFilter, FlowFallbackWhereInput> | null
    userFlowStates?: UserFlowStateListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    PasswordResetToken?: PasswordResetTokenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrderInput | SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    folders?: FolderOrderByRelationAggregateInput
    flows?: FlowOrderByRelationAggregateInput
    flowShares?: FlowShareOrderByRelationAggregateInput
    flowLikes?: FlowLikeOrderByRelationAggregateInput
    flowSave?: FlowSaveOrderByRelationAggregateInput
    flowComments?: FlowCommentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    fallback?: FlowFallbackOrderByWithRelationInput
    userFlowStates?: UserFlowStateOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    PasswordResetToken?: PasswordResetTokenOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    providerId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    folders?: FolderListRelationFilter
    flows?: FlowListRelationFilter
    flowShares?: FlowShareListRelationFilter
    flowLikes?: FlowLikeListRelationFilter
    flowSave?: FlowSaveListRelationFilter
    flowComments?: FlowCommentListRelationFilter
    notifications?: NotificationListRelationFilter
    fallback?: XOR<FlowFallbackNullableScalarRelationFilter, FlowFallbackWhereInput> | null
    userFlowStates?: UserFlowStateListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    PasswordResetToken?: PasswordResetTokenListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrderInput | SortOrder
    email?: SortOrder
    avatar?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
    providerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: RefreshTokenOrderByRelevanceInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: PasswordResetTokenOrderByRelevanceInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    userId?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    userId?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type FolderWhereInput = {
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    id?: StringFilter<"Folder"> | string
    userId?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    platform?: EnumPlatformFilter<"Folder"> | $Enums.Platform
    createdAt?: DateTimeFilter<"Folder"> | Date | string
    updatedAt?: DateTimeFilter<"Folder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flows?: FlowListRelationFilter
  }

  export type FolderOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    flows?: FlowOrderByRelationAggregateInput
    _relevance?: FolderOrderByRelevanceInput
  }

  export type FolderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_platform_name?: FolderUserId_platform_nameCompoundUniqueInput
    AND?: FolderWhereInput | FolderWhereInput[]
    OR?: FolderWhereInput[]
    NOT?: FolderWhereInput | FolderWhereInput[]
    userId?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    platform?: EnumPlatformFilter<"Folder"> | $Enums.Platform
    createdAt?: DateTimeFilter<"Folder"> | Date | string
    updatedAt?: DateTimeFilter<"Folder"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    flows?: FlowListRelationFilter
  }, "id" | "userId_platform_name">

  export type FolderOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FolderCountOrderByAggregateInput
    _max?: FolderMaxOrderByAggregateInput
    _min?: FolderMinOrderByAggregateInput
  }

  export type FolderScalarWhereWithAggregatesInput = {
    AND?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    OR?: FolderScalarWhereWithAggregatesInput[]
    NOT?: FolderScalarWhereWithAggregatesInput | FolderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Folder"> | string
    userId?: StringWithAggregatesFilter<"Folder"> | string
    name?: StringWithAggregatesFilter<"Folder"> | string
    platform?: EnumPlatformWithAggregatesFilter<"Folder"> | $Enums.Platform
    createdAt?: DateTimeWithAggregatesFilter<"Folder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Folder"> | Date | string
  }

  export type FlowWhereInput = {
    AND?: FlowWhereInput | FlowWhereInput[]
    OR?: FlowWhereInput[]
    NOT?: FlowWhereInput | FlowWhereInput[]
    id?: StringFilter<"Flow"> | string
    userId?: StringFilter<"Flow"> | string
    pageId?: StringNullableFilter<"Flow"> | string | null
    folderId?: StringFilter<"Flow"> | string
    pageAccessToken?: StringNullableFilter<"Flow"> | string | null
    name?: StringFilter<"Flow"> | string
    description?: StringNullableFilter<"Flow"> | string | null
    status?: EnumFlowStatusFilter<"Flow"> | $Enums.FlowStatus
    logicJson?: JsonNullableFilter<"Flow">
    layoutJson?: JsonNullableFilter<"Flow">
    platform?: EnumPlatformFilter<"Flow"> | $Enums.Platform
    timeoutDuration?: StringNullableFilter<"Flow"> | string | null
    startNodeId?: StringNullableFilter<"Flow"> | string | null
    timeoutJson?: JsonNullableFilter<"Flow">
    createdAt?: DateTimeFilter<"Flow"> | Date | string
    updatedAt?: DateTimeFilter<"Flow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    folder?: XOR<FolderScalarRelationFilter, FolderWhereInput>
    states?: UserFlowStateListRelationFilter
    shares?: FlowShareListRelationFilter
  }

  export type FlowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    pageId?: SortOrderInput | SortOrder
    folderId?: SortOrder
    pageAccessToken?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    logicJson?: SortOrderInput | SortOrder
    layoutJson?: SortOrderInput | SortOrder
    platform?: SortOrder
    timeoutDuration?: SortOrderInput | SortOrder
    startNodeId?: SortOrderInput | SortOrder
    timeoutJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    folder?: FolderOrderByWithRelationInput
    states?: UserFlowStateOrderByRelationAggregateInput
    shares?: FlowShareOrderByRelationAggregateInput
    _relevance?: FlowOrderByRelevanceInput
  }

  export type FlowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlowWhereInput | FlowWhereInput[]
    OR?: FlowWhereInput[]
    NOT?: FlowWhereInput | FlowWhereInput[]
    userId?: StringFilter<"Flow"> | string
    pageId?: StringNullableFilter<"Flow"> | string | null
    folderId?: StringFilter<"Flow"> | string
    pageAccessToken?: StringNullableFilter<"Flow"> | string | null
    name?: StringFilter<"Flow"> | string
    description?: StringNullableFilter<"Flow"> | string | null
    status?: EnumFlowStatusFilter<"Flow"> | $Enums.FlowStatus
    logicJson?: JsonNullableFilter<"Flow">
    layoutJson?: JsonNullableFilter<"Flow">
    platform?: EnumPlatformFilter<"Flow"> | $Enums.Platform
    timeoutDuration?: StringNullableFilter<"Flow"> | string | null
    startNodeId?: StringNullableFilter<"Flow"> | string | null
    timeoutJson?: JsonNullableFilter<"Flow">
    createdAt?: DateTimeFilter<"Flow"> | Date | string
    updatedAt?: DateTimeFilter<"Flow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    folder?: XOR<FolderScalarRelationFilter, FolderWhereInput>
    states?: UserFlowStateListRelationFilter
    shares?: FlowShareListRelationFilter
  }, "id">

  export type FlowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    pageId?: SortOrderInput | SortOrder
    folderId?: SortOrder
    pageAccessToken?: SortOrderInput | SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    logicJson?: SortOrderInput | SortOrder
    layoutJson?: SortOrderInput | SortOrder
    platform?: SortOrder
    timeoutDuration?: SortOrderInput | SortOrder
    startNodeId?: SortOrderInput | SortOrder
    timeoutJson?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlowCountOrderByAggregateInput
    _max?: FlowMaxOrderByAggregateInput
    _min?: FlowMinOrderByAggregateInput
  }

  export type FlowScalarWhereWithAggregatesInput = {
    AND?: FlowScalarWhereWithAggregatesInput | FlowScalarWhereWithAggregatesInput[]
    OR?: FlowScalarWhereWithAggregatesInput[]
    NOT?: FlowScalarWhereWithAggregatesInput | FlowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flow"> | string
    userId?: StringWithAggregatesFilter<"Flow"> | string
    pageId?: StringNullableWithAggregatesFilter<"Flow"> | string | null
    folderId?: StringWithAggregatesFilter<"Flow"> | string
    pageAccessToken?: StringNullableWithAggregatesFilter<"Flow"> | string | null
    name?: StringWithAggregatesFilter<"Flow"> | string
    description?: StringNullableWithAggregatesFilter<"Flow"> | string | null
    status?: EnumFlowStatusWithAggregatesFilter<"Flow"> | $Enums.FlowStatus
    logicJson?: JsonNullableWithAggregatesFilter<"Flow">
    layoutJson?: JsonNullableWithAggregatesFilter<"Flow">
    platform?: EnumPlatformWithAggregatesFilter<"Flow"> | $Enums.Platform
    timeoutDuration?: StringNullableWithAggregatesFilter<"Flow"> | string | null
    startNodeId?: StringNullableWithAggregatesFilter<"Flow"> | string | null
    timeoutJson?: JsonNullableWithAggregatesFilter<"Flow">
    createdAt?: DateTimeWithAggregatesFilter<"Flow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flow"> | Date | string
  }

  export type UserFlowStateWhereInput = {
    AND?: UserFlowStateWhereInput | UserFlowStateWhereInput[]
    OR?: UserFlowStateWhereInput[]
    NOT?: UserFlowStateWhereInput | UserFlowStateWhereInput[]
    id?: StringFilter<"UserFlowState"> | string
    platformUserId?: StringFilter<"UserFlowState"> | string
    ownerUserId?: StringFilter<"UserFlowState"> | string
    flowId?: StringFilter<"UserFlowState"> | string
    pageId?: StringFilter<"UserFlowState"> | string
    currentStep?: StringFilter<"UserFlowState"> | string
    stepHistory?: JsonNullableFilter<"UserFlowState">
    variables?: JsonNullableFilter<"UserFlowState">
    status?: EnumUserFlowStatusFilter<"UserFlowState"> | $Enums.UserFlowStatus
    createdAt?: DateTimeFilter<"UserFlowState"> | Date | string
    updatedAt?: DateTimeFilter<"UserFlowState"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    flow?: XOR<FlowScalarRelationFilter, FlowWhereInput>
  }

  export type UserFlowStateOrderByWithRelationInput = {
    id?: SortOrder
    platformUserId?: SortOrder
    ownerUserId?: SortOrder
    flowId?: SortOrder
    pageId?: SortOrder
    currentStep?: SortOrder
    stepHistory?: SortOrderInput | SortOrder
    variables?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    flow?: FlowOrderByWithRelationInput
    _relevance?: UserFlowStateOrderByRelevanceInput
  }

  export type UserFlowStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserFlowStateWhereInput | UserFlowStateWhereInput[]
    OR?: UserFlowStateWhereInput[]
    NOT?: UserFlowStateWhereInput | UserFlowStateWhereInput[]
    platformUserId?: StringFilter<"UserFlowState"> | string
    ownerUserId?: StringFilter<"UserFlowState"> | string
    flowId?: StringFilter<"UserFlowState"> | string
    pageId?: StringFilter<"UserFlowState"> | string
    currentStep?: StringFilter<"UserFlowState"> | string
    stepHistory?: JsonNullableFilter<"UserFlowState">
    variables?: JsonNullableFilter<"UserFlowState">
    status?: EnumUserFlowStatusFilter<"UserFlowState"> | $Enums.UserFlowStatus
    createdAt?: DateTimeFilter<"UserFlowState"> | Date | string
    updatedAt?: DateTimeFilter<"UserFlowState"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    flow?: XOR<FlowScalarRelationFilter, FlowWhereInput>
  }, "id">

  export type UserFlowStateOrderByWithAggregationInput = {
    id?: SortOrder
    platformUserId?: SortOrder
    ownerUserId?: SortOrder
    flowId?: SortOrder
    pageId?: SortOrder
    currentStep?: SortOrder
    stepHistory?: SortOrderInput | SortOrder
    variables?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserFlowStateCountOrderByAggregateInput
    _max?: UserFlowStateMaxOrderByAggregateInput
    _min?: UserFlowStateMinOrderByAggregateInput
  }

  export type UserFlowStateScalarWhereWithAggregatesInput = {
    AND?: UserFlowStateScalarWhereWithAggregatesInput | UserFlowStateScalarWhereWithAggregatesInput[]
    OR?: UserFlowStateScalarWhereWithAggregatesInput[]
    NOT?: UserFlowStateScalarWhereWithAggregatesInput | UserFlowStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFlowState"> | string
    platformUserId?: StringWithAggregatesFilter<"UserFlowState"> | string
    ownerUserId?: StringWithAggregatesFilter<"UserFlowState"> | string
    flowId?: StringWithAggregatesFilter<"UserFlowState"> | string
    pageId?: StringWithAggregatesFilter<"UserFlowState"> | string
    currentStep?: StringWithAggregatesFilter<"UserFlowState"> | string
    stepHistory?: JsonNullableWithAggregatesFilter<"UserFlowState">
    variables?: JsonNullableWithAggregatesFilter<"UserFlowState">
    status?: EnumUserFlowStatusWithAggregatesFilter<"UserFlowState"> | $Enums.UserFlowStatus
    createdAt?: DateTimeWithAggregatesFilter<"UserFlowState"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserFlowState"> | Date | string
  }

  export type FlowShareWhereInput = {
    AND?: FlowShareWhereInput | FlowShareWhereInput[]
    OR?: FlowShareWhereInput[]
    NOT?: FlowShareWhereInput | FlowShareWhereInput[]
    id?: StringFilter<"FlowShare"> | string
    flowId?: StringFilter<"FlowShare"> | string
    userId?: StringFilter<"FlowShare"> | string
    name?: StringFilter<"FlowShare"> | string
    description?: StringNullableFilter<"FlowShare"> | string | null
    thumbnail?: StringNullableFilter<"FlowShare"> | string | null
    status?: EnumFlowShareStatusFilter<"FlowShare"> | $Enums.FlowShareStatus
    downloadCount?: IntFilter<"FlowShare"> | number
    createdAt?: DateTimeFilter<"FlowShare"> | Date | string
    updatedAt?: DateTimeFilter<"FlowShare"> | Date | string
    flow?: XOR<FlowScalarRelationFilter, FlowWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: FlowCommentListRelationFilter
    likes?: FlowLikeListRelationFilter
    saves?: FlowSaveListRelationFilter
  }

  export type FlowShareOrderByWithRelationInput = {
    id?: SortOrder
    flowId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    status?: SortOrder
    downloadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flow?: FlowOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    comments?: FlowCommentOrderByRelationAggregateInput
    likes?: FlowLikeOrderByRelationAggregateInput
    saves?: FlowSaveOrderByRelationAggregateInput
    _relevance?: FlowShareOrderByRelevanceInput
  }

  export type FlowShareWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlowShareWhereInput | FlowShareWhereInput[]
    OR?: FlowShareWhereInput[]
    NOT?: FlowShareWhereInput | FlowShareWhereInput[]
    flowId?: StringFilter<"FlowShare"> | string
    userId?: StringFilter<"FlowShare"> | string
    name?: StringFilter<"FlowShare"> | string
    description?: StringNullableFilter<"FlowShare"> | string | null
    thumbnail?: StringNullableFilter<"FlowShare"> | string | null
    status?: EnumFlowShareStatusFilter<"FlowShare"> | $Enums.FlowShareStatus
    downloadCount?: IntFilter<"FlowShare"> | number
    createdAt?: DateTimeFilter<"FlowShare"> | Date | string
    updatedAt?: DateTimeFilter<"FlowShare"> | Date | string
    flow?: XOR<FlowScalarRelationFilter, FlowWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: FlowCommentListRelationFilter
    likes?: FlowLikeListRelationFilter
    saves?: FlowSaveListRelationFilter
  }, "id">

  export type FlowShareOrderByWithAggregationInput = {
    id?: SortOrder
    flowId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnail?: SortOrderInput | SortOrder
    status?: SortOrder
    downloadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlowShareCountOrderByAggregateInput
    _avg?: FlowShareAvgOrderByAggregateInput
    _max?: FlowShareMaxOrderByAggregateInput
    _min?: FlowShareMinOrderByAggregateInput
    _sum?: FlowShareSumOrderByAggregateInput
  }

  export type FlowShareScalarWhereWithAggregatesInput = {
    AND?: FlowShareScalarWhereWithAggregatesInput | FlowShareScalarWhereWithAggregatesInput[]
    OR?: FlowShareScalarWhereWithAggregatesInput[]
    NOT?: FlowShareScalarWhereWithAggregatesInput | FlowShareScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlowShare"> | string
    flowId?: StringWithAggregatesFilter<"FlowShare"> | string
    userId?: StringWithAggregatesFilter<"FlowShare"> | string
    name?: StringWithAggregatesFilter<"FlowShare"> | string
    description?: StringNullableWithAggregatesFilter<"FlowShare"> | string | null
    thumbnail?: StringNullableWithAggregatesFilter<"FlowShare"> | string | null
    status?: EnumFlowShareStatusWithAggregatesFilter<"FlowShare"> | $Enums.FlowShareStatus
    downloadCount?: IntWithAggregatesFilter<"FlowShare"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FlowShare"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FlowShare"> | Date | string
  }

  export type FlowCommentWhereInput = {
    AND?: FlowCommentWhereInput | FlowCommentWhereInput[]
    OR?: FlowCommentWhereInput[]
    NOT?: FlowCommentWhereInput | FlowCommentWhereInput[]
    id?: StringFilter<"FlowComment"> | string
    flowShareId?: StringFilter<"FlowComment"> | string
    userId?: StringFilter<"FlowComment"> | string
    comment?: StringFilter<"FlowComment"> | string
    parentId?: StringNullableFilter<"FlowComment"> | string | null
    createdAt?: DateTimeFilter<"FlowComment"> | Date | string
    updatedAt?: DateTimeFilter<"FlowComment"> | Date | string
    flowShare?: XOR<FlowShareScalarRelationFilter, FlowShareWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<FlowCommentNullableScalarRelationFilter, FlowCommentWhereInput> | null
    replies?: FlowCommentListRelationFilter
  }

  export type FlowCommentOrderByWithRelationInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flowShare?: FlowShareOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    parent?: FlowCommentOrderByWithRelationInput
    replies?: FlowCommentOrderByRelationAggregateInput
    _relevance?: FlowCommentOrderByRelevanceInput
  }

  export type FlowCommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlowCommentWhereInput | FlowCommentWhereInput[]
    OR?: FlowCommentWhereInput[]
    NOT?: FlowCommentWhereInput | FlowCommentWhereInput[]
    flowShareId?: StringFilter<"FlowComment"> | string
    userId?: StringFilter<"FlowComment"> | string
    comment?: StringFilter<"FlowComment"> | string
    parentId?: StringNullableFilter<"FlowComment"> | string | null
    createdAt?: DateTimeFilter<"FlowComment"> | Date | string
    updatedAt?: DateTimeFilter<"FlowComment"> | Date | string
    flowShare?: XOR<FlowShareScalarRelationFilter, FlowShareWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<FlowCommentNullableScalarRelationFilter, FlowCommentWhereInput> | null
    replies?: FlowCommentListRelationFilter
  }, "id">

  export type FlowCommentOrderByWithAggregationInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    parentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlowCommentCountOrderByAggregateInput
    _max?: FlowCommentMaxOrderByAggregateInput
    _min?: FlowCommentMinOrderByAggregateInput
  }

  export type FlowCommentScalarWhereWithAggregatesInput = {
    AND?: FlowCommentScalarWhereWithAggregatesInput | FlowCommentScalarWhereWithAggregatesInput[]
    OR?: FlowCommentScalarWhereWithAggregatesInput[]
    NOT?: FlowCommentScalarWhereWithAggregatesInput | FlowCommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlowComment"> | string
    flowShareId?: StringWithAggregatesFilter<"FlowComment"> | string
    userId?: StringWithAggregatesFilter<"FlowComment"> | string
    comment?: StringWithAggregatesFilter<"FlowComment"> | string
    parentId?: StringNullableWithAggregatesFilter<"FlowComment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FlowComment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FlowComment"> | Date | string
  }

  export type FlowLikeWhereInput = {
    AND?: FlowLikeWhereInput | FlowLikeWhereInput[]
    OR?: FlowLikeWhereInput[]
    NOT?: FlowLikeWhereInput | FlowLikeWhereInput[]
    id?: StringFilter<"FlowLike"> | string
    flowShareId?: StringFilter<"FlowLike"> | string
    userId?: StringFilter<"FlowLike"> | string
    createdAt?: DateTimeFilter<"FlowLike"> | Date | string
    flowShare?: XOR<FlowShareScalarRelationFilter, FlowShareWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FlowLikeOrderByWithRelationInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    flowShare?: FlowShareOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: FlowLikeOrderByRelevanceInput
  }

  export type FlowLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    flowShareId_userId?: FlowLikeFlowShareIdUserIdCompoundUniqueInput
    AND?: FlowLikeWhereInput | FlowLikeWhereInput[]
    OR?: FlowLikeWhereInput[]
    NOT?: FlowLikeWhereInput | FlowLikeWhereInput[]
    flowShareId?: StringFilter<"FlowLike"> | string
    userId?: StringFilter<"FlowLike"> | string
    createdAt?: DateTimeFilter<"FlowLike"> | Date | string
    flowShare?: XOR<FlowShareScalarRelationFilter, FlowShareWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "flowShareId_userId">

  export type FlowLikeOrderByWithAggregationInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: FlowLikeCountOrderByAggregateInput
    _max?: FlowLikeMaxOrderByAggregateInput
    _min?: FlowLikeMinOrderByAggregateInput
  }

  export type FlowLikeScalarWhereWithAggregatesInput = {
    AND?: FlowLikeScalarWhereWithAggregatesInput | FlowLikeScalarWhereWithAggregatesInput[]
    OR?: FlowLikeScalarWhereWithAggregatesInput[]
    NOT?: FlowLikeScalarWhereWithAggregatesInput | FlowLikeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlowLike"> | string
    flowShareId?: StringWithAggregatesFilter<"FlowLike"> | string
    userId?: StringWithAggregatesFilter<"FlowLike"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FlowLike"> | Date | string
  }

  export type FlowSaveWhereInput = {
    AND?: FlowSaveWhereInput | FlowSaveWhereInput[]
    OR?: FlowSaveWhereInput[]
    NOT?: FlowSaveWhereInput | FlowSaveWhereInput[]
    id?: StringFilter<"FlowSave"> | string
    flowShareId?: StringFilter<"FlowSave"> | string
    userId?: StringFilter<"FlowSave"> | string
    createdAt?: DateTimeFilter<"FlowSave"> | Date | string
    flowShare?: XOR<FlowShareScalarRelationFilter, FlowShareWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FlowSaveOrderByWithRelationInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    flowShare?: FlowShareOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    _relevance?: FlowSaveOrderByRelevanceInput
  }

  export type FlowSaveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    flowShareId_userId?: FlowSaveFlowShareIdUserIdCompoundUniqueInput
    AND?: FlowSaveWhereInput | FlowSaveWhereInput[]
    OR?: FlowSaveWhereInput[]
    NOT?: FlowSaveWhereInput | FlowSaveWhereInput[]
    flowShareId?: StringFilter<"FlowSave"> | string
    userId?: StringFilter<"FlowSave"> | string
    createdAt?: DateTimeFilter<"FlowSave"> | Date | string
    flowShare?: XOR<FlowShareScalarRelationFilter, FlowShareWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "flowShareId_userId">

  export type FlowSaveOrderByWithAggregationInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: FlowSaveCountOrderByAggregateInput
    _max?: FlowSaveMaxOrderByAggregateInput
    _min?: FlowSaveMinOrderByAggregateInput
  }

  export type FlowSaveScalarWhereWithAggregatesInput = {
    AND?: FlowSaveScalarWhereWithAggregatesInput | FlowSaveScalarWhereWithAggregatesInput[]
    OR?: FlowSaveScalarWhereWithAggregatesInput[]
    NOT?: FlowSaveScalarWhereWithAggregatesInput | FlowSaveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlowSave"> | string
    flowShareId?: StringWithAggregatesFilter<"FlowSave"> | string
    userId?: StringWithAggregatesFilter<"FlowSave"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FlowSave"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    avatar?: StringNullableFilter<"Notification"> | string | null
    relatedId?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    avatar?: SortOrderInput | SortOrder
    relatedId?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    avatar?: StringNullableFilter<"Notification"> | string | null
    relatedId?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    avatar?: SortOrderInput | SortOrder
    relatedId?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: EnumNotificationTypeWithAggregatesFilter<"Notification"> | $Enums.NotificationType
    message?: StringWithAggregatesFilter<"Notification"> | string
    avatar?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    relatedId?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type FlowFallbackWhereInput = {
    AND?: FlowFallbackWhereInput | FlowFallbackWhereInput[]
    OR?: FlowFallbackWhereInput[]
    NOT?: FlowFallbackWhereInput | FlowFallbackWhereInput[]
    id?: StringFilter<"FlowFallback"> | string
    userId?: StringFilter<"FlowFallback"> | string
    timeoutDuration?: IntFilter<"FlowFallback"> | number
    timeoutUnit?: EnumTimeoutUnitFilter<"FlowFallback"> | $Enums.TimeoutUnit
    fallbackMessage?: StringFilter<"FlowFallback"> | string
    createdAt?: DateTimeFilter<"FlowFallback"> | Date | string
    updatedAt?: DateTimeFilter<"FlowFallback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FlowFallbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    timeoutDuration?: SortOrder
    timeoutUnit?: SortOrder
    fallbackMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    _relevance?: FlowFallbackOrderByRelevanceInput
  }

  export type FlowFallbackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: FlowFallbackWhereInput | FlowFallbackWhereInput[]
    OR?: FlowFallbackWhereInput[]
    NOT?: FlowFallbackWhereInput | FlowFallbackWhereInput[]
    timeoutDuration?: IntFilter<"FlowFallback"> | number
    timeoutUnit?: EnumTimeoutUnitFilter<"FlowFallback"> | $Enums.TimeoutUnit
    fallbackMessage?: StringFilter<"FlowFallback"> | string
    createdAt?: DateTimeFilter<"FlowFallback"> | Date | string
    updatedAt?: DateTimeFilter<"FlowFallback"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type FlowFallbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    timeoutDuration?: SortOrder
    timeoutUnit?: SortOrder
    fallbackMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlowFallbackCountOrderByAggregateInput
    _avg?: FlowFallbackAvgOrderByAggregateInput
    _max?: FlowFallbackMaxOrderByAggregateInput
    _min?: FlowFallbackMinOrderByAggregateInput
    _sum?: FlowFallbackSumOrderByAggregateInput
  }

  export type FlowFallbackScalarWhereWithAggregatesInput = {
    AND?: FlowFallbackScalarWhereWithAggregatesInput | FlowFallbackScalarWhereWithAggregatesInput[]
    OR?: FlowFallbackScalarWhereWithAggregatesInput[]
    NOT?: FlowFallbackScalarWhereWithAggregatesInput | FlowFallbackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlowFallback"> | string
    userId?: StringWithAggregatesFilter<"FlowFallback"> | string
    timeoutDuration?: IntWithAggregatesFilter<"FlowFallback"> | number
    timeoutUnit?: EnumTimeoutUnitWithAggregatesFilter<"FlowFallback"> | $Enums.TimeoutUnit
    fallbackMessage?: StringWithAggregatesFilter<"FlowFallback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"FlowFallback"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FlowFallback"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flows?: FlowCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordResetTokenInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolderCreateInput = {
    id?: string
    name: string
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoldersInput
    flows?: FlowCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    flows?: FlowUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
    flows?: FlowUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flows?: FlowUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderCreateManyInput = {
    id?: string
    userId: string
    name: string
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FolderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCreateInput = {
    id?: string
    pageId?: string | null
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlowsInput
    folder: FolderCreateNestedOneWithoutFlowsInput
    states?: UserFlowStateCreateNestedManyWithoutFlowInput
    shares?: FlowShareCreateNestedManyWithoutFlowInput
  }

  export type FlowUncheckedCreateInput = {
    id?: string
    userId: string
    pageId?: string | null
    folderId: string
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: UserFlowStateUncheckedCreateNestedManyWithoutFlowInput
    shares?: FlowShareUncheckedCreateNestedManyWithoutFlowInput
  }

  export type FlowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlowsNestedInput
    folder?: FolderUpdateOneRequiredWithoutFlowsNestedInput
    states?: UserFlowStateUpdateManyWithoutFlowNestedInput
    shares?: FlowShareUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: StringFieldUpdateOperationsInput | string
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: UserFlowStateUncheckedUpdateManyWithoutFlowNestedInput
    shares?: FlowShareUncheckedUpdateManyWithoutFlowNestedInput
  }

  export type FlowCreateManyInput = {
    id?: string
    userId: string
    pageId?: string | null
    folderId: string
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: StringFieldUpdateOperationsInput | string
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFlowStateCreateInput = {
    id?: string
    platformUserId: string
    pageId: string
    currentStep: string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.UserFlowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutUserFlowStatesInput
    flow: FlowCreateNestedOneWithoutStatesInput
  }

  export type UserFlowStateUncheckedCreateInput = {
    id?: string
    platformUserId: string
    ownerUserId: string
    flowId: string
    pageId: string
    currentStep: string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.UserFlowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFlowStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformUserId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    currentStep?: StringFieldUpdateOperationsInput | string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumUserFlowStatusFieldUpdateOperationsInput | $Enums.UserFlowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutUserFlowStatesNestedInput
    flow?: FlowUpdateOneRequiredWithoutStatesNestedInput
  }

  export type UserFlowStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformUserId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    currentStep?: StringFieldUpdateOperationsInput | string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumUserFlowStatusFieldUpdateOperationsInput | $Enums.UserFlowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFlowStateCreateManyInput = {
    id?: string
    platformUserId: string
    ownerUserId: string
    flowId: string
    pageId: string
    currentStep: string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.UserFlowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFlowStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformUserId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    currentStep?: StringFieldUpdateOperationsInput | string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumUserFlowStatusFieldUpdateOperationsInput | $Enums.UserFlowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFlowStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformUserId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    currentStep?: StringFieldUpdateOperationsInput | string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumUserFlowStatusFieldUpdateOperationsInput | $Enums.UserFlowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowShareCreateInput = {
    id?: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    flow: FlowCreateNestedOneWithoutSharesInput
    user: UserCreateNestedOneWithoutFlowSharesInput
    comments?: FlowCommentCreateNestedManyWithoutFlowShareInput
    likes?: FlowLikeCreateNestedManyWithoutFlowShareInput
    saves?: FlowSaveCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareUncheckedCreateInput = {
    id?: string
    flowId: string
    userId: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: FlowCommentUncheckedCreateNestedManyWithoutFlowShareInput
    likes?: FlowLikeUncheckedCreateNestedManyWithoutFlowShareInput
    saves?: FlowSaveUncheckedCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutSharesNestedInput
    user?: UserUpdateOneRequiredWithoutFlowSharesNestedInput
    comments?: FlowCommentUpdateManyWithoutFlowShareNestedInput
    likes?: FlowLikeUpdateManyWithoutFlowShareNestedInput
    saves?: FlowSaveUpdateManyWithoutFlowShareNestedInput
  }

  export type FlowShareUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: FlowCommentUncheckedUpdateManyWithoutFlowShareNestedInput
    likes?: FlowLikeUncheckedUpdateManyWithoutFlowShareNestedInput
    saves?: FlowSaveUncheckedUpdateManyWithoutFlowShareNestedInput
  }

  export type FlowShareCreateManyInput = {
    id?: string
    flowId: string
    userId: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowShareUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowShareUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCommentCreateInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flowShare: FlowShareCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutFlowCommentsInput
    parent?: FlowCommentCreateNestedOneWithoutRepliesInput
    replies?: FlowCommentCreateNestedManyWithoutParentInput
  }

  export type FlowCommentUncheckedCreateInput = {
    id?: string
    flowShareId: string
    userId: string
    comment: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: FlowCommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type FlowCommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowShare?: FlowShareUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutFlowCommentsNestedInput
    parent?: FlowCommentUpdateOneWithoutRepliesNestedInput
    replies?: FlowCommentUpdateManyWithoutParentNestedInput
  }

  export type FlowCommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: FlowCommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type FlowCommentCreateManyInput = {
    id?: string
    flowShareId: string
    userId: string
    comment: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowCommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowLikeCreateInput = {
    id?: string
    createdAt?: Date | string
    flowShare: FlowShareCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutFlowLikesInput
  }

  export type FlowLikeUncheckedCreateInput = {
    id?: string
    flowShareId: string
    userId: string
    createdAt?: Date | string
  }

  export type FlowLikeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowShare?: FlowShareUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutFlowLikesNestedInput
  }

  export type FlowLikeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowLikeCreateManyInput = {
    id?: string
    flowShareId: string
    userId: string
    createdAt?: Date | string
  }

  export type FlowLikeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowLikeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowSaveCreateInput = {
    id?: string
    createdAt?: Date | string
    flowShare: FlowShareCreateNestedOneWithoutSavesInput
    user: UserCreateNestedOneWithoutFlowSaveInput
  }

  export type FlowSaveUncheckedCreateInput = {
    id?: string
    flowShareId: string
    userId: string
    createdAt?: Date | string
  }

  export type FlowSaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowShare?: FlowShareUpdateOneRequiredWithoutSavesNestedInput
    user?: UserUpdateOneRequiredWithoutFlowSaveNestedInput
  }

  export type FlowSaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowSaveCreateManyInput = {
    id?: string
    flowShareId: string
    userId: string
    createdAt?: Date | string
  }

  export type FlowSaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowSaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    avatar?: string | null
    relatedId: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    message: string
    avatar?: string | null
    relatedId: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: $Enums.NotificationType
    message: string
    avatar?: string | null
    relatedId: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowFallbackCreateInput = {
    id?: string
    timeoutDuration: number
    timeoutUnit: $Enums.TimeoutUnit
    fallbackMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFallbackInput
  }

  export type FlowFallbackUncheckedCreateInput = {
    id?: string
    userId: string
    timeoutDuration: number
    timeoutUnit: $Enums.TimeoutUnit
    fallbackMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowFallbackUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeoutDuration?: IntFieldUpdateOperationsInput | number
    timeoutUnit?: EnumTimeoutUnitFieldUpdateOperationsInput | $Enums.TimeoutUnit
    fallbackMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFallbackNestedInput
  }

  export type FlowFallbackUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timeoutDuration?: IntFieldUpdateOperationsInput | number
    timeoutUnit?: EnumTimeoutUnitFieldUpdateOperationsInput | $Enums.TimeoutUnit
    fallbackMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowFallbackCreateManyInput = {
    id?: string
    userId: string
    timeoutDuration: number
    timeoutUnit: $Enums.TimeoutUnit
    fallbackMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowFallbackUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeoutDuration?: IntFieldUpdateOperationsInput | number
    timeoutUnit?: EnumTimeoutUnitFieldUpdateOperationsInput | $Enums.TimeoutUnit
    fallbackMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowFallbackUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    timeoutDuration?: IntFieldUpdateOperationsInput | number
    timeoutUnit?: EnumTimeoutUnitFieldUpdateOperationsInput | $Enums.TimeoutUnit
    fallbackMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FolderListRelationFilter = {
    every?: FolderWhereInput
    some?: FolderWhereInput
    none?: FolderWhereInput
  }

  export type FlowListRelationFilter = {
    every?: FlowWhereInput
    some?: FlowWhereInput
    none?: FlowWhereInput
  }

  export type FlowShareListRelationFilter = {
    every?: FlowShareWhereInput
    some?: FlowShareWhereInput
    none?: FlowShareWhereInput
  }

  export type FlowLikeListRelationFilter = {
    every?: FlowLikeWhereInput
    some?: FlowLikeWhereInput
    none?: FlowLikeWhereInput
  }

  export type FlowSaveListRelationFilter = {
    every?: FlowSaveWhereInput
    some?: FlowSaveWhereInput
    none?: FlowSaveWhereInput
  }

  export type FlowCommentListRelationFilter = {
    every?: FlowCommentWhereInput
    some?: FlowCommentWhereInput
    none?: FlowCommentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type FlowFallbackNullableScalarRelationFilter = {
    is?: FlowFallbackWhereInput | null
    isNot?: FlowFallbackWhereInput | null
  }

  export type UserFlowStateListRelationFilter = {
    every?: UserFlowStateWhereInput
    some?: UserFlowStateWhereInput
    none?: UserFlowStateWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type PasswordResetTokenListRelationFilter = {
    every?: PasswordResetTokenWhereInput
    some?: PasswordResetTokenWhereInput
    none?: PasswordResetTokenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FolderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowShareOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowSaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowCommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFlowStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    displayName?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    password?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenOrderByRelevanceInput = {
    fields: RefreshTokenOrderByRelevanceFieldEnum | RefreshTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenOrderByRelevanceInput = {
    fields: PasswordResetTokenOrderByRelevanceFieldEnum | PasswordResetTokenOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type FolderOrderByRelevanceInput = {
    fields: FolderOrderByRelevanceFieldEnum | FolderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FolderUserId_platform_nameCompoundUniqueInput = {
    userId: string
    platform: $Enums.Platform
    name: string
  }

  export type FolderCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FolderMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FolderMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    platform?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type EnumFlowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowStatus | EnumFlowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlowStatus[]
    notIn?: $Enums.FlowStatus[]
    not?: NestedEnumFlowStatusFilter<$PrismaModel> | $Enums.FlowStatus
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FolderScalarRelationFilter = {
    is?: FolderWhereInput
    isNot?: FolderWhereInput
  }

  export type FlowOrderByRelevanceInput = {
    fields: FlowOrderByRelevanceFieldEnum | FlowOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FlowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pageId?: SortOrder
    folderId?: SortOrder
    pageAccessToken?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    logicJson?: SortOrder
    layoutJson?: SortOrder
    platform?: SortOrder
    timeoutDuration?: SortOrder
    startNodeId?: SortOrder
    timeoutJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pageId?: SortOrder
    folderId?: SortOrder
    pageAccessToken?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    platform?: SortOrder
    timeoutDuration?: SortOrder
    startNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    pageId?: SortOrder
    folderId?: SortOrder
    pageAccessToken?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    platform?: SortOrder
    timeoutDuration?: SortOrder
    startNodeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumFlowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowStatus | EnumFlowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlowStatus[]
    notIn?: $Enums.FlowStatus[]
    not?: NestedEnumFlowStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlowStatusFilter<$PrismaModel>
    _max?: NestedEnumFlowStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumUserFlowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserFlowStatus | EnumUserFlowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserFlowStatus[]
    notIn?: $Enums.UserFlowStatus[]
    not?: NestedEnumUserFlowStatusFilter<$PrismaModel> | $Enums.UserFlowStatus
  }

  export type FlowScalarRelationFilter = {
    is?: FlowWhereInput
    isNot?: FlowWhereInput
  }

  export type UserFlowStateOrderByRelevanceInput = {
    fields: UserFlowStateOrderByRelevanceFieldEnum | UserFlowStateOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserFlowStateCountOrderByAggregateInput = {
    id?: SortOrder
    platformUserId?: SortOrder
    ownerUserId?: SortOrder
    flowId?: SortOrder
    pageId?: SortOrder
    currentStep?: SortOrder
    stepHistory?: SortOrder
    variables?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFlowStateMaxOrderByAggregateInput = {
    id?: SortOrder
    platformUserId?: SortOrder
    ownerUserId?: SortOrder
    flowId?: SortOrder
    pageId?: SortOrder
    currentStep?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserFlowStateMinOrderByAggregateInput = {
    id?: SortOrder
    platformUserId?: SortOrder
    ownerUserId?: SortOrder
    flowId?: SortOrder
    pageId?: SortOrder
    currentStep?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumUserFlowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserFlowStatus | EnumUserFlowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserFlowStatus[]
    notIn?: $Enums.UserFlowStatus[]
    not?: NestedEnumUserFlowStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserFlowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserFlowStatusFilter<$PrismaModel>
    _max?: NestedEnumUserFlowStatusFilter<$PrismaModel>
  }

  export type EnumFlowShareStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowShareStatus | EnumFlowShareStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlowShareStatus[]
    notIn?: $Enums.FlowShareStatus[]
    not?: NestedEnumFlowShareStatusFilter<$PrismaModel> | $Enums.FlowShareStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FlowShareOrderByRelevanceInput = {
    fields: FlowShareOrderByRelevanceFieldEnum | FlowShareOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FlowShareCountOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    downloadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowShareAvgOrderByAggregateInput = {
    downloadCount?: SortOrder
  }

  export type FlowShareMaxOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    downloadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowShareMinOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    thumbnail?: SortOrder
    status?: SortOrder
    downloadCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowShareSumOrderByAggregateInput = {
    downloadCount?: SortOrder
  }

  export type EnumFlowShareStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowShareStatus | EnumFlowShareStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlowShareStatus[]
    notIn?: $Enums.FlowShareStatus[]
    not?: NestedEnumFlowShareStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlowShareStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlowShareStatusFilter<$PrismaModel>
    _max?: NestedEnumFlowShareStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FlowShareScalarRelationFilter = {
    is?: FlowShareWhereInput
    isNot?: FlowShareWhereInput
  }

  export type FlowCommentNullableScalarRelationFilter = {
    is?: FlowCommentWhereInput | null
    isNot?: FlowCommentWhereInput | null
  }

  export type FlowCommentOrderByRelevanceInput = {
    fields: FlowCommentOrderByRelevanceFieldEnum | FlowCommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FlowCommentCountOrderByAggregateInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowCommentMaxOrderByAggregateInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowCommentMinOrderByAggregateInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    parentId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowLikeOrderByRelevanceInput = {
    fields: FlowLikeOrderByRelevanceFieldEnum | FlowLikeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FlowLikeFlowShareIdUserIdCompoundUniqueInput = {
    flowShareId: string
    userId: string
  }

  export type FlowLikeCountOrderByAggregateInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowLikeMinOrderByAggregateInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowSaveOrderByRelevanceInput = {
    fields: FlowSaveOrderByRelevanceFieldEnum | FlowSaveOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FlowSaveFlowShareIdUserIdCompoundUniqueInput = {
    flowShareId: string
    userId: string
  }

  export type FlowSaveCountOrderByAggregateInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowSaveMaxOrderByAggregateInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowSaveMinOrderByAggregateInput = {
    id?: SortOrder
    flowShareId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    avatar?: SortOrder
    relatedId?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    avatar?: SortOrder
    relatedId?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    message?: SortOrder
    avatar?: SortOrder
    relatedId?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumTimeoutUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeoutUnit | EnumTimeoutUnitFieldRefInput<$PrismaModel>
    in?: $Enums.TimeoutUnit[]
    notIn?: $Enums.TimeoutUnit[]
    not?: NestedEnumTimeoutUnitFilter<$PrismaModel> | $Enums.TimeoutUnit
  }

  export type FlowFallbackOrderByRelevanceInput = {
    fields: FlowFallbackOrderByRelevanceFieldEnum | FlowFallbackOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type FlowFallbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timeoutDuration?: SortOrder
    timeoutUnit?: SortOrder
    fallbackMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowFallbackAvgOrderByAggregateInput = {
    timeoutDuration?: SortOrder
  }

  export type FlowFallbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timeoutDuration?: SortOrder
    timeoutUnit?: SortOrder
    fallbackMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowFallbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    timeoutDuration?: SortOrder
    timeoutUnit?: SortOrder
    fallbackMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowFallbackSumOrderByAggregateInput = {
    timeoutDuration?: SortOrder
  }

  export type EnumTimeoutUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeoutUnit | EnumTimeoutUnitFieldRefInput<$PrismaModel>
    in?: $Enums.TimeoutUnit[]
    notIn?: $Enums.TimeoutUnit[]
    not?: NestedEnumTimeoutUnitWithAggregatesFilter<$PrismaModel> | $Enums.TimeoutUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeoutUnitFilter<$PrismaModel>
    _max?: NestedEnumTimeoutUnitFilter<$PrismaModel>
  }

  export type FolderCreateNestedManyWithoutUserInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FlowCreateNestedManyWithoutUserInput = {
    create?: XOR<FlowCreateWithoutUserInput, FlowUncheckedCreateWithoutUserInput> | FlowCreateWithoutUserInput[] | FlowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutUserInput | FlowCreateOrConnectWithoutUserInput[]
    createMany?: FlowCreateManyUserInputEnvelope
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
  }

  export type FlowShareCreateNestedManyWithoutUserInput = {
    create?: XOR<FlowShareCreateWithoutUserInput, FlowShareUncheckedCreateWithoutUserInput> | FlowShareCreateWithoutUserInput[] | FlowShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowShareCreateOrConnectWithoutUserInput | FlowShareCreateOrConnectWithoutUserInput[]
    createMany?: FlowShareCreateManyUserInputEnvelope
    connect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
  }

  export type FlowLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<FlowLikeCreateWithoutUserInput, FlowLikeUncheckedCreateWithoutUserInput> | FlowLikeCreateWithoutUserInput[] | FlowLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowLikeCreateOrConnectWithoutUserInput | FlowLikeCreateOrConnectWithoutUserInput[]
    createMany?: FlowLikeCreateManyUserInputEnvelope
    connect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
  }

  export type FlowSaveCreateNestedManyWithoutUserInput = {
    create?: XOR<FlowSaveCreateWithoutUserInput, FlowSaveUncheckedCreateWithoutUserInput> | FlowSaveCreateWithoutUserInput[] | FlowSaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowSaveCreateOrConnectWithoutUserInput | FlowSaveCreateOrConnectWithoutUserInput[]
    createMany?: FlowSaveCreateManyUserInputEnvelope
    connect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
  }

  export type FlowCommentCreateNestedManyWithoutUserInput = {
    create?: XOR<FlowCommentCreateWithoutUserInput, FlowCommentUncheckedCreateWithoutUserInput> | FlowCommentCreateWithoutUserInput[] | FlowCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutUserInput | FlowCommentCreateOrConnectWithoutUserInput[]
    createMany?: FlowCommentCreateManyUserInputEnvelope
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type FlowFallbackCreateNestedOneWithoutUserInput = {
    create?: XOR<FlowFallbackCreateWithoutUserInput, FlowFallbackUncheckedCreateWithoutUserInput>
    connectOrCreate?: FlowFallbackCreateOrConnectWithoutUserInput
    connect?: FlowFallbackWhereUniqueInput
  }

  export type UserFlowStateCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UserFlowStateCreateWithoutOwnerInput, UserFlowStateUncheckedCreateWithoutOwnerInput> | UserFlowStateCreateWithoutOwnerInput[] | UserFlowStateUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserFlowStateCreateOrConnectWithoutOwnerInput | UserFlowStateCreateOrConnectWithoutOwnerInput[]
    createMany?: UserFlowStateCreateManyOwnerInputEnvelope
    connect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PasswordResetTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type FolderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
  }

  export type FlowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlowCreateWithoutUserInput, FlowUncheckedCreateWithoutUserInput> | FlowCreateWithoutUserInput[] | FlowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutUserInput | FlowCreateOrConnectWithoutUserInput[]
    createMany?: FlowCreateManyUserInputEnvelope
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
  }

  export type FlowShareUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlowShareCreateWithoutUserInput, FlowShareUncheckedCreateWithoutUserInput> | FlowShareCreateWithoutUserInput[] | FlowShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowShareCreateOrConnectWithoutUserInput | FlowShareCreateOrConnectWithoutUserInput[]
    createMany?: FlowShareCreateManyUserInputEnvelope
    connect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
  }

  export type FlowLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlowLikeCreateWithoutUserInput, FlowLikeUncheckedCreateWithoutUserInput> | FlowLikeCreateWithoutUserInput[] | FlowLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowLikeCreateOrConnectWithoutUserInput | FlowLikeCreateOrConnectWithoutUserInput[]
    createMany?: FlowLikeCreateManyUserInputEnvelope
    connect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
  }

  export type FlowSaveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlowSaveCreateWithoutUserInput, FlowSaveUncheckedCreateWithoutUserInput> | FlowSaveCreateWithoutUserInput[] | FlowSaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowSaveCreateOrConnectWithoutUserInput | FlowSaveCreateOrConnectWithoutUserInput[]
    createMany?: FlowSaveCreateManyUserInputEnvelope
    connect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
  }

  export type FlowCommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlowCommentCreateWithoutUserInput, FlowCommentUncheckedCreateWithoutUserInput> | FlowCommentCreateWithoutUserInput[] | FlowCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutUserInput | FlowCommentCreateOrConnectWithoutUserInput[]
    createMany?: FlowCommentCreateManyUserInputEnvelope
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type FlowFallbackUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FlowFallbackCreateWithoutUserInput, FlowFallbackUncheckedCreateWithoutUserInput>
    connectOrCreate?: FlowFallbackCreateOrConnectWithoutUserInput
    connect?: FlowFallbackWhereUniqueInput
  }

  export type UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<UserFlowStateCreateWithoutOwnerInput, UserFlowStateUncheckedCreateWithoutOwnerInput> | UserFlowStateCreateWithoutOwnerInput[] | UserFlowStateUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserFlowStateCreateOrConnectWithoutOwnerInput | UserFlowStateCreateOrConnectWithoutOwnerInput[]
    createMany?: UserFlowStateCreateManyOwnerInputEnvelope
    connect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FolderUpdateManyWithoutUserNestedInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutUserInput | FolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutUserInput | FolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutUserInput | FolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FlowUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlowCreateWithoutUserInput, FlowUncheckedCreateWithoutUserInput> | FlowCreateWithoutUserInput[] | FlowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutUserInput | FlowCreateOrConnectWithoutUserInput[]
    upsert?: FlowUpsertWithWhereUniqueWithoutUserInput | FlowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlowCreateManyUserInputEnvelope
    set?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    disconnect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    delete?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    update?: FlowUpdateWithWhereUniqueWithoutUserInput | FlowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlowUpdateManyWithWhereWithoutUserInput | FlowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlowScalarWhereInput | FlowScalarWhereInput[]
  }

  export type FlowShareUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlowShareCreateWithoutUserInput, FlowShareUncheckedCreateWithoutUserInput> | FlowShareCreateWithoutUserInput[] | FlowShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowShareCreateOrConnectWithoutUserInput | FlowShareCreateOrConnectWithoutUserInput[]
    upsert?: FlowShareUpsertWithWhereUniqueWithoutUserInput | FlowShareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlowShareCreateManyUserInputEnvelope
    set?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    disconnect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    delete?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    connect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    update?: FlowShareUpdateWithWhereUniqueWithoutUserInput | FlowShareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlowShareUpdateManyWithWhereWithoutUserInput | FlowShareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlowShareScalarWhereInput | FlowShareScalarWhereInput[]
  }

  export type FlowLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlowLikeCreateWithoutUserInput, FlowLikeUncheckedCreateWithoutUserInput> | FlowLikeCreateWithoutUserInput[] | FlowLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowLikeCreateOrConnectWithoutUserInput | FlowLikeCreateOrConnectWithoutUserInput[]
    upsert?: FlowLikeUpsertWithWhereUniqueWithoutUserInput | FlowLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlowLikeCreateManyUserInputEnvelope
    set?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    disconnect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    delete?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    connect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    update?: FlowLikeUpdateWithWhereUniqueWithoutUserInput | FlowLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlowLikeUpdateManyWithWhereWithoutUserInput | FlowLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlowLikeScalarWhereInput | FlowLikeScalarWhereInput[]
  }

  export type FlowSaveUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlowSaveCreateWithoutUserInput, FlowSaveUncheckedCreateWithoutUserInput> | FlowSaveCreateWithoutUserInput[] | FlowSaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowSaveCreateOrConnectWithoutUserInput | FlowSaveCreateOrConnectWithoutUserInput[]
    upsert?: FlowSaveUpsertWithWhereUniqueWithoutUserInput | FlowSaveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlowSaveCreateManyUserInputEnvelope
    set?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    disconnect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    delete?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    connect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    update?: FlowSaveUpdateWithWhereUniqueWithoutUserInput | FlowSaveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlowSaveUpdateManyWithWhereWithoutUserInput | FlowSaveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlowSaveScalarWhereInput | FlowSaveScalarWhereInput[]
  }

  export type FlowCommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlowCommentCreateWithoutUserInput, FlowCommentUncheckedCreateWithoutUserInput> | FlowCommentCreateWithoutUserInput[] | FlowCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutUserInput | FlowCommentCreateOrConnectWithoutUserInput[]
    upsert?: FlowCommentUpsertWithWhereUniqueWithoutUserInput | FlowCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlowCommentCreateManyUserInputEnvelope
    set?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    disconnect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    delete?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    update?: FlowCommentUpdateWithWhereUniqueWithoutUserInput | FlowCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlowCommentUpdateManyWithWhereWithoutUserInput | FlowCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlowCommentScalarWhereInput | FlowCommentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type FlowFallbackUpdateOneWithoutUserNestedInput = {
    create?: XOR<FlowFallbackCreateWithoutUserInput, FlowFallbackUncheckedCreateWithoutUserInput>
    connectOrCreate?: FlowFallbackCreateOrConnectWithoutUserInput
    upsert?: FlowFallbackUpsertWithoutUserInput
    disconnect?: FlowFallbackWhereInput | boolean
    delete?: FlowFallbackWhereInput | boolean
    connect?: FlowFallbackWhereUniqueInput
    update?: XOR<XOR<FlowFallbackUpdateToOneWithWhereWithoutUserInput, FlowFallbackUpdateWithoutUserInput>, FlowFallbackUncheckedUpdateWithoutUserInput>
  }

  export type UserFlowStateUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UserFlowStateCreateWithoutOwnerInput, UserFlowStateUncheckedCreateWithoutOwnerInput> | UserFlowStateCreateWithoutOwnerInput[] | UserFlowStateUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserFlowStateCreateOrConnectWithoutOwnerInput | UserFlowStateCreateOrConnectWithoutOwnerInput[]
    upsert?: UserFlowStateUpsertWithWhereUniqueWithoutOwnerInput | UserFlowStateUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UserFlowStateCreateManyOwnerInputEnvelope
    set?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    disconnect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    delete?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    connect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    update?: UserFlowStateUpdateWithWhereUniqueWithoutOwnerInput | UserFlowStateUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UserFlowStateUpdateManyWithWhereWithoutOwnerInput | UserFlowStateUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UserFlowStateScalarWhereInput | UserFlowStateScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PasswordResetTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type FolderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput> | FolderCreateWithoutUserInput[] | FolderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FolderCreateOrConnectWithoutUserInput | FolderCreateOrConnectWithoutUserInput[]
    upsert?: FolderUpsertWithWhereUniqueWithoutUserInput | FolderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FolderCreateManyUserInputEnvelope
    set?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    disconnect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    delete?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    connect?: FolderWhereUniqueInput | FolderWhereUniqueInput[]
    update?: FolderUpdateWithWhereUniqueWithoutUserInput | FolderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FolderUpdateManyWithWhereWithoutUserInput | FolderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FolderScalarWhereInput | FolderScalarWhereInput[]
  }

  export type FlowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlowCreateWithoutUserInput, FlowUncheckedCreateWithoutUserInput> | FlowCreateWithoutUserInput[] | FlowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutUserInput | FlowCreateOrConnectWithoutUserInput[]
    upsert?: FlowUpsertWithWhereUniqueWithoutUserInput | FlowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlowCreateManyUserInputEnvelope
    set?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    disconnect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    delete?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    update?: FlowUpdateWithWhereUniqueWithoutUserInput | FlowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlowUpdateManyWithWhereWithoutUserInput | FlowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlowScalarWhereInput | FlowScalarWhereInput[]
  }

  export type FlowShareUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlowShareCreateWithoutUserInput, FlowShareUncheckedCreateWithoutUserInput> | FlowShareCreateWithoutUserInput[] | FlowShareUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowShareCreateOrConnectWithoutUserInput | FlowShareCreateOrConnectWithoutUserInput[]
    upsert?: FlowShareUpsertWithWhereUniqueWithoutUserInput | FlowShareUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlowShareCreateManyUserInputEnvelope
    set?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    disconnect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    delete?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    connect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    update?: FlowShareUpdateWithWhereUniqueWithoutUserInput | FlowShareUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlowShareUpdateManyWithWhereWithoutUserInput | FlowShareUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlowShareScalarWhereInput | FlowShareScalarWhereInput[]
  }

  export type FlowLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlowLikeCreateWithoutUserInput, FlowLikeUncheckedCreateWithoutUserInput> | FlowLikeCreateWithoutUserInput[] | FlowLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowLikeCreateOrConnectWithoutUserInput | FlowLikeCreateOrConnectWithoutUserInput[]
    upsert?: FlowLikeUpsertWithWhereUniqueWithoutUserInput | FlowLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlowLikeCreateManyUserInputEnvelope
    set?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    disconnect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    delete?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    connect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    update?: FlowLikeUpdateWithWhereUniqueWithoutUserInput | FlowLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlowLikeUpdateManyWithWhereWithoutUserInput | FlowLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlowLikeScalarWhereInput | FlowLikeScalarWhereInput[]
  }

  export type FlowSaveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlowSaveCreateWithoutUserInput, FlowSaveUncheckedCreateWithoutUserInput> | FlowSaveCreateWithoutUserInput[] | FlowSaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowSaveCreateOrConnectWithoutUserInput | FlowSaveCreateOrConnectWithoutUserInput[]
    upsert?: FlowSaveUpsertWithWhereUniqueWithoutUserInput | FlowSaveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlowSaveCreateManyUserInputEnvelope
    set?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    disconnect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    delete?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    connect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    update?: FlowSaveUpdateWithWhereUniqueWithoutUserInput | FlowSaveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlowSaveUpdateManyWithWhereWithoutUserInput | FlowSaveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlowSaveScalarWhereInput | FlowSaveScalarWhereInput[]
  }

  export type FlowCommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlowCommentCreateWithoutUserInput, FlowCommentUncheckedCreateWithoutUserInput> | FlowCommentCreateWithoutUserInput[] | FlowCommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutUserInput | FlowCommentCreateOrConnectWithoutUserInput[]
    upsert?: FlowCommentUpsertWithWhereUniqueWithoutUserInput | FlowCommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlowCommentCreateManyUserInputEnvelope
    set?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    disconnect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    delete?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    update?: FlowCommentUpdateWithWhereUniqueWithoutUserInput | FlowCommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlowCommentUpdateManyWithWhereWithoutUserInput | FlowCommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlowCommentScalarWhereInput | FlowCommentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type FlowFallbackUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FlowFallbackCreateWithoutUserInput, FlowFallbackUncheckedCreateWithoutUserInput>
    connectOrCreate?: FlowFallbackCreateOrConnectWithoutUserInput
    upsert?: FlowFallbackUpsertWithoutUserInput
    disconnect?: FlowFallbackWhereInput | boolean
    delete?: FlowFallbackWhereInput | boolean
    connect?: FlowFallbackWhereUniqueInput
    update?: XOR<XOR<FlowFallbackUpdateToOneWithWhereWithoutUserInput, FlowFallbackUpdateWithoutUserInput>, FlowFallbackUncheckedUpdateWithoutUserInput>
  }

  export type UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<UserFlowStateCreateWithoutOwnerInput, UserFlowStateUncheckedCreateWithoutOwnerInput> | UserFlowStateCreateWithoutOwnerInput[] | UserFlowStateUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: UserFlowStateCreateOrConnectWithoutOwnerInput | UserFlowStateCreateOrConnectWithoutOwnerInput[]
    upsert?: UserFlowStateUpsertWithWhereUniqueWithoutOwnerInput | UserFlowStateUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: UserFlowStateCreateManyOwnerInputEnvelope
    set?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    disconnect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    delete?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    connect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    update?: UserFlowStateUpdateWithWhereUniqueWithoutOwnerInput | UserFlowStateUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: UserFlowStateUpdateManyWithWhereWithoutOwnerInput | UserFlowStateUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: UserFlowStateScalarWhereInput | UserFlowStateScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput> | RefreshTokenCreateWithoutUserInput[] | RefreshTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput | RefreshTokenCreateOrConnectWithoutUserInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUserInput | RefreshTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RefreshTokenCreateManyUserInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUserInput | RefreshTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUserInput | RefreshTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput> | PasswordResetTokenCreateWithoutUserInput[] | PasswordResetTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput | PasswordResetTokenCreateOrConnectWithoutUserInput[]
    upsert?: PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput | PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PasswordResetTokenCreateManyUserInputEnvelope
    set?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    disconnect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    delete?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    connect?: PasswordResetTokenWhereUniqueInput | PasswordResetTokenWhereUniqueInput[]
    update?: PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput | PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PasswordResetTokenUpdateManyWithWhereWithoutUserInput | PasswordResetTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokensInput
    upsert?: UserUpsertWithoutRefreshTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokensInput, UserUpdateWithoutRefreshTokensInput>, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokenInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    upsert?: UserUpsertWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokenInput, UserUpdateWithoutPasswordResetTokenInput>, UserUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type UserCreateNestedOneWithoutFoldersInput = {
    create?: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoldersInput
    connect?: UserWhereUniqueInput
  }

  export type FlowCreateNestedManyWithoutFolderInput = {
    create?: XOR<FlowCreateWithoutFolderInput, FlowUncheckedCreateWithoutFolderInput> | FlowCreateWithoutFolderInput[] | FlowUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutFolderInput | FlowCreateOrConnectWithoutFolderInput[]
    createMany?: FlowCreateManyFolderInputEnvelope
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
  }

  export type FlowUncheckedCreateNestedManyWithoutFolderInput = {
    create?: XOR<FlowCreateWithoutFolderInput, FlowUncheckedCreateWithoutFolderInput> | FlowCreateWithoutFolderInput[] | FlowUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutFolderInput | FlowCreateOrConnectWithoutFolderInput[]
    createMany?: FlowCreateManyFolderInputEnvelope
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
  }

  export type EnumPlatformFieldUpdateOperationsInput = {
    set?: $Enums.Platform
  }

  export type UserUpdateOneRequiredWithoutFoldersNestedInput = {
    create?: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    connectOrCreate?: UserCreateOrConnectWithoutFoldersInput
    upsert?: UserUpsertWithoutFoldersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFoldersInput, UserUpdateWithoutFoldersInput>, UserUncheckedUpdateWithoutFoldersInput>
  }

  export type FlowUpdateManyWithoutFolderNestedInput = {
    create?: XOR<FlowCreateWithoutFolderInput, FlowUncheckedCreateWithoutFolderInput> | FlowCreateWithoutFolderInput[] | FlowUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutFolderInput | FlowCreateOrConnectWithoutFolderInput[]
    upsert?: FlowUpsertWithWhereUniqueWithoutFolderInput | FlowUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: FlowCreateManyFolderInputEnvelope
    set?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    disconnect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    delete?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    update?: FlowUpdateWithWhereUniqueWithoutFolderInput | FlowUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: FlowUpdateManyWithWhereWithoutFolderInput | FlowUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: FlowScalarWhereInput | FlowScalarWhereInput[]
  }

  export type FlowUncheckedUpdateManyWithoutFolderNestedInput = {
    create?: XOR<FlowCreateWithoutFolderInput, FlowUncheckedCreateWithoutFolderInput> | FlowCreateWithoutFolderInput[] | FlowUncheckedCreateWithoutFolderInput[]
    connectOrCreate?: FlowCreateOrConnectWithoutFolderInput | FlowCreateOrConnectWithoutFolderInput[]
    upsert?: FlowUpsertWithWhereUniqueWithoutFolderInput | FlowUpsertWithWhereUniqueWithoutFolderInput[]
    createMany?: FlowCreateManyFolderInputEnvelope
    set?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    disconnect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    delete?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    connect?: FlowWhereUniqueInput | FlowWhereUniqueInput[]
    update?: FlowUpdateWithWhereUniqueWithoutFolderInput | FlowUpdateWithWhereUniqueWithoutFolderInput[]
    updateMany?: FlowUpdateManyWithWhereWithoutFolderInput | FlowUpdateManyWithWhereWithoutFolderInput[]
    deleteMany?: FlowScalarWhereInput | FlowScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFlowsInput = {
    create?: XOR<UserCreateWithoutFlowsInput, UserUncheckedCreateWithoutFlowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowsInput
    connect?: UserWhereUniqueInput
  }

  export type FolderCreateNestedOneWithoutFlowsInput = {
    create?: XOR<FolderCreateWithoutFlowsInput, FolderUncheckedCreateWithoutFlowsInput>
    connectOrCreate?: FolderCreateOrConnectWithoutFlowsInput
    connect?: FolderWhereUniqueInput
  }

  export type UserFlowStateCreateNestedManyWithoutFlowInput = {
    create?: XOR<UserFlowStateCreateWithoutFlowInput, UserFlowStateUncheckedCreateWithoutFlowInput> | UserFlowStateCreateWithoutFlowInput[] | UserFlowStateUncheckedCreateWithoutFlowInput[]
    connectOrCreate?: UserFlowStateCreateOrConnectWithoutFlowInput | UserFlowStateCreateOrConnectWithoutFlowInput[]
    createMany?: UserFlowStateCreateManyFlowInputEnvelope
    connect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
  }

  export type FlowShareCreateNestedManyWithoutFlowInput = {
    create?: XOR<FlowShareCreateWithoutFlowInput, FlowShareUncheckedCreateWithoutFlowInput> | FlowShareCreateWithoutFlowInput[] | FlowShareUncheckedCreateWithoutFlowInput[]
    connectOrCreate?: FlowShareCreateOrConnectWithoutFlowInput | FlowShareCreateOrConnectWithoutFlowInput[]
    createMany?: FlowShareCreateManyFlowInputEnvelope
    connect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
  }

  export type UserFlowStateUncheckedCreateNestedManyWithoutFlowInput = {
    create?: XOR<UserFlowStateCreateWithoutFlowInput, UserFlowStateUncheckedCreateWithoutFlowInput> | UserFlowStateCreateWithoutFlowInput[] | UserFlowStateUncheckedCreateWithoutFlowInput[]
    connectOrCreate?: UserFlowStateCreateOrConnectWithoutFlowInput | UserFlowStateCreateOrConnectWithoutFlowInput[]
    createMany?: UserFlowStateCreateManyFlowInputEnvelope
    connect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
  }

  export type FlowShareUncheckedCreateNestedManyWithoutFlowInput = {
    create?: XOR<FlowShareCreateWithoutFlowInput, FlowShareUncheckedCreateWithoutFlowInput> | FlowShareCreateWithoutFlowInput[] | FlowShareUncheckedCreateWithoutFlowInput[]
    connectOrCreate?: FlowShareCreateOrConnectWithoutFlowInput | FlowShareCreateOrConnectWithoutFlowInput[]
    createMany?: FlowShareCreateManyFlowInputEnvelope
    connect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
  }

  export type EnumFlowStatusFieldUpdateOperationsInput = {
    set?: $Enums.FlowStatus
  }

  export type UserUpdateOneRequiredWithoutFlowsNestedInput = {
    create?: XOR<UserCreateWithoutFlowsInput, UserUncheckedCreateWithoutFlowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowsInput
    upsert?: UserUpsertWithoutFlowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlowsInput, UserUpdateWithoutFlowsInput>, UserUncheckedUpdateWithoutFlowsInput>
  }

  export type FolderUpdateOneRequiredWithoutFlowsNestedInput = {
    create?: XOR<FolderCreateWithoutFlowsInput, FolderUncheckedCreateWithoutFlowsInput>
    connectOrCreate?: FolderCreateOrConnectWithoutFlowsInput
    upsert?: FolderUpsertWithoutFlowsInput
    connect?: FolderWhereUniqueInput
    update?: XOR<XOR<FolderUpdateToOneWithWhereWithoutFlowsInput, FolderUpdateWithoutFlowsInput>, FolderUncheckedUpdateWithoutFlowsInput>
  }

  export type UserFlowStateUpdateManyWithoutFlowNestedInput = {
    create?: XOR<UserFlowStateCreateWithoutFlowInput, UserFlowStateUncheckedCreateWithoutFlowInput> | UserFlowStateCreateWithoutFlowInput[] | UserFlowStateUncheckedCreateWithoutFlowInput[]
    connectOrCreate?: UserFlowStateCreateOrConnectWithoutFlowInput | UserFlowStateCreateOrConnectWithoutFlowInput[]
    upsert?: UserFlowStateUpsertWithWhereUniqueWithoutFlowInput | UserFlowStateUpsertWithWhereUniqueWithoutFlowInput[]
    createMany?: UserFlowStateCreateManyFlowInputEnvelope
    set?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    disconnect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    delete?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    connect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    update?: UserFlowStateUpdateWithWhereUniqueWithoutFlowInput | UserFlowStateUpdateWithWhereUniqueWithoutFlowInput[]
    updateMany?: UserFlowStateUpdateManyWithWhereWithoutFlowInput | UserFlowStateUpdateManyWithWhereWithoutFlowInput[]
    deleteMany?: UserFlowStateScalarWhereInput | UserFlowStateScalarWhereInput[]
  }

  export type FlowShareUpdateManyWithoutFlowNestedInput = {
    create?: XOR<FlowShareCreateWithoutFlowInput, FlowShareUncheckedCreateWithoutFlowInput> | FlowShareCreateWithoutFlowInput[] | FlowShareUncheckedCreateWithoutFlowInput[]
    connectOrCreate?: FlowShareCreateOrConnectWithoutFlowInput | FlowShareCreateOrConnectWithoutFlowInput[]
    upsert?: FlowShareUpsertWithWhereUniqueWithoutFlowInput | FlowShareUpsertWithWhereUniqueWithoutFlowInput[]
    createMany?: FlowShareCreateManyFlowInputEnvelope
    set?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    disconnect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    delete?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    connect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    update?: FlowShareUpdateWithWhereUniqueWithoutFlowInput | FlowShareUpdateWithWhereUniqueWithoutFlowInput[]
    updateMany?: FlowShareUpdateManyWithWhereWithoutFlowInput | FlowShareUpdateManyWithWhereWithoutFlowInput[]
    deleteMany?: FlowShareScalarWhereInput | FlowShareScalarWhereInput[]
  }

  export type UserFlowStateUncheckedUpdateManyWithoutFlowNestedInput = {
    create?: XOR<UserFlowStateCreateWithoutFlowInput, UserFlowStateUncheckedCreateWithoutFlowInput> | UserFlowStateCreateWithoutFlowInput[] | UserFlowStateUncheckedCreateWithoutFlowInput[]
    connectOrCreate?: UserFlowStateCreateOrConnectWithoutFlowInput | UserFlowStateCreateOrConnectWithoutFlowInput[]
    upsert?: UserFlowStateUpsertWithWhereUniqueWithoutFlowInput | UserFlowStateUpsertWithWhereUniqueWithoutFlowInput[]
    createMany?: UserFlowStateCreateManyFlowInputEnvelope
    set?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    disconnect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    delete?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    connect?: UserFlowStateWhereUniqueInput | UserFlowStateWhereUniqueInput[]
    update?: UserFlowStateUpdateWithWhereUniqueWithoutFlowInput | UserFlowStateUpdateWithWhereUniqueWithoutFlowInput[]
    updateMany?: UserFlowStateUpdateManyWithWhereWithoutFlowInput | UserFlowStateUpdateManyWithWhereWithoutFlowInput[]
    deleteMany?: UserFlowStateScalarWhereInput | UserFlowStateScalarWhereInput[]
  }

  export type FlowShareUncheckedUpdateManyWithoutFlowNestedInput = {
    create?: XOR<FlowShareCreateWithoutFlowInput, FlowShareUncheckedCreateWithoutFlowInput> | FlowShareCreateWithoutFlowInput[] | FlowShareUncheckedCreateWithoutFlowInput[]
    connectOrCreate?: FlowShareCreateOrConnectWithoutFlowInput | FlowShareCreateOrConnectWithoutFlowInput[]
    upsert?: FlowShareUpsertWithWhereUniqueWithoutFlowInput | FlowShareUpsertWithWhereUniqueWithoutFlowInput[]
    createMany?: FlowShareCreateManyFlowInputEnvelope
    set?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    disconnect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    delete?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    connect?: FlowShareWhereUniqueInput | FlowShareWhereUniqueInput[]
    update?: FlowShareUpdateWithWhereUniqueWithoutFlowInput | FlowShareUpdateWithWhereUniqueWithoutFlowInput[]
    updateMany?: FlowShareUpdateManyWithWhereWithoutFlowInput | FlowShareUpdateManyWithWhereWithoutFlowInput[]
    deleteMany?: FlowShareScalarWhereInput | FlowShareScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserFlowStatesInput = {
    create?: XOR<UserCreateWithoutUserFlowStatesInput, UserUncheckedCreateWithoutUserFlowStatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFlowStatesInput
    connect?: UserWhereUniqueInput
  }

  export type FlowCreateNestedOneWithoutStatesInput = {
    create?: XOR<FlowCreateWithoutStatesInput, FlowUncheckedCreateWithoutStatesInput>
    connectOrCreate?: FlowCreateOrConnectWithoutStatesInput
    connect?: FlowWhereUniqueInput
  }

  export type EnumUserFlowStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserFlowStatus
  }

  export type UserUpdateOneRequiredWithoutUserFlowStatesNestedInput = {
    create?: XOR<UserCreateWithoutUserFlowStatesInput, UserUncheckedCreateWithoutUserFlowStatesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserFlowStatesInput
    upsert?: UserUpsertWithoutUserFlowStatesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserFlowStatesInput, UserUpdateWithoutUserFlowStatesInput>, UserUncheckedUpdateWithoutUserFlowStatesInput>
  }

  export type FlowUpdateOneRequiredWithoutStatesNestedInput = {
    create?: XOR<FlowCreateWithoutStatesInput, FlowUncheckedCreateWithoutStatesInput>
    connectOrCreate?: FlowCreateOrConnectWithoutStatesInput
    upsert?: FlowUpsertWithoutStatesInput
    connect?: FlowWhereUniqueInput
    update?: XOR<XOR<FlowUpdateToOneWithWhereWithoutStatesInput, FlowUpdateWithoutStatesInput>, FlowUncheckedUpdateWithoutStatesInput>
  }

  export type FlowCreateNestedOneWithoutSharesInput = {
    create?: XOR<FlowCreateWithoutSharesInput, FlowUncheckedCreateWithoutSharesInput>
    connectOrCreate?: FlowCreateOrConnectWithoutSharesInput
    connect?: FlowWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlowSharesInput = {
    create?: XOR<UserCreateWithoutFlowSharesInput, UserUncheckedCreateWithoutFlowSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowSharesInput
    connect?: UserWhereUniqueInput
  }

  export type FlowCommentCreateNestedManyWithoutFlowShareInput = {
    create?: XOR<FlowCommentCreateWithoutFlowShareInput, FlowCommentUncheckedCreateWithoutFlowShareInput> | FlowCommentCreateWithoutFlowShareInput[] | FlowCommentUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutFlowShareInput | FlowCommentCreateOrConnectWithoutFlowShareInput[]
    createMany?: FlowCommentCreateManyFlowShareInputEnvelope
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
  }

  export type FlowLikeCreateNestedManyWithoutFlowShareInput = {
    create?: XOR<FlowLikeCreateWithoutFlowShareInput, FlowLikeUncheckedCreateWithoutFlowShareInput> | FlowLikeCreateWithoutFlowShareInput[] | FlowLikeUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowLikeCreateOrConnectWithoutFlowShareInput | FlowLikeCreateOrConnectWithoutFlowShareInput[]
    createMany?: FlowLikeCreateManyFlowShareInputEnvelope
    connect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
  }

  export type FlowSaveCreateNestedManyWithoutFlowShareInput = {
    create?: XOR<FlowSaveCreateWithoutFlowShareInput, FlowSaveUncheckedCreateWithoutFlowShareInput> | FlowSaveCreateWithoutFlowShareInput[] | FlowSaveUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowSaveCreateOrConnectWithoutFlowShareInput | FlowSaveCreateOrConnectWithoutFlowShareInput[]
    createMany?: FlowSaveCreateManyFlowShareInputEnvelope
    connect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
  }

  export type FlowCommentUncheckedCreateNestedManyWithoutFlowShareInput = {
    create?: XOR<FlowCommentCreateWithoutFlowShareInput, FlowCommentUncheckedCreateWithoutFlowShareInput> | FlowCommentCreateWithoutFlowShareInput[] | FlowCommentUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutFlowShareInput | FlowCommentCreateOrConnectWithoutFlowShareInput[]
    createMany?: FlowCommentCreateManyFlowShareInputEnvelope
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
  }

  export type FlowLikeUncheckedCreateNestedManyWithoutFlowShareInput = {
    create?: XOR<FlowLikeCreateWithoutFlowShareInput, FlowLikeUncheckedCreateWithoutFlowShareInput> | FlowLikeCreateWithoutFlowShareInput[] | FlowLikeUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowLikeCreateOrConnectWithoutFlowShareInput | FlowLikeCreateOrConnectWithoutFlowShareInput[]
    createMany?: FlowLikeCreateManyFlowShareInputEnvelope
    connect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
  }

  export type FlowSaveUncheckedCreateNestedManyWithoutFlowShareInput = {
    create?: XOR<FlowSaveCreateWithoutFlowShareInput, FlowSaveUncheckedCreateWithoutFlowShareInput> | FlowSaveCreateWithoutFlowShareInput[] | FlowSaveUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowSaveCreateOrConnectWithoutFlowShareInput | FlowSaveCreateOrConnectWithoutFlowShareInput[]
    createMany?: FlowSaveCreateManyFlowShareInputEnvelope
    connect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
  }

  export type EnumFlowShareStatusFieldUpdateOperationsInput = {
    set?: $Enums.FlowShareStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlowUpdateOneRequiredWithoutSharesNestedInput = {
    create?: XOR<FlowCreateWithoutSharesInput, FlowUncheckedCreateWithoutSharesInput>
    connectOrCreate?: FlowCreateOrConnectWithoutSharesInput
    upsert?: FlowUpsertWithoutSharesInput
    connect?: FlowWhereUniqueInput
    update?: XOR<XOR<FlowUpdateToOneWithWhereWithoutSharesInput, FlowUpdateWithoutSharesInput>, FlowUncheckedUpdateWithoutSharesInput>
  }

  export type UserUpdateOneRequiredWithoutFlowSharesNestedInput = {
    create?: XOR<UserCreateWithoutFlowSharesInput, UserUncheckedCreateWithoutFlowSharesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowSharesInput
    upsert?: UserUpsertWithoutFlowSharesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlowSharesInput, UserUpdateWithoutFlowSharesInput>, UserUncheckedUpdateWithoutFlowSharesInput>
  }

  export type FlowCommentUpdateManyWithoutFlowShareNestedInput = {
    create?: XOR<FlowCommentCreateWithoutFlowShareInput, FlowCommentUncheckedCreateWithoutFlowShareInput> | FlowCommentCreateWithoutFlowShareInput[] | FlowCommentUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutFlowShareInput | FlowCommentCreateOrConnectWithoutFlowShareInput[]
    upsert?: FlowCommentUpsertWithWhereUniqueWithoutFlowShareInput | FlowCommentUpsertWithWhereUniqueWithoutFlowShareInput[]
    createMany?: FlowCommentCreateManyFlowShareInputEnvelope
    set?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    disconnect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    delete?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    update?: FlowCommentUpdateWithWhereUniqueWithoutFlowShareInput | FlowCommentUpdateWithWhereUniqueWithoutFlowShareInput[]
    updateMany?: FlowCommentUpdateManyWithWhereWithoutFlowShareInput | FlowCommentUpdateManyWithWhereWithoutFlowShareInput[]
    deleteMany?: FlowCommentScalarWhereInput | FlowCommentScalarWhereInput[]
  }

  export type FlowLikeUpdateManyWithoutFlowShareNestedInput = {
    create?: XOR<FlowLikeCreateWithoutFlowShareInput, FlowLikeUncheckedCreateWithoutFlowShareInput> | FlowLikeCreateWithoutFlowShareInput[] | FlowLikeUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowLikeCreateOrConnectWithoutFlowShareInput | FlowLikeCreateOrConnectWithoutFlowShareInput[]
    upsert?: FlowLikeUpsertWithWhereUniqueWithoutFlowShareInput | FlowLikeUpsertWithWhereUniqueWithoutFlowShareInput[]
    createMany?: FlowLikeCreateManyFlowShareInputEnvelope
    set?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    disconnect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    delete?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    connect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    update?: FlowLikeUpdateWithWhereUniqueWithoutFlowShareInput | FlowLikeUpdateWithWhereUniqueWithoutFlowShareInput[]
    updateMany?: FlowLikeUpdateManyWithWhereWithoutFlowShareInput | FlowLikeUpdateManyWithWhereWithoutFlowShareInput[]
    deleteMany?: FlowLikeScalarWhereInput | FlowLikeScalarWhereInput[]
  }

  export type FlowSaveUpdateManyWithoutFlowShareNestedInput = {
    create?: XOR<FlowSaveCreateWithoutFlowShareInput, FlowSaveUncheckedCreateWithoutFlowShareInput> | FlowSaveCreateWithoutFlowShareInput[] | FlowSaveUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowSaveCreateOrConnectWithoutFlowShareInput | FlowSaveCreateOrConnectWithoutFlowShareInput[]
    upsert?: FlowSaveUpsertWithWhereUniqueWithoutFlowShareInput | FlowSaveUpsertWithWhereUniqueWithoutFlowShareInput[]
    createMany?: FlowSaveCreateManyFlowShareInputEnvelope
    set?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    disconnect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    delete?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    connect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    update?: FlowSaveUpdateWithWhereUniqueWithoutFlowShareInput | FlowSaveUpdateWithWhereUniqueWithoutFlowShareInput[]
    updateMany?: FlowSaveUpdateManyWithWhereWithoutFlowShareInput | FlowSaveUpdateManyWithWhereWithoutFlowShareInput[]
    deleteMany?: FlowSaveScalarWhereInput | FlowSaveScalarWhereInput[]
  }

  export type FlowCommentUncheckedUpdateManyWithoutFlowShareNestedInput = {
    create?: XOR<FlowCommentCreateWithoutFlowShareInput, FlowCommentUncheckedCreateWithoutFlowShareInput> | FlowCommentCreateWithoutFlowShareInput[] | FlowCommentUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutFlowShareInput | FlowCommentCreateOrConnectWithoutFlowShareInput[]
    upsert?: FlowCommentUpsertWithWhereUniqueWithoutFlowShareInput | FlowCommentUpsertWithWhereUniqueWithoutFlowShareInput[]
    createMany?: FlowCommentCreateManyFlowShareInputEnvelope
    set?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    disconnect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    delete?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    update?: FlowCommentUpdateWithWhereUniqueWithoutFlowShareInput | FlowCommentUpdateWithWhereUniqueWithoutFlowShareInput[]
    updateMany?: FlowCommentUpdateManyWithWhereWithoutFlowShareInput | FlowCommentUpdateManyWithWhereWithoutFlowShareInput[]
    deleteMany?: FlowCommentScalarWhereInput | FlowCommentScalarWhereInput[]
  }

  export type FlowLikeUncheckedUpdateManyWithoutFlowShareNestedInput = {
    create?: XOR<FlowLikeCreateWithoutFlowShareInput, FlowLikeUncheckedCreateWithoutFlowShareInput> | FlowLikeCreateWithoutFlowShareInput[] | FlowLikeUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowLikeCreateOrConnectWithoutFlowShareInput | FlowLikeCreateOrConnectWithoutFlowShareInput[]
    upsert?: FlowLikeUpsertWithWhereUniqueWithoutFlowShareInput | FlowLikeUpsertWithWhereUniqueWithoutFlowShareInput[]
    createMany?: FlowLikeCreateManyFlowShareInputEnvelope
    set?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    disconnect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    delete?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    connect?: FlowLikeWhereUniqueInput | FlowLikeWhereUniqueInput[]
    update?: FlowLikeUpdateWithWhereUniqueWithoutFlowShareInput | FlowLikeUpdateWithWhereUniqueWithoutFlowShareInput[]
    updateMany?: FlowLikeUpdateManyWithWhereWithoutFlowShareInput | FlowLikeUpdateManyWithWhereWithoutFlowShareInput[]
    deleteMany?: FlowLikeScalarWhereInput | FlowLikeScalarWhereInput[]
  }

  export type FlowSaveUncheckedUpdateManyWithoutFlowShareNestedInput = {
    create?: XOR<FlowSaveCreateWithoutFlowShareInput, FlowSaveUncheckedCreateWithoutFlowShareInput> | FlowSaveCreateWithoutFlowShareInput[] | FlowSaveUncheckedCreateWithoutFlowShareInput[]
    connectOrCreate?: FlowSaveCreateOrConnectWithoutFlowShareInput | FlowSaveCreateOrConnectWithoutFlowShareInput[]
    upsert?: FlowSaveUpsertWithWhereUniqueWithoutFlowShareInput | FlowSaveUpsertWithWhereUniqueWithoutFlowShareInput[]
    createMany?: FlowSaveCreateManyFlowShareInputEnvelope
    set?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    disconnect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    delete?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    connect?: FlowSaveWhereUniqueInput | FlowSaveWhereUniqueInput[]
    update?: FlowSaveUpdateWithWhereUniqueWithoutFlowShareInput | FlowSaveUpdateWithWhereUniqueWithoutFlowShareInput[]
    updateMany?: FlowSaveUpdateManyWithWhereWithoutFlowShareInput | FlowSaveUpdateManyWithWhereWithoutFlowShareInput[]
    deleteMany?: FlowSaveScalarWhereInput | FlowSaveScalarWhereInput[]
  }

  export type FlowShareCreateNestedOneWithoutCommentsInput = {
    create?: XOR<FlowShareCreateWithoutCommentsInput, FlowShareUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: FlowShareCreateOrConnectWithoutCommentsInput
    connect?: FlowShareWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlowCommentsInput = {
    create?: XOR<UserCreateWithoutFlowCommentsInput, UserUncheckedCreateWithoutFlowCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type FlowCommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<FlowCommentCreateWithoutRepliesInput, FlowCommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: FlowCommentCreateOrConnectWithoutRepliesInput
    connect?: FlowCommentWhereUniqueInput
  }

  export type FlowCommentCreateNestedManyWithoutParentInput = {
    create?: XOR<FlowCommentCreateWithoutParentInput, FlowCommentUncheckedCreateWithoutParentInput> | FlowCommentCreateWithoutParentInput[] | FlowCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutParentInput | FlowCommentCreateOrConnectWithoutParentInput[]
    createMany?: FlowCommentCreateManyParentInputEnvelope
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
  }

  export type FlowCommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<FlowCommentCreateWithoutParentInput, FlowCommentUncheckedCreateWithoutParentInput> | FlowCommentCreateWithoutParentInput[] | FlowCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutParentInput | FlowCommentCreateOrConnectWithoutParentInput[]
    createMany?: FlowCommentCreateManyParentInputEnvelope
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
  }

  export type FlowShareUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<FlowShareCreateWithoutCommentsInput, FlowShareUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: FlowShareCreateOrConnectWithoutCommentsInput
    upsert?: FlowShareUpsertWithoutCommentsInput
    connect?: FlowShareWhereUniqueInput
    update?: XOR<XOR<FlowShareUpdateToOneWithWhereWithoutCommentsInput, FlowShareUpdateWithoutCommentsInput>, FlowShareUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutFlowCommentsNestedInput = {
    create?: XOR<UserCreateWithoutFlowCommentsInput, UserUncheckedCreateWithoutFlowCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowCommentsInput
    upsert?: UserUpsertWithoutFlowCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlowCommentsInput, UserUpdateWithoutFlowCommentsInput>, UserUncheckedUpdateWithoutFlowCommentsInput>
  }

  export type FlowCommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<FlowCommentCreateWithoutRepliesInput, FlowCommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: FlowCommentCreateOrConnectWithoutRepliesInput
    upsert?: FlowCommentUpsertWithoutRepliesInput
    disconnect?: FlowCommentWhereInput | boolean
    delete?: FlowCommentWhereInput | boolean
    connect?: FlowCommentWhereUniqueInput
    update?: XOR<XOR<FlowCommentUpdateToOneWithWhereWithoutRepliesInput, FlowCommentUpdateWithoutRepliesInput>, FlowCommentUncheckedUpdateWithoutRepliesInput>
  }

  export type FlowCommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<FlowCommentCreateWithoutParentInput, FlowCommentUncheckedCreateWithoutParentInput> | FlowCommentCreateWithoutParentInput[] | FlowCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutParentInput | FlowCommentCreateOrConnectWithoutParentInput[]
    upsert?: FlowCommentUpsertWithWhereUniqueWithoutParentInput | FlowCommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: FlowCommentCreateManyParentInputEnvelope
    set?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    disconnect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    delete?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    update?: FlowCommentUpdateWithWhereUniqueWithoutParentInput | FlowCommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: FlowCommentUpdateManyWithWhereWithoutParentInput | FlowCommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: FlowCommentScalarWhereInput | FlowCommentScalarWhereInput[]
  }

  export type FlowCommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<FlowCommentCreateWithoutParentInput, FlowCommentUncheckedCreateWithoutParentInput> | FlowCommentCreateWithoutParentInput[] | FlowCommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: FlowCommentCreateOrConnectWithoutParentInput | FlowCommentCreateOrConnectWithoutParentInput[]
    upsert?: FlowCommentUpsertWithWhereUniqueWithoutParentInput | FlowCommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: FlowCommentCreateManyParentInputEnvelope
    set?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    disconnect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    delete?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    connect?: FlowCommentWhereUniqueInput | FlowCommentWhereUniqueInput[]
    update?: FlowCommentUpdateWithWhereUniqueWithoutParentInput | FlowCommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: FlowCommentUpdateManyWithWhereWithoutParentInput | FlowCommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: FlowCommentScalarWhereInput | FlowCommentScalarWhereInput[]
  }

  export type FlowShareCreateNestedOneWithoutLikesInput = {
    create?: XOR<FlowShareCreateWithoutLikesInput, FlowShareUncheckedCreateWithoutLikesInput>
    connectOrCreate?: FlowShareCreateOrConnectWithoutLikesInput
    connect?: FlowShareWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlowLikesInput = {
    create?: XOR<UserCreateWithoutFlowLikesInput, UserUncheckedCreateWithoutFlowLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowLikesInput
    connect?: UserWhereUniqueInput
  }

  export type FlowShareUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<FlowShareCreateWithoutLikesInput, FlowShareUncheckedCreateWithoutLikesInput>
    connectOrCreate?: FlowShareCreateOrConnectWithoutLikesInput
    upsert?: FlowShareUpsertWithoutLikesInput
    connect?: FlowShareWhereUniqueInput
    update?: XOR<XOR<FlowShareUpdateToOneWithWhereWithoutLikesInput, FlowShareUpdateWithoutLikesInput>, FlowShareUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutFlowLikesNestedInput = {
    create?: XOR<UserCreateWithoutFlowLikesInput, UserUncheckedCreateWithoutFlowLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowLikesInput
    upsert?: UserUpsertWithoutFlowLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlowLikesInput, UserUpdateWithoutFlowLikesInput>, UserUncheckedUpdateWithoutFlowLikesInput>
  }

  export type FlowShareCreateNestedOneWithoutSavesInput = {
    create?: XOR<FlowShareCreateWithoutSavesInput, FlowShareUncheckedCreateWithoutSavesInput>
    connectOrCreate?: FlowShareCreateOrConnectWithoutSavesInput
    connect?: FlowShareWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFlowSaveInput = {
    create?: XOR<UserCreateWithoutFlowSaveInput, UserUncheckedCreateWithoutFlowSaveInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowSaveInput
    connect?: UserWhereUniqueInput
  }

  export type FlowShareUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<FlowShareCreateWithoutSavesInput, FlowShareUncheckedCreateWithoutSavesInput>
    connectOrCreate?: FlowShareCreateOrConnectWithoutSavesInput
    upsert?: FlowShareUpsertWithoutSavesInput
    connect?: FlowShareWhereUniqueInput
    update?: XOR<XOR<FlowShareUpdateToOneWithWhereWithoutSavesInput, FlowShareUpdateWithoutSavesInput>, FlowShareUncheckedUpdateWithoutSavesInput>
  }

  export type UserUpdateOneRequiredWithoutFlowSaveNestedInput = {
    create?: XOR<UserCreateWithoutFlowSaveInput, UserUncheckedCreateWithoutFlowSaveInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlowSaveInput
    upsert?: UserUpsertWithoutFlowSaveInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlowSaveInput, UserUpdateWithoutFlowSaveInput>, UserUncheckedUpdateWithoutFlowSaveInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutFallbackInput = {
    create?: XOR<UserCreateWithoutFallbackInput, UserUncheckedCreateWithoutFallbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutFallbackInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTimeoutUnitFieldUpdateOperationsInput = {
    set?: $Enums.TimeoutUnit
  }

  export type UserUpdateOneRequiredWithoutFallbackNestedInput = {
    create?: XOR<UserCreateWithoutFallbackInput, UserUncheckedCreateWithoutFallbackInput>
    connectOrCreate?: UserCreateOrConnectWithoutFallbackInput
    upsert?: UserUpsertWithoutFallbackInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFallbackInput, UserUpdateWithoutFallbackInput>, UserUncheckedUpdateWithoutFallbackInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumPlatformFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformFilter<$PrismaModel> | $Enums.Platform
  }

  export type NestedEnumPlatformWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Platform | EnumPlatformFieldRefInput<$PrismaModel>
    in?: $Enums.Platform[]
    notIn?: $Enums.Platform[]
    not?: NestedEnumPlatformWithAggregatesFilter<$PrismaModel> | $Enums.Platform
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlatformFilter<$PrismaModel>
    _max?: NestedEnumPlatformFilter<$PrismaModel>
  }

  export type NestedEnumFlowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowStatus | EnumFlowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlowStatus[]
    notIn?: $Enums.FlowStatus[]
    not?: NestedEnumFlowStatusFilter<$PrismaModel> | $Enums.FlowStatus
  }

  export type NestedEnumFlowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowStatus | EnumFlowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlowStatus[]
    notIn?: $Enums.FlowStatus[]
    not?: NestedEnumFlowStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlowStatusFilter<$PrismaModel>
    _max?: NestedEnumFlowStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumUserFlowStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserFlowStatus | EnumUserFlowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserFlowStatus[]
    notIn?: $Enums.UserFlowStatus[]
    not?: NestedEnumUserFlowStatusFilter<$PrismaModel> | $Enums.UserFlowStatus
  }

  export type NestedEnumUserFlowStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserFlowStatus | EnumUserFlowStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserFlowStatus[]
    notIn?: $Enums.UserFlowStatus[]
    not?: NestedEnumUserFlowStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserFlowStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserFlowStatusFilter<$PrismaModel>
    _max?: NestedEnumUserFlowStatusFilter<$PrismaModel>
  }

  export type NestedEnumFlowShareStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowShareStatus | EnumFlowShareStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlowShareStatus[]
    notIn?: $Enums.FlowShareStatus[]
    not?: NestedEnumFlowShareStatusFilter<$PrismaModel> | $Enums.FlowShareStatus
  }

  export type NestedEnumFlowShareStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FlowShareStatus | EnumFlowShareStatusFieldRefInput<$PrismaModel>
    in?: $Enums.FlowShareStatus[]
    notIn?: $Enums.FlowShareStatus[]
    not?: NestedEnumFlowShareStatusWithAggregatesFilter<$PrismaModel> | $Enums.FlowShareStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFlowShareStatusFilter<$PrismaModel>
    _max?: NestedEnumFlowShareStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[]
    notIn?: $Enums.NotificationType[]
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumTimeoutUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeoutUnit | EnumTimeoutUnitFieldRefInput<$PrismaModel>
    in?: $Enums.TimeoutUnit[]
    notIn?: $Enums.TimeoutUnit[]
    not?: NestedEnumTimeoutUnitFilter<$PrismaModel> | $Enums.TimeoutUnit
  }

  export type NestedEnumTimeoutUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TimeoutUnit | EnumTimeoutUnitFieldRefInput<$PrismaModel>
    in?: $Enums.TimeoutUnit[]
    notIn?: $Enums.TimeoutUnit[]
    not?: NestedEnumTimeoutUnitWithAggregatesFilter<$PrismaModel> | $Enums.TimeoutUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTimeoutUnitFilter<$PrismaModel>
    _max?: NestedEnumTimeoutUnitFilter<$PrismaModel>
  }

  export type FolderCreateWithoutUserInput = {
    id?: string
    name: string
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    flows?: FlowCreateNestedManyWithoutFolderInput
  }

  export type FolderUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    flows?: FlowUncheckedCreateNestedManyWithoutFolderInput
  }

  export type FolderCreateOrConnectWithoutUserInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
  }

  export type FolderCreateManyUserInputEnvelope = {
    data: FolderCreateManyUserInput | FolderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlowCreateWithoutUserInput = {
    id?: string
    pageId?: string | null
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    folder: FolderCreateNestedOneWithoutFlowsInput
    states?: UserFlowStateCreateNestedManyWithoutFlowInput
    shares?: FlowShareCreateNestedManyWithoutFlowInput
  }

  export type FlowUncheckedCreateWithoutUserInput = {
    id?: string
    pageId?: string | null
    folderId: string
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: UserFlowStateUncheckedCreateNestedManyWithoutFlowInput
    shares?: FlowShareUncheckedCreateNestedManyWithoutFlowInput
  }

  export type FlowCreateOrConnectWithoutUserInput = {
    where: FlowWhereUniqueInput
    create: XOR<FlowCreateWithoutUserInput, FlowUncheckedCreateWithoutUserInput>
  }

  export type FlowCreateManyUserInputEnvelope = {
    data: FlowCreateManyUserInput | FlowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlowShareCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    flow: FlowCreateNestedOneWithoutSharesInput
    comments?: FlowCommentCreateNestedManyWithoutFlowShareInput
    likes?: FlowLikeCreateNestedManyWithoutFlowShareInput
    saves?: FlowSaveCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareUncheckedCreateWithoutUserInput = {
    id?: string
    flowId: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: FlowCommentUncheckedCreateNestedManyWithoutFlowShareInput
    likes?: FlowLikeUncheckedCreateNestedManyWithoutFlowShareInput
    saves?: FlowSaveUncheckedCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareCreateOrConnectWithoutUserInput = {
    where: FlowShareWhereUniqueInput
    create: XOR<FlowShareCreateWithoutUserInput, FlowShareUncheckedCreateWithoutUserInput>
  }

  export type FlowShareCreateManyUserInputEnvelope = {
    data: FlowShareCreateManyUserInput | FlowShareCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlowLikeCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    flowShare: FlowShareCreateNestedOneWithoutLikesInput
  }

  export type FlowLikeUncheckedCreateWithoutUserInput = {
    id?: string
    flowShareId: string
    createdAt?: Date | string
  }

  export type FlowLikeCreateOrConnectWithoutUserInput = {
    where: FlowLikeWhereUniqueInput
    create: XOR<FlowLikeCreateWithoutUserInput, FlowLikeUncheckedCreateWithoutUserInput>
  }

  export type FlowLikeCreateManyUserInputEnvelope = {
    data: FlowLikeCreateManyUserInput | FlowLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlowSaveCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    flowShare: FlowShareCreateNestedOneWithoutSavesInput
  }

  export type FlowSaveUncheckedCreateWithoutUserInput = {
    id?: string
    flowShareId: string
    createdAt?: Date | string
  }

  export type FlowSaveCreateOrConnectWithoutUserInput = {
    where: FlowSaveWhereUniqueInput
    create: XOR<FlowSaveCreateWithoutUserInput, FlowSaveUncheckedCreateWithoutUserInput>
  }

  export type FlowSaveCreateManyUserInputEnvelope = {
    data: FlowSaveCreateManyUserInput | FlowSaveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlowCommentCreateWithoutUserInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flowShare: FlowShareCreateNestedOneWithoutCommentsInput
    parent?: FlowCommentCreateNestedOneWithoutRepliesInput
    replies?: FlowCommentCreateNestedManyWithoutParentInput
  }

  export type FlowCommentUncheckedCreateWithoutUserInput = {
    id?: string
    flowShareId: string
    comment: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: FlowCommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type FlowCommentCreateOrConnectWithoutUserInput = {
    where: FlowCommentWhereUniqueInput
    create: XOR<FlowCommentCreateWithoutUserInput, FlowCommentUncheckedCreateWithoutUserInput>
  }

  export type FlowCommentCreateManyUserInputEnvelope = {
    data: FlowCommentCreateManyUserInput | FlowCommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    avatar?: string | null
    relatedId: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    avatar?: string | null
    relatedId: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FlowFallbackCreateWithoutUserInput = {
    id?: string
    timeoutDuration: number
    timeoutUnit: $Enums.TimeoutUnit
    fallbackMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowFallbackUncheckedCreateWithoutUserInput = {
    id?: string
    timeoutDuration: number
    timeoutUnit: $Enums.TimeoutUnit
    fallbackMessage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowFallbackCreateOrConnectWithoutUserInput = {
    where: FlowFallbackWhereUniqueInput
    create: XOR<FlowFallbackCreateWithoutUserInput, FlowFallbackUncheckedCreateWithoutUserInput>
  }

  export type UserFlowStateCreateWithoutOwnerInput = {
    id?: string
    platformUserId: string
    pageId: string
    currentStep: string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.UserFlowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    flow: FlowCreateNestedOneWithoutStatesInput
  }

  export type UserFlowStateUncheckedCreateWithoutOwnerInput = {
    id?: string
    platformUserId: string
    flowId: string
    pageId: string
    currentStep: string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.UserFlowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFlowStateCreateOrConnectWithoutOwnerInput = {
    where: UserFlowStateWhereUniqueInput
    create: XOR<UserFlowStateCreateWithoutOwnerInput, UserFlowStateUncheckedCreateWithoutOwnerInput>
  }

  export type UserFlowStateCreateManyOwnerInputEnvelope = {
    data: UserFlowStateCreateManyOwnerInput | UserFlowStateCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateManyUserInputEnvelope = {
    data: RefreshTokenCreateManyUserInput | RefreshTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateManyUserInputEnvelope = {
    data: PasswordResetTokenCreateManyUserInput | PasswordResetTokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FolderUpsertWithWhereUniqueWithoutUserInput = {
    where: FolderWhereUniqueInput
    update: XOR<FolderUpdateWithoutUserInput, FolderUncheckedUpdateWithoutUserInput>
    create: XOR<FolderCreateWithoutUserInput, FolderUncheckedCreateWithoutUserInput>
  }

  export type FolderUpdateWithWhereUniqueWithoutUserInput = {
    where: FolderWhereUniqueInput
    data: XOR<FolderUpdateWithoutUserInput, FolderUncheckedUpdateWithoutUserInput>
  }

  export type FolderUpdateManyWithWhereWithoutUserInput = {
    where: FolderScalarWhereInput
    data: XOR<FolderUpdateManyMutationInput, FolderUncheckedUpdateManyWithoutUserInput>
  }

  export type FolderScalarWhereInput = {
    AND?: FolderScalarWhereInput | FolderScalarWhereInput[]
    OR?: FolderScalarWhereInput[]
    NOT?: FolderScalarWhereInput | FolderScalarWhereInput[]
    id?: StringFilter<"Folder"> | string
    userId?: StringFilter<"Folder"> | string
    name?: StringFilter<"Folder"> | string
    platform?: EnumPlatformFilter<"Folder"> | $Enums.Platform
    createdAt?: DateTimeFilter<"Folder"> | Date | string
    updatedAt?: DateTimeFilter<"Folder"> | Date | string
  }

  export type FlowUpsertWithWhereUniqueWithoutUserInput = {
    where: FlowWhereUniqueInput
    update: XOR<FlowUpdateWithoutUserInput, FlowUncheckedUpdateWithoutUserInput>
    create: XOR<FlowCreateWithoutUserInput, FlowUncheckedCreateWithoutUserInput>
  }

  export type FlowUpdateWithWhereUniqueWithoutUserInput = {
    where: FlowWhereUniqueInput
    data: XOR<FlowUpdateWithoutUserInput, FlowUncheckedUpdateWithoutUserInput>
  }

  export type FlowUpdateManyWithWhereWithoutUserInput = {
    where: FlowScalarWhereInput
    data: XOR<FlowUpdateManyMutationInput, FlowUncheckedUpdateManyWithoutUserInput>
  }

  export type FlowScalarWhereInput = {
    AND?: FlowScalarWhereInput | FlowScalarWhereInput[]
    OR?: FlowScalarWhereInput[]
    NOT?: FlowScalarWhereInput | FlowScalarWhereInput[]
    id?: StringFilter<"Flow"> | string
    userId?: StringFilter<"Flow"> | string
    pageId?: StringNullableFilter<"Flow"> | string | null
    folderId?: StringFilter<"Flow"> | string
    pageAccessToken?: StringNullableFilter<"Flow"> | string | null
    name?: StringFilter<"Flow"> | string
    description?: StringNullableFilter<"Flow"> | string | null
    status?: EnumFlowStatusFilter<"Flow"> | $Enums.FlowStatus
    logicJson?: JsonNullableFilter<"Flow">
    layoutJson?: JsonNullableFilter<"Flow">
    platform?: EnumPlatformFilter<"Flow"> | $Enums.Platform
    timeoutDuration?: StringNullableFilter<"Flow"> | string | null
    startNodeId?: StringNullableFilter<"Flow"> | string | null
    timeoutJson?: JsonNullableFilter<"Flow">
    createdAt?: DateTimeFilter<"Flow"> | Date | string
    updatedAt?: DateTimeFilter<"Flow"> | Date | string
  }

  export type FlowShareUpsertWithWhereUniqueWithoutUserInput = {
    where: FlowShareWhereUniqueInput
    update: XOR<FlowShareUpdateWithoutUserInput, FlowShareUncheckedUpdateWithoutUserInput>
    create: XOR<FlowShareCreateWithoutUserInput, FlowShareUncheckedCreateWithoutUserInput>
  }

  export type FlowShareUpdateWithWhereUniqueWithoutUserInput = {
    where: FlowShareWhereUniqueInput
    data: XOR<FlowShareUpdateWithoutUserInput, FlowShareUncheckedUpdateWithoutUserInput>
  }

  export type FlowShareUpdateManyWithWhereWithoutUserInput = {
    where: FlowShareScalarWhereInput
    data: XOR<FlowShareUpdateManyMutationInput, FlowShareUncheckedUpdateManyWithoutUserInput>
  }

  export type FlowShareScalarWhereInput = {
    AND?: FlowShareScalarWhereInput | FlowShareScalarWhereInput[]
    OR?: FlowShareScalarWhereInput[]
    NOT?: FlowShareScalarWhereInput | FlowShareScalarWhereInput[]
    id?: StringFilter<"FlowShare"> | string
    flowId?: StringFilter<"FlowShare"> | string
    userId?: StringFilter<"FlowShare"> | string
    name?: StringFilter<"FlowShare"> | string
    description?: StringNullableFilter<"FlowShare"> | string | null
    thumbnail?: StringNullableFilter<"FlowShare"> | string | null
    status?: EnumFlowShareStatusFilter<"FlowShare"> | $Enums.FlowShareStatus
    downloadCount?: IntFilter<"FlowShare"> | number
    createdAt?: DateTimeFilter<"FlowShare"> | Date | string
    updatedAt?: DateTimeFilter<"FlowShare"> | Date | string
  }

  export type FlowLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: FlowLikeWhereUniqueInput
    update: XOR<FlowLikeUpdateWithoutUserInput, FlowLikeUncheckedUpdateWithoutUserInput>
    create: XOR<FlowLikeCreateWithoutUserInput, FlowLikeUncheckedCreateWithoutUserInput>
  }

  export type FlowLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: FlowLikeWhereUniqueInput
    data: XOR<FlowLikeUpdateWithoutUserInput, FlowLikeUncheckedUpdateWithoutUserInput>
  }

  export type FlowLikeUpdateManyWithWhereWithoutUserInput = {
    where: FlowLikeScalarWhereInput
    data: XOR<FlowLikeUpdateManyMutationInput, FlowLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type FlowLikeScalarWhereInput = {
    AND?: FlowLikeScalarWhereInput | FlowLikeScalarWhereInput[]
    OR?: FlowLikeScalarWhereInput[]
    NOT?: FlowLikeScalarWhereInput | FlowLikeScalarWhereInput[]
    id?: StringFilter<"FlowLike"> | string
    flowShareId?: StringFilter<"FlowLike"> | string
    userId?: StringFilter<"FlowLike"> | string
    createdAt?: DateTimeFilter<"FlowLike"> | Date | string
  }

  export type FlowSaveUpsertWithWhereUniqueWithoutUserInput = {
    where: FlowSaveWhereUniqueInput
    update: XOR<FlowSaveUpdateWithoutUserInput, FlowSaveUncheckedUpdateWithoutUserInput>
    create: XOR<FlowSaveCreateWithoutUserInput, FlowSaveUncheckedCreateWithoutUserInput>
  }

  export type FlowSaveUpdateWithWhereUniqueWithoutUserInput = {
    where: FlowSaveWhereUniqueInput
    data: XOR<FlowSaveUpdateWithoutUserInput, FlowSaveUncheckedUpdateWithoutUserInput>
  }

  export type FlowSaveUpdateManyWithWhereWithoutUserInput = {
    where: FlowSaveScalarWhereInput
    data: XOR<FlowSaveUpdateManyMutationInput, FlowSaveUncheckedUpdateManyWithoutUserInput>
  }

  export type FlowSaveScalarWhereInput = {
    AND?: FlowSaveScalarWhereInput | FlowSaveScalarWhereInput[]
    OR?: FlowSaveScalarWhereInput[]
    NOT?: FlowSaveScalarWhereInput | FlowSaveScalarWhereInput[]
    id?: StringFilter<"FlowSave"> | string
    flowShareId?: StringFilter<"FlowSave"> | string
    userId?: StringFilter<"FlowSave"> | string
    createdAt?: DateTimeFilter<"FlowSave"> | Date | string
  }

  export type FlowCommentUpsertWithWhereUniqueWithoutUserInput = {
    where: FlowCommentWhereUniqueInput
    update: XOR<FlowCommentUpdateWithoutUserInput, FlowCommentUncheckedUpdateWithoutUserInput>
    create: XOR<FlowCommentCreateWithoutUserInput, FlowCommentUncheckedCreateWithoutUserInput>
  }

  export type FlowCommentUpdateWithWhereUniqueWithoutUserInput = {
    where: FlowCommentWhereUniqueInput
    data: XOR<FlowCommentUpdateWithoutUserInput, FlowCommentUncheckedUpdateWithoutUserInput>
  }

  export type FlowCommentUpdateManyWithWhereWithoutUserInput = {
    where: FlowCommentScalarWhereInput
    data: XOR<FlowCommentUpdateManyMutationInput, FlowCommentUncheckedUpdateManyWithoutUserInput>
  }

  export type FlowCommentScalarWhereInput = {
    AND?: FlowCommentScalarWhereInput | FlowCommentScalarWhereInput[]
    OR?: FlowCommentScalarWhereInput[]
    NOT?: FlowCommentScalarWhereInput | FlowCommentScalarWhereInput[]
    id?: StringFilter<"FlowComment"> | string
    flowShareId?: StringFilter<"FlowComment"> | string
    userId?: StringFilter<"FlowComment"> | string
    comment?: StringFilter<"FlowComment"> | string
    parentId?: StringNullableFilter<"FlowComment"> | string | null
    createdAt?: DateTimeFilter<"FlowComment"> | Date | string
    updatedAt?: DateTimeFilter<"FlowComment"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: EnumNotificationTypeFilter<"Notification"> | $Enums.NotificationType
    message?: StringFilter<"Notification"> | string
    avatar?: StringNullableFilter<"Notification"> | string | null
    relatedId?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type FlowFallbackUpsertWithoutUserInput = {
    update: XOR<FlowFallbackUpdateWithoutUserInput, FlowFallbackUncheckedUpdateWithoutUserInput>
    create: XOR<FlowFallbackCreateWithoutUserInput, FlowFallbackUncheckedCreateWithoutUserInput>
    where?: FlowFallbackWhereInput
  }

  export type FlowFallbackUpdateToOneWithWhereWithoutUserInput = {
    where?: FlowFallbackWhereInput
    data: XOR<FlowFallbackUpdateWithoutUserInput, FlowFallbackUncheckedUpdateWithoutUserInput>
  }

  export type FlowFallbackUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeoutDuration?: IntFieldUpdateOperationsInput | number
    timeoutUnit?: EnumTimeoutUnitFieldUpdateOperationsInput | $Enums.TimeoutUnit
    fallbackMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowFallbackUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    timeoutDuration?: IntFieldUpdateOperationsInput | number
    timeoutUnit?: EnumTimeoutUnitFieldUpdateOperationsInput | $Enums.TimeoutUnit
    fallbackMessage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFlowStateUpsertWithWhereUniqueWithoutOwnerInput = {
    where: UserFlowStateWhereUniqueInput
    update: XOR<UserFlowStateUpdateWithoutOwnerInput, UserFlowStateUncheckedUpdateWithoutOwnerInput>
    create: XOR<UserFlowStateCreateWithoutOwnerInput, UserFlowStateUncheckedCreateWithoutOwnerInput>
  }

  export type UserFlowStateUpdateWithWhereUniqueWithoutOwnerInput = {
    where: UserFlowStateWhereUniqueInput
    data: XOR<UserFlowStateUpdateWithoutOwnerInput, UserFlowStateUncheckedUpdateWithoutOwnerInput>
  }

  export type UserFlowStateUpdateManyWithWhereWithoutOwnerInput = {
    where: UserFlowStateScalarWhereInput
    data: XOR<UserFlowStateUpdateManyMutationInput, UserFlowStateUncheckedUpdateManyWithoutOwnerInput>
  }

  export type UserFlowStateScalarWhereInput = {
    AND?: UserFlowStateScalarWhereInput | UserFlowStateScalarWhereInput[]
    OR?: UserFlowStateScalarWhereInput[]
    NOT?: UserFlowStateScalarWhereInput | UserFlowStateScalarWhereInput[]
    id?: StringFilter<"UserFlowState"> | string
    platformUserId?: StringFilter<"UserFlowState"> | string
    ownerUserId?: StringFilter<"UserFlowState"> | string
    flowId?: StringFilter<"UserFlowState"> | string
    pageId?: StringFilter<"UserFlowState"> | string
    currentStep?: StringFilter<"UserFlowState"> | string
    stepHistory?: JsonNullableFilter<"UserFlowState">
    variables?: JsonNullableFilter<"UserFlowState">
    status?: EnumUserFlowStatusFilter<"UserFlowState"> | $Enums.UserFlowStatus
    createdAt?: DateTimeFilter<"UserFlowState"> | Date | string
    updatedAt?: DateTimeFilter<"UserFlowState"> | Date | string
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUserInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    token?: StringFilter<"RefreshToken"> | string
    userId?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type PasswordResetTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateManyWithWhereWithoutUserInput = {
    where: PasswordResetTokenScalarWhereInput
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type PasswordResetTokenScalarWhereInput = {
    AND?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    OR?: PasswordResetTokenScalarWhereInput[]
    NOT?: PasswordResetTokenScalarWhereInput | PasswordResetTokenScalarWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    token?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
  }

  export type UserCreateWithoutRefreshTokensInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flows?: FlowCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UserUpsertWithoutRefreshTokensInput = {
    update: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UserCreateWithoutRefreshTokensInput, UserUncheckedCreateWithoutRefreshTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokensInput, UserUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UserUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordResetTokenInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flows?: FlowCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokenInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
  }

  export type UserUpsertWithoutPasswordResetTokenInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type UserUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFoldersInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flows?: FlowCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFoldersInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFoldersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
  }

  export type FlowCreateWithoutFolderInput = {
    id?: string
    pageId?: string | null
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlowsInput
    states?: UserFlowStateCreateNestedManyWithoutFlowInput
    shares?: FlowShareCreateNestedManyWithoutFlowInput
  }

  export type FlowUncheckedCreateWithoutFolderInput = {
    id?: string
    userId: string
    pageId?: string | null
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: UserFlowStateUncheckedCreateNestedManyWithoutFlowInput
    shares?: FlowShareUncheckedCreateNestedManyWithoutFlowInput
  }

  export type FlowCreateOrConnectWithoutFolderInput = {
    where: FlowWhereUniqueInput
    create: XOR<FlowCreateWithoutFolderInput, FlowUncheckedCreateWithoutFolderInput>
  }

  export type FlowCreateManyFolderInputEnvelope = {
    data: FlowCreateManyFolderInput | FlowCreateManyFolderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFoldersInput = {
    update: XOR<UserUpdateWithoutFoldersInput, UserUncheckedUpdateWithoutFoldersInput>
    create: XOR<UserCreateWithoutFoldersInput, UserUncheckedCreateWithoutFoldersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFoldersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFoldersInput, UserUncheckedUpdateWithoutFoldersInput>
  }

  export type UserUpdateWithoutFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFoldersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlowUpsertWithWhereUniqueWithoutFolderInput = {
    where: FlowWhereUniqueInput
    update: XOR<FlowUpdateWithoutFolderInput, FlowUncheckedUpdateWithoutFolderInput>
    create: XOR<FlowCreateWithoutFolderInput, FlowUncheckedCreateWithoutFolderInput>
  }

  export type FlowUpdateWithWhereUniqueWithoutFolderInput = {
    where: FlowWhereUniqueInput
    data: XOR<FlowUpdateWithoutFolderInput, FlowUncheckedUpdateWithoutFolderInput>
  }

  export type FlowUpdateManyWithWhereWithoutFolderInput = {
    where: FlowScalarWhereInput
    data: XOR<FlowUpdateManyMutationInput, FlowUncheckedUpdateManyWithoutFolderInput>
  }

  export type UserCreateWithoutFlowsInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlowsInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlowsInput, UserUncheckedCreateWithoutFlowsInput>
  }

  export type FolderCreateWithoutFlowsInput = {
    id?: string
    name: string
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFoldersInput
  }

  export type FolderUncheckedCreateWithoutFlowsInput = {
    id?: string
    userId: string
    name: string
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FolderCreateOrConnectWithoutFlowsInput = {
    where: FolderWhereUniqueInput
    create: XOR<FolderCreateWithoutFlowsInput, FolderUncheckedCreateWithoutFlowsInput>
  }

  export type UserFlowStateCreateWithoutFlowInput = {
    id?: string
    platformUserId: string
    pageId: string
    currentStep: string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.UserFlowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    owner: UserCreateNestedOneWithoutUserFlowStatesInput
  }

  export type UserFlowStateUncheckedCreateWithoutFlowInput = {
    id?: string
    platformUserId: string
    ownerUserId: string
    pageId: string
    currentStep: string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.UserFlowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFlowStateCreateOrConnectWithoutFlowInput = {
    where: UserFlowStateWhereUniqueInput
    create: XOR<UserFlowStateCreateWithoutFlowInput, UserFlowStateUncheckedCreateWithoutFlowInput>
  }

  export type UserFlowStateCreateManyFlowInputEnvelope = {
    data: UserFlowStateCreateManyFlowInput | UserFlowStateCreateManyFlowInput[]
    skipDuplicates?: boolean
  }

  export type FlowShareCreateWithoutFlowInput = {
    id?: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlowSharesInput
    comments?: FlowCommentCreateNestedManyWithoutFlowShareInput
    likes?: FlowLikeCreateNestedManyWithoutFlowShareInput
    saves?: FlowSaveCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareUncheckedCreateWithoutFlowInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: FlowCommentUncheckedCreateNestedManyWithoutFlowShareInput
    likes?: FlowLikeUncheckedCreateNestedManyWithoutFlowShareInput
    saves?: FlowSaveUncheckedCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareCreateOrConnectWithoutFlowInput = {
    where: FlowShareWhereUniqueInput
    create: XOR<FlowShareCreateWithoutFlowInput, FlowShareUncheckedCreateWithoutFlowInput>
  }

  export type FlowShareCreateManyFlowInputEnvelope = {
    data: FlowShareCreateManyFlowInput | FlowShareCreateManyFlowInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFlowsInput = {
    update: XOR<UserUpdateWithoutFlowsInput, UserUncheckedUpdateWithoutFlowsInput>
    create: XOR<UserCreateWithoutFlowsInput, UserUncheckedCreateWithoutFlowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlowsInput, UserUncheckedUpdateWithoutFlowsInput>
  }

  export type UserUpdateWithoutFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FolderUpsertWithoutFlowsInput = {
    update: XOR<FolderUpdateWithoutFlowsInput, FolderUncheckedUpdateWithoutFlowsInput>
    create: XOR<FolderCreateWithoutFlowsInput, FolderUncheckedCreateWithoutFlowsInput>
    where?: FolderWhereInput
  }

  export type FolderUpdateToOneWithWhereWithoutFlowsInput = {
    where?: FolderWhereInput
    data: XOR<FolderUpdateWithoutFlowsInput, FolderUncheckedUpdateWithoutFlowsInput>
  }

  export type FolderUpdateWithoutFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFoldersNestedInput
  }

  export type FolderUncheckedUpdateWithoutFlowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFlowStateUpsertWithWhereUniqueWithoutFlowInput = {
    where: UserFlowStateWhereUniqueInput
    update: XOR<UserFlowStateUpdateWithoutFlowInput, UserFlowStateUncheckedUpdateWithoutFlowInput>
    create: XOR<UserFlowStateCreateWithoutFlowInput, UserFlowStateUncheckedCreateWithoutFlowInput>
  }

  export type UserFlowStateUpdateWithWhereUniqueWithoutFlowInput = {
    where: UserFlowStateWhereUniqueInput
    data: XOR<UserFlowStateUpdateWithoutFlowInput, UserFlowStateUncheckedUpdateWithoutFlowInput>
  }

  export type UserFlowStateUpdateManyWithWhereWithoutFlowInput = {
    where: UserFlowStateScalarWhereInput
    data: XOR<UserFlowStateUpdateManyMutationInput, UserFlowStateUncheckedUpdateManyWithoutFlowInput>
  }

  export type FlowShareUpsertWithWhereUniqueWithoutFlowInput = {
    where: FlowShareWhereUniqueInput
    update: XOR<FlowShareUpdateWithoutFlowInput, FlowShareUncheckedUpdateWithoutFlowInput>
    create: XOR<FlowShareCreateWithoutFlowInput, FlowShareUncheckedCreateWithoutFlowInput>
  }

  export type FlowShareUpdateWithWhereUniqueWithoutFlowInput = {
    where: FlowShareWhereUniqueInput
    data: XOR<FlowShareUpdateWithoutFlowInput, FlowShareUncheckedUpdateWithoutFlowInput>
  }

  export type FlowShareUpdateManyWithWhereWithoutFlowInput = {
    where: FlowShareScalarWhereInput
    data: XOR<FlowShareUpdateManyMutationInput, FlowShareUncheckedUpdateManyWithoutFlowInput>
  }

  export type UserCreateWithoutUserFlowStatesInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flows?: FlowCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserFlowStatesInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserFlowStatesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserFlowStatesInput, UserUncheckedCreateWithoutUserFlowStatesInput>
  }

  export type FlowCreateWithoutStatesInput = {
    id?: string
    pageId?: string | null
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlowsInput
    folder: FolderCreateNestedOneWithoutFlowsInput
    shares?: FlowShareCreateNestedManyWithoutFlowInput
  }

  export type FlowUncheckedCreateWithoutStatesInput = {
    id?: string
    userId: string
    pageId?: string | null
    folderId: string
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    shares?: FlowShareUncheckedCreateNestedManyWithoutFlowInput
  }

  export type FlowCreateOrConnectWithoutStatesInput = {
    where: FlowWhereUniqueInput
    create: XOR<FlowCreateWithoutStatesInput, FlowUncheckedCreateWithoutStatesInput>
  }

  export type UserUpsertWithoutUserFlowStatesInput = {
    update: XOR<UserUpdateWithoutUserFlowStatesInput, UserUncheckedUpdateWithoutUserFlowStatesInput>
    create: XOR<UserCreateWithoutUserFlowStatesInput, UserUncheckedCreateWithoutUserFlowStatesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserFlowStatesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserFlowStatesInput, UserUncheckedUpdateWithoutUserFlowStatesInput>
  }

  export type UserUpdateWithoutUserFlowStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserFlowStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlowUpsertWithoutStatesInput = {
    update: XOR<FlowUpdateWithoutStatesInput, FlowUncheckedUpdateWithoutStatesInput>
    create: XOR<FlowCreateWithoutStatesInput, FlowUncheckedCreateWithoutStatesInput>
    where?: FlowWhereInput
  }

  export type FlowUpdateToOneWithWhereWithoutStatesInput = {
    where?: FlowWhereInput
    data: XOR<FlowUpdateWithoutStatesInput, FlowUncheckedUpdateWithoutStatesInput>
  }

  export type FlowUpdateWithoutStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlowsNestedInput
    folder?: FolderUpdateOneRequiredWithoutFlowsNestedInput
    shares?: FlowShareUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateWithoutStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: StringFieldUpdateOperationsInput | string
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shares?: FlowShareUncheckedUpdateManyWithoutFlowNestedInput
  }

  export type FlowCreateWithoutSharesInput = {
    id?: string
    pageId?: string | null
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlowsInput
    folder: FolderCreateNestedOneWithoutFlowsInput
    states?: UserFlowStateCreateNestedManyWithoutFlowInput
  }

  export type FlowUncheckedCreateWithoutSharesInput = {
    id?: string
    userId: string
    pageId?: string | null
    folderId: string
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    states?: UserFlowStateUncheckedCreateNestedManyWithoutFlowInput
  }

  export type FlowCreateOrConnectWithoutSharesInput = {
    where: FlowWhereUniqueInput
    create: XOR<FlowCreateWithoutSharesInput, FlowUncheckedCreateWithoutSharesInput>
  }

  export type UserCreateWithoutFlowSharesInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flows?: FlowCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlowSharesInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlowSharesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlowSharesInput, UserUncheckedCreateWithoutFlowSharesInput>
  }

  export type FlowCommentCreateWithoutFlowShareInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlowCommentsInput
    parent?: FlowCommentCreateNestedOneWithoutRepliesInput
    replies?: FlowCommentCreateNestedManyWithoutParentInput
  }

  export type FlowCommentUncheckedCreateWithoutFlowShareInput = {
    id?: string
    userId: string
    comment: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: FlowCommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type FlowCommentCreateOrConnectWithoutFlowShareInput = {
    where: FlowCommentWhereUniqueInput
    create: XOR<FlowCommentCreateWithoutFlowShareInput, FlowCommentUncheckedCreateWithoutFlowShareInput>
  }

  export type FlowCommentCreateManyFlowShareInputEnvelope = {
    data: FlowCommentCreateManyFlowShareInput | FlowCommentCreateManyFlowShareInput[]
    skipDuplicates?: boolean
  }

  export type FlowLikeCreateWithoutFlowShareInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFlowLikesInput
  }

  export type FlowLikeUncheckedCreateWithoutFlowShareInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FlowLikeCreateOrConnectWithoutFlowShareInput = {
    where: FlowLikeWhereUniqueInput
    create: XOR<FlowLikeCreateWithoutFlowShareInput, FlowLikeUncheckedCreateWithoutFlowShareInput>
  }

  export type FlowLikeCreateManyFlowShareInputEnvelope = {
    data: FlowLikeCreateManyFlowShareInput | FlowLikeCreateManyFlowShareInput[]
    skipDuplicates?: boolean
  }

  export type FlowSaveCreateWithoutFlowShareInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFlowSaveInput
  }

  export type FlowSaveUncheckedCreateWithoutFlowShareInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FlowSaveCreateOrConnectWithoutFlowShareInput = {
    where: FlowSaveWhereUniqueInput
    create: XOR<FlowSaveCreateWithoutFlowShareInput, FlowSaveUncheckedCreateWithoutFlowShareInput>
  }

  export type FlowSaveCreateManyFlowShareInputEnvelope = {
    data: FlowSaveCreateManyFlowShareInput | FlowSaveCreateManyFlowShareInput[]
    skipDuplicates?: boolean
  }

  export type FlowUpsertWithoutSharesInput = {
    update: XOR<FlowUpdateWithoutSharesInput, FlowUncheckedUpdateWithoutSharesInput>
    create: XOR<FlowCreateWithoutSharesInput, FlowUncheckedCreateWithoutSharesInput>
    where?: FlowWhereInput
  }

  export type FlowUpdateToOneWithWhereWithoutSharesInput = {
    where?: FlowWhereInput
    data: XOR<FlowUpdateWithoutSharesInput, FlowUncheckedUpdateWithoutSharesInput>
  }

  export type FlowUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlowsNestedInput
    folder?: FolderUpdateOneRequiredWithoutFlowsNestedInput
    states?: UserFlowStateUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateWithoutSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: StringFieldUpdateOperationsInput | string
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: UserFlowStateUncheckedUpdateManyWithoutFlowNestedInput
  }

  export type UserUpsertWithoutFlowSharesInput = {
    update: XOR<UserUpdateWithoutFlowSharesInput, UserUncheckedUpdateWithoutFlowSharesInput>
    create: XOR<UserCreateWithoutFlowSharesInput, UserUncheckedCreateWithoutFlowSharesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlowSharesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlowSharesInput, UserUncheckedUpdateWithoutFlowSharesInput>
  }

  export type UserUpdateWithoutFlowSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlowSharesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlowCommentUpsertWithWhereUniqueWithoutFlowShareInput = {
    where: FlowCommentWhereUniqueInput
    update: XOR<FlowCommentUpdateWithoutFlowShareInput, FlowCommentUncheckedUpdateWithoutFlowShareInput>
    create: XOR<FlowCommentCreateWithoutFlowShareInput, FlowCommentUncheckedCreateWithoutFlowShareInput>
  }

  export type FlowCommentUpdateWithWhereUniqueWithoutFlowShareInput = {
    where: FlowCommentWhereUniqueInput
    data: XOR<FlowCommentUpdateWithoutFlowShareInput, FlowCommentUncheckedUpdateWithoutFlowShareInput>
  }

  export type FlowCommentUpdateManyWithWhereWithoutFlowShareInput = {
    where: FlowCommentScalarWhereInput
    data: XOR<FlowCommentUpdateManyMutationInput, FlowCommentUncheckedUpdateManyWithoutFlowShareInput>
  }

  export type FlowLikeUpsertWithWhereUniqueWithoutFlowShareInput = {
    where: FlowLikeWhereUniqueInput
    update: XOR<FlowLikeUpdateWithoutFlowShareInput, FlowLikeUncheckedUpdateWithoutFlowShareInput>
    create: XOR<FlowLikeCreateWithoutFlowShareInput, FlowLikeUncheckedCreateWithoutFlowShareInput>
  }

  export type FlowLikeUpdateWithWhereUniqueWithoutFlowShareInput = {
    where: FlowLikeWhereUniqueInput
    data: XOR<FlowLikeUpdateWithoutFlowShareInput, FlowLikeUncheckedUpdateWithoutFlowShareInput>
  }

  export type FlowLikeUpdateManyWithWhereWithoutFlowShareInput = {
    where: FlowLikeScalarWhereInput
    data: XOR<FlowLikeUpdateManyMutationInput, FlowLikeUncheckedUpdateManyWithoutFlowShareInput>
  }

  export type FlowSaveUpsertWithWhereUniqueWithoutFlowShareInput = {
    where: FlowSaveWhereUniqueInput
    update: XOR<FlowSaveUpdateWithoutFlowShareInput, FlowSaveUncheckedUpdateWithoutFlowShareInput>
    create: XOR<FlowSaveCreateWithoutFlowShareInput, FlowSaveUncheckedCreateWithoutFlowShareInput>
  }

  export type FlowSaveUpdateWithWhereUniqueWithoutFlowShareInput = {
    where: FlowSaveWhereUniqueInput
    data: XOR<FlowSaveUpdateWithoutFlowShareInput, FlowSaveUncheckedUpdateWithoutFlowShareInput>
  }

  export type FlowSaveUpdateManyWithWhereWithoutFlowShareInput = {
    where: FlowSaveScalarWhereInput
    data: XOR<FlowSaveUpdateManyMutationInput, FlowSaveUncheckedUpdateManyWithoutFlowShareInput>
  }

  export type FlowShareCreateWithoutCommentsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    flow: FlowCreateNestedOneWithoutSharesInput
    user: UserCreateNestedOneWithoutFlowSharesInput
    likes?: FlowLikeCreateNestedManyWithoutFlowShareInput
    saves?: FlowSaveCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareUncheckedCreateWithoutCommentsInput = {
    id?: string
    flowId: string
    userId: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    likes?: FlowLikeUncheckedCreateNestedManyWithoutFlowShareInput
    saves?: FlowSaveUncheckedCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareCreateOrConnectWithoutCommentsInput = {
    where: FlowShareWhereUniqueInput
    create: XOR<FlowShareCreateWithoutCommentsInput, FlowShareUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutFlowCommentsInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flows?: FlowCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlowCommentsInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlowCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlowCommentsInput, UserUncheckedCreateWithoutFlowCommentsInput>
  }

  export type FlowCommentCreateWithoutRepliesInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flowShare: FlowShareCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutFlowCommentsInput
    parent?: FlowCommentCreateNestedOneWithoutRepliesInput
  }

  export type FlowCommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    flowShareId: string
    userId: string
    comment: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowCommentCreateOrConnectWithoutRepliesInput = {
    where: FlowCommentWhereUniqueInput
    create: XOR<FlowCommentCreateWithoutRepliesInput, FlowCommentUncheckedCreateWithoutRepliesInput>
  }

  export type FlowCommentCreateWithoutParentInput = {
    id?: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flowShare: FlowShareCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutFlowCommentsInput
    replies?: FlowCommentCreateNestedManyWithoutParentInput
  }

  export type FlowCommentUncheckedCreateWithoutParentInput = {
    id?: string
    flowShareId: string
    userId: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: FlowCommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type FlowCommentCreateOrConnectWithoutParentInput = {
    where: FlowCommentWhereUniqueInput
    create: XOR<FlowCommentCreateWithoutParentInput, FlowCommentUncheckedCreateWithoutParentInput>
  }

  export type FlowCommentCreateManyParentInputEnvelope = {
    data: FlowCommentCreateManyParentInput | FlowCommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type FlowShareUpsertWithoutCommentsInput = {
    update: XOR<FlowShareUpdateWithoutCommentsInput, FlowShareUncheckedUpdateWithoutCommentsInput>
    create: XOR<FlowShareCreateWithoutCommentsInput, FlowShareUncheckedCreateWithoutCommentsInput>
    where?: FlowShareWhereInput
  }

  export type FlowShareUpdateToOneWithWhereWithoutCommentsInput = {
    where?: FlowShareWhereInput
    data: XOR<FlowShareUpdateWithoutCommentsInput, FlowShareUncheckedUpdateWithoutCommentsInput>
  }

  export type FlowShareUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutSharesNestedInput
    user?: UserUpdateOneRequiredWithoutFlowSharesNestedInput
    likes?: FlowLikeUpdateManyWithoutFlowShareNestedInput
    saves?: FlowSaveUpdateManyWithoutFlowShareNestedInput
  }

  export type FlowShareUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likes?: FlowLikeUncheckedUpdateManyWithoutFlowShareNestedInput
    saves?: FlowSaveUncheckedUpdateManyWithoutFlowShareNestedInput
  }

  export type UserUpsertWithoutFlowCommentsInput = {
    update: XOR<UserUpdateWithoutFlowCommentsInput, UserUncheckedUpdateWithoutFlowCommentsInput>
    create: XOR<UserCreateWithoutFlowCommentsInput, UserUncheckedCreateWithoutFlowCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlowCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlowCommentsInput, UserUncheckedUpdateWithoutFlowCommentsInput>
  }

  export type UserUpdateWithoutFlowCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlowCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlowCommentUpsertWithoutRepliesInput = {
    update: XOR<FlowCommentUpdateWithoutRepliesInput, FlowCommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<FlowCommentCreateWithoutRepliesInput, FlowCommentUncheckedCreateWithoutRepliesInput>
    where?: FlowCommentWhereInput
  }

  export type FlowCommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: FlowCommentWhereInput
    data: XOR<FlowCommentUpdateWithoutRepliesInput, FlowCommentUncheckedUpdateWithoutRepliesInput>
  }

  export type FlowCommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowShare?: FlowShareUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutFlowCommentsNestedInput
    parent?: FlowCommentUpdateOneWithoutRepliesNestedInput
  }

  export type FlowCommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCommentUpsertWithWhereUniqueWithoutParentInput = {
    where: FlowCommentWhereUniqueInput
    update: XOR<FlowCommentUpdateWithoutParentInput, FlowCommentUncheckedUpdateWithoutParentInput>
    create: XOR<FlowCommentCreateWithoutParentInput, FlowCommentUncheckedCreateWithoutParentInput>
  }

  export type FlowCommentUpdateWithWhereUniqueWithoutParentInput = {
    where: FlowCommentWhereUniqueInput
    data: XOR<FlowCommentUpdateWithoutParentInput, FlowCommentUncheckedUpdateWithoutParentInput>
  }

  export type FlowCommentUpdateManyWithWhereWithoutParentInput = {
    where: FlowCommentScalarWhereInput
    data: XOR<FlowCommentUpdateManyMutationInput, FlowCommentUncheckedUpdateManyWithoutParentInput>
  }

  export type FlowShareCreateWithoutLikesInput = {
    id?: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    flow: FlowCreateNestedOneWithoutSharesInput
    user: UserCreateNestedOneWithoutFlowSharesInput
    comments?: FlowCommentCreateNestedManyWithoutFlowShareInput
    saves?: FlowSaveCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareUncheckedCreateWithoutLikesInput = {
    id?: string
    flowId: string
    userId: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: FlowCommentUncheckedCreateNestedManyWithoutFlowShareInput
    saves?: FlowSaveUncheckedCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareCreateOrConnectWithoutLikesInput = {
    where: FlowShareWhereUniqueInput
    create: XOR<FlowShareCreateWithoutLikesInput, FlowShareUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutFlowLikesInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flows?: FlowCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlowLikesInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlowLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlowLikesInput, UserUncheckedCreateWithoutFlowLikesInput>
  }

  export type FlowShareUpsertWithoutLikesInput = {
    update: XOR<FlowShareUpdateWithoutLikesInput, FlowShareUncheckedUpdateWithoutLikesInput>
    create: XOR<FlowShareCreateWithoutLikesInput, FlowShareUncheckedCreateWithoutLikesInput>
    where?: FlowShareWhereInput
  }

  export type FlowShareUpdateToOneWithWhereWithoutLikesInput = {
    where?: FlowShareWhereInput
    data: XOR<FlowShareUpdateWithoutLikesInput, FlowShareUncheckedUpdateWithoutLikesInput>
  }

  export type FlowShareUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutSharesNestedInput
    user?: UserUpdateOneRequiredWithoutFlowSharesNestedInput
    comments?: FlowCommentUpdateManyWithoutFlowShareNestedInput
    saves?: FlowSaveUpdateManyWithoutFlowShareNestedInput
  }

  export type FlowShareUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: FlowCommentUncheckedUpdateManyWithoutFlowShareNestedInput
    saves?: FlowSaveUncheckedUpdateManyWithoutFlowShareNestedInput
  }

  export type UserUpsertWithoutFlowLikesInput = {
    update: XOR<UserUpdateWithoutFlowLikesInput, UserUncheckedUpdateWithoutFlowLikesInput>
    create: XOR<UserCreateWithoutFlowLikesInput, UserUncheckedCreateWithoutFlowLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlowLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlowLikesInput, UserUncheckedUpdateWithoutFlowLikesInput>
  }

  export type UserUpdateWithoutFlowLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlowLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlowShareCreateWithoutSavesInput = {
    id?: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    flow: FlowCreateNestedOneWithoutSharesInput
    user: UserCreateNestedOneWithoutFlowSharesInput
    comments?: FlowCommentCreateNestedManyWithoutFlowShareInput
    likes?: FlowLikeCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareUncheckedCreateWithoutSavesInput = {
    id?: string
    flowId: string
    userId: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    comments?: FlowCommentUncheckedCreateNestedManyWithoutFlowShareInput
    likes?: FlowLikeUncheckedCreateNestedManyWithoutFlowShareInput
  }

  export type FlowShareCreateOrConnectWithoutSavesInput = {
    where: FlowShareWhereUniqueInput
    create: XOR<FlowShareCreateWithoutSavesInput, FlowShareUncheckedCreateWithoutSavesInput>
  }

  export type UserCreateWithoutFlowSaveInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flows?: FlowCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlowSaveInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlowSaveInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlowSaveInput, UserUncheckedCreateWithoutFlowSaveInput>
  }

  export type FlowShareUpsertWithoutSavesInput = {
    update: XOR<FlowShareUpdateWithoutSavesInput, FlowShareUncheckedUpdateWithoutSavesInput>
    create: XOR<FlowShareCreateWithoutSavesInput, FlowShareUncheckedCreateWithoutSavesInput>
    where?: FlowShareWhereInput
  }

  export type FlowShareUpdateToOneWithWhereWithoutSavesInput = {
    where?: FlowShareWhereInput
    data: XOR<FlowShareUpdateWithoutSavesInput, FlowShareUncheckedUpdateWithoutSavesInput>
  }

  export type FlowShareUpdateWithoutSavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutSharesNestedInput
    user?: UserUpdateOneRequiredWithoutFlowSharesNestedInput
    comments?: FlowCommentUpdateManyWithoutFlowShareNestedInput
    likes?: FlowLikeUpdateManyWithoutFlowShareNestedInput
  }

  export type FlowShareUncheckedUpdateWithoutSavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: FlowCommentUncheckedUpdateManyWithoutFlowShareNestedInput
    likes?: FlowLikeUncheckedUpdateManyWithoutFlowShareNestedInput
  }

  export type UserUpsertWithoutFlowSaveInput = {
    update: XOR<UserUpdateWithoutFlowSaveInput, UserUncheckedUpdateWithoutFlowSaveInput>
    create: XOR<UserCreateWithoutFlowSaveInput, UserUncheckedCreateWithoutFlowSaveInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlowSaveInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlowSaveInput, UserUncheckedUpdateWithoutFlowSaveInput>
  }

  export type UserUpdateWithoutFlowSaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlowSaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flows?: FlowCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    fallback?: FlowFallbackUncheckedCreateNestedOneWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    fallback?: FlowFallbackUncheckedUpdateOneWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFallbackInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderCreateNestedManyWithoutUserInput
    flows?: FlowCreateNestedManyWithoutUserInput
    flowShares?: FlowShareCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    userFlowStates?: UserFlowStateCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFallbackInput = {
    id?: string
    username: string
    displayName?: string | null
    email: string
    avatar?: string | null
    password: string
    role?: $Enums.Role
    provider?: $Enums.Provider
    providerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    folders?: FolderUncheckedCreateNestedManyWithoutUserInput
    flows?: FlowUncheckedCreateNestedManyWithoutUserInput
    flowShares?: FlowShareUncheckedCreateNestedManyWithoutUserInput
    flowLikes?: FlowLikeUncheckedCreateNestedManyWithoutUserInput
    flowSave?: FlowSaveUncheckedCreateNestedManyWithoutUserInput
    flowComments?: FlowCommentUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    userFlowStates?: UserFlowStateUncheckedCreateNestedManyWithoutOwnerInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFallbackInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFallbackInput, UserUncheckedCreateWithoutFallbackInput>
  }

  export type UserUpsertWithoutFallbackInput = {
    update: XOR<UserUpdateWithoutFallbackInput, UserUncheckedUpdateWithoutFallbackInput>
    create: XOR<UserCreateWithoutFallbackInput, UserUncheckedCreateWithoutFallbackInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFallbackInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFallbackInput, UserUncheckedUpdateWithoutFallbackInput>
  }

  export type UserUpdateWithoutFallbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUpdateManyWithoutUserNestedInput
    flows?: FlowUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    userFlowStates?: UserFlowStateUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFallbackInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    displayName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    providerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folders?: FolderUncheckedUpdateManyWithoutUserNestedInput
    flows?: FlowUncheckedUpdateManyWithoutUserNestedInput
    flowShares?: FlowShareUncheckedUpdateManyWithoutUserNestedInput
    flowLikes?: FlowLikeUncheckedUpdateManyWithoutUserNestedInput
    flowSave?: FlowSaveUncheckedUpdateManyWithoutUserNestedInput
    flowComments?: FlowCommentUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    userFlowStates?: UserFlowStateUncheckedUpdateManyWithoutOwnerNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FolderCreateManyUserInput = {
    id?: string
    name: string
    platform: $Enums.Platform
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowCreateManyUserInput = {
    id?: string
    pageId?: string | null
    folderId: string
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowShareCreateManyUserInput = {
    id?: string
    flowId: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowLikeCreateManyUserInput = {
    id?: string
    flowShareId: string
    createdAt?: Date | string
  }

  export type FlowSaveCreateManyUserInput = {
    id?: string
    flowShareId: string
    createdAt?: Date | string
  }

  export type FlowCommentCreateManyUserInput = {
    id?: string
    flowShareId: string
    comment: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: $Enums.NotificationType
    message: string
    avatar?: string | null
    relatedId: string
    read?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFlowStateCreateManyOwnerInput = {
    id?: string
    platformUserId: string
    flowId: string
    pageId: string
    currentStep: string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.UserFlowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type FolderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flows?: FlowUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flows?: FlowUncheckedUpdateManyWithoutFolderNestedInput
  }

  export type FolderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    folder?: FolderUpdateOneRequiredWithoutFlowsNestedInput
    states?: UserFlowStateUpdateManyWithoutFlowNestedInput
    shares?: FlowShareUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: StringFieldUpdateOperationsInput | string
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: UserFlowStateUncheckedUpdateManyWithoutFlowNestedInput
    shares?: FlowShareUncheckedUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    folderId?: StringFieldUpdateOperationsInput | string
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowShareUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutSharesNestedInput
    comments?: FlowCommentUpdateManyWithoutFlowShareNestedInput
    likes?: FlowLikeUpdateManyWithoutFlowShareNestedInput
    saves?: FlowSaveUpdateManyWithoutFlowShareNestedInput
  }

  export type FlowShareUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: FlowCommentUncheckedUpdateManyWithoutFlowShareNestedInput
    likes?: FlowLikeUncheckedUpdateManyWithoutFlowShareNestedInput
    saves?: FlowSaveUncheckedUpdateManyWithoutFlowShareNestedInput
  }

  export type FlowShareUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowLikeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowShare?: FlowShareUpdateOneRequiredWithoutLikesNestedInput
  }

  export type FlowLikeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowLikeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowSaveUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowShare?: FlowShareUpdateOneRequiredWithoutSavesNestedInput
  }

  export type FlowSaveUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowSaveUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCommentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowShare?: FlowShareUpdateOneRequiredWithoutCommentsNestedInput
    parent?: FlowCommentUpdateOneWithoutRepliesNestedInput
    replies?: FlowCommentUpdateManyWithoutParentNestedInput
  }

  export type FlowCommentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: FlowCommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type FlowCommentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    message?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    relatedId?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFlowStateUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformUserId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    currentStep?: StringFieldUpdateOperationsInput | string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumUserFlowStatusFieldUpdateOperationsInput | $Enums.UserFlowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutStatesNestedInput
  }

  export type UserFlowStateUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformUserId?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    currentStep?: StringFieldUpdateOperationsInput | string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumUserFlowStatusFieldUpdateOperationsInput | $Enums.UserFlowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFlowStateUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformUserId?: StringFieldUpdateOperationsInput | string
    flowId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    currentStep?: StringFieldUpdateOperationsInput | string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumUserFlowStatusFieldUpdateOperationsInput | $Enums.UserFlowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCreateManyFolderInput = {
    id?: string
    userId: string
    pageId?: string | null
    pageAccessToken?: string | null
    name: string
    description?: string | null
    status?: $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform: $Enums.Platform
    timeoutDuration?: string | null
    startNodeId?: string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlowsNestedInput
    states?: UserFlowStateUpdateManyWithoutFlowNestedInput
    shares?: FlowShareUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    states?: UserFlowStateUncheckedUpdateManyWithoutFlowNestedInput
    shares?: FlowShareUncheckedUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateManyWithoutFolderInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    pageId?: NullableStringFieldUpdateOperationsInput | string | null
    pageAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowStatusFieldUpdateOperationsInput | $Enums.FlowStatus
    logicJson?: NullableJsonNullValueInput | InputJsonValue
    layoutJson?: NullableJsonNullValueInput | InputJsonValue
    platform?: EnumPlatformFieldUpdateOperationsInput | $Enums.Platform
    timeoutDuration?: NullableStringFieldUpdateOperationsInput | string | null
    startNodeId?: NullableStringFieldUpdateOperationsInput | string | null
    timeoutJson?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFlowStateCreateManyFlowInput = {
    id?: string
    platformUserId: string
    ownerUserId: string
    pageId: string
    currentStep: string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.UserFlowStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowShareCreateManyFlowInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    thumbnail?: string | null
    status?: $Enums.FlowShareStatus
    downloadCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserFlowStateUpdateWithoutFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformUserId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    currentStep?: StringFieldUpdateOperationsInput | string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumUserFlowStatusFieldUpdateOperationsInput | $Enums.UserFlowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutUserFlowStatesNestedInput
  }

  export type UserFlowStateUncheckedUpdateWithoutFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformUserId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    currentStep?: StringFieldUpdateOperationsInput | string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumUserFlowStatusFieldUpdateOperationsInput | $Enums.UserFlowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFlowStateUncheckedUpdateManyWithoutFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    platformUserId?: StringFieldUpdateOperationsInput | string
    ownerUserId?: StringFieldUpdateOperationsInput | string
    pageId?: StringFieldUpdateOperationsInput | string
    currentStep?: StringFieldUpdateOperationsInput | string
    stepHistory?: NullableJsonNullValueInput | InputJsonValue
    variables?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumUserFlowStatusFieldUpdateOperationsInput | $Enums.UserFlowStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowShareUpdateWithoutFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlowSharesNestedInput
    comments?: FlowCommentUpdateManyWithoutFlowShareNestedInput
    likes?: FlowLikeUpdateManyWithoutFlowShareNestedInput
    saves?: FlowSaveUpdateManyWithoutFlowShareNestedInput
  }

  export type FlowShareUncheckedUpdateWithoutFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    comments?: FlowCommentUncheckedUpdateManyWithoutFlowShareNestedInput
    likes?: FlowLikeUncheckedUpdateManyWithoutFlowShareNestedInput
    saves?: FlowSaveUncheckedUpdateManyWithoutFlowShareNestedInput
  }

  export type FlowShareUncheckedUpdateManyWithoutFlowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnail?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumFlowShareStatusFieldUpdateOperationsInput | $Enums.FlowShareStatus
    downloadCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCommentCreateManyFlowShareInput = {
    id?: string
    userId: string
    comment: string
    parentId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowLikeCreateManyFlowShareInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FlowSaveCreateManyFlowShareInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FlowCommentUpdateWithoutFlowShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlowCommentsNestedInput
    parent?: FlowCommentUpdateOneWithoutRepliesNestedInput
    replies?: FlowCommentUpdateManyWithoutParentNestedInput
  }

  export type FlowCommentUncheckedUpdateWithoutFlowShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: FlowCommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type FlowCommentUncheckedUpdateManyWithoutFlowShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowLikeUpdateWithoutFlowShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlowLikesNestedInput
  }

  export type FlowLikeUncheckedUpdateWithoutFlowShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowLikeUncheckedUpdateManyWithoutFlowShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowSaveUpdateWithoutFlowShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlowSaveNestedInput
  }

  export type FlowSaveUncheckedUpdateWithoutFlowShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowSaveUncheckedUpdateManyWithoutFlowShareInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCommentCreateManyParentInput = {
    id?: string
    flowShareId: string
    userId: string
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowCommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowShare?: FlowShareUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutFlowCommentsNestedInput
    replies?: FlowCommentUpdateManyWithoutParentNestedInput
  }

  export type FlowCommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: FlowCommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type FlowCommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    flowShareId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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