import { useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { useRoom } from '../../hooks/useRoom';

import {
    Container,
    Header,
    Main,
    Content,
    Title,
    QuestionList
} from './styles';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const {title, questions} = useRoom(roomId);

    return (
        <Container>
            <Header>
                <Content>
                    <img src={logoImg} alt="Logo" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button outlined>Close room</Button>
                    </div>
                </Content>
            </Header>

            <Main>
                <Title>
                    <h1>Room {title}</h1>
                    { questions.length && <span>{questions.length} Question(s)</span> }
                </Title>

                <QuestionList>
                    {questions.map(question => {
                        return (
                            <Question key={question.id} content={question.content} author={question.author}/>
                        )
                    })}
                </QuestionList>
            </Main>
        </Container>
    )
}