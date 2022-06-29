import { Deal } from "../pages/api/deals";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DealCard = ({deal }: { deal: Deal }) => {
    return (
			<a href={deal.url} className={`rounded-2xl p-6 shadow-md hover:shadow-sm`}>
				{/* hover:bg-gray-50 */}
				<div
					className={`flex items-center justify-center ${deal.icon.bgColor}  w-14 h-14 mb-4 rounded-2xl`}
				>
					<FontAwesomeIcon
						icon={deal.icon.def}
						size="2x"
						className={`${deal.icon.color}`}
					/>
				</div>
				<h3 className="mb-2 text-base font-semibold leading-tight text-gray-900">
					{deal.name}
				</h3>
				<div className="px-2 py-1 text-sm font-semibold max-w-fit bg-gray-100 rounded-xl mb-3">
					{deal.discount}
				</div>
				<ul className="text-sm text-gray-500">
					{deal.perks.map((p, i) => {
						return <li key={i}>• {p}</li>;
					})}
				</ul>
			</a>
		);
}
export default DealCard;