import filmes from "../database/data"
import './style.css'

const MeuPrimeiroReactDoZero  = () => {
    return(
      <>
        {filmes.map(filme => 
          <div className="div-id" key={filme.id}>
            <h2 className="titulo" >{filme.nome}</h2>
            <p>{filme.genero}</p>
            <p className="p-sinopse"  >{filme.sinopse}</p>
            <img title="meus filmes favorito" className="imagem" src={filme.capa} alt={filme.nome}/>
          </div>
          
          
        )}
      </>
    )
  
  }
  

export default MeuPrimeiroReactDoZero 