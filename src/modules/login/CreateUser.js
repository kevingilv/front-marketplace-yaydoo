import { useContext, useState } from "react";
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
import { UserContext } from "../../context/UserContext";
import { Redirect } from "react-router";


const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const CreateUser = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false);
    const toast = useToast()
    const { user, setUser } = useContext(UserContext);

    const handleShowClick = () => setShowPassword(!showPassword);
    const handleConfirmShowClick = () => setShowConfirmPassword(!showConfirmPassword);

    async function createUser() {
        const payload = {
            email,
            password,
            confirmPassword
        }
        setButtonIsDisabled(true);
        const result = await createUserService(payload);
        if (result.success) {
            setUser(result.data.email)
        }
        toast({
            title: result.success ? 'Cuenta creada.' : 'No se creo la cuenta.',
            description: result.message,
            status: result.success ? TOAST_STATUS.success : TOAST_STATUS.warning,
            duration: 5000,
            isClosable: true,
            position: TOAST_POSITIONS.topRight,
        });
        setButtonIsDisabled(false);
    }

    return (
        <>
            {user != null ? <Redirect to='/inventory' /> :
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
                                disabled={buttonIsDisabled}
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
            }
        </>

    );
};

export default CreateUser;
