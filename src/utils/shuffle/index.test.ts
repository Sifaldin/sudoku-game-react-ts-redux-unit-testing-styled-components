import { shuffle } from '.'

describe('shuffle', () => {
  const array = [1, 2, 3, 4]

  beforeEach(() => {
    shuffle(array)
  })

  it('should return an array with the same length', () => {
    expect(array).toHaveLength(4)
  })

  it('should return the same elements after being shuffled', () => {
    expect(array).toContain(1)
    expect(array).toContain(3)
    expect(array).toContain(2)
    expect(array).toContain(4)
  })
})

// or this way externally instead of a describe suite
test('should return the same elements after being shuffled', () => {
  const array = [1, 2, 3, 4]
  shuffle(array)
  expect(array).toContain(1)
  expect(array).toContain(3)
  expect(array).toContain(2)
  expect(array).toContain(4)
})
