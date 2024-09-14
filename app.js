// Country Data
const countries = [
    {
        country: "United States",
        capital: "Washington, D.C.",
        population: 331002651,
        official_language: "English",
        currency: "United States Dollar"
    },
    {
        country: "Canada",
        capital: "Ottawa",
        population: 37742154,
        official_language: ["English", "French"],
        currency: "Canadian Dollar"
    },
    {
        country: "Brazil",
        capital: "Brasília",
        population: 212559417,
        official_language: "Portuguese",
        currency: "Brazilian Real"
    },
    {
        country: "United Kingdom",
        capital: "London",
        population: 67886011,
        official_language: "English",
        currency: "Pound Sterling"
    },
    {
        country: "Australia",
        capital: "Canberra",
        population: 25409800,
        official_language: "English",
        currency: "Australian Dollar"
    },
    {
        country: "Germany",
        capital: "Berlin",
        population: 83783942,
        official_language: "German",
        currency: "Euro"
    },
    {
        country: "France",
        capital: "Paris",
        population: 65273511,
        official_language: "French",
        currency: "Euro"
    },
    {
        country: "Italy",
        capital: "Rome",
        population: 60244639,
        official_language: "Italian",
        currency: "Euro"
    },
    {
        country: "Spain",
        capital: "Madrid",
        population: 46754778,
        official_language: "Spanish",
        currency: "Euro"
    },
    {
        country: "Japan",
        capital: "Tokyo",
        population: 126476461,
        official_language: "Japanese",
        currency: "Japanese Yen"
    },
    {
        country: "China",
        capital: "Beijing",
        population: 1393409038,
        official_language: "Mandarin",
        currency: "Renminbi"
    },
    {
        country: "India",
        capital: "New Delhi",
        population: 1380004385,
        official_language: ["Hindi", "English"],
        currency: "Indian Rupee"
    },
    {
        country: "South Africa",
        capital: "Pretoria",
        population: 59308690,
        official_language: ["Zulu", "Xhosa", "Afrikaans", "English"],
        currency: "South African Rand"
    },
    {
        country: "Russia",
        capital: "Moscow",
        population: 145912025,
        official_language: "Russian",
        currency: "Russian Ruble"
    },
    {
        country: "Mexico",
        capital: "Mexico City",
        population: 128932753,
        official_language: "Spanish",
        currency: "Mexican Peso"
    },
    // Add more countries as needed...
];

// Search Function
function searchCountries() {
    let input = document.getElementById('searchBar').value.toLowerCase();
    let results = document.getElementById('results');
    results.innerHTML = ''; // Clear previous results

    let found = false;

    countries.forEach(country => {
        let countryName = country.country.toLowerCase();
        let capitalName = country.capital.toLowerCase();
        
        // Check if the input matches the country or the capital
        if (countryName.includes(input) || capitalName.includes(input)) {
            found = true;

            // Handle official language (check if it's an array)
            let officialLanguages = Array.isArray(country.official_language)
                ? country.official_language.join(", ")
                : country.official_language;

            // Create a list item element to display the country details
            let listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>Country:</strong> ${country.country}<br>
                <strong>Capital:</strong> ${country.capital}<br>
                <strong>Population:</strong> ${country.population.toLocaleString()}<br>
                <strong>Official Language(s):</strong> ${officialLanguages}<br>
                <strong>Currency:</strong> ${country.currency}
            `;
            results.appendChild(listItem);
        }
    });

    // Show "No results found" if no matches
    if (!found) {
        results.innerHTML = `<li id="noResult">No results found</li>`;
    }
}
