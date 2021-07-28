import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import {
    Container,
    Aside,
    Main,
    Content,
} from './styles';

import { Button } from '../../components/Button';
import { database } from '../../services/firebase';
import { useAuth } from '../../hooks/useAuth';

export function NewRoom() {
    const [newRoom, setNewRoom] = useState('');
    const { user } = useAuth();
    const history = useHistory();

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
        
        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        });

        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <Container>
            <Aside>
                <img src={illustrationImg} alt="Illustration" />
                <strong>create live Q&amp;A rooms</strong>
                <p>Answer your audience questions in real-time</p>
            </Aside>
            <Main>
                <Content>
                    <img src={logoImg} alt="Letmeask" />
                    <h2> Create a new room</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="type the name of the room"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Create room
                        </Button>
                    </form>
                    <p>
                        Do you want to join an existing room? <Link to="/">Click here</Link>
                    </p>
                </Content>
            </Main>
        </Container>
    )
}