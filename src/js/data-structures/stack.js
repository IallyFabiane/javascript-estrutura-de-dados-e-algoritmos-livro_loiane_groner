// @ts-check

export default class Stack { // classe Stack criada como objeto JavaScript
  constructor() {
    this.count = 0; // a variável count nos auxilia a manter o controle do tamanho da pilha
    this.items = {};
  }

  push(element) { // agora o método push nos permite adicionar apenas um elemnto de cada vez
    this.items[this.count] = element; // count é a chave do objeto items e element é o seu valor
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() { // para saber se a pilha está fazia devemos checar se o valor da propriedade count é 0
    return this.count === 0;
  }

  size() {
    return this.count; // a propriedade count também funciona como o tamanho da pilha!
  }

  clear() {
    /* while (!this.isEmpty()) {
        this.pop();
      } */
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}
