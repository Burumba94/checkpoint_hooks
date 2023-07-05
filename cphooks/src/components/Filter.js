import React from 'React';

const Filter = ({ titre, rang, setTitre, setRang, onFilter}) => {
    return (
        <div>
            <label htmlFor='titre'>Titre : </label>
            <input
                type='text'
                id='titre'
                value={titre}
                onChange={(e) =>setTitre(e.target.value)}
            />
            <label htmlFor='rang'>Rang : </label>
            <input
                type='number'
                id='rang'
                min={1}
                max={5}
                value={rang}
                onChange={(e) => setRang(e.target.value)}
            /><button onClick={onFilter}>Filtrer</button>
        </div>
    );
};

export default Filter;