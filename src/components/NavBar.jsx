import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image } from '@chakra-ui/react'

import logoImage from '../images/Img02.png'

const NavBar = () => {
  return (
    <div>
        
        <Flex bg='#A58ABF' color='#0A0909' p={2} align='center' justify='space-between'>
            <Box >
                <Image src={logoImage} alt="Gamer-Store Logo" w={50} h={50} objectFit="cover" borderRadius="10px"/>
            </Box>
            <Spacer />

            <Menu>
                <MenuButton>
                    Nuestros Productos
                </MenuButton>
                <MenuList>
                    <MenuItem>Audifonos</MenuItem>
                    <MenuItem>Teclados</MenuItem>
                    <MenuItem>Mouse</MenuItem>
                </MenuList>
            </Menu>


            <Spacer />
            <Box >
                <CartWidget />
            </Box>
        </Flex>



    </div>
  )
}

export default NavBar