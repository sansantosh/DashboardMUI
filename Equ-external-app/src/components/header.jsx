import React from 'react';
export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
              </div>
              <div className='missionWrapper'>
                <h4>
                  {props.data ? props.data.title : ''}
                </h4>
                <span>
                  {props.data ? props.data.statement : ''}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}