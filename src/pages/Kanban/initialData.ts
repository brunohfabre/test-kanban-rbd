export type ItemType = {
  id: string
  content: string
}

export type ColumnType = {
  id: string
  title: string
  items: string[]
}

export type KanbanData = {
  items: { [key: string]: ItemType }
  columns: { [key: string]: ColumnType }
  order: string[]
}

export const initialData = {
  items: {
    'item-1': {
      id: 'item-1',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-2': {
      id: 'item-2',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-3': {
      id: 'item-3',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-4': {
      id: 'item-4',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-5': {
      id: 'item-5',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-6': {
      id: 'item-6',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-7': {
      id: 'item-7',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-8': {
      id: 'item-8',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-9': {
      id: 'item-9',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-10': {
      id: 'item-10',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-11': {
      id: 'item-11',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    'item-12': {
      id: 'item-12',
      content:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      items: [
        'item-1',
        'item-2',
        'item-3',
        'item-4',
        'item-5',
        'item-6',
        'item-7',
        'item-8',
        'item-9',
        'item-10',
        'item-11',
        'item-12',
      ],
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      items: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      items: [],
    },
    'column-4': {
      id: 'column-4',
      title: 'Done',
      items: [],
    },
    'column-5': {
      id: 'column-5',
      title: 'Done',
      items: [],
    },
    'column-6': {
      id: 'column-6',
      title: 'Done',
      items: [],
    },
  },
  order: [
    'column-1',
    'column-2',
    'column-3',
    'column-4',
    'column-5',
    'column-6',
  ],
} as KanbanData
