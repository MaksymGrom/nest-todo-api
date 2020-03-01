import { Controller } from '@nestjs/common';
import { TodoService } from '../services/todo.service';
import { Todo } from '../entities/todo.entity';
import { ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';

@Crud({
  model: {
    type: Todo
  }
})
@ApiTags('todo')
@Controller('rest/todo')
export class TodoController implements CrudController<Todo> {
  constructor(public service: TodoService) {}
}
