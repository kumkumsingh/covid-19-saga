import React from 'react'
import styles from '../Footer/Footer.module.css'

export default function Footer() {
    let style = {
        backgroundColor: "aqua",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "20px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "60px",
        width: "100%",
    }
    
    let footer = {
      display: 'block',
      padding: '20px',
      height: '60px',
      width: '100%',
    }
    
    return (
       <React.Fragment>
       <div style={footer} />
            <div style={style}>
            Stay Home, be safe and help others during COVID-19!!
        </div>
        {/* <div className={styles.bottomcontent}>Stay Home, be safe and help others during COVID-19!!</div> */}
           {/* <footer><h2></h2> </footer> */}
       </React.Fragment>
    )
}
