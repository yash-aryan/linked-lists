'use strict';

function LinkedList() {
	function Node(value, next = null) {
		length++;
		return { value, next };
	}

	const headNode = { next: null };
	let length = 0;

	function head() {
		return headNode.next;
	}

	function tail() {
		return nodeAt(length - 1);
	}

	function nodeAt(index) {
		let node = headNode;
		for (let i = 0; i <= index; i++) {
			node = node.next;
		}
		return node;
	}

	function prepend(value) {
		headNode.next = Node(value, headNode.next);
	}

	function append(value) {
		tail().next = Node(value);
	}

	function pop() {
		if (size() === 0) return null;
		const lastElement = tail();

		// Making 2nd last element's next key point to null
		if (size() === 1) headNode.next = null;
		else nodeAt(length - 2).next = null;
		length--;
		return lastElement;
	}

	function contains(targetValue) {
		if (targetValue === undefined) return;
		return search(headNode.next);

		function search(node) {
			if (node.value === targetValue) return true;
			if (node.next === null) return false;
			return search(node.next);
		}
	}

	function find(targetValue)  {
		if (targetValue === undefined) return;
		let index = 0;
		return search(headNode.next);

		function search(node) {
			if (node.value === targetValue) return index;
			if (node.next === null) return null;
			index++;
			return search(node.next);
		}
	}

	function display() {
		return getStr(headNode);

		function getStr(node) {
			if (node.next === null) return 'null';
			return `( ${node.next.value} ) -> ${getStr(node.next)}`;
		}
	}

	function size() {
		return length;
	}

	return {
		head,
		tail,
		nodeAt,
		prepend,
		append,
		pop,
		contains,
		find,
		display,
		size,
	};
}
