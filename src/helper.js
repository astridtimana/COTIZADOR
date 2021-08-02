export function getYearsDifference(year){
    return new Date().getFullYear() - year;
}

// calcula el total a pagar segun la marca
export function calculateBrand(brand){
    let increase;

    switch (brand) {
        case 'european':
            increase= 1.30;
            break;

        case 'asian':
            increase= 1.05;
            break;

        case 'american':
            increase= 1.15;
            break;

        default:
            break;
    }

    return increase;
}

//Calcula el tipo de seguro
export function calculatePlan(plan){
    return (plan ==="basico" ? 1.20 : 1.50)
}

// Muestra la priemra letra mayusc

export function firstUpperCase(text){
    return text.charAt(0).toUpperCase()+ text.slice(1);
}