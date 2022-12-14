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
import { UserContext } from "../../context/UserContext";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const toast = useToast()
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(UserContext)
    const [buttonIsDisabled, setButtonIsDisabled] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);


    async function login() {
        const payload = {
            email,
            password,
        }
        setButtonIsDisabled(true);
        const result = await loginUserService(payload);
        if (result.success) {
            setUser(result.data.email)
        }
        toast({
            title: result.success ? 'Bienvenido.' : 'Revisa tus datos.',
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
            {/* {console.log('EL LOYIN', sessionStorage.getItem(IS_LOGGED))} */}
            {user !== null ? <Redirect to='/inventory' /> : <Flex
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
                                    placeholder="Correo electr??nico" />
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
                                    placeholder="Contrase??a"
                                />
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                                        {showPassword ? "Hide" : "Show"}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>

                        </FormControl>
                        <Button
                            disabled={buttonIsDisabled}
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
                            Iniciar Sesi??n
                        </Button>
                    </BaseForm>
                </Stack>
                <Box>
                    ??Nuevo?{" "}
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
