import React from 'react'
import TrendingTab from './TrendingTab'

const CategoryTrending = () => {
    const trendingData = [
  { id: "1", category: "Trending", location: "India", title: "#DummyPiece_StalinBro" },
  { id: "2", category: "Trending", location: "India", title: "#TNSays_ByeByeStalin" },
  { id: "3", category: "Politics", location: "Trending", title: "#NDAWithTamilNadu" },
  { id: "4", category: "Politics", location: "Trending", title: "#BJPAdimaiEPS" },
  { id: "5", category: "Trending", location: "India", title: "#DMKBackstabsWomen" },
  { id: "6", category: "Entertainment", location: "Trending", title: "Himesh Reshammiya" },
  { id: "7", category: "Politics", location: "Trending", title: "DMK and MK Stalin" },
  { id: "8", category: "Trending", location: "India", title: "राजस्थान प्रशासनिक सेवा" },
  { id: "9", category: "Music", location: "Trending", title: "FOR YOU" },
  { id: "10", category: "Sports", location: "Trending", title: "KL Rahul" },

  { id: "11", category: "Sports", location: "Trending", title: "Lungi Ngidi" },
  { id: "12", category: "Trending", location: "India", title: "प्रियंका गांधी" },
  { id: "13", category: "Trending", location: "India", title: "RAS 2024" },
  { id: "14", category: "Trending", location: "India", title: "दिनेश बिश्नोई" },
  { id: "15", category: "Trending", location: "India", title: "महिला विरोधी" },
  { id: "16", category: "Sports", location: "Trending", title: "Axar" },
  { id: "17", category: "Politics", location: "Trending", title: "Women's Bill" },
  { id: "18", category: "Sports", location: "Trending", title: "Match 26" },
  { id: "19", category: "Technology", location: "Trending", title: "Snapdragon 7s Gen 4" },
  { id: "20", category: "Trending", location: "India", title: "पूर्व मंत्री" },

  { id: "21", category: "Trending", location: "India", title: "राजस्थान लोक सेवा आयोग" },
  { id: "22", category: "Trending", location: "India", title: "अर्पण यादव" },
  { id: "23", category: "Politics", location: "Trending", title: "Women's Reservation" },
  { id: "24", category: "Technology", location: "Trending", title: "Active Matrix Display" },
  { id: "25", category: "Music", location: "Trending", title: "THANK YOU BTS" },
  { id: "26", category: "Trending", location: "India", title: "पब्लिक ट्रांसपोर्ट" },
  { id: "27", category: "Trending", location: "X Only", title: "तारों टॉप" },
  { id: "28", category: "Trending", location: "India", title: "सीएम रेखा गुप्ता" },
  { id: "29", category: "Trending", location: "India", title: "Sikkim" },
  { id: "30", category: "Trending", location: "India", title: "Uppal" },
];

  return (
    <div className='px-4 pt-4 flex flex-col gap-4'>
        {trendingData.map((item) => {
            return <TrendingTab key={item.id} id={item.id} category={item.category} location={item.location} title={item.title}/>
        })}
        <div className='h-70'></div>
    </div>
  )
}

export default CategoryTrending