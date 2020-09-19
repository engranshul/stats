## My learning from this project :

* to use node package (ex fs) inside typescript execute : npm i @types/node
* enum usage in case something has fixed set of limited values. Eg primaryColors,
  matchResults etc
* using tuple to manage type of fields in an array
* converting date string to date object 
* we should avoid use of ANY data type as much as possible
* generics allows us to define type of a property/argument/return value at a
  future point.Used heavily when writing reusable code.
  
  class HoldAnything<TypeOfData> {
    data : TypeOfData;

    add(a:T):T {
      return a;
    }
  }
  const holdNumber=new HoldAnything<number>();
  holdNumber.data = 1223;
  holdNumber.add(10);

  const holdString=new HoldAnything<string>();
  holdString.data = "asalsjl";
* inheritance(is-a relationship) vs composition(has-a)

