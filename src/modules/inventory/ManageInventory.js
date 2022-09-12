import React, { useContext, useEffect, useState } from 'react'
import { Redirect } from 'react-router';
import {
  Flex,
  Heading,
  Text,
  Button,
  TableContainer,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { UserContext } from '../../context/UserContext'
import { Link as RouterLink } from 'react-router-dom';
import { getInventoryService } from '../../services/ProductService';

export default function ManageInventory() {

  const [inventoryList, setInventoryList] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getInventory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getInventory() {
    const payload = { email: user };
    const result = await getInventoryService(payload);
    setInventoryList(result.data);
  }

  return (
    <>
      {user !== null ?
        <div>
          <Flex
            padding="10px"
            flexWrap="wrap"
            flexDirection="row"
          >
            <RouterLink to='/create-product'>
              <Button bg='white' colorScheme='pink' variant='outline'
                _hover={{ boxShadow: 'xl' }}>
                Crear Producto
              </Button>
            </RouterLink>
          </Flex>
          <Flex
            flexWrap="wrap"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            marginBottom={'20px'}>
            <Heading>
              <Text
                bgGradient="linear(to-r, red.400,pink.400)"
                as={'span'}
                bgClip="text">
                Mi inventario
              </Text>
            </Heading>
          </Flex>


          <TableContainer bg={'white'}>
            <Table size='sm'>
              <Thead>
                <Tr>
                  <Th>Nombre del Producto</Th>
                  <Th>SKU</Th>
                  <Th isNumeric>Cantidad</Th>
                  <Th isNumeric>Precio</Th>
                </Tr>
              </Thead>
              <Tbody>
                {inventoryList.map(inv =>
                  <Tr>
                    <Td>{inv.name} </Td>
                    <Td> {inv.sku} </Td>
                    <Td isNumeric> {inv.quantity} </Td>
                    <Td isNumeric> {inv.price} </Td>
                  </Tr>

                )}


              </Tbody>

            </Table>
          </TableContainer>

        </div>
        : <Redirect to='/login' />}
    </>
  )

}
