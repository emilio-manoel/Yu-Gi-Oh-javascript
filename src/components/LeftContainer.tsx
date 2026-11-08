
export default function LeftContainer(){

    return(
        <div className=" w-[35%] min-w-75 flex  flex-col items-center justify-around framed-golden-2">
            <div className="bg-white p-7 border-solid border-3 border-black rounded-[5px]">
                <span id="pontos">win : 0 | lose: 0</span>
            </div>
            <div className="menu-avatar">
                <img id="cartao-imagem"/>
            </div>
            <div className="bg-white p-4 flex flex-col items-center justify-between h-24 w-full framed">
                <p className="text-sm">selecione</p>
                <p className="text-base">uma carta</p>
            </div>
        </div>
    )
}