import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNodeComponent } from './custom-node.component';

describe('CustomNodeComponent', () => {
  let component: CustomNodeComponent;
  let fixture: ComponentFixture<CustomNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomNodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
