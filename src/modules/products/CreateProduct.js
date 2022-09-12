import { useContext } from 'react'
import {
    Flex,
    Stack,
    FormControl,
    InputGroup,
    Input,
    InputLeftElement,
    Button
} from '@chakra-ui/react'
import { FiBox, FiDollarSign, FiFileMinus } from "react-icons/fi";
import { BaseForm } from '../../components/BaseForm'
import { UserContext } from '../../context/UserContext';
import { Redirect } from 'react-router';

export default function CreateProduct() {

    const { user } = useContext(UserContext);

    return (
        <>
            {user !== null ?
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
                : <Redirect to='/login' />}
        </>


    )

}
