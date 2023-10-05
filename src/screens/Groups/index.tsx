import { Header } from '@components/Header'
import { Container, Title } from './styles'
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useState } from 'react';
import { FlatList } from 'react-native';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';

type RootParamList = {
  groups: undefined;
  new: undefined;
  players: {
      group: string;
  }
}

type Props = {
  navigation: NativeStackNavigationProp <RootParamList, 'groups'>
};

export function Groups({ navigation }: Props) {
  const [groups, setGroups] = useState<string[]>([]);

  function handleNewGroup() {
    navigation.navigate('new');
  }

  return (
    <Container>
      <Header  showBackButton={false} />

      <Highlight  
        title='Turmas' 
        subtitle='Jogue com sua turma' 
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard 
            title={item} 
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => (
          <ListEmpty 
            message='Ainda nao criou um grupo? faca gora.'
          />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Button 
        title='Criar nova turma'
        style={{ marginTop: 20}}
        onPress={handleNewGroup}
      />

    </Container>
  );
}