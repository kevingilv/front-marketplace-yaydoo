
import React, { Component } from 'react'
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import Product from '../../components/Product'
import { getAllProductService } from '../../services/ProductService';
import { Spinner, Input } from '@chakra-ui/react'

export default class Products extends Component {

  async componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    this.setState({ showSpinner: true });
    const resultProds = await getAllProductService();
    this.setState({
      filteredProducts: resultProds.data,
      products: resultProds.data,
      showSpinner: false
    });
  }

  handleFilter = event => {
    let updateProducts = this.state.products;
    updateProducts = updateProducts.filter(prod => {
      return prod.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    })
    this.setState({ filteredProducts: updateProducts });
  };

  constructor(props) {
    super(props);
    this.state = {
      filteredProducts: [],
      products: [],
      showSpinner: false,
    }
  }

  render() {

    return (
      <div>
        <Flex
          padding="10px"
          flexWrap="wrap"
          flexDirection="row"
        >
          <Button
            onClick={() => this.getProducts()}
            bg='white' colorScheme='pink' variant='outline'
            _hover={{ boxShadow: 'xl' }}>
            Recargar
          </Button>
        </Flex>
        <Flex
          flexWrap="wrap"
          flexDirection="column"
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
          {this.state.showSpinner ? <></> :
            <Input
              onChange={this.handleFilter}
              marginTop={'20px'}
              bg={'white'}
              maxWidth={'30%'}
              placeholder='Buscar: nombre producto'
              size='md' />
          }
        </Flex>
        <Flex
          gap={3}
          padding="10px"
          flexWrap="wrap"
          flexDirection="row"
          height="40vh"
          justifyContent="center"
          alignItems="center"
          maxHeight="100vh"
        >
          {this.state.showSpinner ?
            <Spinner size='xl' /> : this.state.filteredProducts.map(x =>
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
