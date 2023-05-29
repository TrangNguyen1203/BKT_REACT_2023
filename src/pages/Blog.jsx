import React from 'react';

const Blog = () => {
    const data = [
        {
            id: 1,
            name: "React",
            title: "Leart React",
            founded: "create at 2023-29-5"
        },
        {
            id: 2,
            name: "Node",
            title: "Leart Node",
            founded: ""
        }
    ]
    return (
        <div className='blog'>
            <button className='btn' style={{float:"right"}}>create</button>
            {data.length ? data.map((item) => {
                return (
                    <div key={item.id} className='itemBlog'>
                        <h1>{item.name}</h1>
                        <h2>{item.title}</h2>
                        <p>{item.founded}</p>
                        <p>
                            <button className='btn'>edit</button>
                            <button className='btn'>delete</button>
                        </p>
                    </div>
                )
            }): <div>Dữ liệu trống ...</div>
            }
        </div>
    );
};

export default Blog;