import React, { Component } from 'react'
import {
    Box,
    // useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';

const IMAGE =
    'https://img.freepik.com/foto-gratis/resumen-exhibicion-producto-pedestal-podio-blanco-sobre-fondo-blanco-representacion-3d_56104-1486.jpg?w=900&t=st=1662859444~exp=1662860044~hmac=50d8282ed881466977981ed2b88887398b7d654b9d97b718d79ac7e3e38e1739';

export default class Product extends Component {
    render() {
        return (
            <div>
                <Box
                    marginTop='10%'
                    marginRight='5px'
                    role={'group'}
                    p={6}
                    maxW={'230px'}
                    w={'full'}
                    backgroundColor='white'
                    boxShadow={'2xl'}
                    rounded={'lg'}
                    pos={'relative'}>
                    <Box
                        rounded={'lg'}
                        mt={-12}
                        pos={'relative'}
                        height={'100px'}
                        _after={{
                            transition: 'all .3s ease',
                            content: '""',
                            w: 'full',
                            h: 'full',
                            pos: 'absolute',
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${IMAGE})`,
                            filter: 'blur(15px)',
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: 'blur(20px)',
                            },
                        }}>
                        <Image
                            rounded={'lg'}
                            height={130}
                            width={282}
                            objectFit={'cover'}
                            src={IMAGE}
                        />
                    </Box>
                    <Stack pt={10} align={'center'}>
                        <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                            Brand
                        </Text>
                        <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                            Nice Chair, pink
                        </Heading>
                        <Stack direction={'row'} align={'center'}>
                            <Text fontWeight={600} fontSize={'xl'}>
                                $57
                            </Text>
                           
                        </Stack>
                    </Stack>
                </Box>
            </div>
        )
    }
}
