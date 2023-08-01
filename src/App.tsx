import { useState } from 'react';
import styles from './App.module.css'; 
import logoImage from './assets/logo.png'; 
import leftArrowImage from './assets/leftarrow.png'; 
import {GridItem } from './Components/GridItem'; 

import { levels, calculateImc, level, } from './helpers/imc';

const App = () => {
const [heightField, setHeightField] = useState<number>(0); 
const [weightField, setweightField] = useState<number>(0); 
const [toShow, setToShow] = useState<level | null>(null); 

const handleCalculateButton = () => {
  if (heightField && weightField) {
  setToShow(calculateImc(heightField, weightField)); 

    } else {

      alert('Digite todos os compos'); 
    }
}

const handleBackButton = () =>{
   setToShow(null); 
   setHeightField(0); 
   setweightField(0);

} 


  return (
      <div className={styles.main}> 
     <div className={styles.headerContainer}>
     
     <img src={logoImage} alt="" width={150} />
     </div>
     <div className={styles.container}>
        <div className={styles.leftSide}>
          <h1> Calcule o seu IMC</h1>
          
          <p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          
          <input
           type='number'
           placeholder='Digite a sua altura. Ex 1.5(em metro)'
           value={heightField > 0 ? heightField : ''} 
           onChange={e => setHeightField(parseFloat(e.target.value))}
           disabled={toShow ? true : false}
          /> 
         
         <input
           type='number'
           placeholder='Digite o seu peso. Ex 75;3(em kg)'
           value={weightField > 0 ? weightField : ''} 
           onChange={e => setweightField(parseFloat(e.target.value))}
           disabled={toShow ? true : false}
         />
         
         <button onClick={handleCalculateButton}disabled={toShow ? true : false } >Calcular</button>

        </div>
        <div className={styles.rightSide}>
          {!toShow && 
        <div className={styles.grid}>
          {levels.map((item, key) => (            
           <GridItem key={key} item={item} /> 
           ))}                     
          </div> 
          }
          {toShow &&
         <div className={styles.rightBig}>
          <div className={styles.rightArrow} onClick={handleBackButton}>
           <img src={leftArrowImage} alt='' width={60} />
            </div>  
        <GridItem item={toShow} />
         </div>
          }
        </div>  

     </div>

    </div>
  )
}

export default App; 