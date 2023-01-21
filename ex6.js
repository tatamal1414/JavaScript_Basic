

numbers = [1,2,3];
chars = ["abc"."cde","efg"];
chars = ["abc","cde","efg"];



new_aray = [...numbers,...chars];

test = ["aiueo","aaaaa"];

test.pop();
test.pop();
test = ["aiueo","aaaaa"];



test.pop();



new_array2 = [...numbers,...chars,...test];






console.log(new_array2)







{"id":0,"name":"My name","own_car":true}


info = {"id":0,"name":"My name","own_car":true}
info.id


info["name"]

info.id = 5;

info["own_car"] = false;

info.age = 18



info.age



"age" in info;



"parent" in info;




delete info.age;




a = {"id":5,"name":"test_name","own_car":true}
b = {"id":9,"name":"kenta","own_car":true}







new_object = {...a,...b};
b = {"ids":9,"names":"kenta","own_cars":true}




new_object = {...a,...b};
