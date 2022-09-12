
import React, { ReactNode, useContext } from 'react';
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
import { UserContext } from '../../context/UserContext';





export default function MainContainer({
  children,
}: {
  children: ReactNode;
}) {

  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [isLogged, setIsLogged] = useState(false);


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

  const { user } = useContext(UserContext);

  const LinkItems = [
    { name: 'Marketplace', icon: FiBriefcase, path: '/products', show: true },
    { name: 'Crear Productos', icon: FiSettings, path: '/inventory', show: true },
    { name: 'Mi Inventario', icon: FiSettings, path: '/manage-inventory', show: (user !== null) ? true : false },
  ];

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
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          {STORE_NAME}
        </Text> */}
        <Text
          Text fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          as={'span'}
          bgGradient="linear(to-r, red.400,pink.400)"
          bgClip="text">
          {STORE_NAME}
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <>
          {link.show ?
            <RouterLink to={link.path}>
              <NavItem key={link.name} icon={link.icon}>
                {link.name}
              </NavItem>
            </RouterLink>
            : <></>
          }
        </>
      ))
      }
    </Box >

  );
};

