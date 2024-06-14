import "@/styles/globals.css";
import { Menu } from "../components/menu";
import MenuConfig from "../config/menu";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Menu
                logo={MenuConfig.logo}
                links={MenuConfig.links}
                ctas={MenuConfig.ctas}
                burgerMenu={MenuConfig.burgerMenu}
            />

            <Component {...pageProps} />
        </>
    );
}
