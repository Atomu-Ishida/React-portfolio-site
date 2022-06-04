import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Amazon Clone App">
    <Container>
      <Title>Amazon Clone App</Title>
      <P>Reactの勉強のアウトプットとしてAmazonクローンを作成しました</P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Amazon Clone</Meta>
          <Link href="https://clone-7bfe5.firebaseapp.com/">
            https://clone-7bfe5.firebaseapp.com/
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Amazon Clone.png" alt=" Amazon Clone" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
