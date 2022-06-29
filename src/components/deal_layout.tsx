import { DEALS } from "../pages/api/deals";
import DealCard from "./deal_card";

const DealLayout = () => {
	return (
		<section className="px-4 py-20 mx-auto max-w-7xl">
			<div className="flex flex-col items-start">
				<h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white relative flex items-center self-start w-auto ">
					<span className="z-20 font-extrabold">Yalie Freebies</span>
					<span className="absolute inline-block w-full break-words h-4 mt-3 sm:-ml-2 bg-blue-400 dark:bg-blue-500 z-0"></span>
				</h1>
			</div>
			{/* <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">
				Yalie Freebies
			</h2> */}
			<p className="mb-12 text-lg text-gray-500">
				Take advantage of your newfound collegiate status and save some moolah moolah!
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 sm:gap-y-8 md:gap-y-16">
				{/* lg:gap-x-20 */}
				{DEALS.map((d, i) => {
					return <DealCard deal={d} key={i} />;
				})}
			</div>
		</section>
	);
};
export default DealLayout;
