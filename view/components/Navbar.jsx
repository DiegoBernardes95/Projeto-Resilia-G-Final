import React from 'react'
import { Link } from "react-router-dom";
import logo from "../Educa.png"

const Navbar = () => {
  return (
    <div className='navbar'>
    

    <img className='logo' src={logo}/>
    <ul className='navLinks'>
      <li><Link className='links' to='/'>Home</Link></li>
      <li><Link className='links' to='/cursos'>Cursos</Link></li>
      <li><Link className='links' to='/materia'>Matéria</Link></li>
      <li><Link className='links' to='/professor'>Professores</Link></li>
      <li><Link className='links' to='/turma'>Turmas</Link></li>
      <li><Link className='links' to='/aluno'>Alunos</Link></li>
      <li><Link className='links' to='/equipe'>Equipe</Link></li>
    </ul>
    
  </div>
  )
}

export default Navbar