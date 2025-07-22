export type uuid = "/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/";

export type TaskId = uuid;

export type AreaId = uuid;

export type GoalId = uuid | null;

export type Status = "later" | "next" | "started" | "waiting" | "completed";

export type PreviousStatus = Status | null;

export type Estimate = number | null;

export type Priority = 2 | 1 | 0 | -1 | -2;

export type Progress = "/^(0|[1-9][0-9]?|100)$/" | null;

export type Motivation = "must" | "should" | "want";

export type Eisenhower = 1 | 2 | 3 | 4 | 0;

export type Source = string | null;

export type SourceId = string | null;

export type SourceObject = {
    source: Source;
    sourceId: SourceId;
};

export type Sources = SourceObject[];

export type ScheduledOn = string | null;

export type CompletedAt = string | null;

export type CreatedAt = string;

export type UpdatedAt = string;