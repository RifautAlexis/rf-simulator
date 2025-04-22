export interface Module<T = unknown> {
  type: number;
  name: string;
  slot: number;
  config: T;
}
