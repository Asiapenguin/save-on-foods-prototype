import { OverlayRef } from '@angular/cdk/overlay';

export class PersonalAssistantOverlayRef {

  constructor(private overlayRef: OverlayRef) { }

  close(): void {
    this.overlayRef.dispose();
  }
}

