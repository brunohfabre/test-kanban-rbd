import { Droppable } from '@hello-pangea/dnd'
import { Heading } from '@siakit/heading'
import { Flex } from '@siakit/layout'

import { ColumnType, TaskType } from './initialData'
import { Task } from './Task'

type ColumnProps = {
  column: ColumnType
  tasks: TaskType[]
  disabled: boolean
}

export function Column({ column, tasks, disabled }: ColumnProps) {
  return (
    <Flex direction="column" gap={8} width={320}>
      <Heading size="sm" weight="medium">
        {column.title}
      </Heading>

      <Droppable droppableId={column.id}>
        {(provided) => (
          <Flex
            direction="column"
            css={{ flexGrow: 1 }}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                disabled={disabled}
              />
            ))}
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </Flex>
  )
}
