const data = {
    dog: [// dog
        {
            title: 'גורים',
            desc:'עד גיל שנה',
            tests:[
                {
                    title: 'הכנות לפני הגעת הגור',
                    desc:'מידע רפואי, סדר והכנה',
                    questions:[
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt:'מה עושים טרם הגעת הכלב',
                            answers:[
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                }
                            ],
                            explanations:[
                                {
                                    title:'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title:'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                    ]
                }
            ]
        },
        {
            title: 'בוגרים', 
            desc:'מעל גיל שנה',
            tests: []
        },
        {
            title: 'מבוגרים', 
            desc:'מעל גיל 8',
            tests: []
        },
    ],
}

function getAnimalData(animal){
    return data[animal]
}

function getAnimalAgeOptions(animal){
    if(data[animal].length === 1) return null

    return data[animal].map( opt => { 
        return {
            title: opt.title, 
            desc: opt.desc
        }
    })
}

export const animalService = {
    getAnimalData,
    getAnimalAgeOptions
}