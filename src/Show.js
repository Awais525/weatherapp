const Show=({t1})=>{
    return(
        <div className="container py-4">
        <div className="row mx-2">
        <div className="col-md-4">
        <div className="card">
        <div className="card-body">
            <h3 className="card-title">Description :</h3>
            <p className="card-text">{t1.description}</p>
        </div>

        </div>

        </div>
        <div className="col-md-4">
        <div className="card">
        <div className="card-body">
            <h3 className="card-title">Temperature :</h3>
            <p className="card-text">{t1.temp}</p>
        </div>

        </div>

        </div>
        <div className="col-md-4">
        <div className="card">
        <div className="card-body">
            <h3 className="card-title">Sunrise :</h3>
            <p className="card-text">{t1.sunrise}</p>
        </div>

        </div>

        </div>
        <div className="col-md-4 my-4">
        <div className="card">
        <div className="card-body">
            <h3 className="card-title">Country :</h3>
            <p className="card-text">{t1.country}</p>
        </div>

        </div>

        </div>
        

        </div>

        </div>

    )
}
export default Show;