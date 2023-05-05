import {Component} from 'react';
import Navbar from "./components/Navbar";
import AppRoutes from "./AppRoutes.tsx";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{backgroundColor: "#fafbfc", height: "2000hv"}}>
                    <div style={{margin: "0 auto", width: '60%'}}>
                        <AppRoutes/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;