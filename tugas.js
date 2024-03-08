function findCountry(nameofCountry) {
    const countries = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Filipina', 'Kamboja', 'Amerika Serikat', 'Inggris', 'Timor Leste'];

    const found = countries.filter((e) => e.toUpperCase() === nameofCountry.toUpperCase());

    if (found) {
        console.log("Ada");
    } else {
        console.log("Tidak Ada");
    }

    return(`Negara yang diinput : ${nameofCountry}`);
}

console.log(findCountry("Indo"));