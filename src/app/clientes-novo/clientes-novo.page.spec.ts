import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesNovoPage } from './clientes-novo.page';

describe('ClientesNovoPage', () => {
  let component: ClientesNovoPage;
  let fixture: ComponentFixture<ClientesNovoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesNovoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesNovoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
