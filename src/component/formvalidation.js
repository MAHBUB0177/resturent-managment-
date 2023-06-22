import { Box,Button, Center, FormControl, Input, InputGroup, InputLeftElement, Spacer, Text, VStack } from '@chakra-ui/react'
import { validateConfig } from 'next/dist/server/config-shared';
import React, { useEffect, useState } from 'react'
import { MdOutlineEmail, MdPassword } from 'react-icons/md'

const Formvalidation = () => {

    const [formValues,setFormValues]=useState({
        username:'',
        email:'',
        password:''
    })
    const [formerror,setFormError]=useState({}) 
    const[isSubmit,setIsSubmit]=useState(false)

   
    
    // console.log(formValues,'========>')

    const handelsubmit=(e)=>{
        e.preventDefault()
        setFormError(validate(formValues))
        setIsSubmit(true)
        
    }
    useEffect(()=>{
        console.log({formerror})
        if(Object.keys(formerror).length === 0 && isSubmit){
            console.log(formerror,'+++++')
        }
    })
    const validate=(value)=>{
        const errors={}
        const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!value.username){
            errors.username='username is required'
        }
        if(!value.email){
            errors.email='email is required'
        }
        else if(!regex.test(value.email)){
            errors.email='this is not a valid email'
        }
        if(!value.password){
            errors.password='password is required'
        }else if(value.password < 4){
            errors.password='passwor is more than 4'
        }
        else if(value.password <10){
            errors.password='password is less than 10'
        }
        return errors;

    }
  return (
    <Center>
        <Box 
        pb={'30px'}
        >
           <form onSubmit={handelsubmit}>
            {/* <Text>Login Form</Text> */}
              <FormControl w="350px" pt="20px">
                <VStack
                  borderColor="grayLight"
                  justifyContent="left"
                  color="secondaryText"
                >

                <p style={{color:'red'}}>{formerror.username}</p>
                 <InputGroup>
                    <Input
                      border="1px solid"
                      borderColor="secondaryText"
                      _focus={{ borderColor: "primaryLight" }}
                      id="Username"
                      type="text"
                      placeholder="Enter Username"
                      // value={formValues.username}
                      onChange={(e)=>{
                        console.log(e.target.value)
                        setFormValues({...formValues,username:e.target.value})
                      }}
                   
                    
                    />
                  </InputGroup>
                  <p style={{color:'red'}}>{formerror.email}</p>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineEmail color="gray" />
                    </InputLeftElement>
                    <Input
                      border="1px solid"
                      borderColor="secondaryText"
                      _focus={{ borderColor: "primaryLight" }}
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      // value={formValues.email}
                      onChange={(e)=>{
                        setFormValues({...formValues,email:e.target.value})
                      }}
                    
                    />
                  </InputGroup>
                  <p style={{color:'red'}}>{formerror.password}</p>
                  <InputGroup>
                    <InputLeftElement pointerEvents="none">
                      <MdPassword color="gray" />
                    </InputLeftElement>
                    <Input
                      border="1px solid"
                      borderColor="secondaryText"
                      _focus={{ borderColor: "primaryLight" }}
                      id="password"
                      type="password"
                      placeholder="Enter password"
                      // value={formValues.password}
                      onChange={(e)=>{
                        setFormValues({...formValues,password:e.target.value})
                      }}
                     
                    />
                  </InputGroup>

                  <Spacer />
                  <Spacer />

              

                  <Button
                    w="100%"
                    colorScheme="messenger"
                    type="submit"
                    loadingText="Logging in"

                  >
                    Submit
                  </Button>
                </VStack>
              </FormControl>
            </form>
    
            </Box>
    
    
    </Center>
  )
}

export default Formvalidation