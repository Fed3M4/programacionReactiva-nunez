import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosLosCursosComponent } from './todos-los-cursos.component';

describe('TodosLosCursosComponent', () => {
  let component: TodosLosCursosComponent;
  let fixture: ComponentFixture<TodosLosCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosLosCursosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodosLosCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
