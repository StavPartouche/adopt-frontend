const ACHIEV = [
    {
        id: 1,
        title: 'משחק ראשון',
        desc: 'התחלתם וסיימתם, כל הכבוד!'
    },
    {
        id: 2,
        title: 'העשרה',
        desc: 'התעניינתם בטיפים, כל הכבוד!'
    },
    {
        id: 3,
        title: 'רצף',
        desc: 'שמרתם על רצף 5 ימים, כל הכבוד!'
    },
    {
        id: 4,
        title: 'תשובה נכונה',
        desc: 'השלמתם משחק שלם מבלי לטעות, כל הכבוד!'
    },
]


function getAchiev() {
    return ACHIEV
}

export const achievService = {
    getAchiev
}