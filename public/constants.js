let date = new Date();

let current_year = date.getFullYear();
let current_month = date.getMonth();
let current_date = date.getDate();
let current_day = date.getDay();

const month_profile_created = 3;
const year_profile_created = 2018;

const prompts = [];

const RecentEntries = [];

const DAYS_IN_MONTH = [
	{January: 31},
	{February: 28},
	{March: 31},
	{April: 30},
	{May: 31},
	{June: 30},
	{July: 31},
	{August: 31},
	{September: 30},
	{October: 31},
	{November: 30},
	{December: 31}
];