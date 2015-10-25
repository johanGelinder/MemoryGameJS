var difficulty = 0;
var array = new Array();
var id = [["owl", "owl1", "duck", "duck1", "deer", "deer1"],["lion", "lion1", "fox", "fox1", "bear", "bear1", "cat", "cat1"],["dog","dog1","walrus","walrus1","skunk", "skunk1", "elephant","elephant1", "racoon", "racoon1", "cat", "cat1"]];

function flipObject(_id) 
{
    this.flipped = true;
    this.id = _id;
}

function fillArray(diff)
{
    difficulty = diff;
    array = new Array();
    for (var i=0;i<id[difficulty].length;i++)
    {
         // for(var j=0;j<2;j++) // a second array to make 2 pairs
         // {
             array.push(new flipObject(id[difficulty][i]));
         //}
     }
     for(var i=0;i<array.length;i++)
    {
        console.log(array[i].id,array[i].flipped);
        console.log("---------");
    }
}
