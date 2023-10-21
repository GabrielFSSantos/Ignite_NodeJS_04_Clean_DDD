import { AnswerComment } from '../../enterprise/entities/answer-comment'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'

interface FetchAnswerAnswerCommentsUseCaseRequest {
  answerId: string
  page: number
}

interface FetchAnswerAnswerCommentsUseCaseResponse {
  answercomments: AnswerComment[]
}

export class FetchAnswerAnswerCommentsUseCase {
  constructor(private answercommentsRepository: AnswerCommentsRepository) {}

  async execute({
    answerId,
    page,
  }: FetchAnswerAnswerCommentsUseCaseRequest): Promise<FetchAnswerAnswerCommentsUseCaseResponse> {
    const answercomments =
      await this.answercommentsRepository.findManyByAnswerId(answerId, {
        page,
      })

    return {
      answercomments,
    }
  }
}
