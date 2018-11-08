import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalAssistantWelcomeOverlayComponent } from './personal-assistant-welcome-overlay.component';

describe('PersonalAssistantWelcomeOverlayComponent', () => {
  let component: PersonalAssistantWelcomeOverlayComponent;
  let fixture: ComponentFixture<PersonalAssistantWelcomeOverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalAssistantWelcomeOverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalAssistantWelcomeOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
