import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Cliente } from 'src/app/core/entities/cliente/cliente';
import { ClienteService } from 'src/app/core/entities/cliente/cliente.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {
  public clienteForm: FormGroup;
  @Input() cliente: Cliente;
  private routeParams: any;

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {

    this.clienteForm = this.getFormGroup();

  }

  private getFormGroup() {
    return this.formBuilder.group({
      nome: new FormControl(undefined, Validators.compose([Validators.required])),
      dataNascimento: new FormControl(undefined, Validators.compose([Validators.required])),
      creditoHabilitado: new FormControl(undefined, Validators.compose([Validators.required])),
      cpf: new FormControl(undefined, Validators.compose([Validators.required])),
    });
  }

  private validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsDirty({ onlySelf: true });
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
    });
  }

  public onSave() {
    if (!this.clienteForm.valid) {
      return this.validateAllFormFields(this.clienteForm);
    }

    this.getSaveObservable()
    .pipe(
      catchError((err: any) => {
      console.log(err);
      return throwError(err);
    })
    ).subscribe(() => {
      this.goBack();
      console.log(`Saved`);
    });
  }

  public isNew() {
    return true;
  }

  private goBack() {
    const previousRoute = '../';
    this.router.navigate([previousRoute], { relativeTo: this.route.parent });
}

  private getSaveObservable() {
    const { value } = this.clienteForm;
    const clienteDto = Cliente.toDto(value);

    let observable;

    if (this.isNew()) {
        observable = this.clienteService.insert(clienteDto);
    } else {
        const id = this.routeParams.pais;
        observable = this.clienteService.update(id, clienteDto);
    }

    return observable;
  }

}
