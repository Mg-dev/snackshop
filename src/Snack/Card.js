import xo from '../images/xo.jpg'
import oisho from '../images/oishi.jpg'
import dynamite from '../images/dynamite.webp'
import dutchmill from '../images/dutchmill.jpg'

const card = {
    border: "solid 1px #dfdfdf",
    borderRadius: "15px",
    padding: "15px",
    width: "350px",
    display: "flex",
    flexDirection: "column",
    boxShadow: "3px 3px 3px #dadada",
    margin: "10px 0px",
}
const Card = ({data,text,search}) => {
    console.log(xo)
    return (
        <div>
            {
                search.map(d=> {
                    return (
                        <div style={card}>
                            <div>
                                <button className='btn btn-dark btn-sm my-2 float-end'>Edit</button>
                            </div>
                            <div className='mb-3 d-flex justify-content-center'>
                                {console.log(d.image)}
                                <img src={d.image} alt="image" style={{width: "250px", borderRadius: "8px", margin: "0 auto"}} />
                            </div>
                            <div>
                                <div>
                                <h5 className='d-inline-block w-50 '>Item Name</h5>
                                <span className="float-end">{d.name}</span>
                                </div>
                                <div>

                                <h5 className='d-inline-block w-50 '>Category</h5>
                                <span className="float-end">{d.category}</span>
                                </div>

                                <div>

                                <h5 className='d-inline-block w-50 '>Price</h5>
                                <span className="float-end">{d.price} kyats</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card;