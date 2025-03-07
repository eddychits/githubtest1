//objects
let Edward = {
  Name : "Chits",
  Age : 27,
  Gender : "Male",
  //object in object
  Laptop : {
  Model: "Windows",
  Color : "Black",
  }
}
//For In loop in objects
for( let key in Edward.Laptop)
{
  console.log(key,Edward.Laptop[key])
}

  




