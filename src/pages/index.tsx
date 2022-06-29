import DealLayout from "../components/deal_layout";
import Footer from "../components/footer";

export default function Home() {
  return (
		<div className="container flex flex-col items-center p-4 mx-auto min-h-screen justify-center">
			<DealLayout />
			<Footer />
		</div>
	);
}
