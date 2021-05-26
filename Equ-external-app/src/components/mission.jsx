import React from 'react';
export const Mission = (props) => {
  return (
    <header id='mission'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                {props.data ? props.data.title : ''}
                </h1>
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


    {/* <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  <img src="../img/header_center_logo.png" />
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> */}