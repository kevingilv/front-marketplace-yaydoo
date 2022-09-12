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
    Box,
    Avatar,
    FormControl,
    InputRightElement,
    Text,
    useToast
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { BaseForm } from "../../components/BaseForm";
import { Link as RouterLink, Redirect } from "react-router-dom";
import { loginUserService } from "../../services/UserService";
import { TOAST_POSITIONS, TOAST_STATUS } from "../../constants";
// import { IS_LOGGED } from "../../constants";
// import ManageInventory from "../inventory/ManageInventory";
import { UserContext } from "../../context/UserContext";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const toast = useToast()
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [isLogged, setIsLogged] = useState(false);
    const { user, setUser } = useContext(UserContext)

    const handleShowClick = () => setShowPassword(!showPassword);


    async function login() {
        const payload = {
            email,
            password,
        }
        const result = await loginUserService(payload);
        if (result.success) {
            setUser(result.data.email)
        }
        // if (sessionStorage.getItem(IS_LOGGED)) {
        //     setIsLogged(true);
        // }
        toast({
            title: result.success ? 'Bienvenido.' : 'Revisa tus datos.',
            description: result.message,
            status: result.success ? TOAST_STATUS.success : TOAST_STATUS.warning,
            duration: 5000,
            isClosable: true,
            position: TOAST_POSITIONS.topRight,
        });
    }

    return (
        <>
            {/* {console.log('EL LOYIN', sessionStorage.getItem(IS_LOGGED))} */}
            {user !== null  ? <Redirect to='/invenotory' /> : <Flex
                flexDirection="column"
                width="100wh"
                height="50vh"
                justifyContent="center"
                alignItems="center">
                <Stack
                    flexDir="column"
                    mb="2"
                    justifyContent="center"
                    alignItems="center">
                    <Avatar bgGradient="linear(to-r, red.400,pink.400)" />
                    <Heading>
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text">
                            Bienvenido
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
                        <Button
                            onClick={() => login()}
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
                            Iniciar Sesión
                        </Button>
                    </BaseForm>
                </Stack>
                <Box>
                    ¿Nuevo?{" "}
                    <RouterLink to='/create-user' color="teal.500" href="#">
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text">
                            Crear usuario
                        </Text>
                    </RouterLink>
                </Box>
            </Flex>
            }

        </>
    );
};

export default Login;
