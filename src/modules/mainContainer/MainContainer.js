
import React, { ReactNode } from 'react';
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
} from '@chakra-ui/react';
import {
  FiBriefcase,
  FiSettings,
} from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import { NavItem, MobileNav } from '../../components/NavItem';
import { STORE_NAME } from '../../constants';


const LinkItems = [
  { name: 'Productos', icon: FiBriefcase, path: '/products' },
  { name: 'Login por mientras', icon: FiSettings, path: '/login' },
  { name: 'Inventario', icon: FiSettings, path: '/inventory' },
];

export default function MainContainer({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    {/* className='background' */}
      <Box className='background' minH="100vh" >

      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>



      </Box>

    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {STORE_NAME}
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <>
          <RouterLink to={link.path}>
            <NavItem key={link.name} icon={link.icon}>
              {link.name}
            </NavItem>
          </RouterLink>
        </>
      ))}
    </Box>

  );
};

