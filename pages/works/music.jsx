import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { OutLayout } from '../../components/layout/article'
import { Paragraph } from '../../components/styles/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <OutLayout title="Music app">
    <Container>
      <Title>
        Music App <Badge>2020</Badge>
      </Title>
      <Paragraph>
        A full Music Application sing React JS and Redux with animations
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://le415.csb.app/">
            https://le415.csb.app/
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            React, Typescript, Context, Hooks, React Router, Axios, Immer{' '}
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/music-lyrics.png" alt="Movies Application" />
    </Container>
  </OutLayout>
)

export default Work
