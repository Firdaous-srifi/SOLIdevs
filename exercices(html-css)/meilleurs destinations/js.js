function afficher() { 
    let cityCount = document.querySelectorAll('.city');
    let totalCities = cityCount.length;

    document.getElementById('cities').innerHTML += `${totalCities} Villes`;

}

    function rechercher() {
        let input = document.getElementById('input');
        let value = input.value;
        let description = document.getElementById('description');
        description.innerHTML = ""; 
    
        if (value !== "") {
            let city = document.getElementById(value);
            if (city) {
                description.innerHTML = city.querySelector('p').innerHTML;
            } else {
                alert("Ville non trouvée.");
            }
        } else{
            alert('Veuillez entrer une ville.');
        }
    }