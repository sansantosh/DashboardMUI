import React from 'react';
export const Career = (props) => {
  const openWindow = () => {
    let windowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes";
    window.open("https://jobs.climatebase.org/company/18693/equilibrium-energy?ref=climatebase_orgs", "equilibrium", windowFeatures);
  }
  return (
    <div id='career'>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-6'>
            {' '}
            <img src='img/about.jpg' className='img-responsive' alt='' />{' '}
          </div>
          <div className='col-xs-12 col-md-6'>
            <div className='about-text'>
              <h2>Careers</h2>
              <h3>Equilibrium Energy is hiring! </h3>
              <div className='list-style'>
                <div className='col-lg-6 col-sm-6 col-xs-12'>
                <button type='submit' className='btn btn-custom btn-sm' onClick={openWindow}>
                  View our open roles
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
