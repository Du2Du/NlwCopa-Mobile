import { Center, Spinner } from 'native-base'
import React from 'react'

export const Loading: React.FC = () => {

  return(
    <Center flex={1} bg="gray.900">
      <Spinner color="yellow.500"/>
    </Center>
    )
}