import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/core/entities/cliente/cliente.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteService, private messageService: MessageService) { }

  ngOnInit() {
    this.clienteService.list().subscribe((data) => {
      console.log(data);
    });
  }

}
