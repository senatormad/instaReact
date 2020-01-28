export const cardBodyStyle = {
    position: 'absolute',
    bottom: 0,
    background: 'rgba(255,255,255,.8)',
    width: '100%',
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '0.8em',
    opacity: 0,
    transform: 'translateY(100%)',
    transition: 'transform .3s ease, opacity .2s ease'
}

export const cardHoverBodyStyle = {
    position: 'absolute',
    bottom: 0,
    background: 'rgba(255,255,255,.8)',
    width: '100%',
    textAlign: 'center',
    fontWeight: 900,
    fontSize: '0.8em',
    opacity: 1,
    transform: 'translateY(0%)',
    animation: 'fade .3s ease',
    transition: 'transform .3s ease, opacity .2s ease'
}

export const imgStyle = {
    objectFit: 'cover'
}
