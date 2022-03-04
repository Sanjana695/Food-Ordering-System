function Button({style, title, cls}){
    return(<>
        <button style={style} className={cls}>{title}</button>
    </>)
}

export default Button;