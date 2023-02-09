import * as ScrollArea from '@radix-ui/react-scroll-area'
import { styled } from '@siakit/core'

const SCROLLBAR_SIZE = 8

export const ScrollAreaRoot = styled(ScrollArea.Root, {
  overflow: 'hidden',
})

export const ScrollAreaViewport = styled(ScrollArea.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
})

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  transition: 'background 160ms ease-out',

  '&[data-orientation="vertical"]': {
    width: SCROLLBAR_SIZE,
  },
})

export const ScrollAreaThumb = styled(ScrollArea.Thumb, {
  flex: 1,
  background: '$gray7',
  borderRadius: SCROLLBAR_SIZE,
  position: 'relative',

  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
})
