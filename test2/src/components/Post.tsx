import React from 'react'
function Page({item , currVal, posts}) {
  // let res = `${item.title.slice(0,item.title.search(currVal))}` + '<mark>' + `${currVal}` + '</mark>' + `${item.title.slice(item.title.search(currVal) + currVal.length,item.title.length)}`
  // let HTML = document.querySelectorAll('.title')
  // let arrMarked = [...HTML]
  // console.log(arrMarked)
  // arrMarked.map((item)=> item.innerHTML = res)

  
  return (
    <div className="postCard">
        <span className="id">{item.id}</span>
        <h2 className="title">{item.title}</h2><br></br>
        {item.body}
    </div>
  )
}

export default Page