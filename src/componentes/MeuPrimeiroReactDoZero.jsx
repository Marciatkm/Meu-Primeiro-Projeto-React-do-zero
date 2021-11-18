import filmes from "../database/data"

const MeuPrimeiroReactDoZero  = () => {
    return(
      <>
        {filmes.map(filme => 
          <div key={filme.id}>
            <h2>{filme.nome}</h2>
            <p>{filme.genero}</p>
            <img src={filme.capa} alt={filme.nome}/>
          </div>
        )}
      </>
    )
  
  }
  

export default MeuPrimeiroReactDoZero 