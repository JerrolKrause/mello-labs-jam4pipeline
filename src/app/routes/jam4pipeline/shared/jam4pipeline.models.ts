export enum TaskType {
  start = 'start',
  followup = 'followup',
  annoy = 'annoy',
  uploadFile = 'uploadFile',
}

export declare namespace Models {
  export interface TaskEvent {
    type: TaskType;
    data: any;
  }

  export interface ApiState<T> {
    loading: boolean;
    data: T[];
    error: any;
  }

  export interface Login {
    userName?: string | null;
    password?: string | null;
  }

  export interface ApiResponseOfBearerToken {
    data?: BearerToken | null;
    success: boolean;
    errors?: ApiError[] | null;
    meta?: { [key: string]: any; } | null;
  }

  export interface BearerToken {
    token?: string | null;
    refreshToken?: string | null;
    tokenExpirationDate?: Date | null;
    readonly tokenExpirationSeconds?: number | null;
    user?: User | null;
    mfaEnabled?: boolean | null;
    signRequest?: string | null;
    redirectUrl?: string | null;
    refreshTokenExpirationDate?: Date | null;
    readonly refreshTokenExpirationSeconds?: number | null;
  }

  export interface ApiError {
    errorCode: string;
    errorDescription?: string | null;
    propertyName?: string | null;
  }

  export interface User {
    firstName?: string | null;
    lastName?: string | null;
    guid?: string | null;
    userName?: string | null;
  }

  export interface ApiResponseOfListOfIncomeLoan {
    data?: IncomeLoan[] | null;
    success: boolean;
    errors?: ApiError[] | null;
    meta?: { [key: string]: any; } | null;
  }

  export interface IncomeLoan {
    id?: string | null;
    assignedToId?: string | null;
    loanNumber?: string | null;
    borrowerFirstName?: string | null;
    borrowerLastName?: string | null;
    borrowerState?: string | null;
    note?: string | null;
    loanAmount?: number | null;
    dateAssigned?: Date | null;
    dateCompleted?: Date | null;
    assignmentCondition?: IncomeLoanAssignmentCondition | null;
    incomeLoanStatus?: IncomeLoanStatus | null;
    incomeLoanExcludeReason?: IncomeLoanExcludeReason | null;
    files?: IncomeFile[] | null;
  }

  export interface IncomeFile {
    id?: string | null;
    fileGUID?: string | null;
    fileName?: string | null;
    dateDownloaded?: Date | null;
    dateInserted?: Date | null;
    insertedBy?: string | null;
    dateUpdated?: Date | null;
    updatedBy?: string | null;
    dateCompleted?: Date | null;
    completedBy?: string | null;
    fileProcessingStatus?: IncomeFileFileProcessingStatus | null;
  }

  export interface ApiResponseOfGuid {
    data?: string | null;
    success: boolean;
    errors?: ApiError[] | null;
    meta?: { [key: string]: any; } | null;
  }

  export interface ApiResponse {
    success: boolean;
    errors?: ApiError[] | null;
    meta?: { [key: string]: any; } | null;
  }

  export interface ApiResponseOfPricingException {
    data?: PricingException | null;
    success: boolean;
    errors?: ApiError[] | null;
    meta?: { [key: string]: any; } | null;
  }

  export interface PricingException {
    recordId?: string | null;
    isApprovable?: boolean | null;
    pricingExceptionReason?: PricingExceptionReason | null;
    percentRequested?: number | null;
    previousPercentRequested?: number | null;
    requestedBy?: string | null;
    primaryBorrower?: string | null;
    loanNumber?: string | null;
    loanPurpose?: string | null;
    loanProduct?: string | null;
    loanAmount?: number | null;
    amountRequested?: number | null;
    counteredPoints?: number | null;
    previousAmountRequested?: number | null;
    notes?: string | null;
    dateRequested?: Date | null;
  }

  export interface ApiResponseOfListOfPricingException {
    data?: PricingException[] | null;
    success: boolean;
    errors?: ApiError[] | null;
    meta?: { [key: string]: any; } | null;
  }

  export interface ApiResponseOfActionResponse {
    data?: ActionResponse | null;
    success: boolean;
    errors?: ApiError[] | null;
    meta?: { [key: string]: any; } | null;
  }

  export interface ActionResponse {
    success?: boolean | null;
    message?: string | null;
  }

  export interface CounterRequest {
    counterPoints?: number | null;
  }

  export interface SaveDeviceTokenRequest {
    bindingType?: SaveDeviceTokenRequestBindingType | null;
    deviceToken?: string | null;
  }

  export interface UserDelegate {
    delegateUserId?: string | null;
    delegateUpHierarchy?: boolean | null;
    startDate?: Date | null;
    endDate?: Date | null;
  }

  export interface ApiResponseOfUserDelegate {
    data?: UserDelegate | null;
    success: boolean;
    errors?: ApiError[] | null;
    meta?: { [key: string]: any; } | null;
  }

  export interface ApiResponseOfListOfTasks {
    data?: Tasks[] | null;
    success: boolean;
    errors?: ApiError[] | null;
    meta?: { [key: string]: any; } | null;
  }

