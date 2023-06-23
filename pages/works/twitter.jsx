import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { OutLayout } from '../../components/layout/article'
import { Paragraph } from '../../components/styles/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <OutLayout title="Twitter Clone">
    <Container>
      <Title>
        Simple Twitter Clone <Badge>2022</Badge>
      </Title>
      <Paragraph>A simple version of twitter using T3 stack</Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://t3-twiiter-clone.vercel.app/">
            https://t3-twiiter-clone.vercel.app/
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, TRPC, Prisma, and Tailwindcss</span>
        </ListItem>
      </List>
      <WorkImage src="/images/twitter-clone.png" alt="twitter clone" />
    </Container>
  </OutLayout>
)

export default Work
