export interface ModuleConfig {
    slot: number;
    name: string;
    model: string;
    description: string;
    settings: ModuleSetting[];
    metrics: ModuleMetric[];
}

export interface ModuleSetting {
    name: string;
    currentValue: string | number | boolean;
}
export interface ModuleMetric {
    name: string;
    currentValue: string | number | boolean;
}