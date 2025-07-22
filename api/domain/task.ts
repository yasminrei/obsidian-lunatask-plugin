import { 
    TaskId, 
    AreaId, 
    GoalId, 
    Status, 
    PreviousStatus, 
    Estimate, 
    Priority, 
    Progress, 
    Motivation, 
    Eisenhower, 
    Sources, 
    ScheduledOn, 
    CompletedAt, 
    CreatedAt, 
    UpdatedAt, 
    Source,
    SourceId
} from "./attributes";

export type Task = {
    id: TaskId;
    areaId: AreaId;
    goalId: GoalId;
    status: Status;
    previousStatus: PreviousStatus;
    estimate: Estimate;
    priority: Priority;
    progress: Progress;
    motivation: Motivation;
    eisenhower: Eisenhower;
    sources: Sources;
    scheduledOn: ScheduledOn;
    completedAt: CompletedAt;
    createdAt: CreatedAt;
    updatedAt: UpdatedAt; 
}

export type CreateTaskParams = {
    areaId: AreaId;
    goalId?: GoalId;
    name: string;
    note?: string;
    status?: Status;
    motivation?: Motivation;
    eisenhower?: Eisenhower;
    estimate?: Estimate;
    priority?: Priority;
    scheduledOn?: ScheduledOn;
    completedAt?: CompletedAt;
    source?: Source;
    sourceId?: SourceId;
}