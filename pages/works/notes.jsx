import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { OutLayout } from '../../components/layout/article'
import { Paragraph } from '../../components/styles/paragraph'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => (
  <OutLayout title="note app">
    <Container>
      <Title>
        Notes App <Badge>2022</Badge>
      </Title>
      <Paragraph>
        A notes application using Next JS with all functionalites like
        authentication, authorization, and the all CRUD operations
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://notes-liart-two.vercel.app/">
            https://notes-liart-two.vercel.app/
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Browser</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next JS, Typescript, Prisma, TailwindCSS, Next Auth, React Query,
            React Hot Toast, Axios
          </span>
        </ListItem>
      </List>
      <WorkImage src="/images/notes-app.png" alt="notes app" />
    </Container>
  </OutLayout>
)

export default Work
