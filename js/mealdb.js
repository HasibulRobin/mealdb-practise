document.getElementById('error-messege').style.display = "none";
const searchFood = () => {
    const searchMeal = document.getElementById('search-meal');
    const searchText = searchMeal.value;
    document.getElementById('error-messege').style.display = "none";
    if (searchMeal.value == '') {
        alert('You have to search your food..')
    }
    else {
        searchMeal.value = '';
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => searchMealResult(data.meals))
            .catch(error => displayError(error))
    }
};
const displayError = error => {
    document.getElementById('error-messege').style.display = "block";
}
const searchMealResult = meals => {
    // console.log(meals);
    const searched = document.getElementById('searched');
    searched.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal.strMealThumb);
        const div = document.createElement('div');
        div.classList.add('col')
        // console.log(meal);
        div.innerHTML = `
        <div onclick="mealId('${meal.idMeal}')" class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
        `;
        searched.appendChild(div)
    })
};
const mealId = idMeal => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
};
const displayMealDetails = meal => {
    const mealCard = document.getElementById('meal-card');
    console.log(meal);
    mealCard.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" class="btn btn-danger">Go somewhere</a>
        </div>
    `;
};