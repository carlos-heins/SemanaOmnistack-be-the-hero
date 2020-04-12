import React, { useState } from 'react'
import './styles.css'
import { FiArrowLeft } from "react-icons/fi";
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'
import logoImg from '../../assets/logo.svg'

export default function NewIncident(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')

    const ongId = localStorage.getItem('ongId')

    const history = useHistory()

    async function handleNewIncident(e){
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })
            history.push('/profile')
        } catch (err) {
            window.alert('Erro ao tentar cadastrar caso... Tente novamente')
        }
    }

    return(
        <div className="new-incident-container">
            <div className="content">
                <section>
               <img src={logoImg} alt="Be the hero" />

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encotrar um héroi para resolver isso.</p>

                <Link to={"/profile"} className="bakc-link">
                <FiArrowLeft size={16} color="#E02041" />   
                Voltar para Home
                </Link>     
                </section>
                <form onSubmit={handleNewIncident}>
                    <input 
                      placeholder="Título do caso"
                      value={title}
                      onChange={e => setTitle(e.target.value)}
                    /> 
                    <textarea 
                      placeholder="Descrição"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                    />
                    <input  
                      placeholder="Valor em reais"
                      value={value}
                      onChange={e => setValue(e.target.value)}
                    /> 

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>

    )
}