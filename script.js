// complete the given function

function palindrome(str){
	let low=0,high=str.length-1;
	while(str.charAt(low)==str.charAt(high)){
		low++;
		high--;
	}

	if(low>high) return true;
	else return false;
}
module.exports = palindrome
