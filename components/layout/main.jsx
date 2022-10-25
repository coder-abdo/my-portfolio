import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'
import { Navbar } from '../navbar'

export const Layout = ({ children, router }) => (
  <Box as="main" pb={8}>
    <Head>
      <meta name="viewport" content="width=device-width,intial-scale=1.0" />
      <title>Abdelmonaem Shahat - HomePage</title>
    </Head>
    <Navbar path={router.asPath} />
    <Container maxW="container.md" pt={14}>
      {children}
    </Container>
  </Box>
)
