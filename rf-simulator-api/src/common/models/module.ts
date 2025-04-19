export interface Module<T = unknown> {
    id: string;
    name: string;
    config: T;
    }