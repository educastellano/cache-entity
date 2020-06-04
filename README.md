# Cache Entity

Cache remote resources in a key-value store

# Install

    npm install cache-entity

# Usage


```js
    import CacheEntity from 'cache-entity'

    // Init
    const cache = new CacheEntity({
        users: 'https://jsonplaceholder.typicode.com/users/{key}',
        todos: 'https://jsonplaceholder.typicode.com/todos/{key}',
    })

    // Add data 
    cache.add('todos', { 1: { name: 'Buy apples' }, 2: { name: 'Fix bugs' } })

    // Lookup 
    const todo1 = await cache.lookup('todos', 1) // will not fetch
    const todo2 = await cache.lookup('todos', 3) // will fetch
    const todo3 = await cache.lookup('todos', 3) // will not fetch
    
```

## Changelog

* 1.0.0 
    * Initial release :tada:

## License

[ISC License](http://opensource.org/licenses/ISC)
