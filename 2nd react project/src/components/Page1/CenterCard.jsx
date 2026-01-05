
const CenterCard = (props) => {
  return (
    <div className="card">
            <img src={props.img} alt="" />
            <div className="one-card-text">
                <h1>{props.index}</h1>
                <div className="one-card-bottam">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero dolores tempore, necessitatibus inventore dignissimos incidunt?</p>
                    <button>{props.tag}</button>
                </div>
            </div>
         </div>
  )
} 

export default CenterCard