import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    // useBreakpointValue,
    // IconProps,
    // Icon,
    Image
} from '@chakra-ui/react';
import { URL_MAIN_INVENTORY_IMAGE } from '../../constants';
import { Link as RouterLink } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export default function MainInventory() {

    const { user } = useContext(UserContext);

    return (
        <div>
            <Box position={'relative'}>
                <Container
                    as={SimpleGrid}
                    maxW={'7xl'}
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 32 }}
                    py={{ base: 10, sm: 20, lg: 32 }}>
                    <Stack spacing={{ base: 10 }}>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                            Crea tu producto
                        </Heading>
                        <Heading>
                            <Text
                                as={'span'}
                                bgGradient="linear-gradient(265deg, rgba(0,0,0,1) 0%, rgba(148,187,233,1) 100%)"
                                bgClip="text">
                                Organiza de manera profesional tu inventario
                            </Text>
                        </Heading>
                        {user !== null ?
                            <RouterLink to='/manage-inventory'>
                                <Button
                                    fontFamily={'heading'}
                                    bgGradient="linear(to-r, red.400,pink.400)"
                                    color={'white'}
                                    _hover={{
                                        bgGradient: 'linear(to-r, red.400,pink.400)',
                                        boxShadow: 'xl',
                                    }}>
                                    Ver inventario
                                </Button>
                            </RouterLink>
                            : <></>}
                    </Stack>
                    <Stack
                        bg={'gray.50'}
                        rounded={'xl'}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: 'lg' }}>
                        <Stack spacing={4}>
                            <Image src={URL_MAIN_INVENTORY_IMAGE} />
                            <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                                Accede a la mejor marketplace del mercado y deja que miles de personas conozcan tu producto.
                                Sé parte de esta gran comunidad. <br />
                                ¡Comienza Ahora!
                            </Text>
                        </Stack>

                        <Box spacing={4} as={'form'} mt={20}>
                            <RouterLink to='/create-product'>
                                <Button
                                    fontFamily={'heading'}
                                    mt={8}
                                    w={'full'}
                                    bgGradient="linear(to-r, red.400,pink.400)"
                                    color={'white'}
                                    _hover={{
                                        bgGradient: 'linear(to-r, red.400,pink.400)',
                                        boxShadow: 'xl',
                                    }}>
                                    Crear Producto
                                </Button>
                            </RouterLink>
                            {user === null ? <Stack spacing={4}>

                                <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                                    <RouterLink to='/login' color='teal.500'>
                                        O Inicia sesión para ver tu inventario
                                    </RouterLink>
                                </Text>
                            </Stack> : <></>}

                        </Box>
                        form
                    </Stack>
                </Container>

            </Box>
        </div >
    );
}