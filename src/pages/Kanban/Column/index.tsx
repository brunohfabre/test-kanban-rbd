import { useContext } from 'react'

import { Question, Plus, DotsThree } from 'phosphor-react'

import { Droppable } from '@hello-pangea/dnd'
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '@siakit/dropdown'
import { Heading } from '@siakit/heading'
import { IconButton } from '@siakit/icon-button'
import { Flex } from '@siakit/layout'
import { Tooltip } from '@siakit/tooltip'

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
    <Flex direction="column" width={320} css={{ backgroundColor: '$gray3' }}>
      <Flex
        height={32}
        padding="0 8px"
        align="center"
        justify="between"
        css={{ flexShrink: 0 }}
      >
        <Heading size="xxs" weight="medium">
          {column.title}
        </Heading>

        <Flex>
          <Tooltip content="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
            <IconButton size="sm" colorScheme="gray" variant="ghost">
              <Question weight="bold" />
            </IconButton>
          </Tooltip>
          <IconButton size="sm" colorScheme="gray" variant="ghost">
            <Plus weight="bold" />
          </IconButton>

          <Dropdown>
            <DropdownTrigger>
              <IconButton size="sm" colorScheme="gray" variant="ghost">
                <DotsThree weight="bold" />
              </IconButton>
            </DropdownTrigger>

            <DropdownContent align="end">
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem>Option 3</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </Flex>
      </Flex>

      <ScrollAreaRoot type="always">
        <ScrollAreaViewport>
          <Droppable droppableId={column.id}>
            {(provided) => (
              <Flex
                direction="column"
                css={{ flexGrow: 1 }}
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
            css={{ flexGrow: 1 }}
            padding="0 8px"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {provided.placeholder}
          </Flex>
        )}
      </Droppable>
    </Flex>
  )
}
