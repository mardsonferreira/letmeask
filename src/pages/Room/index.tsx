import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import {
    Container,
    Header,
    Main,
    Content,
    Title,
    Form,
    FormFooter,
    UserInfo 
} from './styles';

type RoomParams = {
    id: string;
}

type firebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
}>;

type Question = {
    id: string;
    author: {
        name: string;
        avatar: string;
    };
    content: string;
    isHighlighted: boolean;
    isAnswered: boolean;
}

export function Room() {
    const { user } = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const [newQuestion, setNewQuestion] = useState('');
    const [questions, setQuestions] = useState<Question[]>([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const roomRef = database.ref(`rooms/${roomId}`);

        roomRef.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: firebaseQuestions = databaseRoom.questions  ?? {};
            const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isHighlighted: value.isHighlighted,
                    isAnswered: value.isAnswered,
                }
            });

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        });
    }, []);

    async function handleSendQuestion(event: FormEvent) {
        event.preventDefault();

        if (newQuestion.trim() === '') {
            return;
        }

        if (!user) {
            throw new Error('You must be logged in');
        }

        const question = {
            content: newQuestion,
            author: {
                name: user.name,
                avatar: user.avatar,
            },
            isHighlighted: false,
            isAnswered: false,
        }

        await database.ref(`rooms/${roomId}/questions`).push(question);

        setNewQuestion('');
    }

    return (
        <Container>
            <Header>
                <Content>
                    <img src={logoImg} alt="Logo" />
                    <RoomCode code={roomId} />
                </Content>
            </Header>

            <Main>
                <Title>
                    <h1>Room {title}</h1>
                    { questions.length && <span>{questions.length} Question(s)</span> }
                </Title>

                <Form onSubmit={handleSendQuestion}>
                    <textarea 
                        placeholder="What you would like to ask?"
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />

                    <FormFooter>
                        { user ? (
                            <UserInfo>
                                <img src={user.avatar} alt={user.name} />
                                <span>{user.name}</span>
                            </UserInfo>
                        ) : (
                            <span> <button>Login </button> to submit a question.</span>
                        ) }
                        <Button type="submit" disabled={!user}>
                            Submit question
                        </Button>
                    </FormFooter>
                </Form>
            </Main>
        </Container>
    )
}