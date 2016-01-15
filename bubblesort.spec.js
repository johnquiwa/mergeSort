describe('Bubble Sort', function(){
	it('handles an empty array', function(){
		expect( bubbleSort([]) ).toEqual( [] );
	});


	it('sorts an array of one element', function(){
		expect( bubbleSort([10])).toEqual([10]);
	})


	it('sorts array', function(){
		expect( bubbleSort( [3,2,1] ) ).toEqual( [1,2,3]);
		expect( bubbleSort( [10,8,3,7] ) ).toEqual( [3,7,8,10]);
	});

});

