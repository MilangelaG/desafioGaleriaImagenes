function Card(props) {
  return (
      <div class="col-sm-4 card-holder">
        <h5 class="card-titulo"> {props.titulo} </h5>
        <img src={props.direccion} alt={props.descripcion} />
        <div> {props.descripcion} </div>
      </div>
  );
}

export default Card;
