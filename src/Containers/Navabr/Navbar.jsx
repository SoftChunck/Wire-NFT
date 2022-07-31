import React from 'react';
import './Navbar.css'
import {BsArrowRightShort} from 'react-icons/bs';
import {BiHomeCircle,BiLineChart,BiBook,BiMessageSquareEdit} from 'react-icons/bi';
import {TbAtom} from 'react-icons/tb';
import {MdOutlineGroup} from 'react-icons/md';
import {FaLock} from 'react-icons/fa'
const Navbar = () => {
    React.useEffect(()=>{        
        return(()=>{
            let nav_btn_expand = document.querySelectorAll('.nav-btn-expand');
            let nav_btn = document.querySelector('.nav-btn');
            let nav_panel = document.querySelector('.nav-panel')
            let expand_list = document.querySelectorAll('.expand-nav');
            let expand_list_sm = document.querySelectorAll('.expand-nav-sm');
            nav_btn.addEventListener('click',()=>{
                console.log('NAv Clicked');
                if(nav_panel.classList.contains('d-none'))
                {
                    nav_panel.classList.remove('d-none');
                    nav_panel.classList.add('d-flex');
                }
                else{
                    nav_panel.classList.remove('d-flex');
                    nav_panel.classList.add('d-none');
                }
            })
            for(let x=0;x<5;x++)
            {            
                nav_btn_expand[x].addEventListener('click',()=>{
                    console.log('clicked');
                    for(let y=0;y<5;y++)
                    {
                        if(x != y)
                        {
                            expand_list[y].classList.forEach((class_item)=>{
                                if(class_item == 'd-flex')
                                {                        
                                    expand_list[y].classList.remove('d-flex');
                                    expand_list[y].classList.add('d-none');
                                }
                            })
                        }
                    }
                    let d_flex =false;
                    expand_list[x].classList.forEach((class_item)=>{
                        if(class_item == 'd-flex')
                        {
                            d_flex = true;
                        }
                    })
                    if(d_flex==true)
                    {
                        expand_list[x].classList.remove('d-flex');
                        expand_list[x].classList.add('d-none');
                    }
                    else{
                        expand_list[x].classList.remove('d-none');
                        expand_list[x].classList.add('d-flex');
                    }
                })
            }
            for(let x=5;x<10;x++)
            {            
                nav_btn_expand[x].addEventListener('click',()=>{
                    console.log('clicked');
                    for(let y=0;y<5;y++)
                    {
                        if((x-5) != y)
                        {
                            expand_list_sm[y].classList.forEach((class_item)=>{
                                if(class_item == 'd-flex')
                                {                        
                                    expand_list_sm[y].classList.remove('d-flex');
                                    expand_list_sm[y].classList.add('d-none');
                                }
                            })
                        }
                    }
                    let d_flex =false;
                    expand_list_sm[(x-5)].classList.forEach((class_item)=>{
                        if(class_item == 'd-flex')
                        {
                            d_flex = true;
                        }
                    })
                    if(d_flex==true)
                    {
                        expand_list_sm[(x-5)].classList.remove('d-flex');
                        expand_list_sm[(x-5)].classList.add('d-none');
                    }
                    else{
                        expand_list_sm[(x-5)].classList.remove('d-none');
                        expand_list_sm[(x-5)].classList.add('d-flex');
                    }
                })
            }
            })        
    })
    return (
            <nav class="navbar navbar-expand-lg navbar-light row d-flex flex-column">
                <div className='row justify-content-between brand-bar'>
                    <img  src='assets/images/logo.png' className='navbar-brand col-lg-1 col-md-2 col-5' />
                    <button class="navbar-toggler nav-btn col-md-1 col-2 me-3" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse row px-5 py-1" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                        <button className='btn1 fs-6'><BiHomeCircle className="me-1 mb-1" /> Dashboard</button>
                        </li>
                        <li>
                            <div>                        
                                <button className='btn1 nav-btn-expand fs-6'><TbAtom className="me-1 mb-1" /> Activation</button>
                                <div className='expand-nav  d-none flex-column'>                            
                                    <a class="" href="#"><BsArrowRightShort /> Activate History</a>
                                    <a class="" href="#"><BsArrowRightShort /> Staking Details</a>
                                    <a class="" href="#"><BsArrowRightShort /> Profile</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>                        
                                <button className='btn1 nav-btn-expand fs-6'> <BiLineChart className="me-1 mb-1" /> All Income</button>
                                <div className='expand-nav  d-none flex-column'>                            
                                    <a class="" href="#"><BsArrowRightShort /> Referral Income</a>
                                    <a class="" href="#"><BsArrowRightShort /> Matching Income</a>
                                    <a class="" href="#"><BsArrowRightShort /> Roi Income</a>
                                    <a class="" href="#"><BsArrowRightShort /> Reward Income</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>                        
                                <button className='btn1 nav-btn-expand fs-6'><BiBook className="me-1 mb-1" /> History</button>
                                <div className='expand-nav  d-none flex-column'>                            
                                    <a class="" href="#"><BsArrowRightShort /> Buy NFT</a>
                                    <a class="" href="#"><BsArrowRightShort /> Withdrawl</a>
                                    <a class="" href="#"><BsArrowRightShort /> Withdrawl History</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>                        
                                <button className='btn1 nav-btn-expand fs-6'><MdOutlineGroup className="me-1 mb-1" /> Team Details</button>
                                <div className='expand-nav  d-none flex-column'>                            
                                    <a class="" href="#"><BsArrowRightShort /> My Referal</a>
                                    <a class="" href="#"><BsArrowRightShort /> My Team</a>
                                    <a class="" href="#"><BsArrowRightShort /> Matching Tree</a>
                                    <a class="" href="#"><BsArrowRightShort /> Level Details</a>
                                    <a class="" href="#"><BsArrowRightShort /> Direct Leg Business</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div>                        
                                <button className='btn1 nav-btn-expand fs-6'><BiMessageSquareEdit className="me-1 mb-1" /> Address</button>
                                <div className='expand-nav  d-none flex-column'>                            
                                    <a class="" href="#"><BsArrowRightShort /> Self Address</a>
                                    <a class="" href="#"><BsArrowRightShort /> Coin Address</a>
                                    <a class="" href="#"><BsArrowRightShort /> NFT Address</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button className='btn1 fs-6'><FaLock className="me-1 mb-1" /> Logout</button>
                        </li>
                    </ul>
                </div>
                <div className='nav-panel d-none bg-black col-10'>
                <ul class="row p-0 justify-content-center">
                        <li class="col-10 border_bottom">
                        <button className='btn1 col-12 text-start fs-5'><BiHomeCircle className="me-1 mb-1" /> Dashboard</button>
                        </li>
                        <li class="col-10 border_bottom">
                            <div>                        
                                <button className='btn1 nav-btn-expand col-12 text-start fs-4'><TbAtom className="me-1 mb-1" /> Activation</button>
                                <div className='expand-nav-sm  d-none flex-column'>                            
                                    <a class="" href="#"><BsArrowRightShort /> Activate History</a>
                                    <a class="" href="#"><BsArrowRightShort /> Staking Details</a>
                                    <a class="" href="#"><BsArrowRightShort /> Profile</a>
                                </div>
                            </div>
                        </li>
                        <li class="col-10 border_bottom">
                            <div>                        
                                <button className='btn1 nav-btn-expand col-12 text-start fs-5'> <BiLineChart className="me-1 mb-1" /> All Income</button>
                                <div className='expand-nav-sm  d-none flex-column'>                            
                                    <a class="" href="#"><BsArrowRightShort /> Referral Income</a>
                                    <a class="" href="#"><BsArrowRightShort /> Matching Income</a>
                                    <a class="" href="#"><BsArrowRightShort /> Roi Income</a>
                                    <a class="" href="#"><BsArrowRightShort /> Reward Income</a>
                                </div>
                            </div>
                        </li>
                        <li class="col-10 border_bottom">
                            <div>                        
                                <button className='btn1 nav-btn-expand col-12 text-start fs-5'><BiBook className="me-1 mb-1" /> History</button>
                                <div className='expand-nav-sm  d-none flex-column'>                            
                                    <a class="" href="#"><BsArrowRightShort /> Buy NFT</a>
                                    <a class="" href="#"><BsArrowRightShort /> Withdrawl</a>
                                    <a class="" href="#"><BsArrowRightShort /> Withdrawl History</a>
                                </div>
                            </div>
                        </li>
                        <li class="col-10 border_bottom">
                            <div>                        
                                <button className='btn1 nav-btn-expand col-12 text-start fs-5'><MdOutlineGroup className="me-1 mb-1" /> Team Details</button>
                                <div className='expand-nav-sm  d-none flex-column'>                            
                                    <a class="" href="#"><BsArrowRightShort /> My Referal</a>
                                    <a class="" href="#"><BsArrowRightShort /> My Team</a>
                                    <a class="" href="#"><BsArrowRightShort /> Matching Tree</a>
                                    <a class="" href="#"><BsArrowRightShort /> Level Details</a>
                                    <a class="" href="#"><BsArrowRightShort /> Direct Leg Business</a>
                                </div>
                            </div>
                        </li>
                        <li class="col-10 border_bottom">
                            <div>                        
                                <button className='btn1 nav-btn-expand col-12 text-start fs-5'><BiMessageSquareEdit className="me-1 mb-1" /> Address</button>
                                <div className='expand-nav-sm  d-none flex-column'>                            
                                    <a class="" href="#"><BsArrowRightShort /> Self Address</a>
                                    <a class="" href="#"><BsArrowRightShort /> Coin Address</a>
                                    <a class="" href="#"><BsArrowRightShort /> NFT Address</a>
                                </div>
                            </div>
                        </li>
                        <li class="col-10 border_bottom">
                            <button className='btn1 col-12 text-start fs-5'><FaLock className="me-1 mb-1" /> Logout</button>
                        </li>
                    </ul>
                </div>
            </nav>
        );
}
 
export default Navbar;