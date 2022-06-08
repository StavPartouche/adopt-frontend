const data = {
    dog: [// dog
        {
            title: 'גורים',
            desc: 'עד גיל שנה',
            tests: [
                {
                    title: 'הכנות לפני הגעת הגור',
                    desc: 'מידע רפואי, סדר והכנה',
                    questions: [//select, multi-select, complete, select-car
                        {
                            type: 'select-car',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הביצה שלי',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                        {
                            type: 'complete',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ותנו לו להירגע.',
                            answers: [
                                {
                                    txt: 'שמרו על סדר יום ושגרה יומית והכינו לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כן כן תשובות שאלות ודברים כאלה יאללה תתקדם'
                        },
                        {
                            type: 'complete',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ותנו לו להירגע.',
                            answers: [
                                {
                                    txt: 'שמרו על סדר יום ושגרה יומית והכינו לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כן כן תשובות שאלות ודברים כאלה יאללה תתקדם'
                        },
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
            ]
        },
        {
            title: 'בוגרים',
            desc: 'מעל גיל שנה',
            tests: []
        },
        {
            title: 'מבוגרים',
            desc: 'מעל גיל 8',
            tests: []
        },
    ],
    cat: [
        {
            title: 'גורים',
            desc: 'עד גיל שנה',
            tests: [
                {
                    title: 'הכנות לפני הגעת הגור',
                    desc: 'מידע רפואי, סדר והכנה',
                    questions: [//select, multi-select, complete, select-car
                        {
                            type: 'select-car',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הביצה שלי',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                        {
                            type: 'complete',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ותנו לו להירגע.',
                            answers: [
                                {
                                    txt: 'שמרו על סדר יום ושגרה יומית והכינו לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כן כן תשובות שאלות ודברים כאלה יאללה תתקדם'
                        },
                        {
                            type: 'complete',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ותנו לו להירגע.',
                            answers: [
                                {
                                    txt: 'שמרו על סדר יום ושגרה יומית והכינו לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כן כן תשובות שאלות ודברים כאלה יאללה תתקדם'
                        },
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
            ]
        },
        {
            title: 'בוגרים',
            desc: 'מעל גיל שנה',
            tests: []
        },
        {
            title: 'מבוגרים',
            desc: 'מעל גיל 8',
            tests: []
        },
    ],
    bird: [
        {
            title: 'גורים',
            desc: 'עד גיל שנה',
            tests: [
                {
                    title: 'הכנות לפני הגעת הגור',
                    desc: 'מידע רפואי, סדר והכנה',
                    questions: [//select, multi-select, complete, select-car
                        {
                            type: 'select-car',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הביצה שלי',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                        {
                            type: 'complete',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ותנו לו להירגע.',
                            answers: [
                                {
                                    txt: 'שמרו על סדר יום ושגרה יומית והכינו לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כן כן תשובות שאלות ודברים כאלה יאללה תתקדם'
                        },
                        {
                            type: 'complete',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ותנו לו להירגע.',
                            answers: [
                                {
                                    txt: 'שמרו על סדר יום ושגרה יומית והכינו לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כן כן תשובות שאלות ודברים כאלה יאללה תתקדם'
                        },
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
            ]
        },
    ],
    rabbit: [
        {
            title: 'גורים',
            desc: 'עד גיל שנה',
            tests: [
                {
                    title: 'הכנות לפני הגעת הגור',
                    desc: 'מידע רפואי, סדר והכנה',
                    questions: [//select, multi-select, complete, select-car
                        {
                            type: 'select-car',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הביצה שלי',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                        {
                            type: 'complete',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ותנו לו להירגע.',
                            answers: [
                                {
                                    txt: 'שמרו על סדר יום ושגרה יומית והכינו לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כן כן תשובות שאלות ודברים כאלה יאללה תתקדם'
                        },
                        {
                            type: 'complete',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ותנו לו להירגע.',
                            answers: [
                                {
                                    txt: 'שמרו על סדר יום ושגרה יומית והכינו לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כן כן תשובות שאלות ודברים כאלה יאללה תתקדם'
                        },
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
            ]
        },
    ],
    fish: [
        {
            title: 'גורים',
            desc: 'עד גיל שנה',
            tests: [
                {
                    title: 'הכנות לפני הגעת הגור',
                    desc: 'מידע רפואי, סדר והכנה',
                    questions: [//select, multi-select, complete, select-car
                        {
                            type: 'select-car',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הביצה שלי',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                        {
                            type: 'complete',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ותנו לו להירגע.',
                            answers: [
                                {
                                    txt: 'שמרו על סדר יום ושגרה יומית והכינו לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כן כן תשובות שאלות ודברים כאלה יאללה תתקדם'
                        },
                        {
                            type: 'complete',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ותנו לו להירגע.',
                            answers: [
                                {
                                    txt: 'שמרו על סדר יום ושגרה יומית והכינו לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כן כן תשובות שאלות ודברים כאלה יאללה תתקדם'
                        },
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: 'חשוב לשים לב אצל הווטרינר ליסודיות, מקצועיות, קרבה וזמינות, ושיש לו גישה נכונה לבעלי חיים. '
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
                {
                    title: 'וטרינר וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions: [
                        {
                            type: 'select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'מה עושים טרם הגעת הכלב',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להביא את כלי השחיטה ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את הלהביור ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להביא את גרזן ולהתכונן לארוחה טעימה',
                                    isCorrect: false
                                },
                            ],
                            explanations: [
                                {
                                    title: 'הרחיקו מהרצפה זבל, תרופות וחומרי ניקוי',
                                    desc: 'הוציאו או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                                },
                                {
                                    title: 'הסביבה הביתית שלכם מסקרנת',
                                    desc: 'חישבו על הסביבה הביתית שלכם מנקודת מבטו של הכלב שרואה המון דברים מסקרנים על הרצפה שאולי חמקו מעיניכם ועלולים לסכן אותו.'
                                },
                            ]
                        },
                        {
                            type: 'multi-select',//select or multi-select (in "select" 1 answers is true, in "multi-select" multipele of them can be true)
                            txt: 'איזה ציוד צריך לרכוש',
                            answers: [
                                {
                                    txt: 'בושם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יורה כדורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חטיפי אילוף',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תיק נשיאה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עצמות וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: [
                                {
                                    title: 'מזון, מיטה, קערות, קולר ורצועה, צעצועים, עצמות וחטיפים.',
                                    desc: 'כחלק מההיערכות אתם צפויים לרכוש מספר פריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה. אלו הם שמונת הפריטים שחשוב ונחוץ שיהיה בבית לפני הגעתו. כמובן ובמידה ויש אין צורך לקנות חדש.'
                                }
                            ]
                        },
                    ]
                },
            ]
        },
    ],
}

function getAnimalData(animal) {
    return data[animal]
}

function getTests(animal, ageIdx) {
    return data[animal][ageIdx].tests
}

function getAnimalAgeOptions(animal) {
    if (data[animal].length === 1) return null

    return data[animal].map(opt => {
        return {
            title: opt.title,
            desc: opt.desc
        }
    })
}
function getCurrTest(petDetails) {
    return data[petDetails.type][petDetails.ageIdx].tests[petDetails.currTest]
}
function getTestByIdx(petDetails, testIdx) {
    return data[petDetails.type][petDetails.ageIdx].tests[testIdx]
}

export const animalService = {
    getAnimalData,
    getAnimalAgeOptions,
    getCurrTest,
    getTests,
    getTestByIdx
}