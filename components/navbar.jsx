import NextLink from 'next/link'
import {
  useColorModeValue,
  Link,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import Logo from './logo'
import { HamburgerIcon } from '@chakra-ui/icons'
import { ThemeToggleButton } from './theme-toggle-button'

const LinkItem = ({ path, href, children }) => {
  const isActive = path === href
  const inActiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={isActive ? 'grassTeal' : undefined}
        color={isActive ? '#202023' : inActiveColor}
      >
        {children}
      </Link>
    </NextLink>
  )
}
export const Navbar = ({ path, ...rest }) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...rest}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        align="center"
        justifyContent="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem path={path} href="/works">
            Works
          </LinkItem>
          <LinkItem path={path} href="/posts">
            Posts
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
