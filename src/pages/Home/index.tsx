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

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        if (!user) {
            await signInWithGoogle();
        }

        history.push('/rooms/new');
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
                    
                    <form>
                        <input
                            type="text"
                            placeholder="type room code"
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