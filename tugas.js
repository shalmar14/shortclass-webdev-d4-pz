

function country() {
const countries = ['Indonesia', 'Malaysia', 'Singapura', 'Brunei', 'Filipina', 'Kamboja', 'Amerika Serikat', 'Inggris', 'Timor Leste']

if (countries.filter((countries) => countries.includes('a', 'o', 's'))) {
console.log('Ada');
} else {
console.log('Tidak Ada');
}

}

country();
