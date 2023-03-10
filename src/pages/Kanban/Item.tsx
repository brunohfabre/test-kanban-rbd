import { useContext } from 'react'

import { Draggable } from '@hello-pangea/dnd'
import { Card } from '@siakit/card'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

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
        <Flex
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          padding="0 0 8px"
        >
          <Card padding={6}>
            <Flex padding={6}>
              <Text>{item.content}</Text>
            </Flex>
          </Card>
        </Flex>
      )}
    </Draggable>
  )
}
