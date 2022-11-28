const search_form  = document.querySelector(`.search-form`);
const color_input  = document.querySelector(`.desired-color`);
const animal_input = document.querySelector(`.desired-animal`);
const results      = document.querySelector(`.results`);

search_form.addEventListener(`submit`, (e) => {
    results.innerHTML = ``;
    e.preventDefault();
    
    const user_color_data       = color_input.value;
    const user_animal_data      = animal_input.value;
    const displayed_information = `

        <h1 class="display-color-result">${user_color_data}</h1>
        <h1 class="display-animal-result">${user_animal_data}</h1>

    `;
    results.innerHTML = displayed_information;
});