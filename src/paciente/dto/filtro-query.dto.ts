import { IsString } from 'class-validator'
import { PaginacionQueryDto } from 'src/application/common/dto/paginacion-query.dto'

export class FiltroPersonaDto extends PaginacionQueryDto {
  @IsString()
  nroDocumento: string
}
