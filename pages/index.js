import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoCodepen, IoLogoLinkedin } from 'react-icons/io'
import { Section } from '../components/section'
import { Paragraph } from '../components/styles/paragraph'
import { BioSection, BioYear } from '../components/styles/bio'
import { OutLayout } from '../components/layout/article'

export default function Home() {
  return (
    <OutLayout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
        >
          <Heading as="h2" align="center" textColor="white">
            Hello, I&apos;m a full-stack developer based in Egypt
          </Heading>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Abdelmonaem Shahat
            </Heading>
            <p>Digital Craftsman (Developer / Designer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              alt="porfolio avatar"
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              width="100px"
              height="100px"
              display="inline-block"
              objectFit="contain"
              borderRadius="full"
              src="/images/my-avatar.jpg"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Abdelmonaem is a full stack developer and full passion of building
            software applications for all things, from planning all the way to
            solve real life problems wih code.I love learning new stuffs and
            currently I was learning the META Back-End path on Coursera platform{' '}
            <NextLink href="https://www.coursera.org/learn/introduction-to-back-end-development">
              <Link>Meta Back End</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />}>My Portfolio</Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1988</BioYear>
            Born in Qena, Egypt
          </BioSection>
          <BioSection>
            <BioYear>2011</BioYear>I got the Bachlore Degree from Asyut
            University in the Engineering | Civil Engineering Departement
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Start learning Programming starting with JS and Front-End
            Development on my own as a self taught person.
          </BioSection>
          <BioSection>
            <BioYear>2020 to present</BioYear>
            work as a front end developer and React Tutor at Udacity
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I 🥰
          </Heading>
          <Paragraph>
            Art, Music, Reading Books and Novels, and watching Animes and Series
          </Paragraph>
        </Section>
        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On The Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/coder-abdo" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @coder-abdo
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/abdelmonaem-shahat/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  Abdelmonaem Shahat
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://codepen.io/Abdelmonaem" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoCodepen />}
                >
                  @Abdelmonaem
                </Button>
              </Link>
            </ListItem>
          </List>
          <Box align="center" my={4}>
            <NextLink href="/posts" passHref scroll={false}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Popular posts
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </OutLayout>
  )
}
