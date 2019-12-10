import React from 'react'

export const Pricing = () => {
    return (
<div classNameName="container">
      <h1 className="display-4">Pricing</h1>
      <hr />
      <main>

        <h1 className="mb-3 mb-sm-5 text-center">Pricing table</h1>
        <div className="row">
          <div className="col-12 col-md-4 mb-4">
            <div className="card card-outline-success text-center">
              <div className="card-header bg-success text-white">
                <h2>Personal</h2>
                <h4>$19.99 / year</h4>
              </div>
              <div className="card-body">
                <p className="card-text text-left">Perfect if you have your own personal App.</p>
              </div>
              <ul className="list-group small">
                <li className="list-group-item">500 Tasks Storage</li>
                <li className="list-group-item">Reminders</li>
                <li className="list-group-item">Automatic backups</li>
                <li className="list-group-item">2 Themes</li>
              </ul>
              <div className="card-footer">
                <button type="button" className="btn btn-success btn-lg">Select</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card card-outline-warning text-center">
              <div className="card-header bg-warning text-white">
                <h2>Premium</h2>
                <h4>$49.99 / year</h4>
              </div>
              <div className="card-body">
                <p className="card-text text-left">Perfect if you're running several copies for a group of people.</p>
              </div>
              <ul className="list-group small">
                <li className="list-group-item">2000 Tasks Storage</li>
                <li className="list-group-item">Reminders</li>
                <li className="list-group-item">Automatic backups</li>
                <li className="list-group-item">5 Themes</li>
                <li className="list-group-item">Enhanced performance</li>
              </ul>
              <div className="card-footer">
                <button type="button" className="btn btn-warning btn-lg">Select</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 mb-4">
            <div className="card card-outline-danger text-center">
              <div className="card-header bg-danger text-white">
                <h2>Enterprise</h2>
                <h4>$199.99 / year</h4>
              </div>
              <div className="card-body">
                <p className="card-text text-left">Perfect if you're a big company with many employees.</p>
              </div>
              <ul className="list-group small">
                <li className="list-group-item">100 000 Tasks Storage</li>
                <li className="list-group-item">Reminders</li>
                <li className="list-group-item">Automatic backups</li>
                <li className="list-group-item">25 Themes</li>
                <li className="list-group-item">Enhanced performance</li>
                <li className="list-group-item">24/7 online support</li>
              </ul>
              <div className="card-footer">
                <button type="button" className="btn btn-danger btn-lg">Select</button>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
    )
}