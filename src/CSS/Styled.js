export const buttonStyle = {
    display: "grid",
    gridArea: "btnTD",
    alignItems: "center",
    margin: "10px 0px 0px 10px",
    height: "30px",
    width: "115px",
    borderRadius: "15px",
    '&:hover': {
        cursor: "pointer",
        background: "#2d1ff149",
        borderRadius: "5px",
        transform: "scale(1.1)",
    }
}

export const name = {
    maxWidth: "1000px",
    margin: "0px auto",
    height: "100vh",
}

export const HeaderTD = {
    display: "grid",
    justifyContent: "center",
    fontSize: "xx-large",
    background: "hwb(195 90% 5% / 0.5)",
    borderRadius: "5px",
}

export const mainTD = {
    display: "grid",
    gridTemplateRows: "1fr",
    height: "calc(100% - 37px)",
    background: "linear-gradient(45deg, #db2d64, #753a88)"
}
export const ulTD = {
    fontSize: "30px",
    margin: "10px 10px 0px 10px",
    border: "1px solid black",
    borderRadius: "3px",
    overflowY: "auto"
}
export const inputTDL = {
    display: "grid",
    gridArea: "inputTDL",
    width: "180px",
    height: "30px",
    margin: "10px 0px 0px 10px",
    borderRadius: "12px",
    padding: "0px 0px 0px 5px",
}
export const deleteIMG = {
    display: "grid",
    gridArea: "deleteIMG",
    background: "#ff000069",
    cursor: "pointer",
    border: "1px solid red",
    width: "36px",
    height: "36px",
}
export const emptyList = {
    display: "grid",
    justifyContent: "center",
    fontSize: "30px",
    margin: "10px 10px 0px 10px",
    alignItems: "center",
    border: "1px solid black",
}
export const ulList = {
    display: "grid",
    gridTemplateAreas: `"ListTD checkbox deleteIMG" `,
    margin: "0px 0px 10px 0px",
    gridTemplateColumns: "1fr",
    alignItems: "center",
}
export const Li = {
    listStyle: "none",
    border: "1px solid #001aff2a",
    gridArea: "ListTD",
    padding: "0px 0px 0px 5px"
}
export const Forma = {
    display: "grid",
    maxWidth: "999px",
    gridTemplateAreas: `"inputTDL btnTD"`,
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 5px 0px",
}
export const checkbox = {
    height: "36px",
    width: "36px",
    margin: "0px 10px 0px 0px",
}