import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import Input from "@components/Input";
import Filter from "@components/Filter";
import { FlatList } from 'react-native'
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";


export function Players() {
    const [team, setTeam] = useState('time A')
    const [players, setPlayers] = useState([])

    return(
        <Container>
            <Header showBackButton />

            <Highlight 
                title="Nome da Turma"
                subtitle="adicione a galera e separe os times"
            />

            <Form>
                <Input  
                    placeholder="Nome da pessoa"  
                    autoCorrect={false}   
                />

                <ButtonIcon icon="add" type="SECONDARY"  />
            </Form>

            <HeaderList>
                <FlatList
                    data={['time A', 'time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item} 
                            isActive={item === team}
                            onPress={() => setTeam(item)}      
                        />
                    )}
                    horizontal
                />

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>
            
            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard 
                        name={item} 
                        onRemove={() => { }}
                    />
                )}
                ListEmptyComponent={() =>
                    <ListEmpty
                      message='Nao ha pessoas nesse time'
                    />
                }
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{ paddingBottom: 100 }}
                contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
            />

            <Button
                title="Apagar Turma"
                type="SECONDARY"
            />
        </Container>
    )
}