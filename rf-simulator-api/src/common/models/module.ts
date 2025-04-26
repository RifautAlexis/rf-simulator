export interface Module<T = unknown> {
  type: number;
  slot: number;
  name: string;
  config: T;
}
