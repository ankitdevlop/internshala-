import React, { useEffect } from 'react'
import { useState } from 'react'

import axios from 'axios'
import { Link } from 'react-router-dom'
function Job() {
    const [currentSlide,setCurrentSlide]=useState(0)
    const [selectedCategory,setSelectedCategory]= useState("Big Brands")
    const [JobData, setJobData]=useState([])

    useEffect(()=>{
        const fetchData= async()=>{
            try {
            const response= await axios.get(`https://internshipbackend-vwja.onrender.com/api/job`)
            setJobData(response.data)
        } catch (error) {
               console.log(error) 
        }
    }
    fetchData();
    },[])

    const handleJob=(direction)=>{
        const contianer=document.getElementById("container3");
        const step=100;
        if (direction==='left') {
            setCurrentSlide((preveSlibe)=>(preveSlibe>0 ?preveSlibe-1:0))
        }
        else{
            setCurrentSlide((preveSlibe)=>(preveSlibe<3 ?preveSlibe+1:3))
        }
        sideScrollJob(contianer, direction, 25, step, 10)
    }
    const filterInternShips=JobData.filter((item)=>
    !selectedCategory ||item.category === selectedCategory
)
  return (
    <div>
 
    <div className="info-intern mt-12">
    
        <div className="categories flex flex-wrap mt-14">
<p>POPULAR CATEGORIES :</p>
<span className={`category mr-4 ml-6 ${ selectedCategory==='Big Brands'?'bg-blue-500 text-white':""}`} onClick={()=>setSelectedCategory('Big Brands')}>Big Brands</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Work From Home"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Work From Home")}>Work From Home</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Part-time"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Part-time")}>Part-time</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="MBA"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("MBA")}>MBA</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Engineering"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Engineering")}>Engineering</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="media"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("media")}>Media</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Design"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Design")}>Design</span>
<span className={`category mr-4 ml-6 ${selectedCategory==="Data Science"?'bg-blue-500 text-white':
""}`} onClick={()=>setSelectedCategory("Data Science")}>Data Science</span>
        </div>
        </div>
        <div className="internships" id='container3'>
<div className="internShip-Info flex">
{
filterInternShips.map(( data,index)=>(
      
        <div className="int-1 mt-6" key={index}>
<p className='mb-4 mt-3' id='boxer'> <i className='bi bi-arrow-up-right text-blue-500' ></i> Actively Hiring</p>
<p>{data.title}</p>
<small className='text-slate-400 text-sm'>{data.company}</small>
   
        <hr className='mt-5' />
        <p className='mt-3' ><i class="bi bi-geo-alt-fill"></i> {data.location}  </p>
        <p className='mt-1'> <i class="bi bi-cash-stack"></i> {data.CTC}</p>
        <p className='mt-1'><i class="bi bi-calendar-fill"></i> {data.Experience}</p>
        <div className='more flex justify-between mt-6'>
            <span className='bg-slate-200 text-slate-400 w-20 rounded-sm text-center'>Job</span>
  <Link to={`detailjob?q=${data._id}`}>
   <span className='text-blue-500 mr-2'> 
View details <i class="bi bi-chevron-right"></i>
   </span></Link>
        </div>
        </div>
        
        
    ))
}

</div>
        </div>
<div className="flex BUttons mt-9">
<button className='back' onClick={()=>handleJob('left')}> <i className='bi bi-chevron-left' id='sideBack'></i></button>
<button  className="next" onClick={()=>handleJob('right')}> <i className='bi bi-chevron-right' id='slide'></i></button>
</div>
    </div>
  
  )
}

export default Job
function sideScrollJob(element, direction,speed,distance,step){
    let scrollAmount=0;
    const slideTimer=setInterval(function(){
        if (direction==='left') {
            element.scrollLeft-=step
        }
        else{
            element.scrollLeft+=step
        }
        scrollAmount+=step;
        if(scrollAmount>=distance){
            window.clearInterval(slideTimer)
        }
    },speed)
}