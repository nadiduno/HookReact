import { useEffect, useState } from 'react'

function avisarAPI(){
  console.log('Lista Salva')
}
export function App() {
  const [list, setList] = useState<string[]>([])
  const [filter, setFilter] =useState('') 

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

  const filteredList = list.filter(item => item.includes(filter))

  function addToList() {
    setList(state => [...state,'Novo item'])
  }
  return (
    <>
      <div>
        <input
          type='text'
          onChange={e => setFilter(e.target.value)}
          value={filter}
        />
        
        <ul>
          {list.map(item => <li>{item}</li>)}
        </ul>

        <ul>
          {filteredList.map(item => <li>{item}</li>)}
        </ul>

        <button onClick={addToList}>Add to list</button>
      </div>
    </>
  )
}