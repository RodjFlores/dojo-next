import React from "react";
import Link from 'next/link'

async function getCharacters() {
    const result = await fetch('https://rickandmortyapi.com/api/character')
    return result.json()
}

export default async function Characters() {
    const char = await getCharacters();
    return (
        <>
            {char.results.map(c => {
                return (
                    <Link href={`tickets/${c.id.toString()}`}>
                        <div key={c.id} className="card my-5">
                            <h3>{c.id}: {c.name}</h3>
                            <p>{c.status}</p>
                        </div>
                    </Link>

                )
            })}
        </>
    )
}