import React from 'react';

const CreateBlog = () => {
    return (
        <div>
            <div className="groupItem">
                <label htmlFor="title">Title</label> <br />
                <input type="text" name='title' className="inp" placeholder='title' />
            </div>
            <div className="groupItem">
                <label htmlFor="content">Content</label> <br />
                <area type="text" name="content" className="inp" placeholder='content' />
            </div>
            <div className="groupItem">
                <button className='btn'>create</button>
            </div>
        </div>
    );
};

export default CreateBlog;