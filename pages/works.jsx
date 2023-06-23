import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-items'
import { Section } from '../components/section'
import FullMoviesApp from '../public/images/full-movies-app.png'
import MusicLyrics from '../public/images/music-lyrics.png'
import MyBlog from '../public/images/my-blog.png'
import TwitterClone from '../public/images/twitter-clone.png'
import Notes from '../public/images/notes-app.png'
import FBComments from '../public/images/fb-comments.png'
const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="movies" title="movies" thumbnail={FullMoviesApp}>
            {' '}
            A full Movies Application using React and Redux
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="music" title="music" thumbnail={MusicLyrics}>
            {' '}
            A full Music Lyrics Application using React and Redux
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="blog" title="my blog" thumbnail={MyBlog}>
            {' '}
            My Blog which contains my posts and my articles
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="twitter"
            title="twitter clone"
            thumbnail={TwitterClone}
          >
            {' '}
            A simple version of twitter using T3 Stack.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="notes" title="notes" thumbnail={Notes}>
            {' '}
            A full notes app with authentication and authorization & whole crud
            operations.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="fb-comments"
            title="fb-comments"
            thumbnail={FBComments}
          >
            {' '}
            A Redesign for Facebook Comments sections using Modern CSS.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}
export default Works
