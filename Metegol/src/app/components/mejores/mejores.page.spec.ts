import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MejoresPage } from './mejores.page';

describe('MejoresPage', () => {
  let component: MejoresPage;
  let fixture: ComponentFixture<MejoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MejoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
