const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
   For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface

  class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }**/

  function removeKFromList(l, k) {
    function arrayToList(array) {
      let list = new ListNode(array[0]);

      for (let i = array.length - 1; i > 0; i--) {
        list.next = {value: array[i], next: list.next};
      }
      return list;
    }

    let list = arrayToList(l);

    function remove(list, k){

      let current = list;
      while(current.value == k){
        current.value = current.next.value;
      }
      while(current.next){
        if(current.next.value === k){
          current.next = current.next.next;
        } else {
          current = current.next
        }
      }
   return list
  }
  let result = remove(list,k);
  

  return result

}

module.exports = {
  removeKFromList
};
