export class Counter {
    constructor(showCount) {
        // 숫자를 증가하거나 감소할 변수
        this.count = 0;
        // 숫자를 보여줄 영역
        this.showCount = showCount;
    }
    // 숫자를 증가시킬 메서드
    increment() {
        this.count++;
        console.log(this.count);
        this.updateCount();
    }
    // 숫자를 감소시킬 메서드
    decrement() {
        this.count--;
        console.log(this.count)
        this.updateCount();
    }

    // 계산된 결과를 보여줄 메서드
    updateCount() {
        this.showCount.innerHTML = `${this.count}`
    }

}
