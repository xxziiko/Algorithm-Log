export class MinHeap {
	private heap: number[];

	constructor() {
		this.heap = [];
	}

	private getParentIndex(index: number): number {
		return Math.floor((index - 1) / 2);
	}

	private getLeftChildIndex(index: number): number {
		return 2 * index + 1;
	}

	private getRightChildIndex(index: number): number {
		return 2 * index + 2;
	}

	public peek(): number | undefined {
		return this.heap[0];
	}

	public pop(): number | undefined {
		if (this.heap.length === 1) return this.heap.pop();

		const root = this.heap[0];
		this.heap[0] = this.heap.pop()!;
		this.heapifyDown(0);
		return root;
	}

	public push(value: number): void {
		this.heap.push(value);
		this.heapifyUp(this.heap.length - 1);
	}

	public size(): number {
		return this.heap.length;
	}

	private heapifyUp(index: number): void {
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

	private heapifyDown(index: number): void {
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
