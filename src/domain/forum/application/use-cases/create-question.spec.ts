import { CreateQuestionUseCase } from './create-question'
import { QuestionsRepository } from '../repositories/questions-repository'
import { Question } from '@/domain/forum/enterprise/entities/question'

const fakeQuestionsRepository: QuestionsRepository = {
  create: async (question: Question) => {},
}

test('create a question', async () => {
  const questionQuestion = new CreateQuestionUseCase(fakeQuestionsRepository)

  const { question } = await questionQuestion.execute({
    authorId: '1',
    title: 'Nava Pergunta',
    content: 'Conteúdo da pergunta',
  })

  expect(question.id).toBeTruthy()
})
