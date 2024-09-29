import {Link} from 'react-router-dom';
import {Breadcrumbs} from '../components/Breadcrumbs';

function Home()
{
    const currentPage = '/home/products/electronics';
    return (
    
        <div>
          <h1>My Website</h1>
          
         
          <p>Welcome to the electronics section of our store!</p>
        </div>
    )
}
export default Home;