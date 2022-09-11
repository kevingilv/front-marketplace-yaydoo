import { useState } from "react";
import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    FormControl,
    InputRightElement,
    Text,
    useToast
} from "@chakra-ui/react";
import { TOAST_POSITIONS, TOAST_STATUS } from "../../constants";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { BaseForm } from "../../components/BaseForm";
import { createUserService } from "../../services/UserService";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const CreateUser = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const toast = useToast()

    const handleShowClick = () => setShowPassword(!showPassword);
    const handleConfirmShowClick = () => setShowConfirmPassword(!showConfirmPassword);

    async function createUser() {
        const payload = {
            email,
            password,
            confirmPassword
        }
        const result = await createUserService(payload);
        toast({
            title: result.success ? 'Cuenta creada.' : 'No se creo la cuenta.',
            description: result.message,
            status: result.success ? TOAST_STATUS.success : TOAST_STATUS.warning,
            duration: 5000,
            isClosable: true,
            position: TOAST_POSITIONS.topRight,
        });
    }

    return (
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
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                children={<CFaUserAlt color="gray.300" />}
                            />
                            <Input
                                value={email}
                                onChange={(value) => setEmail(value.target.value)}
                                type="email"
                                placeholder="Correo electrónico" />
                        </InputGroup>
                    </FormControl>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                children={<CFaLock color="gray.300" />}
                            />
                            <Input
                                value={password}
                                onChange={(value) => setPassword(value.target.value)}
                                type={showPassword ? "text" : "password"}
                                placeholder="Contraseña"
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                    {showPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>

                    </FormControl>
                    <FormControl>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                color="gray.300"
                                children={<CFaLock color="gray.300" />}
                            />
                            <Input
                                value={confirmPassword}
                                onChange={(value) => setConfirmPassword(value.target.value)}
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirmar Contraseña"
                            />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleConfirmShowClick}>
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>

                    </FormControl>
                    <Button
                        onClick={() => createUser()}
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
    );
};

export default CreateUser;
