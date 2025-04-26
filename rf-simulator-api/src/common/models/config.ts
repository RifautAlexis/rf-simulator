export interface ModuleConfig {
    kind: ModuleKind;
    slot: number;
    name: string;
    model: string;
    description: string;
    settings: Record<string, any>;
    // metrics: Record<string, any>;
}

export interface Setting {
    kind: SettingKind;
    name: string;
    value: number | string | boolean;
    unit: string;
}

export enum ModuleKind {
    RF_AMPLIFIER,
}

export const enum SettingKind {
    InputPower,
    Frequency,
    Gain,
}

export const enum MetricKind {
    NoiseFigure,
    Linearity,
    Bandwidth,
    outputPower,
    Efficiency,
    InputImpedance,
    OutputImpedance,
    FrequencyRange,
    Temperature,
}