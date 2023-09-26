import { Header } from '@components/Header'
import { Container, Title } from './styles'
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';

export function Groups() {
  return (
    <Container>
      <Header  showBackButton={false} />

      <Highlight 
        title='Turmas' 
        subtitle='Jogue com sua turma' 
      />

      <GroupCard title='Galera do futebol' />
    </Container>
  );
}