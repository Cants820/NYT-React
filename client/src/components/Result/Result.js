import React from "react";
import Article from '../Article';

const Results = props => 

<div className='container'>
  <div className='row'>
    <div className='col-lg-12'>
      <div className='panel panel-primary'>
        <div className='panel-heading'>
          <h3 className='panel-title'>
            <strong>
              Results
            </strong>
          </h3>
        </div>
        <div className='panel-body'>
        {props.articles.map((article, index) => (
          <Article 
            headline= {article.headline.main}
            published = {article.pub_date}
            url = {article.web_url}
            key = {index}
            />
          ))
        }
        </div>
      </div>
    </div>
  </div>
</div>

export default Results;