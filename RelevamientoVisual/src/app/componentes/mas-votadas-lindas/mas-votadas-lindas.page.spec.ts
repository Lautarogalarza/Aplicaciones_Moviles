import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasVotadasLindasPage } from './mas-votadas-lindas.page';

describe('MasVotadasLindasPage', () => {
  let component: MasVotadasLindasPage;
  let fixture: ComponentFixture<MasVotadasLindasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasVotadasLindasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasVotadasLindasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
