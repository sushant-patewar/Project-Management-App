
export class Task {
    TaskID: number;
    ParentID: number;
    TaskType: string;
    //SprintID: number;
    //ParentTaskID: number;
    TaskSummary: string;
    //TaskStatus: number;
    EstimatedStartDate?: Date;
    EstimatedEndDate?: Date;
    EstimatedEffortsHrs?: number;
    //Assignee: number;
    //Reporter: number;
    //Description: string;
    IsDeleted?: boolean;

}
