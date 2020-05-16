import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpertPage } from './expert.page';

describe('ExpertPage', () => {
  let component: ExpertPage;
  let fixture: ComponentFixture<ExpertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
