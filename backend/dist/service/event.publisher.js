export class EventPublisher {
    observers = new Set();
    attach(observer) {
        this.observers.add(observer);
    }
    detach(observer) {
        this.observers.delete(observer);
    }
    async notify(event) {
        await Promise.all([...this.observers].map((observer) => observer.update(event)));
    }
}
