import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { OutLayout } from '../../components/layout/article'
import { Paragraph } from '../../components/styles/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <OutLayout title="movies app">
    <Container>
      <Title>
        Movies App <Badge>2019</Badge>
      </Title>
      <Paragraph>
        A full Movies Application sing React JS and Redux with animations
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link target="_blank" href="https://qr1vz.csb.app/">
            https://qr1vz.csb.app/
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, Redux, React Router, React Moment, Moment</span>
        </ListItem>
      </List>
      <WorkImage src="/images/full-movies-app.png" alt="Movies Application" />
    </Container>
  </OutLayout>
)

export default Work
