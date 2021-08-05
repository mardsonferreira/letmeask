import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

import {
    Container,
    Aside,
    Main,
    Content,
    Separator,
    CreateRoomBtn,
} from './styles';

import { Button } from '../../components/Button';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();
    const [ roomCode, setRoomCode ] = useState('');

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exisits.')
            return;
        }

        if (roomRef.val().closedAt) {
            alert('Room already closed');
            return;
        }

        history.push(`/rooms/${roomCode}`);
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
                    <CreateRoomBtn onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Google logo" />
                        Create your room with Google
                    </CreateRoomBtn>

                    <Separator>Or get in a room </Separator>
                    
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="type room code"
                            onChange={ event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">
                            Enter in the room
                        </Button>
                    </form>
                </Content>
            </Main>
        </Container>
    )
}