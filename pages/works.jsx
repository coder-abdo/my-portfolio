import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-items'
import { Section } from '../components/section'
import FullMoviesApp from '../public/images/full-movies-app.png'
import MusicLyrics from '../public/images/music-lyrics.png'
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
      </SimpleGrid>
    </Container>
  )
}
export default Works
