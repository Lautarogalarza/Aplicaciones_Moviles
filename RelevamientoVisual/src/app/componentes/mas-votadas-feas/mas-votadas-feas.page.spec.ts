import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasVotadasFeasPage } from './mas-votadas-feas.page';

describe('MasVotadasFeasPage', () => {
  let component: MasVotadasFeasPage;
  let fixture: ComponentFixture<MasVotadasFeasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasVotadasFeasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasVotadasFeasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
