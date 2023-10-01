import { StatusBar } from 'react-native';

import { ThemeProvider } from 'styled-components';
import theme from './src/theme/theme'
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';
import { Players } from '@screens/Players/index.';


export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold});

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent      //ultrapasssar a margem da statusbar
      />
      {fontsLoaded ? <Players />  : <Loading />}
    </ThemeProvider>
  );
}