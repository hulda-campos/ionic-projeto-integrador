import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesExcluirPage } from './clientes-excluir.page';

describe('ClientesExcluirPage', () => {
  let component: ClientesExcluirPage;
  let fixture: ComponentFixture<ClientesExcluirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesExcluirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesExcluirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
