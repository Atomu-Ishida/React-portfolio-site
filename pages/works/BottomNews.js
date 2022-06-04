import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Bottom News App">
    <Container>
      <Title>Bottom News App</Title>
      <P>
        トップを飾るようなニュースだけではなくあまり、注目されないようなニュース(トップの逆のボトム)にも目を向けて欲しいと思いこのサイトを作りました
      </P>
      <P>
        本当はデプロイしたいんですけど、外部APIでNewsAPIを使っており有料プランに移行しなければならないのでデプロイできないです😭
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Bottom News App</Meta>
          <Link href="https://github.com/Atomu-Ishida/Bottom-news-app">
            https://github.com/Atomu-Ishida/Bottom-news-app
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/BottomNews.png" alt="Bottom News App" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
