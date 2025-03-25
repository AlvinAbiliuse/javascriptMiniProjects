let api_key = "96d3c6d92ff346dba3e0400a46f3068b";

let tt = fetch("https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&apiKey=" + api_key);

console.log(tt);
