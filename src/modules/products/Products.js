
import React, { Component } from 'react'
import { Flex, Heading, Text } from "@chakra-ui/react";
import Product from '../../components/Product'
import { getAllProductService } from '../../services/ProductService';

export default class Products extends Component {


  async componentDidMount() {
    const resultProds = await getAllProductService();
    this.setState({ products: resultProds.data })
  }


  constructor(props) {
    super(props);
    this.state = {
      products: [],
    }
  }


  render() {



    // async function getAllProducts() {
    //   const result = await getAllProductService();
    //   if (!result.success) {
    //     alert('Ocurrió algo inesperado')
    //   } else {
    //     return result.data;
    //   }
    // }

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

          {this.state.products.map(x =>
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
}
