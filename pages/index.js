import { useTimeout } from "react-use"
import { tw } from "twind"
import Portal from "../components/Portal"

export default function Home() {
	const [isReady] = useTimeout(100)
	return (
		<>
			<Portal>
				<div className={tw`bg-black text-white`}>portal element</div>
			</Portal>
			{isReady() && (
				<div className={tw`bg-black bg-opacity-25 text-white`}>
					this should be translucent, but is not?
				</div>
			)}
		</>
	)
}
