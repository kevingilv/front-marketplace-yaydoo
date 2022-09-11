import React from 'react'
import { Box, Stack } from "@chakra-ui/react";

export const BaseForm = ({ children }) => {
    return (
        <>
            <Box minW={{ base: "90%", md: "468px" }}>
                <form>
                    <Stack
                        spacing={4}
                        p="1rem"
                        backgroundColor="whiteAlpha.900"
                        boxShadow="md"
                    >
                        {children}
                    </Stack>
                </form>
            </Box>

        </>
    )
}


// export default class BaseForm extends Component {
//     render() {
//         return (
//             <>
//                 <Box minW={{ base: "90%", md: "468px" }}>
//                     <form>
//                         <Stack
//                             spacing={4}
//                             p="1rem"
//                             backgroundColor="whiteAlpha.900"
//                             boxShadow="md"
//                         ></Stack>
//                     </form>
//                 </Box>
//             </>
//         )
//     }
// }
