import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';

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
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const {title, questions} = useRoom(roomId);

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            closedAt: new Date(),
        });

        history.push('/');
    }

    async function handleDeleteQuestion(questionId: string) {
       if (window.confirm('Are you sure you want to delete this question')) {
           await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
       }
    }

    return (
        <Container>
            <Header>
                <Content>
                    <img src={logoImg} alt="Logo" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button outlined onClick={handleEndRoom}>Close room</Button>
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
                            <Question key={question.id} content={question.content} author={question.author}>
                                <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
                                    <img src={deleteImg} alt="delete question" />
                                </button>
                            </Question>
                        )
                    })}
                </QuestionList>
            </Main>
        </Container>
    )
}