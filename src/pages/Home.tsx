import { useNavigate } from 'react-router-dom'

import { Button } from '@siakit/button'
import { Flex } from '@siakit/layout'

export function Home() {
  const navigate = useNavigate()

  function handleNavigateToKanban() {
    navigate('/kanban')
  }

  return (
    <Flex flex align="center" justify="center">
      <Button type="button" onClick={handleNavigateToKanban}>
        Go to kanban
      </Button>
    </Flex>
  )
}
