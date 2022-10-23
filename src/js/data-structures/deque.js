// @ts-check

export default class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) { // método que adiciona um novo elemento na frente do deque
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) { // cenário no qual um elemento é removido da frente do deque
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else { // cenário no qual lowestCount == 0; movendo todos os elementos do deque a fim de deixar o index 0 livre
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[0] = element; // sobreescrevendo o index 0
    }
  }

  addBack(element) { // método que adiciona um elemento no fim do deque
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() { // método que remove o primeiro elemento do deque
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() { // método que remove o último elemento do deque
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() { // método que devolve o primeiro elemento do deque
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() { // método que devolve o último elemento do deque
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
