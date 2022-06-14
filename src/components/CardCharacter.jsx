import useApiCharacter from '../hooks/useApiCharacter'

const CardCharacter = ({resident}) => {


  const character = useApiCharacter(resident)

  return (
    <div className='cardCharacter'>
      <img src={character?.image} alt={character?.name} />
      <h2>{character?.name}</h2>
      <p className={character?.status}>{character?.status}</p>
      <p><span>Origin: </span>{character?.origin.name}</p>
      <p><span>Episodes: </span>{character?.origin.name}</p>
    </div>
  )
}

export default CardCharacter