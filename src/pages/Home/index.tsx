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

export function Home() {
    const history = useHistory();

    function navigateToNewRoom() {
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
                    <CreateRoomBtn onClick={navigateToNewRoom}>
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