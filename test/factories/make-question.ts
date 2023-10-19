import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import {
  Question,
  QuestionProps,
} from '@/domain/forum/enterprise/entities/question'
import { Slug } from '@/domain/forum/enterprise/entities/value-objects/slug'

export function makeQuestion(override: Partial<QuestionProps> = {}) {
  const question = Question.create({
    title: 'Exemple question',
    slug: Slug.create('exemple-question'),
    authorId: new UniqueEntityId(),
    content: 'Exemple question',
    ...override,
  })

  return question
}
