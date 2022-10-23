// @ts-check

export default class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) { // método que adiciona elementos no final da  fila
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() { // método que remove elementos do início da fila
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() { // método que retorna o elemento que está na frente da fila
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  isEmpty() { // método que retorna "true" se a fila estiver vazia e "false" se seu tamanho for maior que 0
    return this.size() === 0;
  }

  clear() { // método que permite apagar todos os os elemntos que estão na fila de uma única vez
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  size() { // método que retorna o tamanho da fila
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
