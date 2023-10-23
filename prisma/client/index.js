
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.4.2
 * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
 */
Prisma.prismaVersion = {
  client: "5.4.2",
  engine: "ac9d7041ed77bcc8a8dbd2ab6616b39013829574"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}


  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StudentScalarFieldEnum = {
  id: 'id',
  roll: 'roll',
  name: 'name',
  email: 'email',
  phone: 'phone',
  dob: 'dob',
  password: 'password'
};

exports.Prisma.AdminScalarFieldEnum = {
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

exports.Prisma.PostScalarFieldEnum = {
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

exports.Prisma.StatuslogScalarFieldEnum = {
  id: 'id',
  postid: 'postid',
  status: 'status',
  feedback: 'feedback',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LikesScalarFieldEnum = {
  id: 'id',
  postid: 'postid',
  roll: 'roll'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Student: 'Student',
  Admin: 'Admin',
  Post: 'Post',
  statuslog: 'statuslog',
  likes: 'likes'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\work\\hich-handler\\demo\\prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.4.2",
  "engineVersion": "ac9d7041ed77bcc8a8dbd2ab6616b39013829574",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwKLy8gbGVhcm4gbW9yZSBhYm91dCBpdCBpbiB0aGUgZG9jczogaHR0cHM6Ly9wcmlzLmx5L2QvcHJpc21hLXNjaGVtYQoKZ2VuZXJhdG9yIGNsaWVudCB7CiAgcHJvdmlkZXIgPSAicHJpc21hLWNsaWVudC1qcyIKICBvdXRwdXQgICA9ICIuL2NsaWVudCIKfQoKZGF0YXNvdXJjZSBkYiB7CiAgcHJvdmlkZXIgPSAicG9zdGdyZXNxbCIKICB1cmwgICAgICA9IGVudigiREFUQUJBU0VfVVJMIikKfQptb2RlbCBTdHVkZW50IHsKICBpZCAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgcm9sbCAgICAgIFN0cmluZyAgICBAdW5pcXVlCiAgbmFtZSAgICAgIFN0cmluZz8KICBlbWFpbCAgICAgU3RyaW5nPyAgIEB1bmlxdWUKICBwaG9uZSAgICAgU3RyaW5nPyAgIEB1bmlxdWUKICBkb2IgICAgICAgRGF0ZVRpbWUKICBwYXNzd29yZCAgU3RyaW5nCiAgLy8gVXNlIHRoZSBwbHVyYWwgZm9ybSAicG9zdHMiIGZvciB0aGUgcmVsYXRpb24gZmllbGQKICBwb3N0cyAgICAgUG9zdFtdICAgQHJlbGF0aW9uKCJXcml0dGVuUG9zdHMiKQogIGxpa2VzICAgICBsaWtlc1tdICBAcmVsYXRpb24oIkxpa2VkQnkiKQp9Cgptb2RlbCBBZG1pbiB7CiAgaWQgICAgICAgIFN0cmluZyAgICBAaWQgQGRlZmF1bHQodXVpZCgpKQogIGRvYiAgICAgICBEYXRlVGltZQogIGVtYWlsICAgICBTdHJpbmc/ICAgQHVuaXF1ZQogIHBob25lICAgICBTdHJpbmc/ICAgQHVuaXF1ZQogIG5hbWUgICAgICBTdHJpbmc/CiAgcGFzc3dvcmQgIFN0cmluZwogIGRvbWFpbiAgICBTdHJpbmcKICBjcmVhdGVkQXQgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCBEYXRlVGltZSAgQHVwZGF0ZWRBdAp9Cgptb2RlbCBQb3N0IHsKICBwb3N0aWQgICAgICAgICBTdHJpbmcgICAgQGlkIEBkZWZhdWx0KHV1aWQoKSkKICB0aXRsZSAgICAgICAgICBTdHJpbmcKICBkZXNjICAgICAgICAgICBTdHJpbmcKICByb2xsICAgICAgICAgICBTdHJpbmcKICBjcmVhdGVkQXQgICAgICBEYXRlVGltZSAgQGRlZmF1bHQobm93KCkpCiAgdXBkYXRlZEF0ICAgICAgRGF0ZVRpbWUgIEB1cGRhdGVkQXQKICBkb21haW4gICAgICAgICBTdHJpbmcKICBsb2NhdGlvbiAgICAgICBTdHJpbmcgICBAZGVmYXVsdCgiUkVWSUVXIikKICBjdXJyZW50c3RhdHVzICBTdHJpbmcKICAvLyBEZWZpbmUgcmVsYXRpb25zIHdpdGggc3RhdHVzbG9nIGFuZCBsaWtlcwogIHN0YXR1c2xvZyAgICAgIHN0YXR1c2xvZ1tdIEByZWxhdGlvbigiUG9zdHNSZXZpZXdlZCIpCiAgbGlrZXMgICAgICAgICAgbGlrZXNbXSAgICAgQHJlbGF0aW9uKCJQb3N0c0xpa2VkIikKICAvLyBEZWZpbmUgYSByZWxhdGlvbiB3aXRoIFN0dWRlbnQKICBzdHVkZW50ICAgICAgICBTdHVkZW50ICAgICBAcmVsYXRpb24oIldyaXR0ZW5Qb3N0cyIsIGZpZWxkczogW3JvbGxdLCByZWZlcmVuY2VzOiBbcm9sbF0pCn0KCm1vZGVsIHN0YXR1c2xvZyB7CiAgaWQgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgcG9zdGlkICAgICAgICAgU3RyaW5nCiAgc3RhdHVzICAgICAgICAgU3RyaW5nCiAgZmVlZGJhY2sgICAgICAgU3RyaW5nCiAgY3JlYXRlZEF0ICAgICAgRGF0ZVRpbWUgIEBkZWZhdWx0KG5vdygpKQogIHVwZGF0ZWRBdCAgICAgIERhdGVUaW1lICBAdXBkYXRlZEF0CiAgLy8gRGVmaW5lIGEgcmVsYXRpb24gd2l0aCBQb3N0CiAgcG9zdCAgICAgICAgICAgUG9zdCAgICAgIEByZWxhdGlvbigiUG9zdHNSZXZpZXdlZCIsIGZpZWxkczogW3Bvc3RpZF0sIHJlZmVyZW5jZXM6IFtwb3N0aWRdKQp9Cgptb2RlbCBsaWtlcyB7CiAgaWQgICAgICAgICAgICAgU3RyaW5nICAgIEBpZCBAZGVmYXVsdCh1dWlkKCkpCiAgcG9zdGlkICAgICAgICAgU3RyaW5nCiAgcm9sbCAgICAgICAgICAgU3RyaW5nCiAgLy8gRGVmaW5lIHJlbGF0aW9ucyB3aXRoIFBvc3QgYW5kIFN0dWRlbnQKICBwb3N0ICAgICAgICAgICBQb3N0ICAgICAgQHJlbGF0aW9uKCJQb3N0c0xpa2VkIiwgZmllbGRzOiBbcG9zdGlkXSwgcmVmZXJlbmNlczogW3Bvc3RpZF0pCiAgc3R1ZGVudCAgICAgICAgU3R1ZGVudCAgIEByZWxhdGlvbigiTGlrZWRCeSIsIGZpZWxkczogW3JvbGxdLCByZWZlcmVuY2VzOiBbcm9sbF0pCn0K",
  "inlineSchemaHash": "d8ac67217c99ac26bdb7bc7b1e8a8b6ef2733caffbf66bb5a3ffe68f87d6fa78",
  "noEngine": false
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "prisma/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Student\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roll\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dob\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"posts\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"relationName\":\"WrittenPosts\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"likes\",\"relationName\":\"LikedBy\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Admin\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dob\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"phone\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Post\":{\"dbName\":null,\"fields\":[{\"name\":\"postid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"desc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roll\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"domain\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"location\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"REVIEW\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"currentstatus\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"statuslog\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"statuslog\",\"relationName\":\"PostsReviewed\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likes\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"likes\",\"relationName\":\"PostsLiked\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"WrittenPosts\",\"relationFromFields\":[\"roll\"],\"relationToFields\":[\"roll\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"statuslog\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"feedback\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"relationName\":\"PostsReviewed\",\"relationFromFields\":[\"postid\"],\"relationToFields\":[\"postid\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"likes\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"postid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roll\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"post\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Post\",\"relationName\":\"PostsLiked\",\"relationFromFields\":[\"postid\"],\"relationToFields\":[\"postid\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"student\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Student\",\"relationName\":\"LikedBy\",\"relationFromFields\":[\"roll\"],\"relationToFields\":[\"roll\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "prisma/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "prisma/client/schema.prisma")
