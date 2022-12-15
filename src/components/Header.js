import React, { useContext } from 'react'
import { Badge, Button, Container, Dropdown, FormControl, Nav, Navbar } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartContex } from '../context/Context'

const Header = () => {
  const {
    state: {cart},
    dispatch,
    productDispatch
  } = useContext(CartContex)
  return (
    <Navbar bg="dark" variant="dark" style={{height: 80}}>
      <Container>
        <Navbar.Brand>
          <Link to='/'><p>Shopping CartContex</p></Link>
        </Navbar.Brand>
        <Navbar.Text>
          <FormControl
            style={{width: 500}}
            placeholder='Search a product'
            className='m-auto'
            onChange={(e) => {
              productDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value
              })
            }}
          />
        </Navbar.Text>
        <Nav>
          <Dropdown alignRight>
            <Dropdown.Toggle variant='success'>
              <FaShoppingCart color='white' fontSize='25px'/>
              <Badge bg='success'>{cart.length}</Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{minWidth: 350, left: '-100px'}}>
              {
                cart.length > 0 ? (
                  <>
                  {
                    cart.map(product => (
                      <span className='cartitem' key={product.id}>
                        <img src={product.image} alt={product.name} className='cartItemImg'/>
                        <div className='cartItemDetail'>
                          <span>{product.name}</span>
                          <span>NGN {product.price.split(".")[0]}</span>
                        </div>
                        <AiFillDelete
                          fontSize='20px'
                          style={{cursor: 'pointer'}}
                          onClick={() => {
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: product
                            })
                          }}
                        />
                      </span>
                    ))
                  }
                  <Link to="/cart">
                    <Button style={{width: '95%', margin: "0 10px"}}>
                      Go to cart
                    </Button>
                  </Link>
                  </>
                ) : (
                  <span style={{padding: 10}}>CartContex is Empty!</span>
                )
              }
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header