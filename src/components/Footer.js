import React from 'react'

export default function Footer(props) {
    function handleClick() {
        window.scrollTo(0, 0)
    }
    return (
        <>
            <footer>
                <div className='container'>
                    <div className='col-md-12 text-center p-3'>
                        Copyright &copy; <strong><span className='link'>DEVELOPER JATIN</span></strong> All Rights Reserved.
                    </div>
                </div>
                <div className='scrollToTop' onClick={handleClick}><i className="fa-solid fa-chevron-up"></i></div>
            </footer>
        </>
    )
}
