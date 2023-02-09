import { Flex } from '@siakit/layout'
import { Rectangle } from '@siakit/shimmer'

export function Shimmer() {
  return (
    <Flex flex gap overflow>
      <Flex direction="column" gap={8}>
        <Rectangle width={320} height={32} />
        <Rectangle width={320} height={128} />
        <Rectangle width={320} height={128} />
        <Rectangle width={320} height={128} />
      </Flex>
      <Flex direction="column" gap={8}>
        <Rectangle width={320} height={32} />
        <Rectangle width={320} height={128} />
      </Flex>
      <Flex direction="column" gap={8}>
        <Rectangle width={320} height={32} />
        <Rectangle width={320} height={128} />
        <Rectangle width={320} height={128} />
      </Flex>
      <Flex direction="column" gap={8}>
        <Rectangle width={320} height={32} />
      </Flex>
    </Flex>
  )
}
