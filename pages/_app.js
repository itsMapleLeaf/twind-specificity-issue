import App from "next/app"
import { setup } from "twind"
import twindConfig from "../twind.config"

if (typeof window !== "undefined") {
	setup(twindConfig)
}

export default App
