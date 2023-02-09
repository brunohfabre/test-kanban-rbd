import { createContext, ReactNode, useState } from 'react'

import { DropResult } from '@hello-pangea/dnd'

import { initialData } from './initialData'

export type ItemType = {
  id: string
  content: string
}

export type ColumnType = {
  id: string
  title: string
  items: string[]
}

type KanbanContextData = {
  items: { [key: string]: ItemType }
  columns: { [key: string]: ColumnType }
  order: string[]
  onDragStart: () => void
  onDragEnd: (result: DropResult) => void
  isDragDisabled: boolean
}

export const KanbanContext = createContext({} as KanbanContextData)

type KanbanContextProviderProps = {
  children: ReactNode
}

export function KanbanContextProvider({
  children,
}: KanbanContextProviderProps) {
  const [data, setData] = useState(initialData)
  const [isDragDisabled, setIsDragDisabled] = useState(false)

  function onDragStart() {
    setIsDragDisabled(true)
  }

  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result

    if (!destination) {
      setIsDragDisabled(false)

      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      setIsDragDisabled(false)

      return
    }

    const isPlaceholder = destination.droppableId.includes('placeholder')
    const destinationDroppableId = destination.droppableId.replace(
      '-placeholder',
      '',
    )

    const start = data.columns[source.droppableId]
    const finish =
      data.columns[
        isPlaceholder ? destinationDroppableId : destination.droppableId
      ]

    if (start === finish) {
      const newTaskIds = Array.from(start.items)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(
        isPlaceholder
          ? data.columns[destinationDroppableId].items.length
          : destination.index,
        0,
        draggableId,
      )

      const newColumn = {
        ...start,
        items: newTaskIds,
      }

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      }

      setData(newState)
      setIsDragDisabled(false)

      return
    }

    const startTaskIds = Array.from(start.items)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      items: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.items)
    finishTaskIds.splice(
      isPlaceholder
        ? data.columns[destinationDroppableId].items.length
        : destination.index,
      0,
      draggableId,
    )
    const newFinish = {
      ...finish,
      items: finishTaskIds,
    }

    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [start.id]: newStart,
        [finish.id]: newFinish,
      },
    }

    setData(newState)
    setIsDragDisabled(false)
  }

  return (
    <KanbanContext.Provider
      value={{
        items: data.items,
        columns: data.columns,
        order: data.order,
        onDragStart,
        onDragEnd,
        isDragDisabled,
      }}
    >
      {children}
    </KanbanContext.Provider>
  )
}
