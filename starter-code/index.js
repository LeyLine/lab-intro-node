var SortedList = function() {
  this.length = 0;
  this.items = [];
};

SortedList.prototype.add = function(item) {
  this.items.push(item);
  this.items.sort(function(a, b) {
    return a - b;
  });
  this.length++;
};
SortedList.prototype.get = function(pos) {
  if (pos > this.items.length || pos < 1) {
    return new Error("OutOfBounds");
  }
  return this.items[pos - 1];
};
SortedList.prototype.max = function() {
  return Math.max.apply(null, this.items);
};
SortedList.prototype.min = function() {
  return Math.min.apply(null, this.items);
};
SortedList.prototype.average = function() {
  var sum = this.items.reduce(function(a, b) {
    return a + b, 0;
  });
  var avg = sum / this.items.length;
  if (this.items.length == 0) {
    throw "EmptySortedList";
  }
  return avg;
};
SortedList.prototype.sum = function() {
  if (this.items.length == 0) {
    return new Error("EmptySortedList");
  } else {
    this.items.reduce(function(a, b) {
      return a + b, 0;
    });
  }
};

module.exports = SortedList;
