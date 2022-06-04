import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbCHONPS from '../public/images/works/CHONPS.png'
import thumbAmazonClone from '../public/images/works/Amazon clone.png'
import thumbBottomNews from '../public/images/works/BottomNews.png'
import thumbRaclass from '../public/images/works/Raclass.png'

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

    <SimpleGrid gap={6}>
      <Section>
        <WorkGridItem
          id="AmazonClone"
          title="Amazonクローン"
          thumbnail={thumbAmazonClone}
        >
          Amazon Clone App
        </WorkGridItem>
      </Section>
    </SimpleGrid>

    <SimpleGrid gap={6}>
      <Section>
        <WorkGridItem
          id="BottomNews"
          title="BottomNewsApp"
          thumbnail={thumbBottomNews}
        >
          Bottom News App
        </WorkGridItem>
      </Section>
    </SimpleGrid>

    <SimpleGrid gap={6}>
      <Section>
        <WorkGridItem id="Raclass" title="らくラス" thumbnail={thumbRaclass}>
          Bottom News App
        </WorkGridItem>
      </Section>
    </SimpleGrid>
  </Container>
)

export default Works
