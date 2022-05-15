import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbQiita from '../public/images/contents/Qiita.png'
import thumbQiita2 from '../public/images/contents/Qiita2.png'
import thumbQiita3 from '../public/images/contents/Qiita2.png'
import thumbQiita4 from '../public/images/contents/Qiita2.png'
// import thumb500PaidUsers from '../public/images/contents/blog-500-paid-users.jpg'
// import thumbFinancialGoal from '../public/images/contents/blog-financial-goal.png'
// import thumbHowToPriceYourself from '../public/images/contents/blog-how-to-price-yourself.jpg'
// import thumb50xFaster from '../public/images/contents/youtube-50x-faster.jpg'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        投稿記事
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="React チュートリアル アウトプット"
            thumbnail={thumbQiita}
            href="https://qiita.com/AtomuIshida/items/7bd03334918bbc4e7fe9"
          />
          <GridItem
            title="React チュートリアル リファクタ"
            thumbnail={thumbQiita2}
            href="https://qiita.com/AtomuIshida/items/1d7df86a8f71ee7b59c5"
          />
          <GridItem
            title="React TODO アプリ"
            thumbnail={thumbQiita3}
            href="https://qiita.com/AtomuIshida/items/fc5da97fc8297023fdc9"
          />
          <GridItem
            title="Redux TODO アプリ"
            thumbnail={thumbQiita4}
            href="https://qiita.com/AtomuIshida/items/5870eaf4171203269007"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
