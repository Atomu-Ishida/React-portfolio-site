import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="CHONPS">
    <Container>
      <Title>
        CHONPS <Badge>2022-</Badge>
      </Title>
      <P>
        「CHONPS™️」は、自分の身体・生活習慣を意識し課題を感じているが、「変化に気づかず諦めてしまう・誘惑に負けてしまう・負荷をかけすぎてしまう」などのように、自分だけでは改善が難しい人たち※に対し、日々の記録と食事指導で生活習慣の改善をサポートするサービスです。
        国家資格である管理栄養士が、ユーザー一人ひとりのパーソナル栄養士としてライフスタイルに合わせた専用プログラムを作成し、面談や専用アプリを使い、特許出願中の『質的栄養指導』を行う食事指導、その他の生活習慣までをサポートします。
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://chonps.jp/">
            https://chonps.jp/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/CHONPS.png" alt="CHONPS" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
