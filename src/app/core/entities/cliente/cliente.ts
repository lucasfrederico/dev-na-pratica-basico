import * as moment from 'moment';
import { ClienteDto } from './cliente-dto';

export class Cliente {
    public id?: string;
    public cpfCNPJ: string;
    public createdBy?: string;
    public createdDate?: Date;
    public lastModifiedBy?: string;
    public lastModifiedDate?: Date;
    public custom?: any;

    public static fromDto(clienteDto: ClienteDto, originEntity?: string): Cliente {
        const model: any = { ...clienteDto };

        model.createdDate = model.createdDate && moment(model.createdDate).toDate();
        model.lastModifiedDate = model.lastModifiedDate && moment(model.lastModifiedDate).toDate();

        return model as Cliente;
    }

    public static toDto(cliente: Cliente, originEntity?: string): ClienteDto {
        const dto: any = { ...cliente };

        dto.createdDate = dto.createdDate && moment(dto.createdDate).format();
        dto.lastModifiedDate = dto.lastModifiedDate && moment(dto.lastModifiedDate).format();

        delete dto.label;

        return dto;
    }
}
