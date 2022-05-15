import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        初めまして！私はWebエンジニアを目指している大学生です！
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Atomu Ishida
          </Heading>
          <p>静岡県立大学 経営情報学部 経営情報学科所属</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/atomu.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Study
        </Heading>
        <Paragraph>
          私は静岡県立大学の経営情報学部に所属し、経営学や経済学、情報について学んでいます。
          また、研究室は六井研究室に所属し機械学習を用いたデータ分析を研究しています。
          大学1年生からプログラミングの勉強を初め、オンラインプログラミングスクールに通い、HTML/CSSやJavaScriptなどのWebサイト制作について学びました。
          ２年生からは現役のエンジニアの方にメンターをしていただきRailsを用いたWEBアプリ開発を学びました。
          ２年生の12月から現在(2022年5月)までWebエンジニアとしてインターンをしており、フロントとサーバーの両方の開発に携わっています。
          フロントではVueやTypeScript、サーバーはRailsを使っています。
          夏には株式会社CARTA
          HOLDINGSのTreasureというサマーインターンに参加します。
          <NextLink href="/works/inkdrop" passHref scroll={false}>
            <Link>「CHONPS」</Link>
          </NextLink>
          はインターン先で開発している、日本初、食事の「質」に注目したパーソナル生活習慣指導サービスです。
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          愛知県名古屋市生まれ
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          静岡県立大学 経営情報学部 経営情報学科 (卒業予定)
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          好きなこと
        </Heading>
        <Paragraph>
          サッカー、筋トレ、ギター、最新技術のキャッチアップ
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Atomu-Ishida" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @github
              </Button>
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoTwitter />}
              >
                @inkdrop_app (English)
              </Button>
            </Link>
          </ListItem> */}
        </List>
        <Box align="center" my={4}>
          <NextLink href="/posts" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              投稿記事
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
