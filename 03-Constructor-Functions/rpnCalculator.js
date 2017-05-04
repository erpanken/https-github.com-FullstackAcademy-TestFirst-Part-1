function  RPNCalculator (){
	this.values =[];

	
}

RPNCalculator.prototype.value = function(){
	return this.values[this.values.length-1];
}
RPNCalculator.prototype.push = function(num){
	this.values.push(num);
}
RPNCalculator.prototype.minus = function(){
	if(this.values.length<2){
		throw "rpnCalculatorInstance is empty";
	}
	var n1 =this.values.pop();
	var n2 = this.values.pop();
	this.values.push(n2-n1);
}
RPNCalculator.prototype.divide = function(){
	if(this.values.length<2){
		throw "rpnCalculatorInstance is empty";
	}
	var n1 =this.values.pop();
	var n2 = this.values.pop();
	this.values.push(n2/n1);
}
RPNCalculator.prototype.plus = function(){
	if(this.values.length<2){
		throw "rpnCalculatorInstance is empty";
	} 
	var n1 =this.values.pop();
	var n2 = this.values.pop();
	this.values.push(n1+n2); 
}

RPNCalculator.prototype.times = function(){
	if(this.values.length<2){
		throw "rpnCalculatorInstance is empty";
	} 
	var n1 =this.values.pop();
	var n2 = this.values.pop();
	this.values.push(n1*n2); 
}