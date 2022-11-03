import { Center, Spinner } from "native-base";
import {ActivityIndicator} from 'react-native'

export function Loading(){
    return(
        <Center flex={1} bg={'gray.900'}>
            <Spinner color={'yellow.500'} size={'lg'}/>
        </Center>
    )
}