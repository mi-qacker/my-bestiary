import {Routing} from 'pages';
import './index.scss';
import {withRouter} from './providers/with-router';

const App = () => {
    return <Routing />;
};

export default withRouter(App);
