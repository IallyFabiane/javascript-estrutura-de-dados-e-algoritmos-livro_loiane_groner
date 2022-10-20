// @ts-check

export default class StackArray {
  constructor() {
    this.items = [];
  }

  push(element) { // método que adiciona um ou vários elementos no topo da pilha
    this.items.push(element);
  }

  pop() { // método que remove o elemento que está no topo da pilha. Também devolve o elemento removido
    return this.items.pop();
  }

  peek() { // método que devolve o elemento que está no topo da pilha, sem modificá-la
    return this.items[this.items.length - 1];
  }

  isEmpty() { // método que devolve "true" se a pilha não contiver nenhum elemento e "false" se o número de elementos da pilha for maior que 0
    return this.items.length === 0;
  }

  size() { // método que devolve o número de elementos em uma pilha, semelhante a propriedade lengthde um array
    return this.items.length;
  }

  clear() { // metodo que remove todos os elementos da pilha
    this.items = [];
  }

  toArray() {
    return this.items;
  }

  toString() {
    return this.items.toString();
  }
}
