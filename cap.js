var g_cities = {
	'Afghanistan'		:'Kabul',
	'Albania'		:'Tirana',
	'Algeria'		:'Algiers',
	'Andorra'		:'Andorra la Vella',
	'Angola'		:'Luanda',
	'Antigua and Barbuda'	:'St. John\'s',
	'Argentina'		:'Buenos Aires',
	'Armenia'		:'Yerevan',
	'Australia'		:'Canberra',
	'Austria'		:'Vienna',
	'Azerbaijan'		:'Baku',
	'Bahamas'		:'Nassau',
	'Bahrain'		:'Al-Man�mah',
	'Bangladesh'		:'Dhaka',
	'Barbados'		:'Bridgetown',
	'Belarus'		:'Mensk (Minsk)',
	'Belgium'		:'Brussels',
	'Belize'		:'Belmopan',
	'Benin'			:'Porto-Novo / Cotonou',
	'Bhutan'		:'Thimphu',
	'Bolivia'		:'Sucre / La Paz',
	'Bosnia and Herzegovina'	:'Sarajevo',
	'Botswana'		:'Gaborone',
	'Brazil'		:'Bras�lia',
	'Brunei'		:'Bandar Seri Begawan',
	'Bulgaria'		:'Sofia',
	'Burkina Faso'		:'Ouagadougou',
	'Burundi'		:'Bujumbura',
	'Cambodia'		:'Phnom Penh',
	'Cameroon'		:'Yaound�',
	'Canada'		:'Ottawa, Ontario',
	'Cape Verde'		:'Praia',
	'Central African Republic'	:'Bangui',
	'Chad'			:'N\'Djamena',
	'Chile'			:'Santiago',
	'China'			:'Beijing',
	'Colombia'		:'Santaf� de Bogot�',
	'Comoros'		:'Moroni (on Grande Comoro)',
	'Congo, Democratic Republic of the' 	:'Kinshasa',
	'Congo, Republic of'	:'Brazzaville',
	'Costa Rica'		:'San Jos�',
	'C�te d\'Ivoire'	:'Yamoussoukro / Abidjan',
	'Croatia'		:'Zagreb',
	'Cuba'			:'Havana',
	'Cyprus'		:'Lefkosia (Nicosia)',
	'Czech Republic'	:'Prague',
	'Denmark'		:'Copenhagen',
	'Djibouti'		:'Djibouti',
	'Dominica'		:'Roseau',
	'Dominican Republic'	:'Santo Domingo',
	'East Timor'		:'Dili',
	'Ecuador'		:'Quito',
	'Egypt'			:'Cairo',
	'El Salvador'		:'San Salvador',
	'Equatorial Guinea'	:'Malabo',
	'Eritrea'		:'Asmara',
	'Estonia'		:'Tallinn',
	'Ethiopia'		:'Addis Ababa',
	'Fiji'			:'Suva (on Viti Levu)',
	'Finland'		:'Helsinki',
	'France'		:'Paris',
	'Gabon'			:'Libreville',
	'Gambia'		:'Banjul',
	'Georgia'		:'Tbilisi',
	'Germany'		:'Berlin',
	'Ghana'			:'Accra',
	'Greece'		:'Athens',
	'Grenada'		:'St. George\'s',
	'Guatemala'		:'Guatemala City',
	'Guinea'		:'Conakry',
	'Guinea-Bissau'		:'Bissau',
	'Guyana'		:'Georgetown',
	'Haiti'			:'Port-au-Prince',
	'Honduras'		:'Tegucigalpa',
	'Hungary'		:'Budapest',
	'Iceland'		:'Reykjavik',
	'India'			:'New Delhi',
	'Indonesia'		:'Jakarta',
	'Iran'			:'Tehran',
	'Iraq'			:'Baghdad',
	'Ireland'		:'Dublin',
	'Israel'		:'Jerusalem / Tel Aviv',
	'Italy'			:'Rome',
	'Jamaica'		:'Kingston',
	'Japan'			:'Tokyo',
	'Jordan'		:'Amman',
	'Kazakhstan'		:'Astana (formerly Aqmola)',
	'Kenya'			:'Nairobi',
	'Kiribati'		:'Tarawa',
	'Korea, North'		:'Pyongyang',
	'Korea, South'		:'Seoul',
	'Kuwait'		:'Kuwait',
	'Kyrgyzstan'		:'Bishkek (formerly Frunze)',
	'Laos'			:'Vientiane',
	'Latvia'		:'Riga',
	'Lebanon'		:'Beirut',
	'Lesotho'		:'Maseru',
	'Liberia'		:'Monrovia',
	'Libya'			:'Tripoli',
	'Liechtenstein'		:'Vaduz',
	'Lithuania'		:'Vilnius',
	'Luxembourg'		:'Luxembourg',
	'Macedonia' 		:'Skopje',
	'Madagascar'		:'Antananarivo',
	'Malawi'		:'Lilongwe',
	'Malaysia'		:'Kuala Lumpur',
	'Maldives'		:'Mal�',
	'Mali'			:'Bamako',
	'Malta'			:'Valletta',
	'Marshall Islands'	:'Majuro',
	'Mauritania'		:'Nouakchott',
	'Mauritius'		:'Port Louis',
	'Mexico'		:'Mexico City',
	'Micronesia'		:'Palikir',
	'Moldova'		:'Chisinau',
	'Monaco'		:'Monaco',
	'Mongolia'		:'Ulaan Baatar',
	'Montenegro'		:'Podgorica / Cetinje (capital city)',
	'Morocco'		:'Rabat',
	'Mozambique'		:'Maputo',
	'Myanmar'		:'Rangoon (Yangon)',
	'Namibia'		:'Windhoek / Swakopmund',
	'Nauru'			:'Yaren',
	'Nepal'			:'Kathmandu',
	'Netherlands'		:'Amsterdam / The Hague',
	'New Zealand'		:'Wellington',
	'Nicaragua'		:'Managua',
	'Niger'			:'Niamey',
	'Nigeria'		:'Abuja',
	'Norway'		:'Oslo',
	'Oman'			:'Muscat',
	'Pakistan'		:'Islamabad',
	'Palau'			:'Koror',
	'Panama'		:'Panama City',
	'Papua New Guinea'	:'Port Moresby',
	'Paraguay'		:'Asunci�n',
	'Peru'			:'Lima',
	'Philippines'		:'Manila',
	'Poland'		:'Warsaw',
	'Portugal'		:'Lisbon',
	'Qatar'			:'Doha',
	'Romania'		:'Bucharest',
	'Russia'		:'Moscow',
	'Rwanda'		:'Kigali',
	'St. Kitts and Nevis'	:'Basseterre (on St. Kitts)',
	'St. Lucia'		:'Castries',
	'St. Vincent and the Grenadines'	:'Kingstown',
	'Samoa'			:'Apia',
	'San Marino'		:'San Marino',
	'S�o Tom� and Pr�ncipe'	:'S�o Tom�',
	'Saudi Arabia'		:'Riyadh',
	'Senegal'		:'Dakar',
	'Serbia'		:'Belgrade',
	'Seychelles'		:'Victoria',
	'Sierra Leone'		:'Freetown',
	'Singapore'		:'Singapore',
	'Slovakia'		:'Bratislava',
	'Slovenia'		:'Ljubljana',
	'Solomon Islands'	:'Honiara (on Guadalcanal)',
	'Somalia'		:'Mogadishu',
	'South Africa'		:'Pretoria / Cape Town',
	'Spain'			:'Madrid',
	'Sri Lanka'		:'Colombo / Sri Jayawardenepura Kotte',
	'Sudan'			:'Khartoum',
	'Suriname'		:'Paramaribo',
	'Swaziland'		:'Mbabane / Lobamba',
	'Sweden'		:'Stockholm',
	'Switzerland'		:'Bern',
	'Syria'			:'Damascus',
	'Taiwan'		:'Taipei',
	'Tajikistan'		:'Dushanbe',
	'Tanzania'		:'Dodoma',
	'Thailand'		:'Bangkok',
	'Togo'			:'Lom�',
	'Tonga'			:'Nuku\'alofa',
	'Trinidad and Tobago'	:'Port-of-Spain',
	'Tunisia'		:'Tunis',
	'Turkey'		:'Ankara',
	'Turkmenistan'		:'Ashgabat',
	'Tuvalu'		:'Funafuti',
	'Uganda'		:'Kampala',
	'Ukraine'		:'Kyiv (Kiev)',
	'United Arab Emirates'	:'Abu Dhabi',
	'United Kingdom'	:'London',
	'United States'		:'Washington, DC',
	'Uruguay'		:'Montevideo',
	'Uzbekistan'		:'Tashkent',
	'Vanuatu'		:'Port Vila',
	'Venezuela'		:'Caracas',
	'Vietnam'		:'Hanoi',
	'Western Sahara' 	:'El Aaiun',
	'Yemen'			:'Sana�',
	'Zambia'		:'Lusaka',
	'Zimbabwe'		:'Harare',
};