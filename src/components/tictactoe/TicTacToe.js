import React,{useState} from 'react'
import './TicTacToe.css'
const TicTacToe = () => {
    
    const items_def = [        
                        {value:null,id:1},{value:null,id:2},{value:null,id:3},
                        {value:null,id:4},{value:null,id:5},{value:null,id:6},
                        {value:null,id:7},{value:null,id:8},{value:null,id:9},
                        ]

    const [items,setitems] =    useState(items_def) 
        const [flag ,setFlag]  = useState(true)                                    
        const [win,setWin] = useState(false)                                    
        const [winnerName,setWinnerName] = useState('')                                    
       

        const chechWinner = () =>{
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
            ]
            
        lines.forEach(elem =>{
            if(items[elem[0]].value && 
                    items[elem[0]].value === items[elem[1]].value 
                         && items[elem[1]].value === items[elem[2]].value ){

                setWin(true)
                setWinnerName(items[elem[0]].value)
                setTimeout(() => {
                        setitems(items_def)
                            setWin(false)
                }, 4000);
            }
        })
          
        }


        const setValue = (id) => {
                const idx = items.findIndex(el => el.id === id)
                    const newItem = {value:flag?"X":"O",id:id}
                        const newArr = [...items.slice(0,idx),newItem,...items.slice(idx+1)]
                            if(items[idx].value === null){
                                setitems(newArr)
                                setFlag(!flag)
                            }
            chechWinner()
        }
        const onTryAgain = () =>{
            setitems(items_def)
        }
        
        return (
               <div className="cntn">
                            {win?<span className="winner_name text-success">Winner is {winnerName}</span>:null}
                         <div className='tic_tac_toe'>
                    {items.map(({value,id}) =>{
                        return (
                                <div 
                                    onClick = {()=>setValue(id)} 
                                    className='tic_tac_item'
                                    key = {id}
                                >   
                                {value}
                                </div>
                            )
                    })}
                    <button className="btn btn-outline-success"
                            onClick = {onTryAgain}
                    >Try Again</button>
                </div>

               </div>
        )
}

export default TicTacToe