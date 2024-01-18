const makeChange = (c) => {
  // your name here
	let ans = {
	q : 0,
	d : 0,
	n : 0,
	p : 0
	
	};
	if(c / 25 >0){
		ans.q = parseInt(c/25);
		c = c%25
	}
	if(c / 10 >0){
		ans.d = parseInt(c/10);
		c = c%10
	}
	if(c / 5 >0){
		ans.n = parseInt(c/5);
		c = c%5
	}
	if(c / 1 >0){
		ans.p = parseInt(c/1);
		
	}
	return ans;
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
