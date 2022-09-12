import React, { useEffect, useState } from 'react';
import { Flex, useToast, Heading, Text } from "@chakra-ui/react";
import Product from '../../components/Product'
import { getAllProductService } from '../../services/ProductService';
import { TOAST_STATUS, TOAST_POSITIONS } from '../../constants';

export default function ProductsContainer() {

  // useEffect(() => {
  //   getAllProducts();
  // });

  useEffect(() => {
    let mounted = true;
    getAllProducts()
      .then(items => {
        if (mounted) {
          setProducts(items)
        }
      })
    return () => mounted = false;
  }, [])


  const [products, setProducts] = useState([]);
  const toast = useToast();

  async function getAllProducts() {
    const result = await getAllProductService();
    if (!result.success) {
      toast({
        title: 'Error',
        description: 'Ocurrió un error al obtener los elementos',
        status: TOAST_STATUS.warning,
        duration: 5000,
        isClosable: true,
        position: TOAST_POSITIONS.topRight,
      });
    } else {
      return result.data;
    }
  }

  return (
    <div>

      <Flex
        padding="10px"
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Heading>
          <Text
            bgGradient="linear(to-r, red.400,pink.400)"
            as={'span'}
            bgClip="text">
            Listado de Productos
          </Text>
        </Heading>
      </Flex>
      <Flex
        gap={3}
        padding="10px"
        flexWrap="wrap"
        flexDirection="row"
        height="50vh"
        justifyContent="center"
        alignItems="center"
        maxHeight="100vh"
      >

        {products.map(x =>
          <Product
            name={x.name}
            sku={x.sku}
            price={x.price}
          />
        )}



      </Flex>

    </div>
  )

}
