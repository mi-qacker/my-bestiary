import {withRouter} from 'app/providers';
import {Routing} from 'pages';
import './index.scss';

const App = () => {
    return (
        <Routing/>
    );
};

export default withRouter(App);