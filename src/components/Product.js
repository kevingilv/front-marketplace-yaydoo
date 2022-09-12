import React, { Component } from 'react'
import {
    Box,
    Heading,
    Text,
    Stack,
    Image,
} from '@chakra-ui/react';

const IMAGE =
    'https://img.freepik.com/fotos-premium/podio-minimalista-3d-exhibicion-productos_457716-730.jpg?w=740';

export default function Product({ name, sku, price }) {

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
                        {sku}
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        {name}
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text fontWeight={600} fontSize={'xl'}>
                            ${price}
                        </Text>

                    </Stack>
                </Stack>
            </Box>
        </div>
    )
}
