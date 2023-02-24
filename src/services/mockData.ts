import { faker } from '@faker-js/faker'

export type Person = {
    id: string
    coin: number
    firstName: string
    lastName: string
    age: number
    date: Date
    time: number | string
    visits: number
    amount: string | number
    status: 'relationship' | 'complicated' | 'single'
    subRows?: Person[]
}

const range = (len: number) => {
    const arr = []
    for (let i = 0; i < len; i++) {
      arr.push(i)
    }
    return arr
}

const newPerson = (): Person => {
    return {
      id: faker.datatype.hexadecimal({ length: 10, prefix: 'WB', case: 'upper' }),
      amount: '$' + faker.datatype.float({ max: 100 }),
      coin: faker.datatype.number({ min: 0, max: 100, precision: 0.00000001 }),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      age: faker.datatype.number(40),
      // date: faker.date.past(10),
      date: faker.date.between('2023-02-01T00:00:00.000Z', '2023-02-28T00:00:00.000Z'),
      time: faker.datatype.number(1) + ' minute ago',
      visits: faker.datatype.number(1000),
      status: faker.helpers.shuffle<Person['status']>([
        'relationship',
        'complicated',
        'single',
      ])[0]!,
    }
  }
  
  export function mockData(...lens: number[]) {
    const makeDataLevel = (depth = 0): Person[] => {
      const len = lens[depth]!
      return range(len).map((d): Person => {
        return {
          ...newPerson(),
          subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
        }
      })
    }
  
    return makeDataLevel()
  }