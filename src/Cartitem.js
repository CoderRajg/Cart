import React from "react";
class Cartitem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={style.img}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:26}}>Mobile</div>
                    <div style={{color:'#777'}}>999</div>
                    <div style={{color:'#777'}}>1</div>
                    <div className="cart-item-action">
                        {/* buttons */}
                    </div>
                </div>
            </div>
        )
    }
}

const style = {
    img: {
      height: 110,
      width: 100,
      borderRadius: 4,
      background: '#ccc'
    },
  };

export default Cartitem;