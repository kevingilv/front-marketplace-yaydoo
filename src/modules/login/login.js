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
    Box,
    Avatar,
    FormControl,
    InputRightElement,
    Text
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { BaseForm } from "../../components/BaseForm";
import { Link as RouterLink } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowClick = () => setShowPassword(!showPassword);

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
                            <Input type="email" placeholder="Correo electrónico" />
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
                        Login
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
    );
};

export default Login;
