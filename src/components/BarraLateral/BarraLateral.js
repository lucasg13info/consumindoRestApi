import React, { Component, Fragment } from "react";


class BarraLateral extends Component {
    render(){
        return(

    <div class="container">
        <div class="row ">
            <div class="col-2 bg-success text-black">
            <div>
                <h1>Logo</h1>

                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>
                <h2>Submenu</h2>
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>         
                <h2>Submenu</h2>
                <ul>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                    <li>Link</li>
                </ul>            
            </div>      
            </div>
            <div class="col-9 bg-light text-black ">
            
                <h1 class="lign-text-bottom">Pessoas que vão ganhar dinheiro</h1>
                <br/>
                <br/>

                <div class="bg-white text-dark">
                    <h2>Nome da Pessoa Vai Aqui</h2>
                    <p>Ao clicar no ink abaixo, uma dialog irá aparecer perguntando quantos reais você deseja adicionar a barra de progresso. A barra deve começar em 0.</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>  

                    <a href="#">+ Clique aqui para adicionar reais</a>
                </div>
                    <br/>
                    
                <div>
                    <p>IR PARA A VERSÃO MOBILE</p>
                </div>
            </div>
            
        </div>
    </div>


        )
    }
}

export default BarraLateral;