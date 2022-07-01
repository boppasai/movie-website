import React from 'react'

const Food=[
    {
        id:1,
        name:"rupendra",
    },
    {
        id:2,
        name:"x",
    },
    {
        id:3,
        name:"y",
    },
];
const TrailMap=Food.map((Done)=>{
    const{id,name}=Done;
    return(
        <>
        <h1>your id is{id}</h1>
        <h3>have a niceday {name}</h3>
        </>
    )
});
const ForTest = () => {
  return (
    <section>{TrailMap}</section>
  )
}

export default ForTest