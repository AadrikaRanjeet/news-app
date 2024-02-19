import React from 'react'

const NewsItem =(props)=> {
 
  
    let{title,description,imageUrl,newsUrl,author,date}=props;
 
    return (
      <div>
       <div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://images.wsj.net/im-905949/social":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-body-secondary">By{!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl}target='_blank' className="btn btn-sm"style={{backgroundColor:'skyblue',color:'black'}}>Read More</a>
  </div>
</div>

      </div>
    )

}

export default NewsItem
