import { useContext } from 'react'

import { DragDropContext } from '@hello-pangea/dnd'
import { Flex } from '@siakit/layout'

import { Column } from './Column'
import { KanbanContext, KanbanContextProvider } from './context'

export function KanbanComponent() {
  const { onDragStart, onDragEnd, order } = useContext(KanbanContext)

  return (
    <Flex flex overflow>
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Flex flex gap>
          {order.map((columnId) => (
            <Column key={columnId} id={columnId} />
          ))}
        </Flex>
      </DragDropContext>
    </Flex>
  )
}

export function Kanban() {
  return (
    <KanbanContextProvider>
      <KanbanComponent />
    </KanbanContextProvider>
  )
}
