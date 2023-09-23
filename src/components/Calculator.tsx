import { useState} from 'react'
import styles from './Calculator.module.css'


interface Line{
    type:string
    symbol: string
}

interface Button{
    line1:Line[],
    line2:Line[],
    line3:Line[],
    line4:Line[],
    line5:Line[]
}


interface Props{
    buttons:Button
}


export const Calculator = ({buttons}:Props) =>{

    const [calculator, setCalc] = useState("");
    const [result, setResul] = useState("");

    const handleDigits = (e: string) =>{
        
        setCalc(calculator+e)
        
    }

    const getResult = ()=>{
        setResul(eval(calculator))
        setCalc(eval(calculator))
    }

    const clearCalc = ()=>{
        setCalc("");
    }

    const clearDigit = ()=>{
        setCalc(calculator.substring(0, calculator.length - 1));
    }

    return (
        <div className={styles.calculator}>
            <div className={styles.calculatorArea}>
                <div className={styles.inputArea}>
                    
                    <span>{calculator}</span>
                </div>

                <div className={styles.resultArea}>
                    <span>{result}</span>
                </div>
            </div>

            <div className={styles.handleButtons}>
                <div>
                    <button onClick={clearDigit}>C</button>
                    <button onClick={clearCalc}>CE</button>
                    <button onClick={()=>handleDigits('%')}>%</button>
                    <button onClick={()=>handleDigits('/')}>/</button>
                </div>

                <div>
                    {buttons.line2.map(item=>{
                        return (
                            <button onClick={()=>handleDigits(item.symbol)}>
                                {item.symbol == '*' ? 'x' : item.symbol}
                                </button>
                        )
                    })}
                </div>

                <div>
                    {buttons.line3.map(item=>{
                        return (
                            <button  onClick={()=>handleDigits(item.symbol)}>
                                {item.symbol}
                                </button>
                        )
                    })}
                    
                </div>

                <div>

                    {buttons.line4.map(item=>{
                        return (
                            <button  onClick={()=>handleDigits(item.symbol)}>
                                {item.symbol}
                                </button>
                        )
                    })}
                    
                </div>

                <div>
                    {buttons.line5.map(item=>{
                        if(item.symbol != '='){
                            return (
                            
                              
                            
                                <button  
                                onClick={()=>handleDigits(item.symbol)} 
                                className={item.symbol == '0' ? styles.zeroBtn : styles.Btn+item.symbol}>
                                {item.symbol}
                                </button>
                            )
                        } else{
                            return(
                            <button onClick={()=>getResult()}>{item.symbol}</button>
                            )
                        }
                        
                        
            
                    })}
                    
                </div>
            </div>
        </div>
        
    )
}