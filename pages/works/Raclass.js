import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CHONPS">
    <Container>
      <Title>らくラス</Title>
      <P>
        大学のオンライン授業でZoomを使う際にIDやパスワードをよく忘れてしまったり、課題がオンラインでの提出のため忘れてしまうことがしばしば
      </P>
      <P>
        そんな悩みを解決するアプリ、楽にクラス(授業)を受けることができる「らくラス」をノーコードツールであるGlideを使って開発しました。
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://quiet-breath-7760.glideapp.io/">
            https://quiet-breath-7760.glideapp.io/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/Raclass.png" alt="らくラス" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
