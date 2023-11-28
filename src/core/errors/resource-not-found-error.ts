import { UseCaseError } from '@/domain/forum/application/use-cases/errors/use-case-error'

export class ResourceNotFoundError extends Error implements UseCaseError {
  constructor() {
    super('Resource not found.')
  }
}
