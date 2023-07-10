import ReactDOM from 'react-dom';
import App from './App';
import'./sass/style.css';
import 'react-toastify/dist/ReactToastify.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Provider } from 'react-redux';
import configureStore from './redux/store/store/configureStore';
import { getBlogsFromDataBase } from './redux/store/action/blogAction';

const store:any = configureStore();

const result = (
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(
  <></>,
    document.getElementById("root") as HTMLElement
);

store.dispatch(getBlogsFromDataBase()).then(()=>{
    ReactDOM.render(result, document.getElementById("root") as HTMLElement);
});
