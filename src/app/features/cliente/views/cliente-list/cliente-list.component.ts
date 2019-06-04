import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/core/entities/cliente/cliente.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Cliente } from 'src/app/core/entities/cliente/cliente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[];
  columns: any[];

  constructor(private clienteService: ClienteService, private messageService: MessageService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.clienteService.list().subscribe(({ contents }) => {
      this.clientes = contents;
    });

    this.columns = this.getGridColumns();

  }

  private getGridColumns() {
    const gridcloumns = [
      { field: 'nome', header: 'Nome' },
      { field: 'dataNascimento', header: 'Data de Nascimento' },
      { field: 'creditoHabilitado', header: 'Credito Habilitado' },
      { field: 'cpf', header: 'CPF' },
    ];

    return gridcloumns;
  }

}
