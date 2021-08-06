import { useState } from 'react';

import { useHistory, useParams } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import checkImg from '../../assets/images/check.svg';
import answerImg from '../../assets/images/answer.svg';
import emptyQuestionsImg from '../../assets/images/empty-questions.svg';

import { useAuth } from '../../hooks/useAuth';
import { useRoom } from '../../hooks/useRoom';

import { database } from '../../services/firebase';

import { Button } from '../../components/Button';
import { Question } from '../../components/Question';
import { RoomCode } from '../../components/RoomCode';
import { ModalComponent } from '../../components/Modal';


import {
    Container,
    Header,
    Main,
    Content,
    Title,
    QuestionList, 
    EmptyQuestion
} from './styles';

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    const { user } = useAuth();
    const history = useHistory();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    const {title, questions} = useRoom(roomId);

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            closedAt: new Date(),
        });

        history.push('/');
    }

    function openModal(questionId: string) {
        setDeleteId(questionId);
        setModalIsOpen(true);
    }

    function closeModal() {
        setDeleteId('');
        setModalIsOpen(false);
    }

    async function handleDeleteQuestion() {
        if (deleteId) {
            await database.ref(`rooms/${roomId}/questions/${deleteId}`).remove();
        }
        setModalIsOpen(false);
    }

    async function handleCheckQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        });
    }

    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted: true,
        });
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
                
                {questions.length ? (
                    <QuestionList>
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHighlighted={question.isHighlighted}
                            >
                                {!question.isAnswered && 
                                    (
                                        <>
                                            <button type="button" onClick={() => handleCheckQuestion(question.id)}>
                                                <img src={checkImg} alt="mark question as answered" />
                                            </button>
                                            <button type="button" onClick={() => handleHighlightQuestion(question.id)}>
                                                <img src={answerImg} alt="highlight question" />
                                            </button>
                                        </>
                                    )
                                }
                                <button type="button" onClick={() => openModal(question.id)}>
                                    <img src={deleteImg} alt="delete question" />
                                </button>
                            </Question>
                        )
                    })}
                </QuestionList>
                ) : (
                    <EmptyQuestion>
                        <img src={emptyQuestionsImg} alt="No questions found"/>
                        <h2>No questions around here...</h2>
                        <span>Send this room code to your friends and start answering questions!</span>
                    </EmptyQuestion>
                )}
            </Main>

            <ModalComponent 
                isOpen={modalIsOpen} 
                title="Delete question"
                subtitle="Are you sure you want to remove this question?"
                onCancel={closeModal}
                onAccept={handleDeleteQuestion}
            />
        </Container>
    )
}