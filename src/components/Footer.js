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
  <Box as="footer" {...props} p={4} mt={5}>
    <Flex justifyContent="center">
      <UnstyledLink to="/">
        <Logo size="48" />
      </UnstyledLink>
    </Flex>
    <Flex justifyContent="center">
      {/* {links.map((link, idx) => (
        <UnstyledLink key={idx} to={link.path}>
          {link.name}
        </UnstyledLink>
      ))} */}
      <Text fontSize=".675em" color="grey" mb={0}>
        All materials © Mark Michon 2019
      </Text>
    </Flex>
  </Box>
)
export default Footer
