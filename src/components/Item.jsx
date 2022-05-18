import PropTypes from 'prop-types'

Item.propTypes = {
    marca: PropTypes.string.isRequired,
    ano_lancamento: PropTypes.number.isRequired,
}

Item.defaultProps = {
    marca: 'Faltou',
    ano_lancamento: 0,
}

export function Item ({marca, ano_lancamento}) {
    return (
        <>
        <li>{marca} - {ano_lancamento}</li>
        </>
    )
}