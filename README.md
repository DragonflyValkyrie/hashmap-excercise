# hashmap-excercise

Hashmap excercise from TOP

## Features

1. Start by creating a `HashMap` class or factory function. It’s up to you which you want to use. Then proceed to create the following methods:

2. `hash(key)` takes a key and produces a hash code with it. We did implement a fairly good hash function in the previous lesson. You are free to use that, or if you wish, you can conduct your own research. Beware, this is a deep deep rabbit hole.

3. `set(key, value)` takes two arguments, the first is a key and the second is a value that is assigned to this key. If a key already exists, then the old value is overwritten.

   Remember to grow your buckets size when it needs to, by calculating if your bucket has reached the `load factor`.

4. `get(key)` takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return `null`.

5. `has(key)` takes a key as an argument and returns `true` or `false` based on whether or not the key is in the hash map.

6. `remove(key)` takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return `true`. If the key isn’t in the hash map, it should return `false`.

7. `length()` returns the number of stored keys in the hash map.

8. `clear()` removes all entries in the hash map.

9. `keys()` returns an array containing all the keys inside the hash map.

10. `values()` returns an array containing all the values.

11. `entries()` returns an array that contains each `key, value` pair. Example: `[[firstKey, firstValue], [secondKey, secondValue]]`

Remember that a hash map does not preserve insertion order when you are retrieving your hash map’s data. It is normal and expected for keys and values to appear out of the order you inserted them in.
