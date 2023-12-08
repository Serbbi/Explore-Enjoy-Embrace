export default function CafeContainer({ cafes }) {
    const actualCafes = cafes.filter((cafe) => cafe['address'] !== undefined);

    return (
        <div>
            {actualCafes.length > 0 &&
                <ul>
                    {actualCafes.map((cafe) => (
                        <li key={cafe['name']}>
                            <h3>{cafe['name']}</h3>
                            <p>{cafe['address']}</p>
                        </li>
                    ))}
                </ul>
            }
        </div>
    )
}