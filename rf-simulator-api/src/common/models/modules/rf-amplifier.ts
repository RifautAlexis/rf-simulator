export class RfAmplifier {
    type: number = 1;
    name: string = 'RF Amplifier';
    description: string = 'An RF amplifier module for signal amplification.';
  constructor(
    public model: string = 'LNA-3000',
    public gain: number = 20, // db
    public noiseFigure: number = 1.2, // db
    public linearity: number,
    public bandwidth: number,
    public inputPower: number = -10, // dbm
    public outputPower: number = 20, // dbm
    public efficiency: number = 0.85, // 85%
    public inputImpedance: number = 50, // ohm
    public outputImpedance: number = 50, // ohm,
    public frequencyRange: {
        min: number;
        max: number;
    } = { min: 300000000, max: 3000000000 }, // 300 MHz to 3 GHz
    public temperature: number,
  ) {}
}
