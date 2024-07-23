import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositMoney, withdrawMoney } from '../store/actions/AmountAction'
import { userSignup } from '../store/actions/UserDataAction'

const Bank = () => {
    const [name, setname] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    let dispatch = useDispatch()
    const handleSubmit = () => {
        let data = {
            name: name,
            email: email,
            pass: pass
        }
        dispatch(userSignup(data))
    }

    return (
        <>
            <div className="container">
                <h1>Withdraw/Deposit Money</h1>
                <button className='btn btn-primary mx-3' onClick={() => {dispatch(withdrawMoney(100))}}>-</button>
                Update Money
                <button className='btn btn-primary mx-3' onClick={() => {dispatch(depositMoney(100))}}>+</button>
            </div>
            <input type="email" placeholder='Enter eamil' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder='Enter pass' value={pass} onChange={(e)=> setPass(e.target.value)} />
            <input type="text" placeholder='Enter Name' value={name} onChange={(e)=> setname(e.target.value)} />
            <button onClick={handleSubmit} className='btn btn-primary'>addddddd</button>
        </>
    )
}

export default Bank
