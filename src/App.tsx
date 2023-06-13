import { useEffect, useState } from 'react'

function avisarAPI(){
  console.log('Lista Salva')
}
export function App() {
  const [list, setList] = useState<string[]>([])
  
  useEffect(() => {
    if (list.length != 0)
      avisarAPI()
  },[list])

  useEffect(() => {
    fetch('https://api.github.com/users/nadiduno/repos')
    .then(response => response.json())
    .then(data => {
      setList(data.map((item: []) => item.full_name))
    })
  },[])

  function addToList() {
    setlist(state => [...state,'Novo item'])
  }
  return (
    <>
      <div>
        <ul>
          {list.map(item => <li>{item}</li>)}
        </ul>
        <button onClick={addToList}>Add to list</button>
      </div>
    </>
  )
}