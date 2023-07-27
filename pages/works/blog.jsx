import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { OutLayout } from '../../components/layout/article'
import { Paragraph } from '../../components/styles/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <OutLayout title="my blog">
    <Container>
      <Title>
        My Blog <Badge>2023</Badge>
      </Title>
      <Paragraph>My Blog which contains my articles and posts</Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://my-blog-snowy-delta.vercel.app/">
            https://my-blog-snowy-delta.vercel.app/
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Astro JS</span>
        </ListItem>
      </List>
      <WorkImage src="/images/my-blog.png" alt="My Blog" />
    </Container>
  </OutLayout>
)

export default Work
