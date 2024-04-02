
export default async function Details({params}) {
    const res = await fetch('https://rickandmortyapi.com/api/character/' + params.id )
    const detail = await res.json()
    console.log(detail)
    return (
      <div>
        <h3>Details</h3>
        <p>{detail.name}</p>
      </div>
    )
  }