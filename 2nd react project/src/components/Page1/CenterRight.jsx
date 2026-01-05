import CenterCard from './CenterCard'

const CenterRight = (props) => {
   
  return (
    <div className="one-center-right">
      {props.cards.map(function(elem){
       return <CenterCard  key={elem.id} img={elem.img} tag={elem.tag} index={elem.index} />
      })}
    </div>
  )
}

 

export default CenterRight