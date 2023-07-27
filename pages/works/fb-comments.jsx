import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { OutLayout } from '../../components/layout/article'
import { Paragraph } from '../../components/styles/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <OutLayout title="facebook comments">
    <Container>
      <Title>
        Redesign Facebook Comments using Modern CSS<Badge>2023</Badge>
      </Title>
      <Paragraph>
        Redesign Facebook Comments section using Modern CSS like query container
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://fb-comments-design.vercel.app/">
            https://fb-comments-design.vercel.app/
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>HTML, CSS, Parcel Bundler</span>
        </ListItem>
      </List>
      <WorkImage src="/images/fb-comments.png" alt="notes app" />
    </Container>
  </OutLayout>
)

export default Work
