import Main from './Main/main';
import MainProvider from '../ContextStores/MainStore'
const Home = () => {
    return (

        <MainProvider>
            <Main />
        </MainProvider>
        
    )
}

export default Home;