import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CargaPartidoPage } from './carga-partido.page';

describe('CargaPartidoPage', () => {
  let component: CargaPartidoPage;
  let fixture: ComponentFixture<CargaPartidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaPartidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CargaPartidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
