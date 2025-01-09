import Image from "next/image";
import loader from "@/assets/loader.gif";

const LoadingPage = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
				width: "100vw",
			}}
		>
			<Image src={loader} height={200} width={200} alt="Loading..." />
		</div>
	);
};

export default LoadingPage;