  export interface Tasks {
    taskGUID?: string | null;
    taskType?: TasksTaskType | null;
    userType?: string | null;
    startedDate?: Date | null;
    completedDate?: Date | null;
    urgent?: boolean | null;
    assignedTo?: string | null;
    status?: TasksStatus | null;
    loanNumber?: string | null;
    borrowerName?: string | null;
    propertyState?: string | null;
  }

  export interface ApiResponseOfListOfUserOverride {
    data?: UserOverride[] | null;
    success: boolean;
    errors?: ApiError[] | null;
    meta?: { [key: string]: any; } | null;
  }

  export interface UserOverride {
    userGUID?: string | null;
    userName?: string | null;
    userType?: UserOverrideUserType | null;
    taskCount?: number | null;
    notStarted?: number | null;
    completedInOneWeek?: number | null;
  }

  export interface AssignTasks {
    tasks?: AssignTaskUser[] | null;
  }

  export interface AssignTaskUser {
    userId?: string | null;
    taskIds?: string[] | null;
  }

  export enum IncomeLoanAssignmentCondition {
    EmpowerConditionsAdded = 'EmpowerConditionsAdded',
    IncomeWorkSheetUploaded = 'IncomeWorkSheetUploaded',
    ExcludeLoan = 'ExcludeLoan',
    NoActionTaken = 'NoActionTaken',
  }

  export enum IncomeLoanStatus {
    New = 'New',
    Resubmital = 'Resubmital',
    Downloaded = 'Downloaded',
    Completed = 'Completed',
    Error = 'Error',
  }

  export enum IncomeLoanExcludeReason {
    HandwrittenTaxDocuments = 'HandwrittenTaxDocuments',
    AmendedTaxReturns = 'AmendedTaxReturns',
    Unknown = 'Unknown',
  }

  export enum IncomeFileFileProcessingStatus {
    InProcess = 'InProcess',
    Failed = 'Failed',
    Incomplete = 'Incomplete',
    Completed = 'Completed',
    NoAction = 'NoAction',
    Unknown = 'Unknown',
  }

  export enum PricingExceptionReason {
    Unknown = 'Unknown',
    ExtensionWaiver7 = 'ExtensionWaiver7',
    ExtensionWaiver15 = 'ExtensionWaiver15',
    ExtensionWaiver30 = 'ExtensionWaiver30',
    ExtensionWaiver45 = 'ExtensionWaiver45',
    RelockWaiver15 = 'RelockWaiver15',
    RelockWaiver30 = 'RelockWaiver30',
    RelockWaiver45 = 'RelockWaiver45',
    ProgramChangeWaiver = 'ProgramChangeWaiver',
    ReworkWaiver = 'ReworkWaiver',
    InternalPricingError = 'InternalPricingError',
    EmpowerIssue = 'EmpowerIssue',
    MatchOrBeat = 'MatchOrBeat',
    PricingConcession = 'PricingConcession',
    RepeatBorrower = 'RepeatBorrower',
    FamilyFriendRefer = 'FamilyFriendRefer',
    PricingSpecial = 'PricingSpecial',
    WorstCaseWaiver = 'WorstCaseWaiver',
    Correction = 'Correction',
    SecondaryAdjustment = 'SecondaryAdjustment',
    FloatDown = 'FloatDown',
    TexasCashOut = 'TexasCashOut',
    HPML = 'HPML',
    QM = 'QM',
    ImpairedAsset = 'ImpairedAsset',
    SecondarySubsidy = 'SecondarySubsidy',
    RateRenegotiation = 'RateRenegotiation',
    PriceDiscrepency = 'PriceDiscrepency',
    OperationError = 'OperationError',
    FlexibleCloseOfEscrowDate = 'FlexibleCloseOfEscrowDate',
    MarketCompetitiveness = 'MarketCompetitiveness',
    BranchSubsidy = 'BranchSubsidy',
    ExtensionWaiver21 = 'ExtensionWaiver21',
    CES = 'CES',
    StateHighCost = 'StateHighCost',
    ShortToClose = 'ShortToClose',
    NeedToWaiveLLPAS = 'NeedToWaiveLLPAS',
    OffTheFence = 'OffTheFence',
    FICOChange = 'FICOChange',
    LTVChange = 'LTVChange',
    UnlockNoSTP = 'UnlockNoSTP',
    TriMerge = 'TriMerge',
    EscrowWaiver = 'EscrowWaiver',
    Other = 'Other',
  }

  export enum SaveDeviceTokenRequestBindingType {
    Apn = 'Apn',
    Fcm = 'Fcm',
    Gcm = 'Gcm',
    Sms = 'Sms',
    FacebookMessenger = 'FacebookMessenger',
  }

  export enum TasksTaskType {
    VOE = 'VOE',
    Other = 'Other',
  }

  export enum TasksStatus {
    Created = 'Created',
    Hold = 'Hold',
    Completed = 'Completed',
    Other = 'Other',
  }

  export enum UserOverrideUserType {
    Jam = 'Jam',
    JamManager = 'JamManager',
    Other = 'Other',
  }
}
