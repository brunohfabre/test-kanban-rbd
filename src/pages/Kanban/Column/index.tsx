import { useContext } from 'react'

import { Droppable } from '@hello-pangea/dnd'
import { Heading } from '@siakit/heading'
import { Flex } from '@siakit/layout'

import { KanbanContext } from '../context'
import { Item } from '../Item'
import {
  ScrollAreaRoot,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from './styles'

type ColumnProps = {
  id: string
}

export function Column({ id }: ColumnProps) {
  const { columns } = useContext(KanbanContext)

  const column = columns[id]

  return (
    <Flex direction="column" width={320} css={{ backgroundColor: 'tomato' }}>
      <Heading size="sm" weight="medium">
        {column.title}
      </Heading>

      <ScrollAreaRoot type="always">
        <ScrollAreaViewport>
          <Droppable droppableId={column.id}>
            {(provided) => (
              <Flex
                direction="column"
                css={{ flexGrow: 1, backgroundColor: 'blue' }}
                padding="0 8px"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {column.items.map((itemId, index) => (
                  <Item key={itemId} id={itemId} index={index} />
                ))}
                {provided.placeholder}
              </Flex>
            )}
          </Droppable>
        </ScrollAreaViewport>

        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>

      <Droppable droppableId={`${column.id}-placeholder`}>
        {(provided) => (
          <Flex
            direction="column"
            css={{ flexGrow: 1, backgroundColor: 'green' }}
            padding="0 8px"
            ref={provided.innerRef}
            {...provided.droppableProps}
          />
        )}
      </Droppable>
    </Flex>
  )
}
