import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import { Players } from '@screens/Players/index.';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
    // navigator pode receber initialroutename, no meu caso quero o primeira mesmo
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
            name='groups'
            component={Groups}
        />

        <Screen
            name='new'
            component={NewGroup}
        />

        <Screen
            name='players'
            component={Players}
        />
      </Navigator> 
    )
}

