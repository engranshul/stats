## What is this project :

I did this project as a part of online course.In this i have made an
typescript application that reads data from file,parse the file data,
analyse data and than finally do reporting of that data.

To run this project execute : npm start

## My learnings from this project :

* to use node package (ex fs) inside typescript execute : npm i @types/node
* enum usage in case something has fixed set of limited values. Eg primaryColors,
  matchResults etc
* using tuple to manage type of fields in an array..in this project we used tuple
  to describe csv row.
* converting date string to date object 
* we should avoid use of ANY data type as much as possible
* generics allows us to define type of a property/argument/return value at a
  future point.Used heavily when writing reusable code.
  
  class HoldAnything<T> {
    data : T;

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
* static methods concept className.methodName()
* checkout Summary class to get a view of how we are using composition 


