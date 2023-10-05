import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './app.routes'


export function Routes() {
    return(
        // compartilhar as props do navigation
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
    )
}
