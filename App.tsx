import React from 'react';
import './App.css';

const App: React.FC = () => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    alert("This is an email: xaadahsani1@gmail.com");
  };

  return (
    <div className="container">
      <div className="header">
        <div className="left-section">
          <h1>Saad Ahsan (PMP)®</h1>
          <p>
            +92332-368-2212 |{' '}
            <a href="mailto:xaadahsani1@gmail.com" className="email-link" onClick={handleClick}>
              xaadahsani1@gmail.com
            </a>{' '}
            | Flat # D9/6 Afnan Duplex Houses Gulistan-e-Johar
          </p>
          <p>
            <span className="ats-tag">PMP Certified</span> |{' '}
            <span className="ats-tag">Experienced Professional</span> -{' '}
            <span className="ats-tag">E-commerce platforms</span> | <span className="ats-tag">Startups</span> |{' '}
            <span className="ats-tag">X-foodpanda</span> | <span className="ats-tag">Salesforce</span>
          </p>
          <p>
            <span className="ats-tag">Digital marketing</span> |{' '}
            <span className="ats-tag">Web analytics tools</span> | <span className="ats-tag">SQL</span> |{' '}
            <span className="ats-tag">Jira</span> | <span className="ats-tag">Trello</span> |{' '}
            <span className="ats-tag">Asana</span> | <span className="ats-tag">UI/UX design</span> |{' '}
            <span className="ats-tag">Wireframing</span> | <span className="ats-tag">SEO tools</span>
          </p>
          <p>
            <span className="ats-tag">Action oriented</span> | <span className="ats-tag">Dynamic</span> |{' '}
            <span className="ats-tag">Team Player</span> | <span className="ats-tag">Master’s in Project Management</span> |{' '}
            <span className="ats-tag">Service Design Expertise</span>
          </p>
        </div>
        <div className="profile-pic">
          <img src={`${process.env.PUBLIC_URL}/capture.PNG`} alt="Profile" className="profile-image" />
        </div>
      </div>

      <div className="profile-section">
        <h2>Profile:</h2>
        <ul>
          <li>Expert at enhancing search and findability, optimizing delivery fees, and automating tasks</li>
          <li>Qualified Project Management Professional: PMP from PMI and Master’s in Project Management</li>
          <li>Proven track record in Project Management, data analysis, E-commerce & salesforce management</li>
        </ul>
      </div>

      <div className="career-summary">
        <h2>Career Summary</h2>
        <table>
            <tr>
              <th>Organization</th>
              <th>Position</th>
              <th>From</th>
              <th>To</th>
            </tr>

          <tbody>
            <tr>
              <td>Siar Digital</td>
              <td>Assistant Project Manager</td>
              <td>June 2023</td>
              <td>To date</td>
            </tr>
            <tr>
              <td>FoodPanda</td>
              <td>Content Associate</td>
              <td>April 2019</td>
              <td>June 2023</td>
            </tr>
            <tr>
              <td>Apexchat (Now Breakthru)</td>
              <td>Territory Manager</td>
              <td>March 2017</td>
              <td>April 2019</td>
            </tr>
            <tr>
              <td>Pinnacle Enterprises</td>
              <td>Customer Service Representative</td>
              <td>Dec 2015</td>
              <td>Feb 2017</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
