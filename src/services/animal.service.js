const data = {
    dog: [ // dog
        { // גורים
            title: 'גורים',
            desc: 'עד גיל שנה',
            tests: [ 
                { // Lesson 1
                    title: 'הכנות לפני ההגעה',
                    desc: 'מידע רפואי, סדר והכנה',
                    questions: [
                        { // Question 1
                            type: 'select', 
                            txt: 'מה חשוב לסדר בבית לפני הגעת הגור?',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לוודא שכל הדלתות והחלונות סגורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לעטוף את כל הספות והמיטות בפצפצים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לזרוק את כל העציצים בבית',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'הוציאו מהבית או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                        },
                        { // Question 2
                            type: 'select-car',
                            txt: 'לפי מה בוחרים וטרינר.ית?',
                            answers: [
                                {
                                    txt: 'תחבורה ציבורית בקרבת מקום',
                                    isCorrect: false
                                },
                                {
                                    txt: 'גישה נכונה לבעלי חיים, יסודיות, מקצועיות, קרבה וזמינות',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מדים יפים, מרפאה צבעונית, כלובים חזקים ודלת פלדה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מרפאה ניידת וזמינה, בעלת טלפון קווי',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'כך תזכו בשקט נפשי ובריאות טובה לכלבכם.'
                        },
                        { // Question 3
                            type: 'select',
                            txt: 'הגעתם הביתה עם הכלב החדש, מה אז?',
                            answers: [
                                {
                                    txt: 'להראות לו מיד מה מותר ומה אסור',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לתת לו להסתובב, לרחרח ולהתרגל לסביבה החדשה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לזרוק חטיפים ברחבי הבית',
                                    isCorrect: false
                                },
                                {
                                    txt: 'להכניס אותו מיד למלונה שקנינו מראש',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לתת לכלב להירגע בסביבתו החדשה, להתקרב ולהכיר את בני הבית באופן הדרגתי ובסבלנות.'
                        },
                        { // Question 4
                            type: 'complete',
                            txt: 'מה חשוב עבור התאקלמותו של הכלב?',
                            end: 'רק לו ולתת לו להירגע.',
                            answers: [
                                {
                                    txt: 'לקנות לו הרבה צעצועים ולהכין ארוחות גדולות המיועדות...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לשמור על סדר יום ושגרה יומית, להכין לו מקום בבית המיועד...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לחשוף אותו להרבה אנשים ולעשות מסיבה המיועדת...',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'לכלבים יש צורך במקום קבוע ונעים בשביל שיוכלו להתאקלם בבית.'
                        },
                        { // Question 5
                            type: 'multi-select',
                            txt: 'איזה ציוד צריך לרכוש?',
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
                                    txt: 'קערת מים ואוכל',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר ורצועה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'בגדים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'חטיפים וצעצועים',
                                    isCorrect: true
                                },
                            ],
                            explanations: 'אלו הם הפריטים שהכלב יזדקק להם כדי להתאקלם ולהרגיש חלק מהמשפחה.'
                        }
                        
                    ]
                },
                { // Lesson 2
                    title: 'וטרינרים וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 3
                    title: 'מה צריך לקנות',
                    desc: 'ציוד וכל הנדרש',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 4
                    title: 'תזונה ותוספים',
                    desc: 'מותר ואסור לאכול',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 5
                    title: 'טיולים וסכנות',
                    desc: 'חשוב לדעת לפני יציאה',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 6
                    title: 'התנהגויות',
                    desc: 'התנהגות ושפה כלבית',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 7
                    title: 'העשרה ואנרגיה',
                    desc: 'צעצועים וחשיבה',
                    questions:[{},{},{},{},{}]
                },
                {  // Lesson 8
                    title: 'טיפוח והגיינה',
                    desc: 'איך, מתי, למה וכמה',
                    questions:[{},{},{},{},{}]
                },
                {  // Lesson 9
                    title: 'חירום ופתרונות',
                    desc: 'איך להימנע ומה לעשות',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 10
                    title: 'חזרה וסיכום',
                    desc: '',       // אין
                    questions:[]    //אין 
                },
            ]
        },
        { // בוגרים
            title: 'בוגרים',
            desc: 'מעל גיל שנה',
            tests: [
                { // Lesson 1
                    title: 'הכנת הבית',
                    desc: 'מה לקנות ואיך לסדר',
                    questions:[
                        { // Question 1
                            type: 'select', 
                            txt: 'מה חשוב לסדר בבית לפני הגעת הכלב?',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקוי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'לוודא שכל הדלתות והחלונות סגורים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לעטוף את כל הספות והמיטות בפצפצים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לזרוק את כל העציצים בבית',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'הוציאו מהבית או העבירו למקום גבוה כל דבר שעלול לסכן את בטחונו של כלבכם.'
                        },
                        { // Question 2
                        type: 'multi-select',
                        txt: 'מהן שלושת הצעצועים שכל כלב חייב?',
                        answers: [
                            {
                                txt: 'חבל',
                                isCorrect: true
                            },
                            {
                                txt: 'בלונים',
                                isCorrect: false
                            },
                            {
                                txt: 'כרית נוצות',
                                isCorrect: false
                            },
                            {
                                txt: 'כדור',
                                isCorrect: true
                            },
                            {
                                txt: 'יורה כדורים',
                                isCorrect: false
                            },
                            {
                                txt: 'בובה',
                                isCorrect: true
                            },
                            {
                                txt: 'קוביית עץ',
                                isCorrect: false
                            },
                            {
                                txt: 'קליקר',
                                isCorrect: false
                            }
                        ],
                        explanations: 'צעצועים עוזרים לכלב חדש להסתגל לסביבה לא מוכרת, מונעים שעמום ומעודדים פעילות גופנית.'
                        },
                        { // Question 3
                            type: 'select-car',
                            txt: 'אילו קערות אוכל ומים נעדיף?',
                            answers: [
                                {
                                    txt: 'קערות פלסטיק',
                                    isCorrect: false
                                },
                                {
                                    txt: 'קערות נירוסטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערות זכוכית',
                                    isCorrect: false
                                },
                                {
                                    txt: 'קערות בד',
                                    isCorrect: false
                                },
                                {
                                    txt: 'קערות גומי',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'קערות נירוסטה קלות לניקוי ונשמרות לאורך זמן, הקפידו על בחירת כלי שתיה בעל קיבולת מתאימה לגודל הכלב.'
                        },
                        { // Question 4
                            type: 'select-car',
                            txt: 'מתי ניתן לכלב חטיפים?',
                            answers: [
                                {
                                    txt: 'כדי להחליף את התזונה של הכלב מדי יומיים, לגוון לו את הארוחות',
                                    isCorrect: false
                                },
                                {
                                    txt: 'ניתן לכלב חטיפים מתי שנרצה וללא הגבלה, אין בכך שום בעיה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בשביל לתגמל ולחזק התנהגות טובה, לאלף את הכלב וכתעסוקה',
                                    isCorrect: true
                                }
                            ],
                            explanations: 'חטיפים הינם תוסף לתזונה העיקרית של הכלבים, יכולים לשמש כפרס, ניקוי דנטלי ותעסוקה מבוקרת.'
                        },
                        { // Question 5
                            type: 'multi-select',
                            txt: 'מה יש לקחת בחשבון בבחירת מזון לכלב?',
                            answers: [
                                {
                                    txt: 'יצרן מוכר בעל מוניטין וניסיון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'גילו ומצבו הגופני של הכלב',
                                    isCorrect: true
                                },
                                {
                                    txt: 'ריח',
                                    isCorrect: false
                                },
                                {
                                    txt: 'צבע שק האוכל',
                                    isCorrect: false
                                },
                                {
                                    txt: 'רכיבי מזון איכותיים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'פופולאריות',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מרקם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'צבע הגרגרים',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'יש לבחור מזון המכיל כמויות מאוזנות של חלבון ושומן, מתאים לשלב ההתפתחותי ומצבו הגופני של הכלב.'
                        },
                    ]
                },
                { // Lesson 2
                    title: 'וטרינרים וחיסונים',
                    desc: 'משמעויות וזמני חיסונים',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 3
                    title: 'מה צריך לקנות ולמה',
                    desc: 'ציוד וכל מה שנדרש',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 4
                    title: 'תזונה ותוספים',
                    desc: 'מה מותר ומה אסור לאכול',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 5
                    title: 'טיולים וסכנות',
                    desc: 'מה חשוב לדעת לפני יציאה',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 6
                    title: 'התנהגויות',
                    desc: 'התנהגות כלבית',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 7
                    title: 'העשרה ואנרגיה',
                    desc: 'משחקים, צעצועים וחשיבה',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 8
                    title: 'טיפוח והגיינה',
                    desc: 'איך מתי ולמה',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 9
                    title: 'חירום ופתרונות',
                    desc: 'איך למנוע ומה לעשות',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 10
                    title: 'חזרה וסיכום',
                    desc: '',
                    questions:[]
                },
            ]
        },
        { // מבוגרים
            title: 'מבוגרים',
            desc: 'מעל גיל שמונה',
            tests: [
                { // Lesson 1
                    title: 'תזונה ותוספים',
                    desc: 'ניהול תזונה נכונה',
                    questions:[
                        { // Question 1
                            type: 'multi-select',
                            txt: 'אילו סוגי אוכל קיימים?',
                            answers: [
                                {
                                    txt: 'אוכל טבעי "רטוב"',
                                    isCorrect: true
                                },
                                {
                                    txt: 'גרגרים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון נוזלי',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מזון קטוגני',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מזון גורים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון צמחי',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מזון מבוגרים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'תזונה פירותית',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'חשוב להקפיד על מזון איכותי העונה על הצרכים המשתנים של הכלב.'
                        },
                        { // Question 2
                            type: 'select-car',
                            txt: 'איך נחליף בין סוגי אוכל?',
                            answers: [
                                {
                                    txt: 'נעבור ישר לאוכל החדש',
                                    isCorrect: false
                                },
                                {
                                    txt: 'אסור להחליף לכלב את האוכל',
                                    isCorrect: false
                                },
                                {
                                    txt: 'נחליף בהדרגה את האוכל במשך שבוע',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מפזרים על הרצפה את האוכל החדש בנוסף לישן',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'שינוי הדרגתי יסייע לכלב בהסתגלות של מערכת העיכול למזון החדש, נתחיל להוסיף לאוכל הישן כמות קטנה מהאוכל החדש וכל יום נעלה בכמות עד החלפה מלאה.'
                        },
                        { // Question 3
                            type: 'multi-select',
                            txt: 'מתי צריך להחליף שק אוכל?',
                            answers: [
                                {
                                    txt: 'עיצוב שק חדש',
                                    isCorrect: false
                                },
                                {
                                    txt: 'הכלב מתגרד',
                                    isCorrect: true
                                },
                                {
                                    txt: 'האוכל טעים מידי',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בעיות עיכול',
                                    isCorrect: true
                                },
                                {
                                    txt: 'הכלב אוכל לאט',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עלייה במשקל',
                                    isCorrect: true
                                }
                            ],
                            explanations: 'שינוי תזונתי נחוץ במקרים של עליה במשקל, חוסר רצון של הכלב לאכול, רגישות בעור או במערכת העיכול, הריון ועוד. במקרים אלו מומלץ להתייעץ עם וטרינר.'
                        },
                        { // Question 4
                            type: 'multi-select',
                            txt: 'איך נדע שהאוכל שבחרנו מתאים לכלב?',
                            answers: [
                                {
                                    txt: 'הכלב ממושמע וקשוב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'פרווה רכה ומבריקה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'עור בריא ולא מגורה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מערכת חיסון פעילה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'האוכל טעים לכלב',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מחליף את צבע פרוותו',
                                    isCorrect: false
                                },
                                {
                                    txt: 'שיניים ללא אבנית',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מערכת עיכול תקינה',
                                    isCorrect: true
                                }
                            ],
                            explanations: 'תזונה מאוזנת ובריאה מהווה בסיס משמעותי לבריאותם הפיזי והמנטלי של כלבים, לעיתים נאלץ לבדוק התאמה של מספר סוגי מזון.'
                        },
                        { // Question 5
                            type: 'select-car',
                            txt: 'אילו קערות אוכל ומים נעדיף?',
                            answers: [
                                {
                                    txt: 'קערות פלסטיק',
                                    isCorrect: false
                                },
                                {
                                    txt: 'קערות נירוסטה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערות זכוכית',
                                    isCorrect: false
                                },
                                {
                                    txt: 'קערות בד',
                                    isCorrect: false
                                },
                                {
                                    txt: 'קערות גומי',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'קערות נירוסטה קלות לניקוי ונשמרות לאורך זמן, הקפידו על בחירת כלי שתיה בעל קיבולת מתאימה לגודל הכלב.'
                        }
                    ]
                },
                { // Lesson 2
                    title: 'בדיקות תקופתיות',
                    desc: 'משמעות וזמני חיסונים',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 3
                    title: 'בעיות נפוצות',
                    desc: 'ציוד וכל מה שנדרש',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 4
                    title: 'תסמינים והיערכות',
                    desc: 'מידע רפואי סדר והכנה',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 5
                    title: 'טיולים וסכנות',
                    desc: 'מה חשוב לדעת לפני יציאה',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 6
                    title: 'התנהגויות',
                    desc: 'התנהגות כלבית',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 7
                    title: 'העשרה ואנרגיה',
                    desc: 'משחקים צעצועים וחשיבה',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 8
                    title: 'טיפוח והגיינה',
                    desc: 'איך מתי ולמה',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 9
                    title: 'חירום ופתרונות',
                    desc: 'איך להימנע ומה לעשות',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 10
                    title: 'חזרה וסיכום',
                    desc: '',
                    questions:[]
                }
            ]
        }
    ],
    cat: [ //cat,
        { // גורים
            title: 'גורים',
            desc: 'עד גיל שנה',
            tests: [
                { // Lesson 1
                    title: 'הכנות לפני ההגעה',
                    desc: 'מידע רפואי, סדר והכנה',
                    questions: [
                        { // Question 1
                            type: 'select',
                            txt: 'מה חשוב לסדר בבית לפני הגעת החתול?',
                            answers: [
                                {
                                    txt: 'להרחיק זבל, תרופות וחומרי ניקיון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'להרים את כל הכיסאות בבית',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לעטוף את הספות והמיטות בפצפצים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לזרוק את כל העציצים בבית',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חתולים הם יצורים סקרניים שאוהבים מאד לחקור את סביבתם, הוציאו כל דבר שעשוי לעניין אותם ועלול לגרום לחנק.'
                        },
                        { // Question 2
                            type: 'select-car',
                            txt: 'סמנו את המשפט הנכון:',
                            answers: [
                                {
                                    txt: 'חשוב להקפיד לסגור את דלת המדיח, האסלה ומכונת הכביסה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'יש לצפות את קירות הבית בנייר ולהפעיל מזגן על 24 מעלות',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לדאוג שתמיד יהיו דגים במקרר',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יש להשאיר אורות דולקים כאשר אתם לא נמצאים',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'חתולים מאד אוהבים לחטט באשפה ולפזר אותה בבית. בנוסף, יש להם נטייה להיכנס למקומות סגורים וחשוכים ולכן יש לחסום מקומות שאינם רצויים.'
                        },
                        { // Question 3
                            type: 'select',
                            txt: 'מה הם מועדי החיסון לגורי חתולים?',
                            answers: [
                                {
                                    txt: 'בגיל שמונה שבועות ובגיל שנים עשר שבועות',
                                    isCorrect: true
                                },
                                {
                                    txt: 'בגיל שבוע ובגיל חמישה שבועות',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בגיל חצי שנה ובגיל שנה וחצי',
                                    isCorrect: false
                                },
                                {
                                    txt: 'ביום היוולדותם ובגיל חצי שנה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חיסונים קריטיים בעיקר במשך השנה הראשונה לחייהם, שכן מערכת החיסון עדיין לא מספיק מפותחת ונועדו להגן על החתול מפני מחלות מדבקות אשר חלקן יכולות להדביק אף לבני אדם.'
                        },
                        { // Question 4
                            type: 'complete',
                            txt: 'טיפול מניעתי',
                            end: 'מבצעים טיפול מניעתי נגד תולעי מעיים.',
                            answers: [
                                {
                                    txt: 'כל חודש...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'פעם בשנה...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'כל שישה חודשים...',
                                    isCorrect: true
                                }
                            ],
                            explanations: 'טיפול מניעתי נגד תולעי מעיים יש לבצע באופן סדיר פעם בחצי שנה.'
                        },
                        { // Question 5
                            type: 'select',
                            txt: 'מדוע חשוב לחסן חתולים שלא יוצאים מחוץ לבית?',
                            answers: [
                                {
                                    txt: 'ישנן מחלות שנמצאות בעציצים בבתינו',
                                    isCorrect: false
                                },
                                {
                                    txt: 'אנו עלולים לשאת חיידקים על בגדינו',
                                    isCorrect: true
                                },
                                {
                                    txt: 'חתולים יכולים להידבק במחלות מהאוכל',
                                    isCorrect: false
                                },
                                {
                                    txt: 'חתולים עלולים להיוולד עם מחלות',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'במידה ונגענו או עברנו בקרבת חיה חולה אנו עלולים לשאת את גורמי המחלה דרך בגדינו, סוליות נעלינו וגופנו וכך להדביק את החתול.'
                        },
                    ]
                },
                { // Lesson 2
                    title: 'וטרינרים וחיסונים',
                    desc: 'משמעויות וזמנים',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 3 
                    title: 'מה צריך לקנות ולמה',
                    desc: 'ציוד וכל הנדרש',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 4 
                    title: 'תזונה ותוספים',
                    desc: 'מותר ואסור לאכול',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 5 
                    title: 'סכנות',
                    desc: 'ממה חשוב להיזהר',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 6
                    title: 'התנהגויות',
                    desc: 'התנהגות ושפה חתולית',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 7
                    title: 'העשרה ואנרגיה',
                    desc: 'צעצועים וחשיבה',
                    questions:[{},{},{},{},{}]
                },
                {  // Lesson 8
                    title: 'טיפוח והגיינה',
                    desc: 'איך, מתי, למה וכמה',
                    questions:[{},{},{},{},{}]
                },
                {  // Lesson 9
                    title: 'חירום ופתרונות',
                    desc: 'איך להימנע ומה לעשות',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 10
                    title: 'חזרה וסיכום',
                    desc: '',// אין
                    questions:[]//אין 
                },
            ]
        },
        { // בוגרים
            title: 'בוגרים',
            desc: 'מעל גיל שנה',
            tests: [
                { // Lesson 1
                    title: 'הכנת הבית',
                    desc: 'מה לקנות ואיך לסדר',
                    questions:[
                        { // Question 1
                        type: 'multi-select',
                            txt: 'על מה חשוב לשים דגש בקניית קולר לחתול?',
                            answers: [
                                {
                                    txt: 'צבע הקולר',
                                    isCorrect: false
                                },
                                {
                                    txt: 'סוגר הקולר',
                                    isCorrect: true
                                },
                                {
                                    txt: 'שהקולר יחזיר אור',
                                    isCorrect: false
                                },
                                {
                                    txt: 'הקולר מחומר קשיח',
                                    isCorrect: false
                                },
                                {
                                    txt: 'שהקולר יהיה צבעוני',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מרקם הקולר',
                                    isCorrect: false
                                },
                                {
                                    txt: 'קולר מחומר גמיש ואלסטי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'עובי הקולר',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חתולים סקרניים, מטפסים וקופצים בין מקומות ולכן חשוב לוודא שהקולר יוכל להיפתח במידה והחתול נתקע, כך נמנע מצב מסכן חיים שיכול להוביל לחנק.'
                        },
                        { // Question 2
                            type: 'select-car',
                            txt: 'איזו קערת מים נבחר לחתול?',
                            answers: [
                                {
                                    txt: 'קטנה ועמוקה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עמוקה וגדולה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'צבעונית לא משנה הגודל',
                                    isCorrect: false
                                },
                                {
                                    txt: 'רחבה ולא עמוקה',
                                    isCorrect: true
                                },
                            ],
                            explanations: 'חתולים מעדיפים קערות רדודים ורחבים, זאת מכיוון ששפם החתול הוא איבר רגיש ביותר ולעיתים חתולים חווים אי נעימות כאשר הוא מתחכך עם דפנות הקערה.'
                        },
                        { // Question 3
                            type: 'select',
                            txt: 'איך נגרום לחתול שלנו לשתות יותר מים?',
                            answers: [
                                {
                                    txt: 'נוסיף מזרקה של מים זורמים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'נוסיף מעט סודה לקערת המים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'נחליף כל שעה את המים בקערה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'נשים קצת אוכל בקערת המים',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חתולים לרוב יעדיפו מים זורמים על פני מים עומדים, מים זורמים מכילים כמות חמצן מוגברת שמשפרת את איכות המים וטעמם. בנוסף הופכת את חווית השתייה גם למשחק מענייו ומסעיר.'
                        },
                        { // Question 4
                            type: 'multi-select',
                            txt: 'הרכיבו את רשימת הציוד הנדרשת לפני הגעת החתול הביתה:',
                            answers: [
                                {
                                    txt: 'מטהר אוויר',
                                    isCorrect: false
                                },
                                {
                                    txt: 'כלוב נשיאה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קולר',
                                    isCorrect: true
                                },
                                {
                                    txt: 'ארגז חול וחול',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קערת מים ואוכל',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מזון יבש ורטוב',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מיטה ומגרדת',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קרם לפרווה',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'בכדי שחתול יצליח להתאקלם ולהרגיש חלק מהמשפחה אלו הם שמונת הפריטים שחשוב שיהיו בבית לפני הגעתו.'
                        },
                        { // Question 5
                            type: 'complete',
                            txt: 'מדוע חטיפים רטובים חשובים?',
                            end: 'חשוב לתת לחתול חטיף רטוב פעם ביום.',
                            answers: [
                                {
                                    txt: 'כדי שיהיה שמח ושמנמן...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'כדי שיקבל את כמות הנוזלים הנחוצים לו...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מפני שהאוכל היבש אינו מספיק...',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חתול מטבעו ממעיט בשתייה ולכן יש להגדיל את צריכת הנוזלים שלו על ידי חטיף רטוב פעם ביום.'
                        },
                    ] 
                },
                { // Lesson 2
                    title: 'וטרינרים וחיסונים',
                    desc: 'משמעויות וזמני חיסונים',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 3
                    title: 'מה צריך לקנות ולמה',
                    desc: 'ציוד וכל מה שנדרש',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 4
                    title: 'תזונה ותוספים',
                    desc: 'מה מותר ומה אסור לאכול',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 5
                    title: 'סכנות',
                    desc: 'ממה חשוב להיזהר',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 6
                    title: 'התנהגויות',
                    desc: 'התנהגות חתולית',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 7
                    title: 'העשרה ואנרגיה',
                    desc: 'משחקים, צעצועים וחשיבה',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 8
                    title: 'טיפוח והגיינה',
                    desc: 'איך מתי ולמה',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 9
                    title: 'חירום ופתרונות',
                    desc: 'איך למנוע ומה לעשות',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 10
                    title: 'חזרה וסיכום',
                    desc: '',
                    questions:[]
                },
            ]
        },
        { // מבוגרים
            title: 'מבוגרים',
            desc: 'מעל גיל שמונה',
            tests: [
                { // Lesson 1
                    title: 'תזונה ותוספים',
                    desc: 'ניהול תזונה נכונה',
                    questions:[
                        { // Question 1
                            type: 'multi-select',
                            txt: 'מה יש לקחת בחשבון בבחירת מזון לחתול?',
                            answers: [
                                {
                                    txt: 'יצרן מוכר',
                                    isCorrect: true
                                },
                                {
                                    txt: 'גילו ומצבו הגופני של החתול',
                                    isCorrect: true
                                },
                                {
                                    txt: 'ריח',
                                    isCorrect: false
                                },
                                {
                                    txt: 'צבע שק האוכל',
                                    isCorrect: false
                                },
                                {
                                    txt: 'רכיבי מזון איכותיים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'פופולאריות',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מרקם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'צבע הגרגרים',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'יש לבחור מזון המכיל כמויות מאוזנות של חלבון ושומן, מתאים לשלב ההתפתחותי ומצבו הגופני של החתול.'
                        },
                        { // Question 2
                            type: 'select',
                            txt: 'על מה תזונת החתול משפיעה?',
                            answers: [
                                {
                                    txt: 'חדות ציפורניו וצבע עיניו',
                                    isCorrect: false
                                },
                                {
                                    txt: 'הפרווה, העור ואחוזי השומן בגופו',
                                    isCorrect: true
                                },
                                {
                                    txt: 'על התנהגותו ליד חתולים אחרים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'ניקיון אוזניו וצבע פרוותו',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'חשוב לשים לב שמזון החתול עשיר בחומצות שומן חיוניות, אומגה 3 ו6 וניתן בכמות מדויקת.'
                        },
                        { // Question 3
                            type: 'select-car',
                            txt: 'על אילו רכיבים יש לשים דגש במזון החתול?',
                            answers: [
                                {
                                    txt: 'חלבון מן החי כמרכיב עיקרי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'סוג החלבון (כבש/פרה/דג..)',
                                    isCorrect: false
                                },
                                {
                                    txt: 'אחוז גבוה של חלבון עופות מיובש',
                                    isCorrect: false
                                },
                                {
                                    txt: 'פחמימות בכמות נמוכה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'תירס, סלק, ברוקולי וסויה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'תחליפי בשר וחלבון צמחי',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'בבחירת מזון לחתול נשאף שהמרכיב הראשון ברשימת המרכיבים יהיה חלבון מן החי כמו בשר או דגים וננסה להימנע מרכיבים מתועשים.'
                        },
                        { // Question 4
                            type: 'complete',
                            txt: 'כיצד מחליפים תזונה?',
                            end: 'וזו תהיה הדרך הנכונה לשינוי תזונת החתול שלנו.',
                            answers: [
                                {
                                    txt: 'נעבור ישר לאוכל החדש...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'נחליף בהדרגה את האוכל במשך שבוע...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'נפזר על הרצפה את האוכל החדש יחד עם האוכל הישן...',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'שינוי הדרגתי יסייע לחתול בהסתגלות של מערכת העיכול למזון החדש, נתחיל להוסיף לאוכל הישן כמות קטנה מהאוכל החדש וכל יום נעלה בכמות עד החלפה מלאה.'
                        },
                        { // Question 5
                            type: 'multi-select',
                            txt: 'מתי צריך להחליף שק אוכל?',
                            answers: [
                                {
                                    txt: 'עיצוב שק חדש',
                                    isCorrect: false
                                },
                                {
                                    txt: 'החתול מתגרד',
                                    isCorrect: true
                                },
                                {
                                    txt: 'האוכל טעים מידי',
                                    isCorrect: false
                                },
                                {
                                    txt: 'החתול סובל מבעיות עיכול',
                                    isCorrect: true
                                },
                                {
                                    txt: 'החתול אוכל לאט',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עלייה חריגה במשקל',
                                    isCorrect: true
                                }
                            ],
                            explanations: 'שינוי תזונתי נחוץ במקרים של עליה במשקל, חוסר רצון של החתול לאכול, רגישות בעור או במערכת העיכול, הריון ועוד. במקרים אלו מומלץ להתייעץ עם וטרינר.'
                        },
                    ] 
                },
                { // Lesson 2
                    title: 'בדיקות תקופתיות',
                    desc: 'משמעות וזמני חיסונים',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 3
                    title: 'בעיות נפוצות',
                    desc: 'ציוד וכל מה שנדרש',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 4
                    title: 'תסמינים והיערכות',
                    desc: 'מידע רפואי סדר והכנה',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 5
                    title: 'סכנות',
                    desc: 'ממה חשוב להיזהר',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 6
                    title: 'התנהגויות',
                    desc: 'התנהגות חתולית',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 7
                    title: 'העשרה ואנרגיה',
                    desc: 'משחקים צעצועים וחשיבה',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 8
                    title: 'טיפוח והגיינה',
                    desc: 'איך מתי ולמה',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 9
                    title: 'חירום ופתרונות',
                    desc: 'איך להימנע ומה לעשות',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 10
                    title: 'חזרה וסיכום',
                    desc: '',
                    questions:[]
                }
            ]
        }
    ],
    bird: [ //bird
        { 
            title: 'none',
            desc: 'none',
            tests: [ 
                { // Lesson 1
                    title: 'פוגשים לראשונה',
                    desc: 'מידע סדר והכנה',
                    questions: [
                        { // Question 1
                            type: 'select',
                            txt: 'כמה סוגים שונים של תוכים קיימים?',
                            answers: [
                                {
                                    txt: 'כ-350 סוגים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'כ-5 סוגים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'כ-100 סוגים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'כ-500 סוגים',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'כיום מוכרים לנו כ-350 מינים שונים של תוכים המתחלקים למגוון סוגים, השוני ביניהם מתבטא במראה, בגודל ובעיקר בתכונותיהם.'
                        },
                        { // Question 2
                            type: 'select-car',
                            txt: 'מהי תוחלת החיים של תוכים גדולים וקטנים?',
                            answers: [
                                {
                                    txt: 'קטנים חיים שנה וגדולים 5 שנים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'קטנים חיים 25 שנים וגדולים 75 שנים',
                                    isCorrect: true
                                },
                                {
                                    txt: 'קטנים חיים 10 שנים וגדלים 20 שנים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'קטנים חיים 50 שנים וגדולים 100 שנים',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'תוכים קטנים חיים בממוצע כ-25 שנים ואילו גדולים כ-75 שנים, חשוב לקחת זאת בחשבון בהחלטה לגדל תוכי.'
                        },
                        { // Question 3
                            type: 'select',
                            txt: 'האם תוכי חייב אינטראקציה עם בני אדם?',
                            answers: [
                                {
                                    txt: 'כן, חובה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'כן, מידי פעם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לא, חיה עצמאית',
                                    isCorrect: false
                                },
                                {
                                    txt: 'לא, אם לא חייב אין צורך',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'תוכים הם ציפורים חברותיות ולכן זקוקות כל כך שישחקו וידברו איתן כל יום. צריך להוציא את התוכי מהכלוב ולשחק איתו בכל יום, לתת לו לעמוד על הסטנד ולהכניס אותו בחזרה בלילה, לתת לו יחס ולהקדיש לו זמן בכל רגע שמתאפשר לכם.'
                        },
                        { // Question 4
                            type: 'complete',
                            txt: 'בחירת הכלוב',
                            end: 'זה הכלוב המועדף לתוכי שלנו.',
                            answers: [
                                {
                                    txt: 'כלוב גדול עם סורגים צפופים...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'כלוב גדול עם אפשרויות יציאה...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'כלוב קטן המתאים בול לגודלו...',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'כלוב התוכי צריך להיות גדול ככל האפשר כדי שיוכל לנופף בכנפיו מבלי לפגוע בדפנות ובעל סורגים צפופים שימנעו ממנו להכניס את ראשו ביניהם. '
                        },
                        { // Question 5
                            type: 'multi-select',
                            txt: 'איפה כדאי למקם את כלוב התוכי?',
                            answers: [
                                {
                                    txt: 'בחדר צדדי ומרוחק',
                                    isCorrect: false
                                },
                                {
                                    txt: 'במרפסת',
                                    isCorrect: false
                                },
                                {
                                    txt: 'במיקום מרכזי',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מקום קריר בבית',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בקומה השנייה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'רחוק ממרכז הבית',
                                    isCorrect: false
                                },
                                {
                                    txt: 'על הרצפה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מרוחק מחלונות',
                                    isCorrect: true
                                },
                            ],
                            explanations: 'רצוי למקם את הכלוב במקום מרכזי בבית העוזר לתוכי להרגיש חלק מהמשפחה ומהסביבה, באיזור חמים, ללא שמש ישירה ולא מול מזגן.'
                        },
                        
                    ]
                },
                { // Lesson 2
                    title: 'וטרינרים וסכנות',
                    desc: 'חירום ופתרונות',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 3
                    title: 'התנהגויות',
                    desc: 'משמעות לקולות ותנועות',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 4
                    title: 'טיפוח וטיפול שוטף',
                    desc: 'איך מתי ולמה',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                { // Lesson 5
                    title: 'חזרה וסיכום',
                    desc: '',
                    questions:[]
                }
            ]
        }
    ],
    rabbit: [ //rabbit,
        {            
            title: 'none',
            desc: 'none',
            tests: [ 
                {  // Lesson 1
                    title: 'פוגשים לראשונה',
                    desc: 'מידע סדר והכנה',
                    questions: [
                        { // Question 1
                            type: 'select',
                            txt: 'איך ניגש לארנב בפעם הראשונה?',
                            answers: [
                                {
                                    txt: 'ניתן לגשת ולאחוז בארנב כיצד שרוצים, אין לכך משמעות',
                                    isCorrect: false
                                },
                                {
                                    txt: 'תחילה אין לגעת בארנב שלא צורך ויש לגשת אליו בעדינות',
                                    isCorrect: true
                                },
                                {
                                    txt: 'יש לאחוז רק בחלק גופו העליון של הארנב ולהרימו משם',
                                    isCorrect: false
                                },
                                {
                                    txt: 'ניתן לגשת לארנב לראשונה רק כאשר הוא בכלוב סגור וחשוך',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'מומלץ לא לגעת בארנבים שלא לצורך בשבוע הראשון להגעתם, חשוב לתת לארנב להכיר ולהתרגל אליכם בהדרגה.'
                        },
                        { // Question 2
                            type: 'complete',
                            txt: 'איך ניגשים לארנב?',
                            end: 'זו הדרך הנכונה להרים ארנב.',
                            answers: [
                                {
                                    txt: 'כשתומכים ברגליו האחוריות...',
                                    isCorrect: true
                                },
                                {
                                    txt: 'כשאוחזים רק באוזניו...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'כשאוחזים בבטנו בשתי הידיים...',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'כדי למנוע התנגדות ונזק אצל הארנב יש לתמוך ברגליו האחוריות בעת ההרמה.'
                        },
                        { // Question 3
                            type: 'select',
                            txt: 'מדוע חשוב שארנבים יבצעו פעילות גופנית?',
                            answers: [
                                {
                                    txt: 'עוזר לשינה עמוקה ומונע התנהגות תוקפנית עם ארנבים אחרים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'כדי למנוע בעיות בריאותיות ולעכל את האוכל לאחר האכילה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'עוזר לפרווה נעימה ונקייה, פה רענן וכפות רגליים נעימות',
                                    isCorrect: false
                                },
                                {
                                    txt: 'כדי שילמד בצורה הטובה ביותר תקשורת עם ארנבים ובני אדם',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'הארנב זקוק לפעילות גופנית מחוץ לכלוב של לפחות שעתיים ביממה כאשר הוא חופשי להסתובב.' 
                        },
                        { // Question 4
                            type: 'select-car',
                            txt: 'למה ארנבים רגישים במיוחד?',
                            answers: [
                                {
                                    txt: 'חום ויובש',
                                    isCorrect: true
                                },
                                {
                                    txt: 'מרקמים קשים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'חומרים שמנוניים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בדי פוליאסטר',
                                    isCorrect: false
                                }
                            ],
                            explanations: 'ארנבים רגישים לחום וליובש, לכן יש להקפיד שתמיד יהיה להם בכלוב בקבוק שתייה מלא במים.'
                        },
                        { // Question 5
                            type: 'multi-select',
                            txt: 'מה ארנב אוכל?',
                            answers: [
                                {
                                    txt: 'ירקות ירוקים ועוף',
                                    isCorrect: false
                                },
                                {
                                    txt: 'עלים ירוקים, גזר ומלפפון',
                                    isCorrect: true
                                },
                                {
                                    txt: 'גרעינים, אורז מלא וירקות',
                                    isCorrect: false
                                },
                                {
                                    txt: 'ירקות, חציר וכופתיות',
                                    isCorrect: true
                                },
                                {
                                    txt: 'בננות, תפוחים ותפוזים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'ירקות, חציר ושוקולד',
                                    isCorrect: false
                                },
                                {
                                    txt: 'כופתיות בננות וענבים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'בשר מאודה, חציר וירקות',
                                    isCorrect: false
                                },
                                
                            ],
                            explanations: 'תזונת הארנב מורכבת מירקות, חציר וכופתיות מסוגים שונים.'
                        },
                    ]
                },
                {  // Lesson 2
                    title: 'וטרינרים וסכנות',
                    desc: 'חירום ופתרונות',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 3
                    title: 'התנהגויות',
                    desc: 'משמעות לקולות ותנועות',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 4
                    title: 'טיפוח וטיפול שוטף',
                    desc: 'איך מתי ולמה',
                    questions:[{},{},{},{},{},{},{},{},{},{}]
                },
                {  // Lesson 5
                    title: 'חזרה וסיכום',
                    desc: '',
                    questions:[]
                }
            ]
        }
    ],
    fish: [ //fish,
        {            
            title: 'none',
            desc: 'none',
            tests: [ 
                {// Lesson 1
                    title: 'הכנת האקווריום',
                    desc: 'מה צריך ולמה',
                    questions: [
                        { // Question 1
                            type: 'multi-select',
                            txt: 'מה חשוב בבחירת מיקום לאקווריום?',
                            answers: [
                                {
                                    txt: 'הימנעות משמש',
                                    isCorrect: true
                                },
                                {
                                    txt: 'רחוק מהטלוויזיה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מיקום שקט',
                                    isCorrect: false
                                },
                                {
                                    txt: 'רחוק מהמקרר',
                                    isCorrect: false
                                },
                                {
                                    txt: 'קרוב לרצפה',
                                    isCorrect: false
                                },
                                {
                                    txt: 'על פני משטח יציב',
                                    isCorrect: true
                                },
                                {
                                    txt: 'על שולחן עץ',
                                    isCorrect: false
                                },
                                {
                                    txt: 'במרכז הבית',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'אור השמש עלול לחמם את מי האקווריום ולהאיץ גדילת ירקת, יש להציבו על פני משטח יציב וחזק שימנע תזוזות של המים.'
                        },
                        { // Question 2
                            type: 'complete',
                            txt: 'כמות המים באקווריום',
                            end: 'זו כמות המים הנכונה.',
                            answers: [
                                {
                                    txt: 'כאשר האקווריום מלא עד הסוף...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'חצי מכמות האקווריום...',
                                    isCorrect: false
                                },
                                {
                                    txt: 'סנטימטר אחד מעל גובה המסגרת...',
                                    isCorrect: true
                                },
                            ],
                            explanations: 'תמיד נעדיף למלא מים כ1 ס"מ מעל גובה המסגרת או הכתר.'
                        },
                        { // Question 3
                            type: 'select',
                            txt: 'מה תפקידה של המשאבה?',
                            answers: [
                                {
                                    txt: 'הוספת ויטמינים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'יצירת סירקולציה',
                                    isCorrect: true
                                },
                                {
                                    txt: 'שואבת דגים מתים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מנקה את הזכוכית',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'תפקיד המשאבה הוא ליצר סירקולציה באקווריום בכדי לוודא שהמים עוברים בפילטר המונע הצטברות של מזהמים ופסולת.'
                        },
                        { // Question 4
                            type: 'select-car',
                            txt: 'אילו אביזרים חייבים להימצא בתוך האקווריום?',
                            answers: [
                                {
                                    txt: 'אלמוג מפלסטיק, משאבה וחצץ',
                                    isCorrect: false
                                },
                                {
                                    txt: 'רקע צבעוני, אלמוג מפלסטיק ופילטר',
                                    isCorrect: false
                                },
                                {
                                    txt: 'מנורה, חצץ ואלמוג מפלסטיק',
                                    isCorrect: false
                                },
                                {
                                    txt: 'פילטר, משאבה וחצץ',
                                    isCorrect: true
                                }
                            ],
                            explanations: 'אלו הם שלושת אביזרי החובה הנחוצים באקווריום ליצירת מרחב בריא לדגים.'
                        },
                        { // Question 5
                            type: 'select',
                            txt: 'מה יקרה ללא תאורה באקווריום?',
                            answers: [
                                {
                                    txt: 'האקווריום יהיה חשוך ולא מזמין',
                                    isCorrect: true
                                },
                                {
                                    txt: 'הדגים לא יוכלו להתקיים',
                                    isCorrect: false
                                },
                                {
                                    txt: 'האקווריום יתמלא ירקת',
                                    isCorrect: false
                                },
                                {
                                    txt: 'הדגים לא יוכלו להתרבות',
                                    isCorrect: false
                                },
                            ],
                            explanations: 'מטרת התאורה היא אך ורק לטובת נראות ועיצוב האקווריום, תאורה ממושכת יכולה לגרום לגדילת ירקת ואף להוביל למוות של הדגים.'
                        },
                    ]
                },
                { // Lesson 2
                    title: 'סוגים וצרכים',
                    desc: 'מי מתאים לאיפה',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 3
                    title: 'צמחים וטפילים',
                    desc: 'מניעה וטיפול',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 4
                    title: 'טמפרטורות ותוספות',
                    desc: 'שמירה על הדגים',
                    questions:[{},{},{},{},{}]
                },
                { // Lesson 5
                    title: 'חזרה וסיכום',
                    desc: '',
                    questions:[]
                }
            ]
        }
    ],
}

function getAnimalData(animal) {
    return data[animal]
}

function getTests(animal, ageIdx) {
    return data[animal][ageIdx].tests
}

function getAnimalAgeOptions(animal) {
    return data[animal].map(opt => {
        return {
            title: opt.title,
            desc: opt.desc
        }
    })
}
function getCurrTest(petDetails) {
    return data[petDetails.type][petDetails.ageIdx].tests[0]
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