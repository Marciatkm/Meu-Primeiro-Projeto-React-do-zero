import filmes from "../database/data"
import './style.css'

const MeuPrimeiroReactDoZero  = () => {
    return(
      <>
        {filmes.map(filme => 
          <div className="div-id" key={filme.id}>
            <h2 className="titulo" >{filme.nome}</h2>
            <p>{filme.genero}</p>
            <img  className="imagem" src={filme.capa} alt={filme.nome}/>
          </div>
        )}
      </>
    )
  
  }
  

export default MeuPrimeiroReactDoZero 