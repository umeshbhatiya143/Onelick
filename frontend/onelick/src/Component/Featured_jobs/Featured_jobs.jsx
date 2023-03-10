import React, { useState, useEffect } from 'react'
import './Features_jobs.css'
import { BsBriefcase } from 'react-icons/bs';
import { TbClockHour4 } from 'react-icons/tb';
import { CiLocationOn } from 'react-icons/ci';
import { GiCash } from 'react-icons/gi';
import { BiBookmark } from 'react-icons/bi';
import logoImg from '../../assets/company_logo1.png'
import Data from "../../Json_data/job.json"


const Featured_jobs = () => {

    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
    // console.log(Data)

    return (
        <div id='Featured_container'>
            <div className='Featured_jobs_categories_hld'>
                <div className="featured_job_title_hld">
                    <h1>Featured Jobs</h1>
                    <p>Know your Worth and find the job that qualify your life</p>
                </div>
                <div className="featured_categories_hld">
                    <select name="" id="featured_categories">
                        <option value="">All Categories</option>
                        <option value="">category 1</option>
                        <option value="">category 2</option>
                        <option value="">category 3</option>
                    </select>
                </div>
            </div>
            <div className='Featured_jobs_hld'>
                { Data && Data.map((data)=>{ 
                    return (
                    <div key={data.id} id="Featured_jobs">
                        <div className="company_logo">
                            <img src={`${data.image}`} alt="" />
                        </div>
                        <div className="job_content_hld">
                            <h3>{data.title}</h3>
                            <ul className="job_details_row1">
                                <li>
                                    <BsBriefcase size={20} className="job_icon" />
                                    <p>{data.jobProfile}</p>
                                </li>
                                <li>
                                    <CiLocationOn size={20} className="job_icon" />
                                    <p>{data.location}</p>
                                </li>
                                <li>
                                    <TbClockHour4 size={20} className="job_icon" />
                                    {/* replace the logic by subtracting current time and data */}
                                    <p>{data.postedTime}</p>
                                </li>
                                <li>
                                    <GiCash size={20} className="job_icon" />
                                    <p>{data.salary}</p>
                                </li>
                            </ul>
                            <ul className="job_details_row2">
                                <li style={{ backgroundColor: "rgba(25,103,210,.15)", color: "rgb(25 103 210)" }}>
                                    {data.employementType}
                                </li>
                                <li style={{ backgroundColor: "rgba(52,168,83,.15)", color: "#34a853" }}>
                                    {data.mode}
                                </li>
                                <li style={{ backgroundColor: "#FEF2D9", color: "#FAAB00" }}>
                                    {data.requirement}
                                </li>
                            </ul>
                        </div>
                        <div className="addToFavourite">
                        <BiBookmark size={20} />
                        </div>
                    </div>
                 ) })
                }
            </div>
            <div className="load_more_button">
                <button>Load More Listing</button>
            </div>
        </div>
    )
}

export default Featured_jobs
