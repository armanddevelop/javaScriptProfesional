interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitCoinPrice implements Subject {
  observers: Array<Observer> = [];
  constructor() {
    const element = document.getElementById("value") as HTMLInputElement;
    element.addEventListener("input", () => {
      this.notify(element.value);
    });
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const idx = this.observers.findIndex((obs) => obs === observer);
    this.observers.splice(idx, 1);
  }

  notify(data: any) {
    this.observers.forEach((observer) => observer.update(data));
  }
}

class DisplayPrice implements Observer {
  private elementPrice: HTMLElement;
  constructor() {
    this.elementPrice = document.getElementById("price") as HTMLElement;
  }
  update(data: any) {
    this.elementPrice.innerText = data;
  }
}

const value = new BitCoinPrice();
const display = new DisplayPrice();

value.subscribe(display);
setTimeout(() => value.unsubscribe(display), 5000);
