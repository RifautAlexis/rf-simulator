import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ModuleConfig } from './models/module-config';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFloatButtonModule } from 'ng-zorro-antd/float-button';

@Component({
  templateUrl: './simulator-config.component.html',
  imports: [CommonModule, NzCollapseModule, NzIconModule, NzFloatButtonModule],
})
export class SimulatorConfigComponent {
  modules = signal<(ModuleConfig & { active: boolean })[]>([]);

  constructor() {
    this.modules.set([
      {
        slot: 1,
        name: 'Module 1',
        model: 'Model A',
        description: 'Description of Module 1',
        settings: [
          { name: 'Setting 1', currentValue: 'Value 1' },
          { name: 'Setting 2', currentValue: 'Value 2' },
        ],
        metrics: [
          { name: 'Metric 1', currentValue: 10 },
          { name: 'Metric 2', currentValue: 20 },
        ],
        active: true,
      },
      {
        slot: 2,
        name: 'Module 2',
        model: 'Model B',
        description: 'Description of Module 2',
        settings: [
          { name: 'Setting A', currentValue: true },
          { name: 'Setting B', currentValue: false },
        ],
        metrics: [
          { name: 'Metric A', currentValue: 30 },
          { name: 'Metric B', currentValue: 40 },
        ],
        active: false,
      },
    ]);
  }

  deleteModule(module: ModuleConfig): void {
    this.modules.update((modules) => modules.filter((m) => m.slot !== module.slot));
  }

  addModule(): void {
    this.modules.update((modules) => {
      const newSlot = modules.length ? Math.max(...modules.map((m) => m.slot)) + 1 : 1;

      return [
        ...modules,
        {
          slot: newSlot,
          name: `Module ${newSlot}`,
          model: `Model ${String.fromCharCode(64 + newSlot)}`,
          description: `Description of Module ${newSlot}`,
          settings: [],
          metrics: [],
          active: true,
        },
      ];
    });
  }
}
