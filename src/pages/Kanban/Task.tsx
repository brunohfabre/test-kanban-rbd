import { Draggable } from '@hello-pangea/dnd'
import { Card } from '@siakit/card'

import { TaskType } from './initialData'

type TaskProps = {
  task: TaskType
  index: number
  disabled: boolean
}

export function Task({ task, index, disabled }: TaskProps) {
  return (
    <Draggable draggableId={task.id} index={index} isDragDisabled={disabled}>
      {(provided) => (
        <Card
          padding
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </Card>
      )}
    </Draggable>
  )
}
