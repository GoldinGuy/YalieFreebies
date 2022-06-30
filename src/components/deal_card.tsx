import { Deal } from "../pages/api/deals";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DealCard = ({deal }: { deal: Deal }) => {
    return (
			<a href={deal.url} className={`rounded-2xl hover:shadow-lg h-fit`}>
				{/* hover:bg-gray-50 */}
				<div className="px-6 ">
					<div className="flex flex-row items-center">
						<div
							className={`flex items-center justify-center ${deal.icon.bgColor}  w-14 h-14 mb-4 rounded-2xl`}
						>
							<FontAwesomeIcon
								icon={deal.icon.def}
								width={35}
								height={35}
								className={`${deal.icon.color}`}
							/>
						</div>
						<div className="px-2 ml-3 py-1 h-fit text-sm font-semibold max-w-fit bg-gray-100 rounded-xl mb-0">
							{deal.discount}
						</div>
					</div>

					<h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">
						{deal.name}
					</h3>
				</div>
				<div className="pt-3 pb-0 mb-7">
					{deal.perks.map((p, i) => {
						return (
							<span
								className={`sm:ml-4 mx-2 sm:mx-0 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mt-1 rounded-full cursor-pointer ${deal.icon.color} bg-gray-100`}
								key={i}
							>
								{p}
							</span>
						);
					})}
				</div>
				{/* <ul className="text-sm text-gray-500">
					{deal.perks.map((p, i) => {
						return <li key={i}>• {p}</li>;
					})}
				</ul> */}
			</a>
		);
}
export default DealCard;