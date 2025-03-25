let tt = fetch("https://www.themealdb.com/api/json/v1/1/random.php");

tt.then((e) => console.log(e.json()));
