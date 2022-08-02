import './App.css';
import {Navbar,Footer} from './Containers';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import {Home,Activate_History,Staking_Details,Profile, Referral_Income, Matching_Income,Reward_Income, Roi_Income, Matching_Level_Income, Buy_NFT, Withdrawal_History, Withdrawal, Direct_Leg_Business, Matching_Tree, My_Referral, My_Team, Coin_Address, NFT_Address, Self_Address,Level_Details} from './Routes';

function App() {
  return (
    <Router>
      <div className="App">        
        <Navbar />
        <Routes>
          <Route path='/' element={ <Home /> } /> 
          <Route path='/Activate_History' element={<Activate_History />} />          
          <Route path='/Staking_Details' element={<Staking_Details />} />                 
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Referral_Income' element={<Referral_Income />} />
          <Route path='/Matching_Income' element={<Matching_Income />} />
          <Route path='/Reward_Income' element={<Reward_Income />} />
          <Route path='/Roi_Income' element={<Roi_Income />} />
          <Route path='/Matching_Level_Income' element={<Matching_Level_Income />} />
          <Route path='/Buy_NFT' element={<Buy_NFT />} />
          <Route path='/Withdrawal_History' element={<Withdrawal_History />} />
          <Route path='/Withdrawal' element={<Withdrawal />} />
          <Route path='/Direct_Leg_Business' element={<Direct_Leg_Business />} />
          <Route path='/Level_Details' element={<Level_Details />} />
          <Route path='/Matching_Tree' element={<Matching_Tree />} />
          <Route path='/My_Referral' element={<My_Referral />} />
          <Route path='/My_Team' element={<My_Team />} />
          <Route path='/Coin_Address' element={<Coin_Address />} />
          <Route path='/NFT_Address' element={<NFT_Address />} />
          <Route path='/Self_Address' element={<Self_Address />} />
        </Routes>
        <div className='hidden-for-area'>
            <Footer />
          </div>
          <div className='footer-visible'>
            <Footer />
          </div>
      </div>
    </Router>
  );
}

export default App;
