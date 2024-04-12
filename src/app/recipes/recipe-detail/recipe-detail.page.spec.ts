import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeDetailPage } from './RecipeDetailPage';

describe('RecipeDetailPage', () => {
  let component: RecipeDetailPage;
  let fixture: ComponentFixture<RecipeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
