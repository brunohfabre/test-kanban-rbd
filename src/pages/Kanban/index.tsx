import { useState } from 'react'

import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { Flex } from '@siakit/layout'

import { Column } from './Column'
import { initialData } from './initialData'

export function Kanban() {
  const [data, setData] = useState(initialData)
  const [dragDisabled, setDragDisabled] = useState(false)

  function onDragEnd(result: DropResult) {
    const { destination, source, draggableId } = result

    if (!destination) {
      setDragDisabled(false)

      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      setDragDisabled(false)

      return
    }

    const start = data.columns[source.droppableId]
    const finish = data.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      }

      setData(newState)
      setDragDisabled(false)

      return
    }

    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
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
    setDragDisabled(false)
  }

  function onDragStart() {
    setDragDisabled(true)
  }

  console.log(dragDisabled)

  return (
    <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
      <Flex flex padding gap>
        {data.columnOrder.map((columnId) => {
          const column = data.columns[columnId]
          const tasks = column.taskIds.map((taskId) => data.tasks[taskId])

          return (
            <Column
              key={columnId}
              column={column}
              tasks={tasks}
              disabled={dragDisabled}
            />
          )
        })}
      </Flex>
    </DragDropContext>
  )
}
