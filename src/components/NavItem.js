import {
    IconButton,
    Link,
    Icon,
    Flex,
    useColorModeValue,
    Text,
    HStack,
    Menu,
    MenuButton,
    Avatar,
    VStack,
    MenuList,
    MenuItem,
    Box,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { Link as RouterLink } from 'react-router-dom';
import { STORE_NAME } from '../constants';
import { UserContext } from '../context/UserContext';
import { singOutUserService } from '../services/UserService';

async function singOut(setUser) {
    setUser(null);
    singOutUserService();
}

export const NavItem = ({ icon, children, ...rest }) => {
    //export const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: '#e5638d',
                    color: 'white',
                }}
                {...rest}>
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};

export const MobileNav = ({ onOpen, ...rest }) => {

    const { user, setUser } = useContext(UserContext);

    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent={{ base: 'space-between', md: 'flex-end' }}
            {...rest}>
            <IconButton
                display={{ base: 'flex', md: 'none' }}
                onClick={onOpen}
                variant="outline"
                aria-label="open menu"
                icon={<FiMenu />}
            />

            <Text
                display={{ base: 'flex', md: 'none' }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold">
                {STORE_NAME}
            </Text>

            <HStack spacing={{ base: '0', md: '6' }}>
                <Flex alignItems={'center'}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: 'none' }}>
                            <HStack>
                                <Avatar
                                    size={'sm'}
                                    src={
                                        'https://cdn-icons-png.flaticon.com/512/1144/1144709.png'
                                    }
                                />
                                <VStack
                                    display={{ base: 'none', md: 'flex' }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2">
                                    <Text fontSize="sm">{user !== null ? user : 'Iniciar Sesión'} </Text>
                                    <Text fontSize="xs" color="gray.600">
                                        {user !== null ? 'Cerrar Sesión' : ''}
                                    </Text>
                                </VStack>
                                <Box display={{ base: 'none', md: 'flex' }}>
                                    <FiChevronDown />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuList
                            bg={useColorModeValue('white', 'gray.900')}
                            borderColor={useColorModeValue('gray.200', 'gray.700')}>
                            {user == null ?
                                <>
                                    <RouterLink to='/login'><MenuItem>Iniciar Sesión</MenuItem></RouterLink>
                                    <RouterLink to='/create-user'><MenuItem>Crear Usuario</MenuItem></RouterLink>
                                </> :
                                <MenuItem onClick={() => singOut(setUser)} >Cerrar Sesión</MenuItem>}
                        </MenuList>
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};