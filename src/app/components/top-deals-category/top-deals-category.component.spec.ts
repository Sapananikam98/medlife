import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDealsCategoryComponent } from './top-deals-category.component';

describe('TopDealsCategoryComponent', () => {
  let component: TopDealsCategoryComponent;
  let fixture: ComponentFixture<TopDealsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopDealsCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopDealsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
