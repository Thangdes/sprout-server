
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  passwordHash: 'passwordHash',
  fullName: 'fullName',
  userType: 'userType',
  refreshToken: 'refreshToken',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  avatar: 'avatar',
  isOnboarded: 'isOnboarded'
};

exports.Prisma.EmployerScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  companyName: 'companyName',
  companyLogoUrl: 'companyLogoUrl',
  companySize: 'companySize',
  address: 'address',
  industry: 'industry',
  foundedYear: 'foundedYear',
  CompanyUrl: 'CompanyUrl',
  CompanyDesc: 'CompanyDesc',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CandidateScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  fullName: 'fullName',
  dateOfBirth: 'dateOfBirth',
  gender: 'gender',
  address: 'address',
  phoneNumber: 'phoneNumber',
  profilePhotoUrl: 'profilePhotoUrl',
  motivation: 'motivation',
  skills: 'skills',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.EducationScalarFieldEnum = {
  id: 'id',
  candidateId: 'candidateId',
  startDate: 'startDate',
  endDate: 'endDate',
  schoolName: 'schoolName',
  degree: 'degree',
  fieldOfStudy: 'fieldOfStudy',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LinksScalarFieldEnum = {
  id: 'id',
  linkedln: 'linkedln',
  Github: 'Github',
  Portfolio: 'Portfolio',
  otherLink: 'otherLink'
};

exports.Prisma.WorkExperienceScalarFieldEnum = {
  id: 'id',
  candidateId: 'candidateId',
  startDate: 'startDate',
  endDate: 'endDate',
  isCurrent: 'isCurrent',
  companyName: 'companyName',
  position: 'position',
  jobTitle: 'jobTitle',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JobScalarFieldEnum = {
  id: 'id',
  employerId: 'employerId',
  title: 'title',
  description: 'description',
  requirements: 'requirements',
  salaryRange: 'salaryRange',
  salaryMin: 'salaryMin',
  salaryMax: 'salaryMax',
  salaryCurrency: 'salaryCurrency',
  salaryPeriod: 'salaryPeriod',
  tags: 'tags',
  benefits: 'benefits',
  visibility: 'visibility',
  primaryTag: 'primaryTag',
  location: 'location',
  jobType: 'jobType',
  status: 'status',
  postedDate: 'postedDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.CVScalarFieldEnum = {
  id: 'id',
  candidateId: 'candidateId',
  fileName: 'fileName',
  fileUrl: 'fileUrl',
  fileType: 'fileType',
  isPrimary: 'isPrimary',
  uploadedAt: 'uploadedAt'
};

exports.Prisma.ApplicationScalarFieldEnum = {
  id: 'id',
  candidateId: 'candidateId',
  jobId: 'jobId',
  applicationDate: 'applicationDate',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  score: 'score',
  AIanalysis: 'AIanalysis'
};

exports.Prisma.InterviewsScalarFieldEnum = {
  id: 'id',
  candidateId: 'candidateId',
  jobId: 'jobId',
  employerId: 'employerId',
  scheduledDate: 'scheduledDate',
  duration: 'duration',
  status: 'status',
  meetingLink: 'meetingLink',
  notes: 'notes',
  feedback: 'feedback',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ConversationScalarFieldEnum = {
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.MessageScalarFieldEnum = {
  id: 'id',
  conversationId: 'conversationId',
  senderId: 'senderId',
  content: 'content',
  isRead: 'isRead',
  createdAt: 'createdAt'
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
exports.UserType = exports.$Enums.UserType = {
  CANDIDATE: 'CANDIDATE',
  EMPLOYER: 'EMPLOYER',
  ADMIN: 'ADMIN',
  NONE: 'NONE'
};

exports.GenderType = exports.$Enums.GenderType = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
  PREFER_NOT_TO_SAY: 'PREFER_NOT_TO_SAY'
};

exports.Visibility = exports.$Enums.Visibility = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

exports.JobTypeEnum = exports.$Enums.JobTypeEnum = {
  FULL_TIME: 'FULL_TIME',
  PART_TIME: 'PART_TIME',
  CONTRACT: 'CONTRACT',
  TEMPORARY: 'TEMPORARY',
  INTERNSHIP: 'INTERNSHIP',
  FREELANCE: 'FREELANCE'
};

exports.JobStatus = exports.$Enums.JobStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  CLOSED: 'CLOSED',
  DRAFT: 'DRAFT'
};

exports.FileTypeEnum = exports.$Enums.FileTypeEnum = {
  PDF: 'PDF',
  DOC: 'DOC',
  DOCX: 'DOCX',
  OTHER: 'OTHER'
};

exports.ApplicationStatus = exports.$Enums.ApplicationStatus = {
  APPLICATION_SUBMITTED: 'APPLICATION_SUBMITTED',
  DOCUMENT_SCREENING: 'DOCUMENT_SCREENING',
  FIRST_INTERVIEW: 'FIRST_INTERVIEW',
  SECOND_INTERVIEW: 'SECOND_INTERVIEW',
  OFFER_STAGE: 'OFFER_STAGE',
  REJECTED: 'REJECTED'
};

exports.Prisma.ModelName = {
  User: 'User',
  Employer: 'Employer',
  Candidate: 'Candidate',
  Education: 'Education',
  Links: 'Links',
  WorkExperience: 'WorkExperience',
  Job: 'Job',
  CV: 'CV',
  Application: 'Application',
  Interviews: 'Interviews',
  Conversation: 'Conversation',
  Message: 'Message'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
