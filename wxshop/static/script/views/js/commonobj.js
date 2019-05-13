define(["jquery"],function(require){
	return commonobj={

		//购物车减法
		 reducenums:function(){
              	var  number=parseInt($(this).next().val());
              	if(!isNaN(number)){
                      if(number<2){
                         	number=1
                         }else{
         	                number-=1;
                         }
             	}else{
   		          number=1;
                  	}
               	$(this).next().val(number);
        },


               addnums:function(){
            var number=parseInt($(this).prev().val());
            if(!isNaN(number)){
                if(number<1){
                    number=1;
                }else{
                  number+=1; 
                }
            }else{
                number=1

            }
           $(this).prev().val(number);
        },



	}
  
})