import { useContext } from 'react'

import { Draggable } from '@hello-pangea/dnd'
import { Card } from '@siakit/card'

import { KanbanContext } from './context'

type TaskProps = {
  id: string
  index: number
}

export function Item({ id, index }: TaskProps) {
  const { items, isDragDisabled } = useContext(KanbanContext)

  const item = items[id]

  return (
    <Draggable
      draggableId={item.id}
      index={index}
      isDragDisabled={isDragDisabled}
    >
      {(provided) => (
        <Card
          padding={12}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {item.content}
        </Card>
      )}
    </Draggable>
  )
}
