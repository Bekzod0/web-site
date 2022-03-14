import React, {useState} from 'react';
import {Input} from '../Input/Input';
import {CardList}  from '../CardList/Index';
import '../../App.css'
export const Pagoda = () => {
    const [citieList, setCitieList]=useState([]);
  return (
    <div>
   <Input  setCitieList={setCitieList}/>
   <CardList citieList={citieList}/>
    </div>
  );
}
