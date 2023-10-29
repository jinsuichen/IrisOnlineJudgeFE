import Navbar from "./components/navbar";
import AppRoutes from "./AppRoutes.tsx";
import ApiResponseListener from "./api/config/ApiResponseListener.tsx";

export default function App() {
    return (
        <>
            <ApiResponseListener/>
            <div>
                <Navbar/>
                <div style={{backgroundColor: "#fafbfc", height: "2000hv"}}>
                    <div style={{margin: "0 auto", width: '60%'}}>
                        <AppRoutes/>

                    </div>
                </div>
            </div>
        </>

    );
}