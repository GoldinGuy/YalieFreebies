import { faAmazon, faGithub, faMicrosoft, faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faCalendarAlt, faCloud, faCode, faCoffee, faFilm, faLock, faMailBulk, faMusic, faNewspaper, faNoteSticky, faPen, faPlus, faShield, faShieldAlt, faTv, faTvAlt, faVideoCamera, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type Deal = {
	name: string;
	perks: string[];
	icon: DealIcon;
	discount: string;
	url: string;
};

export type DealIcon = {
	def: IconDefinition;
	color?: string;
	bgColor?: string;
}

export const DEALS: Deal[] = [
	{
		name: "Adobe Creative Cloud",
		perks: [
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Adobe Premier Pro",
			"Adobe Acrobat",
			"Adobe Lightroom",
			"Adobe InDesign",
			"More Adobe stuff",
		],
		discount: "FREE",
		icon: {
			def: faCloud,
			color: "text-red-500",
			bgColor: "bg-red-100",
		},
		url: "https://e5.onthehub.com/WebStore/OfferingDetails.aspx?o=bf40b870-cbe4-eb11-813d-000d3af41938&ws=ad730196-897d-dc11-ac48-0030485a6b08&vsro=8",
	},
	{
		name: "Microsoft Office",
		discount: "FREE",
		perks: [
			"Microsoft Word",
			"Microsoft Excel",
			"Microsoft PowerPoint",
			"Microsoft Publisher",
			"Microsoft OneNote",
			"Microsoft Outlook",
			"More MS software",
		],
		icon: {
			def: faMicrosoft,
			color: "text-teal-500",
			bgColor: "bg-teal-100",
		},
		url: "https://confluence.som.yale.edu/display/SC/Microsoft+Office+365+Windows",
	},
	{
		name: "Amazon Prime",
		discount: "FREE 6m ➡ $7.99 (50% off)",
		perks: [
			"Free 1-day shipping",
			"Prime Music/Video/Reading",
			"Unlimited Grubhub free delivery",
			"6 months free LinkedIn Premium",
			"10% off StudentUniverse travel",
			"3 months of Calm",
			"1 month CourseHero",
		],
		icon: {
			def: faAmazon,
			color: "text-orange-500",
			bgColor: "bg-orange-100",
		},
		url: "https://www.amazon.com/Amazon-Student/b?ie=UTF8&node=668781011",
	},
	{
		name: "XFINITY & HBO Max",
		discount: "FREE",
		perks: [
			"Access Xfinity Stream",
			"Access HBO Max",
			"Use on any of your devices",
		],
		icon: {
			def: faTvAlt,
			color: "text-purple-500",
			bgColor: "bg-purple-100",
		},
		url: "https://yale.service-now.com/it?id=support_article&sys_id=4f944213db625f48973777dbbf96192b",
	},
	{
		name: "New York Times",
		discount: "FREE",
		perks: [],
		icon: {
			def: faNewspaper,
			color: "text-lime-500",
			bgColor: "bg-lime-100",
		},
		url: "https://yale.service-now.com/it?id=support_article&sys_id=4f944213db625f48973777dbbf96192b",
	},
	{
		name: "Wall Street Journal",
		discount: "FREE",
		perks: [],
		icon: {
			def: faNewspaper,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		url: "https://yale.service-now.com/it?id=support_article&sys_id=4f944213db625f48973777dbbf96192b",
	},
	{
		name: "LeaveMeAlone",
		discount: "20% off w/ 7GSDY9FB",
		perks: [
			"Mass unsubscribe from emails",
			"Rollup your favorite newsletters",
			"Block cold emails",
			"Do-not-disturb email",
		],
		icon: {
			def: faMailBulk,
			color: "text-fuchsia-500",
			bgColor: "bg-fuchsia-100",
		},
		url: "https://leavemealone.app",
	},
	{
		name: "Matlab",
		discount: "FREE",
		perks: ["Analyze data", "Develop algorithms", "Create models"],
		icon: {
			def: faCode,
			color: "text-red-500",
			bgColor: "bg-red-100",
		},
		url: "https://e5.onthehub.com/WebStore/OfferingDetails.aspx?o=04fb2c00-4b07-ec11-813e-000d3af41938&pmv=00000000-0000-0000-0000-000000000000&ws=ad730196-897d-dc11-ac48-0030485a6b08&vsro=8",
	},
	{
		name: "Github Pro",
		discount: "FREE",
		perks: [
			"Free Jetbrains IDEs",
			"Domain credits",
			"Hosting credits",
			"Literally 10x too many to list",
			"If you're CS get this",
		],
		icon: {
			def: faGithub,
			color: "text-indigo-500",
			bgColor: "bg-indigo-100",
		},
		url: "https://education.github.com/pack",
	},
	{
		name: "Zoom Pro",
		discount: "FREE",
		perks: ["Unlimited meeting length", "Higher quality meetings"],
		icon: {
			def: faVideoCamera,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		url: "https://www.spotify.com/us/student/",
	},
	{
		name: "Spotify Premium",
		discount: "FREE 1m ➡ $4.99/m",
		perks: [
			"Access Spotify (ad-free)",
			"Access ShowTime (ad-free)",
			"Access Hulu (ad-supported)",
		],
		icon: {
			def: faSpotify,
			color: "text-green-500",
			bgColor: "bg-green-100",
		},
		url: "https://www.spotify.com/us/student/",
	},
	{
		name: "Apple Music & AppleTV+",
		discount: "FREE 1m ➡ $5.99/m",
		perks: ["Access Apple Music (ad-free)", "Access AppleTV (ad-free)"],
		icon: {
			def: faMusic,
			color: "text-pink-500",
			bgColor: "bg-pink-100",
		},
		url: "https://support.apple.com/en-us/HT205928",
	},
	{
		name: "Notion Premium",
		discount: "FREE",
		perks: [
			"Organize all your info",
			"Unlimited file uploads",
			"30 day revision history",
		],
		icon: {
			def: faNoteSticky,
			color: "text-gray-500",
			bgColor: "bg-gray-100",
		},
		url: "https://www.notion.so/product/notion-for-education",
	},
	{
		name: "YouTube Premium",
		discount: "FREE 3m ➡ $6.99/m (50% off)",
		perks: [
			"YouTube (no ads)",
			"Download videos for offline",
			"Picture-in-picture mode",
			"Keep listening while screen off",
		],
		icon: {
			def: faYoutube,
			color: "text-red-500",
			bgColor: "bg-red-100",
		},
		url: "https://www.youtube.com/premium/student",
	},
	{
		name: "Craft Docs",
		discount: "$2.50/m (50% off)",
		perks: [
			"Unlimited text 'blocks'",
			"50 GB of Storage",
			"Advanced export options",
			"Collaborate with 5 friends",
		],
		icon: {
			def: faPen,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		url: "https://craftdocs.typeform.com/to/Ac3dD6bi?typeform-source=support.craft.do",
	},
	{
		name: "SurfShark VPN",
		discount: "FREE 3m ➡ $2.21/m (83% off)",
		perks: [
			"Protect unlimited devices",
			"Hide location",
			"Block ads and malware",
			"Prevent tracking/targeted ads",
		],
		icon: {
			def: faShield,
			color: "text-cyan-500",
			bgColor: "bg-cyan-100",
		},
		url: "https://surfshark.com/student-discount",
	},
	{
		name: "Norton 360 Security",
		discount: "$27.29/y (68% off)",
		perks: [
			"Protect up to three devices",
			"Real-time threat protection",
			"Secure VPN",
			"50GB cloud backup",
			"Password manager",
		],
		icon: {
			def: faShield,
			color: "text-yellow-500",
			bgColor: "bg-yellow-100",
		},
		url: "https://e5.onthehub.com/WebStore/OfferingDetails.aspx?o=11aa1af8-3386-ea11-812a-000d3af41938&ws=ad730196-897d-dc11-ac48-0030485a6b08&vsro=8",
	},
	{
		name: "Norton Secure VPN",
		discount: "$19.99/y (60% off)",
		perks: [
			"Encrypt your data on public WiFi",
			"Avoid tracking from school ISP",
			"Access content from any location",
		],
		icon: {
			def: faShieldAlt,
			color: "text-green-500",
			bgColor: "bg-green-100",
		},
		url: "https://e5.onthehub.com/WebStore/OfferingDetails.aspx?o=11aa1af8-3386-ea11-812a-000d3af41938&ws=ad730196-897d-dc11-ac48-0030485a6b08&vsro=8",
	},
	{
		name: "Flexibits Premium",
		discount: "FREE 2w ➡ $2.60/m (20% off)",
		perks: [
			"Fantastical Pro Calendar",
			"Sync several calendars",
			"Schedule meetings",
			"Sync events and tasks",
			"CardHop Contacts app",
		],
		icon: {
			def: faCalendarAlt,
			color: "text-red-500",
			bgColor: "bg-red-100",
		},
		url: "https://flexibits.com/pricing?product=fantastical",
	},
];
