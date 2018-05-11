import React from "react";

class Profiles extends React.Component {
  render() {
    return (
      <section id="profiles-container">
        <h2>Profiles</h2>
        <ul id="profiles">
          {this.props.listings.map(listing => {
            return (
              <li key={listing.title}>
                <div className="profile-card">
                  <header class="profile-header">
                    <img src={listing.image} alt="listingimg"/>
                    <h2>{listing.name}</h2>
                  </header>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Profiles;
