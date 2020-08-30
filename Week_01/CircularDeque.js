function Node(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
}
/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
    this.size = k;
    this.length = 0;
    this.head = null;
    this.tail = null;
};

/**
 * Adds an item at the front of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    const node = new Node(value);
    if (this.length >= this.size) {
        return false;
    }
    if (this.head) {
        node.next = this.head;
        node.prev = this.tail;
        this.head.prev = node;
        this.head = node;
    } else {
        this.head = node;
        this.tail = node;
        node.prev = node;
        node.next = node;
    }
    this.length++;
    return true;
};

/**
 * Adds an item at the rear of Deque. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
    const node = new Node(value);
    if (this.length >= this.size) {
        return false;
    }
    if (this.tail) {
        this.tail.next = node;
        node.next = this.head;
        node.prev = this.tail;
        this.tail = node;
    } else {
        this.head = node;
        this.tail = node;
        node.prev = node;
        node.next = node;
    }
    this.length++;
    return true;
};

/**
 * Deletes an item from the front of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if (this.length <= 0 || !this.head) {
        return false;
    }
    const head = this.head;
    this.tail.next = head.next;
    head.next.prev = this.tail;
    this.head = head.next;
    head.next = null;
    head.prev = null;
    this.length--;
    if (this.length === 0) {
        this.tail = null;
        this.head = null;
    }
    return true;
};

/**
 * Deletes an item from the rear of Deque. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
    if (this.length <= 0 || !this.tail) {
        return false;
    }
    const tail = this.tail;
    this.head.prev = tail.prev;
    tail.prev.next = this.head;
    this.tail = tail.prev;
    tail.next = null;
    tail.prev = null;
    this.length--;
    if (this.length === 0) {
        this.tail = null;
        this.head = null;
    }
    return true;
};

/**
 * Get the front item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if (this.head) {
        return this.head.value;
    }
    return -1;
};

/**
 * Get the last item from the deque.
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
    if (this.tail) {
        return this.tail.value;
    }
    return -1;
};

/**
 * Checks whether the circular deque is empty or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return this.length === 0;
};

/**
 * Checks whether the circular deque is full or not.
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return this.length === this.size;
};

/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */