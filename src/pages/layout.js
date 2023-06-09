import { Outlet } from "react-router-dom"
import MainFooter from "../components/common/mainFooter/mainFooter"
import MainSidebar from "../components/common/mainSidebar/mainSidebar"
import Navigation from "../components/common/navigation/navigation"

export default function Layout() {
    return(
        <>
        <div id="main" className="sidebar-mini layout-fixed">
                <div className="wrapper container-fluid p-0">
                    <Navigation></Navigation>
                    <MainSidebar></MainSidebar>
                    <div className="content-wrapper">
                        <Outlet></Outlet>
                    </div>
                    <MainFooter />
                </div>
        </div>
        </>
    )
}