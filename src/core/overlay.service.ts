import { Injectable, Inject } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { PersonalAssistantWelcomeOverlayComponent } from '../app/personal-assistant-welcome-overlay/personal-assistant-welcome-overlay.component';
import { PersonalAssistantOverlayRef } from './overlay.ref';

interface PersonalAsssistantOverlay {
  panelClass?: string;
  hasBackdrop?: boolean;
  backdropClass?: string;
}

const DEFAULT_CONFIG: PersonalAsssistantOverlay = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel'
}

@Injectable()
export class OverlayService {

  constructor(
    private overlay: Overlay) { }

  open(config: PersonalAsssistantOverlay = {}) {
    const overlayConfig = { ...DEFAULT_CONFIG, ...config };

    // Returns an OverlayRef which is a PortalHost
    const overlay = this.createOverlay(overlayConfig);

    // Instantiate remote control
    const overlayRef = new PersonalAssistantOverlayRef(overlay);

    // Create ComponentPortal that can be attached to a PortalHost
    const portal = new ComponentPortal(PersonalAssistantWelcomeOverlayComponent);

    // Attach ComponentPortal to PortalHost
    overlay.attach(portal);

    return overlayRef;
  }

  private createOverlay(config: PersonalAsssistantOverlay) {
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  private getOverlayConfig(config: PersonalAsssistantOverlay): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .global()
      .centerHorizontally()
      .centerVertically();
    
    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });

    return overlayConfig;
  }
}