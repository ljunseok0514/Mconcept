
/**
 *  ProductCheckBox component
 * */

function ProductCheckBox({isPacked = false, children}){
    return(
        <ul className="list-none">
            <li>
                {isPacked ? (
                    <ProductCheck>{children}</ProductCheck>
                ):(
                    <UnProductCheck>{children}</UnProductCheck> 
                )}
            </li>
        </ul>
    );
}

function ProductCheck({children}){
    return(
        <>
            <input type="checkbox" className="custom-checkbox" /> <del>{children}</del>
        </>
    );
}

function UnProductCheck({children}){
    return(
        <>
            <input type="checkbox" className="custom-checkbox" /> {children}
        </>
    );
}

export default ProductCheckBox;