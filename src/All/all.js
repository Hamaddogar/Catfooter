import React from 'react'
import Men from '../Component/Home/Header/Men/Men'
import Accessories from '../Component/Home/Header/Accessories/Accessories'
import Outlet from '../Component/Home/Header/Outlets/Outlets'
import Sale from '../Component/Home/Header/Sale/Sale'
const All =()=>{
    return(
        <div>
            <Men/>
            <Accessories/>
            <Outlet/>
            
            <Sale/>
        </div>
    )
}
export default All