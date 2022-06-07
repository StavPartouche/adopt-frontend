const tips = {
    dog: [ //dog
        {
            title: 'משמעות לסדר הרכיבים',
            desc: 'במזונות של כלבינו יש חשיבות לסדר הרכיבים. על פי חוק, רשימת הרכיבים צריכה להיות בסדר כמות מופחתת כך שהכמות הגדולה ביותר באוכל לכלב היא המרכיב הראשון הכמות הקטנה ביותר במזון היא המרכיב האחרון.'
        },
        {
            title: 'לא לנקות עם אקונומיקה',
            desc: 'במזונות של כלבינו יש חשיבות לסדר הרכיבים. על פי חוק, רשימת הרכיבים צריכה להיות בסדר כמות מופחתת כך שהכמות הגדולה ביותר באוכל לכלב היא המרכיב הראשון הכמות הקטנה ביותר במזון היא המרכיב האחרון.'
        }
    ],
}

function getReleventTips(animal) {
    return tips[animal]
}   

export const tipsService = {
    getReleventTips
}