const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

class MinHeap {
  constructor() {
    this.heap = [];
  }

   getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

   getLeftChildIndex(index) {
    return 2 * index + 1;
  }

   getRightChildIndex(index) {
    return 2 * index + 2;
  }

   peek() {
    return this.heap[0];
  }

   pop() {
    if (this.heap.length === 1) return this.heap.pop();

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown(0);
    return root;
  }

   push(value) {
    this.heap.push(value);
    this.heapifyUp(this.heap.length - 1);
  }

   size() {
    return this.heap.length;
  }

   heapifyUp(index) {
    let currentIndex = index;

    while (currentIndex > 0) {
      const parentIndex = this.getParentIndex(currentIndex);
      if (this.heap[currentIndex] < this.heap[parentIndex]) {
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];

        currentIndex = parentIndex;
      } else break;
    }
  }

   heapifyDown(index) {
    let currentIndex = index;

    while (this.getLeftChildIndex(currentIndex) < this.size()) {
      const leftChildIndex = this.getLeftChildIndex(currentIndex);
      const rightChildIndex = this.getRightChildIndex(currentIndex);

      let smallerIndex = leftChildIndex;

      if (
        rightChildIndex < this.size() &&
        this.heap[rightChildIndex] < this.heap[leftChildIndex]
      ) {
        smallerIndex = rightChildIndex;
      }

      if (this.heap[currentIndex] > this.heap[smallerIndex]) {
        [this.heap[currentIndex], this.heap[smallerIndex]] = [
          this.heap[smallerIndex],
          this.heap[currentIndex],
        ];

        currentIndex = smallerIndex;
      } else break;
    }
  }
}


function run(input) {
	// 최소의 강의실을 사용해서 모든 수업을 가능하게
	const N = Number(input[0]);
	const rooms = input.slice(1).map((string) => string.split(" ").map(Number));

	rooms.sort((a, b) => a[0] - b[0]);

	//필요한 것을 관리하기 필요한것 - 강의실
	// 지금 확인하는 수업을 기존의 강이실에 이어서 할 수 있나?
	// 가능하다면, 어떤 강의실에 배정? -> 가장 빨리 끝나는 강의실에 배정
	// 불가능 하다면, 새로운 강의실 개설

	const roomEndTime = new MinHeap();

	// 강의실 개수 출력
	for (const room of rooms) {
		const [start, end] = room;

		if (start >= roomEndTime.peek()) {
			roomEndTime.pop(); // 가장 빨리 끝나는 수업 제거
		}

		roomEndTime.push(end);
	}

	return roomEndTime.size();
}

console.log(run(input));
