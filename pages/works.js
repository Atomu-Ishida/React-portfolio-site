import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbCHONPS from '../public/images/works/CHONPS.png'

const Works = () => (
  <Container>
    <Heading as="h3" fontSize={20} mb={4}>
      Works
    </Heading>

    <SimpleGrid gap={6}>
      <Section>
        <WorkGridItem id="CHONPS" title="CHONPS" thumbnail={thumbCHONPS}>
          インターン先で開発しているサービス
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </Container>
)

export default Works
