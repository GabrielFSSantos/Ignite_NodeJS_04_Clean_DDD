import { Either, left, right } from './either'

function doSomething(result: boolean): Either<string, number> {
  if (result) {
    return right(10)
  }
  return left('error')
}

test('success result', () => {
  const result = doSomething(true)

  if (result.isRight()) {
    console.log(result.value)
  }

  expect(result.isRight()).toBe(true)
  expect(result.isLeft()).toBe(false)
})

test('error result', () => {
  const result = doSomething(false)

  expect(result.isRight()).toBe(false)
  expect(result.isLeft()).toBe(true)
})