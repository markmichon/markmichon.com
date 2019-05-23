import React from 'react'
import { Box, Text, Flex } from './Radicals'
import Logo from './Logo'
import { UnstyledLink } from './Links'

const links = [
  {
    path: '/writing',
    name: 'Writing',
  },
  {
    path: '/projects',
    name: 'Projects',
  },
  {
    path: '/contact',
    name: 'Contact',
  },
]

const Footer = (...props) => (
  <Box as="footer" {...props}>
    <Flex justifyContent="center" mt={4}>
      <UnstyledLink to="/">
        <Logo size="48" />
      </UnstyledLink>
    </Flex>
    <Flex justifyContent="center">
      {links.map((link, idx) => (
        <UnstyledLink key={idx} to={link.path}>
          {link.name}
        </UnstyledLink>
      ))}
    </Flex>
  </Box>
)
export default Footer
