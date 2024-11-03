import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SoftDrinks from './SoftDrinks';
import Smoothydetails from './Smoothydetails';
import MilshakeDetails from './MilshakeDetails';
import Smooty from './Smooty';
import Milshake from './Milshake';



const Drinks = () => {





    return (
        <div>

            
            <div className=' flex justify-center p-20'>


            <div className=''>
            <Tabs>
            <TabList>
            <Tab><p className='the btn bg-blue-900 text-white  text-xl '>Soft drinks</p></Tab>
            <Tab><p className='the btn bg-blue-900 text-white  text-xl '>Smoothies</p></Tab>
            <Tab><p className='the btn bg-blue-900 text-white  text-xl '>Milkshakes</p></Tab>
            </TabList>
            <TabPanel>
               <SoftDrinks></SoftDrinks>
            </TabPanel>
            <TabPanel>
               <Smooty></Smooty>
            </TabPanel>
            <TabPanel>
                <Milshake></Milshake>
            </TabPanel>
            </Tabs>
            </div>
              
              
            </div>          
            
        </div>
    );
};

export default Drinks;