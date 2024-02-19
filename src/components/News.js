import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News =(props)=>{
  
//   articles=  [
//     {
//         "source": {
//             "id": "news-com-au",
//             "name": "News.com.au"
//         },
//         "author": "Tyson Otto",
//         "title": "‘Oh no’: Aussie legend in mortifying moment",
//         "description": "Aussie cricket legend Mark Waugh must have wanted a hole to crawl into after being the victim of one of the great stitch-ups on Day 4 of the Boxing Day Test.",
//         "url": "https://www.news.com.au/sport/cricket/oh-no-mark-waugh-in-mortifying-stitch-up-as-table-turned/news-story/7653ed216859c66401d13a0b49d2e249",
//         "urlToImage": "https://content.api.news/v3/images/bin/fe6cd569552a19ced0f5cf441b995f1e",
//         "publishedAt": "2023-12-29T00:40:00Z",
//         "content": "Aussie cricket legend Mark Waugh must have wanted a hole to crawl into after being the victim of one of the great stitch-ups on Day 4 of the Boxing Day Test.\r\nWaugh turned a flamethrower on Pakistan … [+3742 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//         "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//         "publishedAt": "2020-04-27T11:41:47Z",
//         "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//     },
//     {
//         "source": {
//             "id": "espn-cric-info",
//             "name": "ESPN Cric Info"
//         },
//         "author": null,
//         "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//         "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//         "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//         "publishedAt": "2020-03-30T15:26:05Z",
//         "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//     }
// ]
const [articles,setArticles]=useState([])
const [loading,setLoading]=useState(true)
const [page,setPage]=useState(1)
const [totalResults,settotalResults]=useState(0)
const capitalizeFirstletter =(string)=>
{
  return string[0].toUpperCase() + string.slice(1);
}
  
   document.title=`${props.category} - TheCurrent`;
  const UpdateNews=async()=>
  {
    console.log("cdm");
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f485c2d044094164a99f51ff359a6bbc`;
    setLoading(true);
    let data=await fetch(url);
    let parsedData=await data.json();
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)
    // setState(
    //   {articles:parsedData.articles,
    //     totalResults:parsedData.totalResults,
    //     loading:false
    // })
  }
  useEffect(()=>
  {
    UpdateNews();
  },[])
  
   
 const HandlePrevClick=async()=>
  {
   
    setPage(page-1)
    UpdateNews();
    
    
  }
  const HandleNextClick=async()=>
  {
    setPage(page+1)
    UpdateNews();
    
    
  }
   
    return (
      <div className='container my-3'>
     
       <h3 className="text-center" style={{ color: 'skyblue', marginTop:'90px' }}>TheCurrent : 
       <span style={{ color: 'black' }}>Top Headlines <h4 style={{display:'inline'}}>from </h4>{capitalizeFirstletter(props.category)}</span></h3>
       
        {loading&&<Spinner/>};
       <div className="row my-5">
       {articles.map((element)=>{
          return <div className="col md 3"key={element.url}>
           <NewsItem title={element.title?element.title:""} newsUrl={element.url} description={element.description?element.description:""} 
           imageUrl={element.urlToImage} author={element.author} date={element.publishedAt}/>
           </div>
       })}
       </div>
       <div className="container  my-5 d-flex justify-content-between">
        <button disabled={page<=1} type="button" className="btn btn-dark"onClick={HandlePrevClick}>&larr;Previous</button>
      <button disabled={page+1>Math.ceil(totalResults/23)} type="button" className="btn btn-dark"onClick={HandleNextClick}>Next	&rarr;</button>
      </div>
      </div>
     
    )
 
}
News.defaultProps={
  country:'in',
  pageSize:12,
  category:'general',
  }
  News.propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
export default News
