import React, { Component } from 'react'
import {
    Flex,
    Stack,
    FormControl,
    InputGroup,
    Input,
    InputLeftElement,
    Button,
    Heading,
    Text
} from '@chakra-ui/react'
import { FiBox, FiDollarSign, FiFileMinus } from "react-icons/fi";
import { BaseForm } from '../../components/BaseForm'

export default class CreateUser extends Component {
    render() {
        return (
            <>
                <Flex
                    flexDirection="column"
                    width="100wh"
                    height="50vh"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Stack
                        flexDir="column"
                        mb="2"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Heading>
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text">
                                Crear Usuario
                            </Text>
                        </Heading>
                        <BaseForm>
                            {/* SKU */}
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<FiBox color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="Nombre Producto" />
                                </InputGroup>
                            </FormControl>
                            {/* SKU */}
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<FiFileMinus color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="SKU" />
                                </InputGroup>
                            </FormControl>
                            {/* Price */}
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<FiDollarSign color="gray.300" />}
                                    />
                                    <Input type="number" placeholder="Precio" />
                                </InputGroup>
                            </FormControl>
                            <Button
                                fontFamily={'heading'}
                                mt={8}
                                w={'full'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                color={'white'}
                                _hover={{
                                    bgGradient: 'linear(to-r, red.400,pink.400)',
                                    boxShadow: 'xl',
                                }}
                            >
                                Crear
                            </Button>
                        </BaseForm>
                    </Stack>
                </Flex>
            </>


        )
    }
}
