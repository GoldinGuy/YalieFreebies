const ContributeForm = () => {
    
	return (
		<div
			id="contribute"
			className="py-14 bg-gray-50 rounded-2xl shadow-lg pg-no-capture"
		>
			<form
				className="grid max-w-screen-xl grid-cols-1 gap-8 px-8  mx-auto text-dark md:grid-cols-1 md:px-12 lg:px-32 xl:px-64 mb-5"
				action="mailto:seth.goldin@yale.edu?subject=Add%20Deal"
				method="GET"
			>
				<div>
					<div>
						<h2 className="mb-6 text-center text-3xl leading-9 font-extrabold text-dark">
							Missing something?
						</h2>
					</div>
					<div className="mt-6">
						<input
							className="pg-no-capture w-full p-3 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline"
							type="text"
							name="body"
							data-attr="deal-submission-form"
							placeholder="Free stuff"
							maxLength={120}
							// value=""
						/>
					</div>
				</div>
				<button
					type="submit"
					value="Send"
					className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-lg font-medium rounded-md text-white bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring
                    -blue-500"
				>
					Share it!
				</button>
			</form>
		</div>
	);
};
export default ContributeForm