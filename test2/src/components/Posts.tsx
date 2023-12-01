import React from 'react'
import Page from './Post';
import Loading from './Loading';
import { useSearchParams } from 'react-router-dom';
import '../index.css'

function Pages() {
  const [posts, setPosts] = React.useState([]);
  const [currVal, setCurrVal] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(true);

    let filteredPosts = posts.filter((item)=>item.title.includes(currVal.trim()))
  const requestHTML = 'https://jsonplaceholder.typicode.com/posts'
  React.useEffect(()=>{
    fetchData()
  },[])
    const fetchData = async () => {
      setIsLoading(true)
        await fetch (requestHTML)
        .then((res)=> res.json())
        .then((data) => {setPosts(data);setIsLoading(false)})
        .catch((err)=> console.log(err))
    }
  return (
    <div>
      <div className='formDiv'>
        <form className="form">
          <input 
           type="text"
           placeholder='Введите пост'
           className="serch_input"
           onChange={(e)=>{setCurrVal(e.target.value)}}
           >

          </input>
        </form>

      </div>
      <div className='postsWrapper'>
      {isLoading ? <Loading/> :filteredPosts.map((item)=><Page posts={posts} key={item.id} item={item} currVal={currVal}/>)}
      </div>
       
    </div>
  )
}

export default Pages