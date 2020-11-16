function binary_search(list, item) {
    var low = 0;
    var high = (list.length) - 1;

    while (low <= high) {
        var mid = (low + high) / 2;
        var guess = list[mid];

        if (guess === item) return mid;
        if (guess > item) return high = mid - 1;
        else low = mid + 1;

        return null;
    }
}

list = [1, 3, 5, 7, 9];

console.log(binary_search(list, 3));
console.log(binary_search(list, 9));
  //다시 할것.. ㅠㅠ
