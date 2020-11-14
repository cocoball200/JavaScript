var each = function (data, fuc) {

    if (Array.isArray(data)) {
        //if문을 다시 들어가지 않음, 한번만 들어감.
        console.log('1')
        for (let i = 0; i < data.length; i++) {
            console.log('for loop')
            fuc(data[i], i, data);
        }
    } else {
        for (let key in data) {
            fuc(data[key], key, data);
        }
    }
}

each({ a: 'd', b: 'la', c: 'lol' }, function (value, index, data) {
    console.log('2')
    if (value === 'a') {
        console.log(value);
    }
    console.log('3')
    console.log('is working? ');
})


var every = function (collection, iterator) {
    if (iterator === undefined) {
      for (var key in collection) {
        if (!collection[key]) return false;
      }
      return true;
    } else {
      for (var key in collection) {
        if (!iterator(collection[key])) return false;
      }
      return true;
    }
  };

var list = [1,2,3];

every(list, function(item){
  console.log(item);
  return item;
})