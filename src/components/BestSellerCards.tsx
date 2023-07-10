type propsType={
    id:any,
    photo:string,
    hovPhoto:string,
    title:string,
    price:number,
    prevPrice:number
}

const BestSellerCards = ({photo,title,price,hovPhoto}:propsType) => {
 return (
    <div className="col-12 col-sm-6 col-md-4">

                <div className="cards">

                      <div className="row">

                          <div className="col-6 col-sm-6 col-md-6">
                            <img src={photo} alt="image" />
                          </div>

                          <div className="col-6 col-sm-6 col-md-6 card-body">
                            <h5>{title}</h5>
                            <p>{price} $</p>
                          </div>

                            <div className="hoverDiv col-6 col-sm-6 col-md-6">
                                <img src={hovPhoto} alt="image" />
                            </div>
                      </div>

            </div>


    </div>
  )
}

export default BestSellerCards