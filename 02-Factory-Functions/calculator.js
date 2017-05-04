function createCalculator(){
	var obj ={};
	var num = 0;
	obj.value = function(){return num;}
	obj.add =function(number){
		num += number;
	}
    obj.subtract =function(number){
    	num-=number;
    }
    obj.clear =function(){
    	num = 0;
    }
    return obj;
}