class Hashmap {
  constructor() {
    this.arraySize = 16;
    this.array = new Array(this.arraySize).fill(null);
    this.loadFactor = 0.75;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.array.length;
  }

  resize() {
    const length = this.length();

    if (length / this.array.length >= this.loadFactor) {
      this.arraySize = this.arraySize * 2;
      const oldArray = [...this.array];
      this.array = oldArray.concat(new Array(this.arraySize).fill(null));
    }
  }

  set(key, value) {
    const hashCode = this.hash(key);

    this.array[hashCode] = value;
    this.resize();
  }

  get(key) {
    const index = this.hash(key);
    return this.array[index];
  }

  has(key) {
    if (!this.array[key]) {
      return false;
    }

    return true;
  }

  remove(key) {
    const index = this.hash(key);
    if (this.array[index] === null) {
      return false;
    }

    this.array[index] = null;
    this.resize();
    return true;
  }

  length() {
    let counter = 0;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] !== null) {
        counter += 1;
      }
    }
    return counter;
  }

  clear() {
    this.array.fill(null);
  }

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i] !== null) {
        const [key] = this.array[i];
        keysArray.push(key);
      }
    }

    return keysArray;
  }

  values() {}

  entries() {}
}

const myHashmap = new Hashmap();

myHashmap.set("firstname", "Bob");
myHashmap.set("lastname", "Smith");
myHashmap.set("firstname", "John");
myHashmap.set("lastname", "Baron");
myHashmap.set("lastname", "Lindt");
myHashmap.set("firstname", "Luna");

myHashmap.set("age", "105");
myHashmap.set("city", "Toronto");
myHashmap.set("city", "Edmenton");
myHashmap.set("language", "JavaScript");
myHashmap.set("plane", "SR-71");
myHashmap.set("dog", "Shiba");

myHashmap.set("car", "Toyota");

// Print keys
console.log("Keys:", myHashmap.keys());

// Print individual values using get
console.log("Value for 'firstname':", myHashmap.get("firstname"));
console.log("Value for 'lastname':", myHashmap.get("lastname"));
console.log("Value for 'age':", myHashmap.get("age"));
console.log("Value for 'city':", myHashmap.get("city"));

// Check if certain keys exist
console.log("Does 'language' exist?", myHashmap.has("language"));
console.log("Does 'country' exist?", myHashmap.has("country"));

// Remove a key
console.log("Removing 'car':", myHashmap.remove("car"));
console.log("Keys after removing 'car':", myHashmap.keys());

// Check the length of the myHashmap
console.log("Length of the myHashmap:", myHashmap.length());

// Clear the myHashmap
myHashmap.clear();
console.log("Keys after clearing the myHashmap:", myHashmap.keys());
