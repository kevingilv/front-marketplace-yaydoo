import React, { Component } from 'react'
import { Flex } from "@chakra-ui/react";
import Product from '../../components/Product'

export default class ProductsContainer extends Component {
  render() {
    return (
      <div>
        <Flex
          // bgGradient="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'"
          gap={3}
          padding="10px"
          flexWrap="wrap"
          flexDirection="row"
          height="50vh"
          justifyContent="center"
          alignItems="center"
          maxHeight="100vh" 
        >
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Flex>

        {/* <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            <GridItem bg='white'>
              <Product />
            </GridItem>
          </Grid> */}

      </div>
    )
  }
}
