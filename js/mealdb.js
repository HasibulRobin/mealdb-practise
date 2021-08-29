const searchFood = () => {
    const searchMeal = document.getElementById('search-meal');
    const searchText = searchMeal.value;
    if (searchMeal.value == '') {
        alert('You have to search your food..')
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => searchMealResult(data.meals))
        searchMeal.value = '';

    }
}
const searchMealResult = meals => {
    // console.log(meals);
    const searched = document.getElementById('searched');
    searched.innerHTML = '';
    meals.forEach(meal => {
        console.log(meal.strMealThumb);
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick="mealDetails()" class="card">
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
const mealDetails = meals => {
    console.log(meals);
}
