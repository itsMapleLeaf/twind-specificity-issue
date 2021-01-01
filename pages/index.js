import { useTimeout } from "react-use"
import { tw } from "twind"
import Portal from "../components/Portal"

export default function Home() {
	const [isReady] = useTimeout(100)
	return (
		<>
			<Portal>
				<div className={tw`bg-black`}>hoi</div>
			</Portal>
			{isReady() && <div className={tw`bg-black bg-opacity-25`}>a</div>}
		</>
	)
}
