
import React, { Component } from 'react'
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import Product from '../../components/Product'
import { getAllProductService } from '../../services/ProductService';
import { Spinner } from '@chakra-ui/react'

export default class Products extends Component {

  async componentDidMount() {
    const resultProds = await getAllProductService();
    this.setState({ products: resultProds.data })
  }

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      showSpinner: false,
    }
  }

  render() {

    async function getProducts(x) {
      x.setState({ showSpinner: true });
      const resultProds = await getAllProductService();
      x.setState({
        products: resultProds.data,
        showSpinner: false
      });
    }

    return (
      <div>
        <Flex
          padding="10px"
          flexWrap="wrap"
          flexDirection="row"
        >
          <Button
            onClick={() => getProducts(this)}
            bg='white' colorScheme='pink' variant='outline'
            _hover={{ boxShadow: 'xl' }}>
            Recargar
          </Button>
        </Flex>
        <Flex
          flexWrap="wrap"
          flexDirection="row"
          justifyContent="center"
          alignItems="center">
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
          {this.state.showSpinner ?
            <Spinner size='xl' /> : this.state.products.map(x =>
              <Product
                name={x.name}
                sku={x.sku}
                price={x.price}
              />
            )
          }

        </Flex>

      </div>
    )
  }
}
