import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



const Drinks = () => {





    return (
        <div>

            
            <div className=' flex justify-center'>


            <div className=''>
            <Tabs>
            <TabList>
            <Tab><p className='the btn bg-blue-900 text-white  text-xl '>Soft drinks</p></Tab>
            <Tab><p className='the btn bg-blue-900 text-white  text-xl '>Smoothies</p></Tab>
            <Tab><p className='the btn bg-blue-900 text-white  text-xl '>Milkshakes</p></Tab>
            </TabList>
            <TabPanel>
            <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
            <h2>Any content 3</h2>
            </TabPanel>
            </Tabs>
            </div>
              
              
            </div>          
            
        </div>
    );
};

export default Drinks;