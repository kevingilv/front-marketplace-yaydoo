import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    useBreakpointValue,
    IconProps,
    Icon,
    Image
} from '@chakra-ui/react';
import { URL_MAIN_INVENTORY_IMAGE } from '../../constants';
import { Link as RouterLink } from 'react-router-dom';

export default function MainInventory() {
    return (
        <div>
            <Box position={'relative'}>
                <Container
                    as={SimpleGrid}
                    maxW={'7xl'}
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 32 }}
                    py={{ base: 10, sm: 20, lg: 32 }}>
                    <Stack spacing={{ base: 10, md: 20 }}>
                        <Heading
                            lineHeight={1.1}
                            fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                            Crea tu producto
                        </Heading>
                        <Heading>
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                Organiza de manera profesional tu inventario
                            </Text>
                        </Heading>
                    </Stack>
                    <Stack
                        bg={'gray.50'}
                        rounded={'xl'}
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: 'lg' }}>
                        <Stack spacing={4}>
                            <Image src={URL_MAIN_INVENTORY_IMAGE} />

                            {/* <Heading
                                color={'gray.800'}
                                lineHeight={1.1}
                                fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                                Join our team
                                <Text
                                    as={'span'}
                                    bgGradient="linear(to-r, red.400,pink.400)"
                                    bgClip="text">
                                    !
                                </Text>
                            </Heading> */}
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
                            <Stack spacing={4}>

                                <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                                    <RouterLink to='/login' color='teal.500'>
                                        O Inicia sesión para ver tu inventario
                                    </RouterLink>
                                </Text>
                            </Stack>

                        </Box>
                        form
                    </Stack>
                </Container>

            </Box>
        </div >
    );
}

export const Blur = (props: IconProps) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};