import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientesAtualizarPage } from './clientes-atualizar.page';

describe('ClientesAtualizarPage', () => {
  let component: ClientesAtualizarPage;
  let fixture: ComponentFixture<ClientesAtualizarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesAtualizarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientesAtualizarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
