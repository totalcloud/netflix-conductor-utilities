/// <reference types="node" />
import { EventEmitter } from 'events';
import { AxiosInstance } from 'axios';
interface ProcessingTask {
    taskId: string;
    done: boolean;
    start: number;
}
export interface ConductorWorkerOptions {
    url?: string;
    apiPath?: string;
    workerid?: string;
    maxConcurrent?: number;
    heartbeatInterval?: number;
}
export declare type WorkFunction<Result = void> = (input: any) => Promise<Result>;
declare class ConductorWorker<Result = void> extends EventEmitter {
    url: string;
    apiPath: string;
    workerid?: string;
    client: AxiosInstance;
    polling: boolean;
    maxConcurrent: number;
    runningTasks: ProcessingTask[];
    heartbeatInterval: number;
    constructor(options?: ConductorWorkerOptions);
    __canPollTask(): boolean;
    pollAndWork(taskType: string, fn: WorkFunction<Result>): Promise<void>;
    start(taskType: string, fn: WorkFunction<Result>, interval?: number): void;
    stop(): void;
}
export default ConductorWorker;
export { ConductorWorker };
