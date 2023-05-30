import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameBoardHeaderComponent } from './game-board-header.component';

describe('GameBoardHeaderComponent', () => {
  let component: GameBoardHeaderComponent;
  let fixture: ComponentFixture<GameBoardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameBoardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameBoardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
