import React from 'react'

const Suggestion = (props) => {
    const options = props.results.filter(name => (
        name.nameProduct.toLowerCase().includes((props.filter.toLowerCase()))
    )).map((r, k) => (
        <li key={k.toString()} class='list'>
            {r.nameProduct}
        </li>
    ))
    const List = <div class='list'>
        <ul id='list'  className='option' onClick={(e) => { props.handle(e) }}>{options}
        </ul>
    </div>
    return List

}
export default Suggestion