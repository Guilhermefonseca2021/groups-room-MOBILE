import { Header } from '@components/Header'
import { Container, Title } from './styles'
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import ListEmpty from '@components/ListEmpty';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

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
        ListEmptyComponent={() =>
          <ListEmpty 
            message='Ainda nao criou um grupo? faca gora.'
         />
        }
      />
      
    </Container>
  );
}