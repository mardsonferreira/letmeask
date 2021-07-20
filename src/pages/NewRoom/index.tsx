import { Link } from 'react-router-dom';

import illustrationImg from '../../assets/images/illustration.svg';
import logoImg from '../../assets/images/logo.svg';

import {
    Container,
    Aside,
    Main,
    Content,
} from './styles';

import { Button } from '../../components/Button';

export function NewRoom() {
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
                    <form>
                        <input
                            type="text"
                            placeholder="type the name of the room"
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