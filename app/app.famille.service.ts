import { Injectable } from '@angular/core';

import { Membre } from './membre';
import { MEMBRES } from './mock-famille';

@Injectable()
export class FamilleService {
  getFamille(): Membre[] {
    return MEMBRES;
  }
}
