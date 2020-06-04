const CacheEntity = require('./index')

test('Init the cache', () => {
  const cache = new CacheEntity({
    users: 'https://jsonplaceholder.typicode.com/users/{key}',
    todos: 'https://jsonplaceholder.typicode.com/todos/{key}',
  })

  expect(cache.store).toEqual({ users: {}, todos: {} });
});

test('Adds data of an enitty', () => {
  const cache = new CacheEntity({
    todos: 'https://jsonplaceholder.typicode.com/todos/{key}',
  })
  
  cache.add('todos', { 1: { name: 'Buy apples' }, 2: { name: 'Fix bugs' } })

  expect(cache.store).toEqual({ todos: { 1: { name: 'Buy apples' }, 2: { name: 'Fix bugs' } } })
})

test('Lookup for an entity', async () => {
  const cache = new CacheEntity({
    todos: 'https://jsonplaceholder.typicode.com/todos/{key}',
  })
  
  const todo = await cache.lookup('todos', 1)

  expect(todo).toEqual({
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  })
})

test('Throws error if an entity has not been initialized', () => {
  const cache = new CacheEntity({
    todos: 'https://jsonplaceholder.typicode.com/todos/{key}',
  })

  expect(() => {
    cache.add('users', { 1: { name: 'John' } })
  }).toThrow(Error)
})
