import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const {amount} = useSelector(state => state.amount)
  console.log(amount)
  return (
    <>
<nav className="navbar bg-light">
  <div className="container-fluid">
    <a href='#' className="navbar-brand">Bank</a>
    <form className="d-flex" role="search">
      <button className="btn btn-primary" disabled >Total balance is {amount}</button>
    </form>
  </div>
</nav>
    </>
  )
}

export default Navbar;
