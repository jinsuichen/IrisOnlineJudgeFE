import {Component} from 'react';
import Navbar from "./components/Navbar";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div style={{backgroundColor: "#fafbfc", height: "2000hv"}}>
                    <div style={{margin: "0 auto", width: '60%'}}>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;