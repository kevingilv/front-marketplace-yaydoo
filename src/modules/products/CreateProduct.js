import { useContext, useState } from 'react'
import {
    Flex,
    Stack,
    FormControl,
    InputGroup,
    Input,
    InputLeftElement,
    Button,
    useToast
} from '@chakra-ui/react'
import { FiBox, FiDollarSign, FiFileMinus, FiLayers } from "react-icons/fi";
import { BaseForm } from '../../components/BaseForm'
import { UserContext } from '../../context/UserContext';
import { Redirect } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { createProductService } from '../../services/ProductService';
import { TOAST_POSITIONS, TOAST_STATUS } from '../../constants';

export default function CreateProduct() {

    const { user } = useContext(UserContext);
    const [name, setName] = useState('');
    const [sku, setSku] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [btnCreateIsDisabled, setBtnCreateIsDisabled] = useState(false);
    const toast = useToast()

    async function createProduct() {
        const payload = {
            email: user,
            name,
            sku,
            price,
            quantity
        }
        setBtnCreateIsDisabled(true);
        const result = await createProductService(payload);
        if (result.success) {
            setName('');
            setSku('');
            setPrice(0);
            setQuantity(0);
        }

        toast({
            title: result.success ? 'Producto creado.' : 'No se creo el producto.',
            description: result.message,
            status: result.success ? TOAST_STATUS.success : TOAST_STATUS.warning,
            duration: 5000,
            isClosable: true,
            position: TOAST_POSITIONS.topRight,
        });
        setBtnCreateIsDisabled(false);
    }

    return (
        <>
            {user !== null ? <>
                <RouterLink to='/manage-inventory'>
                    <Button bg='white' colorScheme='pink' variant='outline'
                        _hover={{ boxShadow: 'xl' }}>
                        Ver Inventario
                    </Button>
                </RouterLink>
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
                            {/* Product Name */}
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<FiBox color="gray.300" />}
                                    />
                                    <Input
                                        value={name}
                                        onChange={(value) => setName(value.target.value)}
                                        type="text"
                                        placeholder="Nombre Producto" />
                                </InputGroup>
                            </FormControl>
                            {/* SKU */}
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<FiFileMinus color="gray.300" />}
                                    />
                                    <Input
                                        value={sku}
                                        onChange={(value) => setSku(value.target.value)}
                                        type="text"
                                        placeholder="SKU" />
                                </InputGroup>
                            </FormControl>
                            {/* Price */}
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<FiDollarSign color="gray.300" />}
                                    />
                                    <Input
                                        value={price}
                                        onChange={(value) => setPrice(value.target.value)}
                                        type="number"
                                        placeholder="Precio" />
                                </InputGroup>
                            </FormControl>
                            {/* Quantity */}
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<FiLayers color="gray.300" />}
                                    />
                                    <Input
                                        value={quantity}
                                        onChange={(value) => setQuantity(value.target.value)}
                                        type="number"
                                        placeholder="Cantidad" />
                                </InputGroup>
                            </FormControl>
                            <Button
                                disabled={btnCreateIsDisabled}
                                onClick={() => createProduct()}
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
                : <Redirect to='/login' />}
        </>


    )

}
