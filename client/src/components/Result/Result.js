import React from "react";
import Article from '../Article';

const Result = props => (
  <div className='container'>
    <div className='panel panel-primary'>
      <div className='panel-heading'>
        <h3 className='panel-title'>
          <strong>
            Results
          </strong>
        </h3>
      </div>
      <div className='panel-body'>
      {props.articles.map((article, index) =>(
        <Article 
          headline = {article.headline.main}
          published = {article.pub_date}
          url = {article.web_url}
          key = {index}
        />
        ))
      }
      </div>
    </div>
  </div>
);

export default Result;