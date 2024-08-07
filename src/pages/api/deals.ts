import {
	faAmazon,
	faGithub,
	faMicrosoft,
	faSpotify,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
	faBed,
	faBox,
	faCalendarAlt,
	faCloud,
	faCode,
	faContactCard,
	faDumbbell,
	faFolder,
	faGift,
	faKeyboard,
	faMailBulk,
	faMusic,
	faNewspaper,
	faNoteSticky,
	faPaintRoller,
	faPen,
	faPenAlt,
	faPlane,
	faPrint,
	faServer,
	faShield,
	faShieldAlt,
	faShoppingBag,
	faStopwatch,
	faTree,
	faTv,
	faTvAlt,
	faVideoCamera,
	faWrench,
	IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

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
};

export const DEALS: Deal[] = [
	{
		name: "Adobe Creative Cloud",
		perks: [
			"Photoshop",
			"Illustrator",
			"Premier Pro",
			"Acrobat",
			"Lightroom",
			"InDesign",
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
		name: "Microsoft Office Suite",
		discount: "FREE",
		perks: ["Word", "Excel", "PowerPoint", "Publisher", "OneNote", "Outlook"],
		icon: {
			def: faMicrosoft,
			color: "text-emerald-500",
			bgColor: "bg-emerald-100",
		},
		url: "https://yale.service-now.com/it?id=service_offering&sys_id=2a5792451b3c7810ff45fd12dd4bcba9&table=u_service_offering_index",
	},
	{
		name: "Amazon Prime Package",
		discount: "FREE 6m ➡ $7.99 (50% off)",
		perks: [
			"Prime",
			"3m Calm",
			"1m CourseHero",
			"Grubhub free delivery",
			"6m LinkedIn Pro",
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
		perks: ["Access Xfinity Stream", "Access HBO Max", "Use on any devices"],
		icon: {
			def: faTvAlt,
			color: "text-purple-500",
			bgColor: "bg-purple-100",
		},
		url: "https://yale.service-now.com/it?id=support_article&sys_id=4f944213db625f48973777dbbf96192b",
		// https://yale.service-now.com/it?id=service_offering&sys_id=8b99caacdb273a043514b1c0ef961925
	},

	{
		name: "Zoom Pro",
		discount: "FREE w/ Yale SSO Login",
		perks: [
			"Unlimited meeting length",
			"Yale Zoom Links",
			"Higher quality meetings",
		],
		icon: {
			def: faVideoCamera,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		url: "https://yale.service-now.com/it?id=support_article&sys_id=48382a781b738cd0897ddd77cc4bcb35",
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
		url: "https://e5.onthehub.com/WebStore/OfferingDetails.aspx?o=0ecb035c-c3fd-ee11-8163-000d3af41938&pmv=00000000-0000-0000-0000-000000000000&ws=ad730196-897d-dc11-ac48-0030485a6b08&vsro=8",
	},
	{
		name: "New York Times",
		discount: "FREE",
		perks: [
			"Unlimited articles/podcasts/videos",
			"NYT Games",
			"NYT WireCutter Reviews",
		],
		icon: {
			def: faNewspaper,
			color: "text-teal-500",
			bgColor: "bg-teal-100",
		},
		url: "https://ask.library.yale.edu/faq/174871?no_redirect=true",
	},
	{
		name: "Washington Post",
		discount: "FREE",
		perks: [
			"Unlimited articles/podcasts/videos",
			"Access archives",
			"Download ebooks",
		],
		icon: {
			def: faNewspaper,
			color: "text-sky-500",
			bgColor: "bg-sky-100",
		},
		url: "https://web.library.yale.edu/access-washington-post",
	},
	{
		name: "Wall Street Journal",
		discount: "FREE",
		perks: [
			"Unlimited articles/podcasts/videos",
			"Audio articles",
			"Daily puzzles",
		],
		icon: {
			def: faNewspaper,
			color: "text-amber-500",
			bgColor: "bg-amber-100",
		},
		url: "https://web.library.yale.edu/access-wall-street-journal",
	},
	{
		name: "The Atlantic",
		discount: "FREE",
		perks: [
			"Unlimited articles/podcasts/videos",
			"Audio articles",
			"Daily puzzles",
		],
		icon: {
			def: faNewspaper,
			color: "text-red-500",
			bgColor: "bg-red-100",
		},
		url: "https://library.yale.edu/eresources/access/access-the-atlantic",
	},
	{
		name: "The Financial Times",
		discount: "FREE",
		perks: ["Unlimited articles", "Audio articles", "Unlimited journals"],
		icon: {
			def: faNewspaper,
			color: "text-purple-500",
			bgColor: "bg-purple-100",
		},
		url: "https://ask.library.yale.edu/faq/175200",
	},
	{
		name: "Shops @ Yale Discounts",
		discount: "10-20% Off w/ ID",
		perks: ["Donut Crazy", "Tropical Smoothie", "& many more!"],
		icon: {
			def: faShoppingBag,
			color: "text-gray-500",
			bgColor: "bg-gray-100",
		},
		url: "https://theshopsatyale.com/studentdiscounts/",
	},
	{
		name: "Spotify Premium",
		discount: "FREE 1m ➡ $4.99/m",
		perks: ["Spotify (ad-free)", "ShowTime (ad-free)", "Hulu (ad-supported)"],
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
		perks: ["Unlimited Music", "Apple Music (ad-free)", "AppleTV (ad-free)"],
		icon: {
			def: faMusic,
			color: "text-pink-500",
			bgColor: "bg-pink-100",
		},
		url: "https://support.apple.com/en-us/HT205928",
	},
	{
		name: "YouTube Premium",
		discount: "FREE 3m ➡ $6.99/m (50% off)",
		perks: ["No ads", "Download videos", "Picture-in-picture", "Audio-only"],
		icon: {
			def: faYoutube,
			color: "text-red-500",
			bgColor: "bg-red-100",
		},
		url: "https://www.youtube.com/premium/student",
	},
	{
		name: "Github Pro",
		discount: "FREE",
		perks: [
			"Free Jetbrains IDEs",
			"Domain/hosting",
			"Too many to list",
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
		name: "Notion Premium",
		discount: "FREE",
		perks: [
			"Organize info",
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
		name: "Craft Docs",
		discount: "$2.50/m (50% off)",
		perks: [
			"50 GB Storage",
			"Advanced exporting",
			"Collaborate with 5 friends",
		],
		icon: {
			def: faPen,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		url: "https://docs.google.com/forms/d/e/1FAIpQLSfXyRwklgz0CvXYsiRD7SQGRCHh248kJ0FLl3R9p6Br7EeC2w/viewform",
	},
	{
		name: "Evernote Pro",
		discount: "40% off",
		perks: [
			"50 GB Storage",
			"Advanced exporting",
			"Collaborate with 5 friends",
		],
		icon: {
			def: faPen,
			color: "text-green-500",
			bgColor: "bg-green-100",
		},
		url: "https://evernote.com/unidays",
	},

	{
		name: "ResumeGo",
		discount: "30% off w/ YALECOUP",
		perks: ["Revisions", "Keyword optimizations", "LinkedIn makeover"],
		icon: {
			def: faContactCard,
			color: "text-red-500",
			bgColor: "bg-red-100",
		},
		url: "https://www.resumego.net",
	},

	{
		name: "Cheap Airport Parking",
		discount: "20% off w/ YALECAP",
		perks: ["Discounted long-term rates", "Indoor parking", "Shuttles"],
		icon: {
			def: faPlane,
			color: "text-green-500",
			bgColor: "bg-green-100",
		},
		url: "https://www.cheapairportparking.org",
	},
	{
		name: "Yale VPN",
		discount: "FREE",
		perks: [
			"Access Yale sites when away",
			"Block targeted ads/malware",
			"Hide location",
		],
		icon: {
			def: faShield,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		url: "https://studenttechnology.yale.edu/new-students/set-virtual-private-network-vpn",
	},
	{
		name: "Nord VPN (1 YR)",
		discount: "$47.99 – Save $51.49 (52% off)",
		perks: [
			"Protect unlimited devices",
			"Hide location",
			"Block targeted ads/malware",
		],
		icon: {
			def: faShield,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		url: "https://yale.onthehub.com/WebStore/OfferingDetails.aspx?o=2742d139-16cc-ea11-812d-000d3af41938&pmv=00000000-0000-0000-0000-000000000000",
	},
	{
		name: "Nord VPN w/ Password Manager",
		discount: "$62.99 – Save $63.97 (50%)",
		perks: [
			"Protect unlimited devices",
			"Protect passwords",
			"Search passwords",
		],
		icon: {
			def: faShield,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		url: "https://yale.onthehub.com/WebStore/OfferingDetails.aspx?o=b94cd4e4-79b1-ee11-8160-000d3af41938&pmv=00000000-0000-0000-0000-000000000000",
	},
	{
		name: "SurfShark VPN",
		discount: "FREE 3m ➡ $2.21/m (83% off)",
		perks: [
			"Protect unlimited devices",
			"Hide location",
			"Block targeted ads/malware",
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
			"Protect up to 3 devices",
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
			"Avoid school tracking",
			"Change location",
		],
		icon: {
			def: faShieldAlt,
			color: "text-orange-500",
			bgColor: "bg-orange-100",
		},
		url: "https://e5.onthehub.com/WebStore/OfferingDetails.aspx?o=11aa1af8-3386-ea11-812a-000d3af41938&ws=ad730196-897d-dc11-ac48-0030485a6b08&vsro=8",
	},
	{
		name: "Gtech Fitness",
		discount: "5% off w/ Yale5",
		perks: ["Weight Lifting equipment", "Cardio equipment", "mats"],
		icon: {
			def: faDumbbell,
			color: "text-lime-500",
			bgColor: "bg-lime-100",
		},
		url: "https://www.gtechfitness.com",
	},
	{
		name: "ProFlowers",
		discount: "15% off w/ BULLDOG15",
		perks: [
			"Flower bouquets",
			"Food baskets",
			"Candy gift baskets",
			"Balloons",
		],
		icon: {
			def: faGift,
			color: "text-fuchsia-500",
			bgColor: "bg-fuchsia-100",
		},
		url: "https://www.proflowers.com",
	},
	{
		name: "Ode A La Rose",
		discount: "10% off w/ YALE10",
		perks: ["Bouquet deliveries", "Roses", "Peonies", "Birthday gifts"],
		icon: {
			def: faGift,
			color: "text-rose-500",
			bgColor: "bg-rose-100",
		},
		url: "https://www.odealarose.com",
	},
	{
		name: "RoseHosting",
		discount: "20% off w/ STUDENT20",
		perks: [
			"Linux VPS Hosting",
			"SSL Certificates",
			"Register/transfer domains",
		],
		icon: {
			def: faServer,
			color: "text-amber-500",
			bgColor: "bg-amber-100",
		},
		url: "https://www.rosehosting.com",
	},
	{
		name: "Hostinger",
		discount: "$15 off w/ STUDENTS15",
		perks: ["Shared hosting", "Linux VPS"],
		icon: {
			def: faServer,
			color: "text-red-500",
			bgColor: "bg-red-100",
		},
		url: "https://www.hostinger.com",
	},
	{
		name: "LeaveMeAlone",
		discount: "20% off w/ 7GSDY9FB",
		perks: [
			"Mass unsubscribe",
			"Rollup newsletters",
			"Block emails",
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
		name: "RenderForest",
		discount: "40% off w/ Yale email",
		perks: [
			"Videos",
			"Logos",
			"Websites",
			"Mockups",
			"Presentations",
			"Graphics",
		],
		icon: {
			def: faTree,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		url: "https://www.renderforest.com",
	},
	{
		name: "PenFactory",
		discount: "10% off w/ YALE-D10",
		perks: [
			"Metal pens",
			"Plastic pens",
			"Styluses",
			"Highlighters",
			"Gel pens",
		],
		icon: {
			def: faPenAlt,
			color: "text-green-500",
			bgColor: "bg-green-100",
		},
		url: "https://www.penfactory.com",
	},
	{
		name: "FoamCorePrint",
		discount: "10% off w/ YCC10",
		perks: [
			"Canvas",
			"Vinyl",
			"Aluminum",
			"Signs",
			"Posters",
			"Metal calibration targets",
		],
		icon: {
			def: faPrint,
			color: "text-pink-500",
			bgColor: "bg-pink-100",
		},
		url: "https://www.foamcoreprint.com",
	},
	{
		name: "BluShark Watch Straps",
		discount: "15% off w/ SAVE15",
		perks: ["Apple watch straps", "Rubber straps", "steel straps"],
		icon: {
			def: faStopwatch,
			color: "text-teal-500",
			bgColor: "bg-teal-100",
		},
		url: "https://www.blusharkstraps.com",
	},
	{
		name: "GoParts",
		discount: "10% off w/ YALE10",
		perks: ["Replacement head/tail lights", "Replace side mirrors"],
		icon: {
			def: faWrench,
			color: "text-indigo-500",
			bgColor: "bg-indigo-100",
		},
		url: "https://www.go-parts.com",
	},
	{
		name: "Flexibits Premium",
		discount: "FREE 2w ➡ $2.60/m (20% off)",
		perks: [
			"Pro Calendar",
			"Meetings",
			"Sync events & tasks",
			"CardHop Contacts",
		],
		icon: {
			def: faCalendarAlt,
			color: "text-rose-500",
			bgColor: "bg-rose-100",
		},
		url: "https://flexibits.com/pricing?product=fantastical",
	},
	{
		name: "Casper Sleep Inc",
		discount: "$50 off w/ bulldogs50",
		perks: ["Mattresses", "Pillows", "Bedding", "bed frames"],
		icon: {
			def: faBed,
			color: "text-sky-500",
			bgColor: "bg-sky-100",
		},
		url: "https://casper.com/mattresses/",
	},
	{
		name: "JMAC Supply Co.",
		discount: "10% off w/ YALE10",
		perks: [
			"Biometric readers",
			"Gas/smoke detectors",
			"Wires & locks",
			"cameras",
		],
		icon: {
			def: faKeyboard,
			color: "text-orange-500",
			bgColor: "bg-orange-100",
		},
		url: "https://www.jmac.com",
	},

	{
		name: "Company Folders",
		discount: "10% off w/ YaleEDU10",
		perks: ["Envelopes", "Pocket folders", "reinforced folders"],
		icon: {
			def: faFolder,
			color: "text-blue-500",
			bgColor: "bg-blue-100",
		},
		url: "https://www.companyfolders.com/presentation-folders",
	},
	{
		name: "Wallpaper Boulevard",
		discount: "15% off w/ Yale15",
		perks: ["Grasscloth sisals", "Floral prints", "scandanavian paper"],
		icon: {
			def: faPaintRoller,
			color: "text-pink-500",
			bgColor: "bg-pink-100",
		},
		url: "https://www.wallpaperboulevard.com",
	},

	{
		name: "Couture Candy",
		discount: "15% off w/ YCC15",
		perks: ["(All kinds of) Dresses", "Pantsuits", "Accessories"],
		icon: {
			def: faShoppingBag,
			color: "text-green-500",
			bgColor: "bg-green-100",
		},
		url: "https://www.couturecandy.com",
	},

	{
		name: "Freight Pros",
		discount: "10% off w/ Yale10",
		perks: ["Freight shipping", "if for some reason you need this"],
		icon: {
			def: faBox,
			color: "text-red-500",
			bgColor: "bg-red-100",
		},
		url: "https://www.freightpros.com",
	},
];
