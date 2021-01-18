'use strict'

import fs from 'fs'

type Language = 'en' | 'np'

function fetchDistricts(lang: Language = 'en') {
	const file = lang === 'np' ? 'np.json' : 'en.json'
	const categories = fs.readFileSync(`data/districts/${file}`, 'utf-8')
	const json = JSON.parse(categories)
	return json
}

export default fetchDistricts
