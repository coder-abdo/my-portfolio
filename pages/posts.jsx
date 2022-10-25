import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-items'
import { OutLayout } from '../components/layout/article'
import { Section } from '../components/section'
import postOne from '../public/images/post-1.png'
import postTwo from '../public/images/post-2.png'
import postThree from '../public/images/post-3.png'
const Posts = () => (
  <OutLayout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
    </Container>
    <Section delay={0.1}>
      <SimpleGrid columns={[1, 2, 2]} gap={6}>
        <WorkGridItem
          title="
ECMAScript 2015 AKA ES6 why, what and how episode 1"
          href="https://nfpdiscussions.udacity.com/t/ecmascript-2015-aka-es6-why-what-and-how-episode-1/165208"
          thumbnail={postOne}
        />
        <WorkGridItem
          title="ECMAScript 2015 AKA ES6 why, what and how episode 2"
          href="https://nfpdiscussions.udacity.com/t/ecmascript-2015-aka-es6-why-what-and-how-episode-2/217499"
          thumbnail={postTwo}
        />
        <WorkGridItem
          title="ECMAScript 2015 AKA ES6 why, what and how episode 3"
          href="https://nfpdiscussions.udacity.com/t/ecmascript-2015-aka-es6-why-what-and-how-episode-3-arrow-functions/297754/23"
          thumbnail={postThree}
        />
      </SimpleGrid>
    </Section>
  </OutLayout>
)
export default Posts
