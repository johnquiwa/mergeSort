describe('Merge', function(){
    it('is able to merge two sorted arrays', function(){
        expect( merge( [7,10],[4,8] ) ).toEqual( [4,7,8,10]);
        expect( merge( [3,7,10,13,15],[2,4,8,12] ) ).toEqual( [2,3,4,7,8,10,12,13,15]);
    });
});

describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect( split([1,3,2,4])).toEqual([ [1,3], [2,4] ]);
  });
});

describe('Merge Sort', function(){
    it('is able to sort one array', function(){
        expect( mergeSort( [3,7,10,13,2,4,8,12] ) ).toEqual( [2,3,4,7,8,10,12,13]);
    });
});
