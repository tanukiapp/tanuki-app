const Kitsu = require('kitsu')
const api = new Kitsu()

const params = {
    'filter': { 'status': 'current', 'subtype': 'TV', 'seasonYear': '2018' },
    'page': { 'limit': 20 }
}

const weekMap = ['sunday','monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const week = {
    'sunday': [],
    'monday': [],
    'tuesday': [],
    'wednesday': [],
    'thursday': [],
    'friday': [],
    'saturday': []
}

const assignWeek = (date, anime) => {
    let day = new Date(date).getDay()
    let dayWeek = weekMap[day]
    week[dayWeek].push(anime)
}

// Make this recursive
api.get('anime', params)
    .then((res) => { 
        res.data.map((e) => assignWeek(e.startDate, e.titles.en_jp))
        console.log(week)
    })
    .catch((err) => { console.log(err) })
